export const survivalCurveJa = [
  { type: "paragraph", text: "生存時間解析は、死亡、再発、回復など事前に定義した事象までの時間を扱います。追跡終了まで事象が起きない右打ち切りを情報として残しながら、生存関数を推定する代表的方法がKaplan–Meier法です。" },
  { type: "heading", text: "母生存関数と標本生存曲線" },
  { type: "formulaGroup", formulas: [
    { label: "母生存関数", latex: "S(t)=P(T>t)=1-F(t)", fallback: "S(t)=P(T>t)=1−F(t)" },
    { label: "打ち切りなしの標本比率", latex: "\\hat S(t)=\\frac{\\#\\{T_i>t\\}}n", fallback: "Ŝ(t)=tを超えた人数/n" }
  ] },
  { type: "paragraph", text: "S(t)は起点からtを超えて事象なしでいる確率です。0から始まり、時間とともに増えない関数です。打ち切りがあると単純な人数比では追跡時間の違いを正しく扱えません。" },
  { type: "heading", text: "事象、右打ち切り、時間起点" },
  { type: "list", items: ["全対象に一貫した時間起点を定義", "何を事象とするかを事前定義", "事象時刻と最終確認時刻を区別", "追跡終了・脱落・研究終了で事象未確認なら右打ち切り", "事象指標の符号化を明示"] },
  { type: "callout", tone: "intuition", label: "打ち切りは事象ではない", text: "打ち切り対象はその時点までは事象なく生存した情報を提供し、その後は危険集合から外れます。曲線を下げるのは事象だけです。" },
  { type: "heading", text: "Kaplan–Meierが区間確率を掛ける理由" },
  { type: "paragraph", text: "異なる事象時刻をt₁<t₂<…とし、直前の危険集合をnⱼ、同時刻の事象数をdⱼとします。各時刻までの生存は、それ以前まで生存した条件付き確率の積です。" },
  { type: "formulaGroup", formulas: [
    { label: "条件付き生存割合", latex: "P(T>t_j\\mid T\\ge t_j)=\\frac{n_j-d_j}{n_j}", fallback: "(nⱼ−dⱼ)/nⱼ" },
    { label: "積極限推定量", latex: "\\hat S(t)=\\prod_{t_j\\le t}\\left(\\frac{n_j-d_j}{n_j}\\right)", fallback: "Ŝ(t)=Π[(nⱼ−dⱼ)/nⱼ]" }
  ] },
  { type: "paragraph", text: "曲線は事象時刻で階段状に下降し、打ち切り時刻では高さを保ちます。同時事象はdⱼとして一度に処理します。" },
  { type: "heading", text: "10人の例を段階的に計算する" },
  { type: "table", rows: [["時刻", "危険数nⱼ", "事象dⱼ", "条件付き生存", "Ŝ(t)"], ["2", "10", "1", "9/10", "0.900"], ["6", "9", "1", "8/9", "0.800"], ["7", "8", "2", "6/8", "0.600"], ["8", "5", "1", "4/5", "0.480"], ["9", "4", "1", "3/4", "0.360"], ["12", "2", "1", "1/2", "0.180"]] },
  { type: "formulaGroup", formulas: [
    { label: "t=7", latex: "\\hat S(7)=\\frac9{10}\\frac8{9}\\frac6{8}=0.600", fallback: "Ŝ(7)=0.600" },
    { label: "t=12", latex: "\\hat S(12)=0.360\\times\\frac12=0.180", fallback: "Ŝ(12)=0.180" }
  ] },
  { type: "heading", text: "Greenwood公式：生存率の不確実性" },
  { type: "formulaGroup", formulas: [
    { label: "分散", latex: "\\widehat{\\operatorname{Var}}[\\hat S(t)]=\\hat S(t)^2\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}", fallback: "Var[Ŝ]=Ŝ²Σdⱼ/[nⱼ(nⱼ−dⱼ)]" },
    { label: "標準誤差", latex: "SE[\\hat S(t)]=\\hat S(t)\\sqrt{\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}}", fallback: "SE[Ŝ]=Ŝ√Σdⱼ/[nⱼ(nⱼ−dⱼ)]" }
  ] },
  { type: "paragraph", text: "後半ほど危険集合が小さくなり、一事象の寄与と不確実性が大きくなります。曲線末尾は少人数で支えられるため過度に解釈しません。" },
  { type: "heading", text: "Wald区間とlog–log区間" },
  { type: "formula", latex: "\\hat S(t)\\pm z_{1-\\alpha/2}SE[\\hat S(t)]", fallback: "Ŝ±zSE" },
  { type: "paragraph", text: "通常のWald区間は0未満や1超になり得ます。切り詰める方法は簡単ですが被覆が良くないため、確率範囲を自然に保つlog–log変換がよく使われます。" },
  { type: "formulaGroup", formulas: [
    { label: "変換", latex: "g(t)=\\ln[-\\ln\\hat S(t)]", fallback: "g=ln[−lnŜ]" },
    { label: "変換後SE", latex: "SE[g(t)]=\\sqrt{\\frac1{[\\ln\\hat S(t)]^2}\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}}", fallback: "SE(g)" },
    { label: "元尺度の区間", latex: "\\hat S(t)^{\\exp[zSE(g)]}<S(t)<\\hat S(t)^{\\exp[-zSE(g)]}", fallback: "log–log CI" }
  ] },
  { type: "callout", tone: "intuition", label: "下限に正符号が付く理由", text: "0<Ŝ<1では指数が大きいほど累乗値は小さくなります。そのためexp(+zSE)が生存率の下限、exp(−zSE)が上限になります。" },
  { type: "heading", text: "ハザード関数との関係" },
  { type: "paragraph", text: "生存関数はtまで事象なしの確率、ハザードh(t)はtまで生存した個体が直後に事象を起こす瞬間率です。ハザードは確率そのものではありません。" },
  { type: "formulaGroup", formulas: [
    { label: "ハザード", latex: "h(t)=\\lim_{\\Delta t\\to0}\\frac{P(t\\le T<t+\\Delta t\\mid T\\ge t)}{\\Delta t}", fallback: "条件付き瞬間率" },
    { label: "密度との関係", latex: "h(t)=\\frac{f(t)}{S(t)}=-\\frac{S'(t)}{S(t)}", fallback: "h=f/S=−S′/S" },
    { label: "累積ハザード", latex: "H(t)=\\int_0^t h(u)du=-\\ln S(t)", fallback: "H(t)=−lnS(t)" },
    { label: "逆関係", latex: "S(t)=e^{-H(t)}", fallback: "S=e^(−H)" }
  ] },
  { type: "heading", text: "Kaplan–Meier推定前の確認" },
  { type: "list", ordered: true, items: ["起点、事象、最終追跡時刻を統一", "事象指標と右打ち切りを正しく区別", "対象間の独立性を確認", "打ち切りが条件付きで非情報的か検討", "危険集合数、事象数、打ち切り印、Ŝ(t)、信頼区間を報告", "末尾の少数データを過度に解釈しない"] },
];

