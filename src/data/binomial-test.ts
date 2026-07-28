export const binomialTest = [
  { type: "paragraph", text: "二項分布檢定（binomial test）用來推論母體中的事件比例。每個觀察單位只有兩種互斥結果，例如有病／沒病、成功／失敗或陽性／陰性；研究問題可以是單一母體比例是否等於指定值，也可以是兩個獨立母體的比例是否相同。" },
  { type: "callout", tone: "forward", label: "本頁的兩個問題", text: "單一比例檢定比較樣本比例 p̂ 與指定的母體比例 π₀；兩獨立比例檢定比較 p̂₁−p̂₂。樣本數足夠時可利用常態近似形成 Z 統計量，樣本較小或事件罕見時則應考慮精確二項方法。" },

  { type: "heading", text: "從成功次數轉成樣本比例" },
  { type: "paragraph", text: "假設從母體抽取 n 個彼此獨立的觀察單位，其中 x 個出現所關心的事件。若每個觀察單位的事件機率皆為 π，成功次數 X 服從二項分配；樣本比例 p̂=X/n 則是母體比例 π 的估計值。" },
  { type: "formulaGroup", formulas: [
    { label: "成功次數", latex: "X\\sim\\operatorname{Binomial}(n,\\pi)", fallback: "X~Binomial(n,π)" },
    { label: "樣本比例", latex: "\\hat p=\\frac{X}{n}=\\frac{x}{n}", fallback: "p̂=X/n=x/n" },
    { label: "樣本比例的平均數", latex: "E(\\hat p)=\\pi", fallback: "E(p̂)=π" },
    { label: "樣本比例的變異數與標準誤", latex: "\\operatorname{Var}(\\hat p)=\\frac{\\pi(1-\\pi)}{n},\\qquad \\operatorname{SE}(\\hat p)=\\sqrt{\\frac{\\pi(1-\\pi)}{n}}", fallback: "Var(p̂)=π(1−π)/n；SE(p̂)=√[π(1−π)/n]" }
  ] },
  { type: "callout", tone: "intuition", label: "不要把成功次數與比例的變異數混在一起", text: "成功次數 X 的變異數是 nπ(1−π)；樣本比例 p̂=X/n，因此變異數要再除以 n²，得到 π(1−π)/n。標準誤則是變異數開平方根。" },

  { type: "heading", text: "單一母體比例的假設" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾：比例是否不同", latex: "H_0:\\pi=\\pi_0,\\qquad H_1:\\pi\\ne\\pi_0", fallback: "H₀: π=π₀；H₁: π≠π₀" },
    { label: "右尾：比例是否較高", latex: "H_0:\\pi\\leq\\pi_0,\\qquad H_1:\\pi>\\pi_0", fallback: "H₀: π≤π₀；H₁: π>π₀" },
    { label: "左尾：比例是否較低", latex: "H_0:\\pi\\geq\\pi_0,\\qquad H_1:\\pi<\\pi_0", fallback: "H₀: π≥π₀；H₁: π<π₀" }
  ] },
  { type: "paragraph", text: "在 H₀ 成立時，樣本比例以 π₀ 為中心。當二項分配可以合理地用常態分配近似時，將 p̂ 減去 π₀，再除以 H₀ 下的標準誤，就得到近似標準常態的 Z 統計量。" },
  { type: "formula", latex: "Z=\\frac{\\hat p-\\pi_0}{\\sqrt{\\pi_0(1-\\pi_0)/n}}\\approx N(0,1)\\qquad(H_0\\text{ 成立時})", fallback: "Z=(p̂−π₀)/√[π₀(1−π₀)/n]，在 H₀ 下近似 N(0,1)" },

  { type: "heading", text: "單一比例的信賴區間" },
  { type: "paragraph", text: "檢定的標準誤使用 H₀ 指定的 π₀，因為 p 值是在 H₀ 世界中計算；估計母體比例的信賴區間則必須使用樣本提供的比例資訊。最直接的常態近似區間為：" },
  { type: "formula", latex: "\\hat p\\pm z_{1-\\alpha/2}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}", fallback: "p̂ ± z₁₋α/2√[p̂(1−p̂)/n]" },
  { type: "callout", tone: "intuition", label: "Wald 區間不一定可靠", text: "上式稱為 Wald 區間，形式簡單，但樣本較小或 p̂ 接近 0、1 時可能超出 0 到 1，涵蓋率也可能不佳。實務上可優先考慮 Wilson score interval；若樣本很小，則使用適合的精確區間。" },

  { type: "heading", text: "平均數檢定與比例檢定的對照" },
  { type: "table", rows: [
    ["比較項目", "平均數的 Z 檢定", "單一比例的 Z 檢定"],
    ["母體參數", { parts: [{ type: "text", text: "平均數 " }, { type: "inlineFormula", latex: "\\mu", fallback: "μ" }] }, { parts: [{ type: "text", text: "比例 " }, { type: "inlineFormula", latex: "\\pi", fallback: "π" }] }],
    ["樣本估計值", { parts: [{ type: "inlineFormula", latex: "\\bar X", fallback: "X̄" }] }, { parts: [{ type: "inlineFormula", latex: "\\hat p=X/n", fallback: "p̂=X/n" }] }],
    [{ parts: [{ type: "inlineFormula", latex: "H_0", fallback: "H₀" }, { type: "text", text: " 指定值" }] }, { parts: [{ type: "inlineFormula", latex: "\\mu_0", fallback: "μ₀" }] }, { parts: [{ type: "inlineFormula", latex: "\\pi_0", fallback: "π₀" }] }],
    [{ parts: [{ type: "inlineFormula", latex: "H_0", fallback: "H₀" }, { type: "text", text: " 下的標準誤" }] }, { parts: [{ type: "inlineFormula", latex: "\\sigma/\\sqrt n", fallback: "σ/√n" }] }, { parts: [{ type: "inlineFormula", latex: "\\sqrt{\\pi_0(1-\\pi_0)/n}", fallback: "√[π₀(1−π₀)/n]" }] }],
    ["標準化", { parts: [{ type: "inlineFormula", latex: "\\dfrac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}", fallback: "(X̄−μ₀)/(σ/√n)" }] }, { parts: [{ type: "inlineFormula", latex: "\\dfrac{\\hat p-\\pi_0}{\\sqrt{\\pi_0(1-\\pi_0)/n}}", fallback: "(p̂−π₀)/√[π₀(1−π₀)/n]" }] }]
  ] },
  { type: "paragraph", text: "兩種方法的共同結構都是「樣本估計值−H₀ 指定值」，再除以該估計值在 H₀ 下的標準誤。比例檢定的平均數與變異數不是另外背出的公式，而是由二項分配推得。" },

  { type: "heading", text: "兩個獨立母體比例" },
  { type: "paragraph", text: "若第 1 組有 n₁ 個觀察值、其中 x₁ 個事件，第 2 組有 n₂ 個觀察值、其中 x₂ 個事件，兩組樣本比例分別為 p̂₁=x₁/n₁ 與 p̂₂=x₂/n₂。研究的統計量是兩個獨立樣本比例之差。" },
  { type: "formulaGroup", formulas: [
    { label: "兩組樣本比例", latex: "\\hat p_1=\\frac{x_1}{n_1},\\qquad \\hat p_2=\\frac{x_2}{n_2}", fallback: "p̂₁=x₁/n₁；p̂₂=x₂/n₂" },
    { label: "比例差的平均數", latex: "E(\\hat p_1-\\hat p_2)=\\pi_1-\\pi_2", fallback: "E(p̂₁−p̂₂)=π₁−π₂" },
    { label: "比例差的變異數", latex: "\\operatorname{Var}(\\hat p_1-\\hat p_2)=\\frac{\\pi_1(1-\\pi_1)}{n_1}+\\frac{\\pi_2(1-\\pi_2)}{n_2}", fallback: "Var(p̂₁−p̂₂)=π₁(1−π₁)/n₁+π₂(1−π₂)/n₂" }
  ] },
  { type: "callout", tone: "intuition", label: "為什麼相減後變異數仍然相加？", text: "兩組樣本彼此獨立時，共變異數為 0。即使統計量是 p̂₁−p̂₂，負號進入變異數後會平方，因此兩組抽樣變異仍然相加；這與兩獨立樣本平均數的線性組合使用相同原理。" },

  { type: "heading", text: "從母體變異數到樣本估計" },
  { type: "paragraph", text: "母體層次的變異數含有未知參數 π₁、π₂，實際分析時無法直接計算。若只是估計兩組比例差的一般抽樣變異，可以分別用 p̂₁、p̂₂ 代替 π₁、π₂，得到 unpooled variance estimate。" },
  { type: "formulaGroup", formulas: [
    { label: "母體比例差的變異數", latex: "\\operatorname{Var}(\\hat p_1-\\hat p_2)=\\frac{\\pi_1(1-\\pi_1)}{n_1}+\\frac{\\pi_2(1-\\pi_2)}{n_2}", fallback: "Var(p̂₁−p̂₂)=π₁(1−π₁)/n₁+π₂(1−π₂)/n₂" },
    { label: "以兩組樣本比例分別估計", latex: "\\widehat{\\operatorname{Var}}(\\hat p_1-\\hat p_2)=\\frac{\\hat p_1(1-\\hat p_1)}{n_1}+\\frac{\\hat p_2(1-\\hat p_2)}{n_2}", fallback: "估計 Var(p̂₁−p̂₂)=p̂₁(1−p̂₁)/n₁+p̂₂(1−p̂₂)/n₂" },
    { label: "一般估計標準誤", latex: "\\widehat{\\operatorname{SE}}(\\hat p_1-\\hat p_2)=\\sqrt{\\frac{\\hat p_1(1-\\hat p_1)}{n_1}+\\frac{\\hat p_2(1-\\hat p_2)}{n_2}}", fallback: "估計 SE(p̂₁−p̂₂)=√[p̂₁(1−p̂₁)/n₁+p̂₂(1−p̂₂)/n₂]" }
  ] },
  { type: "callout", tone: "intuition", label: "Variance 和 standard error 差一個平方根", text: "括號內相加得到的是比例差的變異數；把整個變異數開平方根後，才是 standard error。原始公式若以「Standard error」為標題卻只寫 Var，讀者很容易漏掉這一步。" },

  { type: "heading", text: "兩比例相等的假設檢定" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾假設", latex: "H_0:\\pi_1=\\pi_2,\\qquad H_1:\\pi_1\\ne\\pi_2", fallback: "H₀: π₁=π₂；H₁: π₁≠π₂" },
    { label: "等價寫法", latex: "H_0:\\pi_1-\\pi_2=0,\\qquad H_1:\\pi_1-\\pi_2\\ne0", fallback: "H₀: π₁−π₂=0；H₁: π₁−π₂≠0" }
  ] },
  { type: "paragraph", text: "H₀: π₁=π₂ 不是說觀察到的 p̂₁ 與 p̂₂ 必須剛好相等，而是先假設兩組資料來自同一個未知母體比例 π。既然 H₀ 世界中只有一個共同的 π，就應使用全部 n₁+n₂ 個觀察值共同估計它，而不是各自保留兩個比例參數。" },
  { type: "formulaGroup", formulas: [
    { label: "H₀ 下兩組共用同一個比例", latex: "\\pi_1=\\pi_2=\\pi", fallback: "π₁=π₂=π" },
    { label: "以所有事件數估計共同 π", latex: "\\hat p=\\frac{x_1+x_2}{n_1+n_2}=\\frac{n_1\\hat p_1+n_2\\hat p_2}{n_1+n_2}", fallback: "p̂=(x₁+x₂)/(n₁+n₂)=(n₁p̂₁+n₂p̂₂)/(n₁+n₂)" },
    { label: "把共同估計值代入兩組變異數", latex: "\\widehat{\\operatorname{Var}}_0(\\hat p_1-\\hat p_2)=\\frac{\\hat p(1-\\hat p)}{n_1}+\\frac{\\hat p(1-\\hat p)}{n_2}", fallback: "估計 Var₀(p̂₁−p̂₂)=p̂(1−p̂)/n₁+p̂(1−p̂)/n₂" },
    { label: "提出共同因子", latex: "\\widehat{\\operatorname{Var}}_0(\\hat p_1-\\hat p_2)=\\hat p(1-\\hat p)\\left(\\frac1{n_1}+\\frac1{n_2}\\right)", fallback: "估計 Var₀(p̂₁−p̂₂)=p̂(1−p̂)(1/n₁+1/n₂)" },
    { label: "變異數開根號得到 H₀ 下的標準誤", latex: "\\widehat{\\operatorname{SE}}_0(\\hat p_1-\\hat p_2)=\\sqrt{\\hat p(1-\\hat p)\\left(\\frac1{n_1}+\\frac1{n_2}\\right)}", fallback: "估計 SE₀(p̂₁−p̂₂)=√[p̂(1−p̂)(1/n₁+1/n₂)]" },
    { label: "兩獨立比例的 Z 統計量", latex: "Z=\\frac{\\hat p_1-\\hat p_2}{\\sqrt{\\hat p(1-\\hat p)(1/n_1+1/n_2)}}", fallback: "Z=(p̂₁−p̂₂)/√[p̂(1−p̂)(1/n₁+1/n₂)]" }
  ] },
  { type: "callout", tone: "intuition", label: "為什麼是加權平均，不是 (p̂₁+p̂₂)/2？", text: "兩組樣本數可能不同。x₁=n₁p̂₁、x₂=n₂p̂₂，所以合併比例是總事件數除以總人數，也就是以 n₁、n₂ 加權的平均。只有 n₁=n₂ 時，它才等於兩個樣本比例的簡單平均。" },
  { type: "paragraph", text: "單尾問題可依研究方向把對立假設改為 π₁>π₂ 或 π₁<π₂；公式不變，但 p 值只計算指定方向的尾端機率。" },

  { type: "heading", text: "兩比例差的信賴區間" },
  { type: "paragraph", text: "建立信賴區間時，不再假設 π₁=π₂，因此兩組變異數必須分別用各自的樣本比例估計，不能沿用檢定時的 pooled 標準誤。" },
  { type: "formula", latex: "(\\hat p_1-\\hat p_2)\\pm z_{1-\\alpha/2}\\sqrt{\\frac{\\hat p_1(1-\\hat p_1)}{n_1}+\\frac{\\hat p_2(1-\\hat p_2)}{n_2}}", fallback: "(p̂₁−p̂₂) ± z₁₋α/2√[p̂₁(1−p̂₁)/n₁+p̂₂(1−p̂₂)/n₂]" },
  { type: "table", rows: [
    ["用途", "比例的處理方式", "標準誤"],
    [{ parts: [{ type: "text", text: "檢定 " }, { type: "inlineFormula", latex: "H_0:\\pi_1=\\pi_2", fallback: "H₀: π₁=π₂" }] }, { parts: [{ type: "text", text: "合併為共同比例 " }, { type: "inlineFormula", latex: "\\hat p", fallback: "p̂" }] }, { parts: [{ type: "inlineFormula", latex: "\\sqrt{\\hat p(1-\\hat p)(1/n_1+1/n_2)}", fallback: "√[p̂(1−p̂)(1/n₁+1/n₂)]" }] }],
    [{ parts: [{ type: "text", text: "估計 " }, { type: "inlineFormula", latex: "\\pi_1-\\pi_2", fallback: "π₁−π₂" }, { type: "text", text: " 的信賴區間" }] }, "兩組比例分開估計", { parts: [{ type: "inlineFormula", latex: "\\sqrt{\\hat p_1(1-\\hat p_1)/n_1+\\hat p_2(1-\\hat p_2)/n_2}", fallback: "√[p̂₁(1−p̂₁)/n₁+p̂₂(1−p̂₂)/n₂]" }] }]
  ] },

  { type: "heading", text: "常態近似與精確方法" },
  { type: "paragraph", text: "Z 檢定依賴二項分配的常態近似。單一比例檢定應檢查 H₀ 下的 nπ₀ 與 n(1−π₀)；兩比例檢定則要確認兩組在 H₀ 下的預期事件數與非事件數都不過小。近似條件不足時，不應只因總樣本數看起來很大就直接查 Z 表。" },
  { type: "table", rows: [
    ["情況", "可考慮的方法"],
    ["單一比例、樣本足夠", "單一比例 Z 檢定"],
    ["單一比例、樣本小或事件罕見", "精確二項檢定"],
    ["兩個獨立比例、預期次數足夠", "兩比例 Z 檢定；2×2 表中與 Pearson 卡方檢定等價"],
    ["兩個獨立比例、預期次數過小", "Fisher 精確檢定等精確方法"]
  ] },

  { type: "heading", text: "檢定步驟" },
  { type: "list", ordered: true, items: [
    "確認結果為二元資料，觀察值彼此獨立，而且研究的是一個比例或兩個獨立比例。",
    "依研究問題設定 H₀、H₁、單尾或雙尾方向，以及顯著水準 α。",
    "檢查常態近似條件；條件不足時改用適合的精確方法。",
    "計算樣本比例與檢定標準誤，得到 Z 值及 p 值，再回到研究問題作出判讀。"
  ] }
];
