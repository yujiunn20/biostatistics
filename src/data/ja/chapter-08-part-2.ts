export const medianTestJa = [
  { type: "paragraph", text: "中央値検定（Mood's median test）は、独立二群の合併中央値を境に各観測を上・下へ二値化し、両群が同じ側へ入る割合を比較します。" },
  { type: "callout", tone: "intuition", label: "数値を2×2表へ変える", text: "中央値からの距離を捨て、上か下かだけを使います。外れ値に強い一方、全順位を使うrank-sum検定より通常は検出力が低くなります。" },
  { type: "heading", text: "適用する研究デザイン" },
  { type: "table", rows: [["設計", "方法"], ["独立二群、合併中央値の両側割合", "Median test"], ["独立二群、全順位情報", "Rank-sum / Mann–Whitney"], ["一標本または対応", "Sign / Signed-rank"]] },
  { type: "heading", text: "仮説と2×2表" },
  { type: "formula", latex: "H_0:\\eta_1=\\eta_2\\qquad H_1:\\eta_1\\ne\\eta_2", fallback: "H₀:η₁=η₂; H₁:η₁≠η₂" },
  { type: "table", rows: [["", "合併中央値より上", "下", "合計"], ["第1群", "m₁", "n₁−m₁", "n₁"], ["第2群", "m₂", "n₂−m₂", "n₂"], ["合計", "M", "N−M", "N"]] },
  { type: "paragraph", text: "中央値と同値の観測は事前規則で処理します。一般に除外しますが、同値が多いと結果が規則に敏感になるため必ず明記します。" },
  { type: "heading", text: "超幾何確率" },
  { type: "formulaGroup", formulas: [
    { label: "有利な配置", latex: "\\binom{n_1}{m_1}\\binom{n_2}{m_2}", fallback: "C(n₁,m₁)C(n₂,m₂)" },
    { label: "全配置", latex: "\\binom{n_1+n_2}{m_1+m_2}", fallback: "C(N,M)" },
    { label: "表の確率", latex: "P(M_1=m_1\\mid M)=\\frac{\\binom{n_1}{m_1}\\binom{n_2}{m_2}}{\\binom{n_1+n_2}{m_1+m_2}}", fallback: "条件付き超幾何確率" }
  ] },
  { type: "paragraph", text: "これは観察表一つの確率であり、両側p値は同等以上にH₀と不整合な全表の確率を合計します。Fisher正確検定と同じ条件付き計算です。" },
  { type: "heading", text: "合併中央値の両側の個数" },
  { type: "formulaGroup", formulas: [
    { label: "Nが偶数", latex: "m_1+m_2=\\frac N2", fallback: "M=N/2" },
    { label: "Nが奇数で中央値を除外", latex: "m_1+m_2=\\frac{N-1}{2}", fallback: "M=(N−1)/2" }
  ] },
  { type: "heading", text: "大標本の二比率近似" },
  { type: "formulaGroup", formulas: [
    { label: "比率差", latex: "\\hat p_1-\\hat p_2=\\frac{m_1}{n_1}-\\frac{m_2}{n_2}", fallback: "p̂₁−p̂₂=m₁/n₁−m₂/n₂" },
    { label: "合併比率", latex: "\\hat p=\\frac{m_1+m_2}{n_1+n_2},\\quad\\hat q=1-\\hat p", fallback: "p̂=M/N" },
    { label: "Z統計量", latex: "Z=\\frac{m_1/n_1-m_2/n_2}{\\sqrt{\\hat p\\hat q(1/n_1+1/n_2)}}", fallback: "Z=比率差/SE₀" }
  ] },
  { type: "callout", tone: "caution", label: "結論の範囲", text: "棄却は合併中央値両側の割合差を支持します。母中央値差と直接解釈するには分布形状・散らばり・tiesも考慮します。非棄却は二群分布が完全に同じことを意味しません。" },
];

