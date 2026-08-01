export const survivalCurve = [
  { type: "paragraph", text: "存活分析（survival analysis）研究的是從明確起點到事件發生所經過的時間。事件可以是死亡，也可以是復發、痊癒、設備故障或其他事先定義的結果；因此「存活」在公式中代表事件尚未發生，不一定只指仍然存活。" },
  { type: "callout", tone: "intuition", label: "這一頁要解決的問題", text: "若每個人都追蹤到事件發生，某時間點的存活比例可以直接計數；但研究結束或受試者離開時，部分人的事件時間只知道大於目前追蹤時間。Kaplan–Meier 方法要在不把這些截尾者當成事件的情況下，利用他們已經提供的追蹤資訊估計存活曲線。" },

  { type: "heading", text: "母體存活函數與樣本存活曲線" },
  { type: "paragraph", text: "令非負隨機變數 T 表示從研究起點到事件發生的時間。母體存活函數 S(t) 是事件時間超過 t 的機率，也就是個體在時間 t 之後仍未發生事件的機率。" },
  { type: "formulaGroup", formulas: [
    { label: "母體存活函數", latex: "S(t)=P(T>t)=1-F(t)", fallback: "S(t)=P(T>t)=1−F(t)" },
    { label: "沒有截尾時的樣本比例", latex: "\\hat S(t)=\\frac{\\#\\{T_i>t\\}}{n}", fallback: "Ŝ(t)=樣本中事件時間超過 t 的人數/n" },
  ] },
  { type: "paragraph", text: "沒有截尾時，Ŝ(t) 就是目前仍未發生事件的人數除以原始樣本數。但有截尾資料時，不能把離開研究的人算成事件，也不能在後續時間繼續把他放在分母；因此需要隨時間更新仍在風險中的人數。" },

  { type: "heading", text: "事件、右截尾與時間起點" },
  { type: "paragraph", text: "右截尾（right censoring）表示在最後一次知道個體仍未發生事件的時間之後，真正事件時間未知。例如研究結束時仍未發生事件、失去追蹤或因其他原因退出，都可能形成右截尾。這筆資料仍告訴我們 T 大於已追蹤時間，所以不能直接刪除。" },
  { type: "image", imageId: "survival-participant-timelines" },
  { type: "paragraph", text: "圖 A 以 calendar time 顯示不同受試者在不同日期進入研究；直接比較線段終點會混合入組日期與實際追蹤長度。圖 B 把每個人的入組時間對齊為 t=0，橫軸才是 survival time。實心圓代表觀察到事件，空心圓與短線代表右截尾。" },
  { type: "callout", tone: "caution", label: "截尾不會讓存活曲線下降", text: "截尾者在截尾以前仍屬於風險集，截尾之後才從分母移除。曲線只在觀察到事件的時間下降；截尾時間通常只在曲線上留下標記，不會被當成死亡或其他事件。" },

  { type: "heading", text: "Kaplan–Meier 為什麼要分段相乘？" },
  { type: "paragraph", text: "將不同事件時間由小到大記為 t₁,t₂,…。在第 j 個事件時間發生前，令 nⱼ 為仍在風險集的人數，dⱼ 為該時間發生的事件數。從該時間點存活過去的條件比例是 (nⱼ−dⱼ)/nⱼ。" },
  { type: "formulaGroup", formulas: [
    { label: "第 j 個事件時間的條件存活比例", latex: "P(T>t_j\\mid T\\ge t_j)=\\frac{n_j-d_j}{n_j}", fallback: "第 j 段存活比例=(nⱼ−dⱼ)/nⱼ" },
    { label: "Kaplan–Meier product-limit estimator", latex: "\\hat S(t)=\\prod_{t_j\\le t}\\left(\\frac{n_j-d_j}{n_j}\\right)", fallback: "Ŝ(t)=Π(tⱼ≤t)[(nⱼ−dⱼ)/nⱼ]" },
  ] },
  { type: "paragraph", text: "存活超過後一個時間點，必須先存活超過前面的所有事件時間，所以各段使用乘法而不是加法。每發生一次事件，就在前一階的累積存活率上乘上新的條件存活比例，形成向下的階梯曲線。" },
  { type: "callout", tone: "intuition", label: "風險集 nⱼ 是公式的核心", text: "nⱼ 不是研究最初的總人數，而是 tⱼ 發生前仍未發生事件、也尚未被截尾的人數。同一時間若同時有事件與截尾，計算通常先讓仍在風險集的人承擔該時間的事件風險，再依資料時間定義處理截尾。" },

  { type: "heading", text: "利用 10 位受試者逐步計算" },
  { type: "paragraph", text: "把圖中的追蹤時間由小到大排列。時間後面的「+」表示右截尾；截尾列不建立新的存活乘數，因此累積存活率維持不變。下表使用與重製圖相同的資料。" },
  { type: "table", rows: [
    ["Participant", "Survival time, tᵢ", "Number at risk, nᵢ", "Events, dᵢ", "Conditional survival", "Kaplan–Meier estimate, Ŝ(t)"],
    ["J", "2", "10", "1", "9/10 = 0.900", "0.900"],
    ["H", "6", "9", "1", "8/9 = 0.889", "0.800"],
    ["A and C", "7", "8", "2", "6/8 = 0.750", "0.600"],
    ["I", "7+", "—", "—", "Censored", "Unchanged: 0.600"],
    ["F", "8", "5", "1", "4/5 = 0.800", "0.480"],
    ["G", "9", "4", "1", "3/4 = 0.750", "0.360"],
    ["E", "11+", "—", "—", "Censored", "Unchanged: 0.360"],
    ["B", "12", "2", "1", "1/2 = 0.500", "0.180"],
    ["D", "12+", "—", "—", "Censored", "Unchanged: 0.180"],
  ] },
  { type: "formulaGroup", formulas: [
    { label: "t=2", latex: "\\hat S(2)=\\frac9{10}=0.900", fallback: "Ŝ(2)=9/10=0.900" },
    { label: "t=6", latex: "\\hat S(6)=\\frac9{10}\\frac8{9}=0.800", fallback: "Ŝ(6)=(9/10)(8/9)=0.800" },
    { label: "t=7：同時發生兩個事件", latex: "\\hat S(7)=0.800\\times\\frac{8-2}{8}=0.600", fallback: "Ŝ(7)=0.800×(8−2)/8=0.600" },
    { label: "t=8", latex: "\\hat S(8)=0.600\\times\\frac45=0.480", fallback: "Ŝ(8)=0.600×4/5=0.480" },
    { label: "t=9", latex: "\\hat S(9)=0.480\\times\\frac34=0.360", fallback: "Ŝ(9)=0.480×3/4=0.360" },
    { label: "t=12", latex: "\\hat S(12)=0.360\\times\\frac12=0.180", fallback: "Ŝ(12)=0.360×1/2=0.180" },
  ] },
  { type: "paragraph", text: "t=7 發生 A、C 兩個事件後，風險集由 8 人減為 6 人；I 又在 7+ 被截尾，所以進入 t=8 前只剩 5 人。E 在 11+ 被截尾後，t=12 的風險集只剩 B、D 兩人。這正是不能始終用原始 10 人作分母的原因。" },

  { type: "heading", text: "Greenwood 公式：存活率的不確定性" },
  { type: "paragraph", text: "Ŝ(t) 是由樣本估計的階梯曲線，不同樣本會得到不同結果。Greenwood 公式把每個事件時間的變異貢獻 dⱼ/[nⱼ(nⱼ−dⱼ)] 累加，再乘上目前累積存活率的平方，得到 Ŝ(t) 的估計變異數。" },
  { type: "formulaGroup", formulas: [
    { label: "Greenwood variance", latex: "\\widehat{\\operatorname{Var}}\\!\\left[\\hat S(t)\\right]=\\hat S(t)^2\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}", fallback: "Var[Ŝ(t)]=Ŝ(t)²Σ dⱼ/[nⱼ(nⱼ−dⱼ)]" },
    { label: "Standard error", latex: "SE\\!\\left[\\hat S(t)\\right]=\\hat S(t)\\sqrt{\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}}", fallback: "SE[Ŝ(t)]=Ŝ(t)√Σ dⱼ/[nⱼ(nⱼ−dⱼ)]" },
  ] },
  { type: "paragraph", text: "原始表格中的 standard deviation 更精確地說是 standard error，因為它描述的是估計曲線 Ŝ(t) 在重複抽樣下的不確定性，而不是個別受試者存活時間的標準差。" },

  { type: "heading", text: "重建 Greenwood 標準誤與 95% 信賴區間表" },
  { type: "table", rows: [
    ["Participant", "Time, tᵢ", "At risk, nᵢ", "Events, dᵢ", "Conditional survival", "Ŝ(t)", "dᵢ/[nᵢ(nᵢ−dᵢ)]", "SE[Ŝ(t)]", "Lower 95% CI", "Upper 95% CI"],
    ["J", "2", "10", "1", "0.900", "0.900", "0.011", "0.095", "0.714", "1.000*"],
    ["H", "6", "9", "1", "0.889", "0.800", "0.014", "0.126", "0.552", "1.000*"],
    ["A and C", "7", "8", "2", "0.750", "0.600", "0.042", "0.155", "0.296", "0.904"],
    ["I", "7+", "—", "—", "Censored", "—", "—", "—", "—", "—"],
    ["F", "8", "5", "1", "0.800", "0.480", "0.050", "0.164", "0.159", "0.801"],
    ["G", "9", "4", "1", "0.750", "0.360", "0.083", "0.161", "0.044", "0.676"],
    ["E", "11+", "—", "—", "Censored", "—", "—", "—", "—", "—"],
    ["B", "12", "2", "1", "0.500", "0.180", "0.500", "0.151", "0.000*", "0.475"],
    ["D", "12+", "—", "—", "Censored", "—", "—", "—", "—", "—"],
  ] },
  { type: "formulaGroup", formulas: [
    { label: "一般 Wald 型信賴區間", latex: "\\hat S(t)\\pm z_{1-\\alpha/2}SE\\!\\left[\\hat S(t)\\right]", fallback: "Ŝ(t)±z(1−α/2)SE[Ŝ(t)]" },
    { label: "95% 信賴區間", latex: "\\hat S(t)\\pm1.96\\,SE\\!\\left[\\hat S(t)\\right]", fallback: "Ŝ(t)±1.96SE[Ŝ(t)]" },
  ] },
  { type: "callout", tone: "caution", label: "表中的 * 代表截在 0 或 1", text: "普通 Wald 區間可能算出小於 0 或大於 1 的界線，但存活機率只能位於 0 到 1。表格依原始作法把超出範圍的數值截回 0 或 1；這種直接截斷雖容易理解，區間涵蓋表現未必理想，因此實務上常改用轉換後的信賴區間。" },

  { type: "heading", text: "log–log 轉換為什麼較適合機率？" },
  { type: "paragraph", text: "令 g(t)=ln[−ln Ŝ(t)]。只要 0<Ŝ(t)<1，g(t) 可以落在整條實數線上；先在 g(t) 的尺度建立對稱區間，再轉回存活機率，就能自然把上下界保留在 0 與 1 之間。" },
  { type: "formulaGroup", formulas: [
    { label: "轉換後的標準誤", latex: "SE\\!\\left\\{\\ln[-\\ln\\hat S(t)]\\right\\}=\\sqrt{\\frac{1}{[\\ln\\hat S(t)]^2}\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}}", fallback: "SE{ln[−ln Ŝ(t)]}=√{1/[ln Ŝ(t)]² · Σdⱼ/[nⱼ(nⱼ−dⱼ)]}" },
    { label: "先在 log–log 尺度建立區間", latex: "g(t)\\pm z_{1-\\alpha/2}SE\\{g(t)\\}", fallback: "g(t)±z(1−α/2)SE{g(t)}" },
    { label: "轉回存活率尺度", latex: "\\hat S(t)^{\\exp[z_{1-\\alpha/2}SE\\{g(t)\\}]}<S(t)<\\hat S(t)^{\\exp[-z_{1-\\alpha/2}SE\\{g(t)\\}]}", fallback: "Ŝ(t)^exp(+zSEg) < S(t) < Ŝ(t)^exp(−zSEg)" },
  ] },
  { type: "callout", tone: "intuition", label: "為什麼下界反而使用正號？", text: "當 0<Ŝ(t)<1 時，次方的指數越大，結果反而越小。因此 exp(+zSE) 對應較小的存活率下界，exp(−zSE) 對應較大的上界；若只照一般加減順序抄寫，很容易把兩端顛倒。" },

  { type: "heading", text: "Hazard function 與 survival function 的關係" },
  { type: "paragraph", text: "存活函數回答「到時間 t 仍未發生事件的機率」；危險函數 h(t) 則回答「已經存活到 t 的個體，在接下來極短時間內發生事件的瞬時速率」。分母必須以目前仍在風險中的個體為條件，而不是以最初全體為分母。" },
  { type: "formulaGroup", formulas: [
    { label: "Hazard function", latex: "h(t)=\\lim_{\\Delta t\\to0}\\frac{P(t\\le T<t+\\Delta t\\mid T\\ge t)}{\\Delta t}", fallback: "h(t)=lim(Δt→0) P(t≤T<t+Δt | T≥t)/Δt" },
    { label: "與機率密度及存活函數的關係", latex: "h(t)=\\frac{f(t)}{S(t)}", fallback: "h(t)=f(t)/S(t)" },
    { label: "由 F(t)=1−S(t) 得到", latex: "f(t)=F'(t)=-S'(t)\\quad\\Longrightarrow\\quad h(t)=-\\frac{S'(t)}{S(t)}", fallback: "f(t)=F′(t)=−S′(t)，因此 h(t)=−S′(t)/S(t)" },
    { label: "累積危險函數", latex: "H(t)=\\int_0^t h(u)\\,du=-\\ln S(t)\\quad\\Longleftrightarrow\\quad S(t)=e^{-H(t)}", fallback: "H(t)=∫₀ᵗh(u)du=−ln S(t)，S(t)=e^(−H(t))" },
  ] },
  { type: "paragraph", text: "f(t) 描述事件時間落在 t 附近、相對於原始母體的密度；除以 S(t) 後，才轉成以已經存活到 t 的風險集為基準的瞬時事件率。這也說明了累積危險 H(t)=−ln S(t)，並連回前面 log–log 信賴區間使用的轉換。" },

  { type: "heading", text: "使用 Kaplan–Meier 估計前要確認什麼？" },
  { type: "list", ordered: true, items: [
    "為每位受試者定義一致的時間起點、事件與最後追蹤時間。",
    "分清楚 event indicator：事件與右截尾不能用同一個代碼解讀。",
    "確認受試者彼此獨立；若有群聚或重複事件，需要其他模型處理相依性。",
    "考慮截尾是否近似非資訊性：在已知資料條件下，被截尾者後續的事件風險不應因截尾機制而系統性不同。",
    "報告各時間點的風險集人數、事件數、截尾標記、Ŝ(t) 與信賴區間，並避免過度解讀尾端只剩少數人的曲線。",
  ] },
];
