export const welchAnovaJa = [
  { type: "paragraph", text: "Welch ANOVAは複数の独立群の母平均を比較しながら、各群の分散が等しいことを要求しません。標準偏差が異なり、特に標本数も不均衡な場合、従来の一元配置ANOVAより適しています。" },
  { type: "callout", tone: "intuition", label: "何を解決するのか", text: "従来法は全群の群内平方和を共通MSEへ合併するため等分散を仮定します。Welch法は共通MSEを作らず、各群自身の標本数と分散に応じた重みを使います。" },
  { type: "heading", text: "Welch ANOVAを検討する場面" },
  { type: "list", items: ["独立した二群以上の母平均を比較する", "目的変数が量的で平均に意味がある", "群分散が異なる、または等分散の根拠が乏しい", "標本数が不均衡で、特に高分散群の標本数が小さい"] },
  { type: "paragraph", text: "Welch法は非正規性への万能な代替ではありません。独立性は依然必要で、強い歪み、極端な外れ値、小標本では図形診断、変換、頑健法、研究課題に合うノンパラメトリック法も検討します。" },
  { type: "heading", text: "仮説と条件" },
  { type: "formulaGroup", formulas: [
    { label: "帰無仮説", latex: "H_0:\\mu_1=\\mu_2=\\cdots=\\mu_k", fallback: "H₀: μ₁=μ₂=⋯=μₖ" },
    { label: "対立仮説", latex: "H_1:\\text{すべての }\\mu_j\\text{ が等しいわけではない}", fallback: "H₁: すべてのμⱼが等しいわけではない" }
  ] },
  { type: "table", rows: [["条件", "Welch ANOVAの要件"], ["独立性", "各観測は独立で一群だけに属する"], ["目的変数", "平均に意味がある量的変数"], ["正規性", "各群の誤差が概ね正規。大標本では比較的頑健"], ["等分散性", "要求しない"]] },
  { type: "heading", text: "精確な群へ大きな重みを与える" },
  { type: "paragraph", text: "第j群平均の推定分散は概ねsⱼ²/nⱼです。標本数が多い、または標本分散が小さい群ほど平均推定が精確なので、逆分散に比例する大きな重みを与えます。" },
  { type: "formulaGroup", formulas: [
    { label: "第j群の重み", latex: "w_j=\\frac{n_j}{s_j^2}", fallback: "wⱼ=nⱼ/sⱼ²" },
    { label: "総重み", latex: "W=\\sum_{j=1}^{k}w_j", fallback: "W=Σwⱼ" },
    { label: "加重総平均", latex: "\\bar X_w=\\frac{\\sum_{j=1}^{k}w_j\\bar X_j}{W}", fallback: "X̄w=ΣwⱼX̄ⱼ/W" }
  ] },
  { type: "heading", text: "Welch F統計量" },
  { type: "paragraph", text: "各群平均と加重総平均の差を重み付けし、分散推定の不確実性を反映する補正量Aで分母と自由度を調整します。" },
  { type: "formulaGroup", formulas: [
    { label: "補正量", latex: "A=\\sum_{j=1}^{k}\\frac{(1-w_j/W)^2}{n_j-1}", fallback: "A=Σ[(1−wⱼ/W)²/(nⱼ−1)]" },
    { label: "Welch F", latex: "F_W=\\frac{\\dfrac1{k-1}\\sum_{j=1}^{k}w_j(\\bar X_j-\\bar X_w)^2}{1+\\dfrac{2(k-2)}{k^2-1}A}", fallback: "FW={Σwⱼ(X̄ⱼ−X̄w)²/(k−1)}/{1+[2(k−2)/(k²−1)]A}" },
    { label: "分子自由度", latex: "\\nu_1=k-1", fallback: "ν₁=k−1" },
    { label: "近似分母自由度", latex: "\\nu_2=\\frac{k^2-1}{3A}", fallback: "ν₂=(k²−1)/(3A)" }
  ] },
  { type: "paragraph", text: "F分布の右裾からp値を求めます。有意でも結論は少なくとも一群の平均が異なるというだけで、差の位置は分かりません。" },
  { type: "heading", text: "従来ANOVAとの比較" },
  { type: "table", rows: [["項目", "従来の一元配置ANOVA", "Welch ANOVA"], ["分散仮定", "全群で等しい", "異なってよい"], ["群内変動", "共通MSEへ合併", "nⱼ/sⱼ²で群別に重み付け"], ["自由度", "k−1、n−k", "k−1、Welch–Satterthwaite近似"], ["主な注意", "不等分散＋不均衡で歪み得る", "小標本、強い歪み、外れ値には依然注意"]] },
  { type: "callout", tone: "caution", label: "Levene検定だけで方法を切り替えない", text: "一つの予備検定にも抽出誤差があります。研究設計、群標本数、分布図、分散差、各方法の頑健性を合わせ、分析方針を事前に決めます。" },
  { type: "heading", text: "全体検定が有意になった後" },
  { type: "paragraph", text: "共通MSEを仮定するLSD、pooled t、通常のTukey HSDをそのまま使いません。全ペア比較には、不等分散と不均衡標本を許し多重性も調整するGames–Howell法がよく使われます。" },
  { type: "list", ordered: true, items: ["各群のn、平均、標準偏差、分布を報告", "Welch F、分子・近似分母自由度、p値を報告", "有意ならGames–Howellまたは計画済みの不等分散対比を実施", "平均差、信頼区間、調整p値を併記"] },
];

