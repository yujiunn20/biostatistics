export const mcnemarsTest = [
  { type: "paragraph", text: "McNemar 檢定（McNemar’s test）用來分析成對二元資料，例如同一批受試者治療前後的陽性／陰性結果，或經過配對的兩個觀察單位。它不把四格都當成獨立樣本，而是專注於結果發生改變的兩種不一致配對。" },
  { type: "callout", tone: "forward", label: "這一頁的主線", text: "先辨認成對二元資料 → 把四格分成一致配對與不一致配對 → 只用 b、c 建立條件二項分布 → 檢定兩個改變方向是否同樣可能 → 推出 exact、Z 與卡方形式。" },

  { type: "heading", text: "成對二元資料如何整理？" },
  { type: "table", rows: [
    ["", "", "Before：Yes", "Before：No", "合計"],
    ["After", "Yes", "a", "b", "a+b"],
    ["", "No", "c", "d", "c+d"],
    ["合計", "", "a+c", "b+d", "a+b+c+d"]
  ] },
  { type: "table", rows: [
    ["儲存格", "配對結果", "在 McNemar 檢定中的角色"],
    ["a", "Before Yes → After Yes", "沒有改變的一致配對"],
    ["b", "Before No → After Yes", "往一個方向改變"],
    ["c", "Before Yes → After No", "往相反方向改變"],
    ["d", "Before No → After No", "沒有改變的一致配對"]
  ] },
  { type: "callout", tone: "intuition", label: "McNemar 只看 b 與 c", text: "a、d 告訴我們有多少人維持原狀，但不能區分改變偏向哪個方向。只有 b、c 代表兩種相反方向的改變，因此檢定的有效樣本數是 n=b+c，而不是 a+b+c+d。" },

  { type: "heading", text: "研究問題與假設" },
  { type: "paragraph", text: "McNemar 檢定問的是兩個方向的改變機率是否相同。若 Before 與 After 的邊際比例相同，No→Yes 與 Yes→No 應同樣可能；這稱為邊際同質性（marginal homogeneity）。" },
  { type: "formulaGroup", formulas: [
    { label: "虛無假設", latex: "H_0:P_b=P_c", fallback: "H₀: P_b=P_c" },
    { label: "對立假設", latex: "H_1:P_b\\ne P_c", fallback: "H₁: P_b≠P_c" },
    { label: "只看不一致配對後的等價假設", latex: "H_0:\\pi=P(b\\mid b\\text{ 或 }c)=\\frac12", fallback: "H₀: π=P(b | b 或 c)=1/2" }
  ] },
  { type: "paragraph", text: "雙尾檢定關心 b、c 是否不相等；若研究問題事先指定方向，也可以設定 P_b>P_c 或 P_b<P_c 的單尾對立假設。方向必須配合表格定義，交換 Before／After 或 Yes／No 會交換 b、c。" },

  { type: "heading", text: "為什麼會形成二項分布？" },
  { type: "paragraph", text: "條件在「已經發生改變」的 n=b+c 對資料後，每一對只剩兩種互斥結果：落在 b 或落在 c。若 H₀ 成立，兩個方向機率相同，因此 b 可以視為參數 π₀=1/2 的二項隨機變數。" },
  { type: "formulaGroup", formulas: [
    { label: "不一致配對數", latex: "n=b+c", fallback: "n=b+c" },
    { label: "H₀ 下 b 的分布", latex: "B\\mid(B+C=n)\\sim\\operatorname{Binomial}\\left(n,\\frac12\\right)", fallback: "B | (B+C=n) ~ Binomial(n,1/2)" },
    { label: "樣本中的 b 比例", latex: "\\hat p_b=\\frac{b}{b+c}", fallback: "p̂b=b/(b+c)" },
    { label: "H₀ 下的平均數與變異數", latex: "E(B)=\\frac n2,\\qquad\\operatorname{Var}(B)=\\frac n4", fallback: "E(B)=n/2；Var(B)=n/4" }
  ] },
  { type: "callout", tone: "intuition", label: "自由度為什麼是 1？", text: "n=b+c 固定後，只要知道 b，c=n−b 就同時被決定。兩種改變方向只有一份可自由變動的資訊，因此大樣本卡方統計量的自由度為 1。" },

  { type: "heading", text: "從比例 Z 推到 McNemar 卡方公式" },
  { type: "paragraph", text: "先把 b 在不一致配對中的比例，與 H₀ 指定的 π₀=1/2 比較。這與單一二項比例 Z 檢定使用相同的標準化結構。" },
  { type: "formulaGroup", formulas: [
    { label: "單一比例 Z 統計量", latex: "Z=\\frac{\\hat p_b-\\pi_0}{\\sqrt{\\pi_0(1-\\pi_0)/n}}", fallback: "Z=(p̂b−π₀)/√[π₀(1−π₀)/n]" },
    { label: "分子、分母同乘 n", latex: "Z=\\frac{n\\hat p_b-n\\pi_0}{\\sqrt{n\\pi_0(1-\\pi_0)}}", fallback: "Z=(np̂b−nπ₀)/√[nπ₀(1−π₀)]" },
    { label: "代入 n p̂b=b、π₀=1/2", latex: "Z=\\frac{b-n/2}{\\sqrt{n(1/2)(1/2)}}", fallback: "Z=(b−n/2)/√[n(1/2)(1/2)]" },
    { label: "再代入 n=b+c", latex: "Z=\\frac{b-(b+c)/2}{\\sqrt{(b+c)/4}}", fallback: "Z={b−(b+c)/2}/√[(b+c)/4]" },
    { label: "分子與分母分別化簡", latex: "Z=\\frac{(b-c)/2}{\\sqrt{b+c}/2}", fallback: "Z=[(b−c)/2]/[√(b+c)/2]" },
    { label: "約去共同的 1/2", latex: "Z=\\frac{b-c}{\\sqrt{b+c}}", fallback: "Z=(b−c)/√(b+c)" }
  ] },
  { type: "paragraph", text: "自由度為 1 時，標準常態變數的平方服從 χ²₁。把前面每一步得到的 Z 平方，就得到未校正的 McNemar 卡方統計量：" },
  { type: "formulaGroup", formulas: [
    { label: "由一般比例公式開始", latex: "\\chi_1^2=Z^2=\\left(\\frac{\\hat p_b-\\pi_0}{\\sqrt{\\pi_0(1-\\pi_0)/n}}\\right)^2", fallback: "χ²(1)=Z²={(p̂b−π₀)/√[π₀(1−π₀)/n]}²" },
    { label: "改寫成二項計數", latex: "=\\left(\\frac{n\\hat p_b-n\\pi_0}{\\sqrt{n\\pi_0(1-\\pi_0)}}\\right)^2", fallback: "={(np̂b−nπ₀)/√[nπ₀(1−π₀)]}²" },
    { label: "代入 b、c 與 π₀=1/2", latex: "=\\left(\\frac{b-(b+c)/2}{\\sqrt{(b+c)(1/2)(1/2)}}\\right)^2", fallback: "={b−(b+c)/2}²/{(b+c)(1/2)(1/2)}" },
    { label: "化簡分子與分母", latex: "=\\left(\\frac{(b-c)/2}{\\sqrt{b+c}/2}\\right)^2", fallback: "={[(b−c)/2]/[√(b+c)/2]}²" },
    { label: "未校正 McNemar 統計量", latex: "\\chi_M^2=\\frac{(b-c)^2}{b+c}", fallback: "χ²M=(b−c)²/(b+c)" }
  ] },
  { type: "callout", tone: "intuition", label: "看 b 或看 c 會得到同一結果", text: "b 比期望值 n/2 多多少，c 就會比 n/2 少多少；兩者偏差大小相同、方向相反。平方後方向消失，因此只需用其中一個二項計數推導即可。" },

  { type: "heading", text: "小樣本、精確檢定與連續性校正" },
  { type: "paragraph", text: "原始的大樣本卡方公式依賴二項分布的常態近似。早期常以 b+c≥20 作為使用近似公式的經驗規則，但這不是不可變動的界線；當不一致配對數較少時，可以直接使用條件二項分布計算精確 p 值。" },
  { type: "formulaGroup", formulas: [
    { label: "精確雙尾二項 p 值", latex: "p_{\\mathrm{exact}}=2\\min\\left\\{P(B\\leq b_{\\mathrm{obs}}),\\ P(B\\geq b_{\\mathrm{obs}})\\right\\}\\quad\\text{並以 }1\\text{ 為上限}", fallback: "p_exact=2×較小尾端機率，最大為 1" },
    { label: "連續性校正的 McNemar 統計量", latex: "\\chi_{M,Y}^2=\\frac{\\left(|b-c|-1\\right)^2}{b+c}", fallback: "χ²M,Y=(|b−c|−1)²/(b+c)" }
  ] },
  { type: "paragraph", text: "連續性校正先在單一二項計數 b 的尺度，將觀察值與期望值 n/2 的絕對距離減去 0.5：" },
  { type: "formulaGroup", formulas: [
    { label: "在 b 的尺度作 0.5 校正", latex: "Z_Y=\\frac{|b-n/2|-0.5}{\\sqrt{n(1/2)(1/2)}}", fallback: "ZY={|b−n/2|−0.5}/√[n(1/2)(1/2)]" },
    { label: "代入 n=b+c", latex: "Z_Y=\\frac{|b-(b+c)/2|-0.5}{\\sqrt{(b+c)/4}}", fallback: "ZY={|b−(b+c)/2|−0.5}/√[(b+c)/4]" },
    { label: "把絕對差提出 1/2", latex: "Z_Y=\\frac{|b-c|/2-1/2}{\\sqrt{b+c}/2}", fallback: "ZY={|b−c|/2−1/2}/[√(b+c)/2]" },
    { label: "分子、分母同乘 2", latex: "Z_Y=\\frac{|b-c|-1}{\\sqrt{b+c}}", fallback: "ZY=(|b−c|−1)/√(b+c)" },
    { label: "平方得到校正後卡方", latex: "\\chi_{M,Y}^2=Z_Y^2=\\frac{(|b-c|-1)^2}{b+c}", fallback: "χ²M,Y=ZY²=(|b−c|−1)²/(b+c)" }
  ] },
  { type: "callout", tone: "forward", label: "減 0.5 為什麼最後變成減 1？", text: "因為 |b−n/2|=|b−c|/2。把分子與分母共同具有的 1/2 約掉時，原本在 b 尺度減去的 0.5，也會在 b−c 的尺度變成減去 1。" },
  { type: "paragraph", text: "精確二項檢定直接使用離散分布；連續性校正仍是大樣本近似，而且可能較保守。實務上應依分析計畫與軟體方法一致報告，不能計算多種版本後只選最顯著的結果。" },

  { type: "heading", text: "不要和獨立性卡方檢定混在一起" },
  { type: "table", rows: [
    ["比較項目", "卡方獨立性檢定", "McNemar 檢定"],
    ["資料關係", "不同觀察單位彼此獨立", "同一單位前後測量或成對資料"],
    ["研究問題", "兩個類別變項是否獨立", "兩個方向的改變機率是否相同"],
    ["使用的儲存格", "所有儲存格 O 與 E", "只使用不一致配對 b、c"],
    ["大樣本統計量", { parts: [{ type: "inlineFormula", latex: "\\sum(O-E)^2/E", fallback: "Σ(O−E)²/E" }] }, { parts: [{ type: "inlineFormula", latex: "(b-c)^2/(b+c)", fallback: "(b−c)²/(b+c)" }] }]
  ] },
  { type: "callout", tone: "intuition", label: "相同的四格外觀，不代表相同的分析", text: "獨立 2×2 表與配對 2×2 表都可能看起來有四格，但每個數字的來源不同。是否為同一受試者前後測量或明確配對，必須由研究設計判斷，不能只看表格形狀選檢定。" },

  { type: "heading", text: "檢定步驟" },
  { type: "list", ordered: true, items: [
    "確認結果是二元資料，而且兩次測量或兩個觀察能正確一一配對。",
    "依固定方向建立配對 2×2 表，辨認一致配對 a、d 與不一致配對 b、c。",
    "設定 H₀:P_b=P_c；有效樣本數使用 n=b+c。",
    "依不一致配對數與預定方法，使用精確二項檢定、未校正或連續性校正的 McNemar 統計量。",
    "報告 b、c 的實際方向、p 值與前後邊際比例，回到研究問題解釋改變。"
  ] }
];
