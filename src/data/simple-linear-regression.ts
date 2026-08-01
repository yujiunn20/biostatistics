import { leastSquaresDerivation } from "./regression-derivation-supplements";

export const simpleLinearRegression = [
  { type: "paragraph", text: "簡單線性迴歸（simple linear regression）使用一個定量解釋變數 X，描述或預測另一個定量結果變數 Y。它以一條直線概括 X 與 Y 的平均關係，並把每個觀察值與直線之間的差距視為未被模型解釋的誤差。" },
  { type: "callout", tone: "intuition", label: "簡單線性迴歸的兩個目的", text: "解釋著重關係的方向與大小，例如 X 每增加一單位，Y 的平均值改變多少；預測則把已知的 X 代入迴歸方程式，估計尚未觀察的 Y。兩者使用同一條直線，但報告與判讀重點不同。" },

  { type: "heading", text: "可以回答哪些問題？" },
  { type: "list", items: [
    "行銷費用是否能預測營業額？",
    "壓力分數是否能預測血糖值？",
    "高等教育人口比例是否能預測國家人均所得？",
  ] },
  { type: "table", rows: [
    ["角色", "資料形式", "其他名稱"],
    ["X", "一個定量變數", "解釋變數、預測變數、自變數"],
    ["Y", "一個定量變數", "結果變數、效標變數、依變數"],
  ] },
  { type: "paragraph", text: "若解釋變數是類別資料，不能直接把類別編碼當成連續數值解釋；通常要建立虛擬變數（dummy variables），再以迴歸模型表示組別差異。只有一個二元類別變數時，這種模型與兩組平均數比較有密切關係。" },
  { type: "callout", tone: "caution", label: "關聯不等於因果", text: "迴歸線可以描述樣本中的關聯，也可以在合理條件下協助預測，但斜率顯著本身不能證明 X 造成 Y 改變。因果解釋還需要研究設計、時間順序、干擾因子與領域知識的支持。" },

  { type: "heading", text: "從散布圖開始" },
  { type: "paragraph", text: "計算迴歸線以前，應先畫出 X 與 Y 的散布圖。散布圖能顯示關係是否大致線性、是否存在離群值、資料是否分成不同群體，以及 Y 的變動程度是否會隨 X 改變。若資料型態明顯不是直線關係，只報告一條直線可能會掩蓋重要結構。" },
  { type: "image", imageId: "least-squares-residual" },
  { type: "paragraph", text: "圖中同一個 Xᵢ 對應一個觀察值 Yᵢ；迴歸線在該位置給出的高度是預測值 Ŷᵢ。兩者的垂直差就是殘差 eᵢ。殘差可以為正或負，代表觀察值位於迴歸線上方或下方。" },
  { type: "formula", latex: "e_i=Y_i-\\hat Y_i", fallback: "eᵢ=Yᵢ−Ŷᵢ" },

  { type: "heading", text: "母體模型與樣本迴歸線" },
  { type: "paragraph", text: "母體模型描述固定 X 時，Y 的條件平均數如何改變；樣本迴歸線則用樣本資料估計未知的母體截距與斜率。這兩層符號不應混在一起。" },
  { type: "formulaGroup", formulas: [
    { label: "母體模型", latex: "Y_i=\\beta_0+\\beta_1X_i+\\varepsilon_i", fallback: "Yᵢ=β₀+β₁Xᵢ+εᵢ" },
    { label: "固定 X 時的母體平均", latex: "E(Y_i\\mid X_i)=\\beta_0+\\beta_1X_i", fallback: "E(Yᵢ|Xᵢ)=β₀+β₁Xᵢ" },
    { label: "樣本估計線", latex: "\\hat Y_i=b_0+b_1X_i", fallback: "Ŷᵢ=b₀+b₁Xᵢ" },
    { label: "樣本殘差", latex: "e_i=Y_i-\\hat Y_i", fallback: "eᵢ=Yᵢ−Ŷᵢ" },
  ] },
  { type: "table", rows: [
    ["符號", "意義"],
    ["β₀、β₁", "母體截距與母體斜率，通常未知"],
    ["b₀、b₁", "由樣本估計的截距與斜率"],
    ["εᵢ", "母體模型中的隨機誤差，無法直接觀察"],
    ["eᵢ", "樣本中可計算的殘差，用來估計誤差"],
    ["Ŷᵢ", "把 Xᵢ 代入樣本迴歸線得到的預測值"],
  ] },

  { type: "heading", text: "截距與斜率如何解釋？" },
  { type: "paragraph", text: "斜率 β₁ 表示 X 每增加一單位時，Y 的條件平均值預期改變多少。正斜率表示平均關係向上，負斜率表示平均關係向下。截距 β₀ 是 X=0 時 Y 的條件平均值；只有當 X=0 位於合理且有資料支持的範圍內，截距才通常具有直接實質意義。" },
  { type: "callout", tone: "caution", label: "不要把直線外推太遠", text: "迴歸線主要概括已觀察 X 範圍內的關係。把模型用到遠離資料範圍的位置稱為外插；即使樣本內呈現線性，範圍外也不一定延續相同斜率。" },

  { type: "heading", text: "最小平方法如何選出一條線？" },
  { type: "paragraph", text: "不同的截距與斜率會產生不同預測值，也會產生不同殘差。普通最小平方法（ordinary least squares, OLS）選擇使殘差平方和 SSE 最小的 b₀ 與 b₁。平方能避免正負殘差互相抵銷，也會讓較大的垂直誤差受到較大權重。" },
  { type: "formula", latex: "(b_0,b_1)=\\arg\\min_{a,c}\\sum_{i=1}^{n}[Y_i-(a+cX_i)]^2", fallback: "(b₀,b₁)=使 Σ[Yᵢ−(a+cXᵢ)]² 最小的係數" },
  { type: "formulaGroup", formulas: [
    { label: "斜率估計值", latex: "b_1=\\frac{\\sum_{i=1}^{n}(X_i-\\bar X)(Y_i-\\bar Y)}{\\sum_{i=1}^{n}(X_i-\\bar X)^2}", fallback: "b₁=Σ(Xᵢ−X̄)(Yᵢ−Ȳ)/Σ(Xᵢ−X̄)²" },
    { label: "截距估計值", latex: "b_0=\\bar Y-b_1\\bar X", fallback: "b₀=Ȳ−b₁X̄" },
  ] },
  { type: "paragraph", text: "由 b₀=Ȳ−b₁X̄ 可知，含截距的最小平方法迴歸線一定通過樣本平均點 (X̄,Ȳ)。" },
  { type: "details", label: "補充：從最小平方法推導迴歸係數與平方和分解", children: leastSquaresDerivation },

  { type: "heading", text: "模型成立需要哪些條件？" },
  { type: "paragraph", text: "固定 X 時，Y 近似常態且具有相同標準差，是傳統簡單線性迴歸推論的基礎。各項條件分別負責不同部分：" },
  { type: "list", items: [
    "線性：固定 X 時，Y 的條件平均可由 β₀+β₁X 表示。",
    "獨立性：不同觀察值的誤差彼此獨立；時間序列、群聚或重複測量資料通常不符合這項條件。",
    "等變異性：固定不同 X 時，誤差具有相同變異數 σ²。",
    "常態性：進行小樣本 t、F 檢定與信賴區間時，通常假設固定 X 下的誤差近似常態。",
    "解釋變數具有足夠變化，且沒有單一極端 X 值過度主導迴歸線。",
  ] },
  { type: "formulaGroup", formulas: [
    { label: "誤差平均數", latex: "E(\\varepsilon_i\\mid X_i)=0", fallback: "E(εᵢ|Xᵢ)=0" },
    { label: "共同誤差變異數", latex: "\\operatorname{Var}(\\varepsilon_i\\mid X_i)=\\sigma^2", fallback: "Var(εᵢ|Xᵢ)=σ²" },
    { label: "常態誤差模型", latex: "\\varepsilon_i\\mid X_i\\sim N(0,\\sigma^2)", fallback: "εᵢ|Xᵢ ~ N(0,σ²)" },
  ] },
  { type: "callout", tone: "intuition", label: "為什麼和 ANOVA 的假設相似？", text: "ANOVA 在每個組別內假設誤差近似常態且具有共同變異數；迴歸則把「組別」換成連續的 X 位置，在每個固定 X 下作相同的誤差描述。兩者都是線性模型，只是解釋平均數結構的方式不同。" },

  { type: "heading", text: "簡單線性迴歸和 ANOVA 的關聯" },
  { type: "paragraph", text: "ANOVA 與簡單線性迴歸表面上處理不同問題：ANOVA 用組別解釋平均數差異，迴歸則用連續的 X 與一條直線解釋 Y。不過兩者的核心相同，都是把每個觀察值拆成「模型能解釋的部分」與「模型不能解釋的誤差」，再比較這兩種變異。ANOVA 是用各組平均數建立模型；簡單線性迴歸則尋找一條最能描述資料的方程式。" },
  { type: "table", rows: [
    ["比較項目", "單因子 ANOVA", "簡單線性迴歸"],
    ["解釋變數", "類別組別", "連續變數 X"],
    ["模型給出的平均", "該組平均數", "迴歸線上的預測值 Ŷᵢ"],
    ["模型解釋的離差", "組平均數−總平均數", "Ŷᵢ−Ȳ"],
    ["未解釋的離差", "觀察值−組平均數", "Yᵢ−Ŷᵢ"],
    ["總離差", "觀察值−總平均數", "Yᵢ−Ȳ"],
  ] },
  { type: "paragraph", text: "固定 X 時，Y 近似常態且具有相同標準差，是迴歸與 ANOVA 能以同一套 F 檢定架構處理的原因。ANOVA 假設各組內有共同的誤差變異數；迴歸則假設不同 X 位置周圍的 Y 也有共同的誤差變異數。因此，各組或各 X 位置的誤差資訊可以合併成一個 SSE，再除以共同的誤差自由度，得到 MSE。" },

  { type: "heading", text: "把 Y 的變異拆成模型與誤差" },
  { type: "paragraph", text: "每個觀察值相對於總平均的總離差，可以拆成迴歸線解釋的部分與未解釋的殘差：" },
  { type: "formula", latex: "\\underbrace{Y_i-\\bar Y}_{\\text{總離差}}=\\underbrace{\\hat Y_i-\\bar Y}_{\\text{迴歸解釋}}+\\underbrace{Y_i-\\hat Y_i}_{\\text{殘差}}", fallback: "Yᵢ−Ȳ（總離差）=Ŷᵢ−Ȳ（迴歸解釋）+Yᵢ−Ŷᵢ（殘差）" },
  { type: "paragraph", text: "這就是 ANOVA 的「總離差＝組間離差＋組內離差」在迴歸中的版本。把三種離差平方後加總，含截距的最小平方法模型便得到同樣的平方和分解：" },
  { type: "formulaGroup", formulas: [
    { label: "總平方和", latex: "SS_T=\\sum_{i=1}^{n}(Y_i-\\bar Y)^2", fallback: "SST=Σ(Yᵢ−Ȳ)²" },
    { label: "迴歸平方和", latex: "SS_R=\\sum_{i=1}^{n}(\\hat Y_i-\\bar Y)^2=b_1^2\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "SSR=Σ(Ŷᵢ−Ȳ)²=b₁²Σ(Xᵢ−X̄)²" },
    { label: "誤差平方和", latex: "SS_E=\\sum_{i=1}^{n}(Y_i-\\hat Y_i)^2", fallback: "SSE=Σ(Yᵢ−Ŷᵢ)²" },
    { label: "平方和分解", latex: "SS_T=SS_R+SS_E", fallback: "SST=SSR+SSE" },
  ] },

  { type: "heading", text: "迴歸 ANOVA 表與整體 F 檢定" },
  { type: "table", rows: [
    ["變異來源", "平方和 SS", "自由度 df", "均方 MS", "F 值"],
    ["Regression", "SSR", "1", "MSR=SSR/1", "MSR/MSE"],
    ["Error", "SSE=SST−SSR", "n−2", "MSE=SSE/(n−2)", ""],
    ["Total", "SST", "n−1", "", ""],
  ] },
  { type: "formulaGroup", formulas: [
    { label: "整體虛無假設", latex: "H_0:\\beta_1=0", fallback: "H₀: β₁=0" },
    { label: "整體 F 統計量", latex: "F=\\frac{MS_R}{MS_E}=\\frac{SS_R/1}{SS_E/(n-2)}", fallback: "F=MSR/MSE=(SSR/1)/[SSE/(n−2)]" },
    { label: "H₀ 成立時", latex: "F\\sim F_{1,n-2}", fallback: "F ~ F(1,n−2)" },
  ] },
  { type: "paragraph", text: "F 的分子衡量迴歸線所解釋的變異，分母衡量資料在迴歸線周圍剩下的變異。若 H₀:β₁=0 成立，加入 X 不應帶來超出隨機誤差的解釋力；只有當 MSR 相對 MSE 足夠大時，才有理由拒絕這條虛無假設。" },

  { type: "heading", text: "三種自由度為什麼是 n−1、1、n−2？" },
  { type: "heading", text: "總自由度：n−1" },
  { type: "paragraph", text: "總平方和以樣本平均數 Ȳ 為中心。n 個離差 Yᵢ−Ȳ 必須滿足 Σ(Yᵢ−Ȳ)=0；因此知道前 n−1 個離差後，最後一個就被總和為 0 的條件決定，只剩 n−1 個可以自由變動的資訊。" },
  { type: "formula", latex: "df_T=n-1", fallback: "df(Total)=n−1" },
  { type: "heading", text: "迴歸自由度：1" },
  { type: "paragraph", text: "含截距的最小平方法迴歸線一定通過 (X̄,Ȳ)。當這個平均點固定後，只要再決定斜率 b₁，整條直線以及所有 Ŷᵢ 就都確定了；也可以想成平均點再加上一個不在平均點上的擬合點，就足以決定直線。因此，簡單線性迴歸用一份獨立資訊描述 Y 隨 X 改變的線性方向，迴歸自由度是 1。" },
  { type: "formulaGroup", formulas: [
    { label: "模型離差", latex: "\\hat Y_i-\\bar Y=b_1(X_i-\\bar X)", fallback: "Ŷᵢ−Ȳ=b₁(Xᵢ−X̄)" },
    { label: "迴歸自由度", latex: "df_R=1", fallback: "df(Regression)=1" },
  ] },
  { type: "heading", text: "誤差自由度：n−2" },
  { type: "paragraph", text: "n 個觀察值原本提供 n 份 Y 資訊，但資料已經先用來估計截距 b₀ 與斜率 b₁ 兩個參數，所以殘差不能再各自任意變動。含截距的最小平方法殘差必須同時滿足「殘差總和為 0」以及「殘差與 X 的線性方向互相抵銷」兩個限制，因此只剩 n−2 份獨立的誤差資訊。這就是 MSE 的分母必須使用 n−2，而不是 n 或 n−1 的理由。" },
  { type: "formulaGroup", formulas: [
    { label: "第一個限制", latex: "\\sum_{i=1}^{n}e_i=0", fallback: "Σeᵢ=0" },
    { label: "第二個限制", latex: "\\sum_{i=1}^{n}(X_i-\\bar X)e_i=0", fallback: "Σ(Xᵢ−X̄)eᵢ=0" },
    { label: "誤差自由度", latex: "df_E=n-2", fallback: "df(Error)=n−2" },
  ] },
  { type: "callout", tone: "intuition", label: "自由度也能完整拆開", text: "Total 的 n−1 份變異資訊，分成 Regression 用來描述斜率的 1 份，以及 Error 剩下的 n−2 份，所以 (n−1)=1+(n−2)。這與平方和 SST=SSR+SSE 是同一個拆解架構。" },
  { type: "heading", text: "誤差標準差如何估計？" },
  { type: "paragraph", text: "MSE 估計母體誤差變異數 σ²；開根號後得到殘差標準差，也常記為 s、S(Y|X) 或 residual standard error。它描述觀察值在迴歸線周圍的典型垂直變動量。" },
  { type: "formulaGroup", formulas: [
    { label: "殘差標準差", latex: "S_{Y\\mid X}=\\sqrt{MS_E}=\\sqrt{\\frac{\\sum(Y_i-\\hat Y_i)^2}{n-2}}", fallback: "S(Y|X)=√MSE=√[Σ(Yᵢ−Ŷᵢ)²/(n−2)]" },
    { label: "等價計算式", latex: "S_{Y\\mid X}=\\sqrt{\\frac{\\sum Y_i^2-b_0\\sum Y_i-b_1\\sum X_iY_i}{n-2}}", fallback: "S(Y|X)=√{[ΣYᵢ²−b₀ΣYᵢ−b₁ΣXᵢYᵢ]/(n−2)}" },
  ] },

  { type: "heading", text: "從虛無假設檢定截距與斜率" },
  { type: "paragraph", text: "前面曾遇過：當比較兩組、組間自由度為 1 時，可以用 t 值或 F 值檢定，而且 F=t²。簡單線性迴歸的迴歸自由度同樣是 1，因此也能用 t 檢定分析。由於母體方程式 Yᵢ=β₀+β₁Xᵢ+εᵢ 同時包含截距 β₀ 與斜率 β₁，所以要先分清楚研究問題是在檢定哪一個母體參數，再各自寫出虛無假設。" },
  { type: "table", rows: [
    ["符號", "在檢定中的角色"],
    ["β₀、β₁", "真正想推論但未知的母體截距與母體斜率"],
    ["b₀、b₁", "從樣本算出的估計值，用來和虛無假設比較"],
    ["c₀、c₁", "研究者在虛無假設中指定的截距值與斜率值"],
  ] },
  { type: "paragraph", text: "以下令 Sxx=Σ(Xᵢ−X̄)²。每一個 t 值都遵循同一個邏輯：用「樣本估計值−虛無假設指定值」除以該估計值的標準誤。" },
  { type: "formula", latex: "S_{xx}=\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "Sxx=Σ(Xᵢ−X̄)²" },

  { type: "heading", text: "第一條虛無假設：檢定截距" },
  { type: "paragraph", text: "截距檢定問的是：當 X=0 時，母體平均 Y 是否等於事先指定的 c₀？因此先從 H₀:β₀=c₀ 出發，再拿樣本截距 b₀ 與 c₀ 的差距進行檢定；雙尾對立假設則是 H₁:β₀≠c₀。" },
  { type: "formulaGroup", formulas: [
    { label: "截距的假設", latex: "H_0:\\beta_0=c_0\\qquad H_1:\\beta_0\\ne c_0", fallback: "H₀: β₀=c₀；H₁: β₀≠c₀" },
    { label: "截距的標準誤", latex: "SE(b_0)=S_{Y\\mid X}\\sqrt{\\frac{1}{n}+\\frac{\\bar X^2}{S_{xx}}}", fallback: "SE(b₀)=S(Y|X)√(1/n+X̄²/Sxx)" },
    { label: "截距的 t 值", latex: "t=\\frac{b_0-c_0}{S_{Y\\mid X}\\sqrt{\\frac{1}{n}+\\frac{\\bar X^2}{S_{xx}}}},\\qquad df=n-2", fallback: "t=(b₀−c₀)/{S(Y|X)√[1/n+X̄²/Sxx]}，df=n−2" },
  ] },
  { type: "list", ordered: true, items: [
    "先依研究問題指定虛無假設中的截距 c₀；不是先看資料後才挑一個值。",
    "由樣本求出 b₀，並以 SSE/(n−2) 求得 S(Y|X)。",
    "計算 SE(b₀) 與 t，再用自由度 n−2 的 t 分配求 p 值。",
    "依事先設定的顯著水準決定是否拒絕 H₀，並回到 X=0 的實質意義解釋結果。",
  ] },
  { type: "callout", tone: "caution", label: "截距顯著不一定是重要問題", text: "若 X=0 遠離資料範圍或在研究情境中沒有意義，截距檢定即使能計算，也可能沒有實質解釋價值。可將 X 重新中心化，讓新的 X=0 對應一個有意義的參考值，再檢定該位置的平均 Y。" },

  { type: "heading", text: "第二條虛無假設：檢定斜率" },
  { type: "paragraph", text: "斜率檢定問的是：X 每增加一單位時，母體平均 Y 的改變量是否等於指定的 c₁？因此 H₀:β₁=c₁。最常見的設定是 c₁=0；此時虛無假設表示沒有線性關係，而不是宣稱 X 與 Y 在任何形式下都完全無關。" },
  { type: "formulaGroup", formulas: [
    { label: "斜率的假設", latex: "H_0:\\beta_1=c_1\\qquad H_1:\\beta_1\\ne c_1", fallback: "H₀: β₁=c₁；H₁: β₁≠c₁" },
    { label: "斜率的標準誤", latex: "SE(b_1)=\\frac{S_{Y\\mid X}}{\\sqrt{S_{xx}}}", fallback: "SE(b₁)=S(Y|X)/√Sxx" },
    { label: "斜率的 t 值", latex: "t=\\frac{b_1-c_1}{S_{Y\\mid X}/\\sqrt{S_{xx}}},\\qquad df=n-2", fallback: "t=(b₁−c₁)/[S(Y|X)/√Sxx]，df=n−2" },
  ] },
  { type: "list", ordered: true, items: [
    "先寫出 H₀:β₁=c₁；若研究問題是有沒有線性關係，通常令 c₁=0。",
    "由樣本求出 b₁，並計算 SE(b₁)=S(Y|X)/√Sxx。",
    "以 b₁−c₁ 除以 SE(b₁)，得到自由度 n−2 的 t 值與 p 值。",
    "若拒絕 H₀，再依 b₁ 的正負號、大小與信賴區間說明關係方向及幅度。",
  ] },
  { type: "paragraph", text: "若不拒絕 H₀:β₁=0，只能說資料沒有提供足夠證據支持非零的線性關係；不能把它寫成已證明沒有關係。關係可能較弱、樣本資訊不足，或真實型態並不是直線。" },

  { type: "heading", text: "為什麼斜率檢定滿足 F=t²？" },
  { type: "paragraph", text: "當斜率檢定採用 H₀:β₁=0 時，簡單線性迴歸的整體 F 檢定與斜率 t 檢定檢定的是同一條虛無假設。由於 Regression 只有 1 個自由度，可以從斜率 t 值一步一步得到 F：" },
  { type: "formulaGroup", formulas: [
    { label: "從斜率 t 值開始", latex: "t=\\frac{b_1-0}{S_{Y\\mid X}/\\sqrt{S_{xx}}}", fallback: "t=b₁/[S(Y|X)/√Sxx]" },
    { label: "平方", latex: "t^2=\\frac{b_1^2S_{xx}}{S_{Y\\mid X}^2}", fallback: "t²=b₁²Sxx/S(Y|X)²" },
    { label: "代入迴歸平方和", latex: "b_1^2S_{xx}=\\sum_{i=1}^{n}(\\hat Y_i-\\bar Y)^2=SS_R", fallback: "b₁²Sxx=Σ(Ŷᵢ−Ȳ)²=SSR" },
    { label: "代入誤差均方", latex: "S_{Y\\mid X}^2=\\frac{SS_E}{n-2}=MS_E", fallback: "S(Y|X)²=SSE/(n−2)=MSE" },
    { label: "得到相同的 F 值", latex: "t^2=\\frac{SS_R/1}{SS_E/(n-2)}=\\frac{MS_R}{MS_E}=F", fallback: "t²=(SSR/1)/[SSE/(n−2)]=MSR/MSE=F" },
  ] },
  { type: "callout", tone: "intuition", label: "兩種檢定如何判讀？", text: "在簡單線性迴歸中，斜率雙尾 t 檢定與整體 F 檢定會得到相同 p 值；t 的正負號同時呈現關係方向，F 則只有非負值。到了多元迴歸，整體 F 可以同時檢定多個斜率，就不再等於任何單一 t 值的平方。" },
  { type: "heading", text: "解釋與預測要分開報告" },
  { type: "table", rows: [
    ["目標", "主要關心", "常見輸出"],
    ["解釋", "斜率方向、大小及不確定性", "b₁、信賴區間、t、p、R²"],
    ["預測平均結果", "指定 X 時的平均 Y", "Ŷ 與平均反應信賴區間"],
    ["預測個別結果", "指定 X 時一個新個體的 Y", "Ŷ 與較寬的預測區間"],
  ] },
  { type: "paragraph", text: "個別預測除了迴歸線估計的不確定性，還包含個體本身相對於直線的隨機誤差，因此預測區間會比平均反應的信賴區間寬。只提供單一 Ŷ 而不呈現不確定性，容易讓讀者誤以為模型能精確預測每個個體。" },

  { type: "heading", text: "建議的分析順序" },
  { type: "list", ordered: true, items: [
    "先確認 X、Y 的定義、測量尺度與研究設計，再畫散布圖。",
    "檢查關係是否大致線性，以及是否有離群點、高槓桿值或不同群體。",
    "估計 b₀、b₁、預測值與殘差，並查看殘差對預測值圖及常態診斷。",
    "依研究目的報告斜率、信賴區間、t 或 F 檢定、R² 與殘差標準差。",
    "需要預測時，說明適用的 X 範圍，並區分平均反應信賴區間與個別預測區間。",
  ] },
];