export const kruskalWallisJa = [
  { type: "paragraph", text: "Kruskal–Wallis検定は独立した三群以上を比較する順位法で、一元配置ANOVAの順位版です。全観測を合併順位付けし、群平均順位が共通中心からどれだけ離れるかを測ります。" },
  { type: "heading", text: "研究デザインと仮説" },
  { type: "list", items: ["結果が少なくとも順序付け可能", "群間の観測が独立し各観測は一群だけに属する", "反復測定には使わない", "中央値差として解釈するなら群分布形状が概ね同じ"] },
  { type: "formula", latex: "H_0:F_1=F_2=\\cdots=F_k\\qquad H_1:\\text{少なくとも一群の分布が異なる}", fallback: "H₀:全群分布が同じ" },
  { type: "heading", text: "全データを合併して順位付けする" },
  { type: "formulaGroup", formulas: [
    { label: "総標本数", latex: "N=\\sum_{i=1}^{k}n_i", fallback: "N=Σnᵢ" },
    { label: "第i群の順位和", latex: "R_i=\\sum_{j=1}^{n_i}R_{ij}", fallback: "Rᵢ=ΣRᵢⱼ" },
    { label: "平均順位", latex: "\\bar R_i=\\frac{R_i}{n_i}", fallback: "R̄ᵢ=Rᵢ/nᵢ" }
  ] },
  { type: "paragraph", text: "同値は占める順位の平均を使います。全順位の合計はN(N+1)/2、中心は(N+1)/2なので、H₀なら各群平均順位はこの周辺にあります。" },
  { type: "formulaGroup", formulas: [
    { label: "順位総和", latex: "1+2+\\cdots+N=\\frac{N(N+1)}2", fallback: "Σrank=N(N+1)/2" },
    { label: "共通中心", latex: "\\bar R_{\\cdot}=\\frac{N+1}{2}", fallback: "R̄·=(N+1)/2" }
  ] },
  { type: "heading", text: "Kruskal–Wallis統計量" },
  { type: "formulaGroup", formulas: [
    { label: "平均順位表示", latex: "H=\\frac{12}{N(N+1)}\\sum_i n_i\\left(\\bar R_i-\\frac{N+1}{2}\\right)^2", fallback: "加重平均順位偏差" },
    { label: "順位和表示", latex: "H=\\frac{12}{N(N+1)}\\sum_i\\frac{R_i^2}{n_i}-3(N+1)", fallback: "H=12/[N(N+1)]Σ(Rᵢ²/nᵢ)−3(N+1)" }
  ] },
  { type: "heading", text: "カイ二乗近似と自由度" },
  { type: "formula", latex: "H\\overset{\\cdot}{\\sim}\\chi^2_{k-1}", fallback: "H≈χ²(k−1)" },
  { type: "paragraph", text: "k群の順位和の総計は固定されるため自由に変化できるのはk−1個です。小標本や極端な不均衡では正確法・置換法を検討します。「各群約5」は近似の目安で、分割表の期待セル度数5とは別条件です。" },
  { type: "heading", text: "同順位補正" },
  { type: "formulaGroup", formulas: [
    { label: "補正因子", latex: "C=1-\\frac{\\sum_j(t_j^3-t_j)}{N^3-N}", fallback: "C=1−Σ(tⱼ³−tⱼ)/(N³−N)" },
    { label: "補正H", latex: "H_{\\mathrm{corrected}}=\\frac HC", fallback: "Hcorrected=H/C" }
  ] },
  { type: "heading", text: "有意後の事後比較" },
  { type: "paragraph", text: "全体検定の有意性は少なくとも一群が異なることだけを示します。Dunn検定や計画対比を行い、Holm・Bonferroni等で多重性を調整します。" },
  { type: "list", ordered: true, items: ["全体Kruskal–Wallisを実施", "有意ならDunnまたは計画順位対比", "多重比較を調整", "各群n、中央値、IQR、平均順位、H、df、p値、効果量を報告"] },
  { type: "table", rows: [["項目", "One-way ANOVA", "Kruskal–Wallis"], ["入力", "原値", "合併順位"], ["比較", "平均", "平均順位／分布"], ["統計量", "F", "H"], ["近似分布", "F", "χ²(k−1)"], ["事後", "Tukey等", "Dunn等"]] },
];

export const statisticalTestSelectionJa = [
  { type: "paragraph", text: "統計手法は、結果変数の型、標本間の関係、比較したい母集団命題の順に選びます。下表は入口であり、最終決定には研究デザインと各手法の仮定を確認します。" },
  { type: "heading", text: "統計手法の統合表" },
  { type: "table", rows: [["結果", "一標本", "独立二群", "対応二時点", "独立三群以上"], ["二値", "Binomial", "χ² / Fisher", "McNemar", "χ²"], ["概ね正規の連続", "One-sample t", "Independent t / Welch t", "Paired t", "ANOVA / Welch ANOVA"], ["歪み・外れ値の連続", "Sign / Signed-rank", "Rank-sum", "Sign / Signed-rank", "Kruskal–Wallis"], ["順序", "Sign / Signed-rank", "Rank-sum", "Sign / Signed-rank", "Kruskal–Wallis"]] },
  { type: "callout", tone: "caution", label: "表にない設計", text: "三時点以上の対応、クラスター、時間-to-event、計数結果、交絡調整には別の方法が必要です。無理にこの表へ当てはめません。" },
  { type: "heading", text: "第1問：結果変数の型" },
  { type: "table", rows: [["型", "例", "主な比較"], ["二値", "有無、陽陰", "割合・事象確率"], ["連続", "血圧、体重", "平均、位置、分布"], ["順序", "病期、疼痛尺度", "順位・分布位置"]] },
  { type: "paragraph", text: "0、1、2と符号化してもカテゴリーが連続値になるわけではありません。また正規性検定が有意というだけで自動的にノンパラメトリック法へ切り替えません。" },
  { type: "heading", text: "第2問：標本間の関係" },
  { type: "table", rows: [["関係", "判断", "例"], ["一標本", "一群と基準値", "中央値が4か"], ["独立", "異なる対象が別群", "治療群と対照群"], ["対応", "同じ対象の反復・マッチ", "治療前後"]] },
  { type: "callout", tone: "warning", label: "独立と対応は交換できない", text: "標本関係が標準誤差と帰無分布を決めます。対応を無視したり、独立個体を人工的に対にしたりするとp値の意味が崩れます。" },
  { type: "heading", text: "第3問：H₀は何を比較するか" },
  { type: "table", rows: [["方法", "主な帰無仮説"], ["t / ANOVA", "指定平均が等しい"], ["Sign", "正負確率が各1/2"], ["Signed-rank", "差分布が0中心で対称"], ["Rank-sum", "独立二群分布が同じ"], ["Median", "合併中央値両側の割合が同じ"], ["Kruskal–Wallis", "全独立群分布が同じ"], ["χ² independence", "二カテゴリー変数が独立"]] },
  { type: "paragraph", text: "同じ「二群比較」でも検定する命題は異なります。順位検定を中央値比較と呼べるのは、分布形が類似し位置だけがずれる等の追加条件がある場合です。" },
  { type: "heading", text: "表を使った後の確認" },
  { type: "list", ordered: true, items: ["図で外れ値、歪み、分散、クラスターを見る", "研究課題とH₀を書き、方法が同じ問いに答えるか確認", "独立性、対応、期待度数、対称性、等分散、tiesを確認", "小標本では正確・置換・近似法と補正を明記", "効果量と信頼区間を報告し、p値だけに縮減しない"] },
];
