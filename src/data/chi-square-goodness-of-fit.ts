export const chiSquareGoodnessOfFit = [
  { type: "paragraph", text: "卡方適合度檢定（chi-square goodness-of-fit test）用來判斷一個類別變項的母體比例，是否符合事先指定的理論分布。資料可以分成兩類或更多類；我們比較各類實際觀察到的次數與 H₀ 下應該出現的次數，評估兩者的落差是否大到難以用隨機抽樣解釋。" },
  { type: "callout", tone: "forward", label: "這一頁的主線", text: "先由指定比例算出各類期望次數 → 比較觀察次數 Oᵢ 與期望次數 Eᵢ → 將各類的標準化差異平方後相加 → 用卡方分配判斷整體偏離程度。" },

  { type: "heading", text: "從二項分布推廣到多項分布" },
  { type: "paragraph", text: "二項分布只有成功與失敗兩種互斥結果；多項分布（multinomial distribution）則把相同概念推廣到 k 個互斥類別。一次觀察只能落入其中一類，各類機率固定為 p₁,…,pₖ，而且全部機率相加必須等於 1。" },
  { type: "formulaGroup", formulas: [
    { label: "各類觀察次數", latex: "(O_1,O_2,\\ldots,O_k)\\sim\\operatorname{Multinomial}(n;p_1,p_2,\\ldots,p_k)", fallback: "(O₁,O₂,…,Oₖ) ~ Multinomial(n; p₁,p₂,…,pₖ)" },
    { label: "總機率與總次數", latex: "\\sum_{i=1}^{k}p_i=1,\\qquad \\sum_{i=1}^{k}O_i=n", fallback: "Σpᵢ=1；ΣOᵢ=n" },
    { label: "第 i 類的期望次數", latex: "E_i=E(O_i)=np_i", fallback: "Eᵢ=E(Oᵢ)=npᵢ" }
  ] },
  { type: "callout", tone: "intuition", label: "二項分布是兩類的特例", text: "當 k=2 時，兩類機率可寫成 p 與 1−p，觀察次數則是 a 與 n−a。因此，前一頁的單一比例問題可以視為卡方適合度檢定最簡單的情況。" },

  { type: "heading", text: "資料與模型的條件" },
  { type: "list", items: [
    "樣本包含固定的 n 次觀察或試驗。",
    "每次觀察只能歸入 k 個互斥且完整的類別之一。",
    "在 H₀ 下，各類機率 p₁,…,pₖ 已被指定，且總和為 1。",
    "各次觀察彼此獨立；同一個觀察單位不能被重複計入。",
    "各類期望次數不能過小，卡方分配的漸近近似才會可靠。"
  ] },
  { type: "callout", tone: "forward", label: "期望次數太小時", text: "常見經驗準則是各類 Eᵢ 最好至少為 5，但這不是在所有情境下都相同的絕對界線。若期望次數過小，可依研究問題考慮合併具有實質意義的類別、使用精確方法，或利用 Monte Carlo 方法估計 p 值；不能只為了通過門檻而任意合併類別。" },

  { type: "heading", text: "建立假設" },
  { type: "paragraph", text: "假設理論分布事先指定各類比例為 p₁⁽⁰⁾,…,pₖ⁽⁰⁾。適合度檢定不是逐類各做一次檢定，而是用一個統計量同時評估整組比例是否符合指定分布。" },
  { type: "formulaGroup", formulas: [
    { label: "虛無假設", latex: "H_0:p_1=p_1^{(0)},\\ p_2=p_2^{(0)},\\ldots,\\ p_k=p_k^{(0)}", fallback: "H₀: p₁=p₁⁽⁰⁾, p₂=p₂⁽⁰⁾, …, pₖ=pₖ⁽⁰⁾" },
    { label: "對立假設", latex: "H_1:\\text{至少有一個 }p_i\\ne p_i^{(0)}", fallback: "H₁: 至少有一個 pᵢ≠pᵢ⁽⁰⁾" },
    { label: "H₀ 下的期望次數", latex: "E_i=np_i^{(0)}", fallback: "Eᵢ=npᵢ⁽⁰⁾" }
  ] },
  { type: "paragraph", text: "拒絕 H₀ 只能表示觀察到的整體分布與指定分布不相容，不能只靠總檢定直接判定是哪一類造成差異。若要找出主要來源，還要進一步查看各類殘差與實際差異的方向。" },

  { type: "heading", text: "Pearson 卡方統計量" },
  { type: "paragraph", text: "每一類先計算觀察次數與期望次數的差 Oᵢ−Eᵢ，再除以該類在 H₀ 下的尺度。平方可以讓高於期望與低於期望的差異都成為正值，除以 Eᵢ則讓不同期望規模的類別可以放在同一尺度比較。" },
  { type: "formulaGroup", formulas: [
    { label: "第 i 類的 Pearson residual", latex: "r_i=\\frac{O_i-E_i}{\\sqrt{E_i}}", fallback: "rᵢ=(Oᵢ−Eᵢ)/√Eᵢ" },
    { label: "Pearson 卡方統計量", latex: "\\chi^2=\\sum_{i=1}^{k}r_i^2=\\sum_{i=1}^{k}\\frac{(O_i-E_i)^2}{E_i}", fallback: "χ²=Σrᵢ²=Σ(Oᵢ−Eᵢ)²/Eᵢ" }
  ] },
  { type: "callout", tone: "intuition", label: "為什麼是右尾檢定？", text: "χ² 不會小於 0。觀察次數愈接近期望次數，χ² 愈接近 0；整體差距愈大，χ² 就愈大。因此適合度檢定只看卡方分配的右尾，p 值為 P(χ²df≥χ²obs)。" },

  { type: "heading", text: "二分類情況的公式推導" },
  { type: "paragraph", text: "先看 k=2 的情況。假設樣本數為 n，第一類的理論比例為 p、觀察次數為 a；第二類的比例與觀察次數便分別由總和限制成 1−p 與 n−a。" },
  { type: "table", rows: [
    ["類別", "觀察次數 O", "H₀ 下的比例", "期望次數 E", "O−E"],
    ["第 1 類", "a", "p", "np", "a−np"],
    ["第 2 類", "n−a", "1−p", "n(1−p)", "np−a=−(a−np)"]
  ] },
  { type: "paragraph", text: "把兩類代入 Pearson 卡方統計量，可以看見兩類的偏差大小相同、方向相反。第二類是所有未落入第一類的觀察，因此觀察次數應為 n−a。" },
  { type: "formulaGroup", formulas: [
    { label: "代入兩類的觀察與期望次數", latex: "\\chi^2=\\frac{(a-np)^2}{np}+\\frac{\\left[(n-a)-n(1-p)\\right]^2}{n(1-p)}", fallback: "χ²=(a−np)²/(np)+[(n−a)−n(1−p)]²/[n(1−p)]" },
    { label: "第二類偏差是第一類的相反數", latex: "(n-a)-n(1-p)=np-a=-(a-np)", fallback: "(n−a)−n(1−p)=np−a=−(a−np)" },
    { label: "整理後", latex: "\\chi^2=\\frac{(a-np)^2}{np(1-p)}", fallback: "χ²=(a−np)²/[np(1−p)]" }
  ] },
  { type: "callout", tone: "intuition", label: "兩類並不是兩份獨立資訊", text: "第一類一旦觀察到 a 次，第二類就必定是 n−a；增加一個第一類也必然少一個第二類。兩類計數各自的變異數雖然都是 np(1−p)，彼此卻具有負相關，不能當成兩個獨立的標準常態變數。" },

  { type: "heading", text: "自由度為什麼是 k−1？" },
  { type: "paragraph", text: "k 個觀察次數受到總數固定為 n 的限制。只要知道前 k−1 類的次數，最後一類就已經被決定，因此真正可以自由變動的資訊只有 k−1 個。二分類時知道 a，另一類必定是 n−a，所以只有 1 個自由度。" },
  { type: "formulaGroup", formulas: [
    { label: "指定比例沒有由樣本估計參數時", latex: "df=k-1", fallback: "df=k−1" },
    { label: "由同一批資料估計 m 個參數時", latex: "df=k-1-m", fallback: "df=k−1−m" }
  ] },
  { type: "callout", tone: "forward", label: "估計參數會再消耗自由度", text: "例如檢查資料是否符合某個 Poisson 分布，但 Poisson 的平均數 λ 是先由同一批資料估計，便會再減少 1 個自由度。只有各類理論比例在分析前已完全指定時，才直接使用 k−1。" },

  { type: "heading", text: "從二分類推廣到 k 個類別" },
  { type: "paragraph", text: "多項分布中，每一類計數的邊際變異數為 npᵢ(1−pᵢ)，不同類別之間則具有負共變異數。由於全部次數的總和固定，這些偏差不是彼此獨立；在 H₀ 與大樣本條件下，扣除總和限制及由資料估計的參數後，Pearson 統計量近似服從相應自由度的卡方分配。" },
  { type: "formulaGroup", formulas: [
    { label: "單一類別的變異數", latex: "\\operatorname{Var}(O_i)=np_i(1-p_i)", fallback: "Var(Oᵢ)=npᵢ(1−pᵢ)" },
    { label: "不同類別的共變異數", latex: "\\operatorname{Cov}(O_i,O_j)=-np_ip_j\\qquad(i\\ne j)", fallback: "Cov(Oᵢ,Oⱼ)=−npᵢpⱼ（i≠j）" },
    { label: "大樣本下的近似分配", latex: "\\sum_{i=1}^{k}\\frac{(O_i-E_i)^2}{E_i}\\ \\overset{\\cdot}{\\sim}\\ \\chi^2_{k-1-m}", fallback: "Σ(Oᵢ−Eᵢ)²/Eᵢ 近似 χ²(k−1−m)" }
  ] },

  { type: "heading", text: "與單一比例 Z 檢定的關係" },
  { type: "paragraph", text: "在二分類、雙尾檢定且使用相同大樣本近似時，單一比例 Z 檢定與自由度為 1 的 Pearson 卡方適合度檢定其實是同一件事。把 Z 統計量平方，正好得到前面推導出的 χ² 統計量。" },
  { type: "formula", latex: "Z=\\frac{\\hat p-p}{\\sqrt{p(1-p)/n}}\\quad\\Longrightarrow\\quad Z^2=\\frac{(a-np)^2}{np(1-p)}=\\chi_1^2", fallback: "Z=(p̂−p)/√[p(1−p)/n]；Z²=(a−np)²/[np(1−p)]=χ²(1)" },
  { type: "callout", tone: "intuition", label: "平方後會失去方向", text: "Z 的正負可以表示樣本比例高於或低於 H₀ 指定值；Z²=χ² 只保留偏離的大小。因此這個卡方檢定對應的是雙尾比例檢定，不能由 χ² 的正負判斷方向。" },

  { type: "heading", text: "與卡方獨立性檢定的差別" },
  { type: "table", rows: [
    ["比較項目", "卡方適合度檢定", "卡方獨立性檢定"],
    ["資料問題", "一個類別變項是否符合指定比例", "兩個類別變項是否彼此獨立"],
    ["期望次數來源", "Eᵢ=npᵢ⁽⁰⁾", "由列總數與欄總數計算"],
    ["基本自由度", "k−1−m", "(r−1)(c−1)"],
    ["共同點", "比較 O 與 E，使用 Pearson χ²", "比較 O 與 E，使用 Pearson χ²"]
  ] },
  { type: "paragraph", text: "兩種檢定使用相同的 Pearson 統計量形式，但抽樣結構、H₀、期望次數的來源與自由度不同。後面的卡方獨立性檢定會再由列聯表說明。" },

  { type: "heading", text: "檢定步驟" },
  { type: "list", ordered: true, items: [
    "確認資料為一個類別變項的次數資料，類別互斥且觀察值彼此獨立。",
    "在看見或分析資料前，根據理論或研究問題指定 H₀ 下的各類比例。",
    "計算各類期望次數 Eᵢ=npᵢ⁽⁰⁾，並檢查卡方近似是否合理。",
    "計算 χ²=Σ(Oᵢ−Eᵢ)²/Eᵢ，以及扣除限制與估計參數後的自由度。",
    "由右尾 p 值判斷是否拒絕 H₀；若拒絕，再查看殘差與各類差異方向，說明偏離主要來自哪些類別。"
  ] }
];
