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
  { type: "details", label: "補充：依原公式完整推導 E(X) 與 Var(X)", children: [
    { type: "callout", tone: "intuition", label: "這段推導真正使用的技巧", text: "重點不是硬把每一項算完，而是用組合恆等式消去求和式前面的 x 或 x(x−1)，再透過換元把剩餘部分辨認成一個完整的二項分配。完整機率和等於 1，因此看似複雜的總和便能直接化簡。" },
    { type: "heading", text: "第一部分：推導 E(X)=np" },
    { type: "paragraph", text: "從離散型隨機變數的期望值定義開始。因為 x=0 的那一項等於 0，所以總和可從 x=1 開始。" },
    { type: "formula", latex: "E(X)=\\sum_{x=1}^{n}x\\binom{n}{x}p^x(1-p)^{n-x}", fallback: "E(X)=從 x=1 到 n 的 xC(n,x)p^x(1-p)^(n-x) 總和" },
    { type: "paragraph", text: "接著使用第一個組合恆等式。它的作用，是把前面的 x 吸收到組合數中，並將 n 次選 x 個位置改寫成先固定一個成功位置，再從其餘 n−1 個位置選 x−1 個。" },
    { type: "formulaGroup", formulas: [
      { label: "組合恆等式", latex: "x\\binom{n}{x}=n\\binom{n-1}{x-1}", fallback: "xC(n,x)=nC(n-1,x-1)" },
      { label: "同時從 p 的次方提出一個 p", latex: "p^x=p\\,p^{x-1}", fallback: "p^x=p·p^(x-1)" }
    ] },
    { type: "paragraph", text: "代回期望值後，可以把與 x 無關的 n 與 p 提到總和外面。" },
    { type: "formula", latex: "E(X)=np\\sum_{x=1}^{n}\\binom{n-1}{x-1}p^{x-1}(1-p)^{n-x}", fallback: "E(X)=np乘上從 x=1 到 n 的 C(n-1,x-1)p^(x-1)(1-p)^(n-x) 總和" },
    { type: "paragraph", text: "令 j=x−1。當 x 從 1 走到 n 時，j 便從 0 走到 n−1；而 n−x=(n−1)−j。換元後，總和正好是參數 n−1、p 的所有二項機率之和。" },
    { type: "formulaGroup", formulas: [
      { label: "換元", latex: "j=x-1,\\qquad j=0,1,\\ldots,n-1", fallback: "令 j=x-1，則 j=0,1,…,n-1" },
      { label: "完整二項機率和", latex: "\\sum_{j=0}^{n-1}\\binom{n-1}{j}p^j(1-p)^{(n-1)-j}=[p+(1-p)]^{n-1}=1", fallback: "所有 Binomial(n-1,p) 機率相加為 1" },
      { label: "得到期望值", latex: "E(X)=np\\times1=np", fallback: "E(X)=np" }
    ] },
    { type: "heading", text: "第二部分：先求 E[X(X−1)]" },
    { type: "paragraph", text: "若直接計算 E(X²)，組合數前會留下 x²，不容易立即化簡。原文採用的技巧是先計算第二階階乘動差 E[X(X−1)]；因為 x=0、1 的項都等於 0，所以總和從 x=2 開始。" },
    { type: "formula", latex: "E[X(X-1)]=\\sum_{x=2}^{n}x(x-1)\\binom{n}{x}p^x(1-p)^{n-x}", fallback: "E[X(X-1)]=從 x=2 到 n 的 x(x-1)C(n,x)p^x(1-p)^(n-x) 總和" },
    { type: "paragraph", text: "這次使用第二個組合恆等式，把 x(x−1) 吸收到組合數中；同時從 p^x 提出 p²。" },
    { type: "formulaGroup", formulas: [
      { label: "第二個組合恆等式", latex: "x(x-1)\\binom{n}{x}=n(n-1)\\binom{n-2}{x-2}", fallback: "x(x-1)C(n,x)=n(n-1)C(n-2,x-2)" },
      { label: "從成功機率提出 p²", latex: "p^x=p^2p^{x-2}", fallback: "p^x=p²p^(x-2)" }
    ] },
    { type: "formula", latex: "E[X(X-1)]=n(n-1)p^2\\sum_{x=2}^{n}\\binom{n-2}{x-2}p^{x-2}(1-p)^{n-x}", fallback: "E[X(X-1)]=n(n-1)p²乘上一個剩餘總和" },
    { type: "paragraph", text: "再令 j=x−2。換元後的總和是參數 n−2、p 的完整二項機率和，因此仍然等於 1。" },
    { type: "formulaGroup", formulas: [
      { label: "第二次換元", latex: "j=x-2,\\qquad j=0,1,\\ldots,n-2", fallback: "令 j=x-2，則 j=0,1,…,n-2" },
      { label: "剩餘機率和等於 1", latex: "\\sum_{j=0}^{n-2}\\binom{n-2}{j}p^j(1-p)^{(n-2)-j}=1", fallback: "所有 Binomial(n-2,p) 機率相加為 1" },
      { label: "得到階乘動差", latex: "E[X(X-1)]=n(n-1)p^2", fallback: "E[X(X-1)]=n(n-1)p²" }
    ] },
    { type: "heading", text: "第三部分：由階乘動差得到 Var(X)" },
    { type: "paragraph", text: "利用 X²=X(X−1)+X，把剛才求得的階乘動差與 E(X)=np 組合起來，先得到 E(X²)。" },
    { type: "formulaGroup", formulas: [
      { label: "代數關係", latex: "X^2=X(X-1)+X", fallback: "X²=X(X-1)+X" },
      { label: "二次動差", latex: "E(X^2)=E[X(X-1)]+E(X)=n(n-1)p^2+np", fallback: "E(X²)=n(n-1)p²+np" }
    ] },
    { type: "paragraph", text: "最後代入變異數定義並逐步整理。" },
    { type: "formulaGroup", formulas: [
      { label: "變異數定義", latex: "\\operatorname{Var}(X)=E(X^2)-[E(X)]^2", fallback: "Var(X)=E(X²)-[E(X)]²" },
      { label: "代入已知結果", latex: "\\operatorname{Var}(X)=n(n-1)p^2+np-(np)^2", fallback: "Var(X)=n(n-1)p²+np-(np)²" },
      { label: "展開並消去共同項", latex: "=n^2p^2-np^2+np-n^2p^2", fallback: "=n²p²-np²+np-n²p²" },
      { label: "得到變異數", latex: "\\operatorname{Var}(X)=np-np^2=np(1-p)", fallback: "Var(X)=np-np²=np(1-p)" }
    ] },
    { type: "callout", tone: "intuition", label: "為什麼先算 X(X−1) 很巧妙？", text: "X(X−1) 可以理解成：從 X 次成功中，依序挑出兩次不同成功的方式數。它正好與 n(n−1) 的結構配合，使二項係數降低成 C(n−2,x−2)。這就是階乘動差在計數型分配中特別好用的原因。" },
    { type: "table", rows: [["符號或技巧", "在推導中的作用"], ["xC(n,x)=nC(n−1,x−1)", "消去期望值總和前的 x"], ["x(x−1)C(n,x)=n(n−1)C(n−2,x−2)", "消去階乘動差總和前的 x(x−1)"], ["j=x−1 或 j=x−2", "重新設定求和索引，使總和從 0 開始"], ["完整二項機率和=1", "將剩餘總和直接化簡"], ["X²=X(X−1)+X", "由階乘動差轉回二次動差"]] }
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
  { type: "callout", tone: "forward", label: "後面會再次用到", text: "二項分配會成為二項檢定、兩比例比較及部分 2×2 表方法的基礎；常態近似與連續性校正則會在大樣本檢定中再次出現。", related: ["05/binomial-test", "05/contingency-table", "05/yates-correction"] },
];


