export interface FigureDefinition {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  sourceUrl?: string;
  license?: string;
  width?: number;
  height?: number;
}

/**
 * Central registry for article figures.
 *
 * IDs should be stable, descriptive kebab-case names. Articles reference an
 * image with `{ type: "image", imageId: "data-types-overview" }`.
 */
export const figures: Record<string, FigureDefinition> = {
  "abc-inventory-analysis": {
    src: "/media/notes/chapter-01/data-types/abc-inventory-analysis.png",
    alt: "ABC 分析圖：分析對象依指標貢獻度由高至低排列，並以累積百分比區分 A、B、C 類",
    caption: "ABC 分析將對象依貢獻度由高至低排列，再按照累積百分比分類；圖中界線為示意。",
    credit: "本站製作",
    width: 1536,
    height: 1024,
  },
  "skewness-negative-positive": {
    src: "/media/notes/chapter-01/descriptive-statistics/skewness-negative-positive.png",
    alt: "負偏態與正偏態分布比較：負偏態的長尾朝左，正偏態的長尾朝右",
    caption: "偏度的正負由分布長尾的方向判斷，而不是看最高點偏向哪一側。",
    credit: "依原始筆記圖重製",
    width: 1869,
    height: 842,
  },
  "density-greater-than-one": {
    src: "/media/notes/chapter-02/random-variables/density-greater-than-one.svg",
    alt: "均勻分布的機率密度示意圖：密度高度為 2、區間寬度為 0.5，曲線下的矩形面積為 1",
    caption: "密度高度為 2 並不代表機率大於 1；真正的機率是曲線下的面積，此處為 2 × 0.5 = 1。",
    credit: "本站製作",
    width: 1200,
    height: 720,
  },
  "chi-square-df-curves": {
    src: "/media/notes/chapter-02/chi-square-distribution/chi-square-df-curves.svg",
    alt: "自由度為 1、2、4 與 8 的卡方分配密度曲線；自由度增加時，分配中心向右移動且相對偏斜程度下降",
    caption: "卡方分配在低自由度時明顯右偏；自由度增加後，分配中心向右移動，外形也逐漸較為對稱。",
    credit: "本站依卡方密度函數製作",
    width: 1400,
    height: 900,
  },
  "t-df-normal-comparison": {
    src: "/media/notes/chapter-02/t-distribution/t-df-normal-comparison.svg",
    alt: "自由度為 1、2、3、5、10 與 100 的 t 分配密度曲線，並與標準常態分配比較；自由度增加時 t 分配逐漸接近標準常態分配",
    caption: "自由度較低時，t 分配的中央較低、尾端較厚；自由度增加後，曲線逐漸接近標準常態分配 N(0,1)。",
    credit: "本站依 t 分配密度函數製作",
    width: 1400,
    height: 900,
  },
  "f-df-curves": {
    src: "/media/notes/chapter-02/f-distribution/f-df-curves.svg",
    alt: "分子與分母自由度分別為 2 與 4、4 與 6、9 與 9、12 與 12 的 F 分配密度曲線",
    caption: "F 分配通常右偏；分子與分母自由度增加時，曲線逐漸更集中在 F=1 附近。圖例依序標示分子、分母自由度。",
    credit: "本站依 F 分配密度函數製作",
    width: 1400,
    height: 900,
  },
  "exponential-rate-curves": {
    src: "/media/notes/chapter-02/exponential-distribution/exponential-rate-curves.svg",
    alt: "發生率 λ 分別為 0.5、1.0 與 1.5 的指數分配密度曲線；λ 越大，曲線起點越高且下降越快",
    caption: "λ 越大，事件平均發生得越頻繁，等待時間越集中在靠近 0 的位置；三條曲線下的總面積都等於 1。",
    credit: "本站依指數分配密度函數製作",
    width: 1400,
    height: 900,
  },
  "screening-roc-curve": {
    src: "/media/notes/chapter-03/screening-roc/roc-curve-v2.svg",
    alt: "ROC 曲線：橫軸為偽陽性率（1−特異度），縱軸為真陽性率（敏感度），並以對角虛線表示無辨別能力",
    caption: "每個點代表一個判定閾值。曲線越靠近左上角，通常表示能在較低偽陽性率下取得較高敏感度。",
    credit: "本站依 ROC 定義重製",
    width: 1400,
    height: 900,
  },
  "poisson-lambda-distributions": {
    src: "/media/notes/chapter-02/poisson-distribution/poisson-lambda-distributions.svg",
    alt: "參數 λ 分別為 0.5、2、5 與 10 的 Poisson 分配機率圖；λ 增加時分布中心向右移動並逐漸較為對稱",
    caption: "Poisson 分配只能取非負整數。λ 較小時明顯右偏；λ 增加後，中心向右移、範圍變寬，形狀也逐漸較為對稱。連線僅協助辨認同一組分布。",
    credit: "本站依 Poisson 機率質量函數製作",
    width: 1400,
    height: 900,
  },
  "z-errors-overlap": {
    src: "/media/notes/chapter-04/z-test/errors-overlap.svg",
    alt: "H₀ 與 H₁ 的抽樣分配重疊圖：同一臨界值右側在 H₀ 下為型一誤差 α，左側在 H₁ 下為型二誤差 β",
    caption: "α 與 β 使用同一條臨界線，卻分別是在 H₀ 與特定 H₁ 的抽樣分配下計算。",
    credit: "本站依原始筆記圖重製",
    width: 1200,
    height: 700,
  },
  "z-type-i-critical": {
    src: "/media/notes/chapter-04/z-test/type-i-critical.svg",
    alt: "H₀ 抽樣分配右尾圖：臨界值右側面積為型一誤差 α",
    caption: "右尾檢定中，先在 H₀ 分配上選擇臨界值，使其右側面積等於 α。",
    credit: "本站依原始筆記圖重製",
    width: 1200,
    height: 700,
  },
  "z-type-ii-beta": {
    src: "/media/notes/chapter-04/z-test/type-ii-beta.svg",
    alt: "H₁ 抽樣分配左側圖：未越過同一臨界值的面積為型二誤差 β",
    caption: "把同一臨界值放到 H₁ 分配中，左側未能拒絕 H₀ 的面積就是 β。",
    credit: "本站依原始筆記圖重製",
    width: 1200,
    height: 700,
  },
  "z-alpha-beta-tradeoff": {
    src: "/media/notes/chapter-04/z-test/alpha-beta-tradeoff-v2.svg",
    alt: "H₀ 與 H₁ 重疊圖：標示型一誤差 α、型二誤差 β 與檢定力 1−β",
    caption: "其他條件固定時，移動臨界值會使 α 與 β 反向變化；減少兩個分配的重疊則能提高 power。",
    credit: "本站依原始筆記圖重製",
    width: 1200,
    height: 700,
  },
  "yates-binomial-continuity-correction": {
    src: "/media/notes/chapter-05/yates-correction/binomial-continuity-correction.svg",
    alt: "二項分布與常態近似比較：離散事件 X 大於等於 8 經 0.5 連續性校正後，常態近似的界線移到 7.5",
    caption: "以 X~Binomial(10,0.5) 為例，離散事件 X≥8 使用連續常態曲線近似時，積分界線由 8 移至 7.5，補回代表 X=8 的半格寬度。",
    credit: "本站依原始筆記圖重製",
    width: 1200,
    height: 760,
  },
  "least-squares-residual": {
    src: "/media/notes/chapter-07/simple-linear-regression/least-squares-residual.svg",
    alt: "最小平方法與殘差示意圖：藍點為觀察值，紅線為估計迴歸線，固定 X_i 時觀察值 Y_i 與預測值 Y-hat_i 的垂直距離為殘差 e_i",
    caption: "最小平方法選擇使殘差平方和最小的直線；殘差是同一個 X 位置上，觀察值與迴歸線預測值之間的垂直距離。",
    credit: "本站依原始筆記圖重製",
    width: 1400,
    height: 860,
  },  "age-confounding-wealth-eyesight": {
    src: "/media/notes/chapter-07/multiple-regression/age-confounding-wealth-eyesight.svg",
    alt: "年齡干擾財富與視力關係的示意圖：合併年長與年輕族群時呈負向關聯，但各年齡層內沒有明顯關聯",
    caption: "合併資料時，財富與視力看似呈負向關聯；依年齡分層後，各組內的關聯很弱。年齡同時與財富及視力相關，因此可能造成混淆。",
    credit: "本站依原始筆記圖重製",
    width: 1400,
    height: 820,
  },
  "survival-participant-timelines": {
    src: "/media/notes/chapter-09/survival-curve/participant-timelines.svg",
    alt: "十位受試者的追蹤時間圖：上圖依實際日曆時間呈現不同入組時間，下圖把每位受試者的入組時間對齊為零；實心圓表示事件，空心圓表示右截尾",
    caption: "Panel A 顯示 calendar time；Panel B 將每位受試者的入組時間對齊為 t=0。只有實心圓代表事件，空心圓為右截尾。",
    credit: "本站依原始筆記圖與範例數據重製",
    width: 1400,
    height: 1680,
  },
  "bone-marrow-survival-comparison": {
    src: "/media/notes/chapter-09/comparing-survival-curves/bone-marrow-survival-comparison.svg",
    alt: "自體與異體骨髓移植的 Kaplan–Meier 存活曲線；階梯只在事件時間下降，短直線表示右截尾",
    caption: "兩組 Kaplan–Meier 估計曲線。Allogeneic 組的樣本存活曲線大多高於 autologous 組；短直線是右截尾標記。",
    credit: "本站依原始筆記的骨髓移植範例數據重製",
    width: 1400,
    height: 900,
  },
};

export function getFigure(imageId: string) {
  return figures[imageId];
}




















