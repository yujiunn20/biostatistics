export const statisticalTestSelection = [
  { type: "paragraph", text: "選擇統計檢定時，先判斷結果變數的資料型態，再判斷樣本是單一樣本、彼此獨立，還是來自相同個體的重複測量。下表整合本筆記已介紹的方法，作為定位工具；最終選擇仍需檢查各方法的假設與研究問題。" },

  { type: "heading", text: "統計方法整合表" },
  { type: "table", rows: [
    ["結果變數", "單一樣本", "兩組獨立樣本", "兩次相依測量", "三組以上獨立樣本"],
    ["二元變數", "Binomial test", "Chi-square test 或 Fisher's exact test", "McNemar's test", "Chi-square test"],
    ["近似常態的連續變數", "One-sample t-test", "Independent-samples t-test；變異數不同時用 Welch t-test", "Paired t-test", "One-way ANOVA；變異數不同時用 Welch ANOVA"],
    ["偏態或有離群值的連續變數", "Sign test 或 Wilcoxon signed-rank", "Mann–Whitney U / Wilcoxon rank-sum", "Sign test 或 Wilcoxon signed-rank", "Kruskal–Wallis test"],
    ["次序變數", "Sign test 或 Wilcoxon signed-rank", "Mann–Whitney U / Wilcoxon rank-sum", "Sign test 或 Wilcoxon signed-rank", "Kruskal–Wallis test"],
  ] },
  { type: "callout", tone: "caution", label: "表格沒有涵蓋所有研究設計", text: "三次以上相依測量、群聚資料、存活時間、計數結果與需要校正干擾因子的研究，必須使用其他方法；不能勉強套入這張表。" },

  { type: "heading", text: "第一個問題：結果變數是什麼型態？" },
  { type: "table", rows: [
    ["資料型態", "例子", "主要比較內容"],
    ["二元變數", "有／無、陽性／陰性", "比例或事件機率"],
    ["連續變數", "血壓、體重、血糖", "平均數、位置或完整分布"],
    ["次序變數", "疾病分期、疼痛等級、滿意度", "次序與分布位置"],
  ] },
  { type: "paragraph", text: "不要因為類別用 0、1、2 編碼，就把它當成連續數值；也不要只因連續資料未通過常態檢定，就自動改用無母數方法。資料尺度與研究問題要先於軟體檢定結果。" },

  { type: "heading", text: "第二個問題：樣本彼此是什麼關係？" },
  { type: "table", rows: [
    ["樣本關係", "判斷方式", "例子"],
    ["單一樣本", "一組資料與指定參考值比較", "滿意度中位數是否為 4"],
    ["獨立樣本", "不同觀察對象分在不同組", "治療組與對照組是不同病人"],
    ["相依樣本", "同一對象重複測量或經配對", "同一病人的治療前後血壓"],
  ] },
  { type: "callout", tone: "caution", label: "獨立與相依不能互換", text: "樣本關係決定變異數與虛無分配如何計算。把相依資料當成獨立資料，或把不同個體硬配成一對，都會使標準誤與 p 值失去正確意義。" },

  { type: "heading", text: "第三個問題：虛無假設究竟在比較什麼？" },
  { type: "table", rows: [
    ["方法", "主要虛無假設"],
    ["t-test / ANOVA", "指定平均數相等"],
    ["Sign test", "正差與負差的機率各為 1/2"],
    ["Wilcoxon signed-rank", "差值分布以 0 為中心且對稱"],
    ["Mann–Whitney / rank-sum", "兩組分布相同"],
    ["Median test", "兩組落在 pooled median 兩側的比例相同"],
    ["Kruskal–Wallis", "所有獨立組的分布相同"],
    ["Chi-square independence", "兩個類別變數彼此獨立"],
  ] },
  { type: "paragraph", text: "不同方法即使都被稱為比較兩組，也可能檢定不同母體命題。只有在額外的分布形狀或位置平移條件成立時，某些等級檢定才可以簡化解讀為中位數比較。" },

  { type: "heading", text: "使用表格後仍要完成的檢查" },
  { type: "list", ordered: true, items: [
    "畫圖並查看離群值、偏態、組間變異與資料可能的群聚結構。",
    "寫出研究問題與虛無假設，確認表格建議的方法真的回答同一問題。",
    "檢查樣本獨立性、配對方式、期望次數、對稱性、等變異性及 ties 等條件。",
    "小樣本時確認使用精確法、排列法或近似法，並說明連續性與 ties 修正。",
    "報告效果大小與信賴區間，不讓方法選擇表把分析縮減成只看 p 值。",
  ] },
];
