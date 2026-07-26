import { descriptiveStatistics } from "./descriptive-statistics";
import { randomVariables } from "./random-variables";

export const editorialSections: Record<string, Record<string, any[]>> = {
  "01": {
    introduction: [
      {
        type: "paragraph",
        text: "統計學（statistics）是一套從資料中取得資訊的方法。我們收集資料，通常不是只想看到一串數字，而是希望利用資料回答問題，例如資料集中在哪裡、彼此差異有多大、兩組之間是否可能存在差異，或某個變數能不能用來預測另一個變數。",
      },
      {
        type: "callout",
        tone: "intuition",
        label: "簡單來說",
        text: "資料本身不會自動告訴我們答案。統計學提供一套整理、比較與推論的方法，幫助我們從資料中看見有意義的訊息。",
      },
      {
        type: "heading",
        text: "敘述統計：整理與呈現資料",
      },
      {
        type: "paragraph",
        text: "敘述統計（descriptive statistics）的目的，是將已經取得的資料加以整理、摘要與呈現，讓我們更容易看見資料的特性。",
      },
      {
        type: "list",
        items: [
          "使用表格與圖形呈現資料",
          "使用平均數或中位數描述資料的中心位置",
          "使用全距、變異數或標準差描述資料的變異程度",
          "觀察資料的分布形狀與可能的異常值",
        ],
      },
      {
        type: "paragraph",
        text: "不同型態的資料適合使用不同的統計量與呈現方式。因此，在選擇統計方法之前，必須先了解資料的型態與特性。",
      },
      {
        type: "callout",
        tone: "intuition",
        label: "直覺理解",
        text: "敘述統計主要回答的是：「目前看到的這批資料，呈現什麼樣子？」",
      },
      {
        type: "heading",
        text: "推論統計：由樣本了解母體",
      },
      {
        type: "paragraph",
        text: "在實際研究中，我們通常無法觀察整個母體。母體可能非常龐大，全面測量可能需要過多時間與成本，有些測量甚至具有破壞性。因此，我們會從母體中抽取一部分觀察對象作為樣本，再利用樣本提供的資訊，推論母體可能的狀況。這類方法稱為推論統計（inferential statistics）。",
      },
      {
        type: "list",
        items: [
          "母體平均數可能是多少？",
          "兩組母體是否可能存在差異？",
          "兩個變數在母體中是否存在關聯？",
          "樣本中觀察到的結果，是否可能只是抽樣造成的隨機變動？",
        ],
      },
      {
        type: "callout",
        tone: "intuition",
        label: "直覺理解",
        text: "推論統計主要回答的是：「可以從這份樣本，對尚未完整觀察的母體作出什麼推論？」",
      },
      {
        type: "heading",
        text: "抽樣為什麼重要？",
      },
      {
        type: "paragraph",
        text: "不同樣本通常不會得到完全相同的結果。即使它們來自同一個母體，樣本平均數、比例或其他統計量，仍然會因隨機抽樣而有所變動。因此，從樣本推論母體時，不能只看樣本計算出來的數值，也必須評估其中的不確定性。",
      },
      {
        type: "callout",
        tone: "forward",
        label: "後面會再次用到",
        text: "抽樣造成的變動，會在後續以抽樣分配、標準誤、信賴區間與 p 值等概念呈現。這也是為什麼抽樣是後續統計方法的重要基礎。",
      },
      {
        type: "heading",
        text: "統計推論如何處理不確定性？",
      },
      {
        type: "paragraph",
        text: "統計推論不是只看單一數值，而是利用不同方法評估樣本所提供的資訊，以及推論中存在的不確定性。常見方法包括：",
      },
      {
        type: "list",
        items: [
          "點估計：利用樣本統計量估計母體參數",
          "區間估計：提供母體參數可能落入的範圍",
          "假設檢定：評估資料與某個統計假設是否相容",
          "預測：利用已知資料預測尚未觀察的結果",
          "統計建模：描述變數之間的關係",
        ],
      },
      {
        type: "callout",
        tone: "intuition",
        label: "共同的核心問題",
        text: "如何在只有部分資料的情況下，考慮抽樣造成的不確定性，並對母體作出合理的判斷？",
      },
      {
        type: "heading",
        text: "為什麼要學假設檢定？",
      },
      {
        type: "paragraph",
        text: "本筆記後續介紹的許多方法，都會使用假設檢定的共同架構。假設檢定不是一個孤立的章節，而是理解 t 檢定、卡方檢定、變異數分析、迴歸分析及其他統計方法的重要基礎。",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "提出虛無假設與對立假設",
          "根據資料計算檢定統計量",
          "在虛無假設成立的前提下，評估目前結果有多不尋常",
          "結合 p 值、信賴區間、效果大小與研究背景作出判讀",
        ],
      },
      {
        type: "callout",
        tone: "forward",
        label: "本筆記的學習主線",
        text: "後續看似不同的統計方法，會反覆回到相同問題：資料是什麼型態、樣本之間有什麼關係、虛無假設是什麼，以及觀察到的差異相對於隨機誤差有多大。",
      },
    ],
    "data-types": [
      { type: "paragraph", text: "選擇統計方法之前，首先要了解資料的型態。不同型態的資料可以進行的運算不同，適合的摘要方式、圖表與統計方法也會不同。" },
      { type: "callout", tone: "intuition", label: "簡單來說", text: "先確認資料代表「類別」還是「數量」，再判斷它有沒有順序、能不能計算差距，以及零點是否代表完全沒有。這些特性會影響後續能使用哪些統計方法。" },
      { type: "heading", text: "依資料性質分類" },
      { type: "paragraph", text: "依照觀察值所表達的意義，資料可以先分為類別資料與數值資料。" },
      { type: "heading", text: "類別資料" },
      { type: "paragraph", text: "類別資料（categorical data），也稱為定性資料（qualitative data），是依照觀察對象的特性分組。資料值代表所屬類別，而不是可以直接進行加減乘除的數量。" },
      { type: "list", items: ["名目尺度（nominal scale）：類別之間沒有大小或先後順序，例如血型、國籍、物種或治療組別", "次序尺度（ordinal scale）：類別之間具有順序，但相鄰等級的差距不一定相等，例如疼痛程度、疾病分期或滿意度等級"] },
      { type: "callout", tone: "intuition", label: "判斷方式", text: "如果數字只是類別代碼，例如用 1 代表 A 組、2 代表 B 組，它仍然是類別資料；數字之間不能因此直接比較大小或計算平均。" },
      { type: "heading", text: "數值資料" },
      { type: "paragraph", text: "數值資料（numerical data），也稱為定量資料（quantitative data），是透過計數或測量得到的數量。數值的大小與差距具有實際意義。" },
      { type: "list", items: ["離散型資料（discrete data）：由計數得到，通常只能取分開的數值，例如住院次數、病例數或子女數", "連續型資料（continuous data）：由測量得到，在一定範圍內可以取任意精細的數值，例如身高、體重、血壓或體溫"] },
      { type: "callout", tone: "intuition", label: "判斷方式", text: "「有幾個」通常是離散型資料；「有多高、多重、多長」通常是連續型資料。" },
      { type: "heading", text: "依測量尺度分類" },
      { type: "paragraph", text: "除了依資料性質分類，也可以依測量尺度區分為名目、次序、區間與比例尺度。這套分類關心的是資料能否排序、差距是否相等，以及零點是否具有絕對意義。" },
      { type: "table", rows: [["測量尺度", "是否有順序", "差距是否可比較", "零點的意義", "例子"], ["名目尺度", "否", "否", "不適用", "血型、國籍"], ["次序尺度", "是", "不一定相等", "不適用", "疼痛等級、疾病分期"], ["區間尺度", "是", "相等", "相對零點", "攝氏溫度"], ["比例尺度", "是", "相等", "絕對零點", "身高、體重、時間"]] },
      { type: "callout", tone: "intuition", label: "區間尺度與比例尺度的差別", text: "攝氏零度不代表完全沒有溫度，因此不能說 20°C 是 10°C 的兩倍熱；體重零公斤則代表沒有重量，所以 80 公斤可以說是 40 公斤的兩倍。" },
      { type: "heading", text: "為什麼資料型態很重要？" },
      { type: "paragraph", text: "資料型態會影響我們如何呈現資料、選擇代表性的統計量，以及使用哪一種統計方法。例如，類別資料常以次數與比例摘要；連續型資料則可能使用平均數、標準差、中位數或四分位距。" },
      { type: "callout", tone: "forward", label: "後面會再次用到", text: "後續選擇 t 檢定、卡方檢定、ANOVA 或無母數方法時，都要先判斷依變數與分組變數的資料型態，並進一步考慮資料分布及樣本之間是否獨立。" },
    ],
    "descriptive-statistics": descriptiveStatistics,
  },
  "02": {
    "random-variables": randomVariables,
  },
};


