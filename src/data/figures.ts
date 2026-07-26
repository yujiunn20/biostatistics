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
};

export function getFigure(imageId: string) {
  return figures[imageId];
}



