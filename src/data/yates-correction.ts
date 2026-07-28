export const yatesCorrection = [
  { type: "paragraph", text: "Yates 連續性校正（Yates continuity correction）是針對自由度為 1 的 2×2 Pearson 卡方檢定所提出的修正。它處理的問題是：2×2 表的計數只能取整數，但 Pearson 卡方檢定使用連續的卡方分布近似；樣本較小時，這段由離散到連續的近似誤差可能較明顯。" },
  { type: "callout", tone: "forward", label: "這一頁的主線", text: "先看離散二項分布如何用連續常態曲線近似 → 說明界線為何移動 0.5 → 將 |O−E| 改成 |O−E|−0.5 → 套用到 2×2 表 → 最後銜接下一頁的 Fisher 精確檢定。" },

  { type: "heading", text: "為什麼需要連續性校正？" },
  { type: "paragraph", text: "以整數計數 X 為例，事件 X≥8 包含 8、9、10⋯這些離散值。若直接用連續曲線從 8 開始計算右尾面積，會漏掉代表 X=8 的柱狀機率左半部；因此常態近似會把界線移到 7.5，讓 7.5 到 8.5 的連續面積代表整個 X=8。" },
  { type: "image", imageId: "yates-binomial-continuity-correction" },
  { type: "formulaGroup", formulas: [
    { label: "離散事件", latex: "P(X\\geq 8)", fallback: "P(X≥8)" },
    { label: "連續性校正後的常態近似", latex: "P(X\\geq8)\\approx P(Y\\geq7.5)", fallback: "P(X≥8)≈P(Y≥7.5)" },
    { label: "界線移動距離", latex: "8-7.5=0.5", fallback: "8−7.5=0.5" }
  ] },
  { type: "callout", tone: "intuition", label: "0.5 從哪裡來？", text: "相鄰整數的距離是 1，每個整數可由左右各 0.5 的連續區間代表。連續性校正不是任意扣除常數，而是在連續曲線上補回整數柱狀機率所占的半格寬度。" },

  { type: "heading", text: "由 Pearson 卡方改成 Yates 校正" },
  { type: "paragraph", text: "未校正 Pearson 統計量直接使用每格的 |O−E|。Yates 校正先將觀察值與期望值的絕對差縮小 0.5，再平方並除以期望次數；這會使統計量變小、p 值通常變大。" },
  { type: "formulaGroup", formulas: [
    { label: "未校正 Pearson 卡方", latex: "\\chi_P^2=\\sum\\frac{(O-E)^2}{E}", fallback: "χ²P=Σ(O−E)²/E" },
    { label: "Yates 連續性校正", latex: "\\chi_Y^2=\\sum\\frac{\\left(|O-E|-0.5\\right)^2}{E}", fallback: "χ²Y=Σ(|O−E|−0.5)²/E" }
  ] },
  { type: "callout", tone: "intuition", label: "為什麼一定先取絕對值？", text: "校正的目標是把差異的大小往 0 拉近 0.5，不是對所有 O−E 直接減 0.5。若 O−E 為負數而沒有先取絕對值，反而會讓差異變得更大，失去連續性校正的意義。" },

  { type: "heading", text: "2×2 表的 Yates 簡化公式" },
  { type: "table", rows: [
    ["", "有疾病", "無疾病", "列合計"],
    ["有暴露", "A", "B", "A+B"],
    ["無暴露", "C", "D", "C+D"],
    ["欄合計", "A+C", "B+D", "N=A+B+C+D"]
  ] },
  { type: "paragraph", text: "2×2 表的自由度為 1。將四格期望次數代入 Yates 校正公式並整理後，可得到下列交叉乘積形式：" },
  { type: "formula", latex: "\\chi_Y^2=\\frac{N\\left(|AD-BC|-N/2\\right)^2}{(A+B)(C+D)(A+C)(B+D)}", fallback: "χ²Y=N(|AD−BC|−N/2)²/[(A+B)(C+D)(A+C)(B+D)]" },
  { type: "table", rows: [
    ["公式", "交叉乘積中的差異"],
    ["未校正 Pearson", { parts: [{ type: "inlineFormula", latex: "(AD-BC)^2", fallback: "(AD−BC)²" }] }],
    ["Yates 校正", { parts: [{ type: "inlineFormula", latex: "(|AD-BC|-N/2)^2", fallback: "(|AD−BC|−N/2)²" }] }]
  ] },
  { type: "callout", tone: "forward", label: "兩個公式不要混用", text: "逐格公式中的校正量是 0.5；整理成交叉乘積簡化式後則表現為 N/2。不能把簡化式中的 N/2 再代回每一格，也不能在交叉乘積公式中只減 0.5。" },

  { type: "heading", text: "校正後會發生什麼？" },
  { type: "formula", latex: "\\chi_Y^2\\leq\\chi_P^2\\quad\\Longrightarrow\\quad p_Y\\geq p_P\\qquad\\text{（同一張 2×2 表）}", fallback: "χ²Y≤χ²P，因此同一張表通常有 pY≥pP" },
  { type: "paragraph", text: "Yates 校正把觀察值與期望值的差異往 0 拉近，因此較不容易拒絕 H₀。它原本是為了降低小樣本下卡方近似偏向顯著的風險，但在某些情況會校正過度，使檢定過於保守並降低 power。" },
  { type: "callout", tone: "intuition", label: "校正不是讓資料更接近常態", text: "資料本身與二項分布並沒有被改變。被修正的是使用連續分布近似離散尾端機率時的界線，因此更精確的說法是「改善離散到連續的近似」，不是把資料轉換成常態分布。" },

  { type: "callout", tone: "forward", label: "下一頁再決定方法怎麼選", text: "Yates 只適用於 2×2 表、df=1，而且仍屬於卡方近似。至於哪些情況使用未校正 Pearson、Yates 或 Fisher，會在下一頁先說清楚 Fisher 的精確機率，再統一比較，避免在尚未介紹方法前先給選擇表。" }
];
