export const pearsonCorrelation = [
  { type: "paragraph", text: "Pearson 相關係數（Pearson correlation coefficient）以 r 表示樣本中的線性相關程度，以 ρ 表示母體中的線性相關程度。它同時呈現關係方向與標準化後的強度，但只描述線性關係，不等於因果效果。" },
  { type: "callout", tone: "intuition", label: "r 回答什麼問題？", text: "當 X 高於自己的平均數時，Y 是否也傾向高於自己的平均數？若兩者常同方向偏離平均數，r 為正；若常反方向偏離，r 為負；若沒有穩定的線性共同變動，r 接近 0。" },

  { type: "heading", text: "Pearson r 如何計算？" },
  { type: "paragraph", text: "先將每一對觀察值分別減去 X 與 Y 的樣本平均數，再把兩個離差的乘積加總。最後用 X、Y 各自的離差平方和標準化，使結果不受原始測量單位影響。" },
  { type: "formula", latex: "r=\\frac{\\sum_{i=1}^{n}(X_i-\\bar X)(Y_i-\\bar Y)}{\\sqrt{\\sum_{i=1}^{n}(X_i-\\bar X)^2}\\sqrt{\\sum_{i=1}^{n}(Y_i-\\bar Y)^2}}", fallback: "r=Σ(Xᵢ−X̄)(Yᵢ−Ȳ)/{√Σ(Xᵢ−X̄)²√Σ(Yᵢ−Ȳ)²}" },
  { type: "formulaGroup", formulas: [
    { label: "以樣本共變異數表示", latex: "r=\\frac{s_{XY}}{s_Xs_Y}", fallback: "r=sXY/(sX sY)" },
    { label: "由 Cauchy–Schwarz 不等式", latex: "-1\\leq r\\leq1", fallback: "−1≤r≤1" },
  ] },
  { type: "table", rows: [
    ["r 的情況", "線性關係的讀法"],
    ["r>0", "X 較大時，Y 平均而言也傾向較大"],
    ["r<0", "X 較大時，Y 平均而言傾向較小"],
    ["r≈0", "沒有明顯線性關係，但仍可能存在曲線關係"],
    ["|r|=1", "所有點完全落在同一條非水平直線上"],
  ] },
  { type: "callout", tone: "caution", label: "不要用固定門檻代替情境判斷", text: "同一個 |r| 在不同領域可能具有不同意義。樣本範圍、測量誤差、研究設計與結果的重要性，都會影響相關強度的解釋；不宜只用弱、中、強的固定切點下結論。" },

  { type: "heading", text: "使用 Pearson r 前要看什麼？" },
  { type: "list", items: [
    "每一筆資料必須是同一觀察單位的一對 X、Y 測量，且不同觀察單位彼此獨立。",
    "X 與 Y 應為定量變數，兩者的關係大致呈線性。",
    "先看散布圖；單一離群點或高槓桿點可能大幅改變 r。",
    "若要使用後面的 t 或 Fisher Z 推論，通常還需考慮二變量常態或相應的大樣本近似。",
    "資料範圍被限制時，即使母體關係不弱，樣本 r 也可能被壓低。",
  ] },
  { type: "callout", tone: "intuition", label: "r=0 不代表沒有關係", text: "U 形、倒 U 形或其他對稱曲線可能得到接近 0 的 r，因為正負線性趨勢互相抵銷。Pearson r 應與散布圖一起閱讀。" },

  { type: "heading", text: "Pearson r 與迴歸斜率" },
  { type: "paragraph", text: "在含截距的簡單線性迴歸中，樣本斜率 b₁ 與 Pearson r 具有直接關係：" },
  { type: "formula", latex: "b_1=r\\frac{s_Y}{s_X}", fallback: "b₁=r(sY/sX)" },
  { type: "paragraph", text: "r 是沒有單位的標準化關係；b₁ 則保留測量單位，表示 X 每增加一單位時 Y 平均改變多少。因為標準差皆為正，r 與 b₁ 的正負方向一定相同。若把 X、Y 都轉成 z 分數，迴歸斜率就等於 r。" },
  { type: "callout", tone: "caution", label: "相關是對稱的，迴歸不是", text: "交換 X 與 Y 不會改變 r；但用 X 預測 Y 與用 Y 預測 X 是兩條不同迴歸線。不能因 r 對稱，就認為兩個預測模型可以互換。" },

  { type: "heading", text: "r²、R² 與解釋變異" },
  { type: "paragraph", text: "原文以「100×r²% 的變異可由另一變數得知」描述 r²。在含截距的簡單線性迴歸中，更精確的說法是：r² 等於 R²，也等於迴歸平方和占總平方和的比例，表示樣本中 Y 的總變異有多少比例被 X 的線性模型解釋。" },
  { type: "formulaGroup", formulas: [
    { label: "簡單線性迴歸", latex: "r^2=R^2=\\frac{SS_R}{SS_T}", fallback: "r²=R²=SSR/SST" },
    { label: "百分比表示", latex: "100r^2\\%", fallback: "100r²%" },
  ] },
  { type: "paragraph", text: "例如 r=−0.60 時，r²=0.36，表示線性模型解釋樣本中 36% 的 Y 變異；負號所代表的下降方向不能從 r² 看出。這個比例不代表 X 造成 36% 的 Y，也不代表個別 Y 能被精確預測。" },

  { type: "heading", text: "檢定母體相關係數是否為 0" },
  { type: "paragraph", text: "若觀察值獨立，且母體可合理視為二變量常態，可用 t 統計量檢定母體 Pearson 相關係數 ρ 是否為 0。" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾假設", latex: "H_0:\\rho=0,\\qquad H_1:\\rho\\ne0", fallback: "H₀:ρ=0；H₁:ρ≠0" },
    { label: "t 統計量", latex: "t=\\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}=\\frac{r}{\\sqrt{(1-r^2)/(n-2)}}", fallback: "t=r√(n−2)/√(1−r²)=r/√[(1−r²)/(n−2)]" },
    { label: "自由度", latex: "df=n-2", fallback: "df=n−2" },
  ] },
  { type: "paragraph", text: "原文把 √[(1−r²)/(n−2)] 稱為變異數；在這個 t 公式中，它應理解為把 r 標準化所使用的分母形式，不是 r 在任意 ρ 下的通用精確標準誤。若要檢定非零的 ρ₀ 或建立 ρ 的信賴區間，下一頁的 Fisher Z 轉換較方便。" },
  { type: "callout", tone: "caution", label: "顯著不等於相關很強", text: "p 值同時受 |r| 與樣本數影響。大樣本中的微弱相關也可能顯著；小樣本中的中等相關則可能不顯著。應同時報告 r、信賴區間、p 值、樣本數與散布圖。" },

  { type: "heading", text: "為什麼相關檢定與迴歸 F 檢定相同？" },
  { type: "paragraph", text: "含截距的簡單線性迴歸中，檢定 ρ=0、檢定斜率 β₁=0，以及整體迴歸 F 檢定，都在回答是否存在非零線性關係。原文由平方和完整連結這三種寫法。" },
  { type: "formulaGroup", formulas: [
    { label: "先保留 r 的方向", latex: "r=\\operatorname{sign}(b_1)\\sqrt{\\frac{SS_R}{SS_T}}", fallback: "r=sign(b₁)√(SSR/SST)" },
    { label: "平方後", latex: "r^2=\\frac{SS_R}{SS_T}", fallback: "r²=SSR/SST" },
  ] },
  { type: "paragraph", text: "將 r²=SSR/SST 與 SST=SSR+SSE 代入 t²：" },
  { type: "formulaGroup", formulas: [
    { label: "由相關係數 t 檢定開始", latex: "t^2=\\frac{r^2(n-2)}{1-r^2}", fallback: "t²=r²(n−2)/(1−r²)" },
    { label: "代入平方和比例", latex: "t^2=\\frac{(SS_R/SS_T)(n-2)}{SS_E/SS_T}", fallback: "t²=[(SSR/SST)(n−2)]/(SSE/SST)" },
    { label: "整理成均方比", latex: "t^2=\\frac{SS_R/1}{SS_E/(n-2)}=\\frac{MS_R}{MS_E}=F", fallback: "t²=(SSR/1)/[SSE/(n−2)]=MSR/MSE=F" },
  ] },
  { type: "paragraph", text: "因此相關係數的雙尾 t 檢定、簡單迴歸斜率的雙尾 t 檢定與整體 F 檢定會得到相同 p 值。t 與 r 保留正負方向，F 與 r² 則只保留關係大小。" },

  { type: "heading", text: "建議如何報告？" },
  { type: "list", ordered: true, items: [
    "先提供散布圖，說明線性型態與是否存在影響結果的離群點。",
    "報告 Pearson r、樣本數 n、信賴區間與 p 值。",
    "用實際變數名稱描述正負方向，不只寫正相關或負相關。",
    "若同時解釋 r²，明確限定為樣本中的線性解釋比例，不作因果解讀。",
  ] },
];
