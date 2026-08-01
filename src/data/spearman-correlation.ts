export const spearmanCorrelation = [
  { type: "paragraph", text: "Spearman 等級相關係數（Spearman's rank correlation coefficient），通常記為 rₛ；母體參數記為 ρₛ。它先把 X、Y 的觀察值各自轉成等級，再衡量兩組等級之間的相關。因此，它關心的是：X 增加時，Y 是否大致持續增加或持續減少。" },
  { type: "callout", tone: "intuition", label: "它衡量的是單調關係", text: "Pearson 相關主要衡量直線關係；Spearman 相關衡量單調關係。只要 X 愈大時 Y 大致也愈大，或大致愈小，即使變化不是直線，Spearman 仍可能呈現很強的相關。" },

  { type: "heading", text: "什麼時候考慮 Spearman 相關？" },
  { type: "list", items: [
    "至少一個變數本身是次序資料，例如疾病分期、疼痛等級或滿意度等級。",
    "兩個變數呈現單調但非線性的關係，排序方向穩定，直線卻不能妥善描述關係。",
    "資料有明顯離群值，使以原始數值計算的 Pearson 相關受到過度影響。",
    "連續資料嚴重偏態，而且研究問題在意相對次序，而不是原始尺度上的線性變化。",
  ] },
  { type: "callout", tone: "caution", label: "偏態不會自動決定方法", text: "偏態資料是考慮 rank 轉換的常見情境，但不能只因某一變數非常態就自動改用 Spearman。應先查看散布圖，並綜合資料尺度、離群值與關係形狀選擇方法。Pearson 相關並不要求 X、Y 各自都必須呈常態；進行推論時，需考慮的是成對資料的聯合關係與相關的抽樣分配。" },

  { type: "heading", text: "第一步：把原始數值轉成等級" },
  { type: "paragraph", text: "分別對 X 與 Y 由小到大排序，把最小值記為第 1 名、次小值記為第 2 名，依序得到 R(Xᵢ) 與 R(Yᵢ)。Spearman 只使用這些等級計算，所以原始數值相差多少不再直接進入公式。" },
  { type: "table", rows: [
    ["觀察對象", "X", "X 的等級 R(X)", "Y", "Y 的等級 R(Y)"],
    ["A", "10", "1", "42", "2"],
    ["B", "15", "2.5", "35", "1"],
    ["C", "15", "2.5", "51", "3"],
    ["D", "22", "4", "68", "4"],
  ] },
  { type: "paragraph", text: "若數值相同，就把原本應占名次的平均值分給它們。例子中的兩個 X=15 原本占第 2、3 名，所以兩者都使用平均等級 (2+3)/2=2.5。這稱為同分名次（ties）的平均等級處理。" },

  { type: "heading", text: "第二步：對等級計算 Pearson 相關" },
  { type: "paragraph", text: "完成 rank 轉換後，把 X 的等級與 Y 的等級代入 Pearson 相關係數的形式。這就是 Spearman 等級相關最一般、也能正確處理同分名次的定義。" },
  { type: "formula", latex: "r_s=\\frac{\\sum_{i=1}^{n}[R(X_i)-\\overline{R_X}][R(Y_i)-\\overline{R_Y}]}{\\sqrt{\\sum_{i=1}^{n}[R(X_i)-\\overline{R_X}]^2}\\sqrt{\\sum_{i=1}^{n}[R(Y_i)-\\overline{R_Y}]^2}}", fallback: "rₛ=等級 X 與等級 Y 的 Pearson 相關係數" },
  { type: "table", rows: [
    ["符號", "意義"],
    ["R(Xᵢ)、R(Yᵢ)", "第 i 對觀察值在 X、Y 中的等級"],
    ["R̄X、R̄Y", "X 等級與 Y 等級的平均數"],
    ["rₛ", "樣本 Spearman 等級相關係數"],
    ["ρₛ", "母體 Spearman 等級相關係數"],
  ] },

  { type: "heading", text: "沒有同分名次時的捷徑公式" },
  { type: "paragraph", text: "若 X、Y 都沒有同分名次，可先求每一對名次差 dᵢ=R(Xᵢ)−R(Yᵢ)，再使用下式。它是一般 rank-correlation 公式在沒有 ties 時化簡得到的捷徑，不是另一種相關係數。" },
  { type: "formulaGroup", formulas: [
    { label: "每一對的名次差", latex: "d_i=R(X_i)-R(Y_i)", fallback: "dᵢ=R(Xᵢ)−R(Yᵢ)" },
    { label: "Spearman 捷徑公式", latex: "r_s=1-\\frac{6\\sum_{i=1}^{n}d_i^2}{n(n^2-1)}", fallback: "rₛ=1−6Σdᵢ²/[n(n²−1)]" },
  ] },
  { type: "callout", tone: "caution", label: "有同分名次時不要直接套捷徑", text: "資料有 ties 時，先給予平均等級，再直接計算兩組等級的 Pearson 相關最清楚。若仍要使用名次差的捷徑，必須另外加入 ties 修正，不能原式照套。" },

  { type: "heading", text: "rₛ 的方向與大小如何判讀？" },
  { type: "table", rows: [
    ["rₛ", "等級關係"],
    ["接近 +1", "X 的等級愈高，Y 的等級幾乎也愈高"],
    ["接近 −1", "X 的等級愈高，Y 的等級幾乎愈低"],
    ["接近 0", "沒有明顯的單調關係"],
  ] },
  { type: "paragraph", text: "係數的正負表示方向，絕對值表示單調關係的強弱。rₛ 接近 0 不代表完全沒有任何關係；資料仍可能存在 U 形等非單調關係。因此，即使使用 Spearman，也應先查看原始資料的散布圖。" },

  { type: "heading", text: "從虛無假設進行推論" },
  { type: "paragraph", text: "若研究問題是母體中是否存在單調關聯，先提出 H₀:ρₛ=0；雙尾對立假設為 H₁:ρₛ≠0。樣本 rₛ 是效果方向與大小的估計，p 值則評估在 H₀ 成立時，目前或更極端的等級排列有多不尋常。" },
  { type: "formula", latex: "H_0:\\rho_s=0\\qquad H_1:\\rho_s\\ne0", fallback: "H₀: ρₛ=0；H₁: ρₛ≠0" },
  { type: "list", ordered: true, items: [
    "確認觀察值成對且不同觀察對彼此獨立，並查看散布圖是否呈單調型態。",
    "分別將 X、Y 轉成等級；同分數值使用平均等級。",
    "以兩組等級計算 rₛ，保留正負號並報告樣本數。",
    "依樣本大小與 ties 情況使用精確檢定、排列檢定或合適的近似法求 p 值與信賴區間。",
    "結合 rₛ、信賴區間、p 值與資料圖形解釋，而不是只寫顯著或不顯著。",
  ] },

  { type: "heading", text: "Spearman rₛ 能直接做 Fisher Z 轉換嗎？" },
  { type: "paragraph", text: "Fisher Z 的 z=atanh(r) 與標準誤 1/√(n−3)，是針對 Pearson 相關在特定條件下建立的結果。不能只把公式中的 r 換成 rₛ，就將它當成一般的 Spearman 推論公式。" },
  { type: "paragraph", text: "Spearman 相關的 p 值與信賴區間應使用統計軟體中明確針對 Spearman 設計的方法，例如精確或排列檢定，以及適當的 bootstrap 信賴區間。部分大型樣本方法可能在額外假設下使用轉換近似，但必須說明所採方法，不能只寫「進入 Fisher Z 後查 Z 表」。" },
  { type: "callout", tone: "intuition", label: "rank 轉換也會改變推論方法", text: "Spearman 相關仍然依照「計算樣本統計量、提出母體虛無假設、評估抽樣不確定性」的流程進行推論。然而，rank 轉換改變了統計量的抽樣分配，因此不能自動沿用 Pearson r 的 Fisher Z 標準誤。" },
];
