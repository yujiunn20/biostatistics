export const chiSquareIndependenceJa = [
  { type: "paragraph", text: "カイ二乗独立性検定は、一つの母集団で観察した二つのカテゴリー変数が独立かを分割表全体から評価します。観察度数と、独立なら期待される度数の差をPearsonカイ二乗統計量にまとめます。" },
  { type: "callout", tone: "forward", label: "適合度検定との違い", text: "適合度検定は一変数の分布を指定比率と比較します。独立性検定は二変数の関連を調べ、期待度数を観察された行・列の周辺度数から計算します。" },
  { type: "heading", text: "仮説" },
  { type: "formulaGroup", formulas: [
    { label: "帰無仮説", latex: "H_0:X\\text{ と }Y\\text{ は独立}", fallback: "H₀: XとYは独立" },
    { label: "対立仮説", latex: "H_1:X\\text{ と }Y\\text{ は独立でない}", fallback: "H₁: XとYは独立でない" },
    { label: "H₀の確率条件", latex: "P(X=i,Y=j)=P(X=i)P(Y=j)", fallback: "P(X=i,Y=j)=P(X=i)P(Y=j)" }
  ] },
  { type: "heading", text: "独立性から期待度数を導く" },
  { type: "formulaGroup", formulas: [
    { label: "第i行の周辺確率", latex: "\\widehat P(X=i)=\\frac{n_{i+}}N", fallback: "P̂(X=i)=nᵢ₊/N" },
    { label: "第j列の周辺確率", latex: "\\widehat P(Y=j)=\\frac{n_{+j}}N", fallback: "P̂(Y=j)=n₊ⱼ/N" },
    { label: "独立時の同時確率", latex: "\\widehat P_{ij}=\\frac{n_{i+}}N\\frac{n_{+j}}N", fallback: "P̂ᵢⱼ=(nᵢ₊/N)(n₊ⱼ/N)" },
    { label: "期待度数", latex: "E_{ij}=N\\widehat P_{ij}=\\frac{n_{i+}n_{+j}}N", fallback: "Eᵢⱼ=nᵢ₊n₊ⱼ/N" }
  ] },
  { type: "callout", tone: "intuition", label: "期待度数は予測値ではない", text: "EᵢⱼはH₀と観察された周辺度数を条件にした理論上の度数です。独立性の基準表を作るための値で、将来観測の予測ではありません。" },
  { type: "heading", text: "2×2表の期待度数" },
  { type: "table", rows: [["セル", "観察度数", "独立時の期待度数"], ["A", "A", "(A+B)(A+C)/N"], ["B", "B", "(A+B)(B+D)/N"], ["C", "C", "(C+D)(A+C)/N"], ["D", "D", "(C+D)(B+D)/N"]] },
  { type: "heading", text: "Pearsonカイ二乗統計量" },
  { type: "formulaGroup", formulas: [
    { label: "Pearson残差", latex: "r_{ij}=\\frac{O_{ij}-E_{ij}}{\\sqrt{E_{ij}}}", fallback: "rᵢⱼ=(Oᵢⱼ−Eᵢⱼ)/√Eᵢⱼ" },
    { label: "統計量", latex: "\\chi^2=\\sum_{i=1}^{r}\\sum_{j=1}^{c}\\frac{(O_{ij}-E_{ij})^2}{E_{ij}}", fallback: "χ²=ΣᵢΣⱼ(Oᵢⱼ−Eᵢⱼ)²/Eᵢⱼ" }
  ] },
  { type: "paragraph", text: "各セルの差を期待度数で標準化し、符号を消すため二乗して加えます。χ²が大きいほど、独立モデルでは説明しにくい表です。どのセルが差に寄与したかは残差も併せて確認します。" },
  { type: "heading", text: "自由度" },
  { type: "formulaGroup", formulas: [
    { label: "制限のない同時分布", latex: "rc-1", fallback: "rc−1" },
    { label: "独立モデルの周辺母数", latex: "(r-1)+(c-1)", fallback: "(r−1)+(c−1)" },
    { label: "差としての自由度", latex: "df=(rc-1)-[(r-1)+(c-1)]=(r-1)(c-1)", fallback: "df=(r−1)(c−1)" }
  ] },
  { type: "heading", text: "2×2表の簡略式" },
  { type: "formula", latex: "\\chi^2_{df=1}=\\frac{N(AD-BC)^2}{(A+B)(C+D)(A+C)(B+D)}", fallback: "χ²(df=1)=N(AD−BC)²/[(A+B)(C+D)(A+C)(B+D)]" },
  { type: "paragraph", text: "2×2表では周辺度数が決まると一セルだけが自由です。Aの偏差を通分すると次の共通項が現れ、四セルのPearson項をまとめると簡略式になります。" },
  { type: "formulaGroup", formulas: [
    { label: "Aセルの偏差", latex: "A-E_A=\\frac{AN-(A+B)(A+C)}N=\\frac{AD-BC}{N}", fallback: "A−E_A=(AD−BC)/N" },
    { label: "対角セル", latex: "A-E_A=D-E_D=\\frac{AD-BC}{N}", fallback: "A−E_A=D−E_D=(AD−BC)/N" },
    { label: "非対角セル", latex: "B-E_B=C-E_C=-\\frac{AD-BC}{N}", fallback: "B−E_B=C−E_C=−(AD−BC)/N" }
  ] },
  { type: "formula", latex: "\\chi^2=\\frac{(AD-BC)^2}{N^2}\\left(\\frac1{E_A}+\\frac1{E_B}+\\frac1{E_C}+\\frac1{E_D}\\right)", fallback: "χ²=(AD−BC)²/N²×Σ1/E" },
  { type: "heading", text: "p値は右裾" },
  { type: "formula", latex: "p=P\\!\\left(\\chi^2_{df}\\geq\\chi^2_{\\mathrm{obs}}\\mid H_0\\right)", fallback: "p=P(χ²df≥χ²obs | H₀)" },
  { type: "paragraph", text: "χ²は非負で、H₀からのずれが大きいほど値が増えるため、方向にかかわらず右裾だけを使います。ただし有意になっても関連の方向や強さは分からないので、セル割合、残差、ORやRRも報告します。" },
  { type: "heading", text: "近似条件と方法の選択" },
  { type: "list", items: ["各観測は一つのセルだけに入り、観測単位が独立している", "期待度数が極端に小さくないことを確認する。基準は固定的な絶対法則ではない", "小標本の2×2表ではFisher正確検定を検討する", "2×2表で近似を保守的にしたい場合はYates補正も候補だが、過度に保守的になり得る", "対応のある二値データには独立性検定ではなくMcNemar検定を使う"] },
  { type: "callout", tone: "warning", label: "独立な個体と独立な変数は別概念", text: "検定条件としての観測単位の独立性と、H₀が主張する二変数間の独立性を混同しません。前者が崩れると通常のχ²近似自体が妥当でなくなります。" },
];

