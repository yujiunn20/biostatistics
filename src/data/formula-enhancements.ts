const expectationHeading = "補充二：二項分配公式推導";

const binomialDerivation = [
  { type: "heading", text: expectationHeading },
  { type: "paragraph", text: "若 X 服從二項分配，表示在 n 次彼此獨立、每次成功機率皆為 p 的試驗中，X 記錄成功的總次數。下面分別推導 X 的平均數與變異數。" },
  { type: "heading", text: "二項分配的平均數" },
  { type: "paragraph", text: "平均數 E(X) 表示重複進行同樣試驗時，成功次數的長期平均。推導時先用『每個可能成功次數 × 該次數發生的機率』加總，再利用組合數恆等式整理。" },
  { type: "formulaGroup", formulas: [
    { label: "結論", latex: "E(X)=np", fallback: "E(X) = np" },
    { label: "第一步：依期望值定義加總", latex: "E(X)=\\sum_{i=0}^{n} i\\binom{n}{i}p^i(1-p)^{n-i}", fallback: "E(X) = Σ i × C(n,i) × pⁱ × (1−p)ⁿ⁻ⁱ" },
    { label: "第二步：使用 i\\binom{n}{i}=n\\binom{n-1}{i-1}", latex: "E(X)=np\\sum_{i=1}^{n}\\binom{n-1}{i-1}p^{i-1}(1-p)^{n-i}", fallback: "E(X) = np Σ C(n−1,i−1)pⁱ⁻¹(1−p)ⁿ⁻ⁱ" },
    { label: "第三步：剩餘總和是完整二項機率，總和等於 1", latex: "E(X)=np\\times 1=np", fallback: "E(X) = np × 1 = np" },
  ] },
  { type: "table", rows: [["平均數推導的符號", "代表意義"], ["X", "n 次試驗中的成功總次數"], ["E(X)", "X 的期望值，也就是長期平均成功次數"], ["n", "彼此獨立的試驗次數"], ["p", "每一次試驗成功的機率"], ["i", "X 可能取得的成功次數，從 0 到 n"], ["C(n,i) 或二項係數", "從 n 次試驗中選出 i 次成功的組合數"], ["Σ", "將所有可能成功次數對平均數的貢獻全部加總"]] },
  { type: "callout", tone: "intuition", label: "為什麼結果是 np？", text: "每一次試驗平均帶來 p 次成功；共有 n 次試驗，因此平均成功總次數就是 n×p。上面的推導是在機率分配公式中正式證明這個直覺。" },
  { type: "heading", text: "二項分配的變異數" },
  { type: "paragraph", text: "變異數描述成功總次數在平均值 np 周圍的變動程度。推導先求階乘動差 E[X(X−1)]，再得到 E(X²)，最後代入 Var(X)=E(X²)−[E(X)]²。" },
  { type: "formulaGroup", formulas: [
    { label: "結論", latex: "\\operatorname{Var}(X)=\\sigma^2=np(1-p)", fallback: "Var(X) = σ² = np(1−p)" },
    { label: "第一步：寫出階乘動差", latex: "E[X(X-1)]=\\sum_{i=2}^{n}i(i-1)\\binom{n}{i}p^i(1-p)^{n-i}", fallback: "E[X(X−1)] = Σ i(i−1)C(n,i)pⁱ(1−p)ⁿ⁻ⁱ" },
    { label: "第二步：提出 n(n−1)p²", latex: "E[X(X-1)]=n(n-1)p^2\\sum_{i=2}^{n}\\binom{n-2}{i-2}p^{i-2}(1-p)^{n-i}", fallback: "E[X(X−1)] = n(n−1)p² Σ C(n−2,i−2)pⁱ⁻²(1−p)ⁿ⁻ⁱ" },
    { label: "第三步：剩餘二項機率總和等於 1", latex: "E[X(X-1)]=n(n-1)p^2", fallback: "E[X(X−1)] = n(n−1)p²" },
    { label: "第四步：由 X²=X(X−1)+X", latex: "E(X^2)=n(n-1)p^2+np", fallback: "E(X²) = n(n−1)p² + np" },
    { label: "第五步：代入變異數公式並整理", latex: "\\operatorname{Var}(X)=E(X^2)-[E(X)]^2=np(1-p)", fallback: "Var(X) = E(X²) − [E(X)]² = np(1−p)" },
  ] },
  { type: "table", rows: [["變異數推導的符號", "代表意義"], ["Var(X)", "X 的變異數"], ["σ²", "二項分配的母體變異數"], ["E(X²)", "X 平方後的期望值"], ["E[X(X−1)]", "X 的二階階乘動差；方便利用二項係數整理"], ["1−p", "每一次試驗失敗的機率"], ["n(n−1)", "依序選出兩次不同試驗的方式數"]] },
  { type: "callout", tone: "intuition", label: "結果如何判讀？", text: "當 p 接近 0 或 1 時，結果多半集中在相近的成功次數，變異較小；p 接近 0.5 時，單次試驗的不確定性較大，因此成功總次數通常也較分散。" },
  { type: "callout", tone: "forward", label: "後面會再次用到", text: "二項分配的平均數 np 與變異數 np(1−p)，會在二項分布檢定、比例的標準誤，以及用常態分布近似二項分布時再次出現。" },
];

