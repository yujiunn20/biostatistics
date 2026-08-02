export const exponentialDistributionJa = [
  { type: "paragraph", text: "指数分布（exponential distribution）は連続型確率分布で、事象が一定の平均発生率で互いに独立して起こるとき、次の事象までの待ち時間を記述します。" },
  { type: "callout", tone: "intuition", label: "中心となる問い", text: "ポアソン分布は一定時間内の発生回数を、指数分布は次の事象までの待ち時間を扱います。両者は同じ種類のランダムな事象を異なる側面から表します。" },
  { type: "heading", text: "どのような場合に使うか？" },
  { type: "paragraph", text: "次の電話や顧客の到着までの時間、一定の故障率を仮定した装置の故障時間などに使います。データが待ち時間であるだけでなく、平均発生率がおおむね一定で、異なる時間区間の事象を独立とみなせるかも確認します。" },
  { type: "callout", tone: "intuition", label: "λは確率ではなく発生率", text: "λは単位時間あたりの平均発生回数です。短い区間Δtで事象が起こる確率は約λΔtですが、λ自体は1を超えることがあり、0から1の範囲に制限されません。" },
  { type: "heading", text: "指数分布の定義" },
  { type: "paragraph", text: "確率変数Xを次の事象までの待ち時間、平均発生率をλとすると、Xは母数λの指数分布に従います。" },
  { type: "formulaGroup", formulas: [
    { label: "分布の表記", latex: "X\\sim\\operatorname{Exp}(\\lambda),\\qquad \\lambda>0", fallback: "X ~ Exp(λ)，λ>0" },
    { label: "確率密度関数", latex: "f(x)=\\begin{cases}\\lambda e^{-\\lambda x},&x\\ge 0,\\\\0,&x<0.\\end{cases}", fallback: "x≥0ではf(x)=λe^(-λx)、x<0ではf(x)=0" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["X", "次の事象までの待ち時間"], ["x", "Xの可能値"], ["λ", "単位時間あたりの平均発生率"], ["f(x)", "x付近の待ち時間の確率密度"], ["e", "自然対数の底"]] },
  { type: "heading", text: "λは曲線をどう変えるか？" },
  { type: "paragraph", text: "密度はx=0でf(0)=λとなり、その後は待ち時間とともに低下します。λが大きいほど事象が頻繁に起こり、曲線は高い位置から急速に低下して、典型的な待ち時間も短くなります。" },
  { type: "image", imageId: "exponential-rate-curves" },
  { type: "callout", tone: "intuition", label: "グラフの読み方", text: "どの曲線も総面積は1です。λが大きい曲線は総確率が大きいのではなく、確率が短い待ち時間へ集中し、長時間待つ確率が速く低下します。" },
  { type: "heading", text: "密度から確率を求める" },
  { type: "paragraph", text: "連続型分布なので一点の確率は0です。一定時間内に起こる確率や、その時間を超えても起こらない確率は曲線下の面積で計算します。" },
  { type: "formulaGroup", formulas: [
    { label: "累積分布関数", latex: "F(x)=P(X\\le x)=1-e^{-\\lambda x},\\qquad x\\ge0", fallback: "F(x)=P(X≤x)=1-e^(-λx)" },
    { label: "生存関数", latex: "S(x)=P(X>x)=e^{-\\lambda x},\\qquad x\\ge0", fallback: "S(x)=P(X>x)=e^(-λx)" },
    { label: "区間に入る確率", latex: "P(a<X\\le b)=F(b)-F(a)=e^{-\\lambda a}-e^{-\\lambda b}", fallback: "P(a<X≤b)=e^(-λa)-e^(-λb)" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["f(x)", "位置xでの確率密度"], ["F(x)", "待ち時間がx以下となる累積確率"], ["S(x)", "xを超えても事象が起こらない確率"], ["a、b", "0≤a<bである区間の端点"]] },
  { type: "heading", text: "平均待ち時間と変動" },
  { type: "paragraph", text: "発生率と平均待ち時間は互いに逆数です。λが大きいほど待ち時間の平均と変動は小さくなります。" },
  { type: "formulaGroup", formulas: [
    { label: "期待値", latex: "E(X)=\\frac{1}{\\lambda}", fallback: "E(X)=1/λ" },
    { label: "分散と標準偏差", latex: "\\operatorname{Var}(X)=\\frac{1}{\\lambda^2},\\qquad \\operatorname{SD}(X)=\\frac{1}{\\lambda}", fallback: "Var(X)=1/λ²，SD(X)=1/λ" }
  ] },
  { type: "heading", text: "無記憶性" },
  { type: "paragraph", text: "指数分布には無記憶性があります。すでにs時間待っても事象が起きていないという条件下で、さらにt時間を超えて待つ確率は、最初からt時間を超えて待つ確率と同じです。" },
  { type: "formula", latex: "P(X>s+t\\mid X>s)=P(X>t)=e^{-\\lambda t}", fallback: "P(X>s+t | X>s)=P(X>t)=e^(-λt)" },
  { type: "callout", tone: "intuition", label: "非常に強い仮定", text: "これまで何時間待ったかが今後の分布を変えないという仮定です。装置が老朽化する場合や患者のリスクが時間で変わる場合には不合理となり、別の分布やモデルが必要です。" },
  { type: "details", label: "補足：短い時間区間から指数分布を導く", children: [
    { type: "paragraph", text: "長さxの時間をn個の短い区間Δt=x/nへ分けます。一定の発生率λなら、各区間で事象が起こらない確率は約1−λx/nです。" },
    { type: "formulaGroup", formulas: [
      { label: "各区間で事象なし", latex: "P(\\text{no event in }\\Delta t)\\approx 1-\\lambda\\frac{x}{n}", fallback: "各区間で事象がない確率は約1-λx/n" },
      { label: "n区間すべてで事象なし", latex: "P(X>x)\\approx\\left(1-\\lambda\\frac{x}{n}\\right)^n", fallback: "P(X>x)≈(1-λx/n)^n" },
      { label: "区間を限りなく細かくする", latex: "S(x)=P(X>x)=\\lim_{n\\to\\infty}\\left(1-\\lambda\\frac{x}{n}\\right)^n=e^{-\\lambda x}", fallback: "S(x)=P(X>x)=e^(-λx)" }
    ] },
    { type: "paragraph", text: "この極限はまず生存関数を与えます。1から引けば累積分布関数、xで微分すれば確率密度関数が得られます。" },
    { type: "formulaGroup", formulas: [
      { label: "生存関数から累積確率へ", latex: "F(x)=1-S(x)=1-e^{-\\lambda x}", fallback: "F(x)=1-S(x)=1-e^(-λx)" },
      { label: "累積確率から密度へ", latex: "f(x)=F'(x)=-S'(x)=\\lambda e^{-\\lambda x}", fallback: "f(x)=F'(x)=-S'(x)=λe^(-λx)" }
    ] }
  ] },
  { type: "details", label: "補足：平均待ち時間が1/λとなる理由", children: [
    { type: "paragraph", text: "非負確率変数の期待値は生存関数下の面積で表せます。S(x)=e^(−λx)を積分すると1/λになります。" },
    { type: "formula", latex: "E(X)=\\int_0^{\\infty}S(x)\\,dx=\\int_0^{\\infty}e^{-\\lambda x}\\,dx=\\frac{1}{\\lambda}", fallback: "E(X)=∫₀∞S(x)dx=∫₀∞e^(-λx)dx=1/λ" }
  ] },
  { type: "heading", text: "ポアソン過程との関係" },
  { type: "paragraph", text: "時間t内の発生回数N(t)が平均λtのポアソン分布に従うなら、最初の事象までの時間Xは母数λの指数分布に従います。tを超えて待つことは、時間t内に事象が一度も起こらないことと同じです。" },
  { type: "formulaGroup", formulas: [
    { label: "発生回数", latex: "N(t)\\sim\\operatorname{Poisson}(\\lambda t)", fallback: "N(t)~Poisson(λt)" },
    { label: "待ち時間", latex: "P(X>t)=P(N(t)=0)=e^{-\\lambda t}", fallback: "P(X>t)=P(N(t)=0)=e^(-λt)" }
  ] },
  { type: "heading", text: "生存時間解析との関係" },
  { type: "paragraph", text: "生存時間解析では、指数分布はハザード率を一定のλとしたモデルです。ハザード率は時点xまで生存したという条件下で、直後の短い時間に事象が起こる瞬間的な率を表します。" },
  { type: "formula", latex: "h(x)=\\frac{f(x)}{S(x)}=\\lambda", fallback: "h(x)=f(x)/S(x)=λ" },
  { type: "callout", tone: "forward", label: "後で再び使います", text: "指数分布は発生回数、待ち時間、一定ハザード率を結びます。ポアソン分布、生存時間解析、時間‐事象データでこの三つの視点が繰り返し現れます。", related: ["02/poisson-distribution", "09/survival-curve"] },
];

export const binomialDistributionJa = [
  { type: "paragraph", text: "二項分布（binomial distribution）は、回数が固定され、互いに独立で成功確率が等しい反復試行における成功回数Xの確率分布です。離散型確率分布に分類されます。" },
  { type: "callout", tone: "intuition", label: "中心となる問い", text: "各試行では成功か失敗だけを記録します。二項分布は一回の成否ではなく、n回後に合計x回成功する確率を計算します。「成功」は関心のある結果を指すだけで、望ましい結果とは限りません。" },
  { type: "heading", text: "二項分布を使う四つの条件" },
  { type: "list", ordered: true, items: ["試行回数nが事前に固定されている", "各試行に互いに排他的な二結果だけがある", "各試行が独立し、一回の結果が別の結果を変えない", "各試行の成功確率が同じpで、失敗確率はq=1−pである"] },
  { type: "callout", tone: "intuition", label: "二値データがすべて二項分布になるわけではない", text: "二つの結果があるだけでは不十分です。小さな母集団から非復元抽出する場合は独立でないことがあり、成功確率が時間や個体で変わる場合も単一の二項分布には適合しません。" },
  { type: "heading", text: "二項分布の表記" },
  { type: "paragraph", text: "Xをn回の試行における成功回数、各回の成功確率をpとすると、Xは母数n、pの二項分布に従い、0からnまでの整数だけをとります。" },
  { type: "formulaGroup", formulas: [
    { label: "分布の表記", latex: "X\\sim\\operatorname{Binomial}(n,p)", fallback: "X ~ Binomial(n,p)" },
    { label: "可能な値", latex: "x=0,1,2,\\ldots,n", fallback: "x=0,1,2,…,n" },
    { label: "失敗確率", latex: "q=1-p", fallback: "q=1-p" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["X", "n回の試行における総成功回数"], ["x", "Xの可能値"], ["n", "固定された総試行回数"], ["p", "各試行の成功確率"], ["q", "各試行の失敗確率、q=1−p"]] },
  { type: "heading", text: "ちょうどx回成功する確率" },
  { type: "paragraph", text: "x回の成功とn−x回の失敗からなる一つの指定配列の確率は、各試行確率の積です。成功位置には複数の選び方があるため、n個の位置からx個を選ぶ組合せ数を掛けます。" },
  { type: "formulaGroup", formulas: [
    { label: "指定した一配列の確率", latex: "p^x(1-p)^{n-x}", fallback: "p^x(1-p)^(n-x)" },
    { label: "ちょうどx回成功する総確率", latex: "P(X=x)=\\binom{n}{x}p^x(1-p)^{n-x},\\qquad x=0,1,\\ldots,n", fallback: "P(X=x)=C(n,x)p^x(1-p)^(n-x)" },
    { label: "成功位置の組合せ数", latex: "\\binom{n}{x}=\\frac{n!}{x!(n-x)!}", fallback: "C(n,x)=n!/[x!(n-x)!]" }
  ] },
  { type: "callout", tone: "intuition", label: "なぜ組合せ数を掛けるのか？", text: "3回中2回成功なら、成功・成功・失敗、成功・失敗・成功、失敗・成功・成功の三配列があります。いずれも成功回数は同じなので、確率をすべて加える必要があります。" },
  { type: "heading", text: "累積確率の計算" },
  { type: "paragraph", text: "「高々」「少なくとも」または一定範囲の確率では、条件を満たす複数のxの確率を合計します。少なくともk回の確率は補事象で簡単に計算できます。" },
  { type: "formulaGroup", formulas: [
    { label: "高々k回成功", latex: "P(X\\le k)=\\sum_{x=0}^{k}\\binom{n}{x}p^x(1-p)^{n-x}", fallback: "P(X≤k)=x=0からkまでの二項確率の和" },
    { label: "少なくともk回成功", latex: "P(X\\ge k)=1-P(X\\le k-1)", fallback: "P(X≥k)=1-P(X≤k-1)" }
  ] },
  { type: "heading", text: "平均成功回数と変動" },
  { type: "paragraph", text: "各試行は平均p回の成功に寄与するため、n回の総成功回数の平均はnpです。独立な各成功指標の分散p(1−p)を加えるとnp(1−p)になります。" },
  { type: "formulaGroup", formulas: [
    { label: "期待値", latex: "E(X)=np", fallback: "E(X)=np" },
    { label: "分散", latex: "\\operatorname{Var}(X)=np(1-p)=npq", fallback: "Var(X)=np(1-p)=npq" },
    { label: "標準偏差", latex: "\\operatorname{SD}(X)=\\sqrt{np(1-p)}", fallback: "SD(X)=√[np(1-p)]" }
  ] },
  { type: "callout", tone: "intuition", label: "期待値は可能な整数でなくてもよい", text: "n=5、p=0.5ならE(X)=2.5です。一回の実験で2.5回成功するのではなく、一連の実験を多数繰り返したときの長期平均が2.5へ近づくという意味です。" },
  { type: "details", label: "補足：成功指標から平均と分散を導く", children: [
    { type: "paragraph", text: "第i試行の成功時にIᵢ=1、失敗時にIᵢ=0とすると、総成功回数は指標の和です。期待値は常に加算でき、独立なら共分散が0なので分散も加算できます。" },
    { type: "formulaGroup", formulas: [
      { label: "成功回数", latex: "X=I_1+I_2+\\cdots+I_n", fallback: "X=I₁+I₂+…+Iₙ" },
      { label: "一試行", latex: "E(I_i)=p,\\qquad \\operatorname{Var}(I_i)=p(1-p)", fallback: "E(Iᵢ)=p，Var(Iᵢ)=p(1-p)" },
      { label: "平均", latex: "E(X)=\\sum_{i=1}^{n}E(I_i)=np", fallback: "E(X)=ΣE(Iᵢ)=np" },
      { label: "分散", latex: "\\operatorname{Var}(X)=\\sum_{i=1}^{n}\\operatorname{Var}(I_i)=np(1-p)", fallback: "Var(X)=ΣVar(Iᵢ)=np(1-p)" }
    ] }
  ] },
  { type: "details", label: "補足：公式からE(X)とVar(X)を導く", children: [
    { type: "paragraph", text: "組合せ恒等式で和の前のxまたはx(x−1)を消し、添字を置換して残りを完全な二項確率の和として認識します。その和は1なので式を簡約できます。" },
    { type: "formulaGroup", formulas: [
      { label: "期待値の定義", latex: "E(X)=\\sum_{x=1}^{n}x\\binom{n}{x}p^x(1-p)^{n-x}", fallback: "E(X)=ΣxC(n,x)p^x(1-p)^(n-x)" },
      { label: "組合せ恒等式", latex: "x\\binom{n}{x}=n\\binom{n-1}{x-1}", fallback: "xC(n,x)=nC(n-1,x-1)" },
      { label: "完全な二項確率和", latex: "\\sum_{j=0}^{n-1}\\binom{n-1}{j}p^j(1-p)^{(n-1)-j}=1", fallback: "Binomial(n-1,p)の全確率の和は1" },
      { label: "期待値", latex: "E(X)=np", fallback: "E(X)=np" }
    ] },
    { type: "paragraph", text: "E(X²)を直接求める代わりに、まず階乗モーメントE[X(X−1)]を計算すると、同じ方法で簡単に整理できます。" },
    { type: "formulaGroup", formulas: [
      { label: "第2組合せ恒等式", latex: "x(x-1)\\binom{n}{x}=n(n-1)\\binom{n-2}{x-2}", fallback: "x(x-1)C(n,x)=n(n-1)C(n-2,x-2)" },
      { label: "階乗モーメント", latex: "E[X(X-1)]=n(n-1)p^2", fallback: "E[X(X-1)]=n(n-1)p²" },
      { label: "二次モーメント", latex: "E(X^2)=E[X(X-1)]+E(X)=n(n-1)p^2+np", fallback: "E(X²)=n(n-1)p²+np" },
      { label: "分散", latex: "\\operatorname{Var}(X)=E(X^2)-[E(X)]^2=np(1-p)", fallback: "Var(X)=np(1-p)" }
    ] },
    { type: "callout", tone: "intuition", label: "なぜX(X−1)が便利なのか？", text: "X(X−1)はX回の成功から順序を考えて異なる二つを選ぶ方法数で、n(n−1)の構造と対応します。このため二項係数をC(n−2,x−2)へ下げられ、計数分布で階乗モーメントが特に役立ちます。" }
  ] },
  { type: "heading", text: "二項分布はいつ正規分布へ近づくか？" },
  { type: "paragraph", text: "nが大きく、pが0や1に近すぎなければ、二項分布は釣鐘形の正規分布へ近づきます。nだけでなく、期待される成功数npと失敗数n(1−p)の両方が十分大きいかを確認します。" },
  { type: "callout", tone: "intuition", label: "実用的な確認法", text: "よく使う目安はnpとn(1−p)がともに5以上、保守的には10以上です。これは近似精度の目安であり、二項分布自体の成立条件ではありません。" },
  { type: "formulaGroup", formulas: [
    { label: "近似する正規分布", latex: "X\\approx N\\!\\left(np,\\,np(1-p)\\right)", fallback: "X≈N(np,np(1-p))" },
    { label: "標準化", latex: "Z=\\frac{X-np}{\\sqrt{np(1-p)}}\\approx N(0,1)", fallback: "Z=[X-np]/√[np(1-p)]≈N(0,1)" }
  ] },
  { type: "paragraph", text: "離散分布を連続分布で近似するため、確率計算では連続性補正を使えます。例えばP(X≤k)では境界をk+0.5へ変更します。" },
  { type: "formula", latex: "P(X\\le k)\\approx P(Y\\le k+0.5),\\qquad Y\\sim N\\!\\left(np,np(1-p)\\right)", fallback: "P(X≤k)≈P(Y≤k+0.5)" },
  { type: "heading", text: "他の分布との関係" },
  { type: "list", items: ["Bernoulli分布：n=1の二項分布", "多項分布：各試行が三つ以上の結果をもつ場合への拡張", "ポアソン分布：nが大きくpが小さく、npが適度な場合にλ=npで近似", "正規分布：npとn(1−p)が十分大きい場合に平均np、分散np(1−p)で近似"] },
  { type: "callout", tone: "forward", label: "後で再び使います", text: "二項分布は二項検定、二つの比率の比較、一部の2×2表手法の基礎です。正規近似と連続性補正も大標本検定で再登場します。", related: ["05/binomial-test", "05/contingency-table", "05/yates-correction"] },
];

export const poissonDistributionJa = [
  { type: "paragraph", text: "ポアソン分布（Poisson distribution）は、一定の時間、面積、体積、その他の区間内に事象が起こる回数Xを記述する離散型確率分布です。" },
  { type: "callout", tone: "intuition", label: "中心となる問い", text: "二項分布は試行回数を固定して成功回数を数え、ポアソン分布は観察区間を固定して事象の回数を数えます。例えば1時間の電話件数、1頁の誤字数、一定面積内のコロニー数です。" },
  { type: "heading", text: "どのような場合に使うか？" },
  { type: "list", ordered: true, items: ["Xが固定区間内の発生回数を数える", "事象がほぼ一定の平均発生率で起こる", "重ならない区間の発生回数を独立とみなせる", "非常に短い区間で2回以上起こる確率を無視できる"] },
  { type: "callout", tone: "intuition", label: "一定の平均発生率はモデル上の仮定", text: "時間帯で発生率が大きく異なる、事象が群集する、ある事象が次の事象を起こりやすくする場合、単一のポアソン分布は不適切かもしれません。区間の変更、説明変数の追加、過剰な変動を扱うモデルを検討します。" },
  { type: "heading", text: "母数λは何を表すか？" },
  { type: "paragraph", text: "λは選んだ観察区間内の期待発生回数です。単位区間あたりの平均発生率をr、観察区間の長さをtとするとλ=rtであり、区間の長さを変えればλも変わります。" },
  { type: "formulaGroup", formulas: [
    { label: "分布の表記", latex: "X\\sim\\operatorname{Poisson}(\\lambda),\\qquad \\lambda>0", fallback: "X~Poisson(λ)，λ>0" },
    { label: "発生率と区間母数", latex: "\\lambda=rt", fallback: "λ=rt" },
    { label: "可能な値", latex: "x=0,1,2,\\ldots", fallback: "x=0,1,2,…" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["X", "選んだ区間内の発生回数"], ["x", "Xの可能値"], ["λ", "選んだ区間内の期待発生回数"], ["r", "単位区間あたりの平均発生率"], ["t", "観察区間の長さ"]] },
  { type: "heading", text: "確率質量関数" },
  { type: "paragraph", text: "Xは非負整数だけをとるため、連続型の確率密度関数ではなく確率質量関数を使います。次の式は区間内にちょうどx回事象が起こる確率です。" },
  { type: "formula", latex: "P(X=x)=\\frac{e^{-\\lambda}\\lambda^x}{x!},\\qquad x=0,1,2,\\ldots", fallback: "P(X=x)=e^(-λ)λ^x/x!" },
  { type: "table", rows: [["式の部分", "意味"], ["P(X=x)", "固定区間内でちょうどx回起こる確率"], ["e^(−λ)", "区間内で一度も起こらない確率"], ["λ^x", "x回の事象と平均発生回数に関する部分"], ["x!", "x回事象の順序を調整する階乗項"]] },
  { type: "heading", text: "λは分布の形をどう変えるか？" },
  { type: "paragraph", text: "λが小さいと確率は0と少数回へ集中して右に歪みます。λが増えると中心は右へ移り、範囲が広がって相対的な歪みが減ります。図の点がXの実際の整数値で、線は同じ分布の点を見分けやすくするだけです。" },
  { type: "image", imageId: "poisson-lambda-distributions" },
  { type: "callout", tone: "intuition", label: "連続曲線として読まない", text: "ポアソン変数は1.5回や2.7回をとりません。各整数位置の高さ自体がその値の確率で、曲線下面積へ換算する必要はありません。" },
  { type: "heading", text: "平均と分散が等しい" },
  { type: "paragraph", text: "ポアソン分布では期待値と分散がともにλです。λが増えると平均回数だけでなく絶対的な変動も増え、標準偏差は√λになります。" },
  { type: "formulaGroup", formulas: [
    { label: "期待値", latex: "E(X)=\\lambda", fallback: "E(X)=λ" },
    { label: "分散", latex: "\\operatorname{Var}(X)=\\lambda", fallback: "Var(X)=λ" },
    { label: "標準偏差", latex: "\\operatorname{SD}(X)=\\sqrt{\\lambda}", fallback: "SD(X)=√λ" }
  ] },
  { type: "callout", tone: "intuition", label: "標本の平均と分散が完全に等しい必要はない", text: "E(X)=Var(X)=λは理論モデルの性質で、有限標本の平均と分散は通常完全には一致しません。分散が継続的に平均を大きく上回る場合は、群集、個体差、欠落変数による過分散が考えられます。" },
  { type: "heading", text: "よく使う確率" },
  { type: "paragraph", text: "事象が一度も起こらない確率は特に重要で、補事象から少なくとも一度起こる確率を直ちに求められます。" },
  { type: "formulaGroup", formulas: [
    { label: "一度も起こらない", latex: "P(X=0)=e^{-\\lambda}", fallback: "P(X=0)=e^(-λ)" },
    { label: "少なくとも一度", latex: "P(X\\ge1)=1-P(X=0)=1-e^{-\\lambda}", fallback: "P(X≥1)=1-e^(-λ)" },
    { label: "高々k回", latex: "P(X\\le k)=\\sum_{x=0}^{k}\\frac{e^{-\\lambda}\\lambda^x}{x!}", fallback: "P(X≤k)=x=0からkまでのポアソン確率の和" }
  ] },
  { type: "details", label: "補足：二項分布からポアソン公式を導く", children: [
    { type: "heading", text: "第1段階：観察区間を多数の小区間へ分ける" },
    { type: "paragraph", text: "全区間で平均λ回事象が起こるとし、n個の短い区間へ分けます。nが大きいと各区間の発生確率は約λ/nで、2回以上起こる確率を無視できるため、一時的に二項試行として扱えます。" },
    { type: "formulaGroup", formulas: [
      { label: "小区間の発生確率", latex: "p_n=\\frac{\\lambda}{n}", fallback: "pₙ=λ/n" },
      { label: "有限nでの二項モデル", latex: "X_n\\sim\\operatorname{Binomial}\\!\\left(n,\\frac{\\lambda}{n}\\right)", fallback: "Xₙ~Binomial(n,λ/n)" },
      { label: "ちょうどx回発生", latex: "P(X_n=x)=\\binom{n}{x}\\left(\\frac{\\lambda}{n}\\right)^x\\left(1-\\frac{\\lambda}{n}\\right)^{n-x}", fallback: "P(Xₙ=x)=C(n,x)(λ/n)^x(1-λ/n)^(n-x)" }
    ] },
    { type: "heading", text: "第2段階：個別に極限をとれる部分へ分解する" },
    { type: "formula", latex: "P(X_n=x)=\\underbrace{\\frac{n!}{n^x(n-x)!}}_{A_n}\\frac{\\lambda^x}{x!}\\underbrace{\\left(1-\\frac{\\lambda}{n}\\right)^n}_{B_n}\\underbrace{\\left(1-\\frac{\\lambda}{n}\\right)^{-x}}_{C_n}", fallback: "二項確率をAₙ、λ^x/x!、Bₙ、Cₙへ分解する" },
    { type: "heading", text: "第3段階：三つの極限を求める" },
    { type: "paragraph", text: "xを固定したままnを大きくします。排列比は1へ、指数極限はe^(−λ)へ、固定指数の補正は1へ近づきます。" },
    { type: "formulaGroup", formulas: [
      { label: "排列比", latex: "A_n=\\prod_{j=0}^{x-1}\\left(1-\\frac{j}{n}\\right)\\longrightarrow1", fallback: "n!/[n^x(n-x)!]→1" },
      { label: "指数極限", latex: "B_n=\\left(1-\\frac{\\lambda}{n}\\right)^n\\longrightarrow e^{-\\lambda}", fallback: "(1-λ/n)^n→e^(-λ)" },
      { label: "固定指数", latex: "C_n=\\left(1-\\frac{\\lambda}{n}\\right)^{-x}\\longrightarrow1", fallback: "(1-λ/n)^(-x)→1" }
    ] },
    { type: "formula", latex: "\\lim_{n\\to\\infty}P(X_n=x)=\\frac{e^{-\\lambda}\\lambda^x}{x!}", fallback: "n→∞で二項確率はe^(-λ)λ^x/x!へ近づく" },
    { type: "callout", tone: "intuition", label: "極限で保たれるもの", text: "nは増え、各回の成功確率λ/nは小さくなりますが、積n(λ/n)=λは一定です。そのため有限区間の期待発生回数λを保ったまま、二項分布がポアソン分布へ移行します。" }
  ] },
  { type: "heading", text: "二項分布による近似" },
  { type: "paragraph", text: "二項分布でnが大きくpが小さく、λ=npが適度な大きさなら、成功回数をPoisson(λ)で近似できます。多数の機会のうち少数だけ起こる事象に適します。" },
  { type: "formula", latex: "X\\sim\\operatorname{Binomial}(n,p),\\quad n\\text{ large},\\ p\\text{ small},\\ \\lambda=np\\quad\\Longrightarrow\\quad X\\approx\\operatorname{Poisson}(\\lambda)", fallback: "nが大きくpが小さくλ=npならBinomial(n,p)≈Poisson(λ)" },
  { type: "heading", text: "指数分布との関係" },
  { type: "paragraph", text: "発生率rのポアソン過程では、長さt内の発生回数N(t)はPoisson(rt)、次の事象までの待ち時間TはExp(r)に従います。一方は回数を、他方は間隔を測ります。" },
  { type: "formulaGroup", formulas: [
    { label: "固定時間内の発生回数", latex: "N(t)\\sim\\operatorname{Poisson}(rt)", fallback: "N(t)~Poisson(rt)" },
    { label: "次の事象までの待ち時間", latex: "T\\sim\\operatorname{Exp}(r)", fallback: "T~Exp(r)" },
    { label: "tを超えて待つことは区間内で事象がないことと同じ", latex: "P(T>t)=P(N(t)=0)=e^{-rt}", fallback: "P(T>t)=P(N(t)=0)=e^(-rt)" }
  ] },
  { type: "heading", text: "独立なポアソン回数は加算できる" },
  { type: "paragraph", text: "異なる発生源の回数が独立なら、総回数もポアソン分布に従い、母数は各発生源の母数の和です。異なる時間帯、地域、発生源の計数を自然に統合できます。" },
  { type: "formula", latex: "X_i\\sim\\operatorname{Poisson}(\\lambda_i)\\text{ independently}\\quad\\Longrightarrow\\quad\\sum_{i=1}^{m}X_i\\sim\\operatorname{Poisson}\\!\\left(\\sum_{i=1}^{m}\\lambda_i\\right)", fallback: "独立なポアソン変数の和では母数も加算される" },
  { type: "callout", tone: "forward", label: "後で再び使います", text: "ポアソン分布は発生率、発生回数、分割表のモデルに使われ、指数待ち時間、二項分布の稀な事象近似、ポアソン回帰と直接関係します。", related: ["02/binomial-distribution", "02/exponential-distribution"] },
];