export const yatesCorrectionJa = [
  { type: "paragraph", text: "Yatesの連続性補正は、2×2表の離散的な度数を連続なカイ二乗分布で近似するとき、差を0.5だけ縮める補正です。小標本で未補正Pearson検定が有意になり過ぎるのを抑える目的があります。" },
  { type: "heading", text: "0.5はどこから来るか" },
  { type: "formulaGroup", formulas: [
    { label: "離散事象", latex: "P(X\\geq8)", fallback: "P(X≥8)" },
    { label: "連続近似", latex: "P(X\\geq8)\\approx P(Y\\geq7.5)", fallback: "P(X≥8)≈P(Y≥7.5)" },
    { label: "境界の移動", latex: "8-7.5=0.5", fallback: "8−7.5=0.5" }
  ] },
  { type: "paragraph", text: "整数8を中心とする区間は7.5～8.5なので、連続分布で8以上を近似すると境界を7.5へ動かします。この半単位が連続性補正です。" },
  { type: "heading", text: "Pearson統計量からYates補正へ" },
  { type: "formulaGroup", formulas: [
    { label: "未補正Pearson", latex: "\\chi_P^2=\\sum\\frac{(O-E)^2}{E}", fallback: "χ²P=Σ(O−E)²/E" },
    { label: "Yates補正", latex: "\\chi_Y^2=\\sum\\frac{\\left(|O-E|-0.5\\right)^2}{E}", fallback: "χ²Y=Σ(|O−E|−0.5)²/E" }
  ] },
  { type: "callout", tone: "intuition", label: "絶対値を取る理由", text: "観察値が期待値より上でも下でも、差の大きさを0.5だけ0へ近づけるためです。符号を残したまま0.5を引くと、負の偏差を逆に大きくしてしまいます。" },
  { type: "heading", text: "2×2表の簡略式" },
  { type: "formula", latex: "\\chi_Y^2=\\frac{N\\left(|AD-BC|-N/2\\right)^2}{(A+B)(C+D)(A+C)(B+D)}", fallback: "χ²Y=N(|AD−BC|−N/2)²/[(A+B)(C+D)(A+C)(B+D)]" },
  { type: "table", rows: [["方法", "簡略式の分子"], ["未補正Pearson", "(AD−BC)²"], ["Yates補正", "(|AD−BC|−N/2)²"]] },
  { type: "formula", latex: "\\chi_Y^2\\leq\\chi_P^2\\quad\\Longrightarrow\\quad p_Y\\geq p_P", fallback: "χ²Y≤χ²P、したがって通常pY≥pP" },
  { type: "heading", text: "『期待度数5未満』の読み方" },
  { type: "paragraph", text: "判断対象は観察度数OではなくH₀下の期待度数Eです。ただし『一セルでもE<5なら必ずYates』という機械的規則ではありません。表全体の期待度数、標本計画、推論目的、利用可能な正確法を考えます。" },
  { type: "heading", text: "長所と限界" },
  { type: "table", rows: [["長所", "限界"], ["離散分布を連続分布で近似する誤差を抑える", "しばしば過度に保守的で検出力を下げる"], ["計算が簡単で従来から広く使われる", "正確検定そのものではない"], ["未補正Pearsonより偽陽性を抑えやすい", "標本が十分なら補正の必要性は小さい"]] },
  { type: "callout", tone: "forward", label: "実務上の選択", text: "小標本2×2表ではFisher正確検定が自然な選択になることが多く、十分な標本では未補正Pearson検定が一般的です。Yates補正を使った場合は方法名を明記します。" },
];

