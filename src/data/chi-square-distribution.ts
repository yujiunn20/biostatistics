export const chiSquareDistribution = [
  { type: "paragraph", text: "卡方分配（chi-square distribution，記為 χ² 分配）描述多個彼此獨立的標準常態變數平方後相加所形成的隨機變數。它把各方向的標準化離差轉成非負的總變異，因此與變異數估計、卡方檢定及後面的 F 分配密切相關。" },
  { type: "callout", tone: "intuition", label: "先抓住核心動作", text: "從標準常態變數出發，依序進行「平方 → 相加」。平方使正負離差都轉成非負值；相加則把多個獨立方向的變異累積起來。" },
  { type: "heading", text: "卡方分配如何形成？" },
  { type: "paragraph", text: "若 Z₁、Z₂、…、Zν 是 ν 個彼此獨立的標準常態變數，將它們分別平方後相加，所得的 U 便服從自由度為 ν 的卡方分配。每加入一個獨立的標準常態平方，就增加一個自由度。" },
  { type: "formulaGroup", formulas: [
    { label: "每個變數皆為標準常態", latex: "Z_i\\sim N(0,1),\\qquad i=1,2,\\ldots,\\nu", fallback: "Zᵢ ~ N(0,1)，i=1,2,…,ν" },
    { label: "平方和形成卡方分配", latex: "U=\\sum_{i=1}^{\\nu}Z_i^2\\sim\\chi^2_{\\nu}", fallback: "U=ΣZᵢ² ~ χ²(ν)" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["Zᵢ", "第 i 個標準常態變數"], ["U", "所有標準常態變數平方後的總和"], ["ν", "自由度；獨立平方項的數量"], ["χ²ν", "自由度為 ν 的卡方分配"]] },
  { type: "heading", text: "為什麼卡方值不會小於 0？" },
  { type: "paragraph", text: "每個 Zᵢ 經過平方後都不可能是負數，因此平方和 U 也只能落在 0 以上。當自由度為 1 時，卡方變數就是一個標準常態變數的平方。可以直覺想成常態曲線左右兩側的值經平方後都映到正數範圍，但經過變數轉換後，密度形狀也會改變。" },
  { type: "callout", tone: "intuition", label: "不是把常態曲線直接對折", text: "「左右兩側都變成正數」有助於理解卡方值為何非負，但卡方分配不是常態曲線簡單翻到右側後疊加。平方會改變數值間距與密度，因此自由度為 1 的 χ² 分配並不等於常態分配。" },
  { type: "heading", text: "從標準常態曲線理解自由度 1 的形狀" },
  { type: "paragraph", text: "當自由度 ν=1 時，卡方變數就是 U=Z²，其中 Z 服從標準常態分配。標準常態曲線左側的負值與右側的正值，平方後都會映到 0 以上；例如 Z=−2 與 Z=2 都會得到 U=4。因此，可以直覺想成常態曲線左右兩側的機率被帶到正半軸並合在一起。" },
  { type: "paragraph", text: "不過，平方不只改變正負號，也會改變數值之間的距離，所以密度不能只把兩側高度直接相加。進行變數轉換時還要加入修正因子；這正是原本筆記所說的「會有修正項」。" },
  { type: "formulaGroup", formulas: [
    { label: "從標準常態變數平方", latex: "U=Z^2,\\qquad Z\\sim N(0,1)", fallback: "U=Z²，Z~N(0,1)" },
    { label: "自由度 1 的卡方密度", latex: "f_U(u)=\\frac{\\phi(\\sqrt{u})+\\phi(-\\sqrt{u})}{2\\sqrt{u}}=\\frac{1}{\\sqrt{2\\pi u}}e^{-u/2},\\qquad u>0", fallback: "fᵤ(u)=[φ(√u)+φ(−√u)]/(2√u)，u>0" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["φ(z)", "標準常態分配在 z 位置的機率密度"], ["√u、−√u", "平方後得到 u 的兩個原始 Z 值"], ["1/(2√u)", "平方轉換造成的密度修正因子"]] },
  { type: "heading", text: "自由度如何改變分配形狀？" },
  { type: "paragraph", text: "自由度較低時，卡方分配通常明顯右偏，許多數值集中在 0 附近，右側具有長尾。自由度增加時，獨立平方項愈多，分配中心向右移動、相對偏斜程度下降，外形會逐漸接近鐘形，但其取值仍然不會小於 0。" },
  { type: "heading", text: "為什麼自由度增加後會逐漸呈鐘形？" },
  { type: "paragraph", text: "自由度為 ν 的卡方變數，是 ν 個彼此獨立的 Zᵢ² 相加。每一個 Zᵢ² 都可看成自由度為 1 的卡方變數，因此增加自由度，就相當於把更多個具有相同分配的獨立平方項累積起來。這和中央極限定理研究「許多獨立隨機變數的和」是同一條思路。" },
  { type: "paragraph", text: "更精確地說，每個 Zᵢ² 的平均數為 1、變異數為 2，所以總和 U 的平均數為 ν、變異數為 2ν。當 ν 增加時，將 U 減去其平均數 ν，再除以標準差 √(2ν)，所得分配會逐漸接近標準常態分配。因此，未標準化的卡方曲線會一面向右移動、一面變寬，同時相對偏斜程度下降，看起來愈來愈接近鐘形。" },
  { type: "formula", latex: "\\frac{U-\\nu}{\\sqrt{2\\nu}}\\xrightarrow{d}N(0,1)\\qquad(\\nu\\to\\infty)", fallback: "(U−ν)/√(2ν) 在 ν 增加時逐漸接近 N(0,1)" },
  { type: "callout", tone: "intuition", label: "保留原本的直覺，再補上精確版本", text: "原本把它理解為「很多個自由度 1 的卡方變數相加，所以逐漸出現鐘形」是正確而有用的。需要補充的只是：中央極限定理比較的是經過置中與標準化後的分配，因此不只是把總和除以 ν；原始卡方分配的中心與寬度也會隨自由度一起改變。" },
  { type: "image", imageId: "chi-square-df-curves" },
  { type: "table", rows: [["性質", "自由度為 ν 的 χ² 分配"], ["可能值", "0 到正無限大"], ["平均數", "ν"], ["變異數", "2ν"], ["形狀", "低自由度時右偏；自由度增加後相對較對稱"]] },
  { type: "heading", text: "卡方分配與樣本變異數" },
  { type: "paragraph", text: "若從常態母體抽取 n 個彼此獨立的觀察值，樣本變異數 S² 與母體變異數 σ² 的比值經過調整後，會服從自由度為 n−1 的卡方分配。這是利用樣本變異數推論母體變異數的重要基礎。" },
  { type: "formulaGroup", formulas: [
    { label: "使用已知母體平均數標準化", latex: "\\sum_{i=1}^{n}\\left(\\frac{X_i-\\mu}{\\sigma}\\right)^2\\sim\\chi_n^2", fallback: "Σ[(Xᵢ−μ)/σ]² ~ χ²(n)" },
    { label: "使用樣本平均數後", latex: "\\frac{(n-1)S^2}{\\sigma^2}=\\sum_{i=1}^{n}\\left(\\frac{X_i-\\bar X}{\\sigma}\\right)^2\\sim\\chi_{n-1}^2", fallback: "(n−1)S²/σ² = Σ[(Xᵢ−X̄)/σ]² ~ χ²(n−1)" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["Xᵢ", "第 i 筆觀察值"], ["μ、σ²", "常態母體的平均數與變異數"], ["X̄、S²", "樣本平均數與樣本變異數"], ["n", "樣本數"], ["n−1", "使用樣本平均數後剩餘的自由度"]] },
  { type: "callout", tone: "forward", label: "自由度在這裡再次出現", text: "使用樣本平均數 X̄ 代替未知的 μ 後，n 個離差必須加總為 0，只剩 n−1 個獨立方向。這正是前一頁所說的：自由度描述限制之後仍能自由變動的獨立資訊。" },
  { type: "heading", text: "卡方分配的機率密度函數" },
  { type: "paragraph", text: "自由度為 ν 的卡方分配，其機率密度函數如下。公式決定不同自由度下曲線的高度與形狀，曲線下的總面積仍然等於 1。" },
  { type: "formula", latex: "f(u)=\\frac{1}{2^{\\nu/2}\\Gamma(\\nu/2)}u^{\\nu/2-1}e^{-u/2},\\qquad u>0", fallback: "f(u)=u^(ν/2−1)e^(−u/2)/[2^(ν/2)Γ(ν/2)]，u>0" },
  { type: "table", rows: [["符號", "代表意義"], ["f(u)", "卡方分配在 u 位置的機率密度"], ["u", "卡方變數的可能值，必須大於 0"], ["ν", "卡方分配的自由度"], ["Γ", "Gamma 函數，用來使密度曲線下的總面積等於 1"], ["e", "自然常數，約為 2.71828"]] },
  { type: "callout", tone: "intuition", label: "閱讀公式時先看兩件事", text: "u 只能取正值，所以卡方曲線全部位於 0 的右側；自由度 ν 同時出現在次方與係數中，因此改變自由度就會改變整條曲線的形狀。" },
  { type: "details", label: "補充：卡方密度函數的推導", children: [
    { type: "heading", text: "第一步：先推導自由度 1" },
    { type: "paragraph", text: "令 Z 服從標準常態分配，並定義 U=Z²。對任意 u>0，方程式 z²=u 有兩個解：z=√u 與 z=−√u。因為這兩個 Z 值都會映到同一個 U 值，密度轉換時必須把兩條來源相加。" },
    { type: "formulaGroup", formulas: [
      { label: "標準常態密度", latex: "\\phi(z)=\\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}", fallback: "φ(z)=e^(−z²/2)/√(2π)" },
      { label: "反函數及其導數", latex: "z_1=\\sqrt{u},\\quad z_2=-\\sqrt{u},\\qquad \\left|\\frac{dz_j}{du}\\right|=\\frac{1}{2\\sqrt{u}}", fallback: "z=±√u，|dz/du|=1/(2√u)" },
      { label: "把兩個來源的密度相加", latex: "f_U(u)=\\phi(\\sqrt{u})\\frac{1}{2\\sqrt{u}}+\\phi(-\\sqrt{u})\\frac{1}{2\\sqrt{u}}", fallback: "fᵤ(u)=[φ(√u)+φ(−√u)]/(2√u)" },
      { label: "化簡後", latex: "f_U(u)=\\frac{1}{\\sqrt{2\\pi u}}e^{-u/2},\\qquad u>0", fallback: "fᵤ(u)=e^(−u/2)/√(2πu)，u>0" }
    ] },
    { type: "paragraph", text: "其中 |dz/du| 是變數轉換的 Jacobian 修正。它反映平方會拉伸或壓縮數值間距，因此不能只把常態曲線左右兩側的高度直接相加。這個結果就是自由度為 1 的卡方密度。" },
    { type: "heading", text: "依原文方式：把卡方自由度代 1 與標準常態比較" },
    { type: "paragraph", text: "也可以從兩個已知密度反向核對。先將一般常態分配標準化為 μ=0、σ=1，再把卡方密度的自由度 ν 設為 1。" },
    { type: "formulaGroup", formulas: [
      { label: "一般常態密度", latex: "f_X(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\!\\left[-\\frac12\\left(\\frac{x-\\mu}{\\sigma}\\right)^2\\right]", fallback: "一般常態分配密度" },
      { label: "代入 μ=0、σ=1", latex: "\\phi(x)=\\frac{1}{\\sqrt{2\\pi}}e^{-x^2/2}", fallback: "標準常態密度 φ(x)=e^(-x²/2)/√(2π)" },
      { label: "一般卡方密度", latex: "f_{\\chi^2_\\nu}(u)=\\frac{1}{2^{\\nu/2}\\Gamma(\\nu/2)}u^{\\nu/2-1}e^{-u/2}", fallback: "自由度 ν 的卡方密度" },
      { label: "代入 ν=1 並使用 Γ(1/2)=√π", latex: "f_{\\chi^2_1}(u)=\\frac{1}{\\sqrt{2\\pi}}e^{-u/2}u^{-1/2}", fallback: "fχ²₁(u)=e^(-u/2)u^(-1/2)/√(2π)" }
    ] },
    { type: "paragraph", text: "令 u=x² 後，卡方密度中的指數部分 e^(−u/2) 就對應標準常態密度中的 e^(−x²/2)；多出的 u^(−1/2) 正是平方轉換留下的尺度修正。這就是原文所說「把 χ² 換成 x² 後，還差一個修正項」的完整對照。" },
    { type: "heading", text: "第二步：推廣到 ν 個獨立平方項" },
    { type: "paragraph", text: "令 U=Z₁²+⋯+Zν²。直接反覆計算密度的摺積會很繁瑣，因此可以使用動差生成函數（moment-generating function, MGF）：獨立隨機變數相加時，總和的 MGF 等於各自 MGF 的乘積。" },
    { type: "formulaGroup", formulas: [
      { label: "一個標準常態平方的 MGF", latex: "M_{Z^2}(s)=E\\!\\left(e^{sZ^2}\\right)=(1-2s)^{-1/2},\\qquad s<\\frac12", fallback: "MZ²(s)=(1−2s)^(−1/2)" },
      { label: "ν 個獨立平方項相加", latex: "M_U(s)=\\prod_{i=1}^{\\nu}M_{Z_i^2}(s)=(1-2s)^{-\\nu/2}", fallback: "Mᵤ(s)=ΠMZᵢ²(s)=(1−2s)^(−ν/2)" },
      { label: "對應的卡方密度", latex: "f_U(u)=\\frac{1}{2^{\\nu/2}\\Gamma(\\nu/2)}u^{\\nu/2-1}e^{-u/2},\\qquad u>0", fallback: "fᵤ(u)=u^(ν/2−1)e^(−u/2)/[2^(ν/2)Γ(ν/2)]" }
    ] },
    { type: "paragraph", text: "最後一個 MGF 正好對應形狀參數為 ν/2、尺度參數為 2 的 Gamma 分配，因此得到自由度為 ν 的卡方密度函數。" },
    { type: "table", rows: [["符號", "在推導中的意義"], ["φ(z)", "標準常態密度函數"], ["|dz/du|", "變數轉換時修正密度的 Jacobian 絕對值"], ["Mᵤ(s)", "U 的動差生成函數"], ["E", "期望值運算"], ["Π", "將各獨立平方項的 MGF 相乘"], ["Γ", "Gamma 函數"]] }
  ] },
  { type: "callout", tone: "forward", label: "後面會如何使用？", text: "卡方分配除了用來推論變異數，也會出現在類別資料的適合度檢定與獨立性檢定；兩者使用的統計量與自由度來源並不完全相同，後續章節會再分別說明。" },
];





