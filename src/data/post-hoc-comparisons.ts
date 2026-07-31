export const postHocComparisons = [
  { type: "paragraph", text: "整體 ANOVA 若達統計顯著，只能說明至少一組母體平均數不同，不能直接指出差異發生在哪兩組。若研究者想進一步比較各組平均數，就需要使用事先規劃的對比或事後比較（post hoc comparisons）。" },
  { type: "callout", tone: "intuition", label: "整體檢定與事後比較回答不同問題", text: "ANOVA 的 F 檢定回答「所有組別是否完全沒有差異？」；事後比較則回答「差異出現在哪些組別之間？」整體檢定顯著，不代表每一對組別都顯著。" },

  { type: "heading", text: "為什麼不能直接反覆做 t 檢定？" },
  { type: "paragraph", text: "兩兩比較時有兩個問題需要決定。第一，各組平均數差的標準誤如何估計？第二，做了多次檢定後，每一次比較應使用多大的顯著水準 α？不同方法對這兩個問題採取不同處理，因此在第一類錯誤與統計檢定力之間有不同取捨。" },
  { type: "paragraph", text: "若共有 k 組，全部兩兩比較的次數為：" },
  { type: "formula", latex: "m=\\binom{k}{2}=\\frac{k(k-1)}{2}", fallback: "m=C(k,2)=k(k−1)/2" },
  { type: "paragraph", text: "例如 3 組共有 C(3,2)=3 次比較；5 組則有 10 次。比較次數增加時，只要求每一次檢定的第一類錯誤率都是 0.05，並不能讓整組比較發生至少一次偽陽性的機率仍維持在 0.05。" },

  { type: "heading", text: "單次錯誤率與整體錯誤率" },
  { type: "richText", parts: [
    { type: "text", text: "以 " },
    { type: "inlineFormula", latex: "\\alpha_1", fallback: "α₁" },
    { type: "text", text: " 表示單次比較的第一類錯誤率，以 " },
    { type: "inlineFormula", latex: "\\alpha_F", fallback: "αF" },
    { type: "text", text: " 表示同一組 m 次比較中至少發生一次第一類錯誤的機率，也就是家族錯誤率（family-wise error rate, FWER）。若先用各次檢定彼此獨立來理解，則有：" },
  ] },
  { type: "formulaGroup", formulas: [
    { label: "m 次都沒有第一類錯誤", latex: "P(\\text{沒有第一類錯誤})=(1-\\alpha_1)^m", fallback: "P(沒有第一類錯誤)=(1−α₁)^m" },
    { label: "至少出現一次第一類錯誤", latex: "\\alpha_F=1-(1-\\alpha_1)^m", fallback: "αF=1−(1−α₁)^m" },
    { label: "α₁ 較小時的近似", latex: "\\alpha_F\\approx m\\alpha_1", fallback: "αF≈mα₁" },
  ] },
  { type: "callout", tone: "intuition", label: "為什麼錯誤率會膨脹？", text: "每做一次檢定，就多一次把隨機差異誤判為顯著差異的機會。Bonferroni、Holm 與 Holm–Šidák 的共同目的，都是控制整組比較的錯誤率，而不是只看每一個 p 值。實際檢定彼此可能相關，因此上式首先提供直覺；Bonferroni 的控制則不要求各檢定彼此獨立。" },

  { type: "heading", text: "兩組平均數差的共同標準誤" },
  { type: "paragraph", text: "在傳統等變異單因子 ANOVA 中，各組被假設具有共同誤差變異數。事後比較因此可以使用 ANOVA 表中的組內均方 MSE，估計第 i 組與第 j 組平均數差的標準誤。" },
  { type: "formulaGroup", formulas: [
    { label: "平均數差的標準誤", latex: "SE(\\bar X_i-\\bar X_j)=\\sqrt{MS_E\\left(\\frac{1}{n_i}+\\frac{1}{n_j}\\right)}", fallback: "SE(X̄ᵢ−X̄ⱼ)=√[MSE(1/nᵢ+1/nⱼ)]" },
    { label: "兩兩比較的 t 統計量", latex: "t_{ij}=\\frac{\\bar X_i-\\bar X_j}{\\sqrt{MS_E\\left(\\frac{1}{n_i}+\\frac{1}{n_j}\\right)}}", fallback: "tᵢⱼ=(X̄ᵢ−X̄ⱼ)/√[MSE(1/nᵢ+1/nⱼ)]" },
    { label: "使用的自由度", latex: "df=n-k", fallback: "df=n−k" },
  ] },
  { type: "paragraph", text: "下面四種方法可以使用相同的平均數差與共同標準誤；主要差別在於如何調整判定顯著的門檻或 p 值。" },

  { type: "heading", text: "Fisher's LSD 法" },
  { type: "paragraph", text: "Fisher's least significant difference（LSD）法以 pooled t 檢定的方式逐對比較平均數，使用 ANOVA 的 MSE 作為共同變異數估計。若整體 ANOVA 使用 α=0.05，每一組 LSD 比較通常也直接以 0.05 判斷，不再因比較次數調整 α。" },
  { type: "formula", latex: "\\text{拒絕 }H_{0,ij}\\quad\\text{若}\quad p_{ij}<\\alpha", fallback: "若 pᵢⱼ<α，拒絕 H₀,ᵢⱼ" },
  { type: "callout", tone: "caution", label: "LSD 的代價", text: "LSD 的門檻較寬鬆，通常具有較高檢定力，但比較組數增加時，家族第一類錯誤率也會膨脹。即使先要求整體 ANOVA 顯著再進行 LSD，比較超過三組時也不能普遍保證整組錯誤率維持在 α。" },

  { type: "heading", text: "Bonferroni 法" },
  { type: "richText", parts: [
    { type: "text", text: "Bonferroni 法把希望控制的家族顯著水準 " },
    { type: "inlineFormula", latex: "\\alpha_F", fallback: "αF" },
    { type: "text", text: " 分配給 m 次比較。每一次比較使用 " },
    { type: "inlineFormula", latex: "\\alpha_F/m", fallback: "αF/m" },
    { type: "text", text: " 作為門檻；等價地，也可以把每個原始 p 值乘以 m，再與 " },
    { type: "inlineFormula", latex: "\\alpha_F", fallback: "αF" },
    { type: "text", text: " 比較。其他 t 統計量與標準誤的計算和前面相同。" },
  ] },
  { type: "formulaGroup", formulas: [
    { label: "調整每次比較的 α", latex: "\\alpha_{\\mathrm{per\\ comparison}}=\\frac{\\alpha_F}{m}", fallback: "每次比較 α=αF/m" },
    { label: "調整 p 值", latex: "p_{\\mathrm{adj}}=\\min(mp,1)", fallback: "padj=min(mp,1)" },
  ] },
  { type: "richText", parts: [
    { type: "text", text: "例如 3 組共有 3 次兩兩比較。若希望整體 " },
    { type: "inlineFormula", latex: "\\alpha_F=0.05", fallback: "αF=0.05" },
    { type: "text", text: "，每次比較的門檻就是 " },
    { type: "inlineFormula", latex: "0.05/3\\approx0.0167", fallback: "0.05/3≈0.0167" },
    { type: "text", text: "。" },
  ] },
  { type: "callout", tone: "caution", label: "Bonferroni 為什麼可能太保守？", text: "比較次數越多，校正後分配給單次比較的顯著水準越小，越不容易判定差異顯著。這會降低第一類錯誤，但也可能增加第二類錯誤 β，使統計檢定力 1−β 降低。它的優點是簡單，而且不需要假設各次檢定彼此獨立。" },

  { type: "heading", text: "Holm 法" },
  { type: "paragraph", text: "Holm t test 又稱 Holm step-down procedure。它也是控制家族錯誤率的方法，但不讓每個 p 值都承受相同的最嚴格 Bonferroni 門檻，因此通常比單純 Bonferroni 更有檢定力。" },
  { type: "list", ordered: true, items: [
    "把 m 個原始 p 值由小到大排列為 p(1)≤p(2)≤⋯≤p(m)。",
    "先將最小的 p 值與「家族顯著水準除以全部比較數」所得的門檻比較。若不顯著，就停止，後面的比較都不判為顯著。",
    "若最小的 p 值顯著，再檢查第二小的 p 值；分母隨尚未判定的比較數逐步減少，因此門檻會逐步放寬。",
    "遇到第一個不顯著的 p 值時停止；該項及後面較大的 p 值都不拒絕虛無假設。",
  ] },
  { type: "formula", latex: "p_{(i)}\\leq\\frac{\\alpha_F}{m-i+1}", fallback: "第 i 小的 p 值門檻：p(i)≤αF/(m−i+1)" },
  { type: "paragraph", text: "原文以 p 值由大到小排列，依序乘以 1、2、3、…來理解；這與由小到大排列後依序使用 m、m−1、m−2、…的倍率是同一件事。實際計算調整後 p 值時還要保持單調性，避免較大的原始 p 值得到反而更小的調整值。" },
  { type: "formula", latex: "p_{\\mathrm{Holm},(i)}=\\min\\!\\left(1,\\max_{1\\leq j\\leq i}[(m-j+1)p_{(j)}]\\right)", fallback: "Holm 調整 p(i)=min{1, max[(m−j+1)p(j)]，j≤i}" },

  { type: "heading", text: "Holm–Šidák 法" },
  { type: "paragraph", text: "Holm–Šidák t test 將 Holm 的逐步程序與 Šidák 門檻結合。仍先把 p 值由小到大排序；當目前還有 r=m−i+1 個假設尚未判定時，第 i 步使用下列門檻：" },
  { type: "formulaGroup", formulas: [
    { label: "第 i 步剩餘的比較數", latex: "r=m-i+1", fallback: "r=m−i+1" },
    { label: "Holm–Šidák 門檻", latex: "\\alpha_i'=1-(1-\\alpha_F)^{1/r}", fallback: "α′ᵢ=1−(1−αF)^(1/r)" },
  ] },
  { type: "richText", parts: [
    { type: "text", text: "若 " },
    { type: "inlineFormula", latex: "p_{(i)}\\leq\\alpha_i'", fallback: "p(i)≤α′ᵢ" },
    { type: "text", text: "，就繼續檢查下一個 p 值；遇到第一個不顯著結果便停止。原文以由大到小排序後的序號 k 表示同一概念，因此寫成 " },
    { type: "inlineFormula", latex: "\\alpha'=1-(1-\\alpha_F)^{1/k}", fallback: "α′=1−(1−αF)^(1/k)" },
    { type: "text", text: "。改用「尚未判定的比較數 r」可避免把排序方向與次序混淆。" },
  ] },
  { type: "callout", tone: "caution", label: "Holm–Šidák 的使用條件", text: "Šidák 公式的精確家族錯誤率推導建立在檢定彼此獨立的情況；常見兩兩比較通常彼此相關。實務上應依研究設計與軟體文件確認採用的方法，不要只因門檻比 Bonferroni 寬鬆就直接套用。" },

  { type: "heading", text: "四種方法如何選擇？" },
  { type: "table", rows: [
    ["方法", "如何處理多重比較", "主要特性"],
    ["Fisher's LSD", "通常不調整 α", "較寬鬆、檢定力較高，但家族第一類錯誤容易膨脹"],
    ["Bonferroni", "將家族顯著水準平均分配給所有比較", "簡單且控制穩健，但比較多時可能過度保守"],
    ["Holm", "逐步放寬 Bonferroni 門檻", "控制 FWER，通常比 Bonferroni 更有檢定力"],
    ["Holm–Šidák", "使用逐步 Šidák 門檻", "門檻通常略寬於 Holm，但需留意檢定之間的相依性"],
  ] },
  { type: "callout", tone: "forward", label: "報告結果時", text: "除了寫出哪些組別達顯著，還應說明使用哪一種校正方法，並報告平均數差、信賴區間與調整後 p 值。統計顯著只能說明資料對差異提供多少證據，差異是否具有實際或臨床意義仍要結合效果大小與研究背景判斷。" },
];
