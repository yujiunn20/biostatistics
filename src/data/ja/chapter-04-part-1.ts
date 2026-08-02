export const tTestConceptJa = [
  { type: "paragraph", text: "t検定は母平均または平均差を検定します。Z検定と同じく、観察した差をその標準誤差で標準化します。本質的な違いは式の形ではなく、母標準偏差σが既知かどうかです。" },
  { type: "callout", tone: "forward", label: "この頁の中心", text: "σが既知ならσ/√nで標準化してZを得ます。未知なら標本標準偏差sで推定します。s自体も標本ごとに変動するため不確実性が増え、統計量は自由度をもつt分布に従います。" },
  { type: "heading", text: "Z検定から出発する" },
  { type: "paragraph", text: "個々の観測値のZスコアは母平均から母標準偏差何個分離れているかを示します。標本平均では標準誤差σ/√nを使います。" },
  { type: "formulaGroup", formulas: [
    { label: "個々の観測値のZスコア", latex: "Z_i=\\frac{X_i-\\mu}{\\sigma}", fallback: "Zi=(Xi−μ)/σ" },
    { label: "標本平均の中心", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
    { label: "標本平均の標準誤差", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" },
    { label: "平均のZ統計量", latex: "Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}", fallback: "Z=(X̄−μ₀)/(σ/√n)" }
  ] },
  { type: "heading", text: "実際には母標準偏差σが通常未知" },
  { type: "paragraph", text: "完全な母集団を観察できないため、μだけでなくσも通常未知です。同じ標本から標本標準偏差sを計算してσを推定します。" },
  { type: "formulaGroup", formulas: [
    { label: "標本分散", latex: "s^2=\\frac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "s²=Σ(Xi−X̄)²/(n−1)" },
    { label: "標本標準偏差", latex: "s=\\sqrt{\\frac{\\sum_{i=1}^{n}(X_i-\\bar X)^2}{n-1}}", fallback: "s=√[Σ(Xi−X̄)²/(n−1)]" },
    { label: "推定標準誤差", latex: "\\widehat{\\operatorname{SE}}(\\bar X)=\\frac{s}{\\sqrt n}", fallback: "推定SE(X̄)=s/√n" }
  ] },
  { type: "callout", tone: "intuition", label: "なぜ分母はn−1か？", text: "同じデータからX̄を推定したため、n個の偏差の和は0です。独立に変動できる方向はn−1個で、自由度はν=n−1です。" },
  { type: "heading", text: "Z統計量からt統計量へ" },
  { type: "paragraph", text: "σは固定母数ですがsは確率変数です。正規母集団からの独立標本では、標準化平均Zと標本分散から作るカイ二乗変数Uが独立になります。" },
  { type: "formulaGroup", formulas: [
    { label: "平均の標準化", latex: "Z=\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)", fallback: "Z=(X̄−μ)/(σ/√n) ~ N(0,1)" },
    { label: "標本分散によるカイ二乗変数", latex: "U=\\frac{(n-1)s^2}{\\sigma^2}\\sim\\chi^2_{n-1}", fallback: "U=(n−1)s²/σ² ~ χ²(n−1)" },
    { label: "独立性", latex: "Z\\perp U", fallback: "ZとUは独立" },
    { label: "t分布の構成", latex: "T=\\frac{Z}{\\sqrt{U/(n-1)}}\\sim t_{n-1}", fallback: "T=Z/√[U/(n−1)] ~ t(n−1)" },
    { label: "1標本t統計量", latex: "t=\\frac{\\bar X-\\mu_0}{s/\\sqrt n},\\qquad \\nu=n-1", fallback: "t=(X̄−μ₀)/(s/√n)，df=n−1" }
  ] },
  { type: "callout", tone: "intuition", label: "導出が示すこと", text: "tは標準正規変数を、カイ二乗変数から生じるランダムな尺度で割ったものです。σを標本から推定する追加の不確実性が、t分布の厚い裾を生みます。" },
  { type: "heading", text: "自由度が必要な理由" },
  { type: "paragraph", text: "自由度が低いほどsの変動は大きく、t分布は裾へより多くの確率を置きます。自由度が増えるとsは安定し、標準正規分布へ近づきます。" },
  { type: "formula", latex: "t_\\nu\\xrightarrow[\\nu\\to\\infty]{d}N(0,1)", fallback: "df→∞でt分布はN(0,1)へ近づく" },
  { type: "callout", tone: "intuition", label: "n≥30は固定境界ではない", text: "σが未知なら大標本でもt検定は正しく、Z検定へ切り替える必要はありません。大標本では両者が非常に近くなるだけです。" },
  { type: "heading", text: "Z検定とt検定の比較" },
  { type: "table", rows: [["項目", "Z検定", "t検定"], ["母標準偏差", "σ既知", "σ未知、sで推定"], ["標準誤差", "σ/√n", "s/√n"], ["参照分布", "N(0,1)", "t分布"], ["自由度", "不要", "必要"], ["裾", "薄い", "低自由度で厚い"]] },
  { type: "heading", text: "t検定は一種類ではない" },
  { type: "table", rows: [["方法", "問い", "分析する差"], ["1標本t検定", "母平均はμ₀に等しいか", "X̄−μ₀"], ["対応のあるt検定", "対応差の母平均は0か", "各差dᵢを作りd̄を分析"], ["独立2標本t検定", "独立した二母平均は同じか", "X̄₁−X̄₂"]] },
  { type: "heading", text: "t検定の基本仮定" },
  { type: "list", items: ["無作為抽出または適切な無作為割付と、研究デザインに沿った独立性", "平均と差を合理的に計算できる数量データ", "1標本では観測値、対応ありでは差、独立2標本では各群とモデル誤差の分布を確認", "小標本での強い歪みや外れ値に注意", "独立2標本では等分散pooled tと、不等分散に対応するWelch tを区別"] },
];

export const oneSampleTTestJa = [
  { type: "paragraph", text: "1標本t検定は、一つの標本の数量変数の平均が、事前に指定した定数μ₀と異なるかを調べます。μ₀には全国平均、製品規格、基準値、研究上の閾値などを使えます。" },
  { type: "heading", text: "「1標本」とは？" },
  { type: "paragraph", text: "一つの母集団から得た一群の代表的標本を意味し、観測値が一つという意味ではありません。測定値は得点、寿命、生存時間など、平均を合理的に計算できる数量変数です。" },
  { type: "heading", text: "仮説を立てる" },
  { type: "formulaGroup", formulas: [
    { label: "両側", latex: "H_0:\\mu=\\mu_0,\\qquad H_1:\\mu\\ne\\mu_0", fallback: "H₀: μ=μ₀；H₁: μ≠μ₀" },
    { label: "右側", latex: "H_0:\\mu\\leq\\mu_0,\\qquad H_1:\\mu>\\mu_0", fallback: "H₀: μ≤μ₀；H₁: μ>μ₀" },
    { label: "左側", latex: "H_0:\\mu\\geq\\mu_0,\\qquad H_1:\\mu<\\mu_0", fallback: "H₀: μ≥μ₀；H₁: μ<μ₀" }
  ] },
  { type: "heading", text: "検定統計量" },
  { type: "formulaGroup", formulas: [
    { label: "σ既知", latex: "Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}", fallback: "Z=(X̄−μ₀)/(σ/√n)" },
    { label: "σ未知", latex: "t=\\frac{\\bar X-\\mu_0}{s/\\sqrt n}", fallback: "t=(X̄−μ₀)/(s/√n)" },
    { label: "自由度", latex: "\\nu=n-1", fallback: "df=n−1" }
  ] },
  { type: "callout", tone: "intuition", label: "n>30ならZに変えるのか？", text: "大標本ではt分布が標準正規分布へ近づきますが、未知のσが既知になるわけではありません。σ未知ならt検定を使ってよく、結果がZ検定に非常に近くなります。" },
  { type: "heading", text: "検定手順" },
  { type: "list", ordered: true, items: ["μ₀、H₀、H₁、方向、αを事前に定める", "n、X̄、sを計算する", "t=(X̄−μ₀)/(s/√n)、df=n−1を求める", "t分布からp値を求め、αと比較して結論を解釈する"] },
  { type: "callout", tone: "forward", label: "統計的判断", text: "p≤αならH₀を棄却し、p>αなら棄却しません。棄却しないことはH₀の証明でも完全な同一性の証明でもありません。" },
];

export const pairedTTestJa = [
  { type: "paragraph", text: "対応のあるt検定は、二つの関連する標本の数量変数の平均差を調べます。各観測を一対一で対応させ、各対の差を作って、その母平均が0かを検定します。" },
  { type: "heading", text: "対応のある標本とは？" },
  { type: "table", rows: [["関係", "例"], ["同じ対象を2回測定", "訓練前後、二条件への評価"], ["自然な対", "一卵性双生児、夫婦"], ["条件を合わせたマッチング", "類似する対象を対にして異なる処置へ割付"]] },
  { type: "paragraph", text: "各Xᵢには明確なYᵢが必要で、任意に組み替えてはいけません。" },
  { type: "heading", text: "各対の差を先に計算する" },
  { type: "formulaGroup", formulas: [
    { label: "第i対の差", latex: "d_i=X_i-Y_i", fallback: "dᵢ=Xᵢ−Yᵢ" },
    { label: "平均差", latex: "\\bar d=\\frac{1}{n}\\sum_{i=1}^{n}d_i", fallback: "d̄=Σdᵢ/n" },
    { label: "差の標準偏差", latex: "s_d=\\sqrt{\\frac{\\sum_{i=1}^{n}(d_i-\\bar d)^2}{n-1}}", fallback: "s_d=√[Σ(dᵢ−d̄)²/(n−1)]" },
    { label: "対応のあるt統計量", latex: "t=\\frac{\\bar d-\\mu_{d,0}}{s_d/\\sqrt n},\\qquad \\nu=n-1", fallback: "t=(d̄−μd,0)/(s_d/√n)，df=n−1" }
  ] },
  { type: "callout", tone: "intuition", label: "nは対の数", text: "30人を前後2回測定した場合、値は60個でも差は30個なのでn=30、自由度29です。" },
  { type: "heading", text: "仮説" },
  { type: "formulaGroup", formulas: [
    { label: "両側", latex: "H_0:\\mu_d=0,\\qquad H_1:\\mu_d\\ne0", fallback: "H₀: μd=0；H₁: μd≠0" },
    { label: "右側", latex: "H_0:\\mu_d\\leq0,\\qquad H_1:\\mu_d>0", fallback: "H₀: μd≤0；H₁: μd>0" },
    { label: "左側", latex: "H_0:\\mu_d\\geq0,\\qquad H_1:\\mu_d<0", fallback: "H₀: μd≥0；H₁: μd<0" }
  ] },
  { type: "paragraph", text: "差の符号はX−Yの順序で決まります。順序を逆にするとtの符号は逆になりますが、両側p値は変わりません。" },
  { type: "heading", text: "検定手順" },
  { type: "list", ordered: true, items: ["正しく一対一対応できることを確認", "差の向きを固定してdᵢを計算", "d̄、s_d、t、df=n−1を計算", "t分布からp値を求めて判断"] },
  { type: "callout", tone: "forward", label: "分析対象は差", text: "正規性の条件はXとYそれぞれではなく差dᵢの分布に対するものです。差の外れ値は結果へ強く影響します。" },
  { type: "heading", text: "対応のある分散分析との関係" },
  { type: "paragraph", text: "二つの対応条件だけなら一元配置反復測定分散分析も使え、同じ仮説に対して同じ有意性結論となります。" },
  { type: "formula", latex: "F=t^2", fallback: "F=t²" },
];

export const independentTTestJa = [
  { type: "paragraph", text: "独立2標本t検定は、互いに関連しない二群の母平均を数量変数について比較します。一つの観察単位は一群だけに属し、群間に一対一の対応はありません。" },
  { type: "heading", text: "データ形式" },
  { type: "table", rows: [["変数", "形式"], ["独立変数", "関連のない二群のカテゴリー変数"], ["従属変数", "平均を計算できる数量変数"], ["比較対象", "母平均差μ₁−μ₂"]] },
  { type: "paragraph", text: "二群は個別に引き算できません。X̄₁−X̄₂は独立確率変数の線形結合で、その分散は各平均の分散の和です。" },
  { type: "formulaGroup", formulas: [
    { label: "平均差", latex: "D=\\bar X_1-\\bar X_2", fallback: "D=X̄₁−X̄₂" },
    { label: "独立な平均差の分散", latex: "\\operatorname{Var}(D)=\\frac{\\sigma_1^2}{n_1}+\\frac{\\sigma_2^2}{n_2}", fallback: "Var(D)=σ₁²/n₁+σ₂²/n₂" }
  ] },
  { type: "heading", text: "仮説" },
  { type: "formulaGroup", formulas: [
    { label: "両側", latex: "H_0:\\mu_1-\\mu_2=0,\\qquad H_1:\\mu_1-\\mu_2\\ne0", fallback: "H₀: μ₁−μ₂=0；H₁: μ₁−μ₂≠0" },
    { label: "右側", latex: "H_0:\\mu_1-\\mu_2\\leq0,\\qquad H_1:\\mu_1-\\mu_2>0", fallback: "H₀: μ₁−μ₂≤0；H₁: μ₁−μ₂>0" },
    { label: "左側", latex: "H_0:\\mu_1-\\mu_2\\geq0,\\qquad H_1:\\mu_1-\\mu_2<0", fallback: "H₀: μ₁−μ₂≥0；H₁: μ₁−μ₂<0" }
  ] },
  { type: "heading", text: "分散が異なる場合：Welch t検定" },
  { type: "formulaGroup", formulas: [
    { label: "平均差の推定分散", latex: "\\widehat{\\operatorname{Var}}(\\bar X_1-\\bar X_2)=\\frac{s_1^2}{n_1}+\\frac{s_2^2}{n_2}", fallback: "推定Var(X̄₁−X̄₂)=s₁²/n₁+s₂²/n₂" },
    { label: "Welch t", latex: "t=\\frac{(\\bar X_1-\\bar X_2)-\\Delta_0}{\\sqrt{s_1^2/n_1+s_2^2/n_2}}", fallback: "t=[(X̄₁−X̄₂)−Δ₀]/√(s₁²/n₁+s₂²/n₂)" },
    { label: "Welch–Satterthwaite自由度", latex: "\\nu\\approx\\frac{\\left(s_1^2/n_1+s_2^2/n_2\\right)^2}{\\dfrac{(s_1^2/n_1)^2}{n_1-1}+\\dfrac{(s_2^2/n_2)^2}{n_2-1}}", fallback: "Welch–Satterthwaite近似自由度" }
  ] },
  { type: "heading", text: "分散が等しい場合：pooled t検定" },
  { type: "formulaGroup", formulas: [
    { label: "プール分散", latex: "s_p^2=\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}", fallback: "sₚ²=[(n₁−1)s₁²+(n₂−1)s₂²]/(n₁+n₂−2)" },
    { label: "プール標準誤差", latex: "\\operatorname{SE}_p=\\sqrt{s_p^2\\left(\\frac1{n_1}+\\frac1{n_2}\\right)}", fallback: "SEₚ=√[sₚ²(1/n₁+1/n₂)]" },
    { label: "Pooled t", latex: "t=\\frac{(\\bar X_1-\\bar X_2)-\\Delta_0}{\\sqrt{s_p^2(1/n_1+1/n_2)}},\\qquad \\nu=n_1+n_2-2", fallback: "pooled t、df=n₁+n₂−2" }
  ] },
  { type: "table", rows: [["方法", "分散仮定", "自由度"], ["Welch t", "σ₁²=σ₂²を要求しない", "Welch–Satterthwaite近似"], ["Pooled t", "σ₁²=σ₂²を仮定", "n₁+n₂−2"]] },
  { type: "heading", text: "検定手順" },
  { type: "list", ordered: true, items: ["二群の独立性と数量データを確認", "H₀、H₁、方向、αを設定", "各群のn、X̄、sを計算しWelchまたはpooledを選ぶ", "tと自由度からp値を求めて解釈"] },
  { type: "heading", text: "一元配置分散分析との関係" },
  { type: "paragraph", text: "独立二群で同じ等分散モデルを使う場合、t検定と一元配置ANOVAは同じ有意性結論を与えます。" },
  { type: "formula", latex: "F=t^2", fallback: "F=t²" },
];

export const varianceInferenceJa = [
  { type: "paragraph", text: "母分散の推測は、データのばらつきが指定基準に等しいか、または二母集団の分散が等しいかを調べます。正規母集団では一母分散にカイ二乗分布、独立二母分散の比にF分布を使います。" },
  { type: "callout", tone: "forward", label: "二つの問い", text: "一母分散χ²検定はσ²とσ₀²、二母分散F検定はσ₁²とσ₂²を比較します。後者はpooled tの等分散仮定に関係しますが、平均比較の前に必ず行う手順ではありません。" },
  { type: "heading", text: "一母分散のカイ二乗検定" },
  { type: "formulaGroup", formulas: [
    { label: "両側", latex: "H_0:\\sigma^2=\\sigma_0^2,\\qquad H_1:\\sigma^2\\ne\\sigma_0^2", fallback: "H₀: σ²=σ₀²；H₁: σ²≠σ₀²" },
    { label: "左側", latex: "H_0:\\sigma^2\\geq\\sigma_0^2,\\qquad H_1:\\sigma^2<\\sigma_0^2", fallback: "H₀: σ²≥σ₀²；H₁: σ²<σ₀²" },
    { label: "右側", latex: "H_0:\\sigma^2\\leq\\sigma_0^2,\\qquad H_1:\\sigma^2>\\sigma_0^2", fallback: "H₀: σ²≤σ₀²；H₁: σ²>σ₀²" }
  ] },
  { type: "heading", text: "カイ二乗統計量の構成" },
  { type: "paragraph", text: "正規母集団の独立標本でμをX̄により推定すると自由度を一つ失い、標本分散の標準化は自由度n−1のカイ二乗分布に従います。" },
  { type: "formulaGroup", formulas: [
    { label: "μ既知", latex: "\\frac{\\sum_{i=1}^{n}(X_i-\\mu)^2}{\\sigma^2}\\sim\\chi_n^2", fallback: "Σ(Xᵢ−μ)²/σ² ~ χ²(n)" },
    { label: "X̄でμを推定", latex: "\\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi_{n-1}^2", fallback: "(n−1)S²/σ² ~ χ²(n−1)" },
    { label: "H₀下の観察統計量", latex: "\\chi_{\\mathrm{obs}}^2=\\frac{(n-1)S^2}{\\sigma_0^2}", fallback: "χ²obs=(n−1)S²/σ₀²" }
  ] },
  { type: "heading", text: "両側検定の棄却域" },
  { type: "formula", latex: "\\chi_{\\mathrm{obs}}^2<\\chi_{\\alpha/2,\\,n-1}^2\\quad\\text{or}\\quad\\chi_{\\mathrm{obs}}^2>\\chi_{1-\\alpha/2,\\,n-1}^2", fallback: "χ²obsが左右いずれかの臨界値を越える" },
  { type: "heading", text: "二母分散のF検定" },
  { type: "formulaGroup", formulas: [
    { label: "等分散仮説", latex: "H_0:\\sigma_1^2=\\sigma_2^2,\\qquad H_1:\\sigma_1^2\\ne\\sigma_2^2", fallback: "H₀: σ₁²=σ₂²；H₁: σ₁²≠σ₂²" },
    { label: "F統計量", latex: "F=\\frac{S_1^2}{S_2^2}\\sim F_{n_1-1,\\,n_2-1}", fallback: "F=S₁²/S₂² ~ F(n₁−1,n₂−1)" }
  ] },
  { type: "paragraph", text: "分子と分母を交換するとFは1/Fとなり、二つの自由度も交換します。" },
  { type: "heading", text: "F検定が二つのカイ二乗変数から生じる理由" },
  { type: "formulaGroup", formulas: [
    { label: "第1群", latex: "U_1=\\frac{(n_1-1)S_1^2}{\\sigma^2}\\sim\\chi_{n_1-1}^2", fallback: "U₁~χ²(n₁−1)" },
    { label: "第2群", latex: "U_2=\\frac{(n_2-1)S_2^2}{\\sigma^2}\\sim\\chi_{n_2-1}^2", fallback: "U₂~χ²(n₂−1)" },
    { label: "自由度で割った比", latex: "\\frac{U_1/(n_1-1)}{U_2/(n_2-1)}=\\frac{S_1^2}{S_2^2}\\sim F_{n_1-1,\\,n_2-1}", fallback: "S₁²/S₂²~F(n₁−1,n₂−1)" }
  ] },
  { type: "heading", text: "pooled t、Welch tとの関係" },
  { type: "table", rows: [["方法", "問い", "設定"], ["一母分散χ²", "σ²=σ₀²か", "一つの正規母集団"], ["二母分散F", "σ₁²=σ₂²か", "独立した二正規母集団"], ["Pooled t", "μ₁=μ₂か", "等分散を追加仮定"], ["Welch t", "μ₁=μ₂か", "等分散を要求しない"]] },
  { type: "callout", tone: "intuition", label: "検定問題を混同しない", text: "F検定のH₀は分散の等しさ、pooled tのH₀は平均の等しさです。等分散モデルを使っても同じ仮説ではありません。" },
  { type: "callout", tone: "forward", label: "実務ではF検定を先に行うとは限らない", text: "F検定は非正規性に敏感で、事前検定後に方法を選ぶと推論手順全体が変わります。十分な等分散根拠がなければ、実務ではWelch tを直接使うことが一般的です。" },
];
