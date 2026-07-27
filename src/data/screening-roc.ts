export const screeningRoc = [
  { type: "paragraph", text: "篩檢試驗（screening test）用一項檢測結果，將受試者暫時分成較可能有病與較可能沒病。ROC 曲線則把不同判定閾值下的篩檢表現畫在同一張圖上。因此兩者不是兩個分離主題：必須先理解篩檢結果表與敏感度、特異度，才能理解 ROC 曲線上的每一個點。" },
  { type: "callout", tone: "intuition", label: "先分清楚兩種狀態", text: "疾病狀態是參考標準所認定的真實狀態；檢測結果則是篩檢工具做出的陽性或陰性判定。把兩者交叉比較，才會得到 TP、FP、FN、TN。" },
  { type: "heading", text: "篩檢結果的 2×2 表" },
  { type: "table", rows: [["檢測結果／疾病狀態", "有病（Disease +）", "沒病（Disease −）"], ["檢測陽性（Test +）", "真陽性 TP", "偽陽性 FP"], ["檢測陰性（Test −）", "偽陰性 FN", "真陰性 TN"]] },
  { type: "table", rows: [["縮寫", "英文", "意義"], ["TP", "True Positive", "有病，而且檢測為陽性"], ["FP", "False Positive", "沒病，但檢測為陽性"], ["FN", "False Negative", "有病，但檢測為陰性"], ["TN", "True Negative", "沒病，而且檢測為陰性"]] },
  { type: "heading", text: "敏感度與特異度" },
  { type: "paragraph", text: "敏感度從所有真正有病的人出發，問檢測找出了多少人；特異度從所有真正沒病的人出發，問檢測正確排除了多少人。兩者的分母不同，閱讀公式時必須先確定自己站在哪一群人裡看結果。" },
  { type: "formulaGroup", formulas: [
    { label: "敏感度／真陽性率", latex: "\\operatorname{Sensitivity}=\\operatorname{TPR}=\\frac{TP}{TP+FN}", fallback: "Sensitivity=TPR=TP/(TP+FN)" },
    { label: "特異度／真陰性率", latex: "\\operatorname{Specificity}=\\operatorname{TNR}=\\frac{TN}{TN+FP}", fallback: "Specificity=TNR=TN/(TN+FP)" },
    { label: "偽陽性率", latex: "\\operatorname{FPR}=\\frac{FP}{FP+TN}=1-\\operatorname{Specificity}", fallback: "FPR=FP/(FP+TN)=1−Specificity" },
    { label: "偽陰性率", latex: "\\operatorname{FNR}=\\frac{FN}{FN+TP}=1-\\operatorname{Sensitivity}", fallback: "FNR=FN/(FN+TP)=1−Sensitivity" }
  ] },
  { type: "callout", tone: "intuition", label: "用條件句記憶", text: "敏感度：『已知有病，檢測呈陽性的比例』；特異度：『已知沒病，檢測呈陰性的比例』。不要只背 TP 或 TN，先找出公式是在有病組還是沒病組內計算。" },
  { type: "heading", text: "陽性與陰性預測值" },
  { type: "paragraph", text: "臨床上也常從檢測結果反過來問：陽性者實際有病的比例是多少？陰性者實際沒病的比例是多少？這就是陽性預測值與陰性預測值。它們會受到盛行率影響，因此不能只憑一組研究中的 PPV、NPV 判斷檢測在所有族群中的表現。" },
  { type: "formulaGroup", formulas: [
    { label: "陽性預測值", latex: "PPV=\\frac{TP}{TP+FP}", fallback: "PPV=TP/(TP+FP)" },
    { label: "陰性預測值", latex: "NPV=\\frac{TN}{TN+FN}", fallback: "NPV=TN/(TN+FN)" }
  ] },
  { type: "heading", text: "為什麼需要閾值？" },
  { type: "paragraph", text: "有些檢測直接給出陽性或陰性；但血壓、血糖、腫瘤標記或模型預測分數通常是連續值。要把連續結果轉成二元分類，就必須選定閾值（threshold／cutoff）：高於或低於某個界線時，才判定為陽性。" },
  { type: "callout", tone: "intuition", label: "改變閾值，就是改變錯誤的取捨", text: "若把陽性判定放寬，通常會找出更多真正有病者，敏感度提高；但也會讓更多沒病者被判為陽性，特異度下降。若把陽性判定變嚴格，方向通常相反。ROC 曲線就是把這整組取捨保留下來。" },
  { type: "heading", text: "ROC 曲線如何畫出來？" },
  { type: "paragraph", text: "依序嘗試不同閾值；每個閾值都會產生一組敏感度與特異度。以偽陽性率 1−specificity 為橫軸、敏感度為縱軸，把各閾值對應的座標連起來，就得到 ROC（receiver operating characteristic）曲線。" },
  { type: "formula", latex: "(x,y)=(1-\\operatorname{Specificity},\\operatorname{Sensitivity})=(FPR,TPR)", fallback: "ROC 座標=(1−Specificity, Sensitivity)=(FPR, TPR)" },
  { type: "image", imageId: "screening-roc-curve" },
  { type: "table", rows: [["圖上位置", "代表意義"], ["左下角 (0,0)", "幾乎所有人都判為陰性：偽陽性少，但也找不到病例"], ["右上角 (1,1)", "幾乎所有人都判為陽性：病例幾乎都找到，但偽陽性很多"], ["左上角 (0,1)", "敏感度 1、偽陽性率 0，是理想分類"], ["對角線附近", "辨別能力接近隨機分類"]] },
  { type: "callout", tone: "intuition", label: "為什麼曲線通常向右上增加？", text: "閾值逐漸放寬時，被判定為陽性的人只會增加，因此真陽性率與偽陽性率通常都會增加。橫軸不是 specificity，而是 1−specificity，所以曲線呈現由左下走向右上的方向。" },
  { type: "heading", text: "AUC 表示什麼？" },
  { type: "paragraph", text: "AUC（area under the ROC curve）是 ROC 曲線下的面積，用來概括工具區分有病與沒病個體的能力。AUC 越接近 1，整體辨別能力通常越好；AUC 約為 0.5，表示排序能力接近隨機。" },
  { type: "callout", tone: "intuition", label: "AUC 的直覺解讀", text: "隨機抽一名有病者和一名沒病者，AUC 可以理解為檢測把有病者排在較高風險位置的機率。它描述排序或辨別能力，不會自動告訴我們哪一個閾值最適合臨床使用。" },
  { type: "heading", text: "如何選擇閾值？" },
  { type: "paragraph", text: "若敏感度與特異度的重要性相近，可考慮選擇最靠近左上角的點，或最大化 Youden index。幾何上，最大化 Youden index 相當於把斜率為 1 的直線向左上方平移，找到與 ROC 曲線最後接觸的位置；這保留了你原文用直線選點的想法。" },
  { type: "formula", latex: "J=\\operatorname{Sensitivity}+\\operatorname{Specificity}-1=TPR-FPR", fallback: "Youden index J=Sensitivity+Specificity−1=TPR−FPR" },
  { type: "callout", tone: "forward", label: "閾值沒有唯一答案", text: "若漏掉病例的代價很高，通常優先提高敏感度；若偽陽性會造成高風險侵入性檢查或重大成本，則可能優先提高特異度。最終閾值還要結合疾病盛行率、後續處置、成本與臨床目的，不能只看 AUC 或固定選某一點。" },
  { type: "table", rows: [["符號", "代表意義"], ["TP、FP、FN、TN", "真陽性、偽陽性、偽陰性、真陰性的個數"], ["TPR", "真陽性率，等於敏感度"], ["FPR", "偽陽性率，等於 1−特異度"], ["PPV、NPV", "陽性與陰性預測值"], ["threshold／cutoff", "把連續檢測值轉成陽性或陰性的判定界線"], ["AUC", "ROC 曲線下面積，概括整體辨別能力"]] }
];
