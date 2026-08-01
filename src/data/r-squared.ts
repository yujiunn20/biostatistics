import { rSquaredDerivation } from "./regression-derivation-supplements";

export const rSquared = [
  { type: "paragraph", text: "決定係數（coefficient of determination）R²，用來描述迴歸模型在樣本中解釋 Y 總變異的比例。它把前面 ANOVA 的平方和分解轉成一個容易比較的比例：模型解釋的變異占全部變異多少。" },
  { type: "formulaGroup", formulas: [
    { label: "平方和分解", latex: "SS_T=SS_R+SS_E", fallback: "SST=SSR+SSE" },
    { label: "決定係數", latex: "R^2=\\frac{SS_R}{SS_T}", fallback: "R²=SSR/SST" },
    { label: "等價寫法", latex: "R^2=1-\\frac{SS_E}{SS_T}", fallback: "R²=1−SSE/SST" },
  ] },

  { type: "heading", text: "為什麼是迴歸平方和除以總平方和？" },
  { type: "table", rows: [
    ["平方和", "衡量的內容"],
    ["SST", "每個 Yᵢ 與總平均 Ȳ 的距離，代表 Y 原本的全部變異"],
    ["SSR", "每個 Ŷᵢ 與總平均 Ȳ 的距離，代表模型解釋的變異"],
    ["SSE", "每個 Yᵢ 與 Ŷᵢ 的距離，代表模型尚未解釋的誤差"],
  ] },
  { type: "paragraph", text: "因為 SST=SSR+SSE，所以把 SSR 除以 SST，就是已解釋變異占總變異的比例；從 1 減去 SSE/SST，則是從全部變異中扣掉未解釋比例。兩個公式得到完全相同的 R²。" },

  { type: "heading", text: "如何把 R² 寫成讀者看得懂的結論？" },
  { type: "paragraph", text: "若 R²=0.64，可以寫成：「在這份樣本及目前模型下，Y 總變異的 64% 可由 X 的迴歸模型解釋；其餘 36% 留在殘差中。」這裡的解釋是統計模型對樣本變異的解釋，不等於 X 對 Y 具有 64% 的因果作用。" },
  { type: "formula", latex: "100\\times R^2\\%", fallback: "100×R²%" },
  { type: "callout", tone: "caution", label: "不要把 R² 解釋成預測正確率", text: "R²=0.64 不表示模型有 64% 的個案預測正確，也不表示每個 Y 有 64% 是由 X 造成。R² 衡量的是樣本中平方離差的相對比例。" },

  { type: "heading", text: "R² 的範圍與例外" },
  { type: "paragraph", text: "對包含截距、並以同一批資料用最小平方法估計的迴歸模型，SSE 不會大於只用 Ȳ 預測所得的 SST，因此 0≤R²≤1。R² 愈接近 1，表示殘差平方和相對愈小；R² 愈接近 0，表示模型相較只用平均數沒有解釋多少變異。" },
  { type: "formula", latex: "0\\le R^2\\le1", fallback: "0≤R²≤1" },
  { type: "callout", tone: "caution", label: "不要混淆 r 與 R² 的範圍", text: "相關係數 r 有方向，所以範圍是 −1 到 1；R² 是平方和比例，沒有正負方向。若模型不含截距，或在新資料上評估預測表現，計算出的 R² 可能小於 0，這表示模型甚至不如直接使用平均數。" },

  { type: "heading", text: "簡單線性迴歸中為什麼 R²=r²？" },
  { type: "paragraph", text: "在只有一個 X、模型含截距的簡單線性迴歸中，樣本 Pearson 相關係數 r 與斜率共享同一個共變動資訊。把斜率代入 SSR 後，SSR/SST 正好化成 r²：" },
  { type: "formulaGroup", formulas: [
    { label: "斜率", latex: "b_1=\\frac{\\sum(X_i-\\bar X)(Y_i-\\bar Y)}{\\sum(X_i-\\bar X)^2}", fallback: "b₁=Σ(Xᵢ−X̄)(Yᵢ−Ȳ)/Σ(Xᵢ−X̄)²" },
    { label: "迴歸平方和", latex: "SS_R=b_1^2\\sum(X_i-\\bar X)^2", fallback: "SSR=b₁²Σ(Xᵢ−X̄)²" },
    { label: "代入並除以 SST", latex: "R^2=\\frac{[\\sum(X_i-\\bar X)(Y_i-\\bar Y)]^2}{\\sum(X_i-\\bar X)^2\\sum(Y_i-\\bar Y)^2}=r^2", fallback: "R²={Σ[(Xᵢ−X̄)(Yᵢ−Ȳ)]}²/{Σ(Xᵢ−X̄)²Σ(Yᵢ−Ȳ)²}=r²" },
  ] },
  { type: "paragraph", text: "因此，r 的正負號告訴讀者直線關係的方向；R²=r² 只保留解釋比例。r=−0.8 與 r=+0.8 都得到 R²=0.64，但兩條關係的方向相反。到了多元迴歸，R²代表整組解釋變數共同解釋的比例，不再等於任何單一相關係數的平方。" },
  { type: "details", label: "補充：逐步證明 r²=SSR/SST=R²", children: rSquaredDerivation },

  { type: "heading", text: "R²、t 值與 F 值如何連在一起？" },
  { type: "paragraph", text: "R² 與 F 都由同一套平方和分解而來，但兩者使用平方和的方式不同。R² 比較 SSR 與 SST，描述已解釋比例；F 則先把 SSR、SSE 除以各自自由度，再比較模型訊號與誤差，用來檢定虛無假設 H₀:β₁=0。" },
  { type: "formulaGroup", formulas: [
    { label: "簡單迴歸的 F", latex: "F=\\frac{SS_R/1}{SS_E/(n-2)}", fallback: "F=(SSR/1)/[SSE/(n−2)]" },
    { label: "以 R² 表示平方和", latex: "SS_R=R^2SS_T,\\qquad SS_E=(1-R^2)SS_T", fallback: "SSR=R²SST；SSE=(1−R²)SST" },
    { label: "代入 F", latex: "F=\\frac{R^2}{1-R^2}(n-2)=\\frac{R^2}{(1-R^2)/(n-2)}", fallback: "F=R²(n−2)/(1−R²)" },
    { label: "再用 R²=r²", latex: "F=\\frac{r^2(n-2)}{1-r^2}=t^2", fallback: "F=r²(n−2)/(1−r²)=t²" },
  ] },
  { type: "paragraph", text: "所以在簡單線性迴歸中，R²、斜率 t 檢定與整體 F 檢定確實描述同一個線性訊號，但回答方式不同。R²回答模型解釋多少樣本變異；t 顯示斜率方向並檢定 β₁；F 比較模型均方與誤差均方。不能用 R² 取代 p 值，也不能用顯著的 F 取代效果大小。" },
  { type: "table", rows: [
    ["統計量", "主要回答", "是否保留方向"],
    ["r", "兩變數線性關係的方向與強度", "是"],
    ["R²", "模型解釋 Y 總變異的比例", "否"],
    ["t", "指定斜率假設是否與資料相容", "是"],
    ["F", "模型解釋變異是否相對誤差足夠大", "否"],
  ] },

  { type: "heading", text: "高 R² 不一定代表模型適合" },
  { type: "list", items: [
    "R² 不會告訴你關係是否真的是直線，仍要查看散布圖與殘差圖。",
    "離群值或高槓桿值可能同時拉動迴歸線與 R²。",
    "時間趨勢可能讓兩個沒有實質關係的變數得到很高的 R²。",
    "高 R² 不代表因果關係，也不保證對新資料仍有良好預測。",
    "不同研究領域的自然變異不同，不能用固定門檻判定 R² 好或壞。",
  ] },
  { type: "callout", tone: "intuition", label: "報告時放回研究問題", text: "建議同時報告 R²、斜率與信賴區間、t 或 F 與 p 值、殘差標準差，以及模型診斷。R² 是重要摘要，但不是模型品質的單一總分。" },
];
