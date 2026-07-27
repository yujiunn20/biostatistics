export const sampling = [
  { type: "paragraph", text: "抽樣（sampling）是從母體中選取一部分觀察單位形成樣本，再利用樣本提供的資訊推論母體。它是推論統計的重要起點：我們實際觀察的是樣本，真正想了解的通常是尚未完整觀察的母體。" },
  { type: "callout", tone: "intuition", label: "先抓住核心問題", text: "抽樣不是單純把資料變少，而是要回答：如何用有限資料了解更大的母體，同時評估因為只觀察一部分資料而產生的不確定性？" },
  { type: "heading", text: "母體、樣本、參數與統計量" },
  { type: "paragraph", text: "母體（population）是研究問題所關心的全部對象；樣本（sample）是實際被選取並觀察的一部分。描述母體的數值稱為參數，根據樣本計算的數值稱為統計量。統計推論就是利用統計量估計或檢驗未知的母體參數。" },
  { type: "table", rows: [["層級", "對象", "常見數值", "性質"], ["母體", "研究問題所關心的全部單位", "平均數 μ、變異數 σ²、比例 p", "通常未知，是推論的目標"], ["樣本", "從母體中實際選取的 n 個單位", "平均數 X̄、變異數 s²、比例 p̂", "可由觀察資料計算，用來推論母體"]] },
  { type: "formulaGroup", formulas: [
    { label: "母體大小與樣本大小", latex: "N=\\text{population size},\\qquad n=\\text{sample size}", fallback: "N 為母體大小，n 為樣本大小" },
    { label: "樣本平均數", latex: "\\bar X=\\frac{1}{n}\\sum_{i=1}^{n}X_i", fallback: "X̄=(1/n)ΣXᵢ" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["N", "母體中的單位總數"], ["n", "樣本中的單位數"], ["Xᵢ", "樣本中的第 i 個觀察值"], ["μ、σ²", "母體平均數與母體變異數"], ["X̄、s²", "樣本平均數與樣本變異數"], ["p、p̂", "母體比例與樣本比例"]] },
  { type: "heading", text: "為什麼需要抽樣？" },
  { type: "list", items: ["母體可能過大或無法完整列舉，全面調查在實務上不可行", "抽樣通常能降低時間、人力與成本", "有些測量具有破壞性，不可能測量母體中的每一個單位", "較小的研究有時能投入更多訓練、測量與品質控制", "使用機率抽樣時，可以用統計方法評估抽樣造成的不確定性"] },
  { type: "callout", tone: "intuition", label: "樣本不會天生比母體更精確", text: "抽樣研究可能因較容易管理而提高每筆資料的品質，但它仍會產生抽樣誤差；如果抽樣方式有偏差，即使樣本非常大，也可能穩定地得到錯誤結論。" },
  { type: "heading", text: "抽樣誤差與抽樣偏差不同" },
  { type: "paragraph", text: "同一母體反覆抽樣時，不同樣本通常會得到不同統計量，這種隨機波動稱為抽樣誤差（sampling error）。若某些個體較容易或較不容易被選入，使樣本系統性偏離目標母體，則屬於抽樣偏差（sampling bias）。" },
  { type: "table", rows: [["問題", "形成原因", "增加樣本數能否改善？"], ["抽樣誤差", "隨機抽取不同個體造成的自然波動", "通常可以降低"], ["抽樣偏差", "抽樣框、納入方式或未回覆造成系統性失真", "不能只靠增加樣本數消除"]] },
  { type: "callout", tone: "intuition", label: "代表性來自設計，不只來自數量", text: "一萬筆方便取得的偏差資料，不一定比數百筆依研究目標妥善抽取的資料更能代表母體。抽樣前必須先清楚定義目標母體與可供抽取的抽樣框。" },
  { type: "heading", text: "常見的機率抽樣方法" },
  { type: "heading", text: "1. 簡單隨機抽樣" },
  { type: "paragraph", text: "簡單隨機抽樣（simple random sampling）是從抽樣框中隨機選取個體，使每一個大小為 n 的可能樣本具有相同被選中的機會。概念最直接，但前提是能取得完整抽樣框，實務上不一定容易。" },
  { type: "callout", tone: "intuition", label: "例子", text: "取得台北市符合研究條件之癌症病人的完整名單，再使用亂數從中選取 100 人。若只有到特定醫院就診者的名單，能代表的母體也必須相應縮小。" },
  { type: "heading", text: "2. 系統抽樣" },
  { type: "paragraph", text: "系統抽樣（systematic sampling）先將抽樣框依固定順序排列，在前 k 個單位中隨機選擇起點，之後每隔 k 個單位抽取一人。它容易執行，但如果名單中存在和抽樣間隔相同的週期結構，可能造成偏差。" },
  { type: "formula", latex: "k\\approx\\frac{N}{n}", fallback: "抽樣間隔 k 約等於 N/n" },
  { type: "callout", tone: "intuition", label: "例子", text: "門診名單共有 1,000 人、預計抽取 100 人，可取 k=10；先在前 10 人中隨機選一人，再每隔 10 人抽取一人。只固定抽星期一病人屬於時間條件下的取樣，並不等同於標準系統抽樣。" },
  { type: "heading", text: "3. 分層抽樣" },
  { type: "paragraph", text: "分層抽樣（stratified sampling）先依重要特徵將母體分成彼此不重疊的層，再從每一層分別進行隨機抽樣。它能確保重要子群體都被納入，也可以依各層大小採比例分配，或刻意增加小族群樣本後再使用權重分析。" },
  { type: "callout", tone: "intuition", label: "例子", text: "將台北市癌症病人依性別分層，再從男性與女性病人名單中分別隨機抽樣。若固定各抽 50 人但母體性別比例不是 1:1，分析母體整體結果時需考慮抽樣權重。" },
  { type: "heading", text: "4. 群集抽樣" },
  { type: "paragraph", text: "群集抽樣（cluster sampling）先把母體分成自然形成的群集，例如醫院、學校或社區，再隨機抽取其中一些群集。單階段群集抽樣會調查被抽中群集內的全部個體；若再從群集內抽取部分個體，則屬於兩階段或多階段抽樣。" },
  { type: "callout", tone: "intuition", label: "例子", text: "先從台北市所有醫院中隨機抽取 A、B、C 三家，再納入這三家所有符合條件的癌症病人；若只在被抽中的醫院內再抽部分病人，則是兩階段抽樣。" },
  { type: "callout", tone: "intuition", label: "分層和群集不要混淆", text: "分層抽樣通常希望每一層都取到樣本；群集抽樣則只抽取部分群集。理想上，分層內部較相似、層與層不同；群集則希望每個群集都像母體的縮影，但現實中同一群集內常較相似，因此分析時要考慮群集相關性。" },
  { type: "table", rows: [["方法", "先做什麼？", "從哪裡抽？", "主要優點", "主要風險"], ["簡單隨機", "建立完整抽樣框", "整個母體名單", "概念與分析直接", "完整名單可能難以取得"], ["系統抽樣", "隨機起點並決定間隔 k", "每隔 k 個單位", "執行方便", "名單週期可能造成偏差"], ["分層抽樣", "依重要特徵分層", "每一層都抽", "確保子群體代表性", "不等比例抽樣時需權重"], ["群集抽樣", "建立自然群集", "只抽部分群集", "降低地理與執行成本", "群集內相似會降低有效資訊量"]] },
  { type: "heading", text: "從一次樣本走向所有可能樣本" },
  { type: "paragraph", text: "假設有限母體中共有 N 個單位，每次以簡單隨機方式、不放回地抽取 n 個單位，而且不考慮抽取順序，所有可能樣本數為 C(N,n)。每一個可能樣本都能算出一個樣本平均數。" },
  { type: "formulaGroup", formulas: [
    { label: "所有可能樣本數", latex: "m=\\binom{N}{n}", fallback: "m=C(N,n)" },
    { label: "第 j 個樣本", latex: "X_{j1},X_{j2},\\ldots,X_{jn}", fallback: "第 j 個樣本為 Xj1,…,Xjn" },
    { label: "第 j 個樣本的平均數", latex: "\\bar X_j=\\frac{1}{n}\\sum_{i=1}^{n}X_{ji},\\qquad j=1,2,\\ldots,m", fallback: "X̄ⱼ=(1/n)ΣXⱼᵢ" }
  ] },
  { type: "table", rows: [["母體", "大小為 n 的可能樣本", "該樣本的平均數"], ["N 個單位，平均數 μ、標準差 σ", "X₁₁, X₁₂, …, X₁ₙ", "X̄₁"], ["", "X₂₁, X₂₂, …, X₂ₙ", "X̄₂"], ["", "⋮", "⋮"], ["", "Xₘ₁, Xₘ₂, …, Xₘₙ", "X̄ₘ"]] },
  { type: "heading", text: "什麼是抽樣分配？" },
  { type: "paragraph", text: "將所有可能樣本或概念上反覆抽樣所得的統計量整理成機率分配，就得到該統計量的抽樣分配（sampling distribution）。例如，把每次樣本平均數 X̄ 記錄下來，其分配就是樣本平均數的抽樣分配。" },
  { type: "callout", tone: "intuition", label: "不是把同一份樣本畫成直方圖", text: "單次樣本中 n 筆觀察值的分布，描述的是個體差異；樣本平均數的抽樣分配，描述的是如果研究重做很多次，研究結果會如何變動。" },
  { type: "table", rows: [["分布", "其中的數值是什麼？", "回答的問題"], ["母體分布", "母體中每個個體的觀察值", "整個母體長什麼樣子？"], ["樣本資料分布", "某一次樣本中的 n 個觀察值", "這次抽到的資料長什麼樣子？"], ["統計量的抽樣分配", "重複抽樣得到的 X̄、p̂ 等統計量", "如果研究重做，統計結果會怎麼變？"]] },
  { type: "heading", text: "樣本平均數的抽樣分配" },
  { type: "paragraph", text: "若 X₁,…,Xₙ 是來自同一母體、彼此獨立且具有平均數 μ、變異數 σ²的觀察值，則樣本平均數是一個不偏估計量：重複抽樣所得的樣本平均數，其平均會等於母體平均數。" },
  { type: "formulaGroup", formulas: [
    { label: "抽樣分配的中心", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
    { label: "抽樣分配的變異數", latex: "\\operatorname{Var}(\\bar X)=\\frac{\\sigma^2}{n}", fallback: "Var(X̄)=σ²/n" },
    { label: "樣本平均數的標準誤", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["E(X̄)", "重複抽樣時，樣本平均數的長期平均"], ["Var(X̄)", "樣本平均數在不同樣本間的變異程度"], ["SE(X̄)", "樣本平均數抽樣分配的標準差"], ["σ", "個體觀察值在母體中的標準差"], ["n", "每一次抽樣的樣本數"]] },
  { type: "details", label: "補充一：隨機變數的線性組合", children: [
    { type: "paragraph", text: "線性組合是把數個隨機變數分別乘上常數後再相加。樣本平均數本身就是一種線性組合，因此這套規則可以直接用來推導其平均數與標準誤。" },
    { type: "formulaGroup", formulas: [
      { label: "一般形式", latex: "L=\\sum_{i=1}^{n}c_iX_i", fallback: "L=ΣcᵢXᵢ" },
      { label: "期望值", latex: "E(L)=\\sum_{i=1}^{n}c_iE(X_i)", fallback: "E(L)=ΣcᵢE(Xᵢ)" },
      { label: "一般的變異數", latex: "\\operatorname{Var}(L)=\\sum_{i=1}^{n}c_i^2\\operatorname{Var}(X_i)+2\\sum_{i<j}c_ic_j\\operatorname{Cov}(X_i,X_j)", fallback: "Var(L)=Σcᵢ²Var(Xᵢ)+2Σᵢ<ⱼcᵢcⱼCov(Xᵢ,Xⱼ)" },
      { label: "彼此獨立時", latex: "\\operatorname{Var}(L)=\\sum_{i=1}^{n}c_i^2\\operatorname{Var}(X_i)", fallback: "獨立時 Var(L)=Σcᵢ²Var(Xᵢ)" }
    ] },
    { type: "callout", tone: "intuition", label: "哪一步需要獨立？", text: "期望值即使在隨機變數不獨立時也能拆開；變異數只有在彼此獨立（更精確地說，協方差為 0）時，才能直接把各項變異數相加。這正是推導標準誤時必須交代抽樣獨立性的原因。" },
    { type: "paragraph", text: "兩個隨機變數的和、差與平均，例如 X₁+X₂、X₁−X₂、(X₁+X₂)/2，也都是線性組合。後面的兩組平均數比較、迴歸與變異數分析會再次使用這個觀念。" }
  ] },
  { type: "details", label: "補充二：抽樣平均數的平均與標準誤推導", children: [
    { type: "heading", text: "法一：從有限母體的所有可能樣本理解" },
    { type: "paragraph", text: "設有限母體共有 N 個值 x₁,…,x_N，以簡單隨機方式不放回抽取 n 個且不計順序，共有 C(N,n) 個可能樣本。每個母體值 xᵢ 會出現在 C(N−1,n−1) 個樣本中，因此把所有可能樣本的平均數再取平均，可得母體平均數。" },
    { type: "formulaGroup", formulas: [
      { label: "母體平均數", latex: "\\mu=\\frac{1}{N}\\sum_{i=1}^{N}x_i", fallback: "μ=(1/N)Σxᵢ" },
      { label: "所有樣本平均數的平均", latex: "E(\\bar X)=\\frac{\\binom{N-1}{n-1}\\sum_{i=1}^{N}x_i}{n\\binom{N}{n}}=\\frac{1}{N}\\sum_{i=1}^{N}x_i=\\mu", fallback: "E(X̄)=μ" }
    ] },
    { type: "paragraph", text: "同樣計算所有可能樣本平均數的變異程度，可得到不放回抽樣的有限母體結果。當抽樣比例很小，修正項接近 1，便得到常用的 σ/√n。" },
    { type: "formulaGroup", formulas: [
      { label: "有限母體、不放回抽樣", latex: "\\operatorname{Var}(\\bar X)=\\frac{\\sigma^2}{n}\\frac{N-n}{N-1}", fallback: "Var(X̄)=(σ²/n)[(N-n)/(N-1)]" },
      { label: "相應的標準誤", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}\\sqrt{\\frac{N-n}{N-1}}", fallback: "SE(X̄)=(σ/√n)√[(N-n)/(N-1)]" }
    ] },
    { type: "heading", text: "法二：把樣本平均數看成線性組合" },
    { type: "paragraph", text: "若 X₁,…,Xₙ 是從同一母體獨立取得的隨機變數，而且每一個都有 E(Xᵢ)=μ、Var(Xᵢ)=σ²，則樣本平均數就是係數皆為 1/n 的線性組合。" },
    { type: "formulaGroup", formulas: [
      { label: "樣本平均數", latex: "\\bar X=\\frac{1}{n}\\sum_{i=1}^{n}X_i", fallback: "X̄=(1/n)ΣXᵢ" },
      { label: "抽樣平均數的平均", latex: "E(\\bar X)=\\frac{1}{n}\\sum_{i=1}^{n}E(X_i)=\\frac{n\\mu}{n}=\\mu", fallback: "E(X̄)=μ" },
      { label: "抽樣平均數的變異數", latex: "\\operatorname{Var}(\\bar X)=\\sum_{i=1}^{n}\\frac{1}{n^2}\\operatorname{Var}(X_i)=\\frac{n\\sigma^2}{n^2}=\\frac{\\sigma^2}{n}", fallback: "Var(X̄)=σ²/n" },
      { label: "抽樣平均數的標準誤", latex: "\\operatorname{SE}(\\bar X)=\\sqrt{\\operatorname{Var}(\\bar X)}=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" }
    ] },
    { type: "callout", tone: "intuition", label: "兩種方法看的是同一件事", text: "法一直接列出所有可能樣本；法二把抽樣結果視為隨機變數，用線性組合快速推導。法二的 σ/√n 對應獨立抽樣；有限母體不放回抽樣時，各次抽取並非獨立，因此要加入有限母體修正。" }
  ] },
  { type: "callout", tone: "intuition", label: "標準差和標準誤不同", text: "標準差描述個體彼此有多不同；標準誤描述如果重做研究，樣本統計量會有多不穩定。樣本數增加時，個體差異不會因此消失，但樣本平均數通常會更穩定。" },
  { type: "paragraph", text: "當 σ 未知時，實務上常以樣本標準差 s 估計，因此使用 s/√n 作為估計標準誤。若從有限母體中不放回抽樣，而且抽樣比例 n/N 不可忽略，還要加入有限母體修正。" },
  { type: "formulaGroup", formulas: [
    { label: "以樣本標準差估計", latex: "\\widehat{\\operatorname{SE}}(\\bar X)=\\frac{s}{\\sqrt n}", fallback: "估計 SE(X̄)=s/√n" },
    { label: "有限母體修正", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}\\sqrt{\\frac{N-n}{N-1}}", fallback: "有限母體不放回抽樣的 SE 需乘 √[(N-n)/(N-1)]" }
  ] },
  { type: "heading", text: "樣本變異數為什麼使用 n−1？" },
  { type: "paragraph", text: "樣本平均數 X̄ 是由同一批資料估計而來，因此 n 個離差 Xᵢ−X̄ 必須加總為 0，只剩 n−1 個可以獨立變動。使用 n−1 作為分母，可以使樣本變異數成為母體變異數 σ²的不偏估計量。" },
  { type: "formulaGroup", formulas: [
    { label: "樣本變異數", latex: "s^2=\\frac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "s²=Σ(Xᵢ-X̄)²/(n-1)" },
    { label: "樣本標準差", latex: "s=\\sqrt{s^2}", fallback: "s=√s²" },
    { label: "不偏性", latex: "E(s^2)=\\sigma^2", fallback: "E(s²)=σ²" }
  ] },
  { type: "details", label: "補充三：為什麼樣本變異數可以推估母體變異數？", children: [
    { type: "paragraph", text: "若直接用 n 作分母，因為樣本平均數 X̄ 已經配合這批資料而位在資料中心，離差平方和平均而言會偏小。將分母改為 n−1，正好修正這個系統性的低估。" },
    { type: "formulaGroup", formulas: [
      { label: "離差平方和的期望值", latex: "E\\!\\left[\\sum_{i=1}^{n}(X_i-\\bar X)^2\\right]=(n-1)\\sigma^2", fallback: "E[Σ(Xᵢ−X̄)²]=(n−1)σ²" },
      { label: "除以 n−1", latex: "E(s^2)=E\\!\\left[\\frac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2\\right]=\\sigma^2", fallback: "E(s²)=σ²" }
    ] },
    { type: "paragraph", text: "因此真正具有不偏性的是樣本變異數 s²：反覆抽樣時，s² 的平均等於母體變異數 σ²。樣本標準差 s=√s² 雖然是常用估計量，但因平方根是非線性轉換，一般而言 E(s) 不會恰好等於 σ。" },
    { type: "callout", tone: "intuition", label: "三個量要分清楚", text: "『抽樣變異數的平均推估母體變異數』應寫成 E(s²)=σ²；公式 s=√[Σ(Xᵢ−X̄)²/(n−1)] 則是在定義樣本標準差。兩者有關，但不是同一句公式。" }
  ] },
  { type: "callout", tone: "forward", label: "和自由度頁的連結", text: "這裡的 n−1 不是額外規定，而是估計 X̄ 後產生一個線性限制。前面自由度頁提到的『限制後仍能獨立變動的資訊量』，在樣本變異數中正式出現。" },
  { type: "heading", text: "中央極限定理" },
  { type: "paragraph", text: "中央極限定理（central limit theorem, CLT）說明：若觀察值彼此獨立、來自相同分布，且母體具有有限平均數 μ 與有限變異數 σ²，當 n 增加時，樣本平均數經過標準化後，其分布會逐漸接近標準常態分配。" },
  { type: "formulaGroup", formulas: [
    { label: "樣本平均數的近似分配", latex: "\\bar X\\approx N\\!\\left(\\mu,\\frac{\\sigma^2}{n}\\right)", fallback: "X̄ 約服從 N(μ,σ²/n)" },
    { label: "標準化形式", latex: "\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\xrightarrow{d}N(0,1)\\qquad(n\\to\\infty)", fallback: "(X̄-μ)/(σ/√n) 隨 n 增加趨近 N(0,1)" }
  ] },
  { type: "callout", tone: "intuition", label: "不是說原始資料會變成常態", text: "中央極限定理描述的是『樣本平均數的抽樣分配』，不是說母體或單次樣本中的原始資料會因為 n 增加而變成常態。" },
  { type: "paragraph", text: "若母體本身服從常態分配，無論 n 大小，樣本平均數都精確服從常態分配；若母體不是常態，則需要 n 足夠大才有良好近似。常見的 n≥30 只是經驗法則，不是普遍保證：母體越偏斜、尾端越厚或離群值越多，通常需要更大的樣本。" },
  { type: "heading", text: "樣本數如何影響標準誤？" },
  { type: "paragraph", text: "標準誤和 √n 成反比，因此增加樣本數會讓樣本平均數的抽樣分配更集中，但改善並非線性。若希望把標準誤減半，樣本數必須增加為原來的四倍。" },
  { type: "formula", latex: "\\operatorname{SE}(\\bar X)\\propto\\frac{1}{\\sqrt n}", fallback: "SE(X̄) 與 1/√n 成正比" },
  { type: "callout", tone: "forward", label: "後面為什麼需要抽樣分配？", text: "信賴區間、p 值與臨界值都需要知道統計量在重複抽樣下會如何分布。後續的 Z、t、卡方與 F 檢定，本質上都是先建立某個統計量在假設成立時的抽樣分配，再判斷目前觀察結果位於分布中的什麼位置。" },
];
