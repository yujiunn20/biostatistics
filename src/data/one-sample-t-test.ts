export const oneSampleTTest = [
  { type: "paragraph", text: "單一樣本 t 檢定（one-sample t test）用來比較一個樣本在某個定量變數上的平均數，與事先指定的常數 μ₀ 是否有差異。這個常數可以是全國平均、產品規格、競爭對手的基準值，或研究問題所設定的門檻。" },
  { type: "heading", text: "什麼是「單一樣本」？" },
  { type: "paragraph", text: "單一樣本是指研究者從關心的母群體中抽樣而得的一個具代表性樣本，例如學校中的部分學生、生產線上的部分產品，或罹患某種疾病的部分患者。這裡的「單一」是指只有一組樣本，不是只有一筆觀察值。" },
  { type: "paragraph", text: "抽取樣本後，研究者會針對這些樣本的某種屬性或特性加以測量。測量所得必須是可以合理計算平均數的定量變數（quantitative variable），例如測驗得分、產品使用壽命或患者存活時間。" },

  { type: "heading", text: "檢定情境" },
  { type: "table", rows: [
    ["情境", "樣本的定量變數", "比較基準 μ₀", "可能的方向"],
    ["某所學校學生的閱讀理解測驗", "每位學生的測驗得分", "全國平均 450 分", "是否有差異"],
    ["某工廠生產的產品", "每件產品的使用壽命", "競爭對手 5000 小時", "是否有差異"],
    ["某類產品的防腐劑含量", "每件產品的含量（ppm）", "30 ppm", "是否超過"]
  ] },
  { type: "paragraph", text: "前兩個問題使用「是否有差異」，通常對應雙尾檢定；防腐劑問題問「是否超過」，具有明確方向，通常對應右尾檢定。檢定方向應在查看資料結果以前，依研究問題與實務目的決定。" },

  { type: "heading", text: "建立虛無假設與對立假設" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾：是否有差異", latex: "H_0:\\mu=\\mu_0,\\qquad H_1:\\mu\\ne\\mu_0", fallback: "H₀: μ=μ₀；H₁: μ≠μ₀" },
    { label: "右尾：是否高於基準", latex: "H_0:\\mu\\leq\\mu_0,\\qquad H_1:\\mu>\\mu_0", fallback: "H₀: μ≤μ₀；H₁: μ>μ₀" },
    { label: "左尾：是否低於基準", latex: "H_0:\\mu\\geq\\mu_0,\\qquad H_1:\\mu<\\mu_0", fallback: "H₀: μ≥μ₀；H₁: μ<μ₀" }
  ] },

  { type: "heading", text: "計算檢定統計量" },
  { type: "paragraph", text: "最基本的流程是計算 Z 或 t 統計量、求得 p 值，再判斷是否拒絕虛無假設。兩個統計量的分子都是 X̄−μ₀；差別在於母體標準差 σ 是否已知。" },
  { type: "formulaGroup", formulas: [
    { label: "母體標準差 σ 已知時", latex: "Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}", fallback: "Z=(X̄−μ₀)/(σ/√n)" },
    { label: "母體標準差 σ 未知時", latex: "t=\\frac{\\bar X-\\mu_0}{s/\\sqrt n}", fallback: "t=(X̄−μ₀)/(s/√n)" },
    { label: "單一樣本 t 檢定的自由度", latex: "\\nu=n-1", fallback: "df=n−1" }
  ] },
  { type: "callout", tone: "intuition", label: "樣本數大於 30 就要改用 Z 嗎？", text: "常見口訣是母體變異數已知或樣本數大於 30 時使用 Z，母體變異數未知時使用 t。更精確地說，n≥30 會使 t 分配非常接近標準常態分配，但不會讓未知的 σ 變成已知；因此 σ 未知時，直接使用 t 檢定仍然正確，且大樣本下兩者結果通常非常接近。" },

  { type: "heading", text: "檢定步驟" },
  { type: "list", ordered: true, items: [
    "依研究問題設定比較值 μ₀、H₀、H₁、單尾或雙尾方向，以及顯著水準 α。",
    "由樣本計算 n、X̄ 與 s。",
    "以 t=(X̄−μ₀)/(s/√n) 計算觀察到的 t 值，自由度為 n−1。",
    "利用 t 分配查表或由電腦計算 p 值，再與 α 比較並作出統計結論。"
  ] },
  { type: "callout", tone: "forward", label: "如何作出統計裁決？", text: "p 值可以查 t 分配表或由電腦算出。若 p≤α，拒絕 H₀；若 p>α，則無法拒絕 H₀。『無法拒絕』不等於已證明 H₀ 正確，也不等於兩者完全相同。" },
];