export const fishersExactTestJa = [
  { type: "paragraph", text: "Fisherの正確確率検定は、2×2表の行・列の周辺度数を固定した条件下で、帰無仮説に適合する各表の確率を超幾何分布から直接計算します。大標本近似に依存しないため、小標本や期待度数が小さい場合に重要です。" },
  { type: "heading", text: "周辺度数を固定すると一セルだけが自由" },
  { type: "formulaGroup", formulas: [
    { label: "周辺度数", latex: "R_1=a+b,\\quad R_2=c+d,\\quad C_1=a+c,\\quad C_2=b+d", fallback: "R₁=a+b、R₂=c+d、C₁=a+c、C₂=b+d" },
    { label: "aから他セルを決定", latex: "b=R_1-a,\\quad c=C_1-a,\\quad d=R_2-C_1+a", fallback: "b=R₁−a、c=C₁−a、d=R₂−C₁+a" },
    { label: "aの最小値", latex: "a_{\\min}=\\max(0,R_1-C_2)", fallback: "a_min=max(0,R₁−C₂)" },
    { label: "aの最大値", latex: "a_{\\max}=\\min(R_1,C_1)", fallback: "a_max=min(R₁,C₁)" }
  ] },
  { type: "heading", text: "観察された表の正確確率" },
  { type: "formulaGroup", formulas: [
    { label: "超幾何確率", latex: "P(A=a\\mid R_1,R_2,C_1,C_2)=\\frac{\\binom{C_1}{a}\\binom{C_2}{R_1-a}}{\\binom{N}{R_1}}", fallback: "P(A=a|margins)=C(C₁,a)C(C₂,R₁−a)/C(N,R₁)" },
    { label: "階乗表示", latex: "P(a,b,c,d)=\\frac{R_1!R_2!C_1!C_2!}{a!b!c!d!N!}", fallback: "P=R₁!R₂!C₁!C₂!/(a!b!c!d!N!)" }
  ] },
  { type: "paragraph", text: "N個のうち第1行へ入るR₁個の選び方が分母です。第1列からa個、第2列からR₁−a個を選ぶ組合せが分子になり、周辺度数を保つ表の確率が得られます。" },
  { type: "formula", latex: "\\frac{\\binom{C_1}{a}\\binom{C_2}{b}}{\\binom{N}{R_1}}=\\frac{R_1!R_2!C_1!C_2!}{a!b!c!d!N!}", fallback: "組合せ表示=階乗表示" },
  { type: "heading", text: "片側p値" },
  { type: "formulaGroup", formulas: [
    { label: "右側", latex: "p_{\\mathrm{right}}=\\sum_{a\\geq a_{\\mathrm{obs}}}P(A=a\\mid\\text{margins})", fallback: "p_right=Σ(a≥a_obs)P(A=a|margins)" },
    { label: "左側", latex: "p_{\\mathrm{left}}=\\sum_{a\\leq a_{\\mathrm{obs}}}P(A=a\\mid\\text{margins})", fallback: "p_left=Σ(a≤a_obs)P(A=a|margins)" }
  ] },
  { type: "paragraph", text: "どちらの尾が対立仮説を支持するかは、行・列の配置と事前に定めた効果方向で決まります。データを見てから小さい方の片側p値を選びません。" },
  { type: "heading", text: "両側p値" },
  { type: "formula", latex: "p_{\\mathrm{two\\text{-}sided}}=\\sum_{T:\\,P(T)\\leq P(T_{\\mathrm{obs}})}P(T)", fallback: "p_two-sided=Σ{P(T)≤P(T_obs)の全表}P(T)" },
  { type: "callout", tone: "warning", label: "両側p値は通常2×片側ではない", text: "超幾何分布は離散的で非対称になり得ます。代表的定義では、観察表以下の確率を持つすべての表を合計します。ソフトウェアによりtwo-sided、central、mid-pなどの定義が異なるため確認が必要です。" },
  { type: "heading", text: "全表を列挙する手順" },
  { type: "list", ordered: true, items: ["観察表からR₁、R₂、C₁、C₂、Nを計算", "a_minからa_maxまで可能なaを列挙", "各aについてb、c、dと超幾何確率を計算", "対立仮説に応じて片側または両側の極端な表を定義", "該当する確率を合計してp値を得る"] },
  { type: "heading", text: "Pearson、Yates、Fisherの比較" },
  { type: "table", rows: [["方法", "統計的基礎", "近似", "典型的用途"], ["Pearson χ²", "Σ(O−E)²/E", "カイ二乗近似", "十分な期待度数"], ["Yates χ²", "Σ(|O−E|−0.5)²/E", "補正したカイ二乗近似", "小さめの2×2表、保守的推論"], ["Fisher正確", "条件付き超幾何分布", "不要", "小標本・疎な2×2表"]] },
  { type: "paragraph", text: "Fisher検定のp値が正確でも、効果推定に不確実性がないわけではありません。ORと適切な信頼区間、セル度数を併記し、条件付き推論であることを理解して報告します。" },
];

