export const independentTTest = [
  { type: "paragraph", text: "獨立樣本 t 檢定（independent-samples t test；two-sample t test）用來比較兩群互不相依的樣本，在某個定量變數上的母體平均數是否有差異。同一個觀察單位只能屬於其中一組，兩組資料之間沒有一一配對關係。" },

  { type: "heading", text: "資料形式" },
  { type: "table", rows: [
    ["變數", "資料形式"],
    ["自變數", "兩個獨立且沒有關聯的組別，屬於質的變數"],
    ["依變數", "可合理計算平均數的定量變數"],
    ["比較目標", "兩組母體平均數之差 μ₁−μ₂"]
  ] },
  { type: "paragraph", text: "與相依樣本不同，兩組資料不能逐筆相減。平均數差 X̄₁−X̄₂ 是兩個獨立隨機變數的線性組合，因此其變異數由兩組平均數各自的變異數相加而成。" },
  { type: "formulaGroup", formulas: [
    { label: "平均數差", latex: "D=\\bar X_1-\\bar X_2", fallback: "D=X̄₁−X̄₂" },
    { label: "獨立時，平均數差的變異數", latex: "\\operatorname{Var}(D)=\\operatorname{Var}(\\bar X_1)+\\operatorname{Var}(\\bar X_2)=\\frac{\\sigma_1^2}{n_1}+\\frac{\\sigma_2^2}{n_2}", fallback: "Var(D)=Var(X̄₁)+Var(X̄₂)=σ₁²/n₁+σ₂²/n₂" }
  ] },

  { type: "heading", text: "兩個獨立組別可以如何形成？" },
  { type: "table", rows: [
    ["形成方式", "例子"],
    ["是否接受某種處理", "實驗組與對照組"],
    ["是否具有某種特質或經驗", "有、無國外留學經驗"],
    ["類別變數中的兩個類別", "男性與女性；高中與高職學生"],
    ["某種傾向的高低", "外向者與內向者"]
  ] },

  { type: "heading", text: "檢定情境" },
  { type: "list", items: [
    "比較兩家公司員工對所屬公司的向心力。",
    "比較接受不同教學法的兩班學生之問題解決能力。",
    "比較運動程度多與少的兩組受試者每年感冒次數。",
    "將高血壓患者隨機分派後，分別服用兩種藥物，或一組服用藥物、一組服用安慰劑，一星期後比較血壓值。"
  ] },

  { type: "heading", text: "建立假設" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾：兩組平均數是否不同", latex: "H_0:\\mu_1-\\mu_2=0,\\qquad H_1:\\mu_1-\\mu_2\\ne0", fallback: "H₀: μ₁−μ₂=0；H₁: μ₁−μ₂≠0" },
    { label: "右尾：第 1 組是否較高", latex: "H_0:\\mu_1-\\mu_2\\leq0,\\qquad H_1:\\mu_1-\\mu_2>0", fallback: "H₀: μ₁−μ₂≤0；H₁: μ₁−μ₂>0" },
    { label: "左尾：第 1 組是否較低", latex: "H_0:\\mu_1-\\mu_2\\geq0,\\qquad H_1:\\mu_1-\\mu_2<0", fallback: "H₀: μ₁−μ₂≥0；H₁: μ₁−μ₂<0" }
  ] },

  { type: "heading", text: "兩組變異數不同：Welch t 檢定" },
  { type: "paragraph", text: "不假設兩組母體變異數相同時，兩組樣本變異數各自除以樣本數，再相加形成平均數差的估計變異數。這就是 Welch t 檢定。" },
  { type: "formulaGroup", formulas: [
    { label: "平均數差的估計變異數", latex: "\\widehat{\\operatorname{Var}}(\\bar X_1-\\bar X_2)=\\frac{s_1^2}{n_1}+\\frac{s_2^2}{n_2}", fallback: "估計 Var(X̄₁−X̄₂)=s₁²/n₁+s₂²/n₂" },
    { label: "Welch t 統計量", latex: "t=\\frac{(\\bar X_1-\\bar X_2)-\\Delta_0}{\\sqrt{s_1^2/n_1+s_2^2/n_2}}", fallback: "t=[(X̄₁−X̄₂)−Δ₀]/√(s₁²/n₁+s₂²/n₂)" },
    { label: "Welch–Satterthwaite 自由度", latex: "\\nu\\approx\\frac{\\left(s_1^2/n_1+s_2^2/n_2\\right)^2}{\\dfrac{(s_1^2/n_1)^2}{n_1-1}+\\dfrac{(s_2^2/n_2)^2}{n_2-1}}", fallback: "df≈(s₁²/n₁+s₂²/n₂)² / [(s₁²/n₁)²/(n₁−1)+(s₂²/n₂)²/(n₂−1)]" }
  ] },
  { type: "callout", tone: "intuition", label: "為什麼兩組變異數要相加？", text: "X̄₁ 與 X̄₂ 都有抽樣波動。兩組互相獨立時，共變異數為 0，因此平均數差的變異數等於兩組變異數相加；這不是把每一筆資料互相配對，而是線性組合的變異數法則。" },

  { type: "heading", text: "兩組變異數相同：pooled t 檢定" },
  { type: "paragraph", text: "若模型假設兩組母體具有共同變異數 σ²，可以依兩組各自的自由度加權，合併成共同變異數估計值 sₚ²，再計算平均數差的標準誤。" },
  { type: "formulaGroup", formulas: [
    { label: "合併變異數", latex: "s_p^2=\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}", fallback: "sₚ²=[(n₁−1)s₁²+(n₂−1)s₂²]/(n₁+n₂−2)" },
    { label: "平均數差的合併標準誤", latex: "\\operatorname{SE}_p(\\bar X_1-\\bar X_2)=\\sqrt{s_p^2\\left(\\frac1{n_1}+\\frac1{n_2}\\right)}", fallback: "SEₚ(X̄₁−X̄₂)=√[sₚ²(1/n₁+1/n₂)]" },
    { label: "Pooled t 統計量", latex: "t=\\frac{(\\bar X_1-\\bar X_2)-\\Delta_0}{\\sqrt{s_p^2(1/n_1+1/n_2)}},\\qquad \\nu=n_1+n_2-2", fallback: "t=[(X̄₁−X̄₂)−Δ₀]/√[sₚ²(1/n₁+1/n₂)]，df=n₁+n₂−2" }
  ] },
  { type: "table", rows: [
    ["方法", "變異數假設", "分母", "自由度"],
    ["Welch t", "不要求 σ₁²=σ₂²", "√(s₁²/n₁+s₂²/n₂)", "Welch–Satterthwaite 近似"],
    ["Pooled t", "假設 σ₁²=σ₂²", "√[sₚ²(1/n₁+1/n₂)]", "n₁+n₂−2"]
  ] },

  { type: "heading", text: "變異數是否相同：F 檢定" },
  { type: "paragraph", text: "在常態母體的假設下，可以用兩組樣本變異數的比值形成 F 統計量，檢定兩組母體變異數是否相同。" },
  { type: "formulaGroup", formulas: [
    { label: "變異數相等的假設", latex: "H_0:\\sigma_1^2=\\sigma_2^2,\\qquad H_1:\\sigma_1^2\\ne\\sigma_2^2", fallback: "H₀: σ₁²=σ₂²；H₁: σ₁²≠σ₂²" },
    { label: "改寫成變異數比", latex: "H_0:\\frac{\\sigma_1^2}{\\sigma_2^2}=1,\\qquad H_1:\\frac{\\sigma_1^2}{\\sigma_2^2}\\ne1", fallback: "H₀: σ₁²/σ₂²=1；H₁: σ₁²/σ₂²≠1" },
    { label: "F 統計量", latex: "F=\\frac{s_1^2}{s_2^2}\\sim F_{n_1-1,\\,n_2-1}\\qquad(H_0\\text{ 成立時})", fallback: "F=s₁²/s₂² ~ F(n₁−1,n₂−1)（H₀ 成立時）" }
  ] },
  { type: "paragraph", text: "得到 F 值後，可查 F 分配表或由電腦計算 p 值，再決定是否拒絕變異數相等的虛無假設。" },
  { type: "callout", tone: "intuition", label: "實務上不一定要先做 F 檢定", text: "傳統流程會先檢定變異數是否相同，再選擇 pooled 或不等變異數公式；但 F 檢定對偏離常態相當敏感，而且先檢定再選方法會改變整體推論程序。現代實務常直接使用對變異數不等較穩健的 Welch t 檢定，除非研究模型有充分理由假設等變異。" },

  { type: "heading", text: "檢定步驟" },
  { type: "list", ordered: true, items: [
    "確認兩組觀察值彼此獨立，且依變數是定量資料。",
    "設定平均數差的 H₀、H₁、檢定方向與顯著水準 α。",
    "計算兩組的 n、X̄ 與 s，並依變異數模型選擇 Welch t 或 pooled t。",
    "計算 t 值與對應自由度，由 t 分配求 p 值，再作出統計結論。"
  ] },

  { type: "heading", text: "與單因子獨立樣本變異數分析的關係" },
  { type: "paragraph", text: "只有兩個獨立組別，且 t 檢定與單因子 ANOVA 採用相同的等變異模型時，兩者會得到一致的顯著性結論，統計量之間滿足：" },
  { type: "formula", latex: "F=t^2", fallback: "F=t²" },

  { type: "heading", text: "補充：單一母體變異數的卡方檢定" },
  { type: "paragraph", text: "若研究問題不是比較兩組平均數，而是檢定一個常態母體的變異數是否等於指定值 σ₀²，則使用卡方檢定。例如生產產品時，希望變異數維持在較小範圍，使產品具有高度一致性；若產品差異過大，品質與消費者權益都可能受到影響。" },

  { type: "heading", text: "母體變異數的假設" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾檢定", latex: "H_0:\\sigma^2=\\sigma_0^2,\\qquad H_1:\\sigma^2\\ne\\sigma_0^2", fallback: "H₀: σ²=σ₀²；H₁: σ²≠σ₀²" },
    { label: "左尾檢定", latex: "H_0:\\sigma^2\\geq\\sigma_0^2,\\qquad H_1:\\sigma^2<\\sigma_0^2", fallback: "H₀: σ²≥σ₀²；H₁: σ²<σ₀²" },
    { label: "右尾檢定", latex: "H_0:\\sigma^2\\leq\\sigma_0^2,\\qquad H_1:\\sigma^2>\\sigma_0^2", fallback: "H₀: σ²≤σ₀²；H₁: σ²>σ₀²" }
  ] },
  { type: "paragraph", text: "實務上若目標是確認製程變異是否超過容許上限，通常關心右尾檢定；若只是確認變異是否偏離指定值，則使用雙尾檢定。" },

  { type: "heading", text: "卡方統計量的由來" },
  { type: "paragraph", text: "假設 X₁,…,Xₙ 為來自常態母體 N(μ,σ²) 的獨立樣本。母體平均數 μ 已知時，以 μ 為中心的標準化平方和有 n 個自由度；μ 未知而以 X̄ 估計後，會損失一個自由度。" },
  { type: "formulaGroup", formulas: [
    { label: "μ 已知時", latex: "\\frac{\\sum_{i=1}^{n}(X_i-\\mu)^2}{\\sigma^2}\\sim\\chi_n^2", fallback: "Σ(Xᵢ−μ)²/σ² ~ χ²(n)" },
    { label: "以 X̄ 估計 μ 後", latex: "\\frac{\\sum_{i=1}^{n}(X_i-\\bar X)^2}{\\sigma^2}\\sim\\chi_{n-1}^2", fallback: "Σ(Xᵢ−X̄)²/σ² ~ χ²(n−1)" },
    { label: "利用 (n−1)s²=Σ(Xᵢ−X̄)²", latex: "\\frac{(n-1)s^2}{\\sigma^2}\\sim\\chi_{n-1}^2", fallback: "(n−1)s²/σ² ~ χ²(n−1)" },
    { label: "在 H₀ 下代入 σ₀²", latex: "\\chi_{\\mathrm{obs}}^2=\\frac{(n-1)s^2}{\\sigma_0^2}", fallback: "χ²obs=(n−1)s²/σ₀²" }
  ] },

  { type: "heading", text: "雙尾檢定的拒絕域" },
  { type: "formula", latex: "\\chi_{\\mathrm{obs}}^2<\\chi_{\\alpha/2,\\,n-1}^2\\quad\\text{或}\\quad\\chi_{\\mathrm{obs}}^2>\\chi_{1-\\alpha/2,\\,n-1}^2", fallback: "χ²obs<χ²α/2,n−1 或 χ²obs>χ²1−α/2,n−1" },
  { type: "paragraph", text: "統計量落在左側或右側的極端拒絕域時，代表樣本變異數相對於 H₀ 指定的 σ₀² 過小或過大。若已知母體變異數並用檢定檢查抽樣結果，極端結果也可能表示這批樣本對母體的代表性較低；在品質管理中，則通常直接關心變異是否超過可接受範圍。" }
];
