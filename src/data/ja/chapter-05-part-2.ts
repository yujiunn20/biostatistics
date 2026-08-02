export const contingencyTableJa = [
  { type: "paragraph", text: "分割表（クロス集計表）は、二つ以上のカテゴリー変数を同時に整理します。特に2×2表は、独立性検定だけでなく、オッズ比（OR）と相対リスク（RR）を通じて関連の方向と大きさを数量化する基本形です。" },
  { type: "callout", tone: "forward", label: "この頁の中心", text: "表の配置と研究デザインを確認し、セル度数と周辺度数を読む→独立性を考える→研究デザインに合う効果量ORまたはRRを選ぶ→対数尺度で標準誤差と信頼区間を求めます。" },
  { type: "heading", text: "2×2分割表の構造" },
  { type: "table", rows: [["", "結果あり Y=1", "結果なし Y=0", "合計"], ["曝露あり X=1", "A", "B", "A+B"], ["曝露なし X=0", "C", "D", "C+D"], ["合計", "A+C", "B+D", "N"]] },
  { type: "paragraph", text: "A～Dは同時条件を満たすセル度数、行・列の合計は周辺度数です。どちらを行、どちらを列に置くか自体は任意ですが、効果量の分子・分母と解釈は配置に依存するため、定義を明記します。" },
  { type: "heading", text: "同時確率、条件付き確率、独立" },
  { type: "formulaGroup", formulas: [
    { label: "条件付き確率が等しい", latex: "P(Y=1\\mid X=1)=P(Y=1\\mid X=0)=P_Y", fallback: "P(Y=1|X=1)=P(Y=1|X=0)=P_Y" },
    { label: "独立性の定義", latex: "P(X=i,Y=j)=P(X=i)P(Y=j)", fallback: "P(X=i,Y=j)=P(X=i)P(Y=j)" }
  ] },
  { type: "callout", tone: "intuition", label: "関連は因果を意味しない", text: "分割表が示すのは変数間の統計的関連です。交絡、選択、測定誤差、時間順序を考慮しなければ、因果効果とは解釈できません。" },
  { type: "heading", text: "研究デザインが読み方を決める" },
  { type: "table", rows: [["デザイン", "標本抽出の基準", "直接推定しやすい量"], ["コホート／無作為化試験", "曝露・介入群から追跡", "リスク、RR、リスク差、OR"], ["症例対照研究", "結果の有無から抽出", "OR（一般にリスクやRRは直接推定不可）"], ["横断研究", "一時点で曝露と結果を測定", "有病割合、prevalence ratio／OR"]] },
  { type: "paragraph", text: "同じ四つの数でも、どの母集団から誰を抽出したかで分母の意味が変わります。計算式より先に研究デザインを確認します。" },
  { type: "heading", text: "オッズとオッズ比" },
  { type: "formulaGroup", formulas: [
    { label: "確率pのオッズ", latex: "\\operatorname{odds}=\\frac{p}{1-p}", fallback: "odds=p/(1−p)" },
    { label: "曝露群と非曝露群のオッズ比", latex: "OR=\\frac{A/B}{C/D}=\\frac{AD}{BC}", fallback: "OR=(A/B)/(C/D)=AD/(BC)" }
  ] },
  { type: "paragraph", text: "OR=1は関連なし、OR>1は曝露群の結果オッズが高く、OR<1は低いことを表します。たとえばOR=2は確率が2倍ではなく、オッズが2倍です。" },
  { type: "heading", text: "ORを対数尺度で推測する" },
  { type: "formulaGroup", formulas: [
    { label: "対数オッズ比", latex: "\\log(OR)=\\log A+\\log D-\\log B-\\log C", fallback: "ln(OR)=ln A+ln D−ln B−ln C" },
    { label: "近似分散", latex: "\\operatorname{Var}[\\log(OR)]\\approx\\frac1A+\\frac1B+\\frac1C+\\frac1D", fallback: "Var[ln(OR)]≈1/A+1/B+1/C+1/D" },
    { label: "標準誤差", latex: "SE[\\log(OR)]=\\sqrt{\\frac1A+\\frac1B+\\frac1C+\\frac1D}", fallback: "SE[ln(OR)]=√(1/A+1/B+1/C+1/D)" },
    { label: "検定統計量", latex: "Z=\\frac{\\log(OR)}{SE[\\log(OR)]}", fallback: "Z=ln(OR)/SE[ln(OR)]" }
  ] },
  { type: "formula", latex: "CI_{1-\\alpha}(OR)=\\exp\\left\\{\\log(OR)\\pm z_{1-\\alpha/2}SE[\\log(OR)]\\right\\}", fallback: "ORのCI=exp{ln(OR)±z·SE[ln(OR)]}" },
  { type: "callout", tone: "intuition", label: "なぜ対数を使うのか", text: "ORは0より大きく右に歪みますが、log(OR)は0を無関連の基準とする加法尺度になり、標本分布もより対称に近づきます。対数尺度で区間を作り、最後にexpで元へ戻します。" },
  { type: "heading", text: "リスクと相対リスク" },
  { type: "formulaGroup", formulas: [
    { label: "曝露群のリスク", latex: "R_1=\\frac{A}{A+B}", fallback: "R₁=A/(A+B)" },
    { label: "非曝露群のリスク", latex: "R_0=\\frac{C}{C+D}", fallback: "R₀=C/(C+D)" },
    { label: "相対リスク", latex: "RR=\\frac{R_1}{R_0}=\\frac{A/(A+B)}{C/(C+D)}", fallback: "RR=[A/(A+B)]/[C/(C+D)]" }
  ] },
  { type: "paragraph", text: "RR=1はリスクが等しく、RR=2は曝露群のリスクが2倍、RR=0.5は半分です。追跡期間と分母が定義できるコホート研究や試験で自然に解釈できます。" },
  { type: "heading", text: "RRを対数尺度で推測する" },
  { type: "formulaGroup", formulas: [
    { label: "対数相対リスクの近似分散", latex: "\\operatorname{Var}[\\log(RR)]\\approx\\left(\\frac1A-\\frac1{A+B}\\right)+\\left(\\frac1C-\\frac1{C+D}\\right)", fallback: "Var[ln(RR)]≈(1/A−1/(A+B))+(1/C−1/(C+D))" },
    { label: "標準誤差", latex: "SE[\\log(RR)]=\\sqrt{\\left(\\frac1A-\\frac1{A+B}\\right)+\\left(\\frac1C-\\frac1{C+D}\\right)}", fallback: "SE[ln(RR)]=√{(1/A−1/(A+B))+(1/C−1/(C+D))}" },
    { label: "検定統計量", latex: "Z=\\frac{\\log(RR)}{SE[\\log(RR)]}", fallback: "Z=ln(RR)/SE[ln(RR)]" }
  ] },
  { type: "formula", latex: "CI_{1-\\alpha}(RR)=\\exp\\left\\{\\log(RR)\\pm z_{1-\\alpha/2}SE[\\log(RR)]\\right\\}", fallback: "RRのCI=exp{ln(RR)±z·SE[ln(RR)]}" },
  { type: "heading", text: "ORとRRの違い" },
  { type: "table", rows: [["項目", "OR", "RR"], ["比較する量", "オッズ", "リスク（確率）"], ["無関連の値", "1", "1"], ["症例対照研究", "推定可能", "通常は直接推定不可"], ["稀な結果", "RRに近似", "直接的"], ["結果が稀でない場合", "1から離れる方向にRRより大きく見えやすい", "臨床解釈が比較的直感的"]] },
  { type: "formula", latex: "p\\approx0\\quad\\Longrightarrow\\quad\\frac{p}{1-p}\\approx p\\quad\\Longrightarrow\\quad OR\\approx RR", fallback: "p≈0ならp/(1−p)≈p、したがってOR≈RR" },
  { type: "callout", tone: "forward", label: "稀な疾患近似の条件", text: "結果が両比較群で十分稀なときだけORはRRに近づきます。『症例対照研究だからOR=RR』ではありません。" },
  { type: "heading", text: "対数分散式の背景：デルタ法" },
  { type: "paragraph", text: "非線形関数の分散は、推定値の近くで一次近似して求められます。これがOR・RRの対数標準誤差の基礎です。" },
  { type: "formula", latex: "\\operatorname{Var}[f(X)]\\approx[f'(\\mu)]^2\\operatorname{Var}(X)", fallback: "Var[f(X)]≈[f′(μ)]²Var(X)" },
  { type: "paragraph", text: "log(x)では導関数が1/xなので、計数の対数分散は概ね1/xになります。独立な対数セル度数を足し引きすると分散は加算され、log(OR)の1/A+1/B+1/C+1/Dが得られます。RRでは同じ行の分子と分母が共有されるため共分散を考慮し、−1/(A+B)と−1/(C+D)が現れます。" },
  { type: "heading", text: "ゼロセルと小標本" },
  { type: "paragraph", text: "いずれかのセルが0だと通常のORや対数標準誤差は無限または未定義になります。機械的な0.5加算は推定対象を変え得るため、正確法、条件付き推定、罰則付きロジスティック回帰などを目的に応じて検討し、採用法を明記します。" },
  { type: "heading", text: "実務での報告" },
  { type: "list", ordered: true, items: ["行・列の定義、対象集団、研究デザインを明示", "四セルと周辺度数を確認し、欠測の扱いを示す", "デザインと目的に合うOR、RR、必要ならリスク差を選択", "点推定と95%信頼区間を報告", "独立性検定のp値だけでなく効果の方向・大きさ・臨床的意味を説明", "小標本、ゼロセル、交絡、選択バイアスの限界を記載"] },
];
