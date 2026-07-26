import { editorialSections } from "../data/editorial";
import { enhanceFormulaPresentation } from "../data/formula-enhancements";
import { chapters } from "./site";

type SectionDefinition = {
  slug: string;
  title: string;
  startsAt: string;
  occurrence?: number;
};

const sectionDefinitions: Record<string, SectionDefinition[]> = {
  "01": [
    { slug: "introduction", title: "統計學導論", startsAt: "統計學導論" },
    { slug: "data-types", title: "資料的分類", startsAt: "資料的分類" },
    { slug: "descriptive-statistics", title: "敘述統計", startsAt: "敘述統計(descriptive statistics)" },
  ],
  "02": [
    { slug: "random-variables", title: "隨機變數與機率密度函數", startsAt: "隨機變數(random variable)" },
    { slug: "degrees-of-freedom", title: "自由度", startsAt: "自由度" },
    { slug: "normal-distribution", title: "常態分配與 Z 分配", startsAt: "常態分配(又稱Z分配)" },
    { slug: "t-distribution", title: "t 分配", startsAt: "t分配(t-distribution)" },
    { slug: "f-distribution", title: "F 分配", startsAt: "F分配(F-distribution)" },
    { slug: "exponential-distribution", title: "指數分配", startsAt: "指數分配" },
    { slug: "binomial-distribution", title: "二項分配", startsAt: "二項分配" },
    { slug: "poisson-distribution", title: "卜瓦松分配", startsAt: "卜瓦松分配(Poisson distribution)" },
    { slug: "distribution-relationships", title: "常見機率分配之間的關係", startsAt: "補充一：常態分配與卡方分配；t分配與F分配之間的關係" },
  ],
  "03": [
    { slug: "sampling", title: "抽樣與抽樣分配", startsAt: "抽樣(Sampling)" },
    { slug: "screening-test", title: "篩檢試驗", startsAt: "Screening test" },
    { slug: "roc-curve", title: "ROC 曲線", startsAt: "ROC CURVE" },
    { slug: "hypothesis-testing", title: "假設檢定", startsAt: "假設檢定(hypothesis test)" },
    { slug: "standard-error", title: "標準誤與抽樣變異數", startsAt: "補充二：抽樣平均數的標準誤" },
  ],
  "04": [
    { slug: "z-test", title: "Z 檢定", startsAt: "Z值及Z分配檢定" },
    { slug: "t-test", title: "t 檢定概念", startsAt: "t檢定" },
    { slug: "one-sample-t-test", title: "單一樣本 t 檢定", startsAt: "單一樣本t檢定" },
    { slug: "paired-t-test", title: "相依樣本 t 檢定", startsAt: "相依樣本t檢定(paired T test)" },
    { slug: "independent-t-test", title: "獨立樣本 t 檢定", startsAt: "獨立樣本t檢定(Two sample T test)" },
  ],
  "05": [
    { slug: "binomial-test", title: "二項分布檢定", startsAt: "二項分布檢定" },
    { slug: "chi-square-goodness-of-fit", title: "卡方適合度檢定", startsAt: "卡方適合度檢定" },
    { slug: "contingency-table", title: "2×2 列聯表", startsAt: "2 BY 2 TABLE", occurrence: 2 },
    { slug: "chi-square-independence", title: "卡方獨立性檢定", startsAt: "卡方獨立性檢定(CHI-SQUARE TEST OF INDEPENDENCE)" },
    { slug: "yates-correction", title: "Yates 連續性校正", startsAt: "葉茲連續校正(Yates corrected chi square static)" },
    { slug: "fishers-exact-test", title: "Fisher 精確檢定", startsAt: "費雪exact法(Fisher’s exact test)" },
    { slug: "mcnemars-test", title: "McNemar 檢定", startsAt: "McNemar’s Test" },
  ],
  "06": [
    { slug: "one-way-anova", title: "單因子變異數分析", startsAt: "ANOVA(analysis of variance)單因子獨立樣本變異數分析" },
    { slug: "post-hoc-comparisons", title: "ANOVA 事後比較", startsAt: "變異數分析的事後比較" },
    { slug: "anova-and-t-test", title: "ANOVA 與 t 檢定的關係", startsAt: "補充：2組資料求得的F(單因子獨立樣本變異數分析)其實就提t2" },
  ],
  "07": [
    { slug: "simple-linear-regression", title: "簡單線性迴歸", startsAt: "簡單迴歸分析(Simple linear Regression)" },
    { slug: "pearson-correlation", title: "Pearson 相關係數", startsAt: "Pearson相關係數r" },
    { slug: "fisher-z-transformation", title: "Fisher Z 轉換與相關係數比較", startsAt: "費雪轉換(Fisher’s Z transformation)也是對r進行檢定的方法" },
    { slug: "spearman-correlation", title: "Spearman 等級相關", startsAt: "Spearman’s RHO" },
    { slug: "r-squared", title: "決定係數 R²", startsAt: "R-SQUARE" },
    { slug: "multiple-regression", title: "多元迴歸分析", startsAt: "多元迴歸分析" },
    { slug: "regression-derivations", title: "迴歸公式推導", startsAt: "補充一：迴歸曲線一系列公式證明" },
  ],
  "08": [
    { slug: "wilcoxon-tests", title: "Wilcoxon 檢定", startsAt: "Wilcoxon test" },
    { slug: "median-test", title: "中位數檢定", startsAt: "中位數檢定" },
    { slug: "kruskal-wallis-test", title: "Kruskal–Wallis 檢定", startsAt: "Kruskal-Wallis test" },
  ],
  "09": [
    { slug: "survival-curve", title: "存活曲線估計", startsAt: "存活曲線估計" },
    { slug: "comparing-survival-curves", title: "兩組存活曲線比較", startsAt: "二組數據的存活曲線相比" },
    { slug: "summary", title: "存活分析結語", startsAt: "結語" },
  ],
};

