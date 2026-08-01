export const kruskalWallis = [
  { type: "paragraph", text: "Kruskal–Wallis 檢定用於比較三組以上彼此獨立的樣本。它是單因子 ANOVA 的等級版本：先把所有觀察值合併排序，再判斷各組的等級是否集中在不同位置。" },
  { type: "callout", tone: "intuition", label: "ANOVA 比平均數，Kruskal–Wallis 比平均等級", text: "若各組來自同一分布，合併排序後，各組應取得相近的平均等級；若某些組經常取得偏高或偏低的等級，組間平均等級的差距就會使檢定統計量變大。" },

  { type: "heading", text: "研究設計與虛無假設" },
  { type: "list", items: [
    "結果至少能排序，可以是次序資料或連續資料。",
    "各組觀察值彼此獨立；重複測量資料不能使用本檢定。",
    "每一筆觀察值只能屬於一組。",
    "若要把結果解釋為中位數差異，各組分布形狀應大致相近。",
  ] },
  { type: "formula", latex: "H_0:F_1=F_2=\\cdots=F_k\\qquad H_1:\\text{至少一組分布不同}", fallback: "H₀：各組分布相同；H₁：至少一組分布不同" },
  { type: "paragraph", text: "虛無假設的一般寫法是各組分布相同。若各組形狀相似而主要差異是位置平移，才可進一步把它理解成各組位置或中位數相同。" },

  { type: "heading", text: "第一步：合併全部資料並給予等級" },
  { type: "paragraph", text: "假設共有 k 組，第 i 組有 nᵢ 筆，總樣本數 N=Σnᵢ。先暫時拿掉組別標籤，把 N 筆資料由小到大排成 1～N；相同數值使用它們應占名次的平均等級。完成排序後，再把每個等級放回原來組別。" },
  { type: "formulaGroup", formulas: [
    { label: "總樣本數", latex: "N=\\sum_{i=1}^{k}n_i", fallback: "N=Σnᵢ" },
    { label: "第 i 組等級和", latex: "R_i=R_{i1}+R_{i2}+\\cdots+R_{in_i}", fallback: "Rᵢ=Rᵢ₁+Rᵢ₂+⋯+Rᵢₙᵢ" },
    { label: "第 i 組平均等級", latex: "\\bar R_i=\\frac{R_i}{n_i}", fallback: "R̄ᵢ=Rᵢ/nᵢ" },
  ] },

  { type: "heading", text: "所有等級的中心為什麼是 (N+1)/2？" },
  { type: "paragraph", text: "全部等級為 1,2,…,N，其總和是 N(N+1)/2；再除以 N，就得到所有資料的平均等級 (N+1)/2。H₀ 下，各組只是從同一分布取得的樣本，所以每組平均等級都應在這個共同中心附近。" },
  { type: "formulaGroup", formulas: [
    { label: "全部等級總和", latex: "1+2+\\cdots+N=\\frac{N(N+1)}2", fallback: "1+2+⋯+N=N(N+1)/2" },
    { label: "全部資料的平均等級", latex: "\\bar R_{\\cdot}=\\frac{N+1}{2}", fallback: "R̄··=(N+1)/2" },
  ] },

  { type: "heading", text: "Kruskal–Wallis 統計量如何形成？" },
  { type: "paragraph", text: "檢定統計量把每組平均等級與共同中心的距離平方，再依該組樣本數加權。若所有組平均等級都接近 (N+1)/2，H 會很小；組間偏離愈大，H 就愈大。" },
  { type: "formulaGroup", formulas: [
    { label: "以平均等級表示", latex: "H=\\frac{12}{N(N+1)}\\sum_{i=1}^{k}n_i\\left(\\bar R_i-\\frac{N+1}{2}\\right)^2", fallback: "H=12/[N(N+1)]·Σnᵢ[R̄ᵢ−(N+1)/2]²" },
    { label: "以等級和表示", latex: "H=\\frac{12}{N(N+1)}\\sum_{i=1}^{k}\\frac{R_i^2}{n_i}-3(N+1)", fallback: "H=12/[N(N+1)]·Σ(Rᵢ²/nᵢ)−3(N+1)" },
  ] },
  { type: "paragraph", text: "兩個公式完全等價：把 R̄ᵢ=Rᵢ/nᵢ 代入第一式並展開平方，再利用 ΣRᵢ=N(N+1)/2，就會得到第二式。第一式容易理解統計量的來源；第二式通常較方便計算。" },

  { type: "heading", text: "為什麼近似卡方分布，自由度是 k−1？" },
  { type: "paragraph", text: "H₀ 下，各組平均等級只會因隨機分組而在共同中心附近波動。樣本足夠時，這個加權平方偏離量近似卡方分布。k 組等級和並不能各自自由改變，因為它們的總和固定為 N(N+1)/2；知道前 k−1 組後，最後一組就被總和限制決定，因此自由度為 k−1。" },
  { type: "formula", latex: "H\\overset{\\cdot}{\\sim}\\chi^2_{k-1}", fallback: "H 約服從 χ²(k−1)" },
  { type: "callout", tone: "caution", label: "為什麼這裡也看到 5？", text: "前面 2×2 table 的卡方獨立性檢定，常用『每格期望次數約至少 5』判斷卡方近似；這裡則常用『每組樣本數約至少 5』判斷 Kruskal–Wallis 的 H 是否已充分接近卡方分布。兩邊都在處理由離散資料形成的統計量能否使用漸近卡方分布，但 2×2 table 數的是期望格數，Kruskal–Wallis 數的是各組樣本數，不能把兩條規則當成同一個條件。它們也都只是經驗界線；樣本很小或組別極不平衡時，可使用精確或排列方法，並查看所用軟體的計算方式。" },

  { type: "heading", text: "相同數值為什麼需要 ties 修正？" },
  { type: "paragraph", text: "若資料有相同數值，它們使用平均等級，會使實際等級變異小於沒有 ties 的 1～N。直接使用未修正 H 會錯估虛無分配，因此要依每一組 ties 的大小 tⱼ 修正。" },
  { type: "formulaGroup", formulas: [
    { label: "ties 修正因子", latex: "C=1-\\frac{\\sum_j(t_j^3-t_j)}{N^3-N}", fallback: "C=1−Σ(tⱼ³−tⱼ)/(N³−N)" },
    { label: "修正後統計量", latex: "H_{\\mathrm{corrected}}=\\frac{H}{C}", fallback: "Hcorrected=H/C" },
  ] },
  { type: "paragraph", text: "沒有 ties 時，每個 tⱼ=1，修正項為 0，因此 C=1；有 ties 時，統計軟體通常會自動套用修正，但報告時仍應說明資料是否有大量相同等級。" },

  { type: "heading", text: "拒絕 H₀ 後還不知道哪幾組不同" },
  { type: "paragraph", text: "Kruskal–Wallis 是整體檢定。顯著結果只表示至少一組的等級分布不同，不能直接宣稱每兩組都不同。接著需要進行適合等級資料的事後比較，例如 Dunn's test，並控制多重比較造成的整體型一誤差。" },
  { type: "list", ordered: true, items: [
    "先以 Kruskal–Wallis 檢定整體 H₀。",
    "若拒絕 H₀，再進行事先規劃的 contrasts 或 Dunn 兩兩比較。",
    "使用 Holm、Bonferroni 或其他合適方法校正多重比較。",
    "報告各組樣本數、中位數與四分位距、平均等級、H、df、p 值及效果量。",
  ] },

  { type: "heading", text: "與 ANOVA 的相同處和不同處" },
  { type: "table", rows: [
    ["比較項目", "One-way ANOVA", "Kruskal–Wallis"],
    ["輸入計算的資料", "原始數值", "合併後的等級"],
    ["組間差異", "各組平均數相對總平均數", "各組平均等級相對 (N+1)/2"],
    ["整體統計量", "F", "H"],
    ["近似分布", "F 分布", "χ²(k−1)"],
    ["整體顯著後", "ANOVA 事後比較", "Dunn 等級事後比較"],
  ] },
  { type: "paragraph", text: "兩者都先回答「是否至少有一組不同」，再處理差異位於哪些組。Kruskal–Wallis 並不是看到非常態就一定取代 ANOVA；選擇仍要依資料尺度、離群值、分布形狀、變異情況與研究問題判斷。" },
  { type: "callout", tone: "forward", label: "跨章節方法表已移到附錄", text: "單一樣本、兩組獨立、兩次相依與三組以上獨立樣本的整合方法表，收錄在本章獨立的「附錄：統計方法選擇表」，不再附著於本單元。" },
];
