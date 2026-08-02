export const poissonDistribution = [
  { type: "paragraph", text: "卜瓦松分配（Poisson distribution）是一種離散型機率分配，用來描述固定時間、面積、體積或其他區間內，某事件發生次數 X 的機率。" },
  { type: "callout", tone: "intuition", label: "先抓住核心問題", text: "二項分配先固定試驗次數，再數成功幾次；卜瓦松分配先固定觀察區間，再數事件出現幾次。例如一小時收到幾通電話、一頁出現幾個錯字，或一定面積內有幾個菌落。" },
  { type: "heading", text: "什麼情況適合使用？" },
  { type: "list", ordered: true, items: ["X 計算固定區間內的事件發生次數", "事件以大致固定的平均發生率出現", "互不重疊區間內的事件次數可視為彼此獨立", "在非常短的區間內，發生兩次以上事件的機率可以忽略"] },
  { type: "callout", tone: "intuition", label: "固定平均發生率是一項模型假設", text: "如果尖峰與離峰的事件率差很多、事件會群聚，或一次事件會提高下一次事件的機會，單一 Poisson 分配可能不適合。此時可以改變區間、加入解釋變數，或考慮能處理額外變異的模型。" },
  { type: "heading", text: "參數 λ 代表什麼？" },
  { type: "paragraph", text: "λ 表示所選觀察區間內的預期事件次數。若每單位時間的平均發生率為 r，觀察長度為 t，則該區間的參數為 λ=rt。因此改變觀察區間長度時，λ 也會跟著改變。" },
  { type: "formulaGroup", formulas: [
    { label: "分配記法", latex: "X\\sim\\operatorname{Poisson}(\\lambda),\\qquad \\lambda>0", fallback: "X~Poisson(λ)，λ>0" },
    { label: "發生率與區間參數", latex: "\\lambda=rt", fallback: "λ=rt" },
    { label: "可能取值", latex: "x=0,1,2,\\ldots", fallback: "x=0,1,2,…" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["X", "所選區間內的事件發生次數"], ["x", "X 的某個可能取值"], ["λ", "所選區間內的預期事件次數"], ["r", "每單位區間的平均發生率"], ["t", "觀察區間的長度"]] },
  { type: "heading", text: "機率質量函數" },
  { type: "paragraph", text: "因為 X 只能取非負整數，Poisson 分配使用的是機率質量函數，而不是連續型分配的機率密度函數。下式計算區間內剛好發生 x 次事件的機率。" },
  { type: "formula", latex: "P(X=x)=\\frac{e^{-\\lambda}\\lambda^x}{x!},\\qquad x=0,1,2,\\ldots", fallback: "P(X=x)=e^(-λ)λ^x/x!" },
  { type: "table", rows: [["公式部分", "代表意義"], ["P(X=x)", "固定區間內剛好發生 x 次的機率"], ["e^(−λ)", "整個區間一次事件都沒有發生的機率"], ["λ^x", "與 x 次事件及平均發生次數相關的部分"], ["x!", "修正 x 次事件排列次序的階乘項"]] },
  { type: "heading", text: "λ 如何改變分布形狀？" },
  { type: "paragraph", text: "λ 很小時，機率主要集中在 0 與少數幾次，分布明顯右偏；λ 增加後，分布中心向右移、範圍變寬，相對偏斜程度逐漸下降。圖中的點才是 X 真正可以取得的整數位置，連線只用來幫助辨認同一組分布。" },
  { type: "image", imageId: "poisson-lambda-distributions" },
  { type: "callout", tone: "intuition", label: "圖形不要當成連續曲線", text: "Poisson 隨機變數不會取 1.5 或 2.7 次。每個整數位置的高度本身就是該點的機率，不需要再用曲線下面積換算。" },
  { type: "heading", text: "平均數與變異數相同" },
  { type: "paragraph", text: "Poisson 分配的一項重要特徵，是期望值與變異數都等於 λ。因此 λ 越大，不只平均事件數增加，事件次數的絕對波動也會增加；標準差則為 √λ。" },
  { type: "formulaGroup", formulas: [
    { label: "期望值", latex: "E(X)=\\lambda", fallback: "E(X)=λ" },
    { label: "變異數", latex: "\\operatorname{Var}(X)=\\lambda", fallback: "Var(X)=λ" },
    { label: "標準差", latex: "\\operatorname{SD}(X)=\\sqrt{\\lambda}", fallback: "SD(X)=√λ" }
  ] },
  { type: "callout", tone: "intuition", label: "資料中的平均數與變異數不必剛好相等", text: "E(X)=Var(X)=λ 是理論模型的性質，有限樣本算出的樣本平均數與樣本變異數通常不會完全相等。若變異數長期明顯大於平均數，可能存在群聚、個體差異或遺漏變數，稱為過度離散。" },
  { type: "heading", text: "常用機率" },
  { type: "paragraph", text: "沒有事件發生的機率特別重要；利用反事件，可以立刻得到至少發生一次的機率。" },
  { type: "formulaGroup", formulas: [
    { label: "一次都沒有", latex: "P(X=0)=e^{-\\lambda}", fallback: "P(X=0)=e^(-λ)" },
    { label: "至少一次", latex: "P(X\\ge1)=1-P(X=0)=1-e^{-\\lambda}", fallback: "P(X≥1)=1-e^(-λ)" },
    { label: "至多 k 次", latex: "P(X\\le k)=\\sum_{x=0}^{k}\\frac{e^{-\\lambda}\\lambda^x}{x!}", fallback: "P(X≤k)=從 x=0 到 k 的 Poisson 機率總和" }
  ] },
  { type: "details", label: "補充：由二項分配完整推導 Poisson 公式", children: [
    { type: "heading", text: "第一步：把觀察區間切成很多小段" },
    { type: "paragraph", text: "假設整個觀察區間平均發生 λ 次事件。將區間切成 n 個很短的小段；當 n 很大時，每小段發生一次事件的機率可近似為 λ/n，而發生兩次以上的機率可以忽略。於是小段是否發生事件可暫時看成二項試驗。" },
    { type: "formulaGroup", formulas: [
      { label: "小段的事件機率", latex: "p_n=\\frac{\\lambda}{n}", fallback: "pₙ=λ/n" },
      { label: "有限 n 時的二項模型", latex: "X_n\\sim\\operatorname{Binomial}\\!\\left(n,\\frac{\\lambda}{n}\\right)", fallback: "Xₙ~Binomial(n,λ/n)" },
      { label: "剛好發生 x 次", latex: "P(X_n=x)=\\binom{n}{x}\\left(\\frac{\\lambda}{n}\\right)^x\\left(1-\\frac{\\lambda}{n}\\right)^{n-x}", fallback: "P(Xₙ=x)=C(n,x)(λ/n)^x(1-λ/n)^(n-x)" }
    ] },
    { type: "heading", text: "第二步：把式子拆成三個可以分別取極限的部分" },
    { type: "paragraph", text: "先展開組合數，再把 λ^x/x!、與 n 有關的排列比值，以及沒有事件的小段機率分開。原文中的三個極限就是在這一步出現。" },
    { type: "formula", latex: "P(X_n=x)=\\underbrace{\\frac{n!}{n^x(n-x)!}}_{A_n}\\frac{\\lambda^x}{x!}\\underbrace{\\left(1-\\frac{\\lambda}{n}\\right)^n}_{B_n}\\underbrace{\\left(1-\\frac{\\lambda}{n}\\right)^{-x}}_{C_n}", fallback: "將二項機率拆成 Aₙ、λ^x/x!、Bₙ、Cₙ 四部分" },
    { type: "heading", text: "第三步：分別計算三個極限" },
    { type: "paragraph", text: "取極限時 x 保持固定，而 n 越來越大。第一項可以寫成有限個接近 1 的因子乘積；第二項使用指數函數的經典極限；第三項的底數趨近 1、次方固定，所以也趨近 1。" },
    { type: "formulaGroup", formulas: [
      { label: "排列比值", latex: "A_n=\\frac{n(n-1)\\cdots(n-x+1)}{n^x}=\\prod_{j=0}^{x-1}\\left(1-\\frac{j}{n}\\right)\\longrightarrow1", fallback: "n!/[n^x(n-x)!]→1" },
      { label: "指數極限", latex: "B_n=\\left(1-\\frac{\\lambda}{n}\\right)^n\\longrightarrow e^{-\\lambda}", fallback: "(1-λ/n)^n→e^(-λ)" },
      { label: "固定次方", latex: "C_n=\\left(1-\\frac{\\lambda}{n}\\right)^{-x}\\longrightarrow1", fallback: "(1-λ/n)^(-x)→1" }
    ] },
    { type: "paragraph", text: "將三個極限代回，便得到 Poisson 機率質量函數。" },
    { type: "formula", latex: "\\lim_{n\\to\\infty}P(X_n=x)=1\\cdot\\frac{\\lambda^x}{x!}\\cdot e^{-\\lambda}\\cdot1=\\frac{e^{-\\lambda}\\lambda^x}{x!}", fallback: "當 n→∞，二項機率趨近 e^(-λ)λ^x/x!" },
    { type: "callout", tone: "intuition", label: "這個極限保留了什麼？", text: "n 越來越大、每次成功機率 λ/n 越來越小，但乘積 n(λ/n)=λ 始終不變。因此有限區間內的預期事件數仍為 λ，二項分配就在這個極限下轉成 Poisson 分配。" },
    { type: "table", rows: [["符號", "在推導中的意義"], ["n", "切分的小區間數，最後令 n→∞"], ["λ/n", "每一小區間內發生事件的近似機率"], ["x", "整個區間內觀察到的事件數；取極限時保持固定"], ["Aₙ", "從組合數與 n^x 形成的排列比值"], ["Bₙ", "所有小段大致沒有事件所形成的指數極限"], ["Cₙ", "拆開 n−x 次方後留下的固定次方修正"]] }
  ] },
  { type: "heading", text: "由二項分配近似" },
  { type: "paragraph", text: "上述推導也解釋了實務上的近似：當二項分配的 n 很大、p 很小，而且 λ=np 維持適中的大小時，可以用 Poisson(λ) 近似成功次數。這適合大量機會中少數事件發生的情況。" },
  { type: "formula", latex: "X\\sim\\operatorname{Binomial}(n,p),\\quad n\\text{ large},\\ p\\text{ small},\\ \\lambda=np\\quad\\Longrightarrow\\quad X\\approx\\operatorname{Poisson}(\\lambda)", fallback: "n 大、p 小且 λ=np 時，Binomial(n,p) 可近似 Poisson(λ)" },
  { type: "heading", text: "與指數分配的關係" },
  { type: "paragraph", text: "在發生率為 r 的 Poisson 過程中，N(t) 計算長度 t 內的事件次數，因此 N(t)~Poisson(rt)；等待下一次事件的時間 T 則服從 Exp(r)。一個數事件次數，另一個量事件間隔。" },
  { type: "formulaGroup", formulas: [
    { label: "固定時間內的事件次數", latex: "N(t)\\sim\\operatorname{Poisson}(rt)", fallback: "N(t)~Poisson(rt)" },
    { label: "下一次事件的等待時間", latex: "T\\sim\\operatorname{Exp}(r)", fallback: "T~Exp(r)" },
    { label: "等待超過 t 等於期間內沒有事件", latex: "P(T>t)=P(N(t)=0)=e^{-rt}", fallback: "P(T>t)=P(N(t)=0)=e^(-rt)" }
  ] },
  { type: "heading", text: "獨立 Poisson 次數可以相加" },
  { type: "paragraph", text: "若不同來源的事件次數彼此獨立，總事件數仍服從 Poisson 分配，參數等於各來源參數相加。這讓不同時間區段、地區或事件來源的計數可以自然合併。" },
  { type: "formula", latex: "X_i\\sim\\operatorname{Poisson}(\\lambda_i)\\text{ independently}\\quad\\Longrightarrow\\quad\\sum_{i=1}^{m}X_i\\sim\\operatorname{Poisson}\\!\\left(\\sum_{i=1}^{m}\\lambda_i\\right)", fallback: "獨立 Poisson 變數相加後，參數也相加" },
  { type: "callout", tone: "forward", label: "後面會再次用到", text: "Poisson 分配會用在事件率、發生次數及列聯表的模型中；它與指數等待時間、二項稀有事件近似及 Poisson 迴歸也具有直接關係。", related: ["02/binomial-distribution", "02/exponential-distribution"] },
];