export type ContentBlock = (typeof chapters)[number]["blocks"][number];

export type TopicSection = SectionDefinition & {
  chapterId: string;
  blocks: ContentBlock[];
  summary: string;
};

function textOf(block: ContentBlock) {
  return "text" in block ? block.text.trim() : "";
}

export function sectionsForChapter(chapterId: string): TopicSection[] {
  const chapter = chapters.find(item => item.id === chapterId);
  const definitions = sectionDefinitions[chapterId] ?? [];
  if (!chapter) return [];

  const headingIndex = (definition: SectionDefinition) => {
    const occurrence = definition.occurrence ?? 1;
    let seen = 0;
    return chapter.blocks.findIndex(block => {
      if (block.type !== "heading" || textOf(block) !== definition.startsAt) return false;
      seen += 1;
      return seen === occurrence;
    });
  };

  return definitions.map((definition, definitionIndex) => {
    const start = headingIndex(definition);
    const nextDefinition = definitions[definitionIndex + 1];
    const next = nextDefinition ? headingIndex(nextDefinition) : chapter.blocks.length;
    const contentStart = start >= 0 ? start + 1 : 0;
    const contentEnd = next >= 0 ? next : chapter.blocks.length;
    const blocks = definitionIndex === 0 && start > 0
      ? [...chapter.blocks.slice(0, start), ...chapter.blocks.slice(contentStart, contentEnd)]
      : chapter.blocks.slice(contentStart, contentEnd);
    const editedBlocks = editorialSections[chapterId]?.[definition.slug];
    const finalBlocks = enhanceFormulaPresentation((editedBlocks ?? blocks) as ContentBlock[], chapterId, definition.slug) as ContentBlock[];
    const summaryBlock = finalBlocks.find(block => block.type === "paragraph" && textOf(block));

    return {
      ...definition,
      chapterId,
      blocks: finalBlocks,
      summary: summaryBlock ? textOf(summaryBlock).slice(0, 120) : `閱讀${definition.title}的重點概念、公式與實務判讀。`,
    };
  });
}

export const allTopicSections = chapters.flatMap(chapter => sectionsForChapter(chapter.id));

export function findTopicSection(chapterId: string, slug: string) {
  return sectionsForChapter(chapterId).find(section => section.slug === slug);
}


