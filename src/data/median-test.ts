export const medianTest = [
  { type: "paragraph", text: "中位數檢定（median test，常稱 Mood's median test）用於比較兩個獨立樣本的母體位置。它先用兩組合併資料的中位數把觀察值分成上、下兩側，再比較兩組落在同一側的比例是否相同。" },
  { type: "callout", tone: "intuition", label: "它把數值問題轉成 2×2 計數問題", text: "檢定不再使用每個觀察值距離中位數多遠，只記錄它位於 pooled median 的上方或下方。因此後續可以用固定邊際的超幾何分配，或以 2×2 表的卡方方法處理。" },

  { type: "heading", text: "中位數檢定適用什麼研究設計？" },
  { type: "paragraph", text: "這裡比較的是兩組彼此獨立的資料，例如兩種治療分別施用在不同受試者身上。若同一名受試者接受兩次測量，資料是成對的，應考慮 Sign test 或 Wilcoxon signed-rank test，而不是把兩次測量當成兩個獨立樣本。" },
  { type: "table", rows: [
    ["設計", "適合的方法"],
    ["兩組獨立樣本，只比較 pooled median 兩側比例", "Median test"],
    ["兩組獨立樣本，使用全部等級資訊", "Wilcoxon rank-sum / Mann–Whitney U"],
    ["單一樣本或成對樣本", "Sign test 或 Wilcoxon signed-rank"],
  ] },
  { type: "callout", tone: "caution", label: "Median test 會捨棄很多資訊", text: "所有高於中位數的觀察值都被視為同一類，所有低於中位數的觀察值也被視為同一類。它較不受極端值影響，但通常比使用完整等級的 rank-sum test 缺乏檢定力。" },

  { type: "heading", text: "從虛無假設開始建立 2×2 表" },
  { type: "paragraph", text: "令兩組樣本數分別為 n₁、n₂。把兩組資料合併後求 pooled median，再令 m₁、m₂ 分別為第 1、2 組落在指定一側（例如高於中位數）的個數。中位數檢定的正式問題是兩組母體中位數是否相同；在 H₀ 下，組別標籤不應改變觀察值落在 pooled median 上、下兩側的比例。若兩組完整分布相同，當然也會得到這個結果，但檢定本身不等於比較分布的所有細節。" },
  { type: "formula", latex: "H_0:\\eta_1=\\eta_2\\qquad H_1:\\eta_1\\ne\\eta_2", fallback: "H₀：η₁=η₂；H₁：η₁≠η₂（η 表示母體中位數）" },
  { type: "table", rows: [
    ["", "高於 pooled median", "低於 pooled median", "合計"],
    ["第 1 組", "m₁", "n₁−m₁", "n₁"],
    ["第 2 組", "m₂", "n₂−m₂", "n₂"],
    ["合計", "M=m₁+m₂", "n₁+n₂−M", "n₁+n₂"],
  ] },
  { type: "paragraph", text: "落在 pooled median 上的觀察值必須依事先規則處理；常見作法是排除這些 ties，再以剩餘有效樣本建立表格。若 ties 很多，結果可能對處理方式敏感，應在報告中說明。" },

  { type: "heading", text: "為什麼會得到超幾何機率？" },
  { type: "paragraph", text: "在 H₀ 下固定三個邊際：第 1 組共有 n₁ 筆、第 2 組共有 n₂ 筆，且 pooled median 指定側共有 M=m₁+m₂ 筆。問題變成：從 n₁+n₂ 個位置中選出 M 個位於該側的位置時，其中恰有 m₁ 個落在第 1 組的機率是多少？" },
  { type: "formulaGroup", formulas: [
    { label: "有利配置數", latex: "\\binom{n_1}{m_1}\\binom{n_2}{m_2}", fallback: "C(n₁,m₁)C(n₂,m₂)" },
    { label: "全部配置數", latex: "\\binom{n_1+n_2}{m_1+m_2}", fallback: "C(n₁+n₂,m₁+m₂)" },
    { label: "觀察到這個配置的機率", latex: "P(M_1=m_1\\mid M)=\\frac{\\binom{n_1}{m_1}\\binom{n_2}{m_2}}{\\binom{n_1+n_2}{m_1+m_2}}", fallback: "P= C(n₁,m₁)C(n₂,m₂)/C(n₁+n₂,m₁+m₂)" },
  ] },
  { type: "paragraph", text: "這個式子給的是某一個配置的機率。求雙尾 p 值時，還要把在 H₀ 下與觀察表同樣或更不相容的 2×2 表機率加總；不能只把觀察表本身的機率當成 p 值。計算方式與 Fisher's exact test 相同。" },
  { type: "callout", tone: "intuition", label: "m₁ 與 m₂ 為什麼不是獨立的？", text: "指定 pooled median 某一側共有 M 筆後，m₁+m₂=M 已固定；知道 m₁ 就同時決定 m₂=M−m₁。這正是條件式超幾何分配，而不是兩個互不相關的計數。" },

  { type: "heading", text: "pooled median 兩側各有多少資料？" },
  { type: "paragraph", text: "若合併後共有 N=n₁+n₂ 筆、沒有等於中位數的 ties，N 為偶數時兩側各有 N/2 筆；N 為奇數時，中間那一筆本身就是中位數，移除後兩側各有 (N−1)/2 筆。" },
  { type: "formulaGroup", formulas: [
    { label: "N 為偶數", latex: "m_1+m_2=\\frac N2", fallback: "m₁+m₂=N/2" },
    { label: "N 為奇數並移除中位數", latex: "m_1+m_2=\\frac{N-1}{2}", fallback: "m₁+m₂=(N−1)/2" },
  ] },
  { type: "paragraph", text: "如果多筆資料恰好等於 pooled median，就不能只用奇偶性決定有效總數；必須先依規則處理這些 ties，再重新計算兩側合計。" },

  { type: "heading", text: "大樣本如何使用兩比例差的常態近似？" },
  { type: "paragraph", text: "樣本較大時，可以比較兩組落在指定側的樣本比例 m₁/n₁ 與 m₂/n₂。H₀ 下兩組使用同一個 pooled proportion p̂，q̂=1−p̂。" },
  { type: "formulaGroup", formulas: [
    { label: "兩組樣本比例差", latex: "\\hat p_1-\\hat p_2=\\frac{m_1}{n_1}-\\frac{m_2}{n_2}", fallback: "p̂₁−p̂₂=m₁/n₁−m₂/n₂" },
    { label: "合併比例", latex: "\\hat p=\\frac{m_1+m_2}{n_1+n_2},\\qquad\\hat q=1-\\hat p", fallback: "p̂=(m₁+m₂)/(n₁+n₂)；q̂=1−p̂" },
    { label: "近似標準誤", latex: "SE_0=\\sqrt{\\hat p\\hat q\\left(\\frac1{n_1}+\\frac1{n_2}\\right)}", fallback: "SE₀=√[p̂q̂(1/n₁+1/n₂)]" },
    { label: "檢定統計量", latex: "Z=\\frac{m_1/n_1-m_2/n_2}{\\sqrt{\\hat p\\hat q(1/n_1+1/n_2)}}\\approx N(0,1)", fallback: "Z=(m₁/n₁−m₂/n₂)/√[p̂q̂(1/n₁+1/n₂)]≈N(0,1)" },
  ] },
  { type: "paragraph", text: "這個近似式可從兩個樣本比例差得到：H₀ 下 E(p̂₁−p̂₂)=0；若先以共同成功機率 p 近似兩組計數，則 Var(p̂₁−p̂₂)=pq(1/n₁+1/n₂)，再用 pooled p̂ 估計未知的 p。小樣本或期望次數不足時，應使用精確方法。" },

  { type: "heading", text: "中位數檢定到底能得出什麼結論？" },
  { type: "paragraph", text: "拒絕 H₀ 表示兩組落在 pooled median 兩側的比例不同，支持兩組分布位置存在差異。若要直接解釋為母體中位數不同，還要考慮兩組分布形狀、離散程度與 ties；不拒絕 H₀ 也不代表兩組分布完全相同。" },
  { type: "list", ordered: true, items: [
    "確認兩組樣本彼此獨立。",
    "合併資料求 pooled median，並說明等於中位數的觀察值如何處理。",
    "建立 pooled median 上、下兩側的 2×2 表。",
    "小樣本使用條件式超幾何精確檢定；樣本充足時可使用卡方或兩比例 Z 近似。",
    "報告兩組樣本數、兩側計數、檢定方法、p 值與效果方向。",
  ] },
];
