export const fishersExactTest = [
  { type: "paragraph", text: "Fisher 精確檢定（Fisher’s exact test）用來檢定兩個二元類別變項是否獨立，特別適合樣本較小或 2×2 表中期望次數偏小的情況。它不以連續的卡方分布近似離散資料，而是在固定列、欄邊際總數後，直接計算目前表格及同樣或更極端表格的機率。" },
  { type: "callout", tone: "forward", label: "這一頁的主線", text: "固定四個邊際總數 → 找出所有可能的 2×2 表 → 用超幾何分布計算每張表的機率 → 依單尾或雙尾定義加總更極端表格的機率 → 再與 Pearson、Yates 方法比較。" },

  { type: "heading", text: "固定邊際後，只剩一格可以改變" },
  { type: "paragraph", text: "沿用前面 2×2 表的 a、b、c、d，不再重複表格結構。令兩個列合計為 R₁、R₂，兩個欄合計為 C₁、C₂。Fisher 檢定的新增觀念，是在這四個邊際總數固定時列舉表格；只要決定左上角 a，其餘三格便全部確定。" },
  { type: "formulaGroup", formulas: [
    { label: "沿用既有邊際符號", latex: "R_1=a+b,\\quad R_2=c+d,\\quad C_1=a+c,\\quad C_2=b+d", fallback: "R₁=a+b；R₂=c+d；C₁=a+c；C₂=b+d" },
    { label: "由 a 決定其他三格", latex: "b=R_1-a,\\qquad c=C_1-a,\\qquad d=R_2-C_1+a", fallback: "b=R₁−a；c=C₁−a；d=R₂−C₁+a" },
    { label: "a 的最小可能值", latex: "a_{\\min}=\\max(0,R_1-C_2)", fallback: "a_min=max(0,R₁−C₂)" },
    { label: "a 的最大可能值", latex: "a_{\\max}=\\min(R_1,C_1)", fallback: "a_max=min(R₁,C₁)" }
  ] },
  { type: "callout", tone: "intuition", label: "不是重新任意分配所有人", text: "列舉表格時，列總數、欄總數與 N 都保持不變；改變的只有四格如何在這些邊際限制下排列。這正是 Fisher 檢定的條件式觀點。" },
  { type: "callout", tone: "forward", label: "假設沿用前面的獨立性檢定", text: "H₀ 仍是兩變項獨立，在 2×2 表中等價於 OR=1；Fisher 改變的是 p 值的計算方法，不是研究問題或虛無假設。" },

  { type: "heading", text: "一張特定表格的精確機率" },
  { type: "paragraph", text: "在 H₀ 與固定邊際總數下，可以把第 1 欄的 C₁ 個觀察視為 N 個位置中的「成功」，再從 N 個位置中選出 R₁ 個放入第 1 列。第 1 列恰好取得 a 個第 1 欄觀察的機率服從超幾何分布。" },
  { type: "formulaGroup", formulas: [
    { label: "組合數寫法", latex: "P(A=a\\mid R_1,R_2,C_1,C_2)=\\frac{\\binom{C_1}{a}\\binom{C_2}{R_1-a}}{\\binom{N}{R_1}}", fallback: "P(A=a | margins)=C(C₁,a)C(C₂,R₁−a)/C(N,R₁)" },
    { label: "以四格次數寫成階乘", latex: "P(a,b,c,d)=\\frac{R_1!R_2!C_1!C_2!}{a!b!c!d!N!}", fallback: "P(a,b,c,d)=R₁!R₂!C₁!C₂!/(a!b!c!d!N!)" }
  ] },
  { type: "callout", tone: "intuition", label: "精確指的是什麼？", text: "這裡的「精確」表示 p 值直接由離散機率模型計算，不依賴樣本變大後才成立的卡方近似；它不是說研究結果沒有抽樣誤差，也不是說 p 值等於虛無假設為真的機率。" },

  { type: "details", label: "補充：為什麼會得到超幾何公式？", children: [
    { type: "paragraph", text: "固定欄總數後，N 個觀察中有 C₁ 個屬於第 1 欄、C₂ 個屬於第 2 欄。現在從 N 個觀察中選 R₁ 個進入第 1 列，所有選法共有 C(N,R₁) 種。" },
    { type: "formulaGroup", formulas: [
      { label: "全部可能選法", latex: "\\binom{N}{R_1}", fallback: "C(N,R₁)" },
      { label: "第 1 欄選出 a 個", latex: "\\binom{C_1}{a}", fallback: "C(C₁,a)" },
      { label: "第 2 欄選出 R₁−a 個", latex: "\\binom{C_2}{R_1-a}", fallback: "C(C₂,R₁−a)" }
    ] },
    { type: "paragraph", text: "符合這張表的選法數等於後兩個組合數相乘，再除以全部選法數，就得到該表格的條件機率。" },
    { type: "formula", latex: "P(A=a\\mid\\text{margins})=\\frac{\\binom{C_1}{a}\\binom{C_2}{R_1-a}}{\\binom{N}{R_1}}", fallback: "P(A=a | margins)=C(C₁,a)C(C₂,R₁−a)/C(N,R₁)" },
    { type: "paragraph", text: "把每個組合數展開為 n!/[k!(n−k)!]，並利用 b=R₁−a、c=C₁−a、d=R₂−C₁+a，即可整理成四格階乘公式。" },
    { type: "formula", latex: "\\frac{\\binom{C_1}{a}\\binom{C_2}{b}}{\\binom{N}{R_1}}=\\frac{R_1!R_2!C_1!C_2!}{a!b!c!d!N!}", fallback: "C(C₁,a)C(C₂,b)/C(N,R₁)=R₁!R₂!C₁!C₂!/(a!b!c!d!N!)" }
  ] },

  { type: "heading", text: "從單張表格的機率得到 p 值" },
  { type: "paragraph", text: "觀察表格本身的機率還不是完整 p 值。p 值必須把 H₀ 下與目前結果一樣極端或更極端的所有可能表格機率加總；所謂極端，是指更支持預先設定之 H₁ 的方向。" },
  { type: "paragraph", text: "單尾檢定必須事先指定關聯方向，例如 OR>1 或 OR<1；雙尾檢定則關心任何方向的偏離。不能看到資料後才決定採用哪一個尾端。" },
  { type: "formulaGroup", formulas: [
    { label: "右尾：較大的 a 支持指定方向", latex: "p_{\\mathrm{right}}=\\sum_{a\\geq a_{\\mathrm{obs}}}P(A=a\\mid\\text{margins})", fallback: "p_right=Σ(a≥a_obs)P(A=a | margins)" },
    { label: "左尾：較小的 a 支持指定方向", latex: "p_{\\mathrm{left}}=\\sum_{a\\leq a_{\\mathrm{obs}}}P(A=a\\mid\\text{margins})", fallback: "p_left=Σ(a≤a_obs)P(A=a | margins)" }
  ] },
  { type: "callout", tone: "forward", label: "雙尾 p 值不是永遠等於單尾乘 2", text: "2×2 表的超幾何分布可能不對稱。常用的雙尾定義會加總所有機率小於或等於觀察表格機率的可能表格；不同軟體也可能採用不同的雙尾或 mid-p 定義，因此報告結果時應說明使用的方法。" },
  { type: "formula", latex: "p_{\\mathrm{two\\text{-}sided}}=\\sum_{T:\\,P(T)\\leq P(T_{\\mathrm{obs}})}P(T)", fallback: "p_two-sided=Σ所有 P(T)≤P(T_obs) 的表格機率" },

  { type: "heading", text: "列舉計算的完整流程" },
  { type: "list", ordered: true, items: [
    "由觀察表格算出 R₁、R₂、C₁、C₂ 與 N，後續保持這些邊際總數不變。",
    "利用 a_min 到 a_max 找出左上角 a 的所有可能值，並由 a 決定 b、c、d。",
    "對每一張可能表格代入超幾何公式，計算其條件機率。",
    "依預先設定的單尾方向，或軟體採用的雙尾定義，挑出與觀察結果同樣或更極端的表格。",
    "把這些表格的機率全部相加，得到 Fisher 精確檢定的 p 值。"
  ] },

  { type: "heading", text: "Pearson、Yates 與 Fisher 的比較" },
  { type: "table", rows: [
    ["比較項目", "Pearson 卡方", "Yates 校正", "Fisher 精確檢定"],
    ["基本方法", "以卡方分布作大樣本近似", "修正離散到連續的卡方近似", "直接計算固定邊際下的離散機率"],
    ["主要統計基礎", { parts: [{ type: "inlineFormula", latex: "\\sum(O-E)^2/E", fallback: "Σ(O−E)²/E" }] }, { parts: [{ type: "inlineFormula", latex: "\\sum(|O-E|-0.5)^2/E", fallback: "Σ(|O−E|−0.5)²/E" }] }, "超幾何分布"],
    ["適用表格", "一般 r×c 表", "僅 2×2、df=1", "主要用於 2×2 表"],
    ["小樣本表現", "近似可能不準確", "通常較保守，可能降低 power", "不依賴大樣本卡方近似"],
    ["p 值來源", "卡方分布右尾", "卡方分布右尾", "同樣或更極端表格的機率總和"]
  ] },
  { type: "paragraph", text: "Yates 與 Fisher 都常在小型 2×2 表中出現，但 Yates 仍然是卡方近似，Fisher 才是直接使用離散條件機率。樣本足夠時 Pearson 通常較直接；資料稀疏時則應優先考慮精確方法，而不是只套用固定的總樣本數門檻。" },
  { type: "heading", text: "方法怎麼選？" },
  { type: "paragraph", text: "方法選擇應檢查各格期望次數，而不是只看總樣本數，或看到某個觀察次數小於 5 就直接下結論。下表把前面三頁的方法集中在這裡整理一次。" },
  { type: "table", rows: [
    ["資料情況", "可考慮的方法"],
    ["2×2 表、各格期望次數充足", "未校正 Pearson 卡方通常即可"],
    ["2×2 表、預先決定採較保守的連續近似", "Yates 連續性校正"],
    ["2×2 表、樣本或期望次數很小", "優先考慮 Fisher 精確檢定"],
    ["大於 2×2 的一般 r×c 表", "Pearson 卡方；條件不足時考慮適合的精確或 Monte Carlo 方法"]
  ] },
  { type: "callout", tone: "forward", label: "觀察次數小於 5 不等於期望次數小於 5", text: "判斷卡方近似時要使用 E=列合計×欄合計÷N。固定門檻只是經驗規則，實際選擇仍應配合抽樣設計、表格稀疏程度與分析軟體採用的方法。" },
  { type: "callout", tone: "intuition", label: "方法不同，不應挑最小的 p 值", text: "Pearson、Yates 與 Fisher 可能給出不同 p 值。分析方法應依研究設計、期望次數與預先規劃決定，不能計算三種方法後只報告最顯著的一個。" },

  { type: "heading", text: "結果如何報告？" },
  { type: "paragraph", text: "Fisher 檢定回答的是兩個類別變項是否存在統計關聯。完整報告仍應同時提供 2×2 表的比例、OR 或 RR、相應信賴區間及研究設計背景；只有 p 值無法表示關聯方向與效果大小。" }
];
