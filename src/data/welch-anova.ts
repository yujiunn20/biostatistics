export const welchAnova = [
  { type: "paragraph", text: "Welch ANOVA 用來比較多個獨立組別的母體平均數，但不要求各組具有相同變異數。當各組標準差差異明顯，尤其樣本數也不相等時，它通常比傳統單因子 ANOVA 更適合。" },
  { type: "callout", tone: "intuition", label: "它解決什麼問題？", text: "傳統單因子 ANOVA 把所有組別的組內平方和合併成共同 MSE；這一步需要等變異假設。Welch ANOVA 不建立共同 MSE，而是讓每組依自己的樣本變異數與樣本數取得不同權重。" },

  { type: "heading", text: "什麼時候考慮 Welch ANOVA？" },
  { type: "list", items: [
    "研究目標是比較兩組以上彼此獨立的母體平均數。",
    "依變數是可合理計算平均數的定量變數。",
    "各組變異數看起來不同，或等變異假設缺乏合理依據。",
    "各組樣本數不相等，且變異數較大的組剛好樣本數較小；此時傳統 ANOVA 特別容易受影響。",
  ] },
  { type: "paragraph", text: "Welch ANOVA 不是資料偏離常態時的通用替代品。它主要處理變異數不相等；觀察值仍須彼此獨立，各組平均數也應具有可解釋性。資料嚴重偏態、樣本很小或含有強烈離群值時，還要考慮圖形診斷、穩健方法、資料轉換或適合研究問題的無母數方法。" },

  { type: "heading", text: "假設與研究問題" },
  { type: "formulaGroup", formulas: [
    { label: "虛無假設", latex: "H_0:\\mu_1=\\mu_2=\\cdots=\\mu_k", fallback: "H₀: μ₁=μ₂=⋯=μₖ" },
    { label: "對立假設", latex: "H_1:\\text{並非所有 }\\mu_j\\text{ 都相等}", fallback: "H₁: 並非所有 μⱼ 都相等" },
  ] },
  { type: "table", rows: [
    ["條件", "Welch ANOVA 的要求"],
    ["獨立性", "各觀察值彼此獨立，每個觀察單位只屬於一組"],
    ["依變數", "定量資料，各組平均數具有實質意義"],
    ["常態性", "各組誤差近似常態；大樣本時通常較有韌性"],
    ["等變異性", "不要求各組母體變異數相同"],
  ] },

  { type: "heading", text: "核心想法：精確的組別獲得較大權重" },
  { type: "paragraph", text: "第 j 組平均數的估計變異數約為 sⱼ²/nⱼ。樣本數較多或樣本變異數較小的組，其平均數估計較精確，因此 Welch ANOVA 給它較大的權重。" },
  { type: "formulaGroup", formulas: [
    { label: "第 j 組權重", latex: "w_j=\\frac{n_j}{s_j^2}", fallback: "wⱼ=nⱼ/sⱼ²" },
    { label: "總權重", latex: "W=\\sum_{j=1}^{k}w_j", fallback: "W=Σwⱼ" },
    { label: "加權總平均", latex: "\\bar X_w=\\frac{\\sum_{j=1}^{k}w_j\\bar X_j}{W}", fallback: "X̄w=ΣwⱼX̄ⱼ/W" },
  ] },
  { type: "callout", tone: "intuition", label: "和傳統 ANOVA 的差別", text: "傳統 ANOVA 以各組樣本數衡量組平均對總平均的貢獻，並使用共同 MSE；Welch ANOVA 的權重同時考慮樣本數與各組自己的變異數，所以不必假設所有組共享同一個 σ²。" },

  { type: "heading", text: "Welch F 統計量如何形成？" },
  { type: "paragraph", text: "先計算各組平均數相對於加權總平均的加權差異，再用一個反映變異數估計不確定性的修正項調整分母與自由度。令 A 表示修正量：" },
  { type: "formulaGroup", formulas: [
    { label: "變異數不等的修正量", latex: "A=\\sum_{j=1}^{k}\\frac{\\left(1-w_j/W\\right)^2}{n_j-1}", fallback: "A=Σ[(1−wⱼ/W)²/(nⱼ−1)]" },
    { label: "Welch F 統計量", latex: "F_W=\\frac{\\dfrac{1}{k-1}\\sum_{j=1}^{k}w_j(\\bar X_j-\\bar X_w)^2}{1+\\dfrac{2(k-2)}{k^2-1}A}", fallback: "FW={Σwⱼ(X̄ⱼ−X̄w)²/(k−1)}/{1+[2(k−2)/(k²−1)]A}" },
    { label: "分子自由度", latex: "\\nu_1=k-1", fallback: "ν₁=k−1" },
    { label: "近似分母自由度", latex: "\\nu_2=\\frac{k^2-1}{3A}", fallback: "ν₂=(k²−1)/(3A)" },
  ] },
  { type: "paragraph", text: "由 F 分配與兩個自由度求得右尾 p 值。若 p 小於事先設定的顯著水準，結論仍是「至少一組母體平均數不同」，不能直接指出差異位於哪些組別。" },

  { type: "heading", text: "傳統 ANOVA 與 Welch ANOVA" },
  { type: "table", rows: [
    ["比較項目", "傳統單因子 ANOVA", "Welch ANOVA"],
    ["變異數假設", "各組變異數相同", "允許各組變異數不同"],
    ["組內變異數", "合併為共同 MSE", "各組以 nⱼ/sⱼ² 加權"],
    ["自由度", "k−1 與 n−k", "k−1 與 Welch–Satterthwaite 近似值"],
    ["常見風險", "不等變異且樣本數不平衡時可能失真", "小樣本、嚴重偏態或離群值仍可能影響結果"],
  ] },
  { type: "callout", tone: "caution", label: "不要用變異數檢定替自己選方法", text: "先做 Levene 檢定，再依是否顯著切換傳統或 Welch ANOVA，會把方法選擇建立在另一個具有抽樣誤差的檢定上。較好的做法是結合研究設計、各組樣本數、分布圖、變異程度與方法的穩健性事先決定分析策略。" },

  { type: "heading", text: "整體檢定顯著之後" },
  { type: "paragraph", text: "Welch ANOVA 顯著後，不能直接使用假設共同 MSE 的 Fisher's LSD、一般 pooled t 或傳統 Tukey HSD。若要進行所有組別的兩兩比較，常使用 Games–Howell 方法，因為它允許各組變異數與樣本數不同，並對多重比較作出調整。" },
  { type: "list", ordered: true, items: [
    "先報告各組樣本數、平均數、標準差與資料分布。",
    "報告 Welch F 值、分子與近似分母自由度，以及 p 值。",
    "若整體檢定顯著，再依研究問題進行 Games–Howell 或事先規劃的異質變異數對比。",
    "同時報告平均數差、信賴區間與調整後 p 值，不只列出顯著或不顯著。",
  ] },
];
