export const fDistribution = [
  { type: "paragraph", text: "F 分配（F-distribution）以 R. A. Fisher 的姓氏首字母命名。它描述兩個彼此獨立的卡方變數，各自除以自由度後再取比值所形成的分配，因此主要用來比較兩個獨立變異量的相對大小。" },
  { type: "callout", tone: "intuition", label: "先抓住核心動作", text: "卡方分配把多個標準常態變數的平方累積成總變異；F 分配則把兩個總變異先各自除以自由度，使它們成為可比較的平均變異，再計算兩者的比值。" },
  { type: "heading", text: "F 分配如何形成？" },
  { type: "paragraph", text: "令 U 與 V 為兩個彼此獨立的卡方變數，其自由度分別為 ν₁ 與 ν₂。將 U 與 V 各自除以其自由度後相除，所得的 F 便服從分子自由度為 ν₁、分母自由度為 ν₂ 的 F 分配。" },
  { type: "formulaGroup", formulas: [
    { label: "兩個獨立的卡方變數", latex: "U\\sim\\chi^2_{\\nu_1},\\qquad V\\sim\\chi^2_{\\nu_2},\\qquad U\\perp V", fallback: "U~χ²(ν₁)，V~χ²(ν₂)，且 U、V 獨立" },
    { label: "形成 F 分配", latex: "F=\\frac{U/\\nu_1}{V/\\nu_2}\\sim F_{\\nu_1,\\nu_2}", fallback: "F=(U/ν₁)/(V/ν₂) ~ F(ν₁,ν₂)" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["U、V", "兩個彼此獨立的卡方變數"], ["ν₁", "分子自由度，屬於 U"], ["ν₂", "分母自由度，屬於 V"], ["U/ν₁、V/ν₂", "各卡方變數除以自由度後的平均變異量"], ["Fν₁,ν₂", "具有分子、分母兩個自由度的 F 分配"], ["⊥", "表示兩個隨機變數彼此獨立"]] },
  { type: "heading", text: "為什麼 F 值不會小於 0？" },
  { type: "paragraph", text: "U 與 V 都是平方和，因此不會是負數；它們除以正的自由度後再相除，F 也只能取正值。F=1 表示分子與分母的平均變異量相同；F>1 表示分子的平均變異量較大；F<1 則表示分母較大。" },
  { type: "callout", tone: "intuition", label: "比值的方向很重要", text: "交換分子與分母會把 F 變成 1/F，也會交換兩個自由度。因此閱讀 F 值時，必須知道哪一個變異量放在分子、哪一個放在分母。" },
  { type: "formula", latex: "F\\sim F_{\\nu_1,\\nu_2}\\quad\\Longrightarrow\\quad \\frac{1}{F}\\sim F_{\\nu_2,\\nu_1}", fallback: "若 F~F(ν₁,ν₂)，則 1/F~F(ν₂,ν₁)" },
  { type: "heading", text: "兩個自由度如何影響形狀？" },
  { type: "paragraph", text: "F 分配通常右偏，右側具有長尾，其具體形狀同時由分子自由度 ν₁ 與分母自由度 ν₂ 決定。兩個自由度較低時，變異數估計較不穩定，分配較分散、右尾較厚；自由度增加後，比值通常更集中在 1 附近。" },
  { type: "image", imageId: "f-df-curves" },
  { type: "callout", tone: "forward", label: "為什麼要記兩個自由度？", text: "F 的分子和分母來自兩個不同的變異來源，各自保有不同數量的獨立資訊，因此必須分別記錄 ν₁ 與 ν₂。ANOVA 中常見的組間自由度與組內自由度，就是這兩個位置的具體例子。" },
  { type: "heading", text: "F 分配的機率密度函數" },
  { type: "paragraph", text: "分子自由度為 ν₁、分母自由度為 ν₂ 的 F 分配具有以下機率密度函數。兩個自由度同時出現在係數、次方與分母中，因此任一自由度改變，都會改變曲線形狀。" },
  { type: "formula", latex: "f(x)=\\frac{\\Gamma\\!\\left((\\nu_1+\\nu_2)/2\\right)}{\\Gamma(\\nu_1/2)\\Gamma(\\nu_2/2)}\\left(\\frac{\\nu_1}{\\nu_2}\\right)^{\\nu_1/2}x^{\\nu_1/2-1}\\left(1+\\frac{\\nu_1}{\\nu_2}x\\right)^{-(\\nu_1+\\nu_2)/2},\\quad x>0", fallback: "F 分配的機率密度函數，x>0" },
  { type: "table", rows: [["符號", "代表意義"], ["f(x)", "F 分配在 x 位置的機率密度"], ["x", "F 隨機變數的可能值，必須大於 0"], ["ν₁、ν₂", "分子自由度與分母自由度"], ["Γ", "Gamma 函數；用於密度函數的正規化係數"]] },
  { type: "details", label: "補充：F 密度函數的推導", children: [
    { type: "heading", text: "第一步：從兩個獨立卡方變數出發" },
    { type: "paragraph", text: "令 U~χ²ν₁、V~χ²ν₂，且 U 與 V 獨立。定義 X=(U/ν₁)/(V/ν₂)，並保留輔助變數 Y=V。" },
    { type: "formulaGroup", formulas: [
      { label: "變數轉換", latex: "X=\\frac{U/\\nu_1}{V/\\nu_2},\\qquad Y=V", fallback: "X=(U/ν₁)/(V/ν₂)，Y=V" },
      { label: "反向表示", latex: "U=\\frac{\\nu_1}{\\nu_2}XY,\\qquad V=Y", fallback: "U=(ν₁/ν₂)XY，V=Y" },
      { label: "Jacobian", latex: "\\left|\\frac{\\partial(u,v)}{\\partial(x,y)}\\right|=\\frac{\\nu_1}{\\nu_2}y", fallback: "|∂(u,v)/∂(x,y)|=(ν₁/ν₂)y" }
    ] },
    { type: "paragraph", text: "因為 U 與 V 獨立，聯合密度等於兩個卡方密度的乘積。代入反向轉換並乘上 Jacobian 後，得到 X 與 Y 的聯合密度。" },
    { type: "formula", latex: "f_{X,Y}(x,y)=f_U\\!\\left(\\frac{\\nu_1}{\\nu_2}xy\\right)f_V(y)\\frac{\\nu_1}{\\nu_2}y", fallback: "fX,Y(x,y)=fU((ν₁/ν₂)xy)fV(y)(ν₁/ν₂)y" },
    { type: "heading", text: "第二步：把輔助變數 Y 積分掉" },
    { type: "paragraph", text: "對所有 y>0 積分，便可得到 X 的邊際密度。整理與 y 有關的部分後，積分再次呈現 Gamma 積分的形式。" },
    { type: "formula", latex: "f_X(x)=\\int_0^{\\infty}f_{X,Y}(x,y)\\,dy", fallback: "fX(x)=∫₀∞fX,Y(x,y)dy" },
    { type: "formula", latex: "\\int_0^{\\infty}y^{(\\nu_1+\\nu_2)/2-1}\\exp\\!\\left[-\\frac{y}{2}\\left(1+\\frac{\\nu_1}{\\nu_2}x\\right)\\right]dy", fallback: "積分部分具有 Gamma 積分形式" },
    { type: "paragraph", text: "使用 Gamma 積分公式化簡並整理常數後，就得到正文中的 F 密度函數。因此，F 密度並不是額外假設出來的，而是由兩個獨立卡方密度、比值定義與變數轉換推導而來。" },
    { type: "table", rows: [["符號", "在推導中的意義"], ["X", "推導中的 F 隨機變數"], ["Y", "保留的輔助變數，等於 V"], ["fX,Y", "X 與 Y 的聯合密度"], ["∂(u,v)/∂(x,y)", "變數轉換的 Jacobian 行列式"]] }
  ] },
  { type: "heading", text: "F 分配與 t 分配的關係" },
  { type: "paragraph", text: "若 T 服從自由度為 ν 的 t 分配，將 T 平方後便服從分子自由度為 1、分母自由度為 ν 的 F 分配。這是因為 T 的分子 Z 平方後服從自由度 1 的卡方分配，而分母原本就含有 U/ν。" },
  { type: "formulaGroup", formulas: [
    { label: "從 t 的定義開始", latex: "T=\\frac{Z}{\\sqrt{U/\\nu}},\\qquad Z^2\\sim\\chi_1^2", fallback: "T=Z/√(U/ν)，Z²~χ²(1)" },
    { label: "平方後形成 F 分配", latex: "T^2=\\frac{Z^2/1}{U/\\nu}\\sim F_{1,\\nu}", fallback: "T²=(Z²/1)/(U/ν)~F(1,ν)" },
  ] },
  { type: "callout", tone: "intuition", label: "從圖形理解平方轉換", text: "t 值有正有負，但平方後，−t 與 +t 都會映到同一個正值 t²。圖形上可以想成把 t 分配左半邊翻到右側並與右半邊合併；平方同時改變橫軸的間距，所以密度還必須加入變數轉換的修正，不能只把曲線直接相加。這和標準常態平方形成自由度 1 卡方分配的思路一致。" },
  { type: "heading", text: "為什麼雙尾機率會合併？" },
  { type: "paragraph", text: "t 分配以 0 為中心且左右對稱。若雙尾檢定的總顯著水準為 α，左右兩尾各占 α/2。平方後，T≤−|t| 與 T≥|t| 這兩個尾端都會映到 T²≥t²，因此原本兩側的機率會合併成 F 分配右側的一個尾端；這就是原文所說「兩邊重疊，所以機率差兩倍」的精確意義。" },
  { type: "formulaGroup", formulas: [
    { label: "兩側事件平方後合併", latex: "P(|T|\\ge t)=P(T\\le -t)+P(T\\ge t)=P(T^2\\ge t^2)", fallback: "P(|T|≥t)=P(T≤−t)+P(T≥t)=P(T²≥t²)" },
    { label: "雙尾 t 與右尾 F", latex: "P(|T_\\nu|\\ge t_{\\nu,1-\\alpha/2})=\\alpha=P(F_{1,\\nu}\\ge t_{\\nu,1-\\alpha/2}^{\\,2})", fallback: "雙尾 t 的總尾端機率 α，等於 F(1,ν) 的右尾機率 α" },
    { label: "臨界值關係", latex: "F_{1,\\nu;1-\\alpha}=t_{\\nu;1-\\alpha/2}^{\\,2}", fallback: "F(1,ν) 的右尾 α 臨界值 = tν 的雙尾 α 臨界值平方" }
  ] },
  { type: "callout", tone: "intuition", label: "不是任何機率都直接乘以 2", text: "兩倍來自 t 分配的左右對稱尾端被平方後合併。它特別對應雙尾 t 檢定與右尾 F 檢定；若做的是單尾 t 檢定，就不能直接套用相同的兩倍說法。" },
  { type: "details", label: "補充：由密度函數推導 T² 服從 F 分配", children: [
    { type: "heading", text: "第一步：將 F 分配的分子自由度設為 1" },
    { type: "paragraph", text: "從 F 分配的密度函數出發，令分子自由度 ν₁=1、分母自由度 ν₂=ν。先直接代入，再使用 Γ(1/2)=√π 與 (1/ν)^(1/2)=1/√ν 整理係數。" },
    { type: "formulaGroup", formulas: [
      { label: "F 分配的一般密度", latex: "f_{F_{\\nu_1,\\nu_2}}(y)=\\frac{\\Gamma((\\nu_1+\\nu_2)/2)}{\\Gamma(\\nu_1/2)\\Gamma(\\nu_2/2)}\\left(\\frac{\\nu_1}{\\nu_2}\\right)^{\\nu_1/2}y^{\\nu_1/2-1}\\left(1+\\frac{\\nu_1}{\\nu_2}y\\right)^{-(\\nu_1+\\nu_2)/2}", fallback: "F(ν₁,ν₂) 的一般密度函數" },
      { label: "代入 ν₁=1、ν₂=ν", latex: "f_{F_{1,\\nu}}(y)=\\frac{\\Gamma((\\nu+1)/2)}{\\Gamma(1/2)\\Gamma(\\nu/2)}\\left(\\frac{1}{\\nu}\\right)^{1/2}y^{-1/2}\\left(1+\\frac{y}{\\nu}\\right)^{-(\\nu+1)/2}", fallback: "在 F 一般密度中代入分子自由度 1、分母自由度 ν" },
      { label: "使用 Γ(1/2)=√π 化簡", latex: "f_{F_{1,\\nu}}(y)=\\frac{\\Gamma((\\nu+1)/2)}{\\sqrt{\\pi\\nu}\\,\\Gamma(\\nu/2)}y^{-1/2}\\left(1+\\frac{y}{\\nu}\\right)^{-(\\nu+1)/2},\\quad y>0", fallback: "化簡後得到 F(1,ν) 的密度，包含 y^(-1/2)" }
    ] },
    { type: "heading", text: "第二步：和 t 分配的密度比較" },
    { type: "paragraph", text: "自由度為 ν 的 t 分配密度如下。若把其中的 t² 換成 y，除了 y^(-1/2) 之外，其餘部分正好與 F(1,ν) 的密度相同。這個額外因子不是任意補上的常數，而是平方轉換改變橫軸尺度後產生的 Jacobian 修正。" },
    { type: "formula", latex: "f_{T_\\nu}(t)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\pi\\nu}\\,\\Gamma(\\nu/2)}\\left(1+\\frac{t^2}{\\nu}\\right)^{-(\\nu+1)/2}", fallback: "自由度 ν 的 t 分配密度函數" },
    { type: "heading", text: "第三步：平方轉換會把兩個 t 值映到同一個 F 值" },
    { type: "paragraph", text: "令 Y=T²。對每個 y>0，都有 t=√y 與 t=−√y 兩個來源；因此 Y 的密度必須同時收集 t 分配左右兩側的機率。反向轉換 t=±√y 的導數絕對值都是 1/(2√y)。" },
    { type: "formulaGroup", formulas: [
      { label: "平方轉換與兩個反函數", latex: "Y=T^2,\\qquad t_1=\\sqrt{y},\\quad t_2=-\\sqrt{y}", fallback: "Y=T²；t=√y 或 −√y" },
      { label: "橫軸尺度的修正", latex: "\\left|\\frac{dt_1}{dy}\\right|=\\left|\\frac{dt_2}{dy}\\right|=\\frac{1}{2\\sqrt{y}}", fallback: "|dt/dy|=1/(2√y)" },
      { label: "平方後的密度", latex: "f_Y(y)=\\frac{f_T(\\sqrt{y})+f_T(-\\sqrt{y})}{2\\sqrt{y}}", fallback: "fY(y)=[fT(√y)+fT(−√y)]/(2√y)" }
    ] },
    { type: "paragraph", text: "因為 t 分配左右對稱，f_T(−√y)=f_T(√y)，兩側相加產生的 2，會和導數中的 2 抵消，最後留下 1/√y=y^(-1/2)。" },
    { type: "formulaGroup", formulas: [
      { label: "利用 t 分配的對稱性", latex: "f_Y(y)=\\frac{2f_T(\\sqrt{y})}{2\\sqrt{y}}=f_T(\\sqrt{y})y^{-1/2}", fallback: "fY(y)=fT(√y)y^(-1/2)" },
      { label: "代入 t 密度後", latex: "f_Y(y)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\pi\\nu}\\,\\Gamma(\\nu/2)}y^{-1/2}\\left(1+\\frac{y}{\\nu}\\right)^{-(\\nu+1)/2}=f_{F_{1,\\nu}}(y)", fallback: "平方後的密度等於 F(1,ν) 的密度" },
      { label: "推導結果", latex: "T\\sim t_\\nu\\quad\\Longrightarrow\\quad T^2\\sim F_{1,\\nu}", fallback: "若 T~tν，則 T²~F(1,ν)" }
    ] },
    { type: "callout", tone: "intuition", label: "對應你原本的『翻面、重疊、拉長』", text: "左右兩側相加，就是把 t 曲線左半邊翻到右側重疊；1/(2√y) 則描述平方轉換後橫軸間距被重新拉伸。原文提到的兩倍機率與修正項，其實正是變數轉換公式中的兩個部分。" },
    { type: "table", rows: [["符號", "在推導中的意義"], ["T", "自由度為 ν 的 t 隨機變數"], ["Y=T²", "平方轉換後的非負隨機變數"], ["fT", "t 分配的機率密度函數"], ["fY", "平方後 Y 的機率密度函數"], ["1/(2√y)", "由 t=±√y 對 y 微分得到的 Jacobian 修正"], ["F(1,ν)", "分子自由度 1、分母自由度 ν 的 F 分配"]] }
  ] },  { type: "heading", text: "F 可以看成 t 的推廣嗎？" },
  { type: "paragraph", text: "在分子自由度為 1 時，F 統計量確實就是某個 t 統計量的平方，因此 F 檢定可視為把這個雙尾 t 檢定改寫成只看正值的右尾檢定。更一般的 F 分配允許分子自由度大於 1，可以同時檢定多個效果；從這個角度，可把 F 檢定看成平方 t 檢定往多個自由度的推廣，但不能說所有 F 分配都等同於某個 t 分配。" },
  { type: "table", rows: [["比較方式", "回答的問題", "保留的資訊"], ["整體 F 檢定", "多組平均數是否至少有一組不同？", "判斷整體差異，但不直接指出哪幾組不同"], ["兩組 t 檢定", "指定的兩組平均數是否不同？", "可保留差異方向並提供該組對的細部資訊"], ["事後成對比較", "整體 F 顯著後，差異出現在哪些組別？", "進一步比較多個組對，但需要校正多重比較造成的第一類錯誤膨脹"]] },
  { type: "paragraph", text: "因此，多組資料可以先用 F 檢定回答「整體是否存在差異」，再用成對 t 型比較或其他事後比較找出「哪些組不同」。你原文所說反覆挑兩組比較可以取得更詳細資訊，核心是對的；需要補上的條件是不能直接做許多未校正的 t 檢定，通常要使用 Tukey、Bonferroni、Holm 等多重比較方法控制整體錯誤率。" },
  { type: "callout", tone: "forward", label: "為什麼同一份資料會同時看到 t 與 F？", text: "只有一個效果、分子自由度為 1 時，兩者滿足 F=t²，會得到相同的雙尾 p 值。比較多組或同時檢定多個參數時，F 適合先做整體判斷；若要知道差異的方向與發生在哪些組別，仍需要 t 統計量、對比或事後比較。" },
  { type: "heading", text: "F 分配常用在哪裡？" },
  { type: "list", items: ["比較兩個母體變異數", "ANOVA 中比較組間變異與組內變異", "檢定迴歸模型整體是否具有解釋力", "比較巢狀模型增加參數後是否顯著改善配適", "建立部分變異數相關的信賴區間或檢定"] },
  { type: "callout", tone: "forward", label: "後面會再次用到", text: "第六章的 ANOVA 會把組間均方放在分子、組內均方放在分母形成 F 統計量；第七章的迴歸分析也會利用相同的變異分解與比值概念。", related: ["06/one-way-anova", "07/simple-linear-regression"] },
];





