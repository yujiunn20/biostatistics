export const binomialDistribution = [
  { type: "paragraph", text: "二項分配（binomial distribution）描述的是：在固定次數、彼此獨立且成功機率相同的重複試驗中，成功次數 X 的機率分布。它是一種離散型機率分配。" },
  { type: "callout", tone: "intuition", label: "先抓住核心問題", text: "每一次試驗只記錄成功或失敗；二項分配不是預測某一次會不會成功，而是計算重複 n 次後，總共成功 x 次的機率。這裡的「成功」只是我們關心的結果，不一定代表好事。" },
  { type: "heading", text: "使用二項分配的四個條件" },
  { type: "list", ordered: true, items: ["試驗次數 n 事先固定", "每次試驗只有兩種互斥結果，通常標記為成功與失敗", "各次試驗彼此獨立，一次結果不改變另一次結果", "每次試驗的成功機率都相同，記為 p；失敗機率為 q=1-p"] },
  { type: "callout", tone: "intuition", label: "不是所有二分類資料都符合二項分配", text: "只有兩種結果還不夠。如果抽樣不放回且母體不大，各次結果可能不獨立；如果成功機率會隨時間或個體改變，也不符合單一二項分配的設定。" },
  { type: "heading", text: "二項分配的記法" },
  { type: "paragraph", text: "令 X 表示 n 次試驗中的成功次數，每次成功機率為 p，則 X 服從參數 n 與 p 的二項分配。X 只能取 0、1、2，直到 n。" },
  { type: "formulaGroup", formulas: [
    { label: "分配記法", latex: "X\\sim\\operatorname{Binomial}(n,p)", fallback: "X ~ Binomial(n,p)" },
    { label: "可能取值", latex: "x=0,1,2,\\ldots,n", fallback: "x=0,1,2,…,n" },
    { label: "失敗機率", latex: "q=1-p", fallback: "q=1-p" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["X", "n 次試驗中的成功總次數"], ["x", "X 的某個可能取值"], ["n", "固定的試驗總次數"], ["p", "每一次試驗的成功機率"], ["q", "每一次試驗的失敗機率，q=1-p"]] },
  { type: "heading", text: "剛好成功 x 次的機率" },
  { type: "paragraph", text: "先指定一種成功與失敗的排列：其中有 x 次成功、n-x 次失敗，其機率等於各次試驗機率的乘積。但成功可以出現在不同位置，因此還要乘上從 n 個位置選出 x 個成功位置的組合數。" },
  { type: "formulaGroup", formulas: [
    { label: "一個指定排列的機率", latex: "p^x(1-p)^{n-x}", fallback: "p^x(1-p)^(n-x)" },
    { label: "剛好成功 x 次的總機率", latex: "P(X=x)=\\binom{n}{x}p^x(1-p)^{n-x},\\qquad x=0,1,\\ldots,n", fallback: "P(X=x)=C(n,x)p^x(1-p)^(n-x)" },
    { label: "成功位置的組合數", latex: "\\binom{n}{x}=\\frac{n!}{x!(n-x)!}", fallback: "C(n,x)=n!/[x!(n-x)!]" }
  ] },
  { type: "table", rows: [["公式部分", "代表意義"], ["p^x", "指定排列中的 x 次成功"], ["(1-p)^(n-x)", "指定排列中的 n-x 次失敗"], ["C(n,x)", "x 次成功可安排在 n 個位置中的方式數"], ["P(X=x)", "所有可能排列加總後，剛好成功 x 次的機率"]] },
  { type: "callout", tone: "intuition", label: "為什麼一定要乘組合數？", text: "以 3 次試驗成功 2 次為例，成功可能排列成「成功、成功、失敗」、「成功、失敗、成功」或「失敗、成功、成功」。三種排列的成功次數相同，所以機率必須全部加起來。" },
  { type: "heading", text: "累積機率怎麼算？" },
  { type: "paragraph", text: "二項公式給的是剛好成功 x 次的機率。若問題問「至多」、「至少」或某個範圍，就要把符合條件的多個 x 值相加；計算至少成功 k 次時，也常用反事件簡化。" },
  { type: "formulaGroup", formulas: [
    { label: "至多成功 k 次", latex: "P(X\\le k)=\\sum_{x=0}^{k}\\binom{n}{x}p^x(1-p)^{n-x}", fallback: "P(X≤k)=從 x=0 到 k 的二項機率總和" },
    { label: "至少成功 k 次", latex: "P(X\\ge k)=1-P(X\\le k-1)", fallback: "P(X≥k)=1-P(X≤k-1)" }
  ] },
  { type: "heading", text: "平均成功次數與變異" },
  { type: "paragraph", text: "n 次試驗中，每一次平均貢獻 p 次成功，因此總成功次數的平均值為 np。單次成功指標的變異數為 p(1-p)；在各次試驗獨立時，n 次變異數相加得到 np(1-p)。" },
  { type: "formulaGroup", formulas: [
    { label: "期望值", latex: "E(X)=np", fallback: "E(X)=np" },
    { label: "變異數", latex: "\\operatorname{Var}(X)=np(1-p)=npq", fallback: "Var(X)=np(1-p)=npq" },
    { label: "標準差", latex: "\\operatorname{SD}(X)=\\sqrt{np(1-p)}", fallback: "SD(X)=√[np(1-p)]" }
  ] },
  { type: "callout", tone: "intuition", label: "期望值不必是可能出現的整數", text: "例如 n=5、p=0.5 時，E(X)=2.5。這不表示一次實驗會成功 2.5 次，而是大量重複整組實驗後，成功次數的長期平均會接近 2.5。" },
  { type: "details", label: "補充：用成功指標快速推導平均數與變異數", children: [
    { type: "paragraph", text: "令 I_i 表示第 i 次試驗是否成功：成功時 I_i=1，失敗時 I_i=0。總成功次數就是所有成功指標的總和。" },
    { type: "formulaGroup", formulas: [
      { label: "成功次數", latex: "X=I_1+I_2+\\cdots+I_n", fallback: "X=I₁+I₂+…+Iₙ" },
      { label: "單次試驗", latex: "E(I_i)=p,\\qquad \\operatorname{Var}(I_i)=p(1-p)", fallback: "E(Iᵢ)=p，Var(Iᵢ)=p(1-p)" }
    ] },
    { type: "paragraph", text: "期望值具有可加性；而試驗彼此獨立時，共變異數為 0，因此變異數也可以直接相加。" },
    { type: "formulaGroup", formulas: [
      { label: "平均數", latex: "E(X)=\\sum_{i=1}^{n}E(I_i)=np", fallback: "E(X)=ΣE(Iᵢ)=np" },
      { label: "變異數", latex: "\\operatorname{Var}(X)=\\sum_{i=1}^{n}\\operatorname{Var}(I_i)=np(1-p)", fallback: "Var(X)=ΣVar(Iᵢ)=np(1-p)" }
    ] }
  ] },
  { type: "details", label: "補充：依原公式推導 E(X) 與 Var(X)", children: [
    { type: "heading", text: "期望值的推導" },
    { type: "paragraph", text: "從二項機率質量函數直接計算期望值，利用 x C(n,x)=np C(n-1,x-1)/p 的組合關係，把剩餘總和辨認成參數 n-1、p 的完整二項機率和，因此其值為 1。" },
    { type: "formula", latex: "E(X)=\\sum_{x=1}^{n}x\\binom{n}{x}p^x(1-p)^{n-x}", fallback: "E(X)=ΣxC(n,x)p^x(1-p)^(n-x)" },
    { type: "formula", latex: "E(X)=np\\sum_{x=1}^{n}\\binom{n-1}{x-1}p^{x-1}(1-p)^{(n-1)-(x-1)}=np", fallback: "E(X)=np乘上一個完整二項機率和=np" },
    { type: "heading", text: "變異數的推導" },
    { type: "paragraph", text: "先計算階乘動差 E[X(X-1)]，再利用 X²=X(X-1)+X 得到 E(X²)，最後代入 Var(X)=E(X²)-[E(X)]²。" },
    { type: "formulaGroup", formulas: [
      { label: "第二階階乘動差", latex: "E[X(X-1)]=n(n-1)p^2", fallback: "E[X(X-1)]=n(n-1)p²" },
      { label: "二次動差", latex: "E(X^2)=n(n-1)p^2+np", fallback: "E(X²)=n(n-1)p²+np" },
      { label: "整理變異數", latex: "\\operatorname{Var}(X)=E(X^2)-[E(X)]^2=np(1-p)", fallback: "Var(X)=E(X²)-[E(X)]²=np(1-p)" }
    ] }
  ] },
  { type: "heading", text: "二項分配何時接近常態分配？" },
  { type: "paragraph", text: "你原本的直覺是正確的：n 越大，而且 p 不太靠近 0 或 1 時，二項分配通常越接近鐘形的常態分配。只用「n 至少 20」仍可能不夠，因為 p 很小或很大時，成功或失敗的預期次數可能仍然太少。" },
  { type: "callout", tone: "intuition", label: "較實用的檢查方式", text: "常見經驗準則是同時檢查 np 與 n(1-p) 是否至少為 5；較保守時會要求至少為 10。兩者越大，常態近似通常越好。這是近似品質的判斷準則，不是二項分配本身成立的條件。" },
  { type: "formulaGroup", formulas: [
    { label: "近似的常態分配", latex: "X\\approx N\\!\\left(np,\\,np(1-p)\\right)", fallback: "X 約服從 N(np,np(1-p))" },
    { label: "標準化", latex: "Z=\\frac{X-np}{\\sqrt{np(1-p)}}\\approx N(0,1)", fallback: "Z=[X-np]/√[np(1-p)] 約服從 N(0,1)" }
  ] },
  { type: "paragraph", text: "因為二項分配是離散的、常態分配是連續的，實際近似機率時可使用連續性校正。例如 P(X≤k) 以常態近似時，將邊界 k 改為 k+0.5，再計算常態曲線下的面積。" },
  { type: "formula", latex: "P(X\\le k)\\approx P(Y\\le k+0.5),\\qquad Y\\sim N\\!\\left(np,np(1-p)\\right)", fallback: "P(X≤k) 約等於 P(Y≤k+0.5)" },
  { type: "heading", text: "和其他分配的關係" },
  { type: "list", items: ["伯努利分配：n=1 的二項分配就是一次成功／失敗試驗", "多項分配：當每次試驗不只兩種結果時，可視為二項分配向多類別的推廣", "卜瓦松分配：n 很大、p 很小且 np 保持適中時，可用參數 λ=np 的卜瓦松分配近似", "常態分配：np 與 n(1-p) 足夠大時，可用平均數 np、變異數 np(1-p) 的常態分配近似"] },
  { type: "callout", tone: "forward", label: "後面會再次用到", text: "二項分配會成為二項檢定、兩比例比較及部分 2×2 表方法的基礎；常態近似與連續性校正則會在大樣本檢定中再次出現。" },
];

