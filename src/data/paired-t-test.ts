export const pairedTTest = [
  { type: "paragraph", text: "相依樣本 t 檢定（paired t test）用來比較兩個相依樣本在某個定量變數上的平均數是否有差異。兩筆資料必須能一一配對；分析時先計算每一對的差值，再檢定這些差值的母體平均數是否為 0。" },

  { type: "heading", text: "什麼是相依樣本？" },
  { type: "table", rows: [
    ["相依方式", "例子"],
    ["同一群樣本接受兩次相同或類似的觀測", "運動員訓練前後的成績；受訪者對兩個不同議題的關心程度"],
    ["兩群樣本具有自然關係", "同卵雙胞胎的智力；夫妻每個月各自的收入"],
    ["依重要條件配對後接受不同處理", "智力相近的學生配對並隨機接受不同教學法；身體狀況相近的受試者配對後分別使用新、舊藥物，再測量血糖值"]
  ] },
  { type: "paragraph", text: "資料中的組別是兩個彼此有關聯的類別，屬於質的變數；實際測量的依變數則是定量變數（quantitative variable）。每一筆 Xᵢ 都必須有明確對應的 Yᵢ，不能任意重新配對。" },

  { type: "heading", text: "檢定情境" },
  { type: "list", items: [
    "制度變革前後，員工對公司的忠誠度是否改變。",
    "同一批選民對兩位候選人的滿意度是否不同。",
    "配對的長子與非長子，其冒險性格評分是否不同。",
    "受試者經配對及隨機分派後，分別服用兩種藥物，或一組服用藥物、一組服用安慰劑，一星期後比較收縮壓。"
  ] },

  { type: "heading", text: "先把每一對資料相減" },
  { type: "paragraph", text: "相依樣本 t 檢定的核心，是把成對的兩個測量值 Xᵢ 與 Yᵢ 相減，得到每一對的差值 dᵢ。接著計算差值的平均數與標準差，把問題轉換成「差值是否以 0 為中心」。" },
  { type: "formulaGroup", formulas: [
    { label: "第 i 對的差值", latex: "d_i=X_i-Y_i", fallback: "dᵢ=Xᵢ−Yᵢ" },
    { label: "平均差", latex: "\\bar d=\\frac{1}{n}\\sum_{i=1}^{n}d_i", fallback: "d̄=Σdᵢ/n" },
    { label: "差值的標準差", latex: "s_d=\\sqrt{\\frac{\\sum_{i=1}^{n}(d_i-\\bar d)^2}{n-1}}", fallback: "s_d=√[Σ(dᵢ−d̄)²/(n−1)]" },
    { label: "配對 t 統計量", latex: "t=\\frac{\\bar d-\\mu_{d,0}}{s_d/\\sqrt n},\\qquad \\nu=n-1", fallback: "t=(d̄−μd,0)/(s_d/√n)，df=n−1" }
  ] },
  { type: "paragraph", text: "若差值的母體標準差已知，可用相同的平均差結構形成 Z 統計量；實務上通常未知，因此以差值的樣本標準差 s_d 估計並使用 t 分配。" },
  { type: "callout", tone: "intuition", label: "樣本數 n 是配對數", text: "若有 30 位受試者各接受前、後兩次測量，原始資料共有 60 個數值，但形成的是 30 個差值，因此 n=30、自由度為 29。" },

  { type: "heading", text: "建立假設" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾：平均差是否不為 0", latex: "H_0:\\mu_d=0,\\qquad H_1:\\mu_d\\ne0", fallback: "H₀: μd=0；H₁: μd≠0" },
    { label: "右尾：X 是否平均高於 Y", latex: "H_0:\\mu_d\\leq0,\\qquad H_1:\\mu_d>0", fallback: "H₀: μd≤0；H₁: μd>0" },
    { label: "左尾：X 是否平均低於 Y", latex: "H_0:\\mu_d\\geq0,\\qquad H_1:\\mu_d<0", fallback: "H₀: μd≥0；H₁: μd<0" }
  ] },
  { type: "paragraph", text: "差值的正負取決於相減順序。若定義 dᵢ=Xᵢ−Yᵢ，正的平均差表示 X 平均高於 Y；交換相減順序會改變 t 值正負，但雙尾 p 值不變。" },

  { type: "heading", text: "檢定步驟" },
  { type: "list", ordered: true, items: [
    "確認兩次測量或兩組資料可以正確地一一配對。",
    "固定相減順序，計算每一對的差值 dᵢ=Xᵢ−Yᵢ。",
    "由所有差值計算 d̄、s_d 與 t 值，自由度為 n−1。",
    "利用 t 分配查表或由電腦求 p 值，再判斷是否拒絕 H₀。"
  ] },
  { type: "callout", tone: "forward", label: "分析的是差值", text: "配對 t 檢定的常態性條件是針對差值 dᵢ 的分布，而不是要求 X 與 Y 各自都完全符合常態分配。離群的差值可能明顯影響平均差、標準差與檢定結果。" },

  { type: "heading", text: "與相依樣本變異數分析的關係" },
  { type: "paragraph", text: "只有兩個相依測量條件時，也可以使用單因子相依樣本變異數分析。兩種方法對同一假設會得到一致的顯著性結論，且檢定統計量滿足：" },
  { type: "formula", latex: "F=t^2", fallback: "F=t²" }
];
