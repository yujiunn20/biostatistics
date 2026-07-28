export const chiSquareIndependence = [
  { type: "paragraph", text: "卡方獨立性檢定（chi-square test of independence）用來判斷兩個類別變項在母體中是否彼此獨立。資料先整理成 r×c 列聯表；若兩變項獨立，每一格應出現多少次可以由列、欄的邊際比例推算，再與實際觀察次數比較。" },
  { type: "callout", tone: "forward", label: "這一頁的主線", text: "先把「獨立」寫成聯合機率等於邊際機率乘積 → 推出各格期望次數 → 將各格的標準化差異平方後相加 → 說明自由度 → 最後推導 2×2 表的簡化公式。" },

  { type: "heading", text: "使用時機" },
  { type: "paragraph", text: "當同一批獨立觀察單位同時具有兩個類別變項，而且研究問題是兩種分類是否存在關聯時，可以使用卡方獨立性檢定。例如，比較暴露狀態與疾病狀態、治療組別與是否改善，或性別與偏好的類別是否彼此獨立。" },
  { type: "list", items: [
    "兩個變項都必須是類別資料，並可整理成交叉次數表。",
    "每個觀察單位只能出現在一個儲存格中，各觀察單位彼此獨立。",
    "分析的是次數，而不是直接把百分比或平均數代入公式。",
    "各格期望次數需要足夠大，Pearson 卡方分配的近似才可靠。"
  ] },
  { type: "callout", tone: "intuition", label: "不限於 2×2 表", text: "2×2 表的兩個變項都只有兩類，因此每個方向都可連結到二項分布；若列或欄具有更多類別，則形成一般的 r×c 表，可由多項分布的觀點理解。Pearson 卡方公式仍然適用，只是自由度與期望次數的數量增加。" },

  { type: "heading", text: "2×2 表的觀察次數" },
  { type: "table", rows: [
    ["", "有疾病（case）", "無疾病（control）", "列合計"],
    ["有暴露（exposed）", "A", "B", "A+B"],
    ["無暴露（unexposed）", "C", "D", "C+D"],
    ["欄合計", "A+C", "B+D", "N=A+B+C+D"]
  ] },
  { type: "paragraph", text: "A、B、C、D 是觀察次數 O；最後一列與最後一欄是邊際總數。卡方獨立性檢定不直接比較 OR 或 RR 的大小，而是問：如果暴露與疾病真的獨立，這四格次數與獨立模型所預期的次數相差多遠？" },

  { type: "heading", text: "建立假設" },
  { type: "formulaGroup", formulas: [
    { label: "虛無假設", latex: "H_0:X\\text{ 與 }Y\\text{ 彼此獨立}", fallback: "H₀：X 與 Y 彼此獨立" },
    { label: "對立假設", latex: "H_1:X\\text{ 與 }Y\\text{ 不獨立}", fallback: "H₁：X 與 Y 不獨立" },
    { label: "H₀ 的機率條件", latex: "P(X=i,Y=j)=P(X=i)P(Y=j)", fallback: "P(X=i,Y=j)=P(X=i)P(Y=j)" }
  ] },
  { type: "paragraph", text: "「不獨立」表示兩變項存在統計關聯，但不代表其中一個變項必然造成另一個變項。卡方檢定也不提供關聯方向與效果大小；這些資訊要搭配各格比例、殘差、OR、RR 或其他適合的效果量判讀。" },

  { type: "heading", text: "期望次數如何得到？" },
  { type: "paragraph", text: "在 H₀ 下，第 i 列且第 j 欄的聯合機率等於第 i 列邊際機率乘上第 j 欄邊際機率。用樣本的列比例與欄比例估計這兩個邊際機率，再乘上總人數 N，就得到該格的期望次數。" },
  { type: "formulaGroup", formulas: [
    { label: "第 i 列的邊際機率估計", latex: "\\widehat P(X=i)=\\frac{n_{i+}}N", fallback: "估計 P(X=i)=nᵢ₊/N" },
    { label: "第 j 欄的邊際機率估計", latex: "\\widehat P(Y=j)=\\frac{n_{+j}}N", fallback: "估計 P(Y=j)=n₊ⱼ/N" },
    { label: "獨立時的聯合機率估計", latex: "\\widehat P_{ij}=\\frac{n_{i+}}N\\frac{n_{+j}}N", fallback: "估計 Pᵢⱼ=(nᵢ₊/N)(n₊ⱼ/N)" },
    { label: "第 i,j 格的期望次數", latex: "E_{ij}=N\\widehat P_{ij}=\\frac{n_{i+}n_{+j}}N", fallback: "Eᵢⱼ=nᵢ₊n₊ⱼ/N" }
  ] },
  { type: "callout", tone: "intuition", label: "列總數 × 欄總數 ÷ 總數", text: "期望次數不是任意平均分配。某一列本來就比較多人、某一欄本來也比較多人時，即使兩變項完全獨立，兩者交叉的儲存格仍應有較大的期望次數。" },

  { type: "heading", text: "2×2 表的四個期望次數" },
  { type: "table", rows: [
    ["儲存格", "觀察次數", "H₀ 下的期望次數"],
    ["A：有暴露且有疾病", "A", { parts: [{ type: "inlineFormula", latex: "E_A=\\dfrac{(A+B)(A+C)}N", fallback: "E_A=(A+B)(A+C)/N" }] }],
    ["B：有暴露且無疾病", "B", { parts: [{ type: "inlineFormula", latex: "E_B=\\dfrac{(A+B)(B+D)}N", fallback: "E_B=(A+B)(B+D)/N" }] }],
    ["C：無暴露且有疾病", "C", { parts: [{ type: "inlineFormula", latex: "E_C=\\dfrac{(C+D)(A+C)}N", fallback: "E_C=(C+D)(A+C)/N" }] }],
    ["D：無暴露且無疾病", "D", { parts: [{ type: "inlineFormula", latex: "E_D=\\dfrac{(C+D)(B+D)}N", fallback: "E_D=(C+D)(B+D)/N" }] }]
  ] },

  { type: "heading", text: "Pearson 卡方統計量" },
  { type: "paragraph", text: "每一格先計算觀察次數與期望次數的差，再除以該格期望次數的平方根形成 Pearson residual；把所有殘差平方後相加，就是 Pearson 卡方統計量。" },
  { type: "formulaGroup", formulas: [
    { label: "第 i,j 格的 Pearson residual", latex: "r_{ij}=\\frac{O_{ij}-E_{ij}}{\\sqrt{E_{ij}}}", fallback: "rᵢⱼ=(Oᵢⱼ−Eᵢⱼ)/√Eᵢⱼ" },
    { label: "Pearson 卡方統計量", latex: "\\chi^2=\\sum_{i=1}^{r}\\sum_{j=1}^{c}\\frac{(O_{ij}-E_{ij})^2}{E_{ij}}", fallback: "χ²=ΣᵢΣⱼ(Oᵢⱼ−Eᵢⱼ)²/Eᵢⱼ" }
  ] },
  { type: "callout", tone: "intuition", label: "仍然是標準化差異的平方和", text: "每一項 (O−E)²/E 都可以看成 [(O−E)/√E]²。它與適合度檢定使用相同的 Pearson 形式；差別在於本檢定的 E 不是由事先指定的比例直接給定，而是由列、欄邊際比例共同估計。" },

  { type: "heading", text: "自由度為什麼是 (r−1)(c−1)？" },
  { type: "paragraph", text: "在 r×c 表中，一共有 rc 個聯合機率。若不加限制，全部機率相加等於 1，因此可自由指定 rc−1 個；在 H₀ 的獨立模型下，只需指定 r−1 個列邊際機率與 c−1 個欄邊際機率。兩個模型相差的參數數量就是卡方檢定的自由度。" },
  { type: "formulaGroup", formulas: [
    { label: "未限制的聯合分布", latex: "rc-1", fallback: "rc−1" },
    { label: "獨立模型的邊際參數", latex: "(r-1)+(c-1)", fallback: "(r−1)+(c−1)" },
    { label: "兩者相減", latex: "df=(rc-1)-[(r-1)+(c-1)]=(r-1)(c-1)", fallback: "df=(rc−1)−[(r−1)+(c−1)]=(r−1)(c−1)" }
  ] },
  { type: "callout", tone: "intuition", label: "從固定邊際總數理解", text: "若列總數與欄總數已知，只需自由決定左上方的 (r−1)×(c−1) 格；最後一列與最後一欄會被邊際總數決定。2×2 表只要知道其中一格，其餘三格便隨之確定，因此 df=1。" },

  { type: "heading", text: "2×2 表的簡化公式" },
  { type: "paragraph", text: "把四格期望次數代入 Pearson 卡方公式並整理，可得到 2×2 表專用的交叉乘積簡化式。它和逐格計算 Σ(O−E)²/E 完全相同，但只適用於未做連續性校正的 2×2 Pearson 卡方檢定。" },
  { type: "formula", latex: "\\chi^2_{df=1}=\\frac{N(AD-BC)^2}{(A+B)(C+D)(A+C)(B+D)}", fallback: "χ²(df=1)=N(AD−BC)²/[(A+B)(C+D)(A+C)(B+D)]" },
  { type: "callout", tone: "intuition", label: "為什麼會出現 AD−BC？", text: "若兩變項獨立，2×2 表的交叉乘積應滿足 AD≈BC，也等價於 OR=AD/(BC)≈1。因此 |AD−BC| 愈大，代表觀察表格偏離獨立模型愈多，卡方值也愈大。" },
  { type: "details", label: "補充：由 Pearson 公式推導 2×2 簡化式", children: [
    { type: "paragraph", text: "令列總數 r₁=A+B、r₂=C+D，欄總數 c₁=A+C、c₂=B+D，且 N=r₁+r₂=c₁+c₂。先看 A 格的觀察次數與期望次數之差：" },
    { type: "formulaGroup", formulas: [
      { label: "A 格期望次數", latex: "E_A=\\frac{r_1c_1}{N}", fallback: "E_A=r₁c₁/N" },
      { label: "A 格的差", latex: "A-E_A=A-\\frac{(A+B)(A+C)}N", fallback: "A−E_A=A−(A+B)(A+C)/N" },
      { label: "通分並展開", latex: "A-E_A=\\frac{AN-(A+B)(A+C)}N=\\frac{AD-BC}{N}", fallback: "A−E_A={AN−(A+B)(A+C)}/N=(AD−BC)/N" }
    ] },
    { type: "paragraph", text: "由固定的列、欄總數可得，B、C 格的偏差與 A 格方向相反，D 格則與 A 格方向相同；四格偏差的絕對值都等於 |AD−BC|/N。" },
    { type: "formulaGroup", formulas: [
      { label: "四格偏差", latex: "A-E_A=D-E_D=\\frac{AD-BC}{N}", fallback: "A−E_A=D−E_D=(AD−BC)/N" },
      { label: "另外兩格", latex: "B-E_B=C-E_C=-\\frac{AD-BC}{N}", fallback: "B−E_B=C−E_C=−(AD−BC)/N" }
    ] },
    { type: "paragraph", text: "代回 Pearson 公式，因為平方會消除正負號，所以四項具有共同分子：" },
    { type: "formula", latex: "\\chi^2=\\frac{(AD-BC)^2}{N^2}\\left(\\frac1{E_A}+\\frac1{E_B}+\\frac1{E_C}+\\frac1{E_D}\\right)", fallback: "χ²=(AD−BC)²/N² × (1/E_A+1/E_B+1/E_C+1/E_D)" },
    { type: "formulaGroup", formulas: [
      { label: "代入四格期望次數", latex: "\\sum\\frac1E=N\\left(\\frac1{r_1c_1}+\\frac1{r_1c_2}+\\frac1{r_2c_1}+\\frac1{r_2c_2}\\right)", fallback: "Σ1/E=N[1/(r₁c₁)+1/(r₁c₂)+1/(r₂c₁)+1/(r₂c₂)]" },
      { label: "提出共同分母", latex: "\\sum\\frac1E=\\frac{N^3}{r_1r_2c_1c_2}", fallback: "Σ1/E=N³/(r₁r₂c₁c₂)" },
      { label: "得到簡化式", latex: "\\chi^2=\\frac{N(AD-BC)^2}{r_1r_2c_1c_2}=\\frac{N(AD-BC)^2}{(A+B)(C+D)(A+C)(B+D)}", fallback: "χ²=N(AD−BC)²/[r₁r₂c₁c₂]=N(AD−BC)²/[(A+B)(C+D)(A+C)(B+D)]" }
    ] }
  ] },

  { type: "heading", text: "為什麼只看卡方分配右尾？" },
  { type: "paragraph", text: "χ² 最小為 0；當每格 O 都等於 E 時，χ²=0，資料與獨立模型完全吻合。O 與 E 的整體差距愈大，χ² 愈大，也愈不支持 H₀。因此拒絕域只在右尾。" },
  { type: "formula", latex: "p\\text{ 值}=P\\!\\left(\\chi^2_{df}\\geq\\chi^2_{\\mathrm{obs}}\\mid H_0\\right)", fallback: "p 值=P(χ²df≥χ²obs | H₀)" },

  { type: "heading", text: "與 Poisson 分布的關係" },
  { type: "paragraph", text: "Pearson 統計量的分母使用 E，形式上可聯想到 Poisson 計數具有 Var(O)=E。更正式地說，若各格先視為獨立 Poisson 計數，在給定總數 N 後會得到多項分布；但卡方獨立性檢定不要求原始資料一定是「N 很大、p 很小」的稀有事件，也不能因此說此檢定只是由 Poisson 分布直接推出。" },
  { type: "callout", tone: "intuition", label: "Poisson 適合度檢定是另一個問題", text: "也可以用卡方適合度檢定判斷某組次數分布是否符合 Poisson 分布；那是在比較一個變項的觀察分布與 Poisson 理論分布，不是檢定兩個類別變項是否獨立。" },

  { type: "heading", text: "近似條件與方法選擇" },
  { type: "paragraph", text: "Pearson 卡方檢定使用大樣本近似，應檢查各格期望次數，而不是只看總樣本數 N。期望次數過小時，χ² 參考分布可能不準確；2×2 表可考慮 Fisher 精確檢定，其他表格則可考慮適當的精確或 Monte Carlo 方法。下一頁會另外說明 Yates 連續性校正。" },
  { type: "callout", tone: "forward", label: "不要把 Yates 與 Fisher 混成同一種方法", text: "Yates 是對 2×2 Pearson 卡方近似所做的連續性校正；Fisher 則是在給定邊際總數下計算離散表格的精確機率。兩者目的都與小樣本近似問題有關，但原理與計算方式不同。" },

  { type: "heading", text: "檢定步驟" },
  { type: "list", ordered: true, items: [
    "確認資料包含兩個類別變項，觀察值彼此獨立，並建立 r×c 觀察次數表。",
    "設定 H₀ 為兩變項獨立、H₁ 為兩變項不獨立。",
    "利用 Eᵢⱼ=列合計×欄合計÷N 計算每格期望次數，並檢查近似條件。",
    "計算 Pearson χ² 與 df=(r−1)(c−1)，由右尾得到 p 值。",
    "若拒絕 H₀，再檢視比例、殘差與效果量，說明關聯主要來自哪些儲存格及其實質意義。"
  ] }
];