type SymbolRow = [string, string];

const commonSymbols: Array<[RegExp, SymbolRow]> = [
  [/\\sum|Σ/, ["Σ", "求和符號；將指定範圍內的各項全部加總"]],
  [/\\prod|Π/, ["Π", "連乘符號；將指定範圍內的各項全部相乘"]],
  [/E\s*\\left|E\s*\(/, ["E(·)", "期望值；隨機變數在長期重複下的平均"]],
  [/V\s*a\s*r|\\operatorname\{Var\}/, ["Var(·)", "變異數；描述隨機變數的分散程度"]],
  [/\\mu/, ["μ", "母體平均數或隨機變數的期望值"]],
  [/\\sigma\^\{?2|\\sigma_/, ["σ²、σ", "母體變異數與母體標準差；下標用來指出是哪一個統計量的標準差"]],
  [/\\overset\{-\}\{X\}|\\bar\{X\}/, ["X̄", "樣本平均數"]],
  [/\\hat\{Y|\\hat\{S/, ["帽號 ^", "表示由樣本估計或由模型預測得到的量"]],
  [/\\sqrt/, ["√", "平方根；常用來把變異數轉成標準差"]],
  [/\\sim/, ["~", "服從某個機率分配"]],
  [/\\chi/, ["χ²", "卡方分配或卡方統計量"]],
  [/z_|z\s*=/, ["z", "標準化後的 z 統計量；下標通常表示指定尾端機率的臨界值"]],
  [/t\s*=|t\^\{2\}/, ["t", "t 檢定統計量；t² 可與特定 F 統計量對應"]],
  [/\\alpha/, ["α", "顯著水準或信賴區間兩端所使用的尾端機率"]],
  [/\\ln|l n/, ["ln", "自然對數；可把乘除關係轉成加減，並壓縮較大的正值"]],
  [/\\exp|e\^/, ["exp、e", "指數函數；是自然對數 ln 的反函數"]],
  [/\\frac\{\\partial/, ["∂", "偏微分；觀察函數對其中一個參數改變時的變化"]],
  [/\\lim|lim/, ["lim", "極限；觀察某個變化量逐漸趨近指定值時的結果"]],
];

const topicSymbols: Record<string, SymbolRow[]> = {
  sampling: [["N", "母體中的觀察單位總數"], ["n", "由母體抽出的樣本數"], ["xᵢ", "母體或樣本中的第 i 個觀察值"], ["i、j", "不同觀察值的索引編號"], ["sd", "標準差；依公式所在位置可能指資料標準差或抽樣平均數的標準誤"]],
  "standard-error": [["N", "母體大小"], ["n", "不放回抽樣的樣本數"], ["xᵢ、xⱼ", "母體中的第 i 與第 j 個觀察值"], ["C(N,n)", "從 N 個觀察單位中選出 n 個的組合數"], ["σ²_X̄", "所有可能樣本平均數形成之抽樣分配的變異數"]],
  "independent-t-test": [["Xᵢ", "第 i 個觀察值"], ["X̄", "樣本平均數"], ["μ、σ²", "母體平均數與母體變異數"], ["n、n−1", "樣本數與估計平均數後剩餘的自由度"], ["sd", "樣本標準差"]],
  "contingency-table": [["A、B、C、D", "2×2 列聯表四個格子的觀察次數；實際位置依頁面上的表格標示"], ["OR", "勝算比（odds ratio）"], ["p₁、p₂", "兩組事件發生的機率"], ["L", "取自然對數後的效果量，例如 ln(OR) 或 ln(RR)"]],
  "mcnemars-test": [["A、B、C、D", "配對 2×2 表四個格子的次數；McNemar 檢定主要使用不一致的兩格"]],
  "anova-and-t-test": [["X̄₁、X̄₂", "第 1 組與第 2 組的樣本平均數"], ["n₁、n₂", "兩組的樣本數"], ["s₁²、s₂²", "兩組的樣本變異數"], ["sₚ²", "兩組合併變異數的估計值"], ["t、F", "兩組平均數比較的 t 統計量與 ANOVA 的 F 統計量"]],
  "simple-linear-regression": [["X、Y", "解釋變數與結果變數"], ["b₀、b₁", "由樣本估計的截距與斜率"], ["β₁", "母體迴歸斜率"], ["S(Y|X)", "固定 X 時，Y 對迴歸線的殘差標準差"], ["n−2", "簡單線性迴歸估計兩個參數後的誤差自由度"]],
  "pearson-correlation": [["r", "樣本 Pearson 相關係數"], ["X̄、Ȳ", "X 與 Y 的樣本平均數"], ["SSR、SSE、SST", "迴歸平方和、誤差平方和與總平方和"], ["MSR、MSE", "迴歸均方與誤差均方"]],
  "regression-derivations": [["Q", "殘差平方和；最小平方法要使它最小"], ["Yᵢ、Ŷᵢ", "第 i 筆實際值與模型預測值"], ["eᵢ", "第 i 筆殘差，等於 Yᵢ−Ŷᵢ"], ["b₀、b₁", "樣本迴歸線的截距與斜率"], ["SSR、SSE、SST", "迴歸、誤差與總平方和"], ["r²、R²", "相關係數平方與決定係數；簡單線性迴歸下兩者相等"]],
  "wilcoxon-tests": [["N", "合併後的總樣本數，或符號秩檢定中的非零差值數；依該段定義"], ["n、m", "兩組的樣本數，且 N=n+m"], ["W、Wₛ", "指定組別的秩和統計量"], ["T", "Wilcoxon 符號秩檢定的秩和統計量"], ["Xᵢ、Yⱼ", "排序後的秩或不同觀察值的秩"]],
  "survival-curve": [["S(t)、Ŝ(t)", "時間 t 的母體存活函數與其估計值"], ["h(t)", "時間 t 的瞬時危險率"], ["Δt", "從時間 t 起算的一小段時間"], ["tⱼ", "第 j 個事件發生時間"]],
  "comparing-survival-curves": [["n(group,j)", "第 j 個事件時間之前，指定組仍在風險集中的人數"], ["d(group,j)", "第 j 個時間點指定組的事件數"], ["e(group,j)", "虛無假設下指定組的期望事件數"], ["Uᴸ", "各時間點觀察事件數減期望事件數的總和"], ["sd(Uᴸ)", "Uᴸ 的標準差"], ["z", "比較兩組存活曲線的標準化統計量"]],
};

function symbolRows(latex: string, slug: string): SymbolRow[] {
  const rows: SymbolRow[] = [];
  const seen = new Set<string>();
  const add = (row: SymbolRow) => { if (!seen.has(row[0])) { seen.add(row[0]); rows.push(row); } };
  for (const row of topicSymbols[slug] ?? []) add(row);
  for (const [pattern, row] of commonSymbols) if (pattern.test(latex)) add(row);
  if (/\\binom|C_|\\genfrac/.test(latex)) add(["C(N,n) 或二項係數", "組合數；表示不考慮順序時，從指定總數中選取若干個的方式數"]);
  if (/c_\{|c_i/.test(latex)) add(["cᵢ", "第 i 個隨機變數前的固定係數"]);
  if (/X_\{|X_i/.test(latex) && !rows.some(row => row[0].includes("Xᵢ"))) add(["Xᵢ", "第 i 個隨機變數或第 i 筆觀察值；依本段定義"]);
  if (/n/.test(latex) && !rows.some(row => row[0].includes("n"))) add(["n", "本段使用的觀察數、樣本數或試驗次數；以公式前的研究設定為準"]);
  return rows.slice(0, 10);
}

function groupAndExplain(blocks: any[], slug: string) {
  const output: any[] = [];
  for (let i = 0; i < blocks.length;) {
    if (blocks[i]?.type !== "formula") { output.push(blocks[i]); i += 1; continue; }
    const formulas: any[] = [];
    while (i < blocks.length && blocks[i]?.type === "formula") { formulas.push(blocks[i]); i += 1; }
    const latex = formulas.map(item => item.latex ?? "").join(" ");
    if (formulas.length === 1) output.push(formulas[0]);
    else output.push({ type: "formulaGroup", formulas: formulas.map((item, index) => ({ label: `推導步驟 ${index + 1}`, latex: item.latex, fallback: item.fallback })) });
    const rows = symbolRows(latex, slug);
    if (rows.length && blocks[i]?.type !== "table") output.push({ type: "table", rows: [["符號", "在這組公式中的意義"], ...rows] });
  }
  return output;
}

export function enhanceFormulaPresentation(blocks: any[], chapterId = "", slug = "") {
  if (chapterId === "01") return blocks;
  const start = blocks.findIndex(block => block.type === "heading" && block.text === expectationHeading);
  if (start >= 0) return [...groupAndExplain(blocks.slice(0, start), slug), ...binomialDerivation];
  return groupAndExplain(blocks, slug);
}


