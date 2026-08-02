export const samplingJa = [
  { type: "paragraph", text: "標本抽出（sampling）とは、母集団から一部の観察単位を選んで標本を作り、その情報から母集団を推測することです。実際に観察するのは標本ですが、知りたい対象は通常、まだ完全には観察されていない母集団です。" },
  { type: "callout", tone: "intuition", label: "中心となる問い", text: "標本抽出は単にデータを減らす作業ではありません。限られたデータからより大きな母集団を理解し、一部しか観察しないことによる不確実性をどう評価するかが中心です。" },
  { type: "heading", text: "母集団、標本、母数、統計量" },
  { type: "paragraph", text: "母集団は研究対象となる全単位、標本は実際に選んで観察する一部です。母集団を表す値を母数、標本から計算する値を統計量と呼びます。統計的推測では統計量から未知の母数を推定または検定します。" },
  { type: "table", rows: [["水準", "対象", "代表的な値", "性質"], ["母集団", "研究対象となる全単位", "平均μ、分散σ²、比率p", "通常は未知で推測の対象"], ["標本", "母集団から選んだn単位", "平均X̄、分散s²、比率p̂", "観察データから計算し母集団を推測"]] },
  { type: "formulaGroup", formulas: [
    { label: "母集団と標本の大きさ", latex: "N=\\text{population size},\\qquad n=\\text{sample size}", fallback: "Nは母集団サイズ、nは標本サイズ" },
    { label: "標本平均", latex: "\\bar X=\\frac{1}{n}\\sum_{i=1}^{n}X_i", fallback: "X̄=(1/n)ΣXᵢ" }
  ] },
  { type: "table", rows: [["記号", "意味"], ["N", "母集団の総単位数"], ["n", "標本の単位数"], ["Xᵢ", "標本のi番目の観測値"], ["μ、σ²", "母平均と母分散"], ["X̄、s²", "標本平均と標本分散"], ["p、p̂", "母比率と標本比率"]] },
  { type: "heading", text: "なぜ標本抽出が必要か？" },
  { type: "list", items: ["母集団が大きすぎる、または全体を列挙できない", "時間、人員、費用を削減できる", "破壊検査では全単位を測定できない", "小規模研究では訓練・測定・品質管理を充実できる", "確率標本抽出なら抽出による不確実性を統計的に評価できる"] },
  { type: "callout", tone: "intuition", label: "標本が母集団より本質的に正確なわけではない", text: "管理しやすいため各データの品質を高められる場合はありますが、標本誤差は残ります。抽出法に偏りがあれば、非常に大きな標本でも安定して誤った結論に達します。" },
  { type: "heading", text: "標本誤差と標本抽出バイアス" },
  { type: "paragraph", text: "同じ母集団から反復抽出すると統計量が自然に変動します。これが標本誤差です。一方、特定の個体が選ばれやすい、または選ばれにくいため標本が系統的に母集団からずれることを標本抽出バイアスと呼びます。" },
  { type: "table", rows: [["問題", "原因", "標本サイズ増加で改善するか"], ["標本誤差", "異なる個体を無作為に抽出する自然な変動", "通常は小さくなる"], ["標本抽出バイアス", "標本抽出枠、組入れ法、無回答による系統的な歪み", "大きくするだけでは消えない"]] },
  { type: "callout", tone: "intuition", label: "代表性は数ではなく設計から生じる", text: "入手しやすい偏った1万件より、研究目的に沿って適切に抽出した数百件の方が母集団をよく代表することがあります。まず対象母集団と標本抽出枠を明確に定義します。" },
  { type: "heading", text: "主な確率標本抽出法" },
  { type: "heading", text: "1. 単純無作為抽出" },
  { type: "paragraph", text: "標本抽出枠から無作為に個体を選び、大きさnの可能な各標本が同じ選択機会をもつ方法です。概念は直接的ですが、完全な抽出枠が必要です。" },
  { type: "heading", text: "2. 系統抽出" },
  { type: "paragraph", text: "最初のk単位から開始点を無作為に選び、その後はk単位ごとに抽出します。実行しやすい一方、名簿に抽出間隔と同じ周期があると偏りが生じます。" },
  { type: "formula", latex: "k\\approx\\frac{N}{n}", fallback: "抽出間隔k≈N/n" },
  { type: "heading", text: "3. 層化抽出" },
  { type: "paragraph", text: "重要な特性により母集団を重ならない層へ分け、各層から無作為抽出します。重要な部分集団を確実に含められます。不比例に抽出した場合、母集団全体の分析には重み付けが必要です。" },
  { type: "heading", text: "4. クラスター抽出" },
  { type: "paragraph", text: "病院、学校、地域など自然な集団を作り、その一部を無作為に選びます。選んだクラスター内の全員を調べる単段法と、さらに個人を抽出する多段法があります。" },
  { type: "callout", tone: "intuition", label: "層化とクラスターを混同しない", text: "層化抽出は通常すべての層から標本を取り、クラスター抽出は一部のクラスターだけを選びます。同一クラスター内の個体は似やすいため、分析ではクラスター内相関を考慮します。" },
  { type: "table", rows: [["方法", "抽出方法", "主な利点", "主な危険"], ["単純無作為", "母集団名簿全体から抽出", "概念と分析が直接的", "完全な名簿の入手が困難"], ["系統", "無作為開始点からk単位ごと", "実行しやすい", "名簿の周期性"], ["層化", "各層から抽出", "部分集団の代表性", "不比例抽出では重みが必要"], ["クラスター", "一部の自然集団を抽出", "地理的・実施上の費用を削減", "クラスター内の類似で有効情報量が低下"]] },
  { type: "heading", text: "中心極限定理" },
  { type: "paragraph", text: "観測値が独立同分布で、母集団に有限の平均μと分散σ²があるとき、nが増えるにつれて標本平均を標準化した分布は標準正規分布へ近づきます。" },
  { type: "formulaGroup", formulas: [
    { label: "標本平均の近似分布", latex: "\\bar X\\approx N\\!\\left(\\mu,\\frac{\\sigma^2}{n}\\right)", fallback: "X̄≈N(μ,σ²/n)" },
    { label: "標準化した形", latex: "\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\xrightarrow{d}N(0,1)\\qquad(n\\to\\infty)", fallback: "(X̄-μ)/(σ/√n)→N(0,1)" }
  ] },
  { type: "callout", tone: "intuition", label: "元データが正規分布になるという意味ではない", text: "中心極限定理が述べるのは標本平均の標本分布です。母集団や一つの標本の元データが、nの増加によって正規分布へ変わるわけではありません。" },
  { type: "paragraph", text: "母集団が正規分布ならnにかかわらず標本平均も正規分布です。非正規なら十分大きいnが必要ですが、n≥30は経験則にすぎず、強い歪み、厚い裾、外れ値があるほど大きな標本が必要です。" },
  { type: "heading", text: "一つの標本からすべての可能な標本へ" },
  { type: "paragraph", text: "有限母集団N単位から順序を考えず非復元でn単位を単純無作為抽出すると、可能な標本数はC(N,n)で、各標本から一つの標本平均を計算できます。" },
  { type: "formulaGroup", formulas: [
    { label: "可能な標本数", latex: "m=\\binom{N}{n}", fallback: "m=C(N,n)" },
    { label: "第j標本の平均", latex: "\\bar X_j=\\frac{1}{n}\\sum_{i=1}^{n}X_{ji},\\qquad j=1,2,\\ldots,m", fallback: "X̄ⱼ=(1/n)ΣXⱼᵢ" }
  ] },
  { type: "heading", text: "標本分布とは？" },
  { type: "paragraph", text: "すべての可能な標本、または概念上の反復抽出から得られる統計量を確率分布としてまとめたものが、その統計量の標本分布です。反復して得るX̄の分布が標本平均の標本分布です。" },
  { type: "table", rows: [["分布", "含まれる値", "答える問い"], ["母集団分布", "母集団の各観測値", "母集団全体はどのような形か"], ["標本データ分布", "一標本のn観測値", "今回のデータはどのような形か"], ["統計量の標本分布", "反復抽出によるX̄、p̂など", "研究を繰り返すと結果はどう変動するか"]] },
  { type: "heading", text: "標本平均の標本分布" },
  { type: "paragraph", text: "X₁,…,Xₙが同じ母集団からの独立な観測値で平均μ、分散σ²をもつなら、標本平均は不偏推定量です。反復抽出した標本平均の平均は母平均に等しくなります。" },
  { type: "formulaGroup", formulas: [
    { label: "標本分布の中心", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
    { label: "標本分布の分散", latex: "\\operatorname{Var}(\\bar X)=\\frac{\\sigma^2}{n}", fallback: "Var(X̄)=σ²/n" },
    { label: "標本平均の標準誤差", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" }
  ] },
  { type: "callout", tone: "intuition", label: "標準偏差と標準誤差は異なる", text: "標準偏差は個体間の違い、標準誤差は研究を繰り返したときの統計量の不安定さを表します。標本サイズを増やしても個体差は消えませんが、標本平均は安定します。" },
  { type: "details", label: "補足1：確率変数の線形結合", children: [
    { type: "paragraph", text: "大文字Xᵢは抽出前に値が不確かな確率変数、小文字xᵢは抽出後に観察された固定値です。標本分布を導く式では、反復抽出で変化するXᵢを扱います。" },
    { type: "formula", latex: "L=c_1X_1+\\cdots+c_nX_n=\\sum_{i=1}^{n}c_iX_i", fallback: "L=ΣcᵢXᵢ" },
    { type: "formulaGroup", formulas: [
      { label: "期待値", latex: "E(L)=\\sum_{i=1}^{n}c_iE(X_i)", fallback: "E(L)=ΣcᵢE(Xᵢ)" },
      { label: "独立な場合の分散", latex: "\\operatorname{Var}(L)=\\sum_{i=1}^{n}c_i^2\\operatorname{Var}(X_i)", fallback: "Var(L)=Σcᵢ²Var(Xᵢ)" },
      { label: "相関がある場合", latex: "\\operatorname{Var}(L)=\\sum_{i=1}^{n}c_i^2\\operatorname{Var}(X_i)+2\\sum_{i<j}c_ic_j\\operatorname{Cov}(X_i,X_j)", fallback: "Var(L)=Σcᵢ²Var(Xᵢ)+2ΣcᵢcⱼCov(Xᵢ,Xⱼ)" }
    ] },
    { type: "callout", tone: "intuition", label: "分散を加える条件", text: "期待値の線形性には独立性は不要ですが、分散を各項へ分けて加えるには独立または共分散0が必要です。係数は分散の式では二乗されます。" }
  ] },
  { type: "details", label: "補足2：標本平均の平均と標準誤差の導出", children: [
    { type: "heading", text: "有限母集団からの非復元抽出" },
    { type: "paragraph", text: "すべてのC(N,n)標本を列挙すると、各母集団値はC(N−1,n−1)標本に現れます。この組合せ計数からE(X̄)=μが得られます。二つの値の組はC(N−2,n−2)標本に現れ、平方項と交差項を整理すると有限母集団修正が得られます。" },
    { type: "formulaGroup", formulas: [
      { label: "不偏性", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
      { label: "有限母集団での分散", latex: "\\operatorname{Var}(\\bar X)=\\frac{N-n}{n(N-1)}\\sigma^2", fallback: "Var(X̄)=[(N−n)/(n(N−1))]σ²" },
      { label: "有限母集団での標準誤差", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}\\sqrt{\\frac{N-n}{N-1}}", fallback: "SE(X̄)=(σ/√n)√[(N−n)/(N−1)]" }
    ] },
    { type: "heading", text: "独立確率変数の線形結合による導出" },
    { type: "paragraph", text: "Nがnより十分大きければ各抽出を近似的に独立とみなし、X̄を係数1/nの線形結合として扱えます。" },
    { type: "formulaGroup", formulas: [
      { label: "標本平均", latex: "\\bar X=\\sum_{i=1}^{n}\\frac{X_i}{n}", fallback: "X̄=ΣXᵢ/n" },
      { label: "平均", latex: "E(\\bar X)=\\sum_{i=1}^{n}\\frac{1}{n}E(X_i)=\\mu", fallback: "E(X̄)=μ" },
      { label: "分散", latex: "\\operatorname{Var}(\\bar X)=\\sum_{i=1}^{n}\\frac{1}{n^2}\\operatorname{Var}(X_i)=\\frac{\\sigma^2}{n}", fallback: "Var(X̄)=σ²/n" },
      { label: "標準誤差", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" }
    ] },
    { type: "paragraph", text: "有限母集団法は非復元抽出による依存性を正確に残します。線形結合法はN≫nで有限母集団の影響を無視した簡潔な近似です。" }
  ] },
  { type: "paragraph", text: "σが未知ならs/√nで標準誤差を推定します。有限母集団から非復元抽出し、抽出率n/Nを無視できない場合は有限母集団修正を掛けます。" },
  { type: "formulaGroup", formulas: [
    { label: "標本標準偏差による推定", latex: "\\widehat{\\operatorname{SE}}(\\bar X)=\\frac{s}{\\sqrt n}", fallback: "推定SE(X̄)=s/√n" },
    { label: "有限母集団修正", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}\\sqrt{\\frac{N-n}{N-1}}", fallback: "有限母集団修正を含むSE" }
  ] },
  { type: "heading", text: "標本分散はなぜn−1で割るのか？" },
  { type: "paragraph", text: "同じデータからX̄を推定するため、n個の偏差Xᵢ−X̄の和は0となり、独立に変動できるのはn−1個です。n−1で割ると、標本分散は母分散の不偏推定量になります。" },
  { type: "formulaGroup", formulas: [
    { label: "標本分散", latex: "s^2=\\frac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "s²=Σ(Xᵢ-X̄)²/(n-1)" },
    { label: "標本標準偏差", latex: "s=\\sqrt{s^2}", fallback: "s=√s²" },
    { label: "不偏性", latex: "E(s^2)=\\sigma^2", fallback: "E(s²)=σ²" }
  ] },
  { type: "details", label: "補足3：標本分散による母分散の推定", children: [
    { type: "paragraph", text: "有限母集団のすべての可能な標本について、分母nの標本内変動vを平均します。各xᵢ²はC(N−1,n−1)回、各xᵢxⱼはC(N−2,n−2)回現れることを使います。" },
    { type: "formulaGroup", formulas: [
      { label: "分母nの標本内変動", latex: "v=\\frac{1}{n}\\sum(X_i-\\bar X)^2", fallback: "v=Σ(Xᵢ−X̄)²/n" },
      { label: "可能標本についての平均", latex: "E(v)=\\frac{n-1}{n}\\frac{N}{N-1}\\sigma^2", fallback: "E(v)=[(n−1)/n][N/(N−1)]σ²" },
      { label: "大きな母集団での補正", latex: "s^2=\\frac{n}{n-1}v=\\frac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "s²=Σ(Xᵢ−X̄)²/(n−1)" }
    ] },
    { type: "callout", tone: "intuition", label: "母分散の分母の慣例", text: "有限母集団分散をN−1で定義すればE(s²)は厳密に一致します。Nで定義するσ²ではN/(N−1)の有限母集団差が残ります。" }
  ] },
  { type: "callout", tone: "forward", label: "自由度とのつながり", text: "n−1は追加の規則ではなく、X̄を推定したことで生じる一つの線形制約です。制約後に残る独立情報としての自由度が、標本分散に現れています。", related: ["02/degrees-of-freedom"] },
  { type: "heading", text: "標本サイズは標準誤差にどう影響するか？" },
  { type: "paragraph", text: "標準誤差は√nに反比例するため、標本サイズを増やすほど標本平均の分布は集中しますが、改善は線形ではありません。標準誤差を半分にするには標本サイズを4倍にします。" },
  { type: "formula", latex: "\\operatorname{SE}(\\bar X)\\propto\\frac{1}{\\sqrt n}", fallback: "SE(X̄)∝1/√n" },
  { type: "callout", tone: "forward", label: "なぜ後で標本分布が必要か？", text: "信頼区間、p値、臨界値には、反復抽出で統計量がどう分布するかという知識が必要です。Z、t、χ²、F検定はいずれも、仮説下の統計量の標本分布を作り、観察結果がそのどこに位置するかを判断します。" },
];
