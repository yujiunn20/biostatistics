export const tDistributionJa = [
  { type: "paragraph", text: "t分布（t-distribution）はStudentのt分布とも呼ばれ、母標準偏差が未知の場合に、標本平均を標準化した値の変動を記述します。William Sealy Gossetが「Student」という筆名で発表したことから、この名が付きました。" },
  { type: "callout", tone: "intuition", label: "t分布が解決する問題", text: "母標準偏差σが既知なら標準正規分布を使えますが、実際にはσは通常未知で、標本標準偏差Sによって推定します。この推定には追加の不確実性があるため、標準化した値は標準正規分布ではなく、裾の厚いt分布に従います。" },
  { type: "heading", text: "t分布はどのように作られるか？" },
  { type: "paragraph", text: "t分布は、標準正規変数Zと、Zから独立で自由度νのカイ二乗変数Uから構成できます。分母のU/νは、標本データから分散を推定することによる不確実性を表します。" },
  { type: "formulaGroup", formulas: [
    { label: "標準正規変数とカイ二乗変数から構成", latex: "T=\\frac{Z}{\\sqrt{U/\\nu}}\\sim t_{\\nu}", fallback: "T=Z/√(U/ν) ~ t(ν)" },
    { label: "1標本平均のt統計量", latex: "T=\\frac{\\bar X-\\mu}{S/\\sqrt n}\\sim t_{n-1}", fallback: "T=(X̄−μ)/(S/√n) ~ t(n−1)" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["T", "t分布に従う確率変数またはt統計量"], ["Z", "標準正規変数"], ["U", "Zから独立なカイ二乗変数"], ["ν", "t分布の自由度"], ["X̄", "標本平均"], ["μ", "母平均または仮説上の平均"], ["S", "未知のσを推定する標本標準偏差"], ["n", "標本サイズ。1標本の場合はν=n−1"]] },
  { type: "heading", text: "t分布と標準正規分布の違い" },
  { type: "paragraph", text: "t分布と標準正規分布はいずれも0を中心に左右対称で、釣鐘形をしています。違いはt分布の裾が厚く、中心から離れた値が現れる確率がより高いことです。これは母標準偏差が未知で、標本標準偏差を使って推定する際の追加の不確実性を反映しています。" },
  { type: "table", rows: [["比較", "標準正規分布", "t分布"], ["中心", "0", "0"], ["形", "左右対称・釣鐘形", "左右対称・釣鐘形"], ["裾", "比較的薄い", "自由度が低いほど厚い"], ["形を決める母数", "N(0,1)に固定", "自由度ν"], ["主な使用場面", "母標準偏差が既知、または正規近似を使う場合", "母標準偏差が未知で、標本標準偏差により推定する場合"]] },
  { type: "heading", text: "自由度はt分布にどう影響するか？" },
  { type: "paragraph", text: "自由度が低いと、標準偏差の推定に使える独立情報が少なく、不確実性が大きいため、t分布の裾も厚くなります。標本サイズと自由度が増えるほど、標本標準偏差による母標準偏差の推定は一般に安定し、t分布は標準正規分布へ近づきます。" },
  { type: "image", imageId: "t-df-normal-comparison" },
  { type: "callout", tone: "intuition", label: "30を境に突然切り替わるわけではない", text: "よく使われるn≥30は教育上便利な経験則であり、標本サイズが30になった瞬間にt分布が標準正規分布へ変わるわけではありません。両者は自由度の増加につれて徐々に近づき、差が実質的に重要かどうかは分析目的や裾確率にも左右されます。" },
  { type: "heading", text: "t分布はいつ使うか？" },
  { type: "list", items: ["1標本平均から母平均を推測する", "独立した2群の平均を比較する", "対応のあるデータや反復測定データの平均差を比較する", "回帰係数や相関係数を検定する", "母平均や回帰係数の信頼区間を作る"] },
  { type: "callout", tone: "forward", label: "使用前に条件を確認する", text: "t分布の厳密な導出は、正規母集団と関連する独立性の条件に基づきます。実際にt法を使う際は、研究デザインに応じて観測値の独立性、著しい歪みや外れ値の有無、そして1標本・対応あり・独立2標本のどの方法を使うかを確認します。" },
  { type: "heading", text: "t分布の確率密度関数" },
  { type: "paragraph", text: "自由度νのt分布は次の確率密度関数をもちます。式は0を中心とし、t²だけを含むため、絶対値が同じ正負のt値は同じ密度になります。これはt分布の左右対称性に対応します。" },
  { type: "formula", latex: "f(t)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\nu\\pi}\\,\\Gamma\\!\\left(\\nu/2\\right)}\\left(1+\\frac{t^2}{\\nu}\\right)^{-(\\nu+1)/2},\\qquad -\\infty<t<\\infty", fallback: "t分布の確率密度関数、−∞<t<∞" },
  { type: "table", rows: [["記号", "意味"], ["f(t)", "位置tにおけるt分布の確率密度"], ["t", "任意の実数をとるt確率変数"], ["ν", "t分布の自由度"], ["Γ", "階乗の概念を拡張したGamma関数"], ["π", "円周率"]] },
  { type: "callout", tone: "intuition", label: "この密度関数はどこから来るか？", text: "Zの標準正規密度、Uのカイ二乗密度、そしてT=Z/√(U/ν)という定義から導出できます。ZとUの同時密度を変数変換し、残す必要のないUを積分するとGamma関数が現れ、上のt密度が得られます。つまり、この式は別に推測されたものではなく、正規分布、カイ二乗分布、tの定義から連続して導かれます。" },
  { type: "details", label: "補足：t密度関数の導出", children: [
    { type: "heading", text: "第1段階：t変数の定義から出発する" },
    { type: "paragraph", text: "Zを標準正規分布、Uを自由度νのカイ二乗分布に従い、両者は独立とします。T=Z/√(U/ν)と定義し、Tの密度を求めるため補助変数V=Uも残します。" },
    { type: "formulaGroup", formulas: [
      { label: "変数変換", latex: "T=\\frac{Z}{\\sqrt{U/\\nu}},\\qquad V=U", fallback: "T=Z/√(U/ν)，V=U" },
      { label: "逆変換", latex: "Z=T\\sqrt{V/\\nu},\\qquad U=V", fallback: "Z=T√(V/ν)，U=V" },
      { label: "Jacobian", latex: "\\left|\\frac{\\partial(z,u)}{\\partial(t,v)}\\right|=\\sqrt{\\frac{v}{\\nu}}", fallback: "|∂(z,u)/∂(t,v)|=√(v/ν)" }
    ] },
    { type: "paragraph", text: "独立性により、ZとUの同時密度は二つの密度の積で表せます。変数変換後にJacobianを掛けると、TとVの同時密度が得られます。" },
    { type: "formula", latex: "f_{T,V}(t,v)=f_Z\\!\\left(t\\sqrt{v/\\nu}\\right)f_U(v)\\sqrt{\\frac{v}{\\nu}}", fallback: "fT,V(t,v)=fZ(t√(v/ν))fU(v)√(v/ν)" },
    { type: "heading", text: "第2段階：補助変数Vを積分消去する" },
    { type: "paragraph", text: "標準正規密度とカイ二乗密度を代入し、可能なすべてのv>0について積分すると、Tだけの周辺密度が残ります。" },
    { type: "formula", latex: "f_T(t)=\\frac{1}{\\sqrt{2\\pi\\nu}\\,2^{\\nu/2}\\Gamma(\\nu/2)}\\int_0^{\\infty}v^{(\\nu+1)/2-1}\\exp\\!\\left[-\\frac{v}{2}\\left(1+\\frac{t^2}{\\nu}\\right)\\right]dv", fallback: "同時密度をvについて0から∞まで積分する" },
    { type: "paragraph", text: "積分部分はGamma積分の形をしています。次の関係を利用して直接簡約できます。" },
    { type: "formula", latex: "\\int_0^{\\infty}v^{a-1}e^{-bv}\\,dv=\\frac{\\Gamma(a)}{b^a},\\qquad a>0,\\ b>0", fallback: "∫₀∞v^(a−1)e^(−bv)dv=Γ(a)/bᵃ" },
    { type: "heading", text: "第3段階：t密度を得る" },
    { type: "formula", latex: "f_T(t)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\nu\\pi}\\,\\Gamma\\!\\left(\\nu/2\\right)}\\left(1+\\frac{t^2}{\\nu}\\right)^{-(\\nu+1)/2},\\qquad -\\infty<t<\\infty", fallback: "簡約するとt分布の確率密度関数が得られる" },
    { type: "paragraph", text: "したがって、t密度は標準正規密度、カイ二乗密度、Tの定義から導かれます。Gamma関数が現れるのは、カイ二乗変数を積分消去する部分がGamma関数の形をしているためです。" },
    { type: "table", rows: [["記号", "導出での意味"], ["V", "変数変換のために残す補助変数で、Uに等しい"], ["fT,V", "TとVの同時密度"], ["∂(z,u)/∂(t,v)", "多変数変換のJacobian行列式"], ["a、b", "Gamma積分を適用するときの一時的な母数"]] }
  ] },
  { type: "details", label: "補足：Gamma関数とは？", children: [
    { type: "paragraph", text: "Gamma関数は階乗の概念を正整数以外へ拡張します。正整数nではΓ(n)=(n−1)!となるため、自由度の半分など非整数の母数を含む密度関数で、階乗に似た役割を果たします。" },
    { type: "formulaGroup", formulas: [
      { label: "Gamma関数の定義", latex: "\\Gamma(a)=\\int_0^{\\infty}x^{a-1}e^{-x}\\,dx,\\qquad a>0", fallback: "Γ(a)=∫₀∞x^(a−1)e^(−x)dx，a>0" },
      { label: "漸化式", latex: "\\Gamma(a+1)=a\\,\\Gamma(a)", fallback: "Γ(a+1)=aΓ(a)" },
      { label: "階乗との関係", latex: "\\Gamma(n)=(n-1)!,\\qquad n=1,2,3,\\ldots", fallback: "Γ(n)=(n−1)!" },
      { label: "よく使う半整数値", latex: "\\Gamma\\!\\left(\\frac12\\right)=\\sqrt{\\pi}", fallback: "Γ(1/2)=√π" }
    ] },
    { type: "paragraph", text: "t分布の密度関数では、Gamma関数は主に前方の定数係数に現れ、自由度に応じて曲線を調整し、密度曲線下の総面積を1にします。t分布を理解するためにGamma関数を手計算する必要はありませんが、その役割を知ればΓを意味のない飾りと誤解せずに済みます。" }
  ] },
  { type: "callout", tone: "forward", label: "後で再び使います", text: "第4章では、ここで学んだ分布を実際の検定手順に組み込み、1標本t検定、対応のあるt検定、独立2標本t検定をそれぞれ説明します。", related: ["04/one-sample-t-test", "04/paired-t-test", "04/independent-t-test"] },
];

export const chiSquareDistributionJa = [
  { type: "paragraph", text: "カイ二乗分布（chi-square distribution、χ²分布）は、互いに独立な複数の標準正規変数をそれぞれ二乗して加えた確率変数を記述します。各方向の標準化偏差を非負の総変動へ変換するため、分散推定、カイ二乗検定、後に扱うF分布と密接に関係します。" },
  { type: "callout", tone: "intuition", label: "中心となる操作", text: "標準正規変数から出発し、「二乗→加算」の順に操作します。二乗によって正負の偏差を非負にし、加算によって複数の独立方向の変動を蓄積します。" },
  { type: "heading", text: "カイ二乗分布はどのように作られるか？" },
  { type: "paragraph", text: "Z₁、Z₂、…、Zνが互いに独立なν個の標準正規変数なら、それぞれを二乗して加えたUは自由度νのカイ二乗分布に従います。独立な標準正規変数の二乗を一つ加えるごとに、自由度も一つ増えます。" },
  { type: "formulaGroup", formulas: [
    { label: "各変数は標準正規分布に従う", latex: "Z_i\\sim N(0,1),\\qquad i=1,2,\\ldots,\\nu", fallback: "Zᵢ ~ N(0,1)，i=1,2,…,ν" },
    { label: "二乗和がカイ二乗分布を作る", latex: "U=\\sum_{i=1}^{\\nu}Z_i^2\\sim\\chi^2_{\\nu}", fallback: "U=ΣZᵢ² ~ χ²(ν)" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["Zᵢ", "i番目の標準正規変数"], ["U", "全標準正規変数の二乗和"], ["ν", "自由度。独立な二乗項の数"], ["χ²ν", "自由度νのカイ二乗分布"]] },
  { type: "heading", text: "なぜカイ二乗値は0未満にならないのか？" },
  { type: "paragraph", text: "各Zᵢを二乗すると負にならないため、二乗和Uも0以上に限られます。自由度1では、カイ二乗変数は一つの標準正規変数の二乗です。正規曲線の左右の値が、二乗によって正の範囲へ写されると直感的に考えられますが、変数変換によって密度の形も変わります。" },
  { type: "callout", tone: "intuition", label: "正規曲線を単に折り返すのではない", text: "左右の値がともに正になるという見方は、カイ二乗値が非負である理由の理解に役立ちます。ただし、正規曲線を右側へ単純に折り返して重ねたものではありません。二乗は値の間隔と密度を変えるため、自由度1のχ²分布は正規分布とは異なります。" },
  { type: "heading", text: "標準正規曲線から自由度1の形を理解する" },
  { type: "paragraph", text: "自由度ν=1ではU=Z²であり、Zは標準正規分布に従います。標準正規曲線の負の値も正の値も二乗後は0以上へ写され、例えばZ=−2とZ=2はいずれもU=4になります。そのため、左右両側の確率が正の半軸へ移され、合わさると考えられます。" },
  { type: "paragraph", text: "ただし、二乗は符号だけでなく値の間隔も変えるため、密度は左右の高さを直接足すだけでは求められません。変数変換には補正因子が必要で、これが元のノートで述べた「補正項」です。" },
  { type: "formulaGroup", formulas: [
    { label: "標準正規変数を二乗する", latex: "U=Z^2,\\qquad Z\\sim N(0,1)", fallback: "U=Z²，Z~N(0,1)" },
    { label: "自由度1のカイ二乗密度", latex: "f_U(u)=\\frac{\\phi(\\sqrt{u})+\\phi(-\\sqrt{u})}{2\\sqrt{u}}=\\frac{1}{\\sqrt{2\\pi u}}e^{-u/2},\\qquad u>0", fallback: "fᵤ(u)=[φ(√u)+φ(−√u)]/(2√u)，u>0" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["φ(z)", "標準正規分布の位置zでの確率密度"], ["√u、−√u", "二乗するとuになる二つの元のZ値"], ["1/(2√u)", "二乗変換による密度の補正因子"]] },
  { type: "heading", text: "自由度は分布の形をどう変えるか？" },
  { type: "paragraph", text: "自由度が低いとカイ二乗分布は強く右に歪み、多くの値が0付近に集まり、右側に長い裾をもちます。自由度が増えると独立な二乗項が増え、中心が右へ移動し、相対的な歪みが小さくなって釣鐘形へ近づきますが、値が0未満になることはありません。" },
  { type: "heading", text: "自由度が増えるとなぜ釣鐘形へ近づくのか？" },
  { type: "paragraph", text: "自由度νのカイ二乗変数は、互いに独立なν個のZᵢ²の和です。各Zᵢ²は自由度1のカイ二乗変数とみなせるため、自由度を増やすことは、同じ分布をもつ独立な二乗項をより多く加えることに相当します。これは中央極限定理が扱う「多数の独立確率変数の和」と同じ考え方です。" },
  { type: "paragraph", text: "より正確には、各Zᵢ²の平均は1、分散は2なので、和Uの平均はν、分散は2νです。νが増えると、Uから平均νを引き、標準偏差√(2ν)で割った分布は標準正規分布へ近づきます。したがって未標準化のカイ二乗曲線は右へ移動しながら広がり、相対的な歪みが減って釣鐘形に近づきます。" },
  { type: "formula", latex: "\\frac{U-\\nu}{\\sqrt{2\\nu}}\\xrightarrow{d}N(0,1)\\qquad(\\nu\\to\\infty)", fallback: "(U−ν)/√(2ν)はνの増加につれてN(0,1)へ近づく" },
  { type: "callout", tone: "intuition", label: "直感に正確な説明を加える", text: "「自由度1のカイ二乗変数を多数加えるので釣鐘形へ近づく」という理解は正しく有用です。ただし、中央極限定理が比較するのは中心化・標準化後の分布です。単に和をνで割るのではなく、元のカイ二乗分布の中心と幅も自由度とともに変化します。" },
  { type: "image", imageId: "chi-square-df-curves" },
  { type: "table", rows: [["性質", "自由度νのχ²分布"], ["可能な値", "0から正の無限大"], ["平均", "ν"], ["分散", "2ν"], ["形", "低自由度では右に歪み、自由度が増えるほど相対的に対称になる"]] },
  { type: "heading", text: "カイ二乗分布と標本分散" },
  { type: "paragraph", text: "正規母集団から互いに独立なn個の観測値を抽出すると、標本分散S²と母分散σ²の比を調整した値は自由度n−1のカイ二乗分布に従います。これは標本分散から母分散を推測する重要な基礎です。" },
  { type: "formulaGroup", formulas: [
    { label: "既知の母平均を用いて標準化", latex: "\\sum_{i=1}^{n}\\left(\\frac{X_i-\\mu}{\\sigma}\\right)^2\\sim\\chi_n^2", fallback: "Σ[(Xᵢ−μ)/σ]² ~ χ²(n)" },
    { label: "標本平均を用いた場合", latex: "\\frac{(n-1)S^2}{\\sigma^2}=\\sum_{i=1}^{n}\\left(\\frac{X_i-\\bar X}{\\sigma}\\right)^2\\sim\\chi_{n-1}^2", fallback: "(n−1)S²/σ² = Σ[(Xᵢ−X̄)/σ]² ~ χ²(n−1)" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["Xᵢ", "i番目の観測値"], ["μ、σ²", "正規母集団の平均と分散"], ["X̄、S²", "標本平均と標本分散"], ["n", "標本サイズ"], ["n−1", "標本平均を用いた後に残る自由度"]] },
  { type: "callout", tone: "forward", label: "ここでも自由度が現れる", text: "未知のμの代わりに標本平均X̄を用いると、n個の偏差の和は0でなければならず、独立な方向はn−1個だけ残ります。これは前頁で説明した、制約後にも自由に変動できる独立情報としての自由度です。" },
  { type: "heading", text: "カイ二乗分布の確率密度関数" },
  { type: "paragraph", text: "自由度νのカイ二乗分布の確率密度関数は次のとおりです。この式が自由度ごとの曲線の高さと形を決め、曲線下の総面積は1になります。" },
  { type: "formula", latex: "f(u)=\\frac{1}{2^{\\nu/2}\\Gamma(\\nu/2)}u^{\\nu/2-1}e^{-u/2},\\qquad u>0", fallback: "f(u)=u^(ν/2−1)e^(−u/2)/[2^(ν/2)Γ(ν/2)]，u>0" },
  { type: "table", rows: [["記号", "意味"], ["f(u)", "位置uにおけるカイ二乗分布の確率密度"], ["u", "0より大きいカイ二乗変数の可能値"], ["ν", "カイ二乗分布の自由度"], ["Γ", "密度曲線下の総面積を1にするGamma関数"], ["e", "約2.71828の自然対数の底"]] },
  { type: "callout", tone: "intuition", label: "式を読むときの二つの着眼点", text: "uは正の値だけをとるため、カイ二乗曲線はすべて0の右側にあります。また自由度νは指数と係数の両方に現れるため、自由度を変えると曲線全体の形が変わります。" },
  { type: "details", label: "補足：カイ二乗密度関数の導出", children: [
    { type: "heading", text: "第1段階：自由度1を導出する" },
    { type: "paragraph", text: "Zを標準正規分布に従う変数とし、U=Z²と定義します。任意のu>0についてz²=uにはz=√uとz=−√uの二つの解があります。二つのZ値が同じU値へ写るため、密度変換では両方の寄与を加えます。" },
    { type: "formulaGroup", formulas: [
      { label: "標準正規密度", latex: "\\phi(z)=\\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}", fallback: "φ(z)=e^(−z²/2)/√(2π)" },
      { label: "逆関数とその導関数", latex: "z_1=\\sqrt{u},\\quad z_2=-\\sqrt{u},\\qquad \\left|\\frac{dz_j}{du}\\right|=\\frac{1}{2\\sqrt{u}}", fallback: "z=±√u，|dz/du|=1/(2√u)" },
      { label: "二つの密度を加える", latex: "f_U(u)=\\phi(\\sqrt{u})\\frac{1}{2\\sqrt{u}}+\\phi(-\\sqrt{u})\\frac{1}{2\\sqrt{u}}", fallback: "fᵤ(u)=[φ(√u)+φ(−√u)]/(2√u)" },
      { label: "簡約後", latex: "f_U(u)=\\frac{1}{\\sqrt{2\\pi u}}e^{-u/2},\\qquad u>0", fallback: "fᵤ(u)=e^(−u/2)/√(2πu)，u>0" }
    ] },
    { type: "paragraph", text: "|dz/du|は変数変換のJacobian補正です。二乗によって値の間隔が伸縮することを反映するため、正規曲線の左右の高さを直接足すだけでは不十分です。この結果が自由度1のカイ二乗密度です。" },
    { type: "heading", text: "別の確認方法：自由度1のカイ二乗密度と標準正規密度を比較する" },
    { type: "paragraph", text: "二つの既知の密度から逆に確認することもできます。一般の正規分布をμ=0、σ=1へ標準化し、カイ二乗密度の自由度νを1に設定します。" },
    { type: "formulaGroup", formulas: [
      { label: "一般の正規密度", latex: "f_X(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\!\\left[-\\frac12\\left(\\frac{x-\\mu}{\\sigma}\\right)^2\\right]", fallback: "一般の正規分布の密度" },
      { label: "μ=0、σ=1を代入", latex: "\\phi(x)=\\frac{1}{\\sqrt{2\\pi}}e^{-x^2/2}", fallback: "標準正規密度 φ(x)=e^(-x²/2)/√(2π)" },
      { label: "一般のカイ二乗密度", latex: "f_{\\chi^2_\\nu}(u)=\\frac{1}{2^{\\nu/2}\\Gamma(\\nu/2)}u^{\\nu/2-1}e^{-u/2}", fallback: "自由度νのカイ二乗密度" },
      { label: "ν=1とΓ(1/2)=√πを使用", latex: "f_{\\chi^2_1}(u)=\\frac{1}{\\sqrt{2\\pi}}e^{-u/2}u^{-1/2}", fallback: "fχ²₁(u)=e^(-u/2)u^(-1/2)/√(2π)" }
    ] },
    { type: "paragraph", text: "u=x²と置くと、カイ二乗密度の指数部分e^(−u/2)は標準正規密度のe^(−x²/2)に対応し、余分なu^(−1/2)が二乗変換による尺度補正です。これが「χ²をx²へ置き換えた後にも補正項が残る」という説明の完全な対応です。" },
    { type: "heading", text: "第2段階：ν個の独立な二乗項へ拡張する" },
    { type: "paragraph", text: "U=Z₁²+⋯+Zν²とします。密度の畳み込みを繰り返すのは煩雑なので、モーメント母関数（moment-generating function, MGF）を使います。独立確率変数の和のMGFは、それぞれのMGFの積になります。" },
    { type: "formulaGroup", formulas: [
      { label: "一つの標準正規変数の二乗のMGF", latex: "M_{Z^2}(s)=E\\!\\left(e^{sZ^2}\\right)=(1-2s)^{-1/2},\\qquad s<\\frac12", fallback: "MZ²(s)=(1−2s)^(−1/2)" },
      { label: "ν個の独立な二乗項の和", latex: "M_U(s)=\\prod_{i=1}^{\\nu}M_{Z_i^2}(s)=(1-2s)^{-\\nu/2}", fallback: "Mᵤ(s)=ΠMZᵢ²(s)=(1−2s)^(−ν/2)" },
      { label: "対応するカイ二乗密度", latex: "f_U(u)=\\frac{1}{2^{\\nu/2}\\Gamma(\\nu/2)}u^{\\nu/2-1}e^{-u/2},\\qquad u>0", fallback: "fᵤ(u)=u^(ν/2−1)e^(−u/2)/[2^(ν/2)Γ(ν/2)]" }
    ] },
    { type: "paragraph", text: "最後のMGFは形状母数ν/2、尺度母数2のGamma分布に一致するため、自由度νのカイ二乗密度関数が得られます。" },
    { type: "table", rows: [["記号", "導出での意味"], ["φ(z)", "標準正規密度関数"], ["|dz/du|", "変数変換で密度を補正するJacobianの絶対値"], ["Mᵤ(s)", "Uのモーメント母関数"], ["E", "期待値演算"], ["Π", "独立な各二乗項のMGFを掛け合わせる"], ["Γ", "Gamma関数"]] }
  ] },
  { type: "callout", tone: "forward", label: "後でどのように使うか？", text: "カイ二乗分布は分散の推測だけでなく、カテゴリー資料の適合度検定と独立性検定にも現れます。両者では統計量と自由度の由来が完全には同じでないため、後の章で個別に説明します。" },
];

export const fDistributionJa = [
  { type: "paragraph", text: "F分布（F-distribution）はR. A. Fisherの姓の頭文字に由来します。互いに独立な二つのカイ二乗変数をそれぞれ自由度で割り、その比をとった分布で、主に独立した二つの変動量の相対的な大きさを比較するために使います。" },
  { type: "callout", tone: "intuition", label: "中心となる操作", text: "カイ二乗分布は標準正規変数の二乗を総変動として蓄積します。F分布は二つの総変動をそれぞれ自由度で割って比較可能な平均変動にし、その比を計算します。" },
  { type: "heading", text: "F分布はどのように作られるか？" },
  { type: "paragraph", text: "UとVを互いに独立なカイ二乗変数とし、自由度をそれぞれν₁、ν₂とします。UとVを各自由度で割ってから比をとると、Fは分子自由度ν₁、分母自由度ν₂のF分布に従います。" },
  { type: "formulaGroup", formulas: [
    { label: "二つの独立なカイ二乗変数", latex: "U\\sim\\chi^2_{\\nu_1},\\qquad V\\sim\\chi^2_{\\nu_2},\\qquad U\\perp V", fallback: "U~χ²(ν₁)，V~χ²(ν₂)，UとVは独立" },
    { label: "F分布を作る", latex: "F=\\frac{U/\\nu_1}{V/\\nu_2}\\sim F_{\\nu_1,\\nu_2}", fallback: "F=(U/ν₁)/(V/ν₂) ~ F(ν₁,ν₂)" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["U、V", "互いに独立な二つのカイ二乗変数"], ["ν₁", "Uに対応する分子自由度"], ["ν₂", "Vに対応する分母自由度"], ["U/ν₁、V/ν₂", "各カイ二乗変数を自由度で割った平均変動量"], ["Fν₁,ν₂", "分子・分母の二つの自由度をもつF分布"], ["⊥", "二つの確率変数が独立であることを表す"]] },
  { type: "heading", text: "なぜF値は0未満にならないのか？" },
  { type: "paragraph", text: "UとVはいずれも二乗和なので負になりません。正の自由度で割って比をとるFも正の値だけをとります。F=1は分子と分母の平均変動が等しいこと、F>1は分子側が大きいこと、F<1は分母側が大きいことを示します。" },
  { type: "callout", tone: "intuition", label: "比の向きが重要", text: "分子と分母を入れ替えるとFは1/Fとなり、二つの自由度も入れ替わります。F値を読む際は、どの変動量が分子と分母に置かれているかを確認する必要があります。" },
  { type: "formula", latex: "F\\sim F_{\\nu_1,\\nu_2}\\quad\\Longrightarrow\\quad \\frac{1}{F}\\sim F_{\\nu_2,\\nu_1}", fallback: "F~F(ν₁,ν₂)なら1/F~F(ν₂,ν₁)" },
  { type: "heading", text: "二つの自由度は形にどう影響するか？" },
  { type: "paragraph", text: "F分布は通常右に歪み、右側に長い裾をもちます。具体的な形は分子自由度ν₁と分母自由度ν₂の両方で決まります。自由度が低いと分散推定が不安定で、分布は広く右裾も厚くなります。自由度が増えると、比は一般に1付近へ集中します。" },
  { type: "image", imageId: "f-df-curves" },
  { type: "callout", tone: "forward", label: "なぜ二つの自由度を記すのか？", text: "Fの分子と分母は異なる変動源から生じ、それぞれが異なる量の独立情報をもつため、ν₁とν₂を別々に記録します。ANOVAの群間自由度と群内自由度がその具体例です。" },
  { type: "heading", text: "F分布の確率密度関数" },
  { type: "paragraph", text: "分子自由度ν₁、分母自由度ν₂のF分布は次の確率密度関数をもちます。二つの自由度が係数、指数、分母に同時に現れるため、どちらかを変えるだけでも曲線の形が変わります。" },
  { type: "formula", latex: "f(x)=\\frac{\\Gamma\\!\\left((\\nu_1+\\nu_2)/2\\right)}{\\Gamma(\\nu_1/2)\\Gamma(\\nu_2/2)}\\left(\\frac{\\nu_1}{\\nu_2}\\right)^{\\nu_1/2}x^{\\nu_1/2-1}\\left(1+\\frac{\\nu_1}{\\nu_2}x\\right)^{-(\\nu_1+\\nu_2)/2},\\quad x>0", fallback: "F分布の確率密度関数、x>0" },
  { type: "table", rows: [["記号", "意味"], ["f(x)", "位置xにおけるF分布の確率密度"], ["x", "0より大きいF確率変数の可能値"], ["ν₁、ν₂", "分子自由度と分母自由度"], ["Γ", "密度関数の正規化係数に使うGamma関数"]] },
  { type: "details", label: "補足：F密度関数の導出", children: [
    { type: "heading", text: "第1段階：二つの独立なカイ二乗変数から出発する" },
    { type: "paragraph", text: "U~χ²ν₁、V~χ²ν₂とし、UとVは独立とします。X=(U/ν₁)/(V/ν₂)と定義し、補助変数Y=Vを残します。" },
    { type: "formulaGroup", formulas: [
      { label: "変数変換", latex: "X=\\frac{U/\\nu_1}{V/\\nu_2},\\qquad Y=V", fallback: "X=(U/ν₁)/(V/ν₂)，Y=V" },
      { label: "逆変換", latex: "U=\\frac{\\nu_1}{\\nu_2}XY,\\qquad V=Y", fallback: "U=(ν₁/ν₂)XY，V=Y" },
      { label: "Jacobian", latex: "\\left|\\frac{\\partial(u,v)}{\\partial(x,y)}\\right|=\\frac{\\nu_1}{\\nu_2}y", fallback: "|∂(u,v)/∂(x,y)|=(ν₁/ν₂)y" }
    ] },
    { type: "paragraph", text: "UとVが独立なので、同時密度は二つのカイ二乗密度の積です。逆変換を代入し、Jacobianを掛けるとXとYの同時密度が得られます。" },
    { type: "formula", latex: "f_{X,Y}(x,y)=f_U\\!\\left(\\frac{\\nu_1}{\\nu_2}xy\\right)f_V(y)\\frac{\\nu_1}{\\nu_2}y", fallback: "fX,Y(x,y)=fU((ν₁/ν₂)xy)fV(y)(ν₁/ν₂)y" },
    { type: "heading", text: "第2段階：補助変数Yを積分消去する" },
    { type: "paragraph", text: "すべてのy>0について積分するとXの周辺密度が得られます。yに関する部分を整理すると、積分は再びGamma積分の形になります。" },
    { type: "formula", latex: "f_X(x)=\\int_0^{\\infty}f_{X,Y}(x,y)\\,dy", fallback: "fX(x)=∫₀∞fX,Y(x,y)dy" },
    { type: "formula", latex: "\\int_0^{\\infty}y^{(\\nu_1+\\nu_2)/2-1}\\exp\\!\\left[-\\frac{y}{2}\\left(1+\\frac{\\nu_1}{\\nu_2}x\\right)\\right]dy", fallback: "積分部分はGamma積分の形をもつ" },
    { type: "paragraph", text: "Gamma積分公式で簡約し定数を整理すると、本文のF密度関数が得られます。F密度は別に仮定された式ではなく、二つの独立なカイ二乗密度、比の定義、変数変換から導かれます。" },
    { type: "table", rows: [["記号", "導出での意味"], ["X", "導出中のF確率変数"], ["Y", "Vに等しい補助変数"], ["fX,Y", "XとYの同時密度"], ["∂(u,v)/∂(x,y)", "変数変換のJacobian行列式"]] }
  ] },
  { type: "heading", text: "F分布とt分布の関係" },
  { type: "paragraph", text: "Tが自由度νのt分布に従うなら、T²は分子自由度1、分母自由度νのF分布に従います。Tの分子Zを二乗すると自由度1のカイ二乗分布になり、分母にはもともとU/νが含まれているためです。" },
  { type: "formulaGroup", formulas: [
    { label: "tの定義から出発", latex: "T=\\frac{Z}{\\sqrt{U/\\nu}},\\qquad Z^2\\sim\\chi_1^2", fallback: "T=Z/√(U/ν)，Z²~χ²(1)" },
    { label: "二乗するとF分布になる", latex: "T^2=\\frac{Z^2/1}{U/\\nu}\\sim F_{1,\\nu}", fallback: "T²=(Z²/1)/(U/ν)~F(1,ν)" }
  ] },
  { type: "callout", tone: "intuition", label: "図形から二乗変換を理解する", text: "t値には正負がありますが、二乗後は−tと+tが同じ正値t²へ写ります。t分布の左半分を右へ折り返して重ねると考えられますが、二乗は横軸の間隔も変えるため、密度には変数変換の補正が必要です。標準正規変数の二乗が自由度1のカイ二乗分布を作る場合と同じ考え方です。" },
  { type: "heading", text: "なぜ両側確率が一つにまとまるのか？" },
  { type: "paragraph", text: "t分布は0を中心に左右対称です。両側検定の総有意水準がαなら、左右の裾は各α/2です。二乗するとT≤−|t|とT≥|t|の両方がT²≥t²へ写るため、左右の確率がF分布の右裾一つにまとまります。これが「両側が重なるため確率が2倍になる」という説明の正確な意味です。" },
  { type: "formulaGroup", formulas: [
    { label: "両側の事象が二乗後に合流", latex: "P(|T|\\ge t)=P(T\\le -t)+P(T\\ge t)=P(T^2\\ge t^2)", fallback: "P(|T|≥t)=P(T≤−t)+P(T≥t)=P(T²≥t²)" },
    { label: "両側t検定と右側F検定", latex: "P(|T_\\nu|\\ge t_{\\nu,1-\\alpha/2})=\\alpha=P(F_{1,\\nu}\\ge t_{\\nu,1-\\alpha/2}^{\\,2})", fallback: "両側tの総裾確率αはF(1,ν)の右裾確率αに等しい" },
    { label: "臨界値の関係", latex: "F_{1,\\nu;1-\\alpha}=t_{\\nu;1-\\alpha/2}^{\\,2}", fallback: "F(1,ν)の右裾α臨界値=tνの両側α臨界値の二乗" }
  ] },
  { type: "callout", tone: "intuition", label: "どの確率も単純に2倍するわけではない", text: "2倍は、左右対称なt分布の両裾が二乗後に合流することから生じます。特に両側t検定と右側F検定の対応であり、片側t検定へ同じ説明をそのまま適用することはできません。" },
  { type: "details", label: "補足：密度関数からT²がF分布に従うことを導く", children: [
    { type: "heading", text: "第1段階：F分布の分子自由度を1にする" },
    { type: "paragraph", text: "F分布の密度関数で分子自由度ν₁=1、分母自由度ν₂=νとし、Γ(1/2)=√πと(1/ν)^(1/2)=1/√νを使って係数を整理します。" },
    { type: "formulaGroup", formulas: [
      { label: "F分布の一般密度", latex: "f_{F_{\\nu_1,\\nu_2}}(y)=\\frac{\\Gamma((\\nu_1+\\nu_2)/2)}{\\Gamma(\\nu_1/2)\\Gamma(\\nu_2/2)}\\left(\\frac{\\nu_1}{\\nu_2}\\right)^{\\nu_1/2}y^{\\nu_1/2-1}\\left(1+\\frac{\\nu_1}{\\nu_2}y\\right)^{-(\\nu_1+\\nu_2)/2}", fallback: "F(ν₁,ν₂)の一般密度関数" },
      { label: "ν₁=1、ν₂=νを代入", latex: "f_{F_{1,\\nu}}(y)=\\frac{\\Gamma((\\nu+1)/2)}{\\Gamma(1/2)\\Gamma(\\nu/2)}\\left(\\frac{1}{\\nu}\\right)^{1/2}y^{-1/2}\\left(1+\\frac{y}{\\nu}\\right)^{-(\\nu+1)/2}", fallback: "Fの一般密度に分子自由度1、分母自由度νを代入" },
      { label: "Γ(1/2)=√πで簡約", latex: "f_{F_{1,\\nu}}(y)=\\frac{\\Gamma((\\nu+1)/2)}{\\sqrt{\\pi\\nu}\\,\\Gamma(\\nu/2)}y^{-1/2}\\left(1+\\frac{y}{\\nu}\\right)^{-(\\nu+1)/2},\\quad y>0", fallback: "簡約後のF(1,ν)密度にはy^(-1/2)が含まれる" }
    ] },
    { type: "heading", text: "第2段階：t分布の密度と比較する" },
    { type: "paragraph", text: "自由度νのt密度でt²をyへ置き換えると、y^(-1/2)以外はF(1,ν)の密度と一致します。この追加因子は任意の定数ではなく、二乗変換による横軸尺度の変化を補正するJacobianです。" },
    { type: "formula", latex: "f_{T_\\nu}(t)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\pi\\nu}\\,\\Gamma(\\nu/2)}\\left(1+\\frac{t^2}{\\nu}\\right)^{-(\\nu+1)/2}", fallback: "自由度νのt分布の密度関数" },
    { type: "heading", text: "第3段階：二乗変換で二つのt値が同じF値へ写る" },
    { type: "paragraph", text: "Y=T²とすると、各y>0にはt=√yとt=−√yの二つの元があります。Yの密度はt分布の左右両側の確率を集める必要があり、逆変換t=±√yの導関数の絶対値はいずれも1/(2√y)です。" },
    { type: "formulaGroup", formulas: [
      { label: "二乗変換と二つの逆関数", latex: "Y=T^2,\\qquad t_1=\\sqrt{y},\\quad t_2=-\\sqrt{y}", fallback: "Y=T²；t=√yまたは−√y" },
      { label: "横軸尺度の補正", latex: "\\left|\\frac{dt_1}{dy}\\right|=\\left|\\frac{dt_2}{dy}\\right|=\\frac{1}{2\\sqrt{y}}", fallback: "|dt/dy|=1/(2√y)" },
      { label: "二乗後の密度", latex: "f_Y(y)=\\frac{f_T(\\sqrt{y})+f_T(-\\sqrt{y})}{2\\sqrt{y}}", fallback: "fY(y)=[fT(√y)+fT(−√y)]/(2√y)" }
    ] },
    { type: "paragraph", text: "t分布は左右対称なのでf_T(−√y)=f_T(√y)です。両側を加えた2と導関数中の2が打ち消し合い、1/√y=y^(−1/2)が残ります。" },
    { type: "formulaGroup", formulas: [
      { label: "t分布の対称性を利用", latex: "f_Y(y)=\\frac{2f_T(\\sqrt{y})}{2\\sqrt{y}}=f_T(\\sqrt{y})y^{-1/2}", fallback: "fY(y)=fT(√y)y^(-1/2)" },
      { label: "t密度を代入", latex: "f_Y(y)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\pi\\nu}\\,\\Gamma(\\nu/2)}y^{-1/2}\\left(1+\\frac{y}{\\nu}\\right)^{-(\\nu+1)/2}=f_{F_{1,\\nu}}(y)", fallback: "二乗後の密度はF(1,ν)の密度に等しい" },
      { label: "導出結果", latex: "T\\sim t_\\nu\\quad\\Longrightarrow\\quad T^2\\sim F_{1,\\nu}", fallback: "T~tνならT²~F(1,ν)" }
    ] },
    { type: "callout", tone: "intuition", label: "「折り返す・重ねる・引き伸ばす」との対応", text: "左右の密度を加えることがt曲線の左半分を右へ折り返して重ねる操作に、1/(2√y)が二乗後の横軸間隔の引き伸ばしに対応します。2倍の確率と補正項は、変数変換公式の二つの部分です。" },
    { type: "table", rows: [["記号", "導出での意味"], ["T", "自由度νのt確率変数"], ["Y=T²", "二乗変換後の非負確率変数"], ["fT", "t分布の確率密度関数"], ["fY", "二乗後のYの確率密度関数"], ["1/(2√y)", "t=±√yをyで微分したJacobian補正"], ["F(1,ν)", "分子自由度1、分母自由度νのF分布"]] }
  ] },
  { type: "heading", text: "Fはtの拡張と考えられるか？" },
  { type: "paragraph", text: "分子自由度が1ならF統計量はt統計量の二乗であり、F検定は両側t検定を正値だけを見る右側検定へ書き換えたものと考えられます。一般のF分布は分子自由度を1より大きくでき、複数の効果を同時に検定できます。この意味では二乗t検定の多自由度への拡張ですが、すべてのF分布が一つのt分布と同じとはいえません。" },
  { type: "table", rows: [["比較方法", "答える問い", "得られる情報"], ["全体F検定", "複数群の平均に少なくとも一つ差があるか？", "全体差を判断するが、どの群が異なるかは直接示さない"], ["2群t検定", "指定した2群の平均が異なるか？", "差の方向とその組の詳細を示せる"], ["事後の対比較", "全体Fが有意な後、どの群に差があるか？", "複数の組を比較するが、多重比較による第1種過誤の増加を補正する必要がある"]] },
  { type: "paragraph", text: "複数群では、まずF検定で「全体として差があるか」を調べ、次に対ごとのt型比較や事後比較で「どの群が異なるか」を調べられます。ただし未補正のt検定を多数繰り返してはならず、通常はTukey、Bonferroni、Holmなどで全体の誤り率を制御します。" },
  { type: "callout", tone: "forward", label: "同じデータでtとFの両方を見る理由", text: "効果が一つで分子自由度が1ならF=t²となり、同じ両側p値が得られます。複数群や複数母数を同時に検定するとき、Fは全体判断に適します。差の方向やどの群に差があるかを知るには、t統計量、対比、事後比較が必要です。" },
  { type: "heading", text: "F分布はどこで使うか？" },
  { type: "list", items: ["二つの母分散を比較する", "ANOVAで群間変動と群内変動を比較する", "回帰モデル全体に説明力があるかを検定する", "入れ子モデルで母数追加による適合改善を比較する", "分散成分に関する信頼区間や検定を作る"] },
  { type: "callout", tone: "forward", label: "後で再び使います", text: "第6章のANOVAでは群間平均平方を分子、群内平均平方を分母としてF統計量を作ります。第7章の回帰分析でも、同じ変動分解と比の考え方を利用します。", related: ["06/one-way-anova", "07/simple-linear-regression"] },
];
