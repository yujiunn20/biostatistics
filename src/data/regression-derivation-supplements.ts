export const leastSquaresDerivation = [
  { type: "paragraph", text: "以下從最小平方法的目標函數開始，依序求出斜率 b₁ 與截距 b₀，再利用同一組條件說明殘差的性質及平方和分解。" },
  { type: "heading", text: "1. 寫出預測值、殘差與目標函數" },
  { type: "formulaGroup", formulas: [
    { label: "樣本資料", latex: "(X_i,Y_i),\\qquad i=1,2,\\ldots,n", fallback: "(Xᵢ,Yᵢ)，i=1,2,…,n" },
    { label: "迴歸線上的預測值", latex: "\\hat Y_i=b_0+b_1X_i", fallback: "Ŷᵢ=b₀+b₁Xᵢ" },
    { label: "殘差", latex: "e_i=Y_i-\\hat Y_i=Y_i-b_0-b_1X_i", fallback: "eᵢ=Yᵢ−Ŷᵢ=Yᵢ−b₀−b₁Xᵢ" },
    { label: "殘差平方和", latex: "Q(b_0,b_1)=\\sum_{i=1}^{n}e_i^2=\\sum_{i=1}^{n}(Y_i-b_0-b_1X_i)^2", fallback: "Q(b₀,b₁)=Σeᵢ²=Σ(Yᵢ−b₀−b₁Xᵢ)²" },
  ] },
  { type: "paragraph", text: "Xᵢ、Yᵢ 是已知資料；要選擇的是 b₀、b₁。最小平方法的目標，就是找出使 Q(b₀,b₁) 最小的兩個係數。" },

  { type: "heading", text: "2. 分別對 b₀、b₁ 偏微分" },
  { type: "paragraph", text: "在最小值的位置，Q 對兩個未知係數的一階偏導數都必須等於 0。第二式是對 b₁ 微分，因此鏈鎖律會多出 −Xᵢ。" },
  { type: "formulaGroup", formulas: [
    { label: "對截距 b₀ 微分", latex: "\\frac{\\partial Q}{\\partial b_0}=-2\\sum_{i=1}^{n}(Y_i-b_0-b_1X_i)=0", fallback: "∂Q/∂b₀=−2Σ(Yᵢ−b₀−b₁Xᵢ)=0" },
    { label: "對斜率 b₁ 微分", latex: "\\frac{\\partial Q}{\\partial b_1}=-2\\sum_{i=1}^{n}X_i(Y_i-b_0-b_1X_i)=0", fallback: "∂Q/∂b₁=−2ΣXᵢ(Yᵢ−b₀−b₁Xᵢ)=0" },
  ] },
  { type: "paragraph", text: "移除共同因子 −2 並展開後，得到兩條 normal equations（常態方程式）：" },
  { type: "formulaGroup", formulas: [
    { label: "第一條常態方程式", latex: "\\sum Y_i-nb_0-b_1\\sum X_i=0", fallback: "ΣYᵢ−nb₀−b₁ΣXᵢ=0" },
    { label: "第二條常態方程式", latex: "\\sum X_iY_i-b_0\\sum X_i-b_1\\sum X_i^2=0", fallback: "ΣXᵢYᵢ−b₀ΣXᵢ−b₁ΣXᵢ²=0" },
  ] },

  { type: "heading", text: "3. 先由第一式解出截距" },
  { type: "paragraph", text: "利用 ΣYᵢ=nȲ 與 ΣXᵢ=nX̄，把第一條常態方程式除以 n：" },
  { type: "formulaGroup", formulas: [
    { label: "除以 n", latex: "\\bar Y-b_0-b_1\\bar X=0", fallback: "Ȳ−b₀−b₁X̄=0" },
    { label: "截距", latex: "b_0=\\bar Y-b_1\\bar X", fallback: "b₀=Ȳ−b₁X̄" },
  ] },
  { type: "paragraph", text: "把 b₀ 代回 Ŷ=b₀+b₁X，可得 Ŷ−Ȳ=b₁(X−X̄)。因此含截距的最小平方法迴歸線一定通過平均點 (X̄,Ȳ)。" },

  { type: "heading", text: "4. 將截距代回第二式，解出斜率" },
  { type: "formulaGroup", formulas: [
    { label: "代入 b₀=Ȳ−b₁X̄", latex: "\\sum X_iY_i-(\\bar Y-b_1\\bar X)\\sum X_i-b_1\\sum X_i^2=0", fallback: "ΣXᵢYᵢ−(Ȳ−b₁X̄)ΣXᵢ−b₁ΣXᵢ²=0" },
    { label: "整理 b₁ 的項", latex: "\\sum X_iY_i-n\\bar X\\bar Y=b_1(\\sum X_i^2-n\\bar X^2)", fallback: "ΣXᵢYᵢ−nX̄Ȳ=b₁(ΣXᵢ²−nX̄²)" },
    { label: "改寫成離均差", latex: "\\sum(X_i-\\bar X)(Y_i-\\bar Y)=b_1\\sum(X_i-\\bar X)^2", fallback: "Σ(Xᵢ−X̄)(Yᵢ−Ȳ)=b₁Σ(Xᵢ−X̄)²" },
    { label: "斜率", latex: "b_1=\\frac{\\sum(X_i-\\bar X)(Y_i-\\bar Y)}{\\sum(X_i-\\bar X)^2}", fallback: "b₁=Σ(Xᵢ−X̄)(Yᵢ−Ȳ)/Σ(Xᵢ−X̄)²" },
  ] },
  { type: "paragraph", text: "只要 X 不是全部相同，分母 Σ(Xᵢ−X̄)² 就大於 0。Q 是 b₀、b₁ 的凸二次函數，因此這組一階條件找到的是全域最小值，而不是最大值。" },

  { type: "heading", text: "5. 由常態方程式得到殘差的三個性質" },
  { type: "paragraph", text: "把 eᵢ=Yᵢ−b₀−b₁Xᵢ 代回兩條常態方程式，可直接得到前兩個性質；再利用 Ŷᵢ=b₀+b₁Xᵢ，就得到第三個性質。" },
  { type: "formulaGroup", formulas: [
    { label: "殘差總和為 0", latex: "\\sum e_i=\\sum(Y_i-b_0-b_1X_i)=0", fallback: "Σeᵢ=Σ(Yᵢ−b₀−b₁Xᵢ)=0" },
    { label: "殘差與 X 的乘積和為 0", latex: "\\sum X_ie_i=\\sum X_i(Y_i-b_0-b_1X_i)=0", fallback: "ΣXᵢeᵢ=ΣXᵢ(Yᵢ−b₀−b₁Xᵢ)=0" },
    { label: "殘差與預測值的乘積和為 0", latex: "\\sum\\hat Y_ie_i=\\sum(b_0+b_1X_i)e_i=b_0\\sum e_i+b_1\\sum X_ie_i=0", fallback: "ΣŶᵢeᵢ=b₀Σeᵢ+b₁ΣXᵢeᵢ=0" },
  ] },
  { type: "paragraph", text: "這些等式不是額外假設，而是含截距 OLS 解本身的代數結果。它們表示殘差已經無法再沿著常數方向或 X 的線性方向調整來降低 Q。" },

  { type: "heading", text: "6. 證明 SST=SSE+SSR" },
  { type: "paragraph", text: "先把每個觀察值相對總平均的離差，加上再減去 Ŷᵢ：" },
  { type: "formula", latex: "Y_i-\\bar Y=(Y_i-\\hat Y_i)+(\\hat Y_i-\\bar Y)=e_i+(\\hat Y_i-\\bar Y)", fallback: "Yᵢ−Ȳ=(Yᵢ−Ŷᵢ)+(Ŷᵢ−Ȳ)=eᵢ+(Ŷᵢ−Ȳ)" },
  { type: "paragraph", text: "平方後加總，會出現 SSE、SSR 與一個交叉項：" },
  { type: "formulaGroup", formulas: [
    { label: "展開平方", latex: "\\sum(Y_i-\\bar Y)^2=\\sum e_i^2+\\sum(\\hat Y_i-\\bar Y)^2+2\\sum e_i(\\hat Y_i-\\bar Y)", fallback: "Σ(Yᵢ−Ȳ)²=Σeᵢ²+Σ(Ŷᵢ−Ȳ)²+2Σeᵢ(Ŷᵢ−Ȳ)" },
    { label: "交叉項", latex: "\\sum e_i(\\hat Y_i-\\bar Y)=\\sum e_i(b_0+b_1X_i-\\bar Y)", fallback: "Σeᵢ(Ŷᵢ−Ȳ)=Σeᵢ(b₀+b₁Xᵢ−Ȳ)" },
    { label: "拆開交叉項", latex: "=(b_0-\\bar Y)\\sum e_i+b_1\\sum X_ie_i=0", fallback: "=(b₀−Ȳ)Σeᵢ+b₁ΣXᵢeᵢ=0" },
    { label: "平方和分解", latex: "SS_T=SS_E+SS_R", fallback: "SST=SSE+SSR" },
  ] },
  { type: "callout", tone: "intuition", label: "交叉項為什麼消失？", text: "因為最小平方法已使 Σeᵢ=0 且 ΣXᵢeᵢ=0，所以殘差部分和迴歸線解釋的部分彼此正交。正是這個性質，讓總平方和能乾淨地拆成 SSE 與 SSR。" },
];

