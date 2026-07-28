export const varianceInference = [
  { type: "paragraph", text: "母體變異數的推論用來回答資料的分散程度是否符合指定標準，或兩個母體的變異數是否相同。若資料來自常態母體，單一母體變異數可以利用卡方分配推論；兩個獨立母體變異數的比值則可以利用 F 分配推論。" },
  { type: "callout", tone: "forward", label: "本頁的兩個問題", text: "單一母體變異數卡方檢定比較 σ² 與指定值 σ₀²；兩母體變異數 F 檢定比較 σ₁² 與 σ₂²。後者和 pooled t 的等變異假設有關，但兩種變異數檢定都不是每次平均數比較前必做的固定程序。" },

  { type: "heading", text: "單一母體變異數的卡方檢定" },
  { type: "paragraph", text: "若研究問題是檢定一個常態母體的變異數是否等於指定值 σ₀²，可以利用樣本變異數與卡方分配的關係。例如生產產品時，希望變異數維持在較小範圍，使產品具有高度一致性；若產品差異過大，品質與消費者權益都可能受到影響。" },

  { type: "heading", text: "建立假設" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾檢定", latex: "H_0:\\sigma^2=\\sigma_0^2,\\qquad H_1:\\sigma^2\\ne\\sigma_0^2", fallback: "H₀: σ²=σ₀²；H₁: σ²≠σ₀²" },
    { label: "左尾檢定", latex: "H_0:\\sigma^2\\geq\\sigma_0^2,\\qquad H_1:\\sigma^2<\\sigma_0^2", fallback: "H₀: σ²≥σ₀²；H₁: σ²<σ₀²" },
    { label: "右尾檢定", latex: "H_0:\\sigma^2\\leq\\sigma_0^2,\\qquad H_1:\\sigma^2>\\sigma_0^2", fallback: "H₀: σ²≤σ₀²；H₁: σ²>σ₀²" }
  ] },
  { type: "paragraph", text: "若目標是確認製程變異是否超過容許上限，通常關心右尾檢定；若只是確認變異是否偏離指定值，則使用雙尾檢定。" },

  { type: "heading", text: "卡方統計量如何形成？" },
  { type: "paragraph", text: "假設 X₁,…,Xₙ 為來自常態母體 N(μ,σ²) 的獨立樣本。母體平均數 μ 已知時，以 μ 為中心的標準化平方和有 n 個自由度；μ 未知而以樣本平均數 X̄ 估計後，會損失一個自由度。" },
  { type: "formulaGroup", formulas: [
    { label: "μ 已知時", latex: "\\frac{\\sum_{i=1}^{n}(X_i-\\mu)^2}{\\sigma^2}\\sim\\chi_n^2", fallback: "Σ(Xᵢ−μ)²/σ² ~ χ²(n)" },
    { label: "以 X̄ 估計 μ 後", latex: "\\frac{\\sum_{i=1}^{n}(X_i-\\bar X)^2}{\\sigma^2}\\sim\\chi_{n-1}^2", fallback: "Σ(Xᵢ−X̄)²/σ² ~ χ²(n−1)" },
    { label: "利用 (n−1)S²=Σ(Xᵢ−X̄)²", latex: "\\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi_{n-1}^2", fallback: "(n−1)S²/σ² ~ χ²(n−1)" },
    { label: "H₀ 下的觀察統計量", latex: "\\chi_{\\mathrm{obs}}^2=\\frac{(n-1)S^2}{\\sigma_0^2}", fallback: "χ²obs=(n−1)S²/σ₀²" }
  ] },

  { type: "heading", text: "雙尾檢定的拒絕域" },
  { type: "formula", latex: "\\chi_{\\mathrm{obs}}^2<\\chi_{\\alpha/2,\\,n-1}^2\\quad\\text{或}\\quad\\chi_{\\mathrm{obs}}^2>\\chi_{1-\\alpha/2,\\,n-1}^2", fallback: "χ²obs<χ²α/2,n−1 或 χ²obs>χ²1−α/2,n−1" },
  { type: "paragraph", text: "統計量落在左側或右側的極端拒絕域時，代表樣本變異數相對於 H₀ 指定的 σ₀² 過小或過大。若用已知母體變異數檢查抽樣結果，極端結果也可能表示這批樣本的代表性較低；在品質管理中，則通常直接關心變異是否超過可接受範圍。" },

  { type: "heading", text: "兩個母體變異數的 F 檢定" },
  { type: "paragraph", text: "若有兩個互相獨立的常態母體，可以使用兩組樣本變異數的比值，檢定兩個母體變異數是否相同。" },
  { type: "formulaGroup", formulas: [
    { label: "變異數相等的假設", latex: "H_0:\\sigma_1^2=\\sigma_2^2,\\qquad H_1:\\sigma_1^2\\ne\\sigma_2^2", fallback: "H₀: σ₁²=σ₂²；H₁: σ₁²≠σ₂²" },
    { label: "改寫成變異數比", latex: "H_0:\\frac{\\sigma_1^2}{\\sigma_2^2}=1,\\qquad H_1:\\frac{\\sigma_1^2}{\\sigma_2^2}\\ne1", fallback: "H₀: σ₁²/σ₂²=1；H₁: σ₁²/σ₂²≠1" },
    { label: "F 統計量", latex: "F=\\frac{S_1^2}{S_2^2}\\sim F_{n_1-1,\\,n_2-1}\\qquad(H_0\\text{ 成立時})", fallback: "F=S₁²/S₂² ~ F(n₁−1,n₂−1)（H₀ 成立時）" }
  ] },
  { type: "paragraph", text: "得到 F 值後，可查 F 分配表或由電腦計算 p 值，再判斷是否拒絕兩母體變異數相等的虛無假設。交換分子與分母會使 F 變成 1/F，兩個自由度的位置也要一起交換。" },

  { type: "heading", text: "F 檢定為什麼由兩個卡方變數形成？" },
  { type: "paragraph", text: "兩組常態樣本的變異數各自標準化後，都會形成卡方變數。在 H₀: σ₁²=σ₂²=σ² 下，將兩個卡方變數各自除以自由度後相除，共同的 σ² 會消去，最後只留下樣本變異數比。" },
  { type: "formulaGroup", formulas: [
    { label: "第 1 組的卡方變數", latex: "U_1=\\frac{(n_1-1)S_1^2}{\\sigma^2}\\sim\\chi_{n_1-1}^2", fallback: "U₁=(n₁−1)S₁²/σ² ~ χ²(n₁−1)" },
    { label: "第 2 組的卡方變數", latex: "U_2=\\frac{(n_2-1)S_2^2}{\\sigma^2}\\sim\\chi_{n_2-1}^2", fallback: "U₂=(n₂−1)S₂²/σ² ~ χ²(n₂−1)" },
    { label: "各自除以自由度後取比值", latex: "\\frac{U_1/(n_1-1)}{U_2/(n_2-1)}=\\frac{S_1^2}{S_2^2}\\sim F_{n_1-1,\\,n_2-1}", fallback: "[U₁/(n₁−1)]/[U₂/(n₂−1)]=S₁²/S₂² ~ F(n₁−1,n₂−1)" }
  ] },

  { type: "heading", text: "與 pooled t、Welch t 的關係" },
  { type: "table", rows: [
    ["方法", "研究問題", "變異數設定"],
    ["單一母體變異數 χ² 檢定", "σ² 是否等於指定的 σ₀²？", "一個常態母體"],
    ["兩母體變異數 F 檢定", "σ₁² 是否等於 σ₂²？", "兩個獨立常態母體"],
    ["Pooled t 檢定", "μ₁ 是否等於 μ₂？", "額外假設 σ₁²=σ₂²"],
    ["Welch t 檢定", "μ₁ 是否等於 μ₂？", "不要求 σ₁²=σ₂²"]
  ] },
  { type: "callout", tone: "intuition", label: "不要把兩種檢定問題混在一起", text: "F 檢定的 H₀ 是兩組變異數相同；pooled t 的 H₀ 則是兩組平均數相同。Pooled t 會使用等變異模型，但不代表兩個檢定具有相同的虛無假設。" },
  { type: "callout", tone: "forward", label: "實務上不一定先做 F 檢定", text: "傳統流程會先檢定變異數是否相同，再選擇 pooled 或不等變異數公式；但 F 檢定對偏離常態相當敏感，而且先檢定再選方法會改變整體推論程序。現代實務常直接使用對變異數不等較穩健的 Welch t 檢定，除非研究模型有充分理由假設等變異。" }
];
