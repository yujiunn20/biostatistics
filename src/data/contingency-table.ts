export const contingencyTable = [
  { type: "paragraph", text: "2×2 列聯表（2×2 contingency table）用來整理兩個二元類別變項的聯合分布。例如，一個變項表示是否暴露於某項因子，另一個變項表示是否發生疾病；四個儲存格記錄兩種分類交叉後的觀察次數。" },
  { type: "callout", tone: "forward", label: "這一頁的主線", text: "先讀懂四格與邊際總數 → 用聯合機率表達兩變項是否獨立 → 根據研究設計選擇勝算比 OR 或相對風險 RR → 利用對數轉換進行近似推論。" },

  { type: "heading", text: "2×2 表格的結構" },
  { type: "table", rows: [
    ["", "有疾病（case）", "無疾病（control）", "合計"],
    ["有暴露（exposed）", "A", "B", "A+B"],
    ["無暴露（unexposed）", "C", "D", "C+D"],
    ["合計", "A+C", "B+D", "N=A+B+C+D"]
  ] },
  { type: "paragraph", text: "表格內的 A、B、C、D 是聯合次數；列合計與欄合計則是邊際次數。同一張表可以沿著列比較疾病比例，也可以沿著欄比較暴露比例，但應該沿哪個方向解讀，取決於研究如何抽樣，而不是表格外觀看起來如何。" },
  { type: "table", rows: [
    ["符號", "代表的觀察"],
    ["A", "有暴露且有疾病"],
    ["B", "有暴露但無疾病"],
    ["C", "無暴露但有疾病"],
    ["D", "無暴露且無疾病"]
  ] },
  { type: "callout", tone: "intuition", label: "兩個二元變項形成四種組合", text: "單看暴露 X 或疾病 Y，各自都只有 0、1 兩種結果；把兩個變項交叉後，便形成 (1,1)、(1,0)、(0,1)、(0,0) 四種聯合結果。" },

  { type: "heading", text: "從次數表寫成聯合機率" },
  { type: "paragraph", text: "令 X=1 表示有暴露、Y=1 表示有疾病。Pᵢⱼ 表示 X=i 且 Y=j 的聯合機率，四個聯合機率相加等於 1。" },
  { type: "table", rows: [
    ["", "Y=1", "Y=0", "X 的邊際機率"],
    ["X=1", { parts: [{ type: "inlineFormula", latex: "P_{11}", fallback: "P₁₁" }] }, { parts: [{ type: "inlineFormula", latex: "P_{10}", fallback: "P₁₀" }] }, { parts: [{ type: "inlineFormula", latex: "P_X=P_{11}+P_{10}", fallback: "Pₓ=P₁₁+P₁₀" }] }],
    ["X=0", { parts: [{ type: "inlineFormula", latex: "P_{01}", fallback: "P₀₁" }] }, { parts: [{ type: "inlineFormula", latex: "P_{00}", fallback: "P₀₀" }] }, { parts: [{ type: "inlineFormula", latex: "1-P_X", fallback: "1−Pₓ" }] }],
    ["Y 的邊際機率", { parts: [{ type: "inlineFormula", latex: "P_Y=P_{11}+P_{01}", fallback: "Pᵧ=P₁₁+P₀₁" }] }, { parts: [{ type: "inlineFormula", latex: "1-P_Y", fallback: "1−Pᵧ" }] }, "1"]
  ] },

  { type: "heading", text: "如果 X 與 Y 彼此獨立" },
  { type: "paragraph", text: "獨立表示知道 X 的結果，不會改變 Y 的機率；因此每一格的聯合機率等於對應邊際機率的乘積。" },
  { type: "table", rows: [
    ["", "Y=1", "Y=0"],
    ["X=1", { parts: [{ type: "inlineFormula", latex: "P_{11}=P_XP_Y", fallback: "P₁₁=PₓPᵧ" }] }, { parts: [{ type: "inlineFormula", latex: "P_{10}=P_X(1-P_Y)", fallback: "P₁₀=Pₓ(1−Pᵧ)" }] }],
    ["X=0", { parts: [{ type: "inlineFormula", latex: "P_{01}=(1-P_X)P_Y", fallback: "P₀₁=(1−Pₓ)Pᵧ" }] }, { parts: [{ type: "inlineFormula", latex: "P_{00}=(1-P_X)(1-P_Y)", fallback: "P₀₀=(1−Pₓ)(1−Pᵧ)" }] }]
  ] },
  { type: "formulaGroup", formulas: [
    { label: "獨立的條件機率寫法", latex: "P(Y=1\\mid X=1)=P(Y=1\\mid X=0)=P_Y", fallback: "P(Y=1|X=1)=P(Y=1|X=0)=Pᵧ" },
    { label: "獨立的聯合機率寫法", latex: "P(X=i,Y=j)=P(X=i)P(Y=j)", fallback: "P(X=i,Y=j)=P(X=i)P(Y=j)" }
  ] },
  { type: "paragraph", text: "下一篇卡方獨立性檢定會把這個機率條件轉成各格的期望次數，再比較實際觀察次數與獨立情況下的期望次數。本頁先集中處理 2×2 表本身及其效果量。" },

  { type: "heading", text: "研究設計決定表格要怎麼讀" },
  { type: "table", rows: [
    ["研究設計", "如何取得樣本", "主要比較方向", "可直接估計的效果量"],
    ["病例對照研究（case-control study）", "先依疾病狀態選取病例與對照，再回溯過去暴露", "比較病例與對照的暴露勝算", "勝算比 OR"],
    ["世代研究（cohort study）", "先依暴露狀態形成群組，再觀察疾病結果", "比較暴露組與未暴露組的疾病風險", "相對風險 RR、風險差"]
  ] },
  { type: "paragraph", text: "例如，病例對照研究可以比較口腔癌病例與非病例過去嚼檳榔的情形；世代研究則可先找出嚼檳榔與未嚼檳榔者，再追蹤兩組後續發生疾病的比例。世代研究可以是前瞻、回溯或雙向設計，關鍵在於研究者依暴露形成風險集合，而不是單看資料收集發生在過去或未來。" },
  { type: "callout", tone: "forward", label: "只看四格數字無法辨認研究設計", text: "相同的 A、B、C、D 排列可以來自病例對照研究，也可以來自世代研究。必須知道受試者是依疾病狀態抽樣，還是依暴露狀態形成群組，才能判斷分母的意義以及能否直接估計風險。" },

  { type: "heading", text: "勝算與勝算比 OR" },
  { type: "paragraph", text: "若某事件發生的機率為 p，勝算（odds）是事件發生機率與未發生機率的比值。機率是「發生者占全部的比例」，勝算則是「發生者相對於未發生者有多少」。" },
  { type: "formula", latex: "\\operatorname{odds}=\\frac{p}{1-p}", fallback: "odds=p/(1−p)" },
  { type: "paragraph", text: "在病例對照研究中，可以比較病例與對照的暴露勝算；等價地，也可以比較暴露組與未暴露組的疾病勝算。兩種方向最後都得到相同的交叉乘積比。" },
  { type: "formulaGroup", formulas: [
    { label: "病例中的暴露勝算", latex: "\\frac{A}{C}", fallback: "A/C" },
    { label: "對照中的暴露勝算", latex: "\\frac{B}{D}", fallback: "B/D" },
    { label: "勝算比", latex: "OR=\\frac{A/C}{B/D}=\\frac{AD}{BC}", fallback: "OR=(A/C)/(B/D)=AD/(BC)" }
  ] },
  { type: "table", rows: [
    ["OR 的值", "資料層次的解讀"],
    ["OR=1", "兩組勝算相同，沒有觀察到關聯"],
    ["OR>1", "暴露與較高的疾病勝算相關"],
    ["OR<1", "暴露與較低的疾病勝算相關"]
  ] },
  { type: "callout", tone: "intuition", label: "關聯不等於因果", text: "OR 描述的是兩個類別變項在資料中的關聯。即使 OR 不等於 1，也不能只靠一張 2×2 表斷言暴露造成疾病；研究設計、偏差、混雜與時間順序都會影響因果解釋。" },

  { type: "heading", text: "為什麼對 OR 取自然對數？" },
  { type: "paragraph", text: "OR 只能大於 0，且其抽樣分布通常右偏。取自然對數後，無關聯的 OR=1 會轉成 ln(OR)=0，兩個勝算相除也會轉成對數勝算相減；在四格次數足夠時，ln(OR) 的抽樣分布較接近常態分布，方便建立 Z 統計量與信賴區間。" },
  { type: "formulaGroup", formulas: [
    { label: "對數勝算比", latex: "\\ln(OR)=\\ln\\left(\\frac{AD}{BC}\\right)", fallback: "ln(OR)=ln[AD/(BC)]" },
    { label: "估計變異數", latex: "\\widehat{\\operatorname{Var}}\\!\\left[\\ln(OR)\\right]=\\frac1A+\\frac1B+\\frac1C+\\frac1D", fallback: "估計 Var[ln(OR)]=1/A+1/B+1/C+1/D" },
    { label: "估計標準誤", latex: "SE\\!\\left[\\ln(OR)\\right]=\\sqrt{\\frac1A+\\frac1B+\\frac1C+\\frac1D}", fallback: "SE[ln(OR)]=√(1/A+1/B+1/C+1/D)" }
  ] },
  { type: "formulaGroup", formulas: [
    { label: "檢定假設", latex: "H_0:OR=1\\ \\Longleftrightarrow\\ \\ln(OR)=0", fallback: "H₀: OR=1 ⇔ ln(OR)=0" },
    { label: "Wald Z 統計量", latex: "Z=\\frac{\\ln(OR)}{SE[\\ln(OR)]}", fallback: "Z=ln(OR)/SE[ln(OR)]" },
    { label: "ln(OR) 的信賴區間", latex: "\\ln(OR)\\pm z_{1-\\alpha/2}SE[\\ln(OR)]", fallback: "ln(OR) ± z₁₋α/2 SE[ln(OR)]" },
    { label: "轉回 OR 的信賴區間", latex: "\\left(\\exp(L),\\exp(U)\\right)", fallback: "(exp(L), exp(U))" }
  ] },
  { type: "paragraph", text: "L、U 是 ln(OR) 信賴區間的下限與上限。最後必須取指數轉回 OR 尺度；若 OR 的信賴區間包含 1，便與相同顯著水準下無法拒絕 H₀:OR=1 相對應。這些大樣本公式可由 delta method（泰勒展開的一階近似）推得。" },
  { type: "heading", text: "相對風險 RR" },
  { type: "paragraph", text: "世代研究可以直接計算兩組的疾病風險。暴露組的風險為 A/(A+B)，未暴露組的風險為 C/(C+D)；兩者相除就是相對風險（relative risk）。" },
  { type: "formulaGroup", formulas: [
    { label: "暴露組疾病風險", latex: "R_1=\\frac{A}{A+B}", fallback: "R₁=A/(A+B)" },
    { label: "未暴露組疾病風險", latex: "R_0=\\frac{C}{C+D}", fallback: "R₀=C/(C+D)" },
    { label: "相對風險", latex: "RR=\\frac{R_1}{R_0}=\\frac{A/(A+B)}{C/(C+D)}", fallback: "RR=[A/(A+B)]/[C/(C+D)]" }
  ] },
  { type: "table", rows: [
    ["RR 的值", "資料層次的解讀"],
    ["RR=1", "兩組疾病風險相同"],
    ["RR>1", "暴露組的疾病風險較高"],
    ["RR<1", "暴露組的疾病風險較低"]
  ] },
  { type: "callout", tone: "forward", label: "病例對照研究通常不能直接計算 RR", text: "病例對照研究中的病例數與對照數是由抽樣設計決定，A/(A+B) 與 C/(C+D) 並不是母體中的疾病風險，因此通常不能直接估計 RR；但在適當抽樣條件下仍可估計 OR。" },

  { type: "heading", text: "ln(RR) 的標準誤與信賴區間" },
  { type: "paragraph", text: "RR 也只能大於 0，取自然對數後，RR=1 會變成 ln(RR)=0。在兩組獨立且計數足夠時，可利用 ln(RR) 的近似常態分布進行推論。" },
  { type: "formulaGroup", formulas: [
    { label: "對數相對風險", latex: "\\ln(RR)=\\ln\\left(\\frac{A/(A+B)}{C/(C+D)}\\right)", fallback: "ln(RR)=ln{[A/(A+B)]/[C/(C+D)]}" },
    { label: "估計變異數", latex: "\\widehat{\\operatorname{Var}}\\!\\left[\\ln(RR)\\right]=\\left(\\frac1A-\\frac1{A+B}\\right)+\\left(\\frac1C-\\frac1{C+D}\\right)", fallback: "估計 Var[ln(RR)]=(1/A−1/(A+B))+(1/C−1/(C+D))" },
    { label: "等價寫法", latex: "\\widehat{\\operatorname{Var}}\\!\\left[\\ln(RR)\\right]=\\frac{1-A/(A+B)}{A}+\\frac{1-C/(C+D)}{C}", fallback: "估計 Var[ln(RR)]={1−A/(A+B)}/A+{1−C/(C+D)}/C" },
    { label: "估計標準誤", latex: "SE\\!\\left[\\ln(RR)\\right]=\\sqrt{\\widehat{\\operatorname{Var}}[\\ln(RR)]}", fallback: "SE[ln(RR)]=√估計 Var[ln(RR)]" }
  ] },
  { type: "formulaGroup", formulas: [
    { label: "檢定假設", latex: "H_0:RR=1\\ \\Longleftrightarrow\\ \\ln(RR)=0", fallback: "H₀: RR=1 ⇔ ln(RR)=0" },
    { label: "Wald Z 統計量", latex: "Z=\\frac{\\ln(RR)}{SE[\\ln(RR)]}", fallback: "Z=ln(RR)/SE[ln(RR)]" },
    { label: "ln(RR) 的信賴區間", latex: "\\ln(RR)\\pm z_{1-\\alpha/2}SE[\\ln(RR)]", fallback: "ln(RR) ± z₁₋α/2 SE[ln(RR)]" },
    { label: "轉回 RR 的信賴區間", latex: "\\left(\\exp(L),\\exp(U)\\right)", fallback: "(exp(L), exp(U))" }
  ] },
  { type: "heading", text: "OR 與 RR 的關係" },
  { type: "table", rows: [
    ["比較項目", "OR", "RR"],
    ["比較內容", "兩組勝算的比值", "兩組風險的比值"],
    ["無關聯值", "1", "1"],
    ["病例對照研究", "通常可估計", "通常不能直接估計"],
    ["世代研究／隨機試驗", "可估計", "可估計"],
    ["效果解讀", "勝算變成幾倍", "風險變成幾倍"]
  ] },
  { type: "paragraph", text: "疾病在兩組中都很少見時，A 相對於 B 很小、C 相對於 D 也很小，因此 A+B≈B、C+D≈D，OR 會接近 RR。" },
  { type: "formula", latex: "OR=\\frac{A/B}{C/D}\\approx\\frac{A/(A+B)}{C/(C+D)}=RR", fallback: "OR=(A/B)/(C/D) ≈ [A/(A+B)]/[C/(C+D)]=RR" },
  { type: "callout", tone: "intuition", label: "OR 接近 RR 需要稀有結果條件", text: "結果不稀有時，OR 可能比 RR 距離 1 更遠，不能直接把「勝算增加幾倍」說成「風險增加幾倍」。兩者數值相近不是普遍規則。" },

  { type: "heading", text: "取 ln 後的公式比較" },
  { type: "paragraph", text: "把單一二項比例、病例對照研究的 ln(OR) 與世代研究的 ln(RR) 放在同一張表，可以看出三者共享相同的推論骨架：先決定樣本估計值與其變異數，再以「估計值−H₀ 指定值」除以標準誤，最後用同一個標準誤建立信賴區間。" },
  { type: "table", rows: [
    ["比較項目", "單一二項比例", "病例對照研究：ln(OR)", "世代研究：ln(RR)"],
    ["樣本估計值",
      { parts: [{ type: "inlineFormula", latex: "\\hat p", fallback: "p̂" }] },
      { parts: [{ type: "inlineFormula", latex: "\\ln\\left(\\dfrac{AD}{BC}\\right)", fallback: "ln[AD/(BC)]" }] },
      { parts: [{ type: "inlineFormula", latex: "\\ln\\left(\\dfrac{A/(A+B)}{C/(C+D)}\\right)", fallback: "ln{[A/(A+B)]/[C/(C+D)]}" }] }
    ],
    ["估計變異數",
      { parts: [{ type: "inlineFormula", latex: "\\dfrac{\\hat p(1-\\hat p)}n", fallback: "p̂(1−p̂)/n" }] },
      { parts: [{ type: "inlineFormula", latex: "\\dfrac1A+\\dfrac1B+\\dfrac1C+\\dfrac1D", fallback: "1/A+1/B+1/C+1/D" }] },
      { parts: [{ type: "inlineFormula", latex: "\\dfrac{1-A/(A+B)}A+\\dfrac{1-C/(C+D)}C", fallback: "{1−A/(A+B)}/A+{1−C/(C+D)}/C" }] }
    ],
    ["標準化",
      { parts: [{ type: "inlineFormula", latex: "Z=\\dfrac{\\hat p-\\pi_0}{\\sqrt{\\pi_0(1-\\pi_0)/n}}", fallback: "Z=(p̂−π₀)/√[π₀(1−π₀)/n]" }] },
      { parts: [{ type: "inlineFormula", latex: "Z=\\dfrac{\\ln(OR)-0}{\\sqrt{1/A+1/B+1/C+1/D}}", fallback: "Z={ln(OR)−0}/√(1/A+1/B+1/C+1/D)" }] },
      { parts: [{ type: "inlineFormula", latex: "Z=\\dfrac{\\ln(RR)-0}{\\sqrt{[1-A/(A+B)]/A+[1-C/(C+D)]/C}}", fallback: "Z={ln(RR)−0}/√({1−A/(A+B)}/A+{1−C/(C+D)}/C)" }] }
    ],
    [{ parts: [{ type: "inlineFormula", latex: "100(1-\\alpha)\\%", fallback: "100(1−α)%" }, { type: "text", text: " 信賴區間" }] },
      { parts: [{ type: "inlineFormula", latex: "\\hat p\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat p(1-\\hat p)}n}", fallback: "p̂±z₁₋α/2√[p̂(1−p̂)/n]" }] },
      { parts: [{ type: "inlineFormula", latex: "\\ln(OR)\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac1A+\\dfrac1B+\\dfrac1C+\\dfrac1D}", fallback: "ln(OR)±z₁₋α/2√(1/A+1/B+1/C+1/D)" }] },
      { parts: [{ type: "inlineFormula", latex: "\\ln(RR)\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{1-A/(A+B)}A+\\dfrac{1-C/(C+D)}C}", fallback: "ln(RR)±z₁₋α/2√({1−A/(A+B)}/A+{1−C/(C+D)}/C)" }] }
    ]
  ] },
  { type: "callout", tone: "intuition", label: "這張表真正要比較的是推論結構", text: "三欄的估計量不同，但後續步驟相同：先找抽樣變異數，開根號得到標準誤，再標準化或建立信賴區間。OR 與 RR 取 ln 後，H₀ 的指定值都由 1 轉成 0，因此可以放進與單一比例 Z 檢定相同的框架理解。" },

  { type: "details", label: "補充：資料轉換、ln(OR) 與 ln(RR) 的完整推導", children: [
  { type: "heading", text: "資料轉換後的平均數與變異數" },
  { type: "paragraph", text: "先處理推導共同使用的數學工具。設隨機變數 X 的平均數為 μ、變異數為 σ²，經過函數轉換後得到 Y=f(X)。在 μ 附近展開 f(X)：" },
  { type: "formulaGroup", formulas: [
    { label: "設定", latex: "E(X)=\\mu,\\qquad \\operatorname{Var}(X)=\\sigma^2,\\qquad Y=f(X)", fallback: "E(X)=μ；Var(X)=σ²；Y=f(X)" },
    { label: "泰勒展開", latex: "f(X)=f(\\mu)+f'(\\mu)(X-\\mu)+\\frac12f''(\\mu)(X-\\mu)^2+\\cdots", fallback: "f(X)=f(μ)+f′(μ)(X−μ)+½f″(μ)(X−μ)²+⋯" },
    { label: "取一階近似", latex: "f(X)\\approx f(\\mu)+f'(\\mu)(X-\\mu)", fallback: "f(X)≈f(μ)+f′(μ)(X−μ)" }
  ] },
  { type: "heading", text: "求轉換後的平均數" },
  { type: "formulaGroup", formulas: [
    { label: "對一階近似取期望值", latex: "E[f(X)]\\approx E\\!\\left[f(\\mu)+f'(\\mu)(X-\\mu)\\right]", fallback: "E[f(X)]≈E[f(μ)+f′(μ)(X−μ)]" },
    { label: "常數提出期望值", latex: "=f(\\mu)+f'(\\mu)E(X-\\mu)", fallback: "=f(μ)+f′(μ)E(X−μ)" },
    { label: "利用 E(X−μ)=0", latex: "E[f(X)]\\approx f(\\mu)", fallback: "E[f(X)]≈f(μ)" }
  ] },
  { type: "heading", text: "求轉換後的變異數" },
  { type: "formulaGroup", formulas: [
    { label: "由變異數定義開始", latex: "\\operatorname{Var}[f(X)]=E\\!\\left(\\left\\{f(X)-E[f(X)]\\right\\}^2\\right)", fallback: "Var[f(X)]=E({f(X)−E[f(X)]}²)" },
    { label: "代入一階近似", latex: "\\operatorname{Var}[f(X)]\\approx E\\!\\left(\\left\\{f'(\\mu)(X-\\mu)\\right\\}^2\\right)", fallback: "Var[f(X)]≈E({f′(μ)(X−μ)}²)" },
    { label: "提出常數平方", latex: "=[f'(\\mu)]^2E[(X-\\mu)^2]", fallback: "=[f′(μ)]²E[(X−μ)²]" },
    { label: "Delta method", latex: "\\operatorname{Var}[f(X)]\\approx[f'(\\mu)]^2\\operatorname{Var}(X)", fallback: "Var[f(X)]≈[f′(μ)]²Var(X)" }
  ] },
  { type: "callout", tone: "forward", label: "這裡是近似，不是精確等式", text: "一般而言 E[f(X)] 不等於 f(E[X])。這裡因為只保留泰勒展開的一階項，所以平均數與變異數的結果都應標示為近似；樣本較大、估計值集中於真值附近時，近似通常較合理。" },

  { type: "heading", text: "將結果用在 ln(OR)" },
  { type: "paragraph", text: "病例組的暴露比例為 p₁=A/(A+C)、樣本數為 n₁=A+C；對照組的暴露比例為 p₂=B/(B+D)、樣本數為 n₂=B+D。" },
  { type: "formulaGroup", formulas: [
    { label: "病例組", latex: "p_1=\\frac{A}{A+C},\\qquad n_1=A+C,\\qquad \\frac{p_1}{1-p_1}=\\frac AC", fallback: "p₁=A/(A+C)，n₁=A+C，p₁/(1−p₁)=A/C" },
    { label: "對照組", latex: "p_2=\\frac{B}{B+D},\\qquad n_2=B+D,\\qquad \\frac{p_2}{1-p_2}=\\frac BD", fallback: "p₂=B/(B+D)，n₂=B+D，p₂/(1−p₂)=B/D" }
  ] },
  { type: "paragraph", text: "先將兩組比例分別轉換成對數勝算，再用線性組合把兩組相減：" },
  { type: "formulaGroup", formulas: [
    { label: "轉換函數", latex: "g(p)=\\ln\\left(\\frac{p}{1-p}\\right)", fallback: "g(p)=ln[p/(1−p)]" },
    { label: "兩組的線性組合", latex: "L=g(p_1)-g(p_2)", fallback: "L=g(p₁)−g(p₂)" },
    { label: "整理成對數勝算比", latex: "L=\\ln\\left(\\frac{p_1(1-p_2)}{p_2(1-p_1)}\\right)=\\ln\\left(\\frac{AD}{BC}\\right)=\\ln(OR)", fallback: "L=ln{p₁(1−p₂)/[p₂(1−p₁)]}=ln[AD/(BC)]=ln(OR)" }
  ] },
  { type: "heading", text: "ln(OR) 的平均數" },
  { type: "formulaGroup", formulas: [
    { label: "分別套用一階近似", latex: "E[g(\\hat p_1)]\\approx g(p_1),\\qquad E[g(\\hat p_2)]\\approx g(p_2)", fallback: "E[g(p̂₁)]≈g(p₁)；E[g(p̂₂)]≈g(p₂)" },
    { label: "兩組相減", latex: "E(L)\\approx g(p_1)-g(p_2)=\\ln(OR)", fallback: "E(L)≈g(p₁)−g(p₂)=ln(OR)" }
  ] },
  { type: "heading", text: "ln(OR) 的變異數" },
  { type: "paragraph", text: "由二項比例 Var(p̂)=p(1−p)/n，以及 logit 函數的導數，先求單一組別的對數勝算變異數：" },
  { type: "formulaGroup", formulas: [
    { label: "Logit 的導數", latex: "g'(p)=\\frac1p+\\frac1{1-p}=\\frac1{p(1-p)}", fallback: "g′(p)=1/p+1/(1−p)=1/[p(1−p)]" },
    { label: "套用 delta method", latex: "\\operatorname{Var}[g(\\hat p)]\\approx\\left[\\frac1{p(1-p)}\\right]^2\\frac{p(1-p)}n", fallback: "Var[g(p̂)]≈[1/{p(1−p)}]²p(1−p)/n" },
    { label: "化簡", latex: "=\\frac1{np(1-p)}=\\frac1{np}+\\frac1{n(1-p)}", fallback: "=1/[np(1−p)]=1/(np)+1/[n(1−p)]" }
  ] },
  { type: "formulaGroup", formulas: [
    { label: "病例組", latex: "\\widehat{\\operatorname{Var}}[g(\\hat p_1)]\\approx\\frac1A+\\frac1C", fallback: "估計 Var[g(p̂₁)]≈1/A+1/C" },
    { label: "對照組", latex: "\\widehat{\\operatorname{Var}}[g(\\hat p_2)]\\approx\\frac1B+\\frac1D", fallback: "估計 Var[g(p̂₂)]≈1/B+1/D" },
    { label: "兩組獨立，變異數相加", latex: "\\widehat{\\operatorname{Var}}[\\ln(OR)]\\approx\\frac1A+\\frac1B+\\frac1C+\\frac1D", fallback: "估計 Var[ln(OR)]≈1/A+1/B+1/C+1/D" }
  ] },

  { type: "heading", text: "將結果用在 ln(RR)" },
  { type: "paragraph", text: "暴露組的疾病比例為 p₁=A/(A+B)、樣本數為 n₁=A+B；未暴露組的疾病比例為 p₂=C/(C+D)、樣本數為 n₂=C+D。" },
  { type: "formulaGroup", formulas: [
    { label: "暴露組", latex: "p_1=\\frac{A}{A+B},\\qquad n_1=A+B", fallback: "p₁=A/(A+B)，n₁=A+B" },
    { label: "未暴露組", latex: "p_2=\\frac{C}{C+D},\\qquad n_2=C+D", fallback: "p₂=C/(C+D)，n₂=C+D" }
  ] },
  { type: "paragraph", text: "兩組比例先取自然對數，再將兩組相減：" },
  { type: "formulaGroup", formulas: [
    { label: "轉換函數", latex: "h(p)=\\ln(p)", fallback: "h(p)=ln(p)" },
    { label: "兩組的線性組合", latex: "L=h(p_1)-h(p_2)=\\ln(p_1)-\\ln(p_2)", fallback: "L=h(p₁)−h(p₂)=ln(p₁)−ln(p₂)" },
    { label: "整理成對數相對風險", latex: "L=\\ln\\left(\\frac{p_1}{p_2}\\right)=\\ln\\left(\\frac{A/(A+B)}{C/(C+D)}\\right)=\\ln(RR)", fallback: "L=ln(p₁/p₂)=ln{[A/(A+B)]/[C/(C+D)]}=ln(RR)" }
  ] },
  { type: "heading", text: "ln(RR) 的平均數" },
  { type: "formulaGroup", formulas: [
    { label: "分別套用一階近似", latex: "E[\\ln(\\hat p_1)]\\approx\\ln(p_1),\\qquad E[\\ln(\\hat p_2)]\\approx\\ln(p_2)", fallback: "E[ln(p̂₁)]≈ln(p₁)；E[ln(p̂₂)]≈ln(p₂)" },
    { label: "兩組相減", latex: "E(L)\\approx\\ln(p_1)-\\ln(p_2)=\\ln(RR)", fallback: "E(L)≈ln(p₁)−ln(p₂)=ln(RR)" }
  ] },
  { type: "heading", text: "ln(RR) 的變異數" },
  { type: "paragraph", text: "對 h(p)=ln(p) 微分，再代入二項比例的變異數：" },
  { type: "formulaGroup", formulas: [
    { label: "自然對數的導數", latex: "h'(p)=\\frac1p", fallback: "h′(p)=1/p" },
    { label: "套用 delta method", latex: "\\operatorname{Var}[\\ln(\\hat p)]\\approx\\left(\\frac1p\\right)^2\\frac{p(1-p)}n", fallback: "Var[ln(p̂)]≈(1/p)²p(1−p)/n" },
    { label: "化簡", latex: "=\\frac{1-p}{np}", fallback: "=(1−p)/(np)" }
  ] },
  { type: "formulaGroup", formulas: [
    { label: "暴露組", latex: "\\widehat{\\operatorname{Var}}[\\ln(\\hat p_1)]\\approx\\frac{1-A/(A+B)}A=\\frac1A-\\frac1{A+B}", fallback: "估計 Var[ln(p̂₁)]≈{1−A/(A+B)}/A=1/A−1/(A+B)" },
    { label: "未暴露組", latex: "\\widehat{\\operatorname{Var}}[\\ln(\\hat p_2)]\\approx\\frac{1-C/(C+D)}C=\\frac1C-\\frac1{C+D}", fallback: "估計 Var[ln(p̂₂)]≈{1−C/(C+D)}/C=1/C−1/(C+D)" },
    { label: "兩組獨立，變異數相加", latex: "\\widehat{\\operatorname{Var}}[\\ln(RR)]\\approx\\left(\\frac1A-\\frac1{A+B}\\right)+\\left(\\frac1C-\\frac1{C+D}\\right)", fallback: "估計 Var[ln(RR)]≈(1/A−1/(A+B))+(1/C−1/(C+D))" }
  ] },
  ] },

  { type: "heading", text: "分析時還要注意什麼？" },
  { type: "list", items: [
    "確認四格的列、欄定義與參考組；交換疾病、暴露或參考組方向，可能使 OR 或 RR 變成倒數。",
    "確認觀察值彼此獨立。若是同一批受試者前後配對的二元結果，應使用配對方法，而不是獨立 2×2 表的方法。",
    "四格次數很小時，ln(OR) 與 ln(RR) 的常態近似可能不可靠；若任一格為 0，上述含倒數與對數的公式也不能直接使用。",
    "效果量應搭配信賴區間，而不是只報告 p 值；統計關聯仍需結合研究設計判斷偏差、混雜與因果關係。"
  ] }
];
