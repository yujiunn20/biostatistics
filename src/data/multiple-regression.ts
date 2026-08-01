export const multipleRegression = [
  { type: "paragraph", text: "多元線性迴歸（multiple linear regression）同時使用兩個以上的解釋變數來描述或預測一個連續結果 Y。它不只是把 X 的數量增加，也讓每個係數能在其他變數保持不變時，表示該變數與 Y 的條件關係。" },
  { type: "formulaGroup", formulas: [
    { label: "母體模型", latex: "Y_i=\\beta_0+\\beta_1X_{1i}+\\beta_2X_{2i}+\\cdots+\\beta_pX_{pi}+\\varepsilon_i", fallback: "Yᵢ=β₀+β₁X₁ᵢ+β₂X₂ᵢ+⋯+βₚXₚᵢ+εᵢ" },
    { label: "樣本預測式", latex: "\\hat Y_i=b_0+b_1X_{1i}+b_2X_{2i}+\\cdots+b_pX_{pi}", fallback: "Ŷᵢ=b₀+b₁X₁ᵢ+b₂X₂ᵢ+⋯+bₚXₚᵢ" },
  ] },
  { type: "callout", tone: "intuition", label: "和簡單線性迴歸的差別", text: "簡單線性迴歸只有一個斜率；多元線性迴歸有 p 個斜率。每增加一個可獨立估計的斜率，Regression 就增加 1 個自由度。" },

  { type: "heading", text: "多個係數要如何解釋？" },
  { type: "paragraph", text: "例如用年齡、性別與身高描述體重，可寫成下列模型。性別是類別變數，必須先選定參考組並以虛擬變數編碼；假設 Female=1、Male=0：" },
  { type: "formula", latex: "E(\\text{Weight})=\\beta_0+\\beta_1(\\text{Age})+\\beta_2(\\text{Female})+\\beta_3(\\text{Height})", fallback: "E(體重)=β₀+β₁(年齡)+β₂(Female)+β₃(身高)" },
  { type: "table", rows: [
    ["係數", "在其他變數固定時的解釋"],
    ["β₀", "年齡與身高為 0、且屬於男性參考組時的平均體重；是否有實質意義取決於變數零點"],
    ["β₁", "性別與身高相同時，年齡每增加 1 單位，平均體重改變多少"],
    ["β₂", "年齡與身高相同時，女性相對男性的平均體重差"],
    ["β₃", "年齡與性別相同時，身高每增加 1 單位，平均體重改變多少"],
  ] },
  { type: "callout", tone: "caution", label: "「固定其他變數」不是刪除其他變數", text: "係數的條件解釋是在模型中控制其他變數後進行比較。它能減少已測量干擾因子的影響，但不能自動消除測量誤差、未測量干擾或錯誤模型造成的偏差。" },

  { type: "heading", text: "先看多元模型如何拆解 Y 的變異" },
  { type: "paragraph", text: "多元迴歸的每一個預測值 Ŷᵢ，不是由單一 X 算出，而是同時代入該觀察對象的 X₁ᵢ、X₂ᵢ、…、Xₚᵢ。以下所有 Regression 與 Error 都是相對於這個包含 p 個斜率的完整模型：" },
  { type: "formula", latex: "\\hat Y_i=b_0+b_1X_{1i}+b_2X_{2i}+\\cdots+b_pX_{pi}", fallback: "Ŷᵢ=b₀+b₁X₁ᵢ+b₂X₂ᵢ+⋯+bₚXₚᵢ" },
  { type: "table", rows: [
    ["變異來源", "讀法", "它在問什麼？"],
    ["Total", "總平方和 SST", "尚未使用任何 X 時，所有 Y 相對總平均一共有多少變異？"],
    ["Regression", "迴歸平方和 SSR", "把 X₁～Xₚ 同時放入模型後，整個模型共同解釋多少變異？"],
    ["Error", "誤差平方和 SSE", "每個實際值與多元模型預測值之間還剩多少未解釋變異？"],
  ] },
  { type: "formulaGroup", formulas: [
    { label: "每一筆資料的離差分解", latex: "Y_i-\\bar Y=(\\hat Y_i-\\bar Y)+(Y_i-\\hat Y_i)", fallback: "Yᵢ−Ȳ=(Ŷᵢ−Ȳ)+(Yᵢ−Ŷᵢ)" },
    { label: "總平方和", latex: "SS_T=\\sum_{i=1}^{n}(Y_i-\\bar Y)^2", fallback: "SST=Σ(Yᵢ−Ȳ)²" },
    { label: "多元模型解釋的平方和", latex: "SS_R=\\sum_{i=1}^{n}(\\hat Y_i-\\bar Y)^2", fallback: "SSR=Σ(Ŷᵢ−Ȳ)²" },
    { label: "多元模型剩下的誤差平方和", latex: "SS_E=\\sum_{i=1}^{n}(Y_i-\\hat Y_i)^2", fallback: "SSE=Σ(Yᵢ−Ŷᵢ)²" },
    { label: "平方和分解", latex: "SS_T=SS_R+SS_E", fallback: "SST=SSR+SSE" },
  ] },
  { type: "callout", tone: "intuition", label: "多元的意思就在 Ŷᵢ 裡", text: "SSR 與 SSE 的名稱和簡單線性迴歸相同，但 Ŷᵢ 已經包含全部 p 個解釋變數。SSR 因此不是某一個 X 單獨解釋的平方和，而是目前整個模型共同解釋的平方和。" },

  { type: "heading", text: "三種平方和如何組成整體 F 檢定？" },
  { type: "paragraph", text: "整體 F 檢定比較的是：p 個斜率合在一起所解釋的平均變異，是否明顯大於模型仍未解釋的平均誤差。它不是先分別檢定每個 X，而是一次檢定整組斜率。" },
  { type: "formula", latex: "H_0:\\beta_1=\\beta_2=\\cdots=\\beta_p=0\\qquad H_1:\\text{至少一個 }\\beta_j\\ne0", fallback: "H₀: β₁=β₂=⋯=βₚ=0；H₁: 至少一個 βⱼ≠0" },
  { type: "table", rows: [
    ["變異來源", "平方和", "自由度"],
    ["Regression：X₁～Xₚ 共同解釋", "SSR", "p"],
    ["Error：完整模型仍未解釋", "SSE", "n−p−1"],
    ["Total：Y 原本的全部變異", "SST", "n−1"],
  ] },
  { type: "paragraph", text: "為什麼 Regression 是 p？因為模型有 β₁～βₚ 共 p 個斜率，每個可獨立估計的斜率使用 1 個模型自由度。為什麼 Error 是 n−p−1？因為 n 筆 Y 資訊已用來估計 1 個截距與 p 個斜率，共使用 p+1 個參數，所以剩下 n−(p+1)=n−p−1。" },
  { type: "formulaGroup", formulas: [
    { label: "模型均方", latex: "MS_R=\\frac{SS_R}{p}", fallback: "MSR=SSR/p" },
    { label: "誤差均方", latex: "MS_E=\\frac{SS_E}{n-p-1}", fallback: "MSE=SSE/(n−p−1)" },
    { label: "整體 F 統計量", latex: "F=\\frac{MS_R}{MS_E}=\\frac{SS_R/p}{SS_E/(n-p-1)}", fallback: "F=MSR/MSE=(SSR/p)/[SSE/(n−p−1)]" },
    { label: "H₀ 成立時", latex: "F\\sim F_{p,n-p-1}", fallback: "F ~ F(p,n−p−1)" },
  ] },
  { type: "paragraph", text: "如果 F 足夠大而拒絕 H₀，只能得到「β₁～βₚ 至少有一個不是 0」；尚不能知道是哪一個 X，也不能說每一個 X 都有獨立貢獻。接下來才查看各係數的 t 檢定，或比較巢狀模型來檢定一組指定係數。" },
  { type: "heading", text: "再從個別虛無假設檢查每個係數" },
  { type: "paragraph", text: "整體檢定之後，可以對截距及每個斜率分別進行 t 檢定。對第 j 個斜率，最常見的虛無假設是 H₀:βⱼ=0；t 值用樣本估計值與虛無假設指定值的差，除以該估計值的標準誤。" },
  { type: "formulaGroup", formulas: [
    { label: "個別假設", latex: "H_0:\\beta_j=0\\qquad H_1:\\beta_j\\ne0", fallback: "H₀: βⱼ=0；H₁: βⱼ≠0" },
    { label: "個別 t 統計量", latex: "t=\\frac{b_j-0}{SE(b_j)},\\qquad df=n-p-1", fallback: "t=bⱼ/SE(bⱼ)，df=n−p−1" },
  ] },
  { type: "table", rows: [
    ["Variable", "DF", "Parameter estimate", "Standard error", "t value", "p value"],
    ["Intercept", "1", "−128.55", "12.61", "−10.20", "<0.0001"],
    ["Age", "1", "2.38", "0.56", "4.25", "<0.0001"],
    ["Female", "1", "0.34", "1.60", "0.21", "0.8335"],
    ["Height", "1", "3.10", "0.27", "11.62", "<0.0001"],
  ] },
  { type: "paragraph", text: "以上表格沿用同一個示意結果。以 Female 為例，估計值 b₂=0.34 相對於標準誤 1.60 很小，因此 t=0.21、p=0.8335；在年齡與身高相同的條件下，資料沒有提供足夠證據支持女性與男性的平均體重不同。這不等於證明性別完全沒有影響。" },
  { type: "callout", tone: "caution", label: "整體 F 顯著，個別 t 不一定都顯著", text: "解釋變數彼此相關時，整體模型可能有解釋力，但單一係數的標準誤可能變大。個別係數應連同信賴區間、共線性、研究目的與變數編碼一起判讀。" },

  { type: "heading", text: "多組類別比較如何連到 ANOVA？" },
  { type: "paragraph", text: "ANOVA 與迴歸都是線性模型。ANOVA 以組別平均數描述差異；迴歸則把組別轉成虛擬變數，以係數表示各組相對參考組的差異。若類別變數共有 J 組，只需要 J−1 個虛擬變數，因為最後一組由全部虛擬變數皆為 0 來表示。" },
  { type: "formulaGroup", formulas: [
    { label: "J 組需要的虛擬變數數量", latex: "p=J-1", fallback: "p=J−1" },
    { label: "只有組別變數時的誤差自由度", latex: "n-p-1=n-(J-1)-1=n-J", fallback: "n−p−1=n−J" },
  ] },
  { type: "paragraph", text: "因此，模型只包含一個 J 組類別變數時，多元迴歸的整體 F 檢定與單因子 ANOVA 會得到相同的結論。若整體 F 拒絕各組平均相同的虛無假設，接著可用事先指定的 contrasts 或經多重比較校正的兩兩比較，找出差異所在；不能只把每個係數的未校正 p 值當成所有事後比較。" },

  { type: "heading", text: "虛擬變數如何編碼？" },
  { type: "paragraph", text: "假設壓力程度有無壓力、壓力中等、壓力大三組。若選擇無壓力為參考組，可建立兩個虛擬變數：" },
  { type: "table", rows: [
    ["分類", "X₁：壓力中等", "X₂：壓力大"],
    ["無壓力（參考組）", "0", "0"],
    ["壓力中等", "1", "0"],
    ["壓力大", "0", "1"],
  ] },
  { type: "formula", latex: "E(Y)=\\beta_0+\\beta_1X_1+\\beta_2X_2", fallback: "E(Y)=β₀+β₁X₁+β₂X₂" },
  { type: "table", rows: [
    ["組別", "代入模型後的平均", "係數意義"],
    ["無壓力", "β₀", "參考組平均"],
    ["壓力中等", "β₀+β₁", "β₁ 是中等組−無壓力組"],
    ["壓力大", "β₀+β₂", "β₂ 是壓力大組−無壓力組"],
  ] },
  { type: "callout", tone: "caution", label: "不能直接把 0、1、2 當成連續分數", text: "若把三組直接編成 0、1、2 並當作一個連續 X，模型會強迫相鄰組差異相等。使用兩個虛擬變數則不需要這項假設，能分別估計兩組相對參考組的差異。" },

  { type: "heading", text: "為什麼要把干擾因子納入模型？" },
  { type: "paragraph", text: "假設未分層時看見財富愈高、視力愈差；但分成年輕與年長族群後，各年齡層內都看不出財富與視力的關係。可能的原因是年長者平均較富有，同時視力也較差，年齡因此同時與財富及視力相關，造成未校正關係受到混淆。" },
  { type: "image", imageId: "age-confounding-wealth-eyesight" },
  { type: "formulaGroup", formulas: [
    { label: "未校正模型", latex: "E(\\text{Vision})=\\beta_0+\\beta_1(\\text{Wealth})", fallback: "E(視力)=β₀+β₁(財富)" },
    { label: "加入年齡後", latex: "E(\\text{Vision})=\\beta_0+\\beta_1(\\text{Wealth})+\\beta_2(\\text{Age})", fallback: "E(視力)=β₀+β₁(財富)+β₂(年齡)" },
  ] },
  { type: "paragraph", text: "加入年齡後，β₁ 比較的是年齡相同者之間財富與視力的關係。如果 β₁ 明顯縮小，表示未校正結果可能受到年齡混淆。不過，是否應校正某變數必須依研究問題、因果時間順序與領域知識事先判斷，不能只依 p 值自動選擇。" },

  { type: "heading", text: "Crude、部分校正與完整模型" },
  { type: "table", rows: [
    ["模型", "納入的變數", "用途"],
    ["Crude model", "主要解釋變數", "呈現未校正關係"],
    ["Age/sex-adjusted model", "主要解釋變數＋年齡、性別", "呈現基本人口學因素校正後的關係"],
    ["Full model", "主要解釋變數＋事先選定的干擾因子", "呈現完整調整集合下的條件關係"],
  ] },
  { type: "paragraph", text: "依序報告不同模型，可以讓讀者看見主要係數在校正前後如何改變。但 Full model 不代表把所有可取得變數全部塞入模型；若把中介變數、碰撞因子或高度共線的變數不加判斷地納入，反而可能造成偏差或不穩定。" },

  { type: "heading", text: "建議的分析與報告順序" },
  { type: "list", ordered: true, items: [
    "先依研究問題決定結果變數、主要解釋變數與需要校正的干擾因子。",
    "確認連續變數的線性形式，並為類別變數選定參考組與建立 J−1 個虛擬變數。",
    "檢查遺漏值、離群值、高槓桿值、殘差型態、等變異性與解釋變數間的共線性。",
    "先報告整體 F 檢定與 R²，再報告各係數、標準誤、信賴區間、t 與 p 值。",
    "需要多組比較時，清楚寫出 contrasts、參考組及多重比較校正方法。",
    "並列 crude 與 adjusted model，說明加入哪些變數、係數如何改變，以及結果可支持到什麼程度。",
  ] },
];