export const twoWayAndManovaJa = [
  { type: "paragraph", text: "二元配置ANOVAと多変量分散分析（MANOVA）は異なる方向の拡張です。二元配置ANOVAは一つの量的目的変数に対する二つのカテゴリー因子を扱い、MANOVAは関連する複数の量的目的変数を同時に扱います。" },
  { type: "callout", tone: "intuition", label: "名称を混同しない", text: "「二元」の二は説明変数が二つ、「多変量」の多は目的変数が複数という意味です。二因子かつ複数目的変数なら二元配置MANOVAになり得ます。" },
  { type: "heading", text: "二元配置ANOVA：二因子を同時に調べる" },
  { type: "paragraph", text: "治療法を因子A、性別を因子B、血圧を目的変数とすれば、Aの主効果、Bの主効果、A×B交互作用を同じモデル内で検定できます。" },
  { type: "table", rows: [["効果", "問う内容"], ["因子Aの主効果", "Bの水準で平均したとき、Aの水準間で平均が異なるか"], ["因子Bの主効果", "Aの水準で平均したとき、Bの水準間で平均が異なるか"], ["A×B交互作用", "Aの効果がBの水準によって変わるか"]] },
  { type: "heading", text: "二元配置ANOVAモデル" },
  { type: "formula", latex: "Y_{ijk}=\\mu+\\alpha_i+\\beta_j+(\\alpha\\beta)_{ij}+\\varepsilon_{ijk}", fallback: "Yᵢⱼₖ=μ+αᵢ+βⱼ+(αβ)ᵢⱼ+εᵢⱼₖ" },
  { type: "table", rows: [["記号", "意味"], ["μ", "全条件の総平均"], ["αᵢ", "因子Aの第i水準の効果"], ["βⱼ", "因子Bの第j水準の効果"], ["(αβ)ᵢⱼ", "水準組合せの交互作用"], ["εᵢⱼₖ", "モデルで説明されない誤差"]] },
  { type: "formulaGroup", formulas: [
    { label: "A主効果", latex: "H_{0,A}:\\alpha_1=\\cdots=\\alpha_a=0", fallback: "H₀,A: すべてのαᵢ=0" },
    { label: "B主効果", latex: "H_{0,B}:\\beta_1=\\cdots=\\beta_b=0", fallback: "H₀,B: すべてのβⱼ=0" },
    { label: "交互作用", latex: "H_{0,AB}:(\\alpha\\beta)_{ij}=0\\quad\\text{for all }i,j", fallback: "H₀,AB: すべての(αβ)ᵢⱼ=0" }
  ] },
  { type: "heading", text: "交互作用を先に見る理由" },
  { type: "paragraph", text: "交互作用が有意なら、一方の因子効果は他方の水準に依存します。たとえば薬剤が一方の性別でだけ有効なら、性別を平均した薬剤主効果だけではデータ構造を隠します。通常は交互作用を先に確認し、その後に主効果を解釈します。" },
  { type: "callout", tone: "intuition", label: "グラフでの直観", text: "一因子を横軸、他方の水準を線にすると、線がほぼ平行なら交互作用は小さく、明らかに非平行または交差すれば交互作用が示唆されます。有意性はモデル検定で判断します。" },
  { type: "paragraph", text: "有意な交互作用は、各性別内で治療法を比べるような単純主効果へ追跡します。これらの比較にも多重性調整が必要です。" },
  { type: "heading", text: "二元配置ANOVAの条件" },
  { type: "list", items: ["観測値が独立。反復測定なら反復測定法または混合モデルを使う", "各因子組合せ内の誤差が概ね正規", "各組合せで誤差分散が等しい", "交互作用を推定できる十分な観測が各セルにある"] },
  { type: "callout", tone: "caution", label: "不均衡設計", text: "セル標本数が異なるとType I・II・III平方和で主効果が異なり得ます。特に交互作用や欠損セルがある場合、ソフトウェア既定値だけに頼らず、研究仮説、対比、推定可能性を確認します。" },
  { type: "heading", text: "MANOVA：複数の目的変数を同時に調べる" },
  { type: "paragraph", text: "収縮期血圧、拡張期血圧、心拍数のように、同じ対象から関連する複数の量的結果を測る場合、MANOVAは各群の単一平均ではなく母平均ベクトルを比較します。" },
  { type: "formulaGroup", formulas: [
    { label: "第j群の平均ベクトル", latex: "\\boldsymbol{\\mu}_j=(\\mu_{j1},\\mu_{j2},\\ldots,\\mu_{jp})^{\\mathsf T}", fallback: "μⱼ=(μⱼ₁,…,μⱼₚ)ᵀ" },
    { label: "帰無仮説", latex: "H_0:\\boldsymbol{\\mu}_1=\\boldsymbol{\\mu}_2=\\cdots=\\boldsymbol{\\mu}_k", fallback: "H₀: 各群の平均ベクトルが等しい" }
  ] },
  { type: "paragraph", text: "目的変数ごとに別々のANOVAを行うと多重検定の第一種過誤が増え、結果の組合せとしての差も直接検定できません。MANOVAは目的変数間の共分散を利用します。" },
  { type: "heading", text: "MANOVAの検定の作り方" },
  { type: "paragraph", text: "単変量ANOVAの群間・群内平方和を、平方和・交差積行列H（効果）とE（誤差）へ拡張し、その固有値から多変量統計量を作ります。" },
  { type: "table", rows: [["統計量", "判読"], ["Pillai's trace", "仮定違反に比較的頑健。大きいほど群差が大きい"], ["Wilks' lambda", "小さいほど平均ベクトルの群差が大きい"], ["Hotelling–Lawley trace", "複数の判別方向の群間情報を累積"], ["Roy's largest root", "最大差を持つ一つの判別方向に注目"]] },
  { type: "callout", tone: "intuition", label: "MANOVAが有意という意味", text: "複数結果が作る全体プロファイルに群差があることを示しますが、どの目的変数、どの群、どの線形結合が原因かは後続分析が必要です。" },
  { type: "heading", text: "MANOVAの条件と限界" },
  { type: "list", items: ["観測値が独立", "各群の目的変数ベクトルが概ね多変量正規", "各群の共分散行列が等しい", "目的変数は関連するが、ほぼ重複するほど共線的ではない", "複数目的変数の共分散を推定できる十分な標本数がある"] },
  { type: "paragraph", text: "目的変数がほぼ無関係なら統合の利点が乏しく、相関が極端に高ければ同じ概念を重複測定している可能性があります。目的変数はデータを見た後ではなく研究課題から事前に選びます。" },
  { type: "heading", text: "有意なMANOVAの追跡" },
  { type: "list", ordered: true, items: ["どの因子または交互作用の多変量検定が有意か確認", "研究課題に沿って各目的変数のANOVAや計画対比を行い多重性を調整", "群平均ベクトル、信頼区間、効果量から方向と実質的意味を評価", "必要なら判別関数や正準変量を調べ、原尺度の目的変数へ戻して解釈"] },
  { type: "heading", text: "三つの方法を区別する" },
  { type: "table", rows: [["方法", "カテゴリー因子", "量的目的変数", "主な問い"], ["一元配置ANOVA", "1", "1", "一因子の群平均が異なるか"], ["二元配置ANOVA", "2", "1", "二つの主効果と交互作用があるか"], ["MANOVA", "1以上", "2以上", "群の平均ベクトルが異なるか"]] },
  { type: "callout", tone: "forward", label: "方法選択の順序", text: "因子数、量的目的変数数、独立か反復測定かを数え、最後に分散・共分散の仮定を評価します。方法名は研究課題とデータ構造から決めます。" },
];
