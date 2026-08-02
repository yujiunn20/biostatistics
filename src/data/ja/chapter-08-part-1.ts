export const wilcoxonTestsJa = [
  { type: "paragraph", text: "Wilcoxon系の順位検定は、原値の正規分布を仮定せず、符号または順位を使って位置の差を調べます。本頁では符号検定、独立二群のWilcoxon順位和（Mann–Whitney U）、一標本・対応データのWilcoxon符号付順位検定を区別します。" },
  { type: "table", rows: [["方法", "デザイン", "使う情報"], ["Sign test", "一標本または対応", "差の正負のみ"], ["Rank-sum / Mann–Whitney", "独立二群", "全観測の順位"], ["Signed-rank", "一標本または対応", "差の絶対値順位と符号"]] },
  { type: "heading", text: "符号検定：数値を正負へ変換する" },
  { type: "formulaGroup", formulas: [
    { label: "一標本差", latex: "D_i=X_i-M_0", fallback: "Dᵢ=Xᵢ−M₀" },
    { label: "対応差", latex: "D_i=X_{i,\\mathrm{after}}-X_{i,\\mathrm{before}}", fallback: "Dᵢ=after−before" },
    { label: "符号", latex: "Z_i=\\begin{cases}-1,&D_i<0\\\\0,&D_i=0\\\\1,&D_i>0\\end{cases}", fallback: "負、0、正へ分類" }
  ] },
  { type: "paragraph", text: "0差を除いた有効標本数をn、正差数をCとします。H₀では正負が等確率なのでCは二項分布に従います。" },
  { type: "formulaGroup", formulas: [
    { label: "両側仮説", latex: "H_0:p=\\frac12\\qquad H_1:p\\ne\\frac12", fallback: "H₀:p=1/2; H₁:p≠1/2" },
    { label: "帰無分布", latex: "C\\mid H_0\\sim\\operatorname{Binomial}\\left(n,\\frac12\\right)", fallback: "C~Binomial(n,1/2)" },
    { label: "平均と分散", latex: "E(C)=\\frac n2,\\quad\\operatorname{Var}(C)=\\frac n4", fallback: "E(C)=n/2; Var(C)=n/4" }
  ] },
  { type: "heading", text: "符号検定のp値と近似" },
  { type: "paragraph", text: "正確両側p値は、観察された偏りと同程度以上に極端な二項確率を両側で合計します。たとえばn=10、C=8なら次式です。" },
  { type: "formula", latex: "p=2P(C\\ge8)=2\\sum_{k=8}^{10}\\binom{10}{k}\\left(\\frac12\\right)^{10}", fallback: "p=2P(C≥8)" },
  { type: "formulaGroup", formulas: [
    { label: "大標本Z", latex: "Z=\\frac{C-n/2}{\\sqrt{n/4}}", fallback: "Z=(C−n/2)/√(n/4)" },
    { label: "両側棄却域", latex: "\\left|C-\\frac n2\\right|>z_{1-\\alpha/2}\\sqrt{\\frac n4}", fallback: "|C−n/2|>z√(n/4)" }
  ] },
  { type: "callout", tone: "caution", label: "頑健だが情報を捨てる", text: "符号検定は差の大きさを使わないため外れ値に強い反面、対称性が妥当ならsigned-rankより検出力が低くなりやすいです。" },
  { type: "heading", text: "順位和検定：独立二群を一緒に順位付けする" },
  { type: "list", ordered: true, items: ["二群のN=n+m観測を合併", "小さい順に1～Nを付け、同値は平均順位", "一方の群の順位を合計してWₛを得る", "群ラベル交換で同程度以上に極端な順位和の確率を求める"] },
  { type: "formula", latex: "W_s=\\sum_{i\\in\\mathrm{group\\ 1}}R_i", fallback: "Wₛ=第1群の順位和" },
  { type: "paragraph", text: "H₀では群ラベルが交換可能です。N順位からn個を第1群へ割り当てる全C(N,n)配置が等確率で、順位和wとなる配置数を数えれば正確分布が得られます。" },
  { type: "formula", latex: "P(W_s=w)=\\frac{\\#(w;n,m)}{\\binom{N}{n}}", fallback: "P(Wₛ=w)=該当配置数/C(N,n)" },
  { type: "heading", text: "順位和の平均、分散、正規近似" },
  { type: "formulaGroup", formulas: [
    { label: "帰無期待値", latex: "E(W_s)=\\frac12n(N+1)", fallback: "E(Wₛ)=n(N+1)/2" },
    { label: "同順位なしの分散", latex: "\\operatorname{Var}(W_s)=\\frac1{12}mn(N+1)", fallback: "Var(Wₛ)=mn(N+1)/12" },
    { label: "正規近似", latex: "Z=\\frac{W_s-E(W_s)}{\\sqrt{\\operatorname{Var}(W_s)}}", fallback: "Z=[Wₛ−E(Wₛ)]/√Var(Wₛ)" }
  ] },
  { type: "heading", text: "順位和の期待値と分散の由来" },
  { type: "paragraph", text: "各順位は全配置中C(N−1,n−1)回選ばれるため、選択割合n/Nと全順位和N(N+1)/2から期待値が得られます。" },
  { type: "formulaGroup", formulas: [
    { label: "期待値", latex: "E(W_s)=\\frac nN\\sum_{i=1}^{N}i=\\frac12n(N+1)", fallback: "E(Wₛ)=(n/N)Σi" },
    { label: "順位級数", latex: "\\sum i=\\frac{N(N+1)}2,\\quad\\sum i^2=\\frac{N(N+1)(2N+1)}6", fallback: "ΣiとΣi²" },
    { label: "分散の結論", latex: "\\operatorname{Var}(W_s)=\\frac1{12}n(N-n)(N+1)=\\frac1{12}nm(N+1)", fallback: "Var(Wₛ)=nm(N+1)/12" }
  ] },
  { type: "callout", tone: "warning", label: "何を検定するか", text: "一般のH₀は二群の分布が同じことです。分布形が同じで位置だけがずれる場合に限り、中央値または位置差として単純化できます。同順位には分散補正が必要です。" },
  { type: "heading", text: "符号付順位検定：方向と距離順位を使う" },
  { type: "list", ordered: true, items: ["差Dᵢを計算し0差を除く", "|Dᵢ|を小さい順に順位付けし同値は平均順位", "元の符号を順位へ戻す", "正順位和T⁺と負順位和T⁻を計算", "正確符号配置または補正済み正規近似でp値を求める"] },
  { type: "formulaGroup", formulas: [
    { label: "正順位和", latex: "T^+=\\sum_{D_i>0}R_i", fallback: "T⁺=正差の順位和" },
    { label: "負順位和", latex: "T^-=\\sum_{D_i<0}R_i", fallback: "T⁻=負差の順位和" },
    { label: "固定総和", latex: "T^++T^-=\\frac{n(n+1)}2", fallback: "T⁺+T⁻=n(n+1)/2" }
  ] },
  { type: "paragraph", text: "H₀では差分布が0を中心に対称で、各絶対順位が正または負になる確率は1/2です。n個の符号には2ⁿ通りの等確率配置があります。" },
  { type: "heading", text: "符号付順位和の平均、分散、近似" },
  { type: "formulaGroup", formulas: [
    { label: "期待値", latex: "E(T^+)=\\frac{n(n+1)}4", fallback: "E(T⁺)=n(n+1)/4" },
    { label: "同順位なしの分散", latex: "\\operatorname{Var}(T^+)=\\frac{n(n+1)(2n+1)}{24}", fallback: "Var(T⁺)=n(n+1)(2n+1)/24" },
    { label: "正規近似", latex: "Z=\\frac{T^+-n(n+1)/4}{\\sqrt{n(n+1)(2n+1)/24}}", fallback: "Z=[T⁺−E]/√Var" }
  ] },
  { type: "paragraph", text: "指標Iᵣを順位rが正なら1、負なら0とすればT⁺=ΣrIᵣです。E(Iᵣ)=1/2、Var(Iᵣ)=1/4から線形性により上の式が得られます。" },
  { type: "formulaGroup", formulas: [
    { label: "指標表現", latex: "T^+=\\sum_{r=1}^{n}rI_r", fallback: "T⁺=ΣrIᵣ" },
    { label: "符号付き順位和", latex: "W=T^+-T^-,\\quad E(W)=0", fallback: "W=T⁺−T⁻, E(W)=0" },
    { label: "Wの分散", latex: "\\operatorname{Var}(W)=\\sum r^2=\\frac{n(n+1)(2n+1)}6", fallback: "Var(W)=n(n+1)(2n+1)/6" }
  ] },
  { type: "heading", text: "三方法の選択" },
  { type: "table", rows: [["方法", "標本関係", "主なH₀", "追加条件"], ["Sign", "一標本／対応", "正負確率が1/2", "差の対称性不要"], ["Rank-sum", "独立二群", "二群分布が同じ", "中央値解釈には形状類似"], ["Signed-rank", "一標本／対応", "差分布が0中心", "差分布の対称性"]] },
  { type: "callout", tone: "forward", label: "実務上の報告", text: "有効n、中央値とIQR、0差・同順位の扱い、正確法か近似法か、連続性・ties補正、統計量、p値、適切な位置差効果量と信頼区間を報告します。" },
];
