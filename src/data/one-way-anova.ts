export const oneWayAnova = [
  { type: "paragraph", text: "單因子獨立樣本變異數分析（one-way independent-samples analysis of variance, one-way ANOVA）用來比較三組或以上彼此獨立的樣本，判斷它們在某個定量變數上的母體平均數是否全都相同。兩組資料也能使用 ANOVA，但只有兩組且採用相同的等變異模型時，獨立樣本 t 檢定通常更直接。" },
  { type: "callout", tone: "intuition", label: "ANOVA 明明比較平均數，為什麼叫變異數分析？", text: "ANOVA 不直接逐一比較每一對平均數，而是把資料的總變異拆成「組間變異」與「組內變異」，再比較兩者的相對大小。若分組所解釋的變異遠大於組內的隨機變異，便有理由懷疑各組母體平均數並非全部相同。" },

  { type: "heading", text: "ANOVA 的核心想法：分組是一個模型" },
  { type: "paragraph", text: "把觀察值分成不同組別，就等於建立一個以組別解釋結果的模型。模型若有解釋力，各組平均數應有明顯差異，也就是組間變異較大；同一組內的觀察值則應相對集中，使未被分組解釋的誤差較小。這個「模型所解釋的變異與誤差變異相比」的想法，之後也會出現在迴歸分析。" },
  { type: "formulaGroup", formulas: [
    { label: "F 統計量", latex: "F=\\frac{MS_{\\mathrm{between}}}{MS_{\\mathrm{within}}}=\\frac{MS_M}{MS_E}", fallback: "F = MSbetween / MSwithin = MSM / MSE" },
    { label: "在 H₀ 成立時", latex: "F\\sim F_{k-1,\\,n-k}", fallback: "F ~ F(k−1, n−k)" },
  ] },
  { type: "paragraph", text: "F 值越大，表示組間差異相對於組內誤差越大，資料與「所有母體平均數相同」的虛無假設越不相容，因此右尾 p 值通常越小。不過，F 值大並不等於模型一定「好」，仍要同時檢查研究設計、模型假設、效果大小與實際意義。" },

  { type: "heading", text: "資料形式與研究問題" },
  { type: "table", rows: [
    ["項目", "單因子獨立樣本 ANOVA 的要求"],
    ["自變數（因子）", "一個類別變數，包含兩個以上彼此獨立的組別或水準"],
    ["依變數", "可合理計算平均數的定量變數"],
    ["觀察單位", "每個觀察單位只屬於一組，各觀察值彼此獨立"],
    ["研究問題", "各組的母體平均數是否全都相同？"],
  ] },
  { type: "paragraph", text: "「單因子」是指模型中只有一個自變數，不是指只有一組資料。例如，用治療方式將受試者分成安慰劑、低劑量與高劑量三組，再比較治療後血壓，因子是「治療方式」，三種治療方式則是這個因子的三個水準。" },

  { type: "heading", text: "成立條件" },
  { type: "list", items: [
    "獨立性：各觀察值彼此獨立，通常由抽樣或研究設計加以保證。",
    "常態性：在每一組中，誤差項近似常態分布；實務上應查看各組分布或模型殘差。",
    "等變異性：各組母體具有共同變異數 σ²，因此各組的組內平方和可以合併估計同一個誤差變異數。",
  ] },
  { type: "callout", tone: "intuition", label: "為什麼可以合併各組的組內誤差？", text: "每組平均數雖然不同，但傳統單因子 ANOVA 假設各組的誤差具有相同變異數。各組組內平方和因此都在估計同一個 σ²，可以相加後除以共同的組內自由度。若等變異假設不合理，可考慮 Welch ANOVA，而不是硬套傳統公式。" },

  { type: "heading", text: "為什麼各組的組內平方和可以合併？" },
  { type: "paragraph", text: "計算組內均方 MSE 時，我們先把所有組別的組內離差平方和加在一起，再除以組內自由度 n−k。讀者很自然會問：每組平均數明明不同，為什麼這些離差可以直接合併？關鍵是離差都先以各組自己的平均數為中心，所以它們不再反映組與組之間的平均數差異，而是在描述各組內部的隨機變動。" },
  { type: "formulaGroup", formulas: [
    { label: "第 j 組的組內平方和", latex: "SS_{E,j}=\\sum_{i=1}^{n_j}(X_{ij}-\\bar X_j)^2", fallback: "SSE,j = Σᵢ(Xᵢⱼ−X̄ⱼ)²" },
    { label: "合併所有組別", latex: "SS_E=\\sum_{j=1}^{k}SS_{E,j}=\\sum_{j=1}^{k}\\sum_{i=1}^{n_j}(X_{ij}-\\bar X_j)^2", fallback: "SSE = ΣⱼSSE,j = ΣⱼΣᵢ(Xᵢⱼ−X̄ⱼ)²" },
    { label: "共同的組內變異數估計", latex: "MS_E=\\frac{SS_E}{n-k}", fallback: "MSE = SSE/(n−k)" },
  ] },
  { type: "paragraph", text: "傳統單因子 ANOVA 假設每組誤差的母體變異數都等於同一個 σ²。雖然各組平均數 μⱼ 可以不同，但各組的 SSE,j 都是在估計同一個誤差變異數，因此可以像等變異獨立樣本 t 檢定的 pooled variance 一樣，依各組自由度合併。每組估計自己的平均數會用掉 1 個自由度，所以合併後的自由度是 Σ(nⱼ−1)=n−k。" },
  { type: "formulaGroup", formulas: [
    { label: "共同變異數假設", latex: "\\operatorname{Var}(\\varepsilon_{ij})=\\sigma^2\\quad\\text{for every group }j", fallback: "每一組皆有 Var(εᵢⱼ)=σ²" },
    { label: "組內自由度合併", latex: "\\sum_{j=1}^{k}(n_j-1)=\\sum_{j=1}^{k}n_j-k=n-k", fallback: "Σⱼ(nⱼ−1)=Σⱼnⱼ−k=n−k" },
  ] },
  { type: "callout", tone: "intuition", label: "平均數不同，不妨礙合併變異數", text: "各組先分別減去自己的平均數，已把組別平均數的位置差異移除；剩下的組內離差才拿來估計共同的 σ²。真正使合併成立的是共同變異數假設，而不是各組具有相同平均數。" },

  { type: "heading", text: "為什麼均方相除會形成 F 分配？" },
  { type: "paragraph", text: "原文提到 F 分配由兩個卡方變數相除而來，這正是 ANOVA 公式成立的重要理由。更精確地說，在 H₀ 成立，且誤差彼此獨立、服從常態分布並具有共同變異數 σ² 時，組間平方和與組內平方和除以 σ² 後，會形成兩個彼此獨立的卡方變數。" },
  { type: "formulaGroup", formulas: [
    { label: "組間標準化平方和", latex: "\\frac{SS_M}{\\sigma^2}\\sim\\chi^2_{k-1}", fallback: "SSM/σ² ~ χ²(k−1)" },
    { label: "組內標準化平方和", latex: "\\frac{SS_E}{\\sigma^2}\\sim\\chi^2_{n-k}", fallback: "SSE/σ² ~ χ²(n−k)" },
  ] },
  { type: "paragraph", text: "F 分配不是直接把兩個卡方變數相除，而是把它們各自除以自己的自由度後再相除。代入 ANOVA 的兩個平方和，共同的 σ² 會在分子與分母中消去，最後正好得到組間均方除以組內均方。" },
  { type: "formula", latex: "\\frac{(SS_M/\\sigma^2)/(k-1)}{(SS_E/\\sigma^2)/(n-k)}=\\frac{SS_M/(k-1)}{SS_E/(n-k)}=\\frac{MS_M}{MS_E}\\sim F_{k-1,\\,n-k}", fallback: "[(SSM/σ²)/(k−1)] / [(SSE/σ²)/(n−k)] = MSM/MSE ~ F(k−1,n−k)" },
  { type: "paragraph", text: "組內雖然包含很多組，但在共同變異數假設下，各組的組內平方和都是同一種誤差資訊；相加後形成一個自由度為 n−k 的合併卡方變數。因此 ANOVA 的分母只有一個 MSE。若各組變異數不同，這個傳統的共同 MSE 與上述精確 F 分配關係便不再成立，應考慮 Welch ANOVA 等不要求等變異的方法。" },
  { type: "heading", text: "建立假設" },
  { type: "formulaGroup", formulas: [
    { label: "虛無假設", latex: "H_0:\\mu_1=\\mu_2=\\cdots=\\mu_k", fallback: "H₀: μ₁ = μ₂ = ⋯ = μₖ" },
    { label: "對立假設", latex: "H_1:\\text{並非所有 }\\mu_j\\text{ 都相等}", fallback: "H₁: 並非所有 μⱼ 都相等" },
    { label: "等價敘述", latex: "H_1:\\exists\\,j\\ne \\ell\\text{ 使得 }\\mu_j\\ne\\mu_\\ell", fallback: "H₁: 至少存在 j≠ℓ，使 μⱼ≠μℓ" },
  ] },
  { type: "callout", tone: "intuition", label: "顯著結果能告訴我們什麼？", text: "拒絕 H₀ 只表示至少一組母體平均數不同，不能直接指出是哪幾組不同。若研究問題需要定位差異，還要進行事先規劃的對比或經多重比較校正的事後比較。" },

  { type: "heading", text: "符號與資料結構" },
  { type: "paragraph", text: "假設共有 k 組，第 j 組有 nⱼ 個觀察值，總樣本數為 n。用 Xᵢⱼ 表示第 j 組中的第 i 個觀察值。" },
  { type: "table", rows: [
    ["符號", "意義"],
    ["Xᵢⱼ", "第 j 組中的第 i 個觀察值"],
    ["nⱼ", "第 j 組的樣本數"],
    ["n=Σnⱼ", "所有組別合計的總樣本數"],
    ["X̄ⱼ", "第 j 組的樣本平均數"],
    ["X̄··", "全部 n 個觀察值的總平均數（grand mean）"],
    ["k", "組別數，也就是因子的水準數"],
  ] },
  { type: "formulaGroup", formulas: [
    { label: "第 j 組平均數", latex: "\\bar X_j=\\frac{1}{n_j}\\sum_{i=1}^{n_j}X_{ij}", fallback: "X̄ⱼ = (1/nⱼ)ΣXᵢⱼ" },
    { label: "總平均數", latex: "\\bar X_{\\cdot\\cdot}=\\frac{1}{n}\\sum_{j=1}^{k}\\sum_{i=1}^{n_j}X_{ij}=\\frac{1}{n}\\sum_{j=1}^{k}n_j\\bar X_j", fallback: "X̄·· = (1/n)ΣΣXᵢⱼ = (1/n)ΣnⱼX̄ⱼ" },
  ] },

  { type: "heading", text: "單因子 ANOVA 模型" },
  { type: "paragraph", text: "每個觀察值可以寫成「總平均 + 該組效果 + 個人誤差」。組別效果描述第 j 組平均數相對於總平均的偏移；誤差則描述個別觀察值相對於自己組平均數的偏移。" },
  { type: "formulaGroup", formulas: [
    { label: "母體模型", latex: "X_{ij}=\\mu+\\alpha_j+\\varepsilon_{ij}", fallback: "Xᵢⱼ = μ + αⱼ + εᵢⱼ" },
    { label: "組別效果", latex: "\\alpha_j=\\mu_j-\\mu", fallback: "αⱼ = μⱼ − μ" },
    { label: "誤差假設", latex: "\\varepsilon_{ij}\\overset{\\mathrm{iid}}{\\sim}N(0,\\sigma^2)", fallback: "εᵢⱼ iid~ N(0, σ²)" },
  ] },
  { type: "paragraph", text: "在樣本資料中，同一個總離差也能直接拆成組間部分與組內部分：" },
  { type: "formula", latex: "\\underbrace{X_{ij}-\\bar X_{\\cdot\\cdot}}_{\\text{總離差}}=\\underbrace{\\bar X_j-\\bar X_{\\cdot\\cdot}}_{\\text{組間：模型}}+\\underbrace{X_{ij}-\\bar X_j}_{\\text{組內：誤差}}", fallback: "Xᵢⱼ−X̄··（總離差）= X̄ⱼ−X̄··（組間）+ Xᵢⱼ−X̄ⱼ（組內）" },

  { type: "heading", text: "第一步：分解平方和" },
  { type: "paragraph", text: "離差有正有負，直接相加會互相抵銷，因此將離差平方後再加總。總平方和 SST 可以精確分解為組間平方和 SSM 與組內平方和 SSE。" },
  { type: "formulaGroup", formulas: [
    { label: "組內平方和（error）", latex: "SS_E=\\sum_{j=1}^{k}\\sum_{i=1}^{n_j}(X_{ij}-\\bar X_j)^2", fallback: "SSE = ΣⱼΣᵢ(Xᵢⱼ−X̄ⱼ)²" },
    { label: "組間平方和（model）", latex: "SS_M=\\sum_{j=1}^{k}n_j(\\bar X_j-\\bar X_{\\cdot\\cdot})^2", fallback: "SSM = Σⱼnⱼ(X̄ⱼ−X̄··)²" },
    { label: "總平方和（total）", latex: "SS_T=\\sum_{j=1}^{k}\\sum_{i=1}^{n_j}(X_{ij}-\\bar X_{\\cdot\\cdot})^2", fallback: "SST = ΣⱼΣᵢ(Xᵢⱼ−X̄··)²" },
    { label: "平方和分解", latex: "SS_T=SS_M+SS_E", fallback: "SST = SSM + SSE" },
  ] },
  { type: "callout", tone: "intuition", label: "組間平方和為什麼要乘 nⱼ？", text: "同一組中的每個觀察值都共享相同的組間離差 X̄ⱼ−X̄··。第 j 組共有 nⱼ 個觀察值，所以這個離差的平方要計入 nⱼ 次。正確形式是 nⱼ(X̄ⱼ−X̄··)²，而不是把 nⱼ 也一起平方。" },

  { type: "heading", text: "第二步：分配自由度並計算均方" },
  { type: "paragraph", text: "平方和會隨樣本數與組數增加，不能直接拿來比較。將各平方和除以對應自由度，得到可比較的均方（mean square）。" },
  { type: "table", rows: [
    ["變異來源", "自由度", "理由"],
    ["組間（model）", "k−1", "k 個組平均數受到總平均數的一項限制"],
    ["組內（error）", "n−k", "每一組估計一個平均數，共損失 k 個自由度"],
    ["全體（total）", "n−1", "全部資料估計一個總平均數"],
  ] },
  { type: "formulaGroup", formulas: [
    { label: "組間均方", latex: "MS_M=\\frac{SS_M}{k-1}", fallback: "MSM = SSM/(k−1)" },
    { label: "組內均方", latex: "MS_E=\\frac{SS_E}{n-k}", fallback: "MSE = SSE/(n−k)" },
    { label: "自由度分解", latex: "n-1=(k-1)+(n-k)", fallback: "n−1 = (k−1) + (n−k)" },
  ] },

  { type: "heading", text: "第三步：計算 F 值與 p 值" },
  { type: "paragraph", text: "在 H₀ 成立時，組間均方與組內均方都在估計共同誤差變異數 σ²，因此 F 通常接近 1。若組別平均數確實不同，組間均方還會包含組別效果，使 F 傾向變大。" },
  { type: "formulaGroup", formulas: [
    { label: "檢定統計量", latex: "F_{\\mathrm{obs}}=\\frac{MS_M}{MS_E}", fallback: "Fobs = MSM/MSE" },
    { label: "右尾 p 值", latex: "p=P\\!\\left(F_{k-1,\\,n-k}\\ge F_{\\mathrm{obs}}\\mid H_0\\right)", fallback: "p = P[F(k−1,n−k) ≥ Fobs | H₀]" },
  ] },
  { type: "paragraph", text: "由 F 分配表或統計軟體求得 p 值後，將它與事先設定的顯著水準 α 比較。若 p≤α，拒絕 H₀，結論是至少一組母體平均數不同；若 p>α，則沒有足夠證據拒絕 H₀，但不能因此證明所有平均數完全相同。" },

  { type: "heading", text: "ANOVA 摘要表" },
  { type: "table", rows: [
    ["變異來源", "平方和 SS", "自由度 df", "均方 MS", "F 值", "p 值"],
    ["組間（model）", "SSM", "k−1", "MSM=SSM/(k−1)", "MSM/MSE", "右尾機率"],
    ["組內（error）", "SSE", "n−k", "MSE=SSE/(n−k)", "", ""],
    ["全體（total）", "SST", "n−1", "", "", ""],
  ] },

  { type: "heading", text: "完整分析流程" },
  { type: "list", ordered: true, items: [
    "確認研究問題是一個類別因子對定量結果的平均數比較，且各組觀察值彼此獨立。",
    "先看各組樣本數、平均數、標準差、分布圖與可能的異常值。",
    "設定 H₀、H₁ 與顯著水準 α，並檢查常態性與等變異性是否合理。",
    "計算 SSM、SSE 與 SST，確認 SST=SSM+SSE。",
    "依自由度計算 MSM 與 MSE，再求 F 值及其右尾 p 值。",
    "報告各組描述統計、F 值、兩個自由度、p 值與效果大小；若整體檢定顯著，再依研究問題進行適當的對比或事後比較。",
  ] },

  { type: "details", label: "補充：為什麼兩組資料會得到 F=t²？", children: [
    { type: "paragraph", text: "當單因子獨立樣本 ANOVA 只有兩組時，若它與獨立樣本 t 檢定採用相同的等變異模型，兩者其實是在檢定同一個虛無假設。下面從兩種方法使用的變異數估計開始，逐步說明兩個統計量為什麼會滿足 F=t²。" },

    { type: "heading", text: "第一步：寫出等變異獨立樣本 t 統計量" },
    { type: "formulaGroup", formulas: [
      { label: "Pooled t 統計量", latex: "t=\\frac{\\bar X_1-\\bar X_2}{\\sqrt{s_p^2\\left(\\frac{1}{n_1}+\\frac{1}{n_2}\\right)}}", fallback: "t=(X̄₁−X̄₂)/√[sₚ²(1/n₁+1/n₂)]" },
      { label: "合併變異數", latex: "s_p^2=\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}", fallback: "sₚ²=[(n₁−1)s₁²+(n₂−1)s₂²]/(n₁+n₂−2)" },
    ] },

    { type: "heading", text: "第二步：證明 ANOVA 的 MSE 就是 sₚ²" },
    { type: "paragraph", text: "兩組各自的樣本變異數乘以自己的自由度，就是該組的組內離差平方和。把兩組相加，便得到 ANOVA 的組內平方和 SSE。" },
    { type: "formulaGroup", formulas: [
      { label: "兩組的組內平方和", latex: "SS_E=(n_1-1)s_1^2+(n_2-1)s_2^2", fallback: "SSE=(n₁−1)s₁²+(n₂−1)s₂²" },
      { label: "只有兩組時的組內自由度", latex: "df_E=(n_1+n_2)-2", fallback: "dfE=n₁+n₂−2" },
      { label: "組內均方", latex: "MS_E=\\frac{SS_E}{n_1+n_2-2}=s_p^2", fallback: "MSE=SSE/(n₁+n₂−2)=sₚ²" },
    ] },
    { type: "paragraph", text: "因此，等變異 t 檢定使用的合併變異數 sₚ²，與兩組 ANOVA 分母中的 MSE 是同一個共同組內變異數估計值。" },

    { type: "heading", text: "第三步：求兩組 ANOVA 的組間均方" },
    { type: "paragraph", text: "先以兩組樣本數加權，求全部資料的總平均數：" },
    { type: "formula", latex: "\\bar X_{\\cdot\\cdot}=\\frac{n_1\\bar X_1+n_2\\bar X_2}{n_1+n_2}", fallback: "X̄··=(n₁X̄₁+n₂X̄₂)/(n₁+n₂)" },
    { type: "paragraph", text: "將各組平均數減去總平均數，可以把兩個組間離差都改寫成兩組平均數差的倍數：" },
    { type: "formulaGroup", formulas: [
      { label: "第 1 組的組間離差", latex: "\\bar X_1-\\bar X_{\\cdot\\cdot}=\\frac{n_2}{n_1+n_2}(\\bar X_1-\\bar X_2)", fallback: "X̄₁−X̄··=[n₂/(n₁+n₂)](X̄₁−X̄₂)" },
      { label: "第 2 組的組間離差", latex: "\\bar X_2-\\bar X_{\\cdot\\cdot}=\\frac{n_1}{n_1+n_2}(\\bar X_2-\\bar X_1)", fallback: "X̄₂−X̄··=[n₁/(n₁+n₂)](X̄₂−X̄₁)" },
    ] },
    { type: "paragraph", text: "兩組 ANOVA 的組間自由度是 2−1=1，所以組間均方 MSM 等於組間平方和 SSM。將上面的兩個離差代入：" },
    { type: "formulaGroup", formulas: [
      { label: "代入組間平方和", latex: "MS_M=SS_M=n_1\\left(\\frac{n_2}{n_1+n_2}(\\bar X_1-\\bar X_2)\\right)^2+n_2\\left(\\frac{n_1}{n_1+n_2}(\\bar X_2-\\bar X_1)\\right)^2", fallback: "MSM=SSM=n₁[n₂(X̄₁−X̄₂)/(n₁+n₂)]²+n₂[n₁(X̄₂−X̄₁)/(n₁+n₂)]²" },
      { label: "提出共同的平均數差平方", latex: "MS_M=\\frac{n_1n_2^2+n_2n_1^2}{(n_1+n_2)^2}(\\bar X_1-\\bar X_2)^2", fallback: "MSM=[(n₁n₂²+n₂n₁²)/(n₁+n₂)²](X̄₁−X̄₂)²" },
      { label: "化簡", latex: "MS_M=\\frac{n_1n_2}{n_1+n_2}(\\bar X_1-\\bar X_2)^2", fallback: "MSM=[n₁n₂/(n₁+n₂)](X̄₁−X̄₂)²" },
      { label: "改寫成 t 分母的形式", latex: "MS_M=\\frac{(\\bar X_1-\\bar X_2)^2}{\\frac{1}{n_1}+\\frac{1}{n_2}}", fallback: "MSM=(X̄₁−X̄₂)²/(1/n₁+1/n₂)" },
    ] },

    { type: "heading", text: "第四步：將 MSM 與 MSE 相除" },
    { type: "paragraph", text: "把剛才得到的 MSM 放入 F 的分子，再以 MSE=sₚ² 作為分母：" },
    { type: "formulaGroup", formulas: [
      { label: "兩組 ANOVA 的 F 統計量", latex: "F=\\frac{MS_M}{MS_E}=\\frac{(\\bar X_1-\\bar X_2)^2}{s_p^2\\left(\\frac{1}{n_1}+\\frac{1}{n_2}\\right)}", fallback: "F=MSM/MSE=(X̄₁−X̄₂)²/[sₚ²(1/n₁+1/n₂)]" },
      { label: "將 pooled t 平方", latex: "t^2=\\left[\\frac{\\bar X_1-\\bar X_2}{\\sqrt{s_p^2\\left(\\frac{1}{n_1}+\\frac{1}{n_2}\\right)}}\\right]^2=\\frac{(\\bar X_1-\\bar X_2)^2}{s_p^2\\left(\\frac{1}{n_1}+\\frac{1}{n_2}\\right)}", fallback: "t²=(X̄₁−X̄₂)²/[sₚ²(1/n₁+1/n₂)]" },
      { label: "結論", latex: "\\boxed{F=t^2}", fallback: "F=t²" },
    ] },
    { type: "callout", tone: "intuition", label: "這個等式成立的範圍", text: "這裡比較的是兩組、等變異的獨立樣本 t 檢定與傳統單因子 ANOVA。此時 ANOVA 的分子自由度為 1，F 檢定與雙尾 t 檢定會得到相同的 p 值。F=t² 會失去正負方向，因此哪一組平均數較高仍要查看 X̄₁−X̄₂ 或 t 的正負號；Welch t 與傳統等變異 ANOVA 則不具有這個直接對應。" },
  ] },
  { type: "heading", text: "ANOVA 不只一種" },
  { type: "paragraph", text: "本單元介紹的是單因子獨立樣本 ANOVA。若同一批受試者在多個時間點或條件下重複測量，應使用相依樣本或重複量數 ANOVA；若模型同時包含兩個因子，可使用二因子 ANOVA 並研究主效果與交互作用；若同時分析多個依變數，則可能使用多變量變異數分析（MANOVA）。這些方法都延伸自變異分解與模型比較的核心想法，但成立條件、平方和與解釋方式並不完全相同。" },
  { type: "callout", tone: "forward", label: "接下來：事後比較", text: "整體 ANOVA 只回答「是否至少有一組不同」。下一單元將說明整體檢定顯著後，如何在控制多重比較錯誤率的前提下判斷差異出現在哪些組別。" },
];
