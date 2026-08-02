export const simpleLinearRegressionJa = [
  { type: "paragraph", text: "単回帰分析は、一つの量的説明変数Xと量的目的変数Yの線形関係をモデル化します。関連の方向と大きさを傾きで表し、平均応答の説明や新しい観測値の予測に使います。" },
  { type: "callout", tone: "forward", label: "分析の流れ", text: "散布図で形を確認→最小二乗法で直線を推定→残差で仮定を診断→傾きと全体モデルを検定→信頼区間・予測区間と限界を報告します。" },
  { type: "heading", text: "答えられる問い" },
  { type: "list", items: ["Xが1単位増えるとYの平均がどれだけ変わるか", "線形関係が0と異なる証拠があるか", "モデルがYの変動をどの程度説明するか", "指定したXで平均応答または個別値を予測できるか"] },
  { type: "heading", text: "散布図と残差から始める" },
  { type: "paragraph", text: "曲線、群分け、外れ値、高レバレッジ点、ばらつきの変化を先に確認します。各点の観察値と回帰線との差が残差です。" },
  { type: "formula", latex: "e_i=Y_i-\\hat Y_i", fallback: "eᵢ=Yᵢ−Ŷᵢ" },
  { type: "heading", text: "母集団モデルと標本回帰直線" },
  { type: "formulaGroup", formulas: [
    { label: "母集団モデル", latex: "Y_i=\\beta_0+\\beta_1X_i+\\varepsilon_i", fallback: "Yᵢ=β₀+β₁Xᵢ+εᵢ" },
    { label: "Xを固定した母平均", latex: "E(Y_i\\mid X_i)=\\beta_0+\\beta_1X_i", fallback: "E(Yᵢ|Xᵢ)=β₀+β₁Xᵢ" },
    { label: "標本推定直線", latex: "\\hat Y_i=b_0+b_1X_i", fallback: "Ŷᵢ=b₀+b₁Xᵢ" },
    { label: "標本残差", latex: "e_i=Y_i-\\hat Y_i", fallback: "eᵢ=Yᵢ−Ŷᵢ" }
  ] },
  { type: "heading", text: "切片と傾きの解釈" },
  { type: "paragraph", text: "β₁はXが1単位増えたときのY平均の変化量です。β₀はX=0での平均ですが、0が観測範囲外または実質的意味を持たない場合は無理に解釈しません。中心化すると切片を観測範囲内へ移せます。" },
  { type: "heading", text: "最小二乗法" },
  { type: "formula", latex: "(b_0,b_1)=\\arg\\min_{a,c}\\sum_{i=1}^{n}[Y_i-(a+cX_i)]^2", fallback: "残差平方和を最小にするb₀,b₁" },
  { type: "formulaGroup", formulas: [
    { label: "傾き", latex: "b_1=\\frac{\\sum(X_i-\\bar X)(Y_i-\\bar Y)}{\\sum(X_i-\\bar X)^2}", fallback: "b₁=Σ(Xᵢ−X̄)(Yᵢ−Ȳ)/Σ(Xᵢ−X̄)²" },
    { label: "切片", latex: "b_0=\\bar Y-b_1\\bar X", fallback: "b₀=Ȳ−b₁X̄" }
  ] },
  { type: "callout", tone: "intuition", label: "なぜ二乗するのか", text: "正負の残差が相殺されず、大きなずれを強く罰し、正規誤差モデルでは最尤推定とも一致します。一方で外れ値の影響も大きくなります。" },
  { type: "heading", text: "モデルの成立条件" },
  { type: "list", items: ["XとY平均の関係が線形", "観測値・誤差が独立", "Xの各水準で誤差分散が一定", "係数の小標本推論では誤差が概ね正規", "強い外れ値や影響点が結果を支配しない"] },
  { type: "formulaGroup", formulas: [
    { label: "誤差平均", latex: "E(\\varepsilon_i\\mid X_i)=0", fallback: "E(εᵢ|Xᵢ)=0" },
    { label: "等分散", latex: "\\operatorname{Var}(\\varepsilon_i\\mid X_i)=\\sigma^2", fallback: "Var(εᵢ|Xᵢ)=σ²" },
    { label: "正規誤差", latex: "\\varepsilon_i\\mid X_i\\sim N(0,\\sigma^2)", fallback: "εᵢ|Xᵢ~N(0,σ²)" }
  ] },
  { type: "heading", text: "Yの変動をモデルと誤差へ分ける" },
  { type: "formula", latex: "\\underbrace{Y_i-\\bar Y}_{\\text{全偏差}}=\\underbrace{\\hat Y_i-\\bar Y}_{\\text{回帰で説明}}+\\underbrace{Y_i-\\hat Y_i}_{\\text{残差}}", fallback: "全偏差=回帰で説明+残差" },
  { type: "formulaGroup", formulas: [
    { label: "全平方和", latex: "SS_T=\\sum(Y_i-\\bar Y)^2", fallback: "SST=Σ(Yᵢ−Ȳ)²" },
    { label: "回帰平方和", latex: "SS_R=\\sum(\\hat Y_i-\\bar Y)^2=b_1^2\\sum(X_i-\\bar X)^2", fallback: "SSR=Σ(Ŷᵢ−Ȳ)²" },
    { label: "誤差平方和", latex: "SS_E=\\sum(Y_i-\\hat Y_i)^2", fallback: "SSE=Σ(Yᵢ−Ŷᵢ)²" },
    { label: "分解", latex: "SS_T=SS_R+SS_E", fallback: "SST=SSR+SSE" }
  ] },
  { type: "heading", text: "回帰ANOVA表と全体F検定" },
  { type: "table", rows: [["変動源", "平方和", "自由度", "均方"], ["回帰", "SSR", "1", "SSR/1"], ["誤差", "SSE", "n−2", "SSE/(n−2)"], ["全体", "SST", "n−1", "—"]] },
  { type: "formulaGroup", formulas: [
    { label: "帰無仮説", latex: "H_0:\\beta_1=0", fallback: "H₀: β₁=0" },
    { label: "F統計量", latex: "F=\\frac{SS_R/1}{SS_E/(n-2)}", fallback: "F=(SSR/1)/[SSE/(n−2)]" },
    { label: "H₀下", latex: "F\\sim F_{1,n-2}", fallback: "F~F(1,n−2)" }
  ] },
  { type: "heading", text: "自由度がn−1、1、n−2になる理由" },
  { type: "paragraph", text: "総偏差は平均推定に1自由度を使います。回帰部分は一つの傾きで決まり1自由度、残差は切片と傾きの二母数を推定するためn−2自由度です。" },
  { type: "formulaGroup", formulas: [
    { label: "残差和", latex: "\\sum e_i=0", fallback: "Σeᵢ=0" },
    { label: "Xとの直交", latex: "\\sum(X_i-\\bar X)e_i=0", fallback: "Σ(Xᵢ−X̄)eᵢ=0" },
    { label: "誤差自由度", latex: "df_E=n-2", fallback: "dfE=n−2" }
  ] },
  { type: "heading", text: "残差標準偏差と係数検定" },
  { type: "formulaGroup", formulas: [
    { label: "残差標準偏差", latex: "S_{Y\\mid X}=\\sqrt{\\frac{SS_E}{n-2}}", fallback: "S(Y|X)=√[SSE/(n−2)]" },
    { label: "Xの平方和", latex: "S_{xx}=\\sum(X_i-\\bar X)^2", fallback: "Sxx=Σ(Xᵢ−X̄)²" },
    { label: "切片の標準誤差", latex: "SE(b_0)=S_{Y\\mid X}\\sqrt{\\frac1n+\\frac{\\bar X^2}{S_{xx}}}", fallback: "SE(b₀)=S(Y|X)√(1/n+X̄²/Sxx)" },
    { label: "傾きの標準誤差", latex: "SE(b_1)=\\frac{S_{Y\\mid X}}{\\sqrt{S_{xx}}}", fallback: "SE(b₁)=S(Y|X)/√Sxx" }
  ] },
  { type: "formulaGroup", formulas: [
    { label: "切片検定", latex: "t=\\frac{b_0-c_0}{SE(b_0)}", fallback: "t=(b₀−c₀)/SE(b₀)" },
    { label: "傾き検定", latex: "t=\\frac{b_1-c_1}{SE(b_1)},\\qquad df=n-2", fallback: "t=(b₁−c₁)/SE(b₁), df=n−2" }
  ] },
  { type: "heading", text: "傾き検定でF=t²" },
  { type: "formulaGroup", formulas: [
    { label: "tの二乗", latex: "t^2=\\frac{b_1^2S_{xx}}{S_{Y\\mid X}^2}", fallback: "t²=b₁²Sxx/S(Y|X)²" },
    { label: "分子", latex: "b_1^2S_{xx}=SS_R", fallback: "b₁²Sxx=SSR" },
    { label: "分母", latex: "S_{Y\\mid X}^2=MS_E", fallback: "S(Y|X)²=MSE" },
    { label: "結論", latex: "t^2=\\frac{SS_R/1}{SS_E/(n-2)}=F", fallback: "t²=F" }
  ] },
  { type: "heading", text: "説明と予測を区別する" },
  { type: "paragraph", text: "指定Xでの平均応答の信頼区間は母平均線の不確実性を表します。新しい個体の予測区間には個体誤差も加わるため常に広くなります。観測範囲外への外挿は線形関係の保証がなく慎重に扱います。" },
  { type: "list", ordered: true, items: ["散布図と研究デザインを確認", "係数と信頼区間を推定", "残差・影響点・線形性・等分散性を診断", "F、傾きt、p値、R²、残差標準偏差を報告", "関連を因果とせず、予測対象と適用範囲を明示"] },
];

