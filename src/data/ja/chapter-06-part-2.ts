export const postHocComparisonsJa = [
  { type: "paragraph", text: "全体ANOVAが有意でも、少なくとも一つの母平均が異なると分かるだけで、どの群間に差があるかは分かりません。位置を特定するには、事前に計画した対比または事後比較（post hoc comparisons）を使います。" },
  { type: "callout", tone: "intuition", label: "異なる問いに答える", text: "F検定は「全群にまったく差がないか」、事後比較は「どの群とどの群が異なるか」を問います。全体検定が有意でも、すべてのペアが有意とは限りません。" },
  { type: "heading", text: "t検定を繰り返してはいけない理由" },
  { type: "paragraph", text: "比較では、平均差の標準誤差をどう推定するか、複数回検定した後の有意水準をどう制御するかを決めます。k群の全ペア数は次の通りです。" },
  { type: "formula", latex: "m=\\binom{k}{2}=\\frac{k(k-1)}{2}", fallback: "m=C(k,2)=k(k−1)/2" },
  { type: "paragraph", text: "3群なら3比較、5群なら10比較です。各検定をα=0.05で行っても、比較族全体で少なくとも一度偽陽性を出す確率は0.05に留まりません。" },
  { type: "heading", text: "比較ごとの誤りと家族内誤り" },
  { type: "formulaGroup", formulas: [
    { label: "m回すべてで第一種過誤なし", latex: "P(\\text{第一種過誤なし})=(1-\\alpha_1)^m", fallback: "P(第一種過誤なし)=(1−α₁)^m" },
    { label: "少なくとも一度の第一種過誤", latex: "\\alpha_F=1-(1-\\alpha_1)^m", fallback: "αF=1−(1−α₁)^m" },
    { label: "α₁が小さいとき", latex: "\\alpha_F\\approx m\\alpha_1", fallback: "αF≈mα₁" }
  ] },
  { type: "paragraph", text: "α₁は比較ごとの第一種過誤率、αFは一つの比較族で少なくとも一度第一種過誤を起こす家族内誤り率（FWER）です。上式の直観は独立な検定に基づきますが、Bonferroniの保証は検定間の独立を必要としません。" },
  { type: "heading", text: "二群平均差の共通標準誤差" },
  { type: "paragraph", text: "等分散一元配置ANOVAでは、ANOVA表のMSEを共通誤差分散として各ペアに使えます。" },
  { type: "formulaGroup", formulas: [
    { label: "平均差の標準誤差", latex: "SE(\\bar X_i-\\bar X_j)=\\sqrt{MS_E\\left(\\frac1{n_i}+\\frac1{n_j}\\right)}", fallback: "SE(X̄ᵢ−X̄ⱼ)=√[MSE(1/nᵢ+1/nⱼ)]" },
    { label: "ペア比較t統計量", latex: "t_{ij}=\\frac{\\bar X_i-\\bar X_j}{\\sqrt{MS_E\\left(\\frac1{n_i}+\\frac1{n_j}\\right)}}", fallback: "tᵢⱼ=(X̄ᵢ−X̄ⱼ)/SE" },
    { label: "自由度", latex: "df=n-k", fallback: "df=n−k" }
  ] },
  { type: "heading", text: "FisherのLSD法" },
  { type: "paragraph", text: "Fisher's least significant difference法はANOVAのMSEを使うpooled t型のペア比較です。通常、全体ANOVAが有意なら各比較も元のαで判断し、比較数に応じた追加調整をしません。" },
  { type: "formula", latex: "p_{ij}<\\alpha\\quad\\Longrightarrow\\quad\\text{reject }H_{0,ij}", fallback: "pᵢⱼ<αならH₀,ᵢⱼを棄却" },
  { type: "callout", tone: "caution", label: "LSDの代償", text: "門槛が緩く検出力は高い一方、群数が増えるとFWERが膨らみます。全体ANOVAを先に要求しても、多数群で常にFWERがαに保たれるわけではありません。" },
  { type: "heading", text: "Bonferroni法" },
  { type: "paragraph", text: "目標とする家族有意水準αFをm比較へ配分します。各比較をαF/mで判定する方法と、元のp値をm倍してαFと比べる方法は同値です。" },
  { type: "formulaGroup", formulas: [
    { label: "各比較の有意水準", latex: "\\alpha_{\\mathrm{per\\ comparison}}=\\frac{\\alpha_F}{m}", fallback: "各比較α=αF/m" },
    { label: "調整p値", latex: "p_{\\mathrm{adj}}=\\min(mp,1)", fallback: "padj=min(mp,1)" }
  ] },
  { type: "paragraph", text: "3群の全3比較でαF=0.05なら、各門槛は0.05/3≈0.0167です。単純で依存構造を問わずFWERを制御しますが、比較が多いほど保守的になり、第二種過誤が増える可能性があります。" },
  { type: "heading", text: "Holm法" },
  { type: "paragraph", text: "Holmのstep-down法はBonferroniを逐次化し、FWERを制御しながら通常はより高い検出力を得ます。" },
  { type: "list", ordered: true, items: ["m個のp値をp(1)≤p(2)≤⋯≤p(m)に並べる", "最小p値をαF/mと比較する。不成立なら停止し、以後も棄却しない", "成立なら次をαF/(m−1)と比較し、残り比較数に応じて門槛を緩める", "最初の不成立で停止し、その項以後を棄却しない"] },
  { type: "formula", latex: "p_{(i)}\\leq\\frac{\\alpha_F}{m-i+1}", fallback: "p(i)≤αF/(m−i+1)" },
  { type: "formula", latex: "p_{\\mathrm{Holm},(i)}=\\min\\!\\left(1,\\max_{1\\leq j\\leq i}[(m-j+1)p_{(j)}]\\right)", fallback: "Holm調整p(i)=min{1,max[(m−j+1)p(j)]}" },
  { type: "paragraph", text: "調整p値には単調性を持たせ、より大きな元p値が逆に小さな調整値にならないようにします。" },
  { type: "heading", text: "Holm–Šidák法" },
  { type: "paragraph", text: "p値を小さい順に並べるstep-down手順は同じですが、残るr個の仮説にŠidák門槛を使います。" },
  { type: "formulaGroup", formulas: [
    { label: "残りの比較数", latex: "r=m-i+1", fallback: "r=m−i+1" },
    { label: "第i段階の門槛", latex: "\\alpha_i'=1-(1-\\alpha_F)^{1/r}", fallback: "α′ᵢ=1−(1−αF)^(1/r)" }
  ] },
  { type: "callout", tone: "caution", label: "依存構造を確認する", text: "Šidák式の厳密なFWER導出は独立な検定に基づきますが、同じ群を共有するペア比較は相関します。研究デザインとソフトウェアの定義を確認します。" },
  { type: "heading", text: "四つの方法の選択" },
  { type: "table", rows: [["方法", "多重性の処理", "特徴"], ["Fisher's LSD", "通常は調整なし", "高検出力だがFWERが膨らみやすい"], ["Bonferroni", "αFをmで割る", "単純で頑健だが保守的"], ["Holm", "Bonferroni門槛を逐次緩和", "FWERを制御し通常Bonferroniより高検出力"], ["Holm–Šidák", "逐次Šidák門槛", "やや緩いが依存性に注意"]] },
  { type: "callout", tone: "forward", label: "報告すべき内容", text: "方法名、比較族の定義、各平均差、同時または調整済み信頼区間、調整p値を報告します。統計的有意性だけでなく効果の大きさと臨床的意味を解釈します。" },
];
