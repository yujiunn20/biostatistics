export type ArticleKey = `${string}/${string}`;

export type ArticleRelation = {
  prerequisites?: ArticleKey[];
  next?: ArticleKey[];
  related?: ArticleKey[];
};

export const articleRelations: Record<ArticleKey, ArticleRelation> = {
  "01/introduction": { next: ["01/data-types", "01/descriptive-statistics"], related: ["08/statistical-test-selection"] },
  "01/data-types": { prerequisites: ["01/introduction"], next: ["01/descriptive-statistics", "08/statistical-test-selection"] },
  "01/descriptive-statistics": { prerequisites: ["01/data-types"], next: ["02/degrees-of-freedom", "03/sampling"] },
  "02/random-variables": { next: ["02/normal-distribution", "02/binomial-distribution", "03/sampling"] },
  "02/degrees-of-freedom": { prerequisites: ["02/random-variables"], next: ["02/t-distribution", "02/chi-square-distribution", "02/f-distribution"], related: ["03/sampling"] },
  "02/normal-distribution": { prerequisites: ["02/random-variables"], next: ["03/sampling", "04/z-test"], related: ["02/t-distribution"] },
  "02/chi-square-distribution": { prerequisites: ["02/degrees-of-freedom"], next: ["04/variance-inference", "05/chi-square-goodness-of-fit", "05/chi-square-independence"] },
  "02/t-distribution": { prerequisites: ["02/normal-distribution", "02/degrees-of-freedom"], next: ["04/t-test", "04/one-sample-t-test", "04/paired-t-test", "04/independent-t-test"] },
  "02/f-distribution": { prerequisites: ["02/chi-square-distribution", "02/degrees-of-freedom"], next: ["06/one-way-anova", "07/simple-linear-regression"] },
  "02/exponential-distribution": { related: ["02/poisson-distribution", "09/survival-curve"] },
  "02/binomial-distribution": { prerequisites: ["02/random-variables"], next: ["05/binomial-test", "05/yates-correction"], related: ["08/wilcoxon-tests"] },
  "02/poisson-distribution": { prerequisites: ["02/random-variables"], related: ["02/binomial-distribution", "02/exponential-distribution"] },
  "03/sampling": { prerequisites: ["01/descriptive-statistics", "02/normal-distribution"], next: ["03/hypothesis-testing", "04/z-test", "04/t-test"], related: ["02/degrees-of-freedom"] },
  "03/screening-test": { prerequisites: ["01/data-types"], related: ["05/contingency-table"] },
  "03/hypothesis-testing": { prerequisites: ["03/sampling"], next: ["04/z-test", "04/t-test", "05/chi-square-goodness-of-fit"], related: ["08/statistical-test-selection"] },
  "04/z-test": { prerequisites: ["02/normal-distribution", "03/sampling", "03/hypothesis-testing"], related: ["04/one-sample-t-test"] },
  "04/t-test": { prerequisites: ["02/t-distribution", "03/hypothesis-testing"], next: ["04/one-sample-t-test", "04/paired-t-test", "04/independent-t-test"] },
  "04/one-sample-t-test": { prerequisites: ["04/t-test", "03/sampling"], related: ["04/z-test", "08/wilcoxon-tests"] },
  "04/paired-t-test": { prerequisites: ["04/t-test"], related: ["08/wilcoxon-tests", "05/mcnemars-test"] },
  "04/independent-t-test": { prerequisites: ["04/t-test"], related: ["06/welch-anova", "08/wilcoxon-tests", "08/median-test"] },
  "04/variance-inference": { prerequisites: ["02/chi-square-distribution", "02/degrees-of-freedom"], next: ["06/one-way-anova", "06/welch-anova"] },
  "05/binomial-test": { prerequisites: ["02/binomial-distribution", "03/hypothesis-testing"], related: ["05/chi-square-goodness-of-fit"] },
  "05/chi-square-goodness-of-fit": { prerequisites: ["02/chi-square-distribution", "03/hypothesis-testing"], related: ["05/binomial-test", "05/chi-square-independence"] },
  "05/contingency-table": { prerequisites: ["01/data-types"], next: ["05/chi-square-independence", "05/fishers-exact-test", "05/yates-correction", "05/mcnemars-test"] },
  "05/chi-square-independence": { prerequisites: ["05/contingency-table", "02/chi-square-distribution"], related: ["05/fishers-exact-test", "05/yates-correction"] },
  "05/yates-correction": { prerequisites: ["05/chi-square-independence"], related: ["05/fishers-exact-test", "02/binomial-distribution"] },
  "05/fishers-exact-test": { prerequisites: ["05/contingency-table"], related: ["05/chi-square-independence", "05/yates-correction"] },
  "05/mcnemars-test": { prerequisites: ["05/contingency-table"], related: ["04/paired-t-test", "05/chi-square-independence"] },
  "06/one-way-anova": { prerequisites: ["02/f-distribution", "04/independent-t-test"], next: ["06/post-hoc-comparisons"], related: ["06/welch-anova", "08/kruskal-wallis-test"] },
  "06/post-hoc-comparisons": { prerequisites: ["06/one-way-anova"], related: ["06/welch-anova"] },
  "06/welch-anova": { prerequisites: ["06/one-way-anova"], related: ["04/independent-t-test", "08/kruskal-wallis-test"] },
  "06/two-way-anova-manova": { prerequisites: ["06/one-way-anova"], related: ["07/multiple-regression"] },
  "07/simple-linear-regression": { prerequisites: ["01/descriptive-statistics", "02/f-distribution"], next: ["07/pearson-correlation", "07/r-squared", "07/multiple-regression"] },
  "07/pearson-correlation": { prerequisites: ["07/simple-linear-regression"], next: ["07/fisher-z-transformation"], related: ["07/spearman-correlation", "07/r-squared"] },
  "07/fisher-z-transformation": { prerequisites: ["07/pearson-correlation"], related: ["02/normal-distribution"] },
  "07/spearman-correlation": { prerequisites: ["01/data-types"], related: ["07/pearson-correlation", "08/wilcoxon-tests"] },
  "07/r-squared": { prerequisites: ["07/simple-linear-regression"], next: ["07/multiple-regression"], related: ["06/one-way-anova", "07/pearson-correlation"] },
  "07/multiple-regression": { prerequisites: ["07/simple-linear-regression", "07/r-squared"], related: ["06/two-way-anova-manova"] },
  "08/wilcoxon-tests": { prerequisites: ["02/binomial-distribution"], related: ["04/paired-t-test", "04/independent-t-test"] },
  "08/median-test": { related: ["04/independent-t-test", "08/wilcoxon-tests", "08/kruskal-wallis-test"] },
  "08/kruskal-wallis-test": { related: ["06/one-way-anova", "06/welch-anova", "08/median-test"] },
  "08/statistical-test-selection": { prerequisites: ["01/data-types", "03/hypothesis-testing"], related: ["01/introduction"] },
  "09/survival-curve": { prerequisites: ["02/exponential-distribution"], next: ["09/comparing-survival-curves"] },
  "09/comparing-survival-curves": { prerequisites: ["09/survival-curve", "03/hypothesis-testing"], related: ["05/chi-square-independence"] },
};

export function articlePath(key: ArticleKey, locale: "zh-Hant" | "en" | "ja" = "zh-Hant") {
  const [chapterId, slug] = key.split("/");
  return `/${locale}/chapter/${chapterId}/${slug}/`;
}
