export const binomialTestJa = [
  { type: "paragraph", text: "二項検定は二値結果の母比率を推測します。1標本では標本比率p̂を指定値π₀と比較し、独立2標本ではp̂₁−p̂₂を比較します。十分な標本では正規近似Z検定、小標本や稀な事象では正確二項法を使います。" },
  { type: "callout", tone: "forward", label: "二つの問題", text: "1標本比率検定はp̂とπ₀、独立2比率検定はp̂₁−p̂₂を扱います。近似条件を満たさない場合は離散的な二項分布を直接使います。" },
  { type: "heading", text: "成功回数から標本比率へ" },
  { type: "paragraph", text: "X~Binomial(n,π)なら標本比率p̂=X/nです。線形変換の法則から平均と分散を求められます。" },
  { type: "formulaGroup", formulas: [
    { label: "標本比率", latex: "\\hat p=\\frac{X}{n}", fallback: "p̂=X/n" },
    { label: "期待値", latex: "E(\\hat p)=\\pi", fallback: "E(p̂)=π" },
    { label: "分散", latex: "\\operatorname{Var}(\\hat p)=\\frac{\\pi(1-\\pi)}{n}", fallback: "Var(p̂)=π(1−π)/n" },
    { label: "標準誤差", latex: "\\operatorname{SE}(\\hat p)=\\sqrt{\\frac{\\pi(1-\\pi)}{n}}", fallback: "SE(p̂)=√[π(1−π)/n]" }
  ] },
  { type: "callout", tone: "intuition", label: "回数と比率の分散を混同しない", text: "Xの分散はnπ(1−π)ですが、p̂=X/nではn²で割るためπ(1−π)/nになります。標準誤差はその平方根です。" },
  { type: "heading", text: "一母比率の仮説" },
  { type: "formulaGroup", formulas: [
    { label: "両側", latex: "H_0:\\pi=\\pi_0,\\qquad H_1:\\pi\\ne\\pi_0", fallback: "H₀: π=π₀；H₁: π≠π₀" },
    { label: "右側", latex: "H_0:\\pi\\leq\\pi_0,\\qquad H_1:\\pi>\\pi_0", fallback: "H₀: π≤π₀；H₁: π>π₀" },
    { label: "左側", latex: "H_0:\\pi\\geq\\pi_0,\\qquad H_1:\\pi<\\pi_0", fallback: "H₀: π≥π₀；H₁: π<π₀" },
    { label: "1比率Z統計量", latex: "Z=\\frac{\\hat p-\\pi_0}{\\sqrt{\\pi_0(1-\\pi_0)/n}}", fallback: "Z=(p̂−π₀)/√[π₀(1−π₀)/n]" }
  ] },
  { type: "paragraph", text: "検定の分母はH₀で指定されたπ₀を使います。H₀下でどの程度変動するかを測るためです。" },
  { type: "heading", text: "一比率の信頼区間" },
  { type: "formula", latex: "\\hat p\\pm z_{1-\\alpha/2}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}", fallback: "p̂±z·√[p̂(1−p̂)/n]" },
  { type: "callout", tone: "intuition", label: "Wald区間は常に信頼できるとは限らない", text: "小標本やp̂が0・1に近い場合、Wald区間は[0,1]を外れたり被覆率が悪化します。Wilson score区間や適切な正確区間を優先できます。" },
  { type: "heading", text: "平均検定との対応" },
  { type: "table", rows: [["対象", "推定量", "H₀下の標準誤差", "Z"], ["母平均μ", "X̄", "σ/√n", "(X̄−μ₀)/(σ/√n)"], ["母比率π", "p̂", "√[π₀(1−π₀)/n]", "(p̂−π₀)/SE₀"]] },
  { type: "heading", text: "独立した二母比率" },
  { type: "formulaGroup", formulas: [
    { label: "比率差", latex: "D=\\hat p_1-\\hat p_2", fallback: "D=p̂₁−p̂₂" },
    { label: "分散", latex: "\\operatorname{Var}(D)=\\frac{\\pi_1(1-\\pi_1)}{n_1}+\\frac{\\pi_2(1-\\pi_2)}{n_2}", fallback: "Var(D)=π₁(1−π₁)/n₁+π₂(1−π₂)/n₂" }
  ] },
  { type: "callout", tone: "intuition", label: "引き算でも分散を加える理由", text: "独立なら共分散は0で、負号は分散で二乗されます。したがって二群の抽出変動は加算されます。" },
  { type: "heading", text: "標本から標準誤差を推定する" },
  { type: "formula", latex: "\\widehat{\\operatorname{SE}}(\\hat p_1-\\hat p_2)=\\sqrt{\\frac{\\hat p_1(1-\\hat p_1)}{n_1}+\\frac{\\hat p_2(1-\\hat p_2)}{n_2}}", fallback: "SE(p̂₁−p̂₂)=√[p̂₁(1−p̂₁)/n₁+p̂₂(1−p̂₂)/n₂]" },
  { type: "heading", text: "二比率が等しいという検定" },
  { type: "paragraph", text: "H₀:π₁=π₂では共通比率を仮定し、二群の成功回数を合併したpooled proportionでH₀下の標準誤差を求めます。" },
  { type: "formulaGroup", formulas: [
    { label: "合併比率", latex: "\\hat p=\\frac{x_1+x_2}{n_1+n_2}", fallback: "p̂=(x₁+x₂)/(n₁+n₂)" },
    { label: "H₀下の標準誤差", latex: "\\operatorname{SE}_0=\\sqrt{\\hat p(1-\\hat p)\\left(\\frac1{n_1}+\\frac1{n_2}\\right)}", fallback: "SE₀=√[p̂(1−p̂)(1/n₁+1/n₂)]" },
    { label: "二比率Z統計量", latex: "Z=\\frac{\\hat p_1-\\hat p_2}{\\operatorname{SE}_0}", fallback: "Z=(p̂₁−p̂₂)/SE₀" }
  ] },
  { type: "callout", tone: "intuition", label: "単純平均ではなく加重平均", text: "標本サイズが異なるため、合併比率は総成功数÷総人数です。n₁=n₂の場合だけ(p̂₁+p̂₂)/2と一致します。" },
  { type: "heading", text: "二比率差の信頼区間" },
  { type: "formula", latex: "(\\hat p_1-\\hat p_2)\\pm z_{1-\\alpha/2}\\sqrt{\\frac{\\hat p_1(1-\\hat p_1)}{n_1}+\\frac{\\hat p_2(1-\\hat p_2)}{n_2}}", fallback: "(p̂₁−p̂₂)±z·SE" },
  { type: "paragraph", text: "信頼区間ではH₀の共通比率を強制せず、各群の比率で標準誤差を推定します。" },
  { type: "heading", text: "正規近似と正確法" },
  { type: "paragraph", text: "正規近似では期待成功数と期待失敗数が十分大きいか確認します。小標本、極端な比率、稀な事象では正確二項検定や2×2表のFisher正確検定を検討します。" },
  { type: "heading", text: "検定手順" },
  { type: "list", ordered: true, items: ["独立性、二値結果、研究デザインを確認", "H₀、H₁、方向、αを事前設定", "各成功数・標本サイズ・比率を計算", "近似条件を確認しZまたは正確法を選択", "p値と信頼区間を効果の大きさとともに報告"] },
];

