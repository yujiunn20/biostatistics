export const normalDistribution = [
  { type: "paragraph", text: "常態分配（normal distribution）是一種連續型機率分配，因其密度曲線呈左右對稱的鐘形，也常稱為高斯分配（Gaussian distribution）。它是統計學中最重要的分配之一，許多測量值、抽樣統計量與統計方法都會直接或間接使用它。" },
  { type: "callout", tone: "intuition", label: "先分清楚名稱", text: "「常態分配」是一整個分配家族；「標準常態分配」則是其中平均數為 0、標準差為 1 的特例。Z 通常代表標準常態變數，因此不宜把所有常態分配都直接稱為 Z 分配。" },
  { type: "heading", text: "常態分配的形狀" },
  { type: "paragraph", text: "常態分配由平均數 μ 與變異數 σ² 決定。平均數控制曲線的中心位置；標準差 σ 控制資料的分散程度。σ 愈大，曲線愈寬、愈平；σ 愈小，曲線愈窄、愈高。" },
  { type: "list", items: ["曲線以平均數 μ 為中心，左右對稱", "平均數、中位數與眾數位於同一個中心位置", "曲線兩端會逐漸接近 x 軸，但不會與 x 軸相交", "整條密度曲線下的總面積等於 1", "區間內的機率等於該區間在曲線下的面積"] },
  { type: "formulaGroup", formulas: [
    { label: "常態分配的記法", latex: "X\\sim N(\\mu,\\sigma^2)", fallback: "X ~ N(μ, σ²)" },
    { label: "機率密度函數", latex: "f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\!\\left[-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right]", fallback: "f(x)=1/(σ√(2π)) × exp[−(x−μ)²/(2σ²)]" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["X", "服從常態分配的連續型隨機變數"], ["x", "X 的某個可能值"], ["μ", "母體平均數；決定分配的中心"], ["σ", "母體標準差；決定分配的寬窄"], ["σ²", "母體變異數"], ["f(x)", "x 位置上的機率密度，不是單一點的機率"], ["π、exp", "圓周率與指數函數"]] },
  { type: "heading", text: "標準常態分配與 Z 分數" },
  { type: "paragraph", text: "不同平均數與標準差的常態分配不方便共用同一張機率表。將 X 減去平均數，再除以標準差，就能把它轉換成標準常態變數 Z。這個過程稱為標準化（standardization）。" },
  { type: "formulaGroup", formulas: [
    { label: "標準化", latex: "Z=\\frac{X-\\mu}{\\sigma}", fallback: "Z=(X−μ)/σ" },
    { label: "標準常態分配", latex: "Z\\sim N(0,1)", fallback: "Z ~ N(0, 1)" }
  ] },
  { type: "paragraph", text: "Z 分數表示某個觀察值距離平均數多少個標準差。例如 z=1.5，表示該值位於平均數上方 1.5 個標準差；z=−2，表示位於平均數下方 2 個標準差。標準化只改變測量尺度，不會改變觀察值之間的相對位置或分配形狀。" },
  { type: "table", rows: [["符號", "代表意義"], ["Z、z", "標準常態變數及其某個取值"], ["X", "標準化前的隨機變數"], ["μ", "X 的母體平均數"], ["σ", "X 的母體標準差"], ["N(0,1)", "平均數為 0、變異數為 1 的標準常態分配"]] },
  { type: "callout", tone: "intuition", label: "直覺理解", text: "標準化是在回答：「這個值離平均數有多遠？」但距離不是使用原本單位，而是以標準差作為共同尺度，因此不同量尺的數值也能放在相同基準下理解。" },
  { type: "heading", text: "從密度曲線取得機率" },
  { type: "paragraph", text: "常態分配是連續型分配，因此單一點的機率為 0。實際計算的是某個區間在密度曲線下的面積。例如 P(a≤X≤b) 表示 X 落在 a 到 b 之間的機率。" },
  { type: "formulaGroup", formulas: [
    { label: "單一點的機率", latex: "P(X=x)=0", fallback: "P(X=x)=0" },
    { label: "區間機率", latex: "P(a\\le X\\le b)=\\int_a^b f(x)\\,dx", fallback: "P(a≤X≤b)=∫ₐᵇ f(x)dx" },
    { label: "總面積", latex: "\\int_{-\\infty}^{\\infty}f(x)\\,dx=1", fallback: "∫₋∞^∞ f(x)dx=1" }
  ] },
  { type: "heading", text: "累積分布函數與 Z 表" },
  { type: "paragraph", text: "標準常態分配的累積分布函數通常記為 Φ(z)，表示標準常態變數 Z 落在 z 左側的機率。傳統 Z 表列出的通常就是這種累積面積；使用前仍要確認手上的表格究竟列左尾、右尾，還是平均數到 z 之間的面積。" },
  { type: "formulaGroup", formulas: [
    { label: "左側累積機率", latex: "\\Phi(z)=P(Z\\le z)", fallback: "Φ(z)=P(Z≤z)" },
    { label: "左右對稱關係", latex: "\\Phi(z)=1-\\Phi(-z)", fallback: "Φ(z)=1−Φ(−z)" },
    { label: "右尾機率", latex: "P(Z>z)=1-\\Phi(z)", fallback: "P(Z>z)=1−Φ(z)" }
  ] },
  { type: "table", rows: [["z 值", "左側累積機率 Φ(z)", "常見解讀"], ["−∞", "0", "左側沒有面積"], ["0", "0.5000", "對稱中心，左右各占一半"], ["1.645", "約 0.9500", "右尾約占 5%"], ["1.960", "約 0.9750", "右尾約占 2.5%；中央 −1.96 到 1.96 約占 95%"], ["+∞", "1", "已包含全部面積"]] },
  { type: "callout", tone: "intuition", label: "不要把累積機率看成曲線高度", text: "Φ(z) 是 z 左側累積起來的面積；f(z) 才是曲線在 z 位置上的密度高度。兩者描述的不是同一件事。" },
  { type: "heading", text: "常態分配為什麼重要？" },
  { type: "paragraph", text: "有些生物測量值在特定族群與條件下可能近似常態分配，但不能因為資料是連續型就直接假設常態。是否近似常態，仍應配合研究背景、圖形與診斷方法判斷。" },
  { type: "list", items: ["許多抽樣統計量在適當條件與足夠樣本量下會近似常態分配", "二項分配等某些分配在符合條件時可以用常態分配近似", "t、χ² 與 F 分配可由獨立標準常態變數的不同運算建立", "信賴區間、假設檢定與迴歸分析經常使用常態理論或其近似"] },
  { type: "callout", tone: "forward", label: "與後續分配的關係", text: "t、χ² 與 F 分配和常態變數有明確的數學關係，但使用這些方法時，應分別檢查該方法對誤差、樣本或統計量的假設；不能一概解讀成所有原始資料都必須完全符合常態分配。" },
];
