export const oneWayAnovaJa = [
  { type: "paragraph", text: "一元配置分散分析（one-way ANOVA）は、互いに独立した3群以上の母平均を一度に比較します。全変動を群間変動と群内変動に分解し、その比から群効果が偶然のばらつきより十分大きいかを判断します。" },
  { type: "callout", tone: "forward", label: "中心となる考え方", text: "群分けで説明できる変動をモデル、同じ群の個体差を誤差とみなし、MSM/MSEをF統計量にします。Fが大きいほど、すべての母平均が等しいという帰無仮説では説明しにくくなります。" },
  { type: "heading", text: "ANOVAの核：群分けをモデルとして扱う" },
  { type: "formulaGroup", formulas: [
    { label: "F統計量", latex: "F=\\frac{MS_{\\mathrm{between}}}{MS_{\\mathrm{within}}}=\\frac{MS_M}{MS_E}", fallback: "F=MSbetween/MSwithin=MSM/MSE" },
    { label: "H₀の下での分布", latex: "F\\sim F_{k-1,\\,n-k}", fallback: "F~F(k−1,n−k)" }
  ] },
  { type: "heading", text: "データ形式と成立条件" },
  { type: "table", rows: [["項目", "要件"], ["説明変数", "一つのカテゴリー因子（k水準）"], ["目的変数", "平均に意味がある量的変数"], ["標本", "各対象は一群だけに属する独立群"], ["帰無仮説", "すべての群の母平均が等しい"]] },
  { type: "list", items: ["観測単位が互いに独立している", "各群の誤差が概ね正規分布する", "各群が共通の誤差分散σ²を持つ", "目的変数が量的で、平均比較が研究上有意義である"] },
  { type: "callout", tone: "caution", label: "仮定の診断", text: "事前検定のp値だけに依存せず、群別分布、残差図、標本数の均衡、外れ値、研究デザインを併せて判断します。不等分散が問題ならWelch ANOVAが候補です。" },
  { type: "heading", text: "なぜ群内平方和を合併できるのか" },
  { type: "formulaGroup", formulas: [
    { label: "第j群の群内平方和", latex: "SS_{E,j}=\\sum_{i=1}^{n_j}(X_{ij}-\\bar X_j)^2", fallback: "SSE,j=Σᵢ(Xᵢⱼ−X̄ⱼ)²" },
    { label: "全群を合併", latex: "SS_E=\\sum_{j=1}^{k}\\sum_{i=1}^{n_j}(X_{ij}-\\bar X_j)^2", fallback: "SSE=ΣⱼΣᵢ(Xᵢⱼ−X̄ⱼ)²" },
    { label: "共通群内分散の推定", latex: "MS_E=\\frac{SS_E}{n-k}", fallback: "MSE=SSE/(n−k)" },
    { label: "群内自由度", latex: "\\sum_{j=1}^{k}(n_j-1)=n-k", fallback: "Σⱼ(nⱼ−1)=n−k" }
  ] },
  { type: "paragraph", text: "各群が同じ誤差分散を推定しているなら、群ごとの独立な誤差情報を自由度で重み付けして合併できます。この結果がMSEです。" },
  { type: "heading", text: "なぜ均方の比がF分布になるのか" },
  { type: "formulaGroup", formulas: [
    { label: "群間", latex: "\\frac{SS_M}{\\sigma^2}\\sim\\chi^2_{k-1}", fallback: "SSM/σ²~χ²(k−1)" },
    { label: "群内", latex: "\\frac{SS_E}{\\sigma^2}\\sim\\chi^2_{n-k}", fallback: "SSE/σ²~χ²(n−k)" }
  ] },
  { type: "formula", latex: "\\frac{(SS_M/\\sigma^2)/(k-1)}{(SS_E/\\sigma^2)/(n-k)}=\\frac{MS_M}{MS_E}\\sim F_{k-1,\\,n-k}", fallback: "MSM/MSE~F(k−1,n−k)" },
  { type: "paragraph", text: "H₀の下では両方の均方がσ²を推定するため、比は概ね1付近です。群平均が異なるとMSMが増え、Fは右側へ大きくなります。" },
  { type: "heading", text: "仮説" },
  { type: "formulaGroup", formulas: [
    { label: "帰無仮説", latex: "H_0:\\mu_1=\\mu_2=\\cdots=\\mu_k", fallback: "H₀: μ₁=μ₂=⋯=μₖ" },
    { label: "対立仮説", latex: "H_1:\\text{すべての }\\mu_j\\text{ が等しいわけではない}", fallback: "H₁: すべてのμⱼが等しいわけではない" },
    { label: "同値な表現", latex: "H_1:\\exists\\,j\\ne\\ell\\text{ such that }\\mu_j\\ne\\mu_\\ell", fallback: "少なくとも一組の母平均が異なる" }
  ] },
  { type: "callout", tone: "intuition", label: "有意でも全群が異なるとは限らない", text: "全体F検定は少なくとも一つの差を示すだけです。差の位置を特定するには計画対比または事後比較が必要です。" },
  { type: "heading", text: "記号と一元配置モデル" },
  { type: "formulaGroup", formulas: [
    { label: "第j群平均", latex: "\\bar X_j=\\frac{1}{n_j}\\sum_{i=1}^{n_j}X_{ij}", fallback: "X̄ⱼ=(1/nⱼ)ΣXᵢⱼ" },
    { label: "総平均", latex: "\\bar X_{\\cdot\\cdot}=\\frac{1}{n}\\sum_{j=1}^{k}n_j\\bar X_j", fallback: "X̄··=(1/n)ΣnⱼX̄ⱼ" },
    { label: "母集団モデル", latex: "X_{ij}=\\mu+\\alpha_j+\\varepsilon_{ij}", fallback: "Xᵢⱼ=μ+αⱼ+εᵢⱼ" },
    { label: "誤差", latex: "\\varepsilon_{ij}\\overset{\\mathrm{iid}}{\\sim}N(0,\\sigma^2)", fallback: "εᵢⱼ iid~N(0,σ²)" }
  ] },
  { type: "formula", latex: "\\underbrace{X_{ij}-\\bar X_{\\cdot\\cdot}}_{\\text{全偏差}}=\\underbrace{\\bar X_j-\\bar X_{\\cdot\\cdot}}_{\\text{群間}}+\\underbrace{X_{ij}-\\bar X_j}_{\\text{群内}}", fallback: "全偏差=群間偏差+群内偏差" },
  { type: "heading", text: "平方和を分解する" },
  { type: "formulaGroup", formulas: [
    { label: "群内平方和", latex: "SS_E=\\sum_j\\sum_i(X_{ij}-\\bar X_j)^2", fallback: "SSE=ΣⱼΣᵢ(Xᵢⱼ−X̄ⱼ)²" },
    { label: "群間平方和", latex: "SS_M=\\sum_j n_j(\\bar X_j-\\bar X_{\\cdot\\cdot})^2", fallback: "SSM=Σⱼnⱼ(X̄ⱼ−X̄··)²" },
    { label: "全平方和", latex: "SS_T=\\sum_j\\sum_i(X_{ij}-\\bar X_{\\cdot\\cdot})^2", fallback: "SST=ΣⱼΣᵢ(Xᵢⱼ−X̄··)²" },
    { label: "分解", latex: "SS_T=SS_M+SS_E", fallback: "SST=SSM+SSE" }
  ] },
  { type: "heading", text: "自由度、均方、F検定" },
  { type: "table", rows: [["変動源", "平方和", "自由度", "均方"], ["群間", "SSM", "k−1", "SSM/(k−1)"], ["群内", "SSE", "n−k", "SSE/(n−k)"], ["全体", "SST", "n−1", "—"]] },
  { type: "formulaGroup", formulas: [
    { label: "F統計量", latex: "F_{\\mathrm{obs}}=\\frac{MS_M}{MS_E}", fallback: "Fobs=MSM/MSE" },
    { label: "右裾p値", latex: "p=P\\!\\left(F_{k-1,\\,n-k}\\ge F_{\\mathrm{obs}}\\mid H_0\\right)", fallback: "p=P[F≥Fobs|H₀]" },
    { label: "自由度分解", latex: "n-1=(k-1)+(n-k)", fallback: "n−1=(k−1)+(n−k)" }
  ] },
  { type: "heading", text: "完全な分析手順" },
  { type: "list", ordered: true, items: ["研究デザイン、独立性、因子水準、目的変数を確認", "群別のn、平均、標準偏差、分布、外れ値を確認", "残差と等分散性を診断し、必要ならWelch法を選択", "平方和、自由度、均方、F、p値を計算", "有意なら計画対比または多重性を調整した事後比較を実施", "平均差、信頼区間、効果量、仮定と限界を報告"] },
  { type: "heading", text: "二群ではF=t²" },
  { type: "paragraph", text: "等分散を仮定した独立二群では、一元配置ANOVAとpooled t検定は同じ帰無仮説を検定します。" },
  { type: "formulaGroup", formulas: [
    { label: "Pooled t", latex: "t=\\frac{\\bar X_1-\\bar X_2}{\\sqrt{s_p^2(1/n_1+1/n_2)}}", fallback: "t=(X̄₁−X̄₂)/√[sₚ²(1/n₁+1/n₂)]" },
    { label: "合併分散", latex: "s_p^2=\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}", fallback: "sₚ²=[(n₁−1)s₁²+(n₂−1)s₂²]/(n₁+n₂−2)" },
    { label: "ANOVAのMSE", latex: "MS_E=s_p^2", fallback: "MSE=sₚ²" },
    { label: "群間均方", latex: "MS_M=\\frac{(\\bar X_1-\\bar X_2)^2}{1/n_1+1/n_2}", fallback: "MSM=(X̄₁−X̄₂)²/(1/n₁+1/n₂)" },
    { label: "結論", latex: "\\boxed{F=t^2}", fallback: "F=t²" }
  ] },
  { type: "callout", tone: "intuition", label: "方向は平均差から読む", text: "二群の両側t検定とANOVAは同じp値になりますが、平方により符号が消えるため差の方向は群平均または平均差から読みます。" },
  { type: "heading", text: "ANOVAは一種類ではない" },
  { type: "paragraph", text: "不等分散にはWelch ANOVA、二因子なら主効果と交互作用を扱う二元配置ANOVA、複数の量的目的変数ならMANOVA、反復測定には反復測定法や混合モデルを検討します。" },
];