export const comparingSurvivalCurvesJa = [
  { type: "paragraph", text: "log-rank検定は二群以上の生存曲線全体を比較します。各事象時刻で、帰無仮説の下で期待される群別事象数と観察事象数の差を累積します。" },
  { type: "heading", text: "仮説" },
  { type: "formulaGroup", formulas: [
    { label: "帰無仮説", latex: "H_0:S_1(t)=S_2(t)\\quad\\text{for every }t", fallback: "全時点でS₁=S₂" },
    { label: "対立仮説", latex: "H_1:S_1(t)\\ne S_2(t)\\quad\\text{for at least one }t", fallback: "少なくとも一時点で異なる" }
  ] },
  { type: "callout", tone: "intuition", label: "曲線の一点ではなく全追跡を比較", text: "特定時点の生存率差ではなく、各事象時刻の群差を危険集合に応じて積み上げます。まずKaplan–Meier曲線とnumber at riskを併記します。" },
  { type: "heading", text: "H₀下で事象をどう配分するか" },
  { type: "formulaGroup", formulas: [
    { label: "合併危険集合", latex: "n_j=n_{Aj}+n_{Bj}", fallback: "nⱼ=nAj+nBj" },
    { label: "合併事象数", latex: "d_j=d_{Aj}+d_{Bj}", fallback: "dⱼ=dAj+dBj" },
    { label: "A群の期待事象数", latex: "e_{Aj}=d_j\\frac{n_{Aj}}{n_j}", fallback: "eAj=dⱼnAj/nⱼ" },
    { label: "観察−期待", latex: "u_j=d_{Aj}-e_{Aj}", fallback: "uⱼ=dAj−eAj" }
  ] },
  { type: "paragraph", text: "H₀では同じ時刻の危険集合内で群による事象率差がないため、合併事象dⱼを各群の危険集合割合で配分します。" },
  { type: "heading", text: "超幾何分布と分散" },
  { type: "formulaGroup", formulas: [
    { label: "条件付き分布", latex: "D_{Aj}\\mid n_{Aj},n_{Bj},d_j,H_0\\sim\\operatorname{Hypergeometric}(n_j,n_{Aj},d_j)", fallback: "DAj~Hypergeometric" },
    { label: "確率", latex: "P(D_{Aj}=x)=\\frac{\\binom{n_{Aj}}x\\binom{n_{Bj}}{d_j-x}}{\\binom{n_j}{d_j}}", fallback: "超幾何確率" },
    { label: "分散", latex: "v_j=d_j\\frac{n_{Aj}}{n_j}\\frac{n_{Bj}}{n_j}\\frac{n_j-d_j}{n_j-1}", fallback: "vⱼ=dⱼ(nAj/nⱼ)(nBj/nⱼ)(nⱼ−dⱼ)/(nⱼ−1)" }
  ] },
  { type: "paragraph", text: "有限母集団補正(nⱼ−dⱼ)/(nⱼ−1)は、同じ時刻の総事象数dⱼが固定されていることを反映します。" },
  { type: "heading", text: "全事象時刻を累積する" },
  { type: "formulaGroup", formulas: [
    { label: "log-rankスコア", latex: "U_L=\\sum_j(d_{Aj}-e_{Aj})", fallback: "UL=Σ(O−E)" },
    { label: "H₀下の平均", latex: "E(U_L\\mid H_0)=0", fallback: "E(UL)=0" },
    { label: "累積分散", latex: "\\operatorname{Var}(U_L\\mid H_0)=\\sum_jv_j", fallback: "Var(UL)=Σvⱼ" },
    { label: "標準化", latex: "Z=\\frac{U_L}{\\sqrt{\\sum_jv_j}}\\approx N(0,1)", fallback: "Z=UL/√Σvⱼ" }
  ] },
  { type: "paragraph", text: "事象がある時刻だけ比較行を作ります。打ち切りだけの時刻はO−Eを生みませんが、以後の危険集合から対象を除くため計算に影響します。" },
  { type: "heading", text: "Z、カイ二乗、p値" },
  { type: "formulaGroup", formulas: [
    { label: "例の累積値", latex: "U_L=6.572,\\quad\\operatorname{Var}(U_L)=7.884", fallback: "UL=6.572; Var=7.884" },
    { label: "Z", latex: "z=\\frac{6.572}{\\sqrt{7.884}}=2.341", fallback: "z=2.341" },
    { label: "等価な統計量", latex: "\\chi^2=z^2=5.479,\\quad df=1", fallback: "χ²=5.479, df=1" },
    { label: "両側p値", latex: "p\\approx0.019", fallback: "p≈0.019" }
  ] },
  { type: "paragraph", text: "二群では独立な比較方向が一つなのでZ²はχ²₁に近似します。正のULはA群の観察事象がH₀期待より多い方向を示しますが、臨床的大きさは時点別生存率やhazard ratioと信頼区間で示します。" },
  { type: "heading", text: "連続性補正" },
  { type: "formula", latex: "z_{cc}=\\frac{|U_L|-0.5}{sd(U_L)}", fallback: "zcc=(|UL|−0.5)/sd" },
  { type: "paragraph", text: "補正はより保守的ですが、現代の生存解析ソフトは通常未補正log-rank χ²を報告します。使用版を明記し混在させません。" },
  { type: "heading", text: "判読の限界" },
  { type: "list", items: ["群間対象が独立し、起点・事象・打ち切り定義が一致", "打ち切りが概ね非情報的", "検定は曲線全体の差で、全時点差を意味しない", "比例ハザードに近いと通常高い検出力", "曲線交差では早期と晩期の差が相殺され得る", "尾部はnumber at riskが少なく不安定"] },
  { type: "callout", tone: "forward", label: "Cox回帰との関係", text: "二群log-rank検定は群指標だけを入れたCox比例ハザードモデルのscore検定とみなせます。Coxモデルならhazard ratioを推定し、他の共変量も調整できます。" },
];
