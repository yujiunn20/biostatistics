import type { Locale } from "./site";
import type { TopicSection } from "./content";
import { sectionsForChapter } from "./content";
import { introductionJa, dataTypesJa, descriptiveStatisticsJa } from "../data/ja/chapter-01";
import { randomVariablesJa, degreesOfFreedomJa, normalDistributionJa } from "../data/ja/chapter-02-part-1";
import { chiSquareDistributionJa, tDistributionJa, fDistributionJa } from "../data/ja/chapter-02-part-2";
import { exponentialDistributionJa, binomialDistributionJa, poissonDistributionJa } from "../data/ja/chapter-02-part-3";
import { samplingJa } from "../data/ja/chapter-03-part-1";
import { screeningRocJa, hypothesisTestingJa } from "../data/ja/chapter-03-part-2";
import { tTestConceptJa, oneSampleTTestJa, pairedTTestJa, independentTTestJa, varianceInferenceJa } from "../data/ja/chapter-04-part-1";
import { zTestJa } from "../data/ja/chapter-04-part-2";
import { binomialTestJa, chiSquareGoodnessOfFitJa } from "../data/ja/chapter-05-part-1";
import { contingencyTableJa } from "../data/ja/chapter-05-part-2";
import { chiSquareIndependenceJa, yatesCorrectionJa, fishersExactTestJa, mcnemarsTestJa } from "../data/ja/chapter-05-part-3";
import { oneWayAnovaJa } from "../data/ja/chapter-06-part-1";
import { postHocComparisonsJa } from "../data/ja/chapter-06-part-2";
import { welchAnovaJa, twoWayAndManovaJa } from "../data/ja/chapter-06-part-3";
import { simpleLinearRegressionJa, pearsonCorrelationJa } from "../data/ja/chapter-07-part-1";
import { fisherZTransformationJa, spearmanCorrelationJa } from "../data/ja/chapter-07-part-2";
import { rSquaredJa, multipleRegressionJa } from "../data/ja/chapter-07-part-3";
import { wilcoxonTestsJa } from "../data/ja/chapter-08-part-1";
import { medianTestJa, kruskalWallisJa, statisticalTestSelectionJa } from "../data/ja/chapter-08-part-2";
import { survivalCurveJa, comparingSurvivalCurvesJa } from "../data/ja/chapter-09";
import { conclusionJa } from "../data/ja/chapter-10";
import { introductionEn, dataTypesEn, descriptiveStatisticsEn } from "../data/en/chapter-01";
import { randomVariablesEn, degreesOfFreedomEn, normalDistributionEn } from "../data/en/chapter-02-part-1";
import { chiSquareDistributionEn, tDistributionEn, fDistributionEn } from "../data/en/chapter-02-part-2";
import { exponentialDistributionEn, binomialDistributionEn, poissonDistributionEn } from "../data/en/chapter-02-part-3";
import { samplingEn } from "../data/en/chapter-03-part-1";
import { screeningRocEn, hypothesisTestingEn } from "../data/en/chapter-03-part-2";
import { tTestConceptEn, oneSampleTTestEn, pairedTTestEn, independentTTestEn, varianceInferenceEn } from "../data/en/chapter-04-part-1";
import { zTestEn } from "../data/en/chapter-04-part-2";
import { binomialTestEn, chiSquareGoodnessOfFitEn } from "../data/en/chapter-05-part-1";
import { contingencyTableEn } from "../data/en/chapter-05-part-2";
import { chiSquareIndependenceEn, yatesCorrectionEn, fishersExactTestEn, mcnemarsTestEn } from "../data/en/chapter-05-part-3";
import { oneWayAnovaEn } from "../data/en/chapter-06-part-1";
import { postHocComparisonsEn } from "../data/en/chapter-06-part-2";
import { welchAnovaEn, twoWayAndManovaEn } from "../data/en/chapter-06-part-3";
import { simpleLinearRegressionEn, pearsonCorrelationEn } from "../data/en/chapter-07-part-1";
import { fisherZTransformationEn, spearmanCorrelationEn } from "../data/en/chapter-07-part-2";
import { rSquaredEn, multipleRegressionEn } from "../data/en/chapter-07-part-3";
import { wilcoxonTestsEn } from "../data/en/chapter-08-part-1";
import { medianTestEn, kruskalWallisEn, statisticalTestSelectionEn } from "../data/en/chapter-08-part-2";
import { survivalCurveEn, comparingSurvivalCurvesEn } from "../data/en/chapter-09";
import { conclusionEn } from "../data/en/chapter-10";