export const mcnemarsTestJa = [
  { type: "paragraph", text: "McNemar検定は、同じ対象の前後測定やマッチしたペアなど、対応のある二値データで周辺比率が等しいかを検定します。通常の2×2独立性検定と異なり、情報を持つのは結果が変化した不一致ペアだけです。" },
  { type: "heading", text: "対応のある2×2表" },
  { type: "table", rows: [["測定1＼測定2", "陽性", "陰性"], ["陽性", "a：陽性→陽性", "b：陽性→陰性"], ["陰性", "c：陰性→陽性", "d：陰性→陰性"]] },
  { type: "paragraph", text: "aとdは変化していない一致ペアです。bとcは互いに反対方向へ変化した不一致ペアで、H₀はこの二方向が同程度に起こると主張します。" },
  { type: "heading", text: "仮説と条件付き二項分布" },
  { type: "formulaGroup", formulas: [
    { label: "帰無仮説", latex: "H_0:P_b=P_c", fallback: "H₀: P_b=P_c" },
    { label: "対立仮説", latex: "H_1:P_b\\ne P_c", fallback: "H₁: P_b≠P_c" },
    { label: "不一致ペアに限定", latex: "H_0:\\pi=P(b\\mid b\\text{ または }c)=\\frac12", fallback: "H₀: π=P(b|bまたはc)=1/2" },
    { label: "不一致ペア総数", latex: "n=b+c", fallback: "n=b+c" },
    { label: "H₀下の分布", latex: "B\\mid(B+C=n)\\sim\\operatorname{Binomial}\\left(n,\\frac12\\right)", fallback: "B|(B+C=n)~Binomial(n,1/2)" }
  ] },
  { type: "callout", tone: "intuition", label: "なぜaとdを使わないのか", text: "aとdは二時点で同じ結果なので、陽性→陰性と陰性→陽性の非対称性を区別する情報を持ちません。標本数が大きくてもb+cが小さければ近似は不安定です。" },
  { type: "heading", text: "Z統計量の導出" },
  { type: "formulaGroup", formulas: [
    { label: "H₀下の平均と分散", latex: "E(B)=\\frac n2,\\qquad\\operatorname{Var}(B)=\\frac n4", fallback: "E(B)=n/2、Var(B)=n/4" },
    { label: "標準化", latex: "Z=\\frac{b-n/2}{\\sqrt{n/4}}", fallback: "Z=(b−n/2)/√(n/4)" },
    { label: "n=b+cを代入", latex: "Z=\\frac{b-(b+c)/2}{\\sqrt{(b+c)/4}}", fallback: "Z={b−(b+c)/2}/√[(b+c)/4]" },
    { label: "簡略化", latex: "Z=\\frac{b-c}{\\sqrt{b+c}}", fallback: "Z=(b−c)/√(b+c)" }
  ] },
  { type: "heading", text: "McNemarカイ二乗統計量" },
  { type: "formula", latex: "\\chi_M^2=Z^2=\\frac{(b-c)^2}{b+c},\\qquad df=1", fallback: "χ²M=(b−c)²/(b+c)、df=1" },
  { type: "paragraph", text: "両側検定ではZを二乗したχ²を使えます。bとcの差が不一致ペア総数に比べて大きいほど、周辺比率が等しいというH₀に反します。" },
  { type: "heading", text: "正確McNemar検定" },
  { type: "formula", latex: "p_{\\mathrm{exact}}=2\\min\\left\\{P(B\\leq b_{\\mathrm{obs}}),\\ P(B\\geq b_{\\mathrm{obs}})\\right\\}\\quad\\text{（上限1）}", fallback: "p_exact=2×小さい方の二項尾確率、最大1" },
  { type: "paragraph", text: "b+cが小さい場合はB~Binomial(b+c,1/2)を直接用います。離散分布なので両側p値の定義やmid-pを使うかを明記します。" },
  { type: "heading", text: "連続性補正" },
  { type: "formulaGroup", formulas: [
    { label: "補正Z", latex: "Z_Y=\\frac{|b-c|-1}{\\sqrt{b+c}}", fallback: "ZY=(|b−c|−1)/√(b+c)" },
    { label: "補正McNemar統計量", latex: "\\chi_{M,Y}^2=\\frac{\\left(|b-c|-1\\right)^2}{b+c}", fallback: "χ²M,Y=(|b−c|−1)²/(b+c)" }
  ] },
  { type: "paragraph", text: "bの二項尺度で0.5を引くと、b−cの差の尺度では1を引く形になります。補正はより保守的ですが、小さい不一致数では正確二項法の方が直接的です。" },
  { type: "heading", text: "独立性検定との違い" },
  { type: "table", rows: [["項目", "Pearson独立性検定", "McNemar検定"], ["データ", "独立した個体の二変数", "対応・反復測定された二値結果"], ["H₀", "二変数が独立", "二方向の変化確率／周辺比率が等しい"], ["使うセル", "全セル", "不一致セルb、c"], ["大標本統計量", "Σ(O−E)²/E", "(b−c)²/(b+c)"] ] },
  { type: "callout", tone: "warning", label: "ペアを無視しない", text: "同じ対象の前後データを独立な二群として検定すると、対応構造と個人内相関を無視します。逆に、独立二群へMcNemar検定を使うこともできません。" },
  { type: "heading", text: "実施と報告の手順" },
  { type: "list", ordered: true, items: ["ペアの定義と二値結果の符号化を確認", "a、b、c、dを作り、特に不一致数b+cを確認", "H₀、両側／片側、αを事前設定", "不一致数が十分なら未補正または補正χ²、小さければ正確二項法を選択", "bとc、各時点の比率、変化量、p値、使用法を報告", "欠測やペア脱落が結果へ与える影響を検討"] },
];
