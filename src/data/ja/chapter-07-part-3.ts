export const rSquaredJa = [
  { type: "paragraph", text: "決定係数R²は、切片を含む回帰モデルがYの全変動のうちどの割合を標本内で説明したかを表します。モデル適合の一側面であり、因果性・予測精度・モデル妥当性そのものではありません。" },
  { type: "formulaGroup", formulas: [
    { label: "平方和分解", latex: "SS_T=SS_R+SS_E", fallback: "SST=SSR+SSE" },
    { label: "決定係数", latex: "R^2=\\frac{SS_R}{SS_T}", fallback: "R²=SSR/SST" },
    { label: "同値式", latex: "R^2=1-\\frac{SS_E}{SS_T}", fallback: "R²=1−SSE/SST" }
  ] },
  { type: "heading", text: "なぜSSRをSSTで割るのか" },
  { type: "paragraph", text: "SSTは平均だけを使う基準モデルに対するYの総ばらつき、SSRは回帰が説明した部分、SSEは残った部分です。したがってR²は説明済み部分÷全体、1−R²は未説明部分の割合です。" },
  { type: "heading", text: "読者に分かる表現" },
  { type: "formula", latex: "100\\times R^2\\%", fallback: "100×R²%" },
  { type: "paragraph", text: "R²=0.64なら「この標本では、モデルがYの観察変動の64%を説明した」と表現します。「Yの64%をXが引き起こした」「予測が64%正しい」とは言いません。" },
  { type: "heading", text: "範囲と例外" },
  { type: "formula", latex: "0\\le R^2\\le1", fallback: "0≤R²≤1" },
  { type: "paragraph", text: "通常の最小二乗法で切片を含み、同じデータ上で評価すればこの範囲です。切片なしモデル、異なる定義、外部検証の予測R²では負値もあり得ます。" },
  { type: "heading", text: "単回帰でR²=r²になる理由" },
  { type: "formulaGroup", formulas: [
    { label: "傾き", latex: "b_1=\\frac{\\sum(X_i-\\bar X)(Y_i-\\bar Y)}{\\sum(X_i-\\bar X)^2}", fallback: "b₁=共変動/X変動" },
    { label: "回帰平方和", latex: "SS_R=b_1^2\\sum(X_i-\\bar X)^2", fallback: "SSR=b₁²Σ(Xᵢ−X̄)²" },
    { label: "代入", latex: "R^2=\\frac{[\\sum(X_i-\\bar X)(Y_i-\\bar Y)]^2}{\\sum(X_i-\\bar X)^2\\sum(Y_i-\\bar Y)^2}=r^2", fallback: "R²=r²" }
  ] },
  { type: "callout", tone: "caution", label: "多元回帰では単一相関の二乗ではない", text: "複数説明変数のR²は、それらを共同で用いたモデルの説明割合です。どれか一つのPearson rを二乗した値ではありません。" },
  { type: "heading", text: "R²、t、Fのつながり" },
  { type: "formulaGroup", formulas: [
    { label: "単回帰F", latex: "F=\\frac{SS_R/1}{SS_E/(n-2)}", fallback: "F=(SSR/1)/[SSE/(n−2)]" },
    { label: "平方和", latex: "SS_R=R^2SS_T,\\quad SS_E=(1-R^2)SS_T", fallback: "SSR=R²SST; SSE=(1−R²)SST" },
    { label: "R²によるF", latex: "F=\\frac{R^2(n-2)}{1-R^2}", fallback: "F=R²(n−2)/(1−R²)" },
    { label: "単回帰", latex: "F=\\frac{r^2(n-2)}{1-r^2}=t^2", fallback: "F=t²" }
  ] },
  { type: "heading", text: "高いR²でもモデルが適切とは限らない" },
  { type: "list", items: ["曲線を直線で当てても範囲が広ければR²が高くなり得る", "外れ値一つがR²を押し上げ得る", "不要な説明変数を加えると通常R²は低下しない", "高R²でも残差の不等分散・依存・非正規性は残り得る", "標本内R²は新規データの予測性能を保証しない", "低R²でも重要な小効果を精確に推定できる場合がある"] },
  { type: "callout", tone: "forward", label: "併せて報告", text: "調整R²、交差検証性能、RMSE、残差診断、係数と信頼区間を目的に応じて示します。R²だけでモデルを選びません。" },
];

