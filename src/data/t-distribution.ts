export const tDistribution = [
  { type: "paragraph", text: "t 分配（t-distribution），也稱為 Student's t distribution，用來描述母體標準差未知時，樣本平均數經標準化後的變動。它由 William Sealy Gosset 以「Student」為筆名發表，因此得名。" },
  { type: "callout", tone: "intuition", label: "t 分配解決的問題", text: "若母體標準差 σ 已知，可以使用標準常態分配；但實務上 σ 通常未知，只能用樣本標準差 S 估計。估計本身帶來額外不確定性，因此標準化後不再完全服從標準常態分配，而是服從尾端較厚的 t 分配。" },
  { type: "heading", text: "t 分配如何形成？" },
  { type: "paragraph", text: "t 分配可以由一個標準常態變數 Z，以及一個與 Z 獨立、自由度為 ν 的卡方變數 U 建立。分母中的 U/ν 反映使用樣本資料估計變異數所帶來的不確定性。" },
  { type: "formulaGroup", formulas: [
    { label: "由標準常態與卡方變數建立", latex: "T=\\frac{Z}{\\sqrt{U/\\nu}}\\sim t_{\\nu}", fallback: "T=Z/√(U/ν) ~ t(ν)" },
    { label: "單一樣本平均數的 t 統計量", latex: "T=\\frac{\\bar X-\\mu}{S/\\sqrt n}\\sim t_{n-1}", fallback: "T=(X̄−μ)/(S/√n) ~ t(n−1)" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["T", "服從 t 分配的隨機變數或 t 統計量"], ["Z", "標準常態變數"], ["U", "與 Z 獨立的卡方變數"], ["ν", "t 分配的自由度"], ["X̄", "樣本平均數"], ["μ", "母體平均數或假設中的平均數"], ["S", "樣本標準差，用來估計未知的 σ"], ["n", "樣本數；單一樣本情境下 ν=n−1"]] },
  { type: "heading", text: "t 分配與標準常態分配的差異" },
  { type: "paragraph", text: "t 分配和標準常態分配都以 0 為中心、左右對稱，也具有鐘形外觀。差別在於 t 分配的尾端較厚，表示離中心較遠的值具有較高機率。這是在母體標準差未知、必須使用樣本標準差估計時，對額外不確定性的反映。" },
  { type: "table", rows: [["比較", "標準常態分配", "t 分配"], ["中心", "0", "0"], ["形狀", "左右對稱、鐘形", "左右對稱、鐘形"], ["尾端", "較薄", "自由度低時較厚"], ["決定形狀的參數", "固定為 N(0,1)", "自由度 ν"], ["常見情境", "母體標準差已知或使用常態近似", "母體標準差未知，以樣本標準差估計"]] },
  { type: "heading", text: "自由度如何影響 t 分配？" },
  { type: "paragraph", text: "自由度較低通常代表估計標準差所依賴的獨立資訊較少，因此不確定性較大，t 分配的尾端也較厚。隨著樣本數與自由度增加，樣本標準差對母體標準差的估計通常更穩定，t 分配便逐漸接近標準常態分配。" },
  { type: "image", imageId: "t-df-normal-comparison" },
  { type: "callout", tone: "intuition", label: "不是以 30 為突然切換點", text: "常見的 n≥30 是方便教學的經驗規則，不代表樣本數到了 30，t 分配就突然變成標準常態分配。兩者是隨自由度增加而逐漸接近；實際差異是否重要，也與分析目的和尾端機率有關。" },
  { type: "heading", text: "什麼時候會用到 t 分配？" },
  { type: "list", items: ["利用單一樣本平均數推論母體平均數", "比較兩組獨立樣本的平均數", "比較成對或重複測量資料的平均差", "檢定迴歸係數或相關係數", "建立母體平均數或迴歸係數的信賴區間"] },
  { type: "callout", tone: "forward", label: "使用前仍要確認條件", text: "t 分配的精確推導以常態母體及相關獨立性條件為基礎。實際使用 t 方法時，還要依研究設計確認觀察值是否獨立、資料是否有嚴重偏態或極端值，以及使用的是單一樣本、配對樣本或獨立樣本方法。" },
  { type: "heading", text: "t 分配的機率密度函數" },
  { type: "paragraph", text: "自由度為 ν 的 t 分配具有以下機率密度函數。公式以 0 為中心且只含 t²，因此正負相同大小的 t 值具有相同密度，這正對應到 t 分配左右對稱的特性。" },
  { type: "formula", latex: "f(t)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\nu\\pi}\\,\\Gamma\\!\\left(\\nu/2\\right)}\\left(1+\\frac{t^2}{\\nu}\\right)^{-(\\nu+1)/2},\\qquad -\\infty<t<\\infty", fallback: "t 分配的機率密度函數，−∞<t<∞" },
  { type: "table", rows: [["符號", "代表意義"], ["f(t)", "t 分配在 t 位置的機率密度"], ["t", "t 隨機變數的可能值，可為任意實數"], ["ν", "t 分配的自由度"], ["Γ", "Gamma 函數；階乘概念的延伸"], ["π", "圓周率"]] },
  { type: "callout", tone: "intuition", label: "這個密度函數從哪裡來？", text: "它可以從 Z 的標準常態密度、U 的卡方密度，以及 T=Z/√(U/ν) 的定義推導出來。推導時將 Z 與 U 的聯合密度做變數轉換，再把不需要保留的 U 積分掉；積分結果會出現 Gamma 函數，最後得到上面的 t 密度。也就是說，這條密度公式不是另外猜出的，而是由常態分配、卡方分配與 t 的定義連續推導而來。" },
  { type: "details", label: "補充：t 密度函數的推導", children: [
    { type: "heading", text: "第一步：從 t 變數的定義出發" },
    { type: "paragraph", text: "令 Z 服從標準常態分配，U 服從自由度為 ν 的卡方分配，而且 Z 與 U 彼此獨立。定義 T=Z/√(U/ν)。為了求 T 的密度，同時保留一個輔助變數 V=U。" },
    { type: "formulaGroup", formulas: [
      { label: "變數轉換", latex: "T=\\frac{Z}{\\sqrt{U/\\nu}},\\qquad V=U", fallback: "T=Z/√(U/ν)，V=U" },
      { label: "反向表示", latex: "Z=T\\sqrt{V/\\nu},\\qquad U=V", fallback: "Z=T√(V/ν)，U=V" },
      { label: "Jacobian", latex: "\\left|\\frac{\\partial(z,u)}{\\partial(t,v)}\\right|=\\sqrt{\\frac{v}{\\nu}}", fallback: "|∂(z,u)/∂(t,v)|=√(v/ν)" }
    ] },
    { type: "paragraph", text: "獨立性使 Z 與 U 的聯合密度可以寫成兩個密度的乘積。進行變數轉換後，再乘上 Jacobian，便得到 T 與 V 的聯合密度。" },
    { type: "formula", latex: "f_{T,V}(t,v)=f_Z\\!\\left(t\\sqrt{v/\\nu}\\right)f_U(v)\\sqrt{\\frac{v}{\\nu}}", fallback: "fT,V(t,v)=fZ(t√(v/ν))fU(v)√(v/ν)" },
    { type: "heading", text: "第二步：把輔助變數 V 積分掉" },
    { type: "paragraph", text: "把標準常態密度與卡方密度代入，再對所有可能的 v>0 積分，就能只留下 T 的邊際密度。" },
    { type: "formula", latex: "f_T(t)=\\frac{1}{\\sqrt{2\\pi\\nu}\\,2^{\\nu/2}\\Gamma(\\nu/2)}\\int_0^{\\infty}v^{(\\nu+1)/2-1}\\exp\\!\\left[-\\frac{v}{2}\\left(1+\\frac{t^2}{\\nu}\\right)\\right]dv", fallback: "將聯合密度對 v 從 0 到 ∞ 積分" },
    { type: "paragraph", text: "積分部分具有 Gamma 積分的形式。利用下列關係，可以把積分直接化簡。" },
    { type: "formula", latex: "\\int_0^{\\infty}v^{a-1}e^{-bv}\\,dv=\\frac{\\Gamma(a)}{b^a},\\qquad a>0,\\ b>0", fallback: "∫₀∞v^(a−1)e^(−bv)dv=Γ(a)/bᵃ" },
    { type: "heading", text: "第三步：得到 t 密度" },
    { type: "formula", latex: "f_T(t)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\nu\\pi}\\,\\Gamma\\!\\left(\\nu/2\\right)}\\left(1+\\frac{t^2}{\\nu}\\right)^{-(\\nu+1)/2},\\qquad -\\infty<t<\\infty", fallback: "化簡後得到 t 分配的機率密度函數" },
    { type: "paragraph", text: "因此，t 密度確實是從標準常態密度、卡方密度與 T 的定義推導而來。Gamma 函數之所以出現，是因為把卡方變數積分掉時，積分正好具有 Gamma 函數的形式。" },
    { type: "table", rows: [["符號", "在推導中的意義"], ["V", "為了進行變數轉換而保留的輔助變數，等於 U"], ["fT,V", "T 與 V 的聯合密度"], ["∂(z,u)/∂(t,v)", "多變數轉換的 Jacobian 行列式"], ["a、b", "套用 Gamma 積分時使用的暫時參數"]] }
  ] },
  { type: "details", label: "補充：Gamma 函數是什麼？", children: [
    { type: "paragraph", text: "Gamma 函數（Gamma function）把階乘的概念延伸到正整數以外的數值。對正整數 n 而言，Γ(n)=(n−1)!；因此它可以在含有半數自由度等非整數參數的密度函數中，扮演類似階乘的角色。" },
    { type: "formulaGroup", formulas: [
      { label: "Gamma 函數的定義", latex: "\\Gamma(a)=\\int_0^{\\infty}x^{a-1}e^{-x}\\,dx,\\qquad a>0", fallback: "Γ(a)=∫₀∞x^(a−1)e^(−x)dx，a>0" },
      { label: "遞迴關係", latex: "\\Gamma(a+1)=a\\,\\Gamma(a)", fallback: "Γ(a+1)=aΓ(a)" },
      { label: "與階乘的關係", latex: "\\Gamma(n)=(n-1)!,\\qquad n=1,2,3,\\ldots", fallback: "Γ(n)=(n−1)!" },
      { label: "常見的半整數值", latex: "\\Gamma\\!\\left(\\frac12\\right)=\\sqrt{\\pi}", fallback: "Γ(1/2)=√π" }
    ] },
    { type: "paragraph", text: "在 t 分配的密度函數中，Gamma 函數主要出現在前方的常數係數，用來依自由度調整曲線，並確保整條密度曲線下的總面積等於 1。理解 t 分配時不必手動計算 Gamma 函數，但知道它的角色，就不會把 Γ 當成沒有意義的裝飾符號。" }
  ] },
  { type: "callout", tone: "forward", label: "後面會再次用到", text: "第四章會把這裡的分配概念放進實際檢定流程，分別介紹單一樣本 t 檢定、配對 t 檢定與兩獨立樣本 t 檢定。" },
];