export const chiSquareGoodnessOfFitJa = [
  { type: "paragraph", text: "カイ二乗適合度検定は、一つのカテゴリー変数の観察度数が、事前に指定した理論比率に適合するかを調べます。" },
  { type: "callout", tone: "forward", label: "中心となる流れ", text: "指定比率から期待度数Eᵢを計算→観察度数Oᵢとの差を標準化→二乗して全カテゴリーで加算→カイ二乗分布の右裾で全体のずれを評価します。" },
  { type: "heading", text: "二項分布から多項分布へ" },
  { type: "paragraph", text: "k個の排他的カテゴリーの確率をπ₁,…,πk、度数をO₁,…,Okとすると、度数ベクトルは多項分布に従います。" },
  { type: "formulaGroup", formulas: [
    { label: "確率の合計", latex: "\\sum_{i=1}^{k}\\pi_i=1", fallback: "Σπᵢ=1" },
    { label: "期待度数", latex: "E_i=n\\pi_i", fallback: "Eᵢ=nπᵢ" },
    { label: "度数の合計", latex: "\\sum_{i=1}^{k}O_i=n", fallback: "ΣOᵢ=n" }
  ] },
  { type: "callout", tone: "intuition", label: "二項分布は二カテゴリーの特例", text: "k=2なら確率はpと1−p、度数はaとn−aです。1比率問題は適合度検定の最も単純な場合とみなせます。" },
  { type: "heading", text: "データとモデルの条件" },
  { type: "list", items: ["各観察単位は一つのカテゴリーだけに入る", "観測値は独立", "理論比率は合計1", "カイ二乗近似に十分な期待度数がある"] },
  { type: "callout", tone: "forward", label: "期待度数が小さい場合", text: "Eᵢ≥5は一般的な目安で絶対法則ではありません。意味のあるカテゴリー統合、正確法、Monte Carlo法を検討し、門檻通過だけを目的に任意統合しません。" },
  { type: "heading", text: "仮説" },
  { type: "formulaGroup", formulas: [
    { label: "帰無仮説", latex: "H_0:\\pi_1=\\pi_{10},\\ldots,\\pi_k=\\pi_{k0}", fallback: "H₀: 各母比率が指定比率に等しい" },
    { label: "対立仮説", latex: "H_1:\\text{at least one }\\pi_i\\ne\\pi_{i0}", fallback: "H₁: 少なくとも一カテゴリーが異なる" }
  ] },
  { type: "heading", text: "Pearsonカイ二乗統計量" },
  { type: "formulaGroup", formulas: [
    { label: "統計量", latex: "\\chi^2=\\sum_{i=1}^{k}\\frac{(O_i-E_i)^2}{E_i}", fallback: "χ²=Σ(Oᵢ−Eᵢ)²/Eᵢ" },
    { label: "自由度", latex: "\\nu=k-1-m", fallback: "df=k−1−m（mはデータから推定した母数数）" }
  ] },
  { type: "callout", tone: "intuition", label: "なぜ右裾だけか？", text: "χ²は非負で、観察度数が期待度数から離れるほど大きくなります。したがってp値はP(χ²df≥χ²obs)です。" },
  { type: "heading", text: "二カテゴリーの場合" },
  { type: "paragraph", text: "O₁=a、O₂=n−a、期待値npとn(1−p)を代入すると、一比率Z統計量の二乗と一致します。" },
  { type: "formulaGroup", formulas: [
    { label: "二カテゴリーχ²", latex: "\\chi^2=\\frac{(a-np)^2}{np(1-p)}", fallback: "χ²=(a−np)²/[np(1−p)]" },
    { label: "Zとの関係", latex: "\\chi^2=Z^2", fallback: "χ²=Z²" }
  ] },
  { type: "callout", tone: "intuition", label: "二カテゴリーは独立な二情報ではない", text: "aが決まればn−aも決まります。二度数は負に関連し、自由度は1です。" },
  { type: "heading", text: "自由度がk−1となる理由" },
  { type: "paragraph", text: "総数nが固定されるため、k−1個の度数を決めると最後の一つは自動的に決まります。同じデータからm個の母数を推定した場合はさらにmを引きます。" },
  { type: "heading", text: "独立性検定との違い" },
  { type: "table", rows: [["方法", "変数数", "期待度数"], ["適合度検定", "一つのカテゴリー変数", "事前指定した理論比率から計算"], ["独立性検定", "二つのカテゴリー変数", "行・列の周辺比率から推定"]] },
  { type: "heading", text: "検定手順" },
  { type: "list", ordered: true, items: ["カテゴリーと理論比率を事前定義", "Eᵢ=nπᵢを計算し近似条件を確認", "Pearson χ²と自由度を計算", "右裾p値から適合性を判断", "有意なら各カテゴリーの残差も確認してずれの所在を解釈"] },
];