export const multipleRegressionJa = [
  { type: "paragraph", text: "重回帰分析は複数の説明変数を同じ線形モデルへ入れ、他の変数を一定とした各変数の条件付き関連を推定します。予測、交絡調整、複数因子の同時比較に使われます。" },
  { type: "formulaGroup", formulas: [
    { label: "母集団モデル", latex: "Y_i=\\beta_0+\\beta_1X_{1i}+\\cdots+\\beta_pX_{pi}+\\varepsilon_i", fallback: "Yᵢ=β₀+β₁X₁ᵢ+⋯+βₚXₚᵢ+εᵢ" },
    { label: "標本予測式", latex: "\\hat Y_i=b_0+b_1X_{1i}+\\cdots+b_pX_{pi}", fallback: "Ŷᵢ=b₀+b₁X₁ᵢ+⋯+bₚXₚᵢ" }
  ] },
  { type: "heading", text: "複数係数の解釈" },
  { type: "formula", latex: "E(\\text{Weight})=\\beta_0+\\beta_1(\\text{Age})+\\beta_2(\\text{Female})+\\beta_3(\\text{Height})", fallback: "E(体重)=β₀+β₁年齢+β₂女性+β₃身長" },
  { type: "paragraph", text: "β₁は性別と身長が同じ対象を比べたとき、年齢1単位増加に伴う平均体重差です。β₂は年齢と身長を一定にした女性と基準性別の平均差です。「他を一定にする」という条件付き解釈が単回帰との重要な違いです。" },
  { type: "callout", tone: "warning", label: "調整は自動的に因果効果を作らない", text: "適切な交絡因子選択、時間順序、測定の質、モデル形が必要です。媒介変数やcolliderを無造作に調整すると、目的の効果を除いたりバイアスを生じたりします。" },
  { type: "heading", text: "Yの変動を分解する" },
  { type: "formulaGroup", formulas: [
    { label: "偏差分解", latex: "Y_i-\\bar Y=(\\hat Y_i-\\bar Y)+(Y_i-\\hat Y_i)", fallback: "全偏差=説明部分+残差" },
    { label: "全平方和", latex: "SS_T=\\sum(Y_i-\\bar Y)^2", fallback: "SST=Σ(Yᵢ−Ȳ)²" },
    { label: "回帰平方和", latex: "SS_R=\\sum(\\hat Y_i-\\bar Y)^2", fallback: "SSR=Σ(Ŷᵢ−Ȳ)²" },
    { label: "誤差平方和", latex: "SS_E=\\sum(Y_i-\\hat Y_i)^2", fallback: "SSE=Σ(Yᵢ−Ŷᵢ)²" },
    { label: "分解", latex: "SS_T=SS_R+SS_E", fallback: "SST=SSR+SSE" }
  ] },
  { type: "heading", text: "全体F検定" },
  { type: "formula", latex: "H_0:\\beta_1=\\beta_2=\\cdots=\\beta_p=0\\qquad H_1:\\text{少なくとも一つの }\\beta_j\\ne0", fallback: "H₀:全傾き=0; H₁:少なくとも一つ≠0" },
  { type: "table", rows: [["変動源", "平方和", "自由度", "均方"], ["回帰", "SSR", "p", "SSR/p"], ["誤差", "SSE", "n−p−1", "SSE/(n−p−1)"], ["全体", "SST", "n−1", "—"]] },
  { type: "formulaGroup", formulas: [
    { label: "モデル均方", latex: "MS_R=\\frac{SS_R}{p}", fallback: "MSR=SSR/p" },
    { label: "誤差均方", latex: "MS_E=\\frac{SS_E}{n-p-1}", fallback: "MSE=SSE/(n−p−1)" },
    { label: "F統計量", latex: "F=\\frac{SS_R/p}{SS_E/(n-p-1)}", fallback: "F=(SSR/p)/[SSE/(n−p−1)]" },
    { label: "H₀下", latex: "F\\sim F_{p,n-p-1}", fallback: "F~F(p,n−p−1)" }
  ] },
  { type: "heading", text: "各係数の個別検定" },
  { type: "formulaGroup", formulas: [
    { label: "個別仮説", latex: "H_0:\\beta_j=0\\qquad H_1:\\beta_j\\ne0", fallback: "H₀:βⱼ=0; H₁:βⱼ≠0" },
    { label: "t統計量", latex: "t=\\frac{b_j}{SE(b_j)},\\qquad df=n-p-1", fallback: "t=bⱼ/SE(bⱼ), df=n−p−1" }
  ] },
  { type: "paragraph", text: "全体Fが有意でも全係数が有意とは限らず、個別tが非有意でも変数群として有用な場合があります。複数係数の共同仮説には部分F検定やWald検定を使います。" },
  { type: "heading", text: "カテゴリー変数とANOVAの関係" },
  { type: "formulaGroup", formulas: [
    { label: "J群のダミー変数数", latex: "p=J-1", fallback: "p=J−1" },
    { label: "誤差自由度", latex: "n-p-1=n-J", fallback: "n−p−1=n−J" }
  ] },
  { type: "paragraph", text: "J水準の因子はJ−1個のダミー変数で表し、一水準を基準群とします。因子だけの回帰モデルの全体F検定は一元配置ANOVAと同じです。" },
  { type: "heading", text: "ダミー変数の符号化" },
  { type: "table", rows: [["群", "X₁", "X₂", "平均"], ["基準群", "0", "0", "β₀"], ["群2", "1", "0", "β₀+β₁"], ["群3", "0", "1", "β₀+β₂"]] },
  { type: "formula", latex: "E(Y)=\\beta_0+\\beta_1X_1+\\beta_2X_2", fallback: "E(Y)=β₀+β₁X₁+β₂X₂" },
  { type: "paragraph", text: "β₁とβ₂はそれぞれ基準群との差です。異なる群同士の比較や全体効果には適切な対比を使い、多重性も考慮します。" },
  { type: "heading", text: "交絡因子をモデルへ入れる理由" },
  { type: "formulaGroup", formulas: [
    { label: "未調整", latex: "E(\\text{Vision})=\\beta_0+\\beta_1(\\text{Wealth})", fallback: "E(視力)=β₀+β₁富" },
    { label: "年齢調整", latex: "E(\\text{Vision})=\\beta_0+\\beta_1(\\text{Wealth})+\\beta_2(\\text{Age})", fallback: "E(視力)=β₀+β₁富+β₂年齢" }
  ] },
  { type: "paragraph", text: "年齢が富と視力の両方に関連するなら未調整係数は交絡され得ます。年齢を加えたβ₁は同年齢での条件付き関連です。ただし線形性、交互作用、測定誤差、overlapも確認します。" },
  { type: "heading", text: "Crude、部分調整、完全モデル" },
  { type: "table", rows: [["モデル", "目的"], ["Crude", "曝露と結果の未調整関連"], ["部分調整", "主要な事前指定交絡因子を加え、係数変化を確認"], ["完全モデル", "因果図・研究計画に基づく必要変数と形を含める"]] },
  { type: "heading", text: "成立条件と診断" },
  { type: "list", items: ["平均構造が各連続変数について適切（必要なら非線形項）", "観測・誤差が独立", "残差分散が概ね一定", "小標本推論では残差が概ね正規", "完全多重共線性がなく、VIFや条件数も確認", "影響点、欠測、外挿、モデル選択の不確実性を評価"] },
  { type: "heading", text: "分析と報告の順序" },
  { type: "list", ordered: true, items: ["研究課題、推定対象、変数選択を事前定義", "分布、欠測、相関、符号化を確認", "線形性・交互作用を研究上必要な形で指定", "全体F、係数、95%信頼区間、p値、R²・調整R²を推定", "残差、多重共線性、影響点、予測性能を診断", "未調整・調整結果、単位、基準群、限界を明記"] },
];