export const rSquaredDerivation = [
  { type: "paragraph", text: "以下在含截距的簡單線性迴歸中，從 Pearson 相關係數的定義出發，證明 r²=SSR/SST=R²。" },
  { type: "heading", text: "1. 從 r² 的定義開始" },
  { type: "formula", latex: "r^2=\\frac{[\\sum(X_i-\\bar X)(Y_i-\\bar Y)]^2}{\\sum(X_i-\\bar X)^2\\sum(Y_i-\\bar Y)^2}", fallback: "r²={Σ[(Xᵢ−X̄)(Yᵢ−Ȳ)]}²/{Σ(Xᵢ−X̄)²Σ(Yᵢ−Ȳ)²}" },

  { type: "heading", text: "2. 把 Yᵢ−Ȳ 拆成殘差與模型離差" },
  { type: "formulaGroup", formulas: [
    { label: "離差分解", latex: "Y_i-\\bar Y=(Y_i-\\hat Y_i)+(\\hat Y_i-\\bar Y)=e_i+(\\hat Y_i-\\bar Y)", fallback: "Yᵢ−Ȳ=eᵢ+(Ŷᵢ−Ȳ)" },
    { label: "含截距迴歸線", latex: "\\hat Y_i-\\bar Y=b_1(X_i-\\bar X)", fallback: "Ŷᵢ−Ȳ=b₁(Xᵢ−X̄)" },
  ] },
  { type: "paragraph", text: "將兩式代入 r² 分子中的共變動總和：" },
  { type: "formulaGroup", formulas: [
    { label: "代入離差分解", latex: "\\sum(X_i-\\bar X)(Y_i-\\bar Y)=\\sum(X_i-\\bar X)e_i+b_1\\sum(X_i-\\bar X)^2", fallback: "Σ(Xᵢ−X̄)(Yᵢ−Ȳ)=Σ(Xᵢ−X̄)eᵢ+b₁Σ(Xᵢ−X̄)²" },
    { label: "殘差項為 0", latex: "\\sum(X_i-\\bar X)e_i=\\sum X_ie_i-\\bar X\\sum e_i=0", fallback: "Σ(Xᵢ−X̄)eᵢ=ΣXᵢeᵢ−X̄Σeᵢ=0" },
    { label: "因此", latex: "\\sum(X_i-\\bar X)(Y_i-\\bar Y)=b_1\\sum(X_i-\\bar X)^2", fallback: "Σ(Xᵢ−X̄)(Yᵢ−Ȳ)=b₁Σ(Xᵢ−X̄)²" },
  ] },

  { type: "heading", text: "3. 代回 r² 並逐步約分" },
  { type: "formulaGroup", formulas: [
    { label: "代入分子", latex: "r^2=\\frac{b_1^2[\\sum(X_i-\\bar X)^2]^2}{\\sum(X_i-\\bar X)^2\\sum(Y_i-\\bar Y)^2}", fallback: "r²=b₁²[Σ(Xᵢ−X̄)²]²/{Σ(Xᵢ−X̄)²Σ(Yᵢ−Ȳ)²}" },
    { label: "約去一個 Sxx", latex: "=\\frac{b_1^2\\sum(X_i-\\bar X)^2}{\\sum(Y_i-\\bar Y)^2}", fallback: "=b₁²Σ(Xᵢ−X̄)²/Σ(Yᵢ−Ȳ)²" },
    { label: "利用 Ŷᵢ−Ȳ=b₁(Xᵢ−X̄)", latex: "=\\frac{\\sum(\\hat Y_i-\\bar Y)^2}{\\sum(Y_i-\\bar Y)^2}", fallback: "=Σ(Ŷᵢ−Ȳ)²/Σ(Yᵢ−Ȳ)²" },
    { label: "辨認平方和", latex: "=\\frac{SS_R}{SS_T}=R^2", fallback: "=SSR/SST=R²" },
  ] },
  { type: "callout", tone: "intuition", label: "平方會失去方向", text: "這個等式說明簡單線性迴歸的 R² 等於 Pearson r 的平方。r 保留正負方向；平方後的 R² 只表示模型解釋的變異比例。" },
];
