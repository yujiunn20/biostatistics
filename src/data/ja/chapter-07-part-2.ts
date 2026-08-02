export const fisherZTransformationJa = [
  { type: "paragraph", text: "標本相関係数rの標本分布は、特に|ρ|が大きいと非対称で分散もρに依存します。Fisher Z変換はrを実数全体へ写し、分布をより正規かつ分散一定に近づけ、信頼区間や相関係数の比較を可能にします。" },
  { type: "heading", text: "Fisher Z変換" },
  { type: "formulaGroup", formulas: [
    { label: "標本相関", latex: "z_r=\\frac12\\ln\\left(\\frac{1+r}{1-r}\\right)=\\operatorname{arctanh}(r)", fallback: "zᵣ=½ln[(1+r)/(1−r)]" },
    { label: "母相関", latex: "z_\\rho=\\frac12\\ln\\left(\\frac{1+\\rho}{1-\\rho}\\right)", fallback: "zρ=½ln[(1+ρ)/(1−ρ)]" },
    { label: "逆変換", latex: "r=\\tanh(z_r)=\\frac{e^{2z_r}-1}{e^{2z_r}+1}", fallback: "r=tanh(zᵣ)" }
  ] },
  { type: "formula", latex: "z(r)\\approx N\\left(z(\\rho),\\frac1{n-3}\\right),\\qquad SE[z(r)]\\approx\\frac1{\\sqrt{n-3}}", fallback: "z(r)≈N[z(ρ),1/(n−3)]" },
  { type: "heading", text: "ρが指定値に等しいかを検定する" },
  { type: "formulaGroup", formulas: [
    { label: "仮説", latex: "H_0:\\rho=\\rho_0,\\qquad H_1:\\rho\\ne\\rho_0", fallback: "H₀:ρ=ρ₀; H₁:ρ≠ρ₀" },
    { label: "Z統計量", latex: "Z=\\frac{z(r)-z(\\rho_0)}{1/\\sqrt{n-3}}", fallback: "Z=[z(r)−z(ρ₀)]/[1/√(n−3)]" }
  ] },
  { type: "paragraph", text: "ρ₀=0の検定には前頁のt検定が正確な標準法です。Fisher Zは非零の指定値、信頼区間、独立相関の比較で特に有用です。" },
  { type: "heading", text: "母相関の信頼区間" },
  { type: "formulaGroup", formulas: [
    { label: "下限", latex: "L_z=z(r)-z_{1-\\alpha/2}\\frac1{\\sqrt{n-3}}", fallback: "Lz=z(r)−z/√(n−3)" },
    { label: "上限", latex: "U_z=z(r)+z_{1-\\alpha/2}\\frac1{\\sqrt{n-3}}", fallback: "Uz=z(r)+z/√(n−3)" },
    { label: "r尺度へ戻す", latex: "CI_\\rho=[\\tanh(L_z),\\tanh(U_z)]", fallback: "CIρ=[tanh(Lz),tanh(Uz)]" }
  ] },
  { type: "callout", tone: "intuition", label: "区間が非対称になる理由", text: "z尺度では対称でも、tanhで−1～1へ戻すとr尺度では非対称になります。これは誤りではなく相関係数の境界を正しく反映します。" },
  { type: "heading", text: "独立二群の相関を比較する" },
  { type: "formulaGroup", formulas: [
    { label: "仮説", latex: "H_0:\\rho_1=\\rho_2,\\qquad H_1:\\rho_1\\ne\\rho_2", fallback: "H₀:ρ₁=ρ₂; H₁:ρ₁≠ρ₂" },
    { label: "各群を変換", latex: "z_1=z(r_1),\\qquad z_2=z(r_2)", fallback: "z₁=z(r₁), z₂=z(r₂)" },
    { label: "差の標準誤差", latex: "SE(z_1-z_2)=\\sqrt{\\frac1{n_1-3}+\\frac1{n_2-3}}", fallback: "SE=√[1/(n₁−3)+1/(n₂−3)]" },
    { label: "比較Z", latex: "Z=\\frac{z(r_1)-z(r_2)}{\\sqrt{1/(n_1-3)+1/(n_2-3)}}", fallback: "Z=(z₁−z₂)/SE" }
  ] },
  { type: "formula", latex: "(z_1-z_2)\\pm z_{1-\\alpha/2}\\sqrt{\\frac1{n_1-3}+\\frac1{n_2-3}}", fallback: "z尺度での差のCI" },
  { type: "heading", text: "この二群式を使えない場合" },
  { type: "list", items: ["同じ対象から得た二つの相関など、相関係数が互いに依存する", "二相関が一つの変数を共有する", "クラスター、反復測定、重み付き標本がある", "Pearson相関の仮定が著しく破れている", "Spearman相関へ標準誤差式をそのまま流用する"] },
  { type: "callout", tone: "forward", label: "報告", text: "各群のnとr、Fisher Zによる95%信頼区間、群差Zとp値、独立性の根拠を示します。z差をそのままr差と呼ばないようにします。" },
];