export const pearsonCorrelationJa = [
  { type: "paragraph", text: "Pearsonの積率相関係数rは、二つの量的変数の線形関連の方向と強さを、単位に依存しない−1～1の尺度で表します。" },
  { type: "heading", text: "Pearson rの計算" },
  { type: "formula", latex: "r=\\frac{\\sum(X_i-\\bar X)(Y_i-\\bar Y)}{\\sqrt{\\sum(X_i-\\bar X)^2}\\sqrt{\\sum(Y_i-\\bar Y)^2}}", fallback: "標準化した共変動" },
  { type: "formulaGroup", formulas: [
    { label: "共分散による表現", latex: "r=\\frac{s_{XY}}{s_Xs_Y}", fallback: "r=sXY/(sX sY)" },
    { label: "範囲", latex: "-1\\le r\\le1", fallback: "−1≤r≤1" }
  ] },
  { type: "paragraph", text: "正なら同方向、負なら逆方向、絶対値が1に近いほど直線上に強く並びます。r=0は線形関連がないことを示すだけで、曲線関係まで否定しません。" },
  { type: "heading", text: "使用前に確認すること" },
  { type: "list", items: ["両変数が量的", "散布図で概ね線形", "観測が独立", "外れ値や群の混合がrを支配していない", "推論では二変量正規性または妥当な大標本近似"] },
  { type: "callout", tone: "warning", label: "相関は因果ではない", text: "交絡、逆因果、選択、共通時間傾向で相関は生じます。また範囲制限はrを弱め、異なる群の混合は見かけの相関を作り得ます。" },
  { type: "heading", text: "回帰傾きとの関係" },
  { type: "formula", latex: "b_1=r\\frac{s_Y}{s_X}", fallback: "b₁=r(sY/sX)" },
  { type: "paragraph", text: "rは尺度不変ですが、傾きはY単位/X単位を持ちます。符号は同じでも、同じrが同じ実質効果を意味するとは限りません。" },
  { type: "heading", text: "r²、R²、説明変動" },
  { type: "formulaGroup", formulas: [
    { label: "単回帰", latex: "r^2=R^2=\\frac{SS_R}{SS_T}", fallback: "r²=R²=SSR/SST" },
    { label: "百分率", latex: "100r^2\\%", fallback: "100r²%" }
  ] },
  { type: "paragraph", text: "切片を含む単回帰ではr²はYの全変動のうち線形モデルが説明する割合です。rそのものを百分率として解釈しません。" },
  { type: "heading", text: "母相関ρ=0の検定" },
  { type: "formulaGroup", formulas: [
    { label: "両側仮説", latex: "H_0:\\rho=0,\\qquad H_1:\\rho\\ne0", fallback: "H₀:ρ=0; H₁:ρ≠0" },
    { label: "t統計量", latex: "t=\\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}", fallback: "t=r√(n−2)/√(1−r²)" },
    { label: "自由度", latex: "df=n-2", fallback: "df=n−2" }
  ] },
  { type: "heading", text: "相関検定と回帰F検定が一致する理由" },
  { type: "formulaGroup", formulas: [
    { label: "平方和との関係", latex: "r^2=\\frac{SS_R}{SS_T}", fallback: "r²=SSR/SST" },
    { label: "tの二乗", latex: "t^2=\\frac{r^2(n-2)}{1-r^2}", fallback: "t²=r²(n−2)/(1−r²)" },
    { label: "Fへの変形", latex: "t^2=\\frac{SS_R/1}{SS_E/(n-2)}=F", fallback: "t²=F" }
  ] },
  { type: "callout", tone: "forward", label: "報告", text: "n、r、95%信頼区間、p値、散布図を示し、方向・強さ・非線形性・外れ値・交絡を説明します。相関の信頼区間にはFisher Z変換を利用できます。" },
];
