param(
  [string]$InputFile = "生物統計學習筆記及心得(總).docx",
  [string]$OutputFile = "app/notes-data.json"
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.IO.Compression.FileSystem

$chapterMeta = @(
  @{ id = "01"; marker = "第一章"; title = "統計學的基本概念"; en = "Foundations of Statistics"; ja = "統計学の基礎" },
  @{ id = "02"; marker = "第二章"; title = "隨機變數的機率分配"; en = "Probability Distributions"; ja = "確率分布" },
  @{ id = "03"; marker = "第三章"; title = "檢定的基本概念"; en = "Foundations of Hypothesis Testing"; ja = "検定の基礎" },
  @{ id = "04"; marker = "第四章"; title = "Z 檢定與 t 檢定"; en = "Z Tests and t Tests"; ja = "Z検定とt検定" },
  @{ id = "05"; marker = "第五章"; title = "二項分布檢定與 2×2 表"; en = "Binomial Tests and 2×2 Tables"; ja = "二項分布検定と2×2表" },
  @{ id = "06"; marker = "第六章"; title = "變異數分析"; en = "Analysis of Variance"; ja = "分散分析" },
  @{ id = "07"; marker = "第七章"; title = "迴歸分析"; en = "Regression Analysis"; ja = "回帰分析" },
  @{ id = "08"; marker = "第八章"; title = "無母數分析"; en = "Nonparametric Analysis"; ja = "ノンパラメトリック分析" },
  @{ id = "09"; marker = "第九章"; title = "存活資料分析"; en = "Survival Analysis"; ja = "生存時間解析" }
)

$sectionTitles = @(
  "統計學導論", "資料的分類", "敘述統計", "隨機變數", "機率密度函數", "隨機變數的機率分配", "自由度",
  "常態分配", "t分配", "卡方分配", "F分配", "指數分配", "二項分配", "卜瓦松分配", "中央極限定理", "抽樣", "Screening test", "ROC curve",
  "假設檢定", "Z值及Z分配檢定", "POWER及取樣個數n的討論", "t檢定", "單一樣本t檢定", "相依樣本t檢定", "獨立樣本t檢定", "母體變異數的推論(卡方檢定)",
  "二項分布檢定", "卡方適合度檢定", "2 BY 2 TABLE", "OR(Odds ratio)", "RR(Relative risk)", "卡方獨立性檢定", "葉茲連續校正", "費雪xact法", "McNemar’s Test",
  "ANOVA", "變異數分析的事後比較", "簡單迴歸分析", "Pearson相關係數r", "費雪轉換", "Comparing correlations in two independent groups", "Spearman’s RHO", "R-Square", "多元迴歸分析",
  "Wilcoxon test", "中位數檢定", "Kruskal-Wallis test", "存活曲線估計", "二組數據的存活曲線相比", "結語"
)

function Get-NodeText($node, $ns) {
  $parts = $node.SelectNodes('.//w:t | .//m:t', $ns) | ForEach-Object { $_.InnerText }
  return (($parts -join '') -replace '\s+', ' ').Trim()
}

function Normalize-Heading([string]$text) {
  return (($text -replace '^\d+\-\d+\s*', '') -replace '\s+', '').Trim()
}

$resolved = Resolve-Path $InputFile
$zip = [IO.Compression.ZipFile]::OpenRead($resolved)
try {
  $entry = $zip.GetEntry('word/document.xml')
  $reader = [IO.StreamReader]::new($entry.Open())
  try { [xml]$xml = $reader.ReadToEnd() } finally { $reader.Dispose() }

  $ns = [Xml.XmlNamespaceManager]::new($xml.NameTable)
  $ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
  $ns.AddNamespace('m', 'http://schemas.openxmlformats.org/officeDocument/2006/math')

  $bodyNodes = $xml.SelectNodes('//w:body/*[self::w:p or self::w:tbl]', $ns)
  $chapterStarts = @{}
  foreach ($chapter in $chapterMeta) { $chapterStarts[$chapter.marker] = 0 }

  for ($i = 0; $i -lt $bodyNodes.Count; $i++) {
    if ($bodyNodes[$i].LocalName -ne 'p') { continue }
    $text = Get-NodeText $bodyNodes[$i] $ns
    if ($chapterStarts.ContainsKey($text)) { $chapterStarts[$text] = $i }
  }

  $chapters = @()
  for ($c = 0; $c -lt $chapterMeta.Count; $c++) {
    $meta = $chapterMeta[$c]
    $start = $chapterStarts[$meta.marker]
    $end = if ($c -lt $chapterMeta.Count - 1) { $chapterStarts[$chapterMeta[$c + 1].marker] } else { $bodyNodes.Count }
    $blocks = @()
    $seenTitle = $false

    for ($i = $start + 1; $i -lt $end; $i++) {
      $node = $bodyNodes[$i]
      if ($node.LocalName -eq 'p') {
        $text = Get-NodeText $node $ns
        if (-not $text) { continue }
        if (-not $seenTitle) { $seenTitle = $true; continue }
        $normalized = Normalize-Heading $text
        $heading = $sectionTitles | Where-Object { (Normalize-Heading $_) -eq $normalized } | Select-Object -First 1
        if ($heading) {
          $blocks += @{ type = 'heading'; text = $text }
        } elseif ($text -match '^補充[一二三四五六七八九十0-9]?' -and $text.Length -lt 90) {
          $blocks += @{ type = 'heading'; text = $text }
        } else {
          $blocks += @{ type = 'paragraph'; text = $text }
        }
      } else {
        $rows = @()
        foreach ($row in $node.SelectNodes('./w:tr', $ns)) {
          $cells = @()
          foreach ($cell in $row.SelectNodes('./w:tc', $ns)) { $cells += (Get-NodeText $cell $ns) }
          if ($cells.Count -gt 0) { $rows += ,$cells }
        }
        if ($rows.Count -gt 0) { $blocks += @{ type = 'table'; rows = $rows } }
      }
    }

    $chapters += @{
      id = $meta.id
      title = $meta.title
      titleEn = $meta.en
      titleJa = $meta.ja
      blocks = $blocks
    }
  }

  $result = @{
    source = [IO.Path]::GetFileName($resolved)
    generatedAt = (Get-Date).ToString('yyyy-MM-dd')
    chapters = $chapters
  }
  $result | ConvertTo-Json -Depth 12 | Set-Content -Encoding utf8 $OutputFile
} finally {
  $zip.Dispose()
}

