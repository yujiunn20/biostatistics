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
    { label: "雙尾 t 與右尾 F 的臨界值", latex: "F_{1,\\nu;1-\\alpha}=t_{\\nu;1-\\alpha/2}^{\\,2}", fallback: "F(1,ν) 的右尾 α 臨界值 = tν 的雙尾 α 臨界值平方" }
  ] },
  { type: "callout", tone: "intuition", label: "保留原本的圖形直覺", text: "t 值有正有負，但平方後都映到正半軸，所以可以直覺想成 t 曲線左右兩側被帶到同一側；平方同時改變數值間距，因此密度還需要變數轉換修正。這和標準常態平方形成自由度 1 卡方分配的思路一致。" },
  { type: "paragraph", text: "在只檢定一個效果時，t 檢定與自由度 1 的 F 檢定可以給出相同的 p 值，但兩者的解讀不完全相同。t 保留正負方向，F 只保留平方後的差異大小；當模型同時比較多個效果或多組平均數時，F 檢定也不能由單一 t 檢定取代。" },
  { type: "heading", text: "F 分配常用在哪裡？" },
  { type: "list", items: ["比較兩個母體變異數", "ANOVA 中比較組間變異與組內變異", "檢定迴歸模型整體是否具有解釋力", "比較巢狀模型增加參數後是否顯著改善配適", "建立部分變異數相關的信賴區間或檢定"] },
  { type: "callout", tone: "forward", label: "後面會再次用到", text: "第六章的 ANOVA 會把組間均方放在分子、組內均方放在分母形成 F 統計量；第七章的迴歸分析也會利用相同的變異分解與比值概念。" },
];