export const spearmanCorrelationJa = [
  { type: "paragraph", text: "Spearmanの順位相関係数rₛは、原値を順位へ変換してからPearson相関を計算し、二変数の単調な関連を評価します。直線でなくても一方向に増減する関係を捉えられます。" },
  { type: "heading", text: "Spearman相関を検討する場面" },
  { type: "list", items: ["順序尺度データを扱う", "関係は単調だが直線ではない", "外れ値でPearson rが強く影響される", "分布が強く歪み、順位に基づく要約が適切", "間隔の大きさより順序そのものに関心がある"] },
  { type: "callout", tone: "caution", label: "仮定不要ではない", text: "独立観測と意味のある順位が必要です。またSpearmanはあらゆる非線形関係を検出するわけではなく、U字型のような非単調関係では0付近になり得ます。" },
  { type: "heading", text: "第1段階：原値を順位へ変換する" },
  { type: "paragraph", text: "XとYを別々に小さい順へ並べて1～nの順位を与えます。同値（tie）は占める順位の平均を与えます。順位変換により間隔情報は捨てられ、順序だけが残ります。" },
  { type: "heading", text: "第2段階：順位のPearson相関を求める" },
  { type: "formula", latex: "r_s=\\frac{\\sum[R(X_i)-\\overline{R_X}][R(Y_i)-\\overline{R_Y}]}{\\sqrt{\\sum[R(X_i)-\\overline{R_X}]^2}\\sqrt{\\sum[R(Y_i)-\\overline{R_Y}]^2}}", fallback: "rₛ=順位Xと順位YのPearson相関" },
  { type: "paragraph", text: "rₛ=1なら順位が完全に一致、−1なら完全に逆順、0付近なら単調な順位関係が弱いことを示します。" },
  { type: "heading", text: "同順位がない場合の簡略式" },
  { type: "formulaGroup", formulas: [
    { label: "順位差", latex: "d_i=R(X_i)-R(Y_i)", fallback: "dᵢ=R(Xᵢ)−R(Yᵢ)" },
    { label: "簡略式", latex: "r_s=1-\\frac{6\\sum d_i^2}{n(n^2-1)}", fallback: "rₛ=1−6Σdᵢ²/[n(n²−1)]" }
  ] },
  { type: "callout", tone: "warning", label: "同順位があるとき", text: "簡略式は同順位なしを前提とします。同順位があれば平均順位を付け、その順位列に通常のPearson相関式を適用します。" },
  { type: "heading", text: "方向と大きさの判読" },
  { type: "paragraph", text: "符号は単調関係の方向、絶対値は順位の整合性を表します。強弱の固定的な境界は分野や測定信頼性に依存するため、散布図、信頼区間、研究文脈と合わせます。" },
  { type: "heading", text: "母順位相関の推論" },
  { type: "formula", latex: "H_0:\\rho_s=0\\qquad H_1:\\rho_s\\ne0", fallback: "H₀:ρₛ=0; H₁:ρₛ≠0" },
  { type: "paragraph", text: "小標本では順位の置換分布に基づく正確検定、同順位や大標本では適切な近似・置換・bootstrapを使えます。片側か両側かは事前に決めます。" },
  { type: "heading", text: "Spearman rₛへFisher Zを直接使えるか" },
  { type: "paragraph", text: "Pearson r用の分散1/(n−3)をSpearman rₛへそのまま使うのは一般に厳密ではありません。標本分布と同順位の影響が異なるため、Spearman専用近似、置換法、bootstrap信頼区間を利用します。" },
  { type: "table", rows: [["項目", "Pearson r", "Spearman rₛ"], ["対象", "原値", "順位"], ["関係", "線形", "単調"], ["外れ値", "影響を受けやすい", "通常は影響が小さい"], ["推論", "t検定・Fisher Z", "正確・置換・順位用近似・bootstrap"]] },
  { type: "callout", tone: "forward", label: "報告", text: "n、rₛ、信頼区間、p値、同順位の扱い、使用した推論法、順位散布図を示し、単調関連を因果関係と解釈しません。" },
];
