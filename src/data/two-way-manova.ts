export const twoWayAndManova = [
  { type: "paragraph", text: "二因子 ANOVA 與多變量變異數分析（multivariate analysis of variance, MANOVA）是兩種不同方向的擴充。二因子 ANOVA 在同一個定量依變數中同時研究兩個類別因子；MANOVA 則同時研究多個彼此相關的定量依變數。" },
  { type: "callout", tone: "intuition", label: "先不要被名稱混淆", text: "「二因子」的二，指兩個自變數；「多變量」的多，指多個依變數。研究設計可以同時有兩個因子和多個依變數，此時才可能使用二因子 MANOVA。" },

  { type: "heading", text: "二因子 ANOVA：同時研究兩個因子" },
  { type: "paragraph", text: "假設研究者想比較不同治療方式與不同性別對血壓的影響。治療方式是因子 A，性別是因子 B，血壓則是一個定量依變數。二因子 ANOVA 可以在同一模型中檢定 A 的主效果、B 的主效果，以及 A 與 B 的交互作用。" },
  { type: "table", rows: [
    ["效果", "回答的問題"],
    ["因子 A 主效果", "把因子 B 的各水準平均後，A 的各水準平均數是否不同？"],
    ["因子 B 主效果", "把因子 A 的各水準平均後，B 的各水準平均數是否不同？"],
    ["A×B 交互作用", "A 的效果是否會隨 B 的水準而改變？"],
  ] },

  { type: "heading", text: "二因子 ANOVA 模型" },
  { type: "paragraph", text: "若因子 A 有 a 個水準、因子 B 有 b 個水準，用 Yᵢⱼₖ 表示 A 的第 i 個水準、B 的第 j 個水準中第 k 個觀察值，模型可以寫成：" },
  { type: "formula", latex: "Y_{ijk}=\\mu+\\alpha_i+\\beta_j+(\\alpha\\beta)_{ij}+\\varepsilon_{ijk}", fallback: "Yᵢⱼₖ=μ+αᵢ+βⱼ+(αβ)ᵢⱼ+εᵢⱼₖ" },
  { type: "table", rows: [
    ["符號", "意義"],
    ["μ", "全部條件的總平均"],
    ["αᵢ", "因子 A 第 i 個水準的效果"],
    ["βⱼ", "因子 B 第 j 個水準的效果"],
    ["(αβ)ᵢⱼ", "A 與 B 在該組合下的交互作用"],
    ["εᵢⱼₖ", "個別觀察值未被模型解釋的誤差"],
  ] },
  { type: "formulaGroup", formulas: [
    { label: "因子 A 主效果", latex: "H_{0,A}:\\alpha_1=\\alpha_2=\\cdots=\\alpha_a=0", fallback: "H₀,A: 所有 αᵢ=0" },
    { label: "因子 B 主效果", latex: "H_{0,B}:\\beta_1=\\beta_2=\\cdots=\\beta_b=0", fallback: "H₀,B: 所有 βⱼ=0" },
    { label: "交互作用", latex: "H_{0,AB}:(\\alpha\\beta)_{ij}=0\\quad\\text{for all }i,j", fallback: "H₀,AB: 所有 (αβ)ᵢⱼ=0" },
  ] },

  { type: "heading", text: "為什麼要先看交互作用？" },
  { type: "paragraph", text: "若交互作用顯著，代表一個因子的效果取決於另一個因子的水準。例如藥物只在某一性別有效，將性別平均後只報告藥物主效果，可能掩蓋真正的資料型態。因此通常先檢查交互作用，再決定主效果能否單獨解釋。" },
  { type: "callout", tone: "intuition", label: "交互作用的圖形直覺", text: "以一個因子的水準為橫軸、另一個因子的水準畫成不同線條。線條大致平行時，交互作用通常較小；線條明顯不平行或交叉時，表示一個因子的效果可能隨另一因子改變。是否顯著仍要由模型檢定判斷。" },
  { type: "paragraph", text: "交互作用顯著後，常進一步分析簡單主效果，例如分別在男性與女性中比較治療方式，或在每種治療下比較性別。這些後續比較仍要處理多重比較問題。" },

  { type: "heading", text: "二因子 ANOVA 的成立條件" },
  { type: "list", items: [
    "各觀察值彼此獨立；若同一受試者重複出現，需改用重複量數或混合模型。",
    "每個因子組合下的誤差近似常態分布。",
    "各因子組合具有相同的誤差變異數。",
    "研究設計中應有足夠觀察值估計交互作用；若某些因子組合完全沒有資料，模型可估計的效果會受限制。",
  ] },
  { type: "callout", tone: "caution", label: "不平衡設計需要額外判斷", text: "各組樣本數不相等時，主效果平方和可能因 Type I、II、III 的選擇而不同，尤其存在交互作用或缺格時更不能只看軟體預設值。應先確認研究假設、對比方式與模型可估計性。" },

  { type: "heading", text: "MANOVA：同時研究多個依變數" },
  { type: "paragraph", text: "若研究同一批受試者的收縮壓、舒張壓與心率，這三項都是定量依變數，而且彼此可能相關。MANOVA 檢定的不是單一平均數，而是各組的母體平均向量是否相同。" },
  { type: "formulaGroup", formulas: [
    { label: "第 j 組平均向量", latex: "\\boldsymbol{\\mu}_j=(\\mu_{j1},\\mu_{j2},\\ldots,\\mu_{jp})^{\\mathsf T}", fallback: "μⱼ=(μⱼ₁,μⱼ₂,…,μⱼₚ)ᵀ" },
    { label: "MANOVA 虛無假設", latex: "H_0:\\boldsymbol{\\mu}_1=\\boldsymbol{\\mu}_2=\\cdots=\\boldsymbol{\\mu}_k", fallback: "H₀: μ₁=μ₂=⋯=μₖ（平均向量相同）" },
  ] },
  { type: "paragraph", text: "MANOVA 同時考慮依變數之間的共變異，因此不同於對每個依變數各做一次 ANOVA。後者會增加多重檢定的第一類錯誤，也沒有直接檢定各結果組合形成的整體差異。" },

  { type: "heading", text: "MANOVA 如何形成檢定？" },
  { type: "paragraph", text: "單變量 ANOVA 把變異分成組間與組內平方和；MANOVA 則把它們擴充為組間與組內的平方和及交叉乘積矩陣。常以 H 表示組間效果矩陣，以 E 表示組內誤差矩陣，再從兩者的特徵值形成整體檢定統計量。" },
  { type: "table", rows: [
    ["統計量", "判讀重點"],
    ["Pillai's trace", "通常被視為對假設違反較穩健，值越大代表組間差異相對較大"],
    ["Wilks' lambda", "值越小代表組間平均向量差異相對較大"],
    ["Hotelling–Lawley trace", "累積多個判別方向上的組間訊息"],
    ["Roy's largest root", "只著重差異最大的單一判別方向"],
  ] },
  { type: "callout", tone: "intuition", label: "MANOVA 顯著代表什麼？", text: "它表示各組在多個依變數共同形成的結果輪廓上存在差異，但仍未指出是哪個依變數、哪個組別或哪種線性組合造成差異，需要後續分析才能定位。" },

  { type: "heading", text: "MANOVA 的成立條件與限制" },
  { type: "list", items: [
    "各觀察值彼此獨立。",
    "每組的依變數向量近似多變量常態分布。",
    "各組具有相同的共變異數矩陣；這比單變量 ANOVA 的等變異假設更強。",
    "依變數之間應有實質關聯，但不能近乎完全重複，否則會產生嚴重共線性。",
    "樣本數必須足以估計多個依變數的共變異結構；依變數越多，需要的資料通常越多。",
  ] },
  { type: "paragraph", text: "若依變數幾乎無關，MANOVA 可能沒有整合它們的優勢；若相關性過高，則可能只是重複測量同一概念。依變數的選擇應由研究問題事先決定，而不是看到資料後不斷加入結果變數。" },

  { type: "heading", text: "MANOVA 顯著後如何追蹤？" },
  { type: "list", ordered: true, items: [
    "先確認是哪一個因子或交互作用的多變量檢定顯著。",
    "依研究問題檢查各依變數的後續 ANOVA 或預先規劃的對比，並校正多重檢定。",
    "查看各組平均向量、信賴區間及效果大小，判斷差異的方向與實際意義。",
    "必要時檢查判別函數或典型變量，但解釋必須回到原始依變數。",
  ] },

  { type: "heading", text: "三種方法不要混用" },
  { type: "table", rows: [
    ["方法", "類別因子", "定量依變數", "主要問題"],
    ["單因子 ANOVA", "1 個", "1 個", "一個因子的各組平均數是否不同？"],
    ["二因子 ANOVA", "2 個", "1 個", "兩個主效果與交互作用是否存在？"],
    ["MANOVA", "1 個或以上", "2 個或以上", "各組的平均向量是否不同？"],
  ] },
  { type: "callout", tone: "forward", label: "選擇方法的順序", text: "先數清楚研究設計中有幾個因子，再確認有幾個定量依變數，最後判斷觀察值是否獨立、是否重複測量，以及變異數或共變異數假設是否合理。方法名稱應由研究問題與資料結構決定。" },
];
