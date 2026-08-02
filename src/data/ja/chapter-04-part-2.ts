export const zTestJa = [
  { type: "paragraph", text: "Z検定は標本統計量を帰無仮説が指定する母数と比較し、その差が標準誤差何個分かを測ります。標準化した統計量はH₀下で標準正規分布に従う、または近似するため、臨界値とp値を求められます。" },
  { type: "callout", tone: "forward", label: "この頁の流れ", text: "標本平均の標本分布を作る→H₀のμ₀を中心に標準化する→Z分布で極端さを判断する→同じ臨界点からα、β、検出力、信頼区間、標本サイズを結び付けます。" },
  { type: "heading", text: "個々のZスコアと平均のZ統計量を区別する" },
  { type: "paragraph", text: "個々のZスコアはXが母平均から母標準偏差何個分離れているかを示します。平均の検定ではX̄を扱い、その標準偏差である標準誤差σ/√nを分母に使います。" },
  { type: "formulaGroup", formulas: [
    { label: "個々のZスコア", latex: "Z=\\frac{X-\\mu}{\\sigma}", fallback: "Z=(X−μ)/σ" },
    { label: "標本平均の標準化", latex: "Z=\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}", fallback: "Z=(X̄−μ)/(σ/√n)" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["X", "個々の観測値"], ["X̄", "n観測値の標本平均"], ["μ", "母平均"], ["μ₀", "H₀が指定する母平均"], ["σ", "既知の母標準偏差"], ["n", "標本サイズ"], ["σ/√n", "標本平均の標準誤差"]] },
  { type: "heading", text: "Z検定が成立する理由" },
  { type: "paragraph", text: "母集団が正規分布なら標本平均も正規分布です。非正規でも適切な条件と十分なnでは中心極限定理により近似できます。" },
  { type: "formulaGroup", formulas: [
    { label: "標本平均の期待値", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
    { label: "標本平均の分散", latex: "\\operatorname{Var}(\\bar X)=\\frac{\\sigma^2}{n}", fallback: "Var(X̄)=σ²/n" },
    { label: "標準誤差", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" },
    { label: "H₀下のZ統計量", latex: "Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}\\sim N(0,1)", fallback: "Z=(X̄−μ₀)/(σ/√n)~N(0,1)" }
  ] },
  { type: "callout", tone: "intuition", label: "直感的解釈", text: "分子は標本結果とH₀の距離、分母は標本平均の通常の抽出変動です。Z=2はμ₀より2標準誤差高いことを示し、元データの2標準偏差ではありません。" },
  { type: "heading", text: "Z検定の条件" },
  { type: "list", items: ["統計量の標本分布が正規、または合理的に正規近似できる", "無作為抽出と観測値の独立性。対応・クラスター構造には設計に合う方法を使う", "平均のZ検定では母標準偏差σが既知。未知でsを使うなら原則t検定", "大標本でも未知のσが既知になるわけではない"] },
  { type: "heading", text: "1標本平均の仮説と判断" },
  { type: "formulaGroup", formulas: [
    { label: "両側", latex: "H_0:\\mu=\\mu_0,\\qquad H_1:\\mu\\ne\\mu_0", fallback: "H₀: μ=μ₀；H₁: μ≠μ₀" },
    { label: "右側", latex: "H_0:\\mu\\leq\\mu_0,\\qquad H_1:\\mu>\\mu_0", fallback: "H₀: μ≤μ₀；H₁: μ>μ₀" },
    { label: "左側", latex: "H_0:\\mu\\geq\\mu_0,\\qquad H_1:\\mu<\\mu_0", fallback: "H₀: μ≥μ₀；H₁: μ<μ₀" }
  ] },
  { type: "table", rows: [["方向", "棄却条件", "p値"], ["両側", "|Zobs| ≥ z₁₋α⁄₂", "2P(Z≥|Zobs|)"], ["右側", "Zobs ≥ z₁₋α", "P(Z≥Zobs)"], ["左側", "Zobs ≤ zα", "P(Z≤Zobs)"]] },
  { type: "callout", tone: "intuition", label: "Z値とp値を混同しない", text: "Z値はH₀分布内の位置、p値はその位置からH₁をより支持する方向へ積算した裾面積です。まず位置があり、次に面積があります。" },
  { type: "heading", text: "独立2標本平均のZ検定" },
  { type: "paragraph", text: "独立二群では平均差X̄₁−X̄₂を扱います。母分散が既知なら、独立性により平均差の分散は二群の分散の和です。" },
  { type: "formulaGroup", formulas: [
    { label: "平均差の分散", latex: "\\operatorname{Var}(\\bar X_1-\\bar X_2)=\\frac{\\sigma_1^2}{n_1}+\\frac{\\sigma_2^2}{n_2}", fallback: "Var(X̄₁−X̄₂)=σ₁²/n₁+σ₂²/n₂" },
    { label: "独立2標本Z統計量", latex: "Z=\\frac{(\\bar X_1-\\bar X_2)-\\Delta_0}{\\sqrt{\\sigma_1^2/n_1+\\sigma_2^2/n_2}}", fallback: "Z=[(X̄₁−X̄₂)−Δ₀]/√(σ₁²/n₁+σ₂²/n₂)" }
  ] },
  { type: "paragraph", text: "差なしの検定ではΔ₀=0です。対応データでは共分散を無視できないため、各対の差を分析します。" },
  { type: "heading", text: "信頼区間：同じ標準化式からμを解く" },
  { type: "paragraph", text: "両側(1−α)信頼区間は、標準正規分布の中央面積1−αから未知のμを解いて得られます。" },
  { type: "formulaGroup", formulas: [
    { label: "中央確率", latex: "P\\!\\left(-z_{1-\\alpha/2}\\leq\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\leq z_{1-\\alpha/2}\\right)=1-\\alpha", fallback: "中央確率=1−α" },
    { label: "μを解く", latex: "P\\!\\left(\\bar X-z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}\\leq\\mu\\leq\\bar X+z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}\\right)=1-\\alpha", fallback: "μはX̄±z·σ/√nの範囲" },
    { label: "信頼区間", latex: "\\bar X\\pm z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}", fallback: "X̄ ± z₁₋α⁄₂·σ/√n" }
  ] },
  { type: "paragraph", text: "95%区間ではz₀.₉₇₅=1.96です。信頼水準は同じ手順を反復したとき真のμを含む区間の長期割合であり、完成した固定区間にμが入る確率ではありません。" },
  { type: "callout", tone: "forward", label: "仮説検定との関係", text: "同じモデルの両側α検定で、μ₀が(1−α)信頼区間外ならH₀を棄却します。p値、臨界値、信頼区間は同じ標本分布を見ています。" },
  { type: "heading", text: "H₀とH₁の分布を重ねる" },
  { type: "paragraph", text: "αはH₀が真のとき臨界点を越えて誤棄却する面積、βは特定のH₁（μ=μ₁）が真のとき同じ臨界点を越えられない面積です。" },
  { type: "image", imageId: "z-errors-overlap" },
  { type: "callout", tone: "intuition", label: "同じ臨界線を二つの分布から見る", text: "臨界点の右側でH₀曲線下の面積がα、左側でH₁曲線下の面積がβです。H₁曲線の残る右側面積1−βが検出力です。" },
  { type: "heading", text: "右側検定のα：H₀から臨界点を決める" },
  { type: "image", imageId: "z-type-i-critical" },
  { type: "formulaGroup", formulas: [
    { label: "臨界点のZ値", latex: "z_{1-\\alpha}=\\frac{c-\\mu_0}{\\sigma/\\sqrt n}", fallback: "z₁₋α=(c−μ₀)/(σ/√n)" },
    { label: "臨界標本平均", latex: "c=\\mu_0+z_{1-\\alpha}\\frac{\\sigma}{\\sqrt n}", fallback: "c=μ₀+z₁₋α·σ/√n" }
  ] },
  { type: "heading", text: "右側検定のβ：同じ臨界点をH₁から見る" },
  { type: "image", imageId: "z-type-ii-beta" },
  { type: "formulaGroup", formulas: [
    { label: "H₁下の位置", latex: "z_\\beta=\\frac{c-\\mu_1}{\\sigma/\\sqrt n}", fallback: "zβ=(c−μ₁)/(σ/√n)" },
    { label: "第2種過誤", latex: "\\beta=P_{\\mu_1}(\\bar X\\leq c)=\\Phi(z_\\beta)", fallback: "β=Pμ₁(X̄≤c)=Φ(zβ)" },
    { label: "検出力", latex: "1-\\beta=1-\\Phi(z_\\beta)=\\Phi(-z_\\beta)", fallback: "Power=1−β=Φ(−zβ)" }
  ] },
  { type: "heading", text: "標本サイズ：αと検出力を同時に保つ" },
  { type: "paragraph", text: "H₀とH₁で同じ臨界点cを使う二式を引くとcが消え、必要標本サイズを求められます。" },
  { type: "formulaGroup", formulas: [
    { label: "臨界点を消去", latex: "z_{1-\\alpha}-z_\\beta=\\frac{\\mu_1-\\mu_0}{\\sigma/\\sqrt n}", fallback: "z₁₋α−zβ=(μ₁−μ₀)/(σ/√n)" },
    { label: "正規分布の対称性", latex: "z_\\beta=-z_{1-\\beta}", fallback: "zβ=−z₁₋β" },
    { label: "1標本片側の標本サイズ", latex: "n=\\left[\\frac{(z_{1-\\alpha}+z_{1-\\beta})\\sigma}{\\mu_1-\\mu_0}\\right]^2", fallback: "n={[(z₁₋α+z₁₋β)σ]/(μ₁−μ₀)}²" }
  ] },
  { type: "paragraph", text: "nは切り上げます。この式は1標本、片側、σ既知の平均Z検定用で、両側ではz₁₋α⁄₂を使います。" },
  { type: "details", label: "補足例：標本サイズと検出可能差", children: [
    { type: "paragraph", text: "早産児と満期産児の股関節超音波alpha angleを比較する研究では、σ=4.9°、両側α=0.05、検出力80%として、3°または2°の平均差を検出する各群標本サイズを計画しました。" },
    { type: "formulaGroup", formulas: [
      { label: "独立二群の平均差の標準誤差", latex: "\\operatorname{SE}(\\bar X_1-\\bar X_2)=\\sigma\\sqrt{\\frac{2}{n}}", fallback: "SE=σ√(2/n)" },
      { label: "各群の標本サイズ", latex: "n=2\\left[\\frac{(z_{1-\\alpha/2}+z_{1-\\beta})\\sigma}{\\delta}\\right]^2", fallback: "n=2{[(z₁₋α⁄₂+z₁₋β)σ]/δ}²" }
    ] },
    { type: "table", rows: [["検出差δ", "効果量d=δ/σ", "正規近似", "研究報告"], ["3°", "約0.61", "各群約42 hips", "43 hips"], ["2°", "約0.41", "各群約95 hips", "96 hips"]] },
    { type: "callout", tone: "intuition", label: "結果の意味", text: "小さい群の58 hipsは3°差の必要数を超えますが、2°差には不足します。非有意だからといって、あらゆる大きさの差がないとはいえません。" },
    { type: "callout", tone: "forward", label: "分析単位に注意", text: "244 hipsは122人から得られ、同じ乳児の左右股関節には相関があり得ます。実分析では対象内相関をモデルに反映する必要があります。" },
    { type: "paragraph", text: "Reference: Hockett C, et al. J Pediatr Orthop. 2024;44(1):e25–e29. doi:10.1097/BPO.0000000000002540." }
  ] },
  { type: "heading", text: "式から見る標本サイズの関係" },
  { type: "table", rows: [["変化", "必要n", "理由"], ["α↓", "増加", "第1種過誤を抑え境界が厳しくなる"], ["β↓（power↑）", "増加", "真の差を見逃さないため情報が必要"], ["σ↑", "増加", "雑音が大きい"], ["|μ₁−μ₀|↑", "減少", "大きな差は見つけやすい"]] },
  { type: "heading", text: "同じ導出から検出力を求める" },
  { type: "formulaGroup", formulas: [
    { label: "片側検出力", latex: "1-\\beta=\\Phi\\!\\left(\\frac{\\sqrt n\\,|\\mu_1-\\mu_0|}{\\sigma}-z_{1-\\alpha}\\right)", fallback: "1−β=Φ[√n|μ₁−μ₀|/σ−z₁₋α]" },
    { label: "両側の近似", latex: "1-\\beta\\approx\\Phi\\!\\left(\\frac{\\sqrt n\\,|\\mu_1-\\mu_0|}{\\sigma}-z_{1-\\alpha/2}\\right)", fallback: "1−β≈Φ[√n|μ₁−μ₀|/σ−z₁₋α⁄₂]" }
  ] },
  { type: "paragraph", text: "厳密な両側検出力ではH₁分布が左右両棄却域へ入る確率を加えます。nまたは効果が増えると検出力は上がり、σ増加やα低下は他条件一定なら検出力を下げます。" },
  { type: "image", imageId: "z-alpha-beta-tradeoff" },
  { type: "callout", tone: "forward", label: "αとβは単純な二者択一ではない", text: "境界だけを動かせばαとβは逆向きに変わりますが、n増加や測定変動低減によって分布の重なりを減らし、αを緩めず検出力を高められます。" },
];
