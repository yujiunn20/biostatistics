export const exponentialDistribution = [
  { type: "paragraph", text: "指數分配（exponential distribution）是一種連續型機率分配，常用來描述：事件以固定的平均發生率、彼此獨立地出現時，從現在開始直到下一次事件發生需要等待多久。" },
  { type: "callout", tone: "intuition", label: "先抓住核心問題", text: "卜瓦松分配關心一段時間內發生幾次；指數分配關心下一次事件還要等多久。兩者描述的是同一類隨機事件的不同面向。" },
  { type: "heading", text: "什麼情況適合使用？" },
  { type: "paragraph", text: "例如等待下一通電話、下一位顧客抵達，或設備在固定失效率假設下的失效時間。使用指數分配時，除了資料必須代表等待時間，也要考慮事件的平均發生率是否大致固定，以及不同時間區段內的事件是否可視為獨立。" },
  { type: "callout", tone: "intuition", label: "λ 是發生率，不是機率", text: "λ 表示每單位時間平均發生多少次事件。當時間區間 Δt 很短時，該區間內發生事件的機率約為 λΔt；λ 本身可以大於 1，並不受機率必須介於 0 與 1 之間的限制。" },
  { type: "heading", text: "指數分配的定義" },
  { type: "paragraph", text: "令隨機變數 X 表示等待下一次事件的時間，若事件的平均發生率為 λ，則可記為 X 服從參數 λ 的指數分配。" },
  { type: "formulaGroup", formulas: [
    { label: "分配記法", latex: "X\\sim\\operatorname{Exp}(\\lambda),\\qquad \\lambda>0", fallback: "X ~ Exp(λ)，λ>0" },
    { label: "機率密度函數", latex: "f(x)=\\begin{cases}\\lambda e^{-\\lambda x},&x\\ge 0,\\\\0,&x<0.\\end{cases}", fallback: "x≥0 時 f(x)=λe^(-λx)；x<0 時 f(x)=0" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["X", "等待下一次事件發生的時間"], ["x", "X 的某個可能取值"], ["λ", "單位時間內事件的平均發生率，且 λ>0"], ["f(x)", "等待時間在 x 附近的機率密度"], ["e", "自然對數的底數"]] },
  { type: "heading", text: "λ 如何改變曲線？" },
  { type: "paragraph", text: "密度在 x=0 時為 f(0)=λ，之後隨等待時間增加而下降。λ 越大，代表事件發生得越頻繁，曲線起點越高、下降越快，典型等待時間也越短；λ 越小則相反。" },
  { type: "image", imageId: "exponential-rate-curves" },
  { type: "callout", tone: "intuition", label: "圖形怎麼讀？", text: "每條曲線下的總面積都等於 1。曲線較高不等於總機率較大，而是機率集中在較短的等待時間內；λ 越大，右側長時間等待的機率下降得越快。" },
  { type: "heading", text: "從密度換成機率" },
  { type: "paragraph", text: "指數分配是連續型分配，所以單一時間點的機率為 0。要計算「在某段時間內發生」或「超過某段時間仍未發生」，必須使用曲線下的面積。" },
  { type: "formulaGroup", formulas: [
    { label: "累積分布函數", latex: "F(x)=P(X\\le x)=1-e^{-\\lambda x},\\qquad x\\ge0", fallback: "F(x)=P(X≤x)=1-e^(-λx)" },
    { label: "存活函數", latex: "S(x)=P(X>x)=e^{-\\lambda x},\\qquad x\\ge0", fallback: "S(x)=P(X>x)=e^(-λx)" },
    { label: "落在一段區間內", latex: "P(a<X\\le b)=F(b)-F(a)=e^{-\\lambda a}-e^{-\\lambda b}", fallback: "P(a<X≤b)=e^(-λa)-e^(-λb)" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["f(x)", "x 位置的機率密度，不是單一點的機率"], ["F(x)", "等待時間不超過 x 的累積機率"], ["S(x)", "等待超過 x、事件仍未發生的機率"], ["a、b", "所關心區間的起點與終點，0≤a<b"]] },
  { type: "heading", text: "平均等待時間與變異" },
  { type: "paragraph", text: "發生率與平均等待時間互為倒數。λ 越大，等待時間的平均值與變異程度都越小。" },
  { type: "formulaGroup", formulas: [
    { label: "期望值", latex: "E(X)=\\frac{1}{\\lambda}", fallback: "E(X)=1/λ" },
    { label: "變異數與標準差", latex: "\\operatorname{Var}(X)=\\frac{1}{\\lambda^2},\\qquad \\operatorname{SD}(X)=\\frac{1}{\\lambda}", fallback: "Var(X)=1/λ²，SD(X)=1/λ" }
  ] },
  { type: "heading", text: "無記憶性" },
  { type: "paragraph", text: "指數分配具有無記憶性（memoryless property）：在已經等待 s 時間而事件仍未發生的條件下，還要再等待超過 t 的機率，與一開始就等待超過 t 的機率相同。" },
  { type: "formula", latex: "P(X>s+t\\mid X>s)=P(X>t)=e^{-\\lambda t}", fallback: "P(X>s+t | X>s)=P(X>t)=e^(-λt)" },
  { type: "callout", tone: "intuition", label: "這是一項很強的假設", text: "已經等了多久，不會改變接下來的等待分布。若設備會老化、病人的風險會隨時間改變，固定發生率與無記憶性可能不合理，就需要考慮其他分配或模型。" },
  { type: "details", label: "補充：從小時間區間推導指數分配", children: [
    { type: "paragraph", text: "把長度為 x 的等待時間切成 n 個很短的區間，每段長度為 Δt=x/n。若事件以固定發生率 λ 出現，則在一小段內發生事件的機率約為 λx/n，沒有事件的機率約為 1-λx/n。" },
    { type: "formulaGroup", formulas: [
      { label: "每一小段沒有事件", latex: "P(\\text{no event in }\\Delta t)\\approx 1-\\lambda\\frac{x}{n}", fallback: "每一小段沒有事件的機率約為 1-λx/n" },
      { label: "前 n 段都沒有事件", latex: "P(X>x)\\approx\\left(1-\\lambda\\frac{x}{n}\\right)^n", fallback: "P(X>x)約為(1-λx/n)^n" },
      { label: "令區間越切越細", latex: "S(x)=P(X>x)=\\lim_{n\\to\\infty}\\left(1-\\lambda\\frac{x}{n}\\right)^n=e^{-\\lambda x}", fallback: "S(x)=P(X>x)=e^(-λx)" }
    ] },
    { type: "paragraph", text: "這個極限首先得到的是存活函數：到時間 x 為止仍沒有事件發生的機率。用 1 減去它可得到累積分布函數，再對 x 微分便得到機率密度函數。" },
    { type: "formulaGroup", formulas: [
      { label: "由存活函數得到累積機率", latex: "F(x)=1-S(x)=1-e^{-\\lambda x}", fallback: "F(x)=1-S(x)=1-e^(-λx)" },
      { label: "由累積機率得到密度", latex: "f(x)=F'(x)=-S'(x)=\\lambda e^{-\\lambda x}", fallback: "f(x)=F'(x)=-S'(x)=λe^(-λx)" }
    ] },
    { type: "callout", tone: "intuition", label: "保留原本推導的核心", text: "「把時間切細，再計算每一小段都沒有事件」的想法是正確且很有幫助的。需要補上的關鍵只是：極限 e^{-λx} 代表尚未發生事件的機率；密度 λe^{-λx} 則是再經由微分得到。" }
  ] },
  { type: "details", label: "補充：為什麼平均等待時間是 1/λ？", children: [
    { type: "paragraph", text: "對非負隨機變數而言，期望值可以寫成存活函數下的面積。將 S(x)=e^{-λx} 代入積分，就得到 1/λ。" },
    { type: "formula", latex: "E(X)=\\int_0^{\\infty}S(x)\\,dx=\\int_0^{\\infty}e^{-\\lambda x}\\,dx=\\frac{1}{\\lambda}", fallback: "E(X)=∫₀∞S(x)dx=∫₀∞e^(-λx)dx=1/λ" }
  ] },
  { type: "heading", text: "與卜瓦松過程的關係" },
  { type: "paragraph", text: "若 N(t) 表示時間 t 內的事件次數，且 N(t) 服從平均數為 λt 的卜瓦松分配，那麼等待第一次事件的時間 X 便服從參數 λ 的指數分配。等待超過 t，等價於時間 t 內一次事件都沒有發生。" },
  { type: "formulaGroup", formulas: [
    { label: "事件次數", latex: "N(t)\\sim\\operatorname{Poisson}(\\lambda t)", fallback: "N(t)~Poisson(λt)" },
    { label: "等待時間", latex: "P(X>t)=P(N(t)=0)=e^{-\\lambda t}", fallback: "P(X>t)=P(N(t)=0)=e^(-λt)" }
  ] },
  { type: "heading", text: "與存活分析的關係" },
  { type: "paragraph", text: "在存活分析中，指數分配相當於危險率固定為 λ 的模型。危險率表示已存活到時間 x 的條件下，接下來一小段時間內發生事件的瞬時速率。" },
  { type: "formula", latex: "h(x)=\\frac{f(x)}{S(x)}=\\lambda", fallback: "h(x)=f(x)/S(x)=λ" },
  { type: "callout", tone: "forward", label: "後面會再次用到", text: "指數分配把事件次數、等待時間與固定危險率連在一起。後續學習卜瓦松分配、存活分析及時間到事件資料時，這三種觀點會反覆出現。" },
];