const englishSections: Record<string, TopicSection[]> = {
  "01": [
    {
      chapterId: "01",
      slug: "introduction",
      title: "Introduction to Statistics",
      startsAt: "統計學導論",
      blocks: introductionEn as TopicSection["blocks"],
      summary: "Learn how descriptive and inferential statistics turn sample data into evidence about populations.",
    },
    {
      chapterId: "01",
      slug: "data-types",
      title: "Types of Data",
      startsAt: "資料的分類",
      blocks: dataTypesEn as TopicSection["blocks"],
      summary: "Distinguish categorical and numerical data and the nominal, ordinal, interval, and ratio scales.",
    },
    {
      chapterId: "01",
      slug: "descriptive-statistics",
      title: "Descriptive Statistics",
      startsAt: "敘述統計",
      blocks: descriptiveStatisticsEn as TopicSection["blocks"],
      summary: "Summarize center, variability, skewness, and kurtosis with measures suited to the data distribution.",
    },
  ],
  "02": [
    {
      chapterId: "02",
      slug: "random-variables",
      title: "Random Variables and Probability Density",
      startsAt: "隨機變數(random variable)",
      blocks: randomVariablesEn as TopicSection["blocks"],
      summary: "Learn how random variables map outcomes to numbers and how PMFs, PDFs, and CDFs describe discrete and continuous probabilities.",
    },
    {
      chapterId: "02",
      slug: "degrees-of-freedom",
      title: "Degrees of Freedom",
      startsAt: "自由度",
      blocks: degreesOfFreedomEn as TopicSection["blocks"],
      summary: "Understand degrees of freedom as independent information remaining after constraints and parameter estimation.",
    },
    {
      chapterId: "02",
      slug: "normal-distribution",
      title: "Normal Distribution and Z Scores",
      startsAt: "常態分配(又稱Z分配)",
      blocks: normalDistributionEn as TopicSection["blocks"],
      summary: "Study the normal distribution, standardization, Z scores, cumulative probabilities, and links to other sampling distributions.",
    },
    {
      chapterId: "02",
      slug: "chi-square-distribution",
      title: "Chi-Square Distribution",
      startsAt: "卡方分配(χ²分配)",
      blocks: chiSquareDistributionEn as TopicSection["blocks"],
      summary: "Build the chi-square distribution from sums of squared standard normal variables and connect it to variance inference.",
    },
    {
      chapterId: "02",
      slug: "t-distribution",
      title: "t Distribution",
      startsAt: "T分配（t distribution）",
      blocks: tDistributionEn as TopicSection["blocks"],
      summary: "Learn standardization when the population standard deviation is unknown and how degrees of freedom control the tails.",
    },
    {
      chapterId: "02",
      slug: "f-distribution",
      title: "F Distribution",
      startsAt: "F分配（F distribution）",
      blocks: fDistributionEn as TopicSection["blocks"],
      summary: "Construct the F distribution from a ratio of independent scaled chi-square variables and relate it to ANOVA and t tests.",
    },
    {
      chapterId: "02",
      slug: "exponential-distribution",
      title: "Exponential Distribution",
      startsAt: "指數分配",
      blocks: exponentialDistributionEn as TopicSection["blocks"],
      summary: "Study waiting times under a constant event rate, memorylessness, survival functions, and the Poisson process.",
    },
    {
      chapterId: "02",
      slug: "binomial-distribution",
      title: "Binomial Distribution",
      startsAt: "二項分配",
      blocks: binomialDistributionEn as TopicSection["blocks"],
      summary: "Model success counts in independent repeated trials and derive the PMF, mean, variance, and normal approximation.",
    },
    {
      chapterId: "02",
      slug: "poisson-distribution",
      title: "Poisson Distribution",
      startsAt: "卜瓦松分配",
      blocks: poissonDistributionEn as TopicSection["blocks"],
      summary: "Model event counts in a fixed interval and connect the rate parameter to binomial limits and exponential waiting times.",
    },
  ],
  "03": [
    {
      chapterId: "03",
      slug: "sampling",
      title: "Sampling and Sampling Distributions",
      startsAt: "抽樣",
      blocks: samplingEn as TopicSection["blocks"],
      summary: "Connect populations and samples with probability sampling, the central limit theorem, sampling distributions, standard errors, and unbiased variance.",
    },
    {
      chapterId: "03",
      slug: "screening-test",
      title: "Screening Tests and ROC Curves",
      startsAt: "篩檢試驗",
      blocks: screeningRocEn as TopicSection["blocks"],
      summary: "Learn 2×2 diagnostic tables, sensitivity, specificity, predictive values, ROC curves, AUC, and clinically appropriate thresholds.",
    },
    {
      chapterId: "03",
      slug: "hypothesis-testing",
      title: "Hypothesis Testing",
      startsAt: "假設檢定",
      blocks: hypothesisTestingEn as TopicSection["blocks"],
      summary: "Study null and alternative hypotheses, one- and two-sided tests, errors, power, p-values, critical values, and confidence intervals.",
    },
  ],
  "04": [
    {
      chapterId: "04",
      slug: "z-test",
      title: "Z Tests",
      startsAt: "Z檢定",
      blocks: zTestEn as TopicSection["blocks"],
      summary: "Develop one- and two-sample Z tests, confidence intervals, Type I and II errors, power, and sample-size calculations from the same standardized framework.",
    },
    {
      chapterId: "04",
      slug: "t-test",
      title: "t-Test Concepts",
      startsAt: "t檢定",
      blocks: tTestConceptEn as TopicSection["blocks"],
      summary: "Understand why estimating an unknown population standard deviation leads to the t distribution and the shared structure of three t tests.",
    },
    {
      chapterId: "04",
      slug: "one-sample-t-test",
      title: "One-Sample t Test",
      startsAt: "單一樣本t檢定",
      blocks: oneSampleTTestEn as TopicSection["blocks"],
      summary: "Compare one population mean with a specified value using hypotheses, the t statistic, degrees of freedom, and a complete testing procedure.",
    },
    {
      chapterId: "04",
      slug: "paired-t-test",
      title: "Paired t Test",
      startsAt: "相依樣本t檢定(paired T test)",
      blocks: pairedTTestEn as TopicSection["blocks"],
      summary: "Convert paired observations into within-pair differences and test the population mean of those differences.",
    },
    {
      chapterId: "04",
      slug: "independent-t-test",
      title: "Independent Two-Sample t Test",
      startsAt: "獨立樣本t檢定(Two sample T test)",
      blocks: independentTTestEn as TopicSection["blocks"],
      summary: "Compare two independent means with Welch or pooled t tests and understand their variance assumptions and degrees of freedom.",
    },
    {
      chapterId: "04",
      slug: "variance-inference",
      title: "Inference for Population Variances",
      startsAt: "單一母體變異數的推論(卡方檢定)",
      blocks: varianceInferenceEn as TopicSection["blocks"],
      summary: "Use a chi-square test for one population variance and an F test for two variances, with links to pooled and Welch t tests.",
    },
  ],
  "05": [
    {
      chapterId: "05",
      slug: "binomial-test",
      title: "Binomial Tests",
      startsAt: "二項分布檢定",
      blocks: binomialTestEn as TopicSection["blocks"],
      summary: "Test one population proportion or compare two independent proportions using normal approximations, confidence intervals, and exact methods.",
    },
    {
      chapterId: "05",
      slug: "chi-square-goodness-of-fit",
      title: "Chi-Square Goodness-of-Fit Test",
      startsAt: "卡方適合度檢定",
      blocks: chiSquareGoodnessOfFitEn as TopicSection["blocks"],
      summary: "Compare observed counts with counts expected from specified theoretical proportions to assess an entire categorical distribution.",
    },
    {
      chapterId: "05",
      slug: "contingency-table",
      title: "Contingency Tables, Odds Ratios, and Relative Risks",
      startsAt: "2 BY 2 TABLE",
      blocks: contingencyTableEn as TopicSection["blocks"],
      summary: "Read 2×2 tables in context and estimate odds ratios, relative risks, and their log-scale confidence intervals.",
    },
    {
      chapterId: "05",
      slug: "chi-square-independence",
      title: "Chi-Square Test of Independence",
      startsAt: "卡方獨立性檢定(CHI-SQUARE TEST OF INDEPENDENCE)",
      blocks: chiSquareIndependenceEn as TopicSection["blocks"],
      summary: "Derive expected counts from marginal totals and test association between two categorical variables.",
    },
    {
      chapterId: "05",
      slug: "yates-correction",
      title: "Yates’ Continuity Correction",
      startsAt: "葉茲連續校正(Yates corrected chi square static)",
      blocks: yatesCorrectionEn as TopicSection["blocks"],
      summary: "Understand the 0.5 continuity correction for chi-square approximations in 2×2 tables, including its effects and limitations.",
    },
    {
      chapterId: "05",
      slug: "fishers-exact-test",
      title: "Fisher’s Exact Test",
      startsAt: "費雪exact法(Fisher’s exact test)",
      blocks: fishersExactTestEn as TopicSection["blocks"],
      summary: "Use hypergeometric probabilities with fixed marginal totals to perform an exact test for a small-sample 2×2 table.",
    },
    {
      chapterId: "05",
      slug: "mcnemars-test",
      title: "McNemar’s Test",
      startsAt: "McNemar’s Test",
      blocks: mcnemarsTestEn as TopicSection["blocks"],
      summary: "Analyze discordant pairs in paired binary data to compare directional change probabilities and marginal proportions.",
    },
  ],
  "06": [
    {
      chapterId: "06",
      slug: "one-way-anova",
      title: "One-Way ANOVA",
      startsAt: "單因子變異數分析",
      blocks: oneWayAnovaEn as TopicSection["blocks"],
      summary: "Treat group membership as a model, decompose variation into between- and within-group components, and construct the F test.",
    },
    {
      chapterId: "06",
      slug: "post-hoc-comparisons",
      title: "Post Hoc Comparisons",
      startsAt: "事後比較",
      blocks: postHocComparisonsEn as TopicSection["blocks"],
      summary: "Compare groups after ANOVA while controlling multiplicity with Fisher’s LSD, Bonferroni, Holm, and Holm–Šidák procedures.",
    },
    {
      chapterId: "06",
      slug: "welch-anova",
      title: "Welch ANOVA",
      startsAt: "Welch ANOVA",
      blocks: welchAnovaEn as TopicSection["blocks"],
      summary: "Compare independent group means without assuming equal variances by using precision weights and approximate degrees of freedom.",
    },
    {
      chapterId: "06",
      slug: "two-way-anova-manova",
      title: "Two-Way ANOVA and MANOVA",
      startsAt: "雙因子變異數分析與多變量變異數分析",
      blocks: twoWayAndManovaEn as TopicSection["blocks"],
      summary: "Separate main effects from interactions in two-way ANOVA and test multiple related dependent variables jointly with MANOVA.",
    },
  ],
  "07": [
    {
      chapterId: "07",
      slug: "simple-linear-regression",
      title: "Simple Linear Regression",
      startsAt: "簡單迴歸分析(Simple linear Regression)",
      blocks: simpleLinearRegressionEn as TopicSection["blocks"],
      summary: "Learn least squares, residual diagnostics, sums-of-squares decomposition, coefficient tests, and prediction with one quantitative predictor.",
    },
    {
      chapterId: "07",
      slug: "pearson-correlation",
      title: "Pearson Correlation",
      startsAt: "Pearson相關係數r",
      blocks: pearsonCorrelationEn as TopicSection["blocks"],
      summary: "Measure linear association between two quantitative variables and connect Pearson’s r with the regression slope, R², t tests, and F tests.",
    },
    {
      chapterId: "07",
      slug: "fisher-z-transformation",
      title: "Fisher’s z Transformation",
      startsAt: "費雪轉換(Fisher’s Z transformation)也是對r進行檢定的方法",
      blocks: fisherZTransformationEn as TopicSection["blocks"],
      summary: "Transform correlations for confidence intervals, tests against a specified population correlation, and comparisons between independent groups.",
    },
    {
      chapterId: "07",
      slug: "spearman-correlation",
      title: "Spearman Rank Correlation",
      startsAt: "Spearman’s RHO",
      blocks: spearmanCorrelationEn as TopicSection["blocks"],
      summary: "Measure monotonic association with ranks and understand ties, inference methods, and differences from Pearson correlation.",
    },
    {
      chapterId: "07",
      slug: "r-squared",
      title: "Coefficient of Determination (R²)",
      startsAt: "R-SQUARE",
      blocks: rSquaredEn as TopicSection["blocks"],
      summary: "Interpret the proportion of variation explained by a regression model, its relationship to r², t, and F, and its important limitations.",
    },
    {
      chapterId: "07",
      slug: "multiple-regression",
      title: "Multiple Regression",
      startsAt: "多元迴歸分析",
      blocks: multipleRegressionEn as TopicSection["blocks"],
      summary: "Interpret conditional coefficients, overall and individual tests, categorical predictors, confounding adjustment, and model diagnostics.",
    },
  ],
  "08": [
    {
      chapterId: "08",
      slug: "wilcoxon-tests",
      title: "Wilcoxon Tests",
      startsAt: "Wilcoxon test",
      blocks: wilcoxonTestsEn as TopicSection["blocks"],
      summary: "Distinguish the sign test, rank-sum test for independent groups, and signed-rank test for one-sample or paired data.",
    },
    {
      chapterId: "08",
      slug: "median-test",
      title: "Mood’s Median Test",
      startsAt: "中位數檢定",
      blocks: medianTestEn as TopicSection["blocks"],
      summary: "Compare two independent groups by classifying observations above or below the pooled median and using exact or large-sample inference.",
    },
    {
      chapterId: "08",
      slug: "kruskal-wallis-test",
      title: "Kruskal–Wallis Test",
      startsAt: "Kruskal-Wallis test",
      blocks: kruskalWallisEn as TopicSection["blocks"],
      summary: "Compare three or more independent groups with pooled ranks, a chi-square approximation, tie correction, and post hoc procedures.",
    },
    {
      chapterId: "08",
      slug: "statistical-test-selection",
      title: "Appendix: Selecting a Statistical Test",
      startsAt: "__virtual_statistical_test_selection__",
      blocks: statisticalTestSelectionEn as TopicSection["blocks"],
      summary: "Choose a statistical method from the outcome type, sample relationship, target hypothesis, and assumptions of the candidate test.",
    },
  ],
  "09": [
    {
      chapterId: "09",
      slug: "survival-curve",
      title: "Survival Curve Estimation",
      startsAt: "存活曲線估計",
      blocks: survivalCurveEn as TopicSection["blocks"],
      summary: "Estimate Kaplan–Meier survival curves with right-censoring, Greenwood standard errors, confidence intervals, and hazard-function relationships.",
    },
    {
      chapterId: "09",
      slug: "comparing-survival-curves",
      title: "Comparing Survival Curves",
      startsAt: "二組數據的存活曲線相比",
      blocks: comparingSurvivalCurvesEn as TopicSection["blocks"],
      summary: "Compare overall survival between groups with the log-rank test and understand observed and expected events, variance, limitations, and Cox regression.",
    },
  ],
  "10": [
    {
      chapterId: "10",
      slug: "summary",
      title: "Conclusion",
      startsAt: "結語",
      blocks: conclusionEn as TopicSection["blocks"],
      summary: "Connect the common reasoning behind statistical methods, from hypotheses and sampling distributions to derivations, uncertainty, and interpretation.",
    },
  ],
};

