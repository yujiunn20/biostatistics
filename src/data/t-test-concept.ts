export const tTestConcept = [
  { type: "paragraph", text: "t 檢定（t test）用來檢驗母體平均數或平均數差。它和 Z 檢定具有同一個基本結構：先計算觀察到的差異，再用這個差異的標準誤進行標準化。兩者真正的分界，不是公式外觀，而是母體標準差 σ 是否已知。" },
  { type: "callout", tone: "forward", label: "本頁最重要的主線", text: "母體標準差 σ 已知時，可用 σ/√n 標準化而得到 Z；σ 未知時，只能用樣本標準差 s 估計。因為 s 本身也會隨抽樣改變，分母多了一層不確定性，因此統計量不再服從標準常態分配，而是服從具有自由度的 t 分配。" },

  { type: "heading", text: "先從 Z 檢定開始" },
  { type: "paragraph", text: "對個別觀察值而言，Z 分數描述 Xi 距離母體平均數 μ 有多少個母體標準差。研究樣本平均數時，則必須改用樣本平均數的標準誤 σ/√n。" },
  { type: "formulaGroup", formulas: [
    { label: "個別觀察值的 Z 分數", latex: "Z_i=\\frac{X_i-\\mu}{\\sigma}", fallback: "Zi=(Xi−μ)/σ" },
    { label: "抽樣平均數的中心", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
    { label: "抽樣平均數的標準誤", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" },
    { label: "平均數的 Z 統計量", latex: "Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}", fallback: "Z=(X̄−μ₀)/(σ/√n)" }
  ] },
  { type: "paragraph", text: "在 H₀: μ=μ₀ 成立且抽樣分配為常態或可合理近似常態時，這個 Z 統計量服從標準常態分配，因此可利用 Z 分配求臨界值與 p 值。" },

  { type: "heading", text: "現實中通常不知道母體標準差 σ" },
  { type: "paragraph", text: "完整母體往往無法全部觀察，因此母體平均數 μ 未知時，母體標準差 σ 通常也未知。我們只能由同一份樣本計算樣本標準差 s，作為 σ 的估計。" },
  { type: "formulaGroup", formulas: [
    { label: "樣本變異數", latex: "s^2=\\frac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "s²=Σ(Xi−X̄)²/(n−1)" },
    { label: "樣本標準差", latex: "s=\\sqrt{\\frac{\\sum_{i=1}^{n}(X_i-\\bar X)^2}{n-1}}", fallback: "s=√[Σ(Xi−X̄)²/(n−1)]" },
    { label: "估計後的標準誤", latex: "\\widehat{\\operatorname{SE}}(\\bar X)=\\frac{s}{\\sqrt n}", fallback: "估計的 SE(X̄)=s/√n" }
  ] },
  { type: "callout", tone: "intuition", label: "為什麼分母是 n−1？", text: "計算離均差以前已先用同一份資料估計 X̄，使 n 個離均差必須滿足總和為 0；知道其中 n−1 個後，最後一個就被決定。因此只有 n−1 個獨立變動方向，也就是自由度 ν=n−1。" },

  { type: "heading", text: "從 Z 統計量推到 t 統計量" },
  { type: "paragraph", text: "如果只是把 Z 公式中的 σ 換成 s，公式外觀看似只改了一個符號；但 σ 是固定的母體參數，s 卻是隨樣本變動的隨機變數。要理解 t 分配為何出現，必須把這一層隨機性寫出來。以下假設 X₁,…,Xₙ 為來自常態母體的獨立樣本。" },
  { type: "formulaGroup", formulas: [
    { label: "平均數標準化後為標準常態", latex: "Z=\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)", fallback: "Z=(X̄−μ)/(σ/√n) ~ N(0,1)" },
    { label: "樣本變異數形成卡方變數", latex: "U=\\frac{(n-1)s^2}{\\sigma^2}\\sim\\chi^2_{n-1}", fallback: "U=(n−1)s²/σ² ~ χ²(n−1)" },
    { label: "常態樣本下兩者互相獨立", latex: "Z\\perp U", fallback: "Z 與 U 獨立" },
    { label: "t 分配的建立方式", latex: "T=\\frac{Z}{\\sqrt{U/(n-1)}}\\sim t_{n-1}", fallback: "T=Z/√[U/(n−1)] ~ t(n−1)" }
  ] },
  { type: "paragraph", text: "把 Z 與 U 的定義完整代回去，可以看到未知的 σ 如何被消去：" },
  { type: "formulaGroup", formulas: [
    { label: "代入 Z 與 U", latex: "T=\\frac{\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}}{\\sqrt{\\dfrac{(n-1)s^2/\\sigma^2}{n-1}}}", fallback: "T=[(X̄−μ)/(σ/√n)] / √{[(n−1)s²/σ²]/(n−1)}" },
    { label: "化簡根號中的式子", latex: "\\sqrt{\\frac{(n-1)s^2/\\sigma^2}{n-1}}=\\sqrt{\\frac{s^2}{\\sigma^2}}=\\frac{s}{\\sigma}", fallback: "√{[(n−1)s²/σ²]/(n−1)}=s/σ" },
    { label: "消去 σ", latex: "T=\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\cdot\\frac{\\sigma}{s}=\\frac{\\bar X-\\mu}{s/\\sqrt n}", fallback: "T=[(X̄−μ)/(σ/√n)]·(σ/s)=(X̄−μ)/(s/√n)" },
    { label: "單一樣本 t 統計量", latex: "t=\\frac{\\bar X-\\mu_0}{s/\\sqrt n},\\qquad \\nu=n-1", fallback: "t=(X̄−μ₀)/(s/√n)，df=n−1" }
  ] },
  { type: "callout", tone: "intuition", label: "這個推導真正說明了什麼？", text: "t 並不是把 Z 表中的數字換一換而已。它是『標準常態變數 ÷ 一個由卡方變數產生的隨機尺度』。由樣本估計 σ 所增加的不確定性，正是 t 分配尾端比標準常態更厚的原因。" },

  { type: "heading", text: "為什麼 t 分配需要自由度？" },
  { type: "paragraph", text: "t 統計量的分母使用 s，而 s 的穩定程度取決於估計它時有多少獨立資訊。自由度較低時，s 的波動較大，t 分配必須配置更多尾端機率；自由度增加後，s 逐漸穩定，t 分配也逐漸接近標準常態分配。" },
  { type: "formula", latex: "t_\\nu\\xrightarrow[\\nu\\to\\infty]{d}N(0,1)", fallback: "當 df→∞，t 分配趨近 N(0,1)" },
  { type: "callout", tone: "intuition", label: "不要把 n≥30 當成硬切點", text: "『n≥30 就改用 Z』只是常見的近似口訣，不是統計定義。若 σ 未知，使用 t 檢定仍然正確；樣本大時 t 與 Z 的結果只是非常接近。樣本是否足以使用常態近似，還會受到偏態、離群值與資料生成方式影響。" },

  { type: "heading", text: "Z 檢定與 t 檢定的比較" },
  { type: "table", rows: [
    ["比較項目", "Z 檢定", "t 檢定"],
    ["母體標準差", "σ 已知", "σ 未知，以 s 估計"],
    ["平均數的標準誤", "σ/√n", "s/√n"],
    ["H₀ 下的參考分配", "標準常態 N(0,1)", "t 分配"],
    ["是否需要自由度", "不需要", "需要；單一樣本時 ν=n−1"],
    ["尾端", "較薄", "低自由度時較厚"],
    ["樣本增加後", "維持標準常態", "逐漸接近標準常態"]
  ] },

  { type: "heading", text: "t 檢定不是只有一種" },
  { type: "paragraph", text: "三種常見 t 檢定都在比較平均數，但研究設計不同，真正拿來形成 t 統計量的『差異』與標準誤也不同。不能只因為都有兩欄數字，就使用相同公式。" },
  { type: "table", rows: [
    ["方法", "要回答的問題", "真正分析的量"],
    ["單一樣本 t 檢定", "一個母體平均數是否等於指定值 μ₀？", "X̄−μ₀"],
    ["相依／配對樣本 t 檢定", "同一受試者前後或成對資料的平均差是否為 0？", "先算每一對差值 di，再分析 d̄"],
    ["獨立樣本 t 檢定", "兩個互不相依母體的平均數是否相同？", "X̄₁−X̄₂"]
  ] },
  { type: "callout", tone: "forward", label: "後面三頁如何銜接？", text: "後續會分別推導單一樣本、配對樣本與獨立樣本的 t 統計量。共同主線仍是『觀察到的平均差 ÷ 該平均差的標準誤』；改變的是資料如何形成差異，以及標準誤如何計算。" },

  { type: "heading", text: "t 檢定的基本假設" },
  { type: "list", items: [
    "資料應來自隨機抽樣或適當的隨機分派，觀察單位之間的獨立性必須符合研究設計。",
    "依變數為可合理計算平均數與差值的數值資料。",
    "單一樣本 t 檢定要求觀察值所來自的母體近似常態；配對 t 檢定關心的是『配對差值』的分配；獨立樣本 t 檢定則關心各組與模型誤差。",
    "t 檢定對輕微偏離常態通常具有一定穩健性，但小樣本下的明顯偏態與離群值可能造成很大影響。",
    "獨立樣本 t 檢定還要區分等變異的 pooled t 與不要求等變異的 Welch t；這會在後續頁面說明。"
  ] },

  { type: "heading", text: "本頁符號說明" },
  { type: "table", rows: [
    ["符號", "代表意義"],
    ["Xi", "第 i 個觀察值；抽樣前視為隨機變數"],
    ["X̄", "樣本平均數"],
    ["μ、μ₀", "母體平均數、H₀ 指定的母體平均數"],
    ["σ", "母體標準差；在 t 檢定情境中未知"],
    ["s", "由樣本估計的標準差"],
    ["n", "樣本數"],
    ["ν", "自由度；單一樣本時 ν=n−1"],
    ["U", "由樣本變異數形成的卡方隨機變數"],
    ["tν", "自由度為 ν 的 t 分配"]
  ] }
];
