$path = "src/data/notes.json"
$data = Get-Content -Raw $path | ConvertFrom-Json
$patterns = @('敘述統計','隨機變數','常態分配','t分配','卡方分配','F分配','卜瓦松分配','中央極限定理','抽樣','假設檢定','POWER及取樣個數','相依樣本t檢定','獨立樣本t檢定','母體變異數的推論','OR\(Odds ratio\)','RR\(Relative risk\)','卡方獨立性檢定','葉茲連續校正','費雪exact法','^ANOVA','簡單迴歸分析','費雪轉換','R-SQUARE','R-Square')
foreach ($chapter in $data.chapters) {
  foreach ($block in $chapter.blocks) {
    if ($block.type -ne 'paragraph' -or $block.text.Length -gt 75) { continue }
    foreach ($pattern in $patterns) {
      if ($block.text -match "^$pattern(?:\s|\(|$)") { $block.type = 'heading'; break }
    }
  }
}
$data | ConvertTo-Json -Depth 12 | Set-Content -Encoding utf8 $path