const japaneseSections: Record<string, TopicSection[]> = {
  "01": [
    {
      chapterId: "01",
      slug: "introduction",
      title: "統計学入門",
      startsAt: "統計學導論",
      blocks: introductionJa as TopicSection["blocks"],
      summary: "記述統計と推測統計の役割、標本抽出による不確実性、仮説検定へつながる基本的な考え方を学びます。",
    },
    {
      chapterId: "01",
      slug: "data-types",
      title: "データの分類",
      startsAt: "資料的分類",
      blocks: dataTypesJa as TopicSection["blocks"],
      summary: "カテゴリー／数値データと、名義・順序・間隔・比率尺度の違いを整理し、統計手法の選択につなげます。",
    },
    {
      chapterId: "01",
      slug: "descriptive-statistics",
      title: "記述統計",
      startsAt: "敘述統計",
      blocks: descriptiveStatisticsJa as TopicSection["blocks"],
      summary: "中心傾向、ばらつき、歪度、尖度を用いて、標本データの姿を適切に要約し報告する方法を学びます。",
    },
  ],
  "02": [
    {
      chapterId: "02",
      slug: "random-variables",
      title: "確率変数と確率密度関数",
      startsAt: "隨機變數(random variable)",
      blocks: randomVariablesJa as TopicSection["blocks"],
      summary: "試行結果を数値へ変換する確率変数と、離散型・連続型の確率を記述するPMF、PDF、CDFを学びます。",
    },
    {
      chapterId: "02",
      slug: "degrees-of-freedom",
      title: "自由度",
      startsAt: "自由度",
      blocks: degreesOfFreedomJa as TopicSection["blocks"],
      summary: "制約や母数推定の後に残る独立情報として自由度を理解し、n−1や各分析法の自由度につなげます。",
    },
    {
      chapterId: "02",
      slug: "normal-distribution",
      title: "正規分布とZ分布",
      startsAt: "常態分配(又稱Z分配)",
      blocks: normalDistributionJa as TopicSection["blocks"],
      summary: "正規分布、標準化、Zスコア、累積確率を整理し、χ²・t・F分布との関係を学びます。",
    },
    {
      chapterId: "02",
      slug: "chi-square-distribution",
      title: "カイ二乗分布",
      startsAt: "卡方分配(χ²分配)",
      blocks: chiSquareDistributionJa as TopicSection["blocks"],
      summary: "独立な標準正規変数の二乗和からχ²分布を構成し、自由度、標本分散、密度関数との関係を学びます。",
    },
    {
      chapterId: "02",
      slug: "t-distribution",
      title: "t分布",
      startsAt: "T分配（t distribution）",
      blocks: tDistributionJa as TopicSection["blocks"],
      summary: "母標準偏差が未知の場合の標準化、自由度による裾の変化、t密度関数の構成を学びます。",
    },
    {
      chapterId: "02",
      slug: "f-distribution",
      title: "F分布",
      startsAt: "F分配（F distribution）",
      blocks: fDistributionJa as TopicSection["blocks"],
      summary: "独立な二つの平均変動の比からF分布を構成し、二つの自由度、t分布、ANOVAとの関係を学びます。",
    },
    {
      chapterId: "02",
      slug: "exponential-distribution",
      title: "指数分布",
      startsAt: "指數分配",
      blocks: exponentialDistributionJa as TopicSection["blocks"],
      summary: "一定発生率の下での待ち時間、無記憶性、生存関数、ポアソン過程との関係を学びます。",
    },
    {
      chapterId: "02",
      slug: "binomial-distribution",
      title: "二項分布",
      startsAt: "二項分配",
      blocks: binomialDistributionJa as TopicSection["blocks"],
      summary: "独立な反復試行の成功回数、確率質量関数、平均・分散、正規近似を学びます。",
    },
    {
      chapterId: "02",
      slug: "poisson-distribution",
      title: "ポアソン分布",
      startsAt: "卜瓦松分配",
      blocks: poissonDistributionJa as TopicSection["blocks"],
      summary: "一定区間内の発生回数、母数λ、二項分布からの極限、指数分布との関係を学びます。",
    },
  ],
  "03": [
    {
      chapterId: "03",
      slug: "sampling",
      title: "標本抽出と標本分布",
      startsAt: "抽樣",
      blocks: samplingJa as TopicSection["blocks"],
      summary: "母集団と標本、確率標本抽出法、中心極限定理、標本分布、標準誤差と不偏分散を学びます。",
    },
    {
      chapterId: "03",
      slug: "screening-test",
      title: "スクリーニング検査とROC曲線",
      startsAt: "篩檢試驗",
      blocks: screeningRocJa as TopicSection["blocks"],
      summary: "2×2表、感度、特異度、予測値、ROC曲線、AUCと臨床目的に応じた閾値選択を学びます。",
    },
    {
      chapterId: "03",
      slug: "hypothesis-testing",
      title: "仮説検定",
      startsAt: "假設檢定",
      blocks: hypothesisTestingJa as TopicSection["blocks"],
      summary: "帰無仮説、片側・両側検定、二種類の過誤、検出力、p値、臨界値、信頼区間を学びます。",
    },
  ],
  "04": [
    {
      chapterId: "04",
      slug: "z-test",
      title: "Z検定",
      startsAt: "Z值及Z分配檢定",
      blocks: zTestJa as TopicSection["blocks"],
      summary: "既知の母標準偏差による平均の標準化、信頼区間、α・β・検出力、標本サイズの関係を学びます。",
    },
    {
      chapterId: "04",
      slug: "t-test",
      title: "t検定の概念",
      startsAt: "t檢定",
      blocks: tTestConceptJa as TopicSection["blocks"],
      summary: "母標準偏差が未知の場合にt分布が必要となる理由と、三種類のt検定の共通構造を学びます。",
    },
    {
      chapterId: "04",
      slug: "one-sample-t-test",
      title: "1標本t検定",
      startsAt: "單一樣本t檢定",
      blocks: oneSampleTTestJa as TopicSection["blocks"],
      summary: "一つの母平均を指定値と比較する仮説、t統計量、自由度、検定手順を学びます。",
    },
    {
      chapterId: "04",
      slug: "paired-t-test",
      title: "対応のあるt検定",
      startsAt: "相依樣本t檢定(paired T test)",
      blocks: pairedTTestJa as TopicSection["blocks"],
      summary: "一対一に対応する測定値から差を作り、その平均差を検定する方法を学びます。",
    },
    {
      chapterId: "04",
      slug: "independent-t-test",
      title: "独立2標本t検定",
      startsAt: "獨立樣本t檢定(Two sample T test)",
      blocks: independentTTestJa as TopicSection["blocks"],
      summary: "独立二群の平均差をWelch tまたはpooled tで検定し、分散仮定と自由度の違いを学びます。",
    },
    {
      chapterId: "04",
      slug: "variance-inference",
      title: "母分散の推測",
      startsAt: "單一母體變異數的推論(卡方檢定)",
      blocks: varianceInferenceJa as TopicSection["blocks"],
      summary: "一母分散のカイ二乗検定、二母分散のF検定、pooled tとWelch tとの関係を学びます。",
    },
  ],
  "05": [
    {
      chapterId: "05",
      slug: "binomial-test",
      title: "二項検定",
      startsAt: "二項分布檢定",
      blocks: binomialTestJa as TopicSection["blocks"],
      summary: "一母比率と独立二母比率の検定、正規近似、信頼区間、正確法の選択を学びます。",
    },
    {
      chapterId: "05",
      slug: "chi-square-goodness-of-fit",
      title: "カイ二乗適合度検定",
      startsAt: "卡方適合度檢定",
      blocks: chiSquareGoodnessOfFitJa as TopicSection["blocks"],
      summary: "観察度数と指定された理論比率の期待度数を比較し、分布全体の適合性を評価します。",
    },
    {
      chapterId: "05",
      slug: "contingency-table",
      title: "分割表、オッズ比と相対リスク",
      startsAt: "2 BY 2 TABLE",
      blocks: contingencyTableJa as TopicSection["blocks"],
      summary: "2×2表の読み方、研究デザイン、オッズ比、相対リスクと対数信頼区間を学びます。",
    },
    {
      chapterId: "05",
      slug: "chi-square-independence",
      title: "カイ二乗独立性検定",
      startsAt: "卡方獨立性檢定(CHI-SQUARE TEST OF INDEPENDENCE)",
      blocks: chiSquareIndependenceJa as TopicSection["blocks"],
      summary: "周辺度数から独立時の期待度数を作り、二つのカテゴリー変数の関連を検定します。",
    },
    {
      chapterId: "05",
      slug: "yates-correction",
      title: "Yatesの連続性補正",
      startsAt: "葉茲連續校正(Yates corrected chi square static)",
      blocks: yatesCorrectionJa as TopicSection["blocks"],
      summary: "2×2表のカイ二乗近似に対する0.5の連続性補正、その効果と限界を学びます。",
    },
    {
      chapterId: "05",
      slug: "fishers-exact-test",
      title: "Fisherの正確確率検定",
      startsAt: "費雪exact法(Fisher’s exact test)",
      blocks: fishersExactTestJa as TopicSection["blocks"],
      summary: "固定した周辺度数の下で超幾何確率を使い、小標本2×2表を正確に検定します。",
    },
    {
      chapterId: "05",
      slug: "mcnemars-test",
      title: "McNemar検定",
      startsAt: "McNemar’s Test",
      blocks: mcnemarsTestJa as TopicSection["blocks"],
      summary: "対応のある二値データの不一致ペアから、二方向の変化確率と周辺比率を比較します。",
    },
  ],
  "06": [
    {
      chapterId: "06",
      slug: "one-way-anova",
      title: "一元配置分散分析（One-way ANOVA）",
      startsAt: "ANOVA(analysis of variance)單因子獨立樣本變異數分析",
      blocks: oneWayAnovaJa as TopicSection["blocks"],
      summary: "全変動を群間と群内に分解し、独立した複数群の母平均をF検定で比較します。",
    },
    {
      chapterId: "06",
      slug: "post-hoc-comparisons",
      title: "ANOVAの事後比較",
      startsAt: "變異數分析的事後比較",
      blocks: postHocComparisonsJa as TopicSection["blocks"],
      summary: "Fisher's LSD、Bonferroni、Holm、Holm–Šidákによる多重比較とFWER制御を学びます。",
    },
    {
      chapterId: "06",
      slug: "welch-anova",
      title: "Welch ANOVA：不等分散の平均比較",
      startsAt: "__virtual_welch_anova__",
      blocks: welchAnovaJa as TopicSection["blocks"],
      summary: "等分散を仮定せず、標本数と群別分散に応じた重みで複数群の平均を比較します。",
    },
    {
      chapterId: "06",
      slug: "two-way-anova-manova",
      title: "二元配置ANOVAとMANOVA",
      startsAt: "__virtual_two_way_anova_manova__",
      blocks: twoWayAndManovaJa as TopicSection["blocks"],
      summary: "二因子の主効果・交互作用と、複数目的変数の平均ベクトルを扱うMANOVAを学びます。",
    },
  ],
  "07": [
    {
      chapterId: "07",
      slug: "simple-linear-regression",
      title: "単回帰分析",
      startsAt: "簡單迴歸分析(Simple linear Regression)",
      blocks: simpleLinearRegressionJa as TopicSection["blocks"],
      summary: "最小二乗法、残差、平方和分解、係数検定、予測を通して一説明変数の線形モデルを学びます。",
    },
    {
      chapterId: "07",
      slug: "pearson-correlation",
      title: "Pearsonの相関係数",
      startsAt: "Pearson相關係數r",
      blocks: pearsonCorrelationJa as TopicSection["blocks"],
      summary: "二つの量的変数の線形関連、回帰傾き・R²・t検定・F検定との関係を学びます。",
    },
    {
      chapterId: "07",
      slug: "fisher-z-transformation",
      title: "Fisher Z変換と相関係数の比較",
      startsAt: "費雪轉換(Fisher’s Z transformation)也是對r進行檢定的方法",
      blocks: fisherZTransformationJa as TopicSection["blocks"],
      summary: "相関係数を正規化し、母相関の信頼区間と独立二群の相関差を推測します。",
    },
    {
      chapterId: "07",
      slug: "spearman-correlation",
      title: "Spearmanの順位相関",
      startsAt: "Spearman’s RHO",
      blocks: spearmanCorrelationJa as TopicSection["blocks"],
      summary: "順位に基づいて単調関連を測り、同順位、正確検定、Pearson相関との違いを学びます。",
    },
    {
      chapterId: "07",
      slug: "r-squared",
      title: "決定係数R²",
      startsAt: "R-SQUARE",
      blocks: rSquaredJa as TopicSection["blocks"],
      summary: "回帰モデルが説明する変動割合、r²・F・tとの関係、R²の限界を学びます。",
    },
    {
      chapterId: "07",
      slug: "multiple-regression",
      title: "重回帰分析",
      startsAt: "多元迴歸分析",
      blocks: multipleRegressionJa as TopicSection["blocks"],
      summary: "複数説明変数の条件付き係数、全体F、ダミー変数、交絡調整とモデル診断を学びます。",
    },
  ],
  "08": [
    {
      chapterId: "08",
      slug: "wilcoxon-tests",
      title: "Wilcoxon検定",
      startsAt: "Wilcoxon test",
      blocks: wilcoxonTestsJa as TopicSection["blocks"],
      summary: "符号検定、独立二群の順位和検定、対応データの符号付順位検定を区別して学びます。",
    },
    {
      chapterId: "08",
      slug: "median-test",
      title: "中央値検定",
      startsAt: "中位數檢定",
      blocks: medianTestJa as TopicSection["blocks"],
      summary: "独立二群を合併中央値の上下へ分け、超幾何分布または二比率近似で比較します。",
    },
    {
      chapterId: "08",
      slug: "kruskal-wallis-test",
      title: "Kruskal–Wallis検定",
      startsAt: "Kruskal-Wallis test",
      blocks: kruskalWallisJa as TopicSection["blocks"],
      summary: "独立三群以上の合併順位と平均順位から、分布の群差をカイ二乗近似で検定します。",
    },
    {
      chapterId: "08",
      slug: "statistical-test-selection",
      title: "付録：統計手法選択表",
      startsAt: "__virtual_statistical_test_selection__",
      blocks: statisticalTestSelectionJa as TopicSection["blocks"],
      summary: "結果変数の型、独立・対応関係、帰無仮説から適切な統計手法を選ぶ道筋を整理します。",
    },
  ],
  "09": [
    {
      chapterId: "09",
      slug: "survival-curve",
      title: "生存曲線の推定",
      startsAt: "存活曲線估計",
      blocks: survivalCurveJa as TopicSection["blocks"],
      summary: "右打ち切りを含む生存時間からKaplan–Meier曲線、Greenwood標準誤差、信頼区間を求めます。",
    },
    {
      chapterId: "09",
      slug: "comparing-survival-curves",
      title: "二群の生存曲線比較",
      startsAt: "二組數據的存活曲線相比",
      blocks: comparingSurvivalCurvesJa as TopicSection["blocks"],
      summary: "各事象時刻の観察・期待事象数を累積するlog-rank検定と、その条件・限界を学びます。",
    },
  ],
  "10": [
    {
      chapterId: "10",
      slug: "summary",
      title: "結び",
      startsAt: "結語",
      blocks: conclusionJa as TopicSection["blocks"],
      summary: "全章に共通する統計的思考、帰無仮説、標本分布、導出と実務的解釈の流れを振り返ります。",
    },
  ],
};

export function localizedSectionsForChapter(locale: Locale, chapterId: string) {
  if (locale === "zh-Hant") return sectionsForChapter(chapterId);
  if (locale === "en") return englishSections[chapterId] ?? [];
  if (locale === "ja") return japaneseSections[chapterId] ?? [];
  return [];
}

export const allEnglishTopicSections = Object.values(englishSections).flat();
export const allJapaneseTopicSections = Object.values(japaneseSections).flat();

export function hasLocalizedTopic(locale: Locale, chapterId: string, slug: string) {
  return localizedSectionsForChapter(locale, chapterId).some(section => section.slug === slug);
}
