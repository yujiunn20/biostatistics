import type { Locale } from "../lib/site";
import type { ArticleKey } from "./article-relations";

type LocalizedText = Record<Locale, string>;

export type MethodLink = {
  label: string;
  key: ArticleKey;
};

export type DecisionBranch = {
  condition: LocalizedText;
  methods: MethodLink[];
};

export type DecisionGroup = {
  source: LocalizedText;
  branches: DecisionBranch[];
};

export type NavigatorPanel = {
  id: "one" | "two" | "multiple";
  tab: LocalizedText;
  prompt: LocalizedText;
  groups: DecisionGroup[];
};

const text = (zh: string, en: string, ja: string): LocalizedText => ({
  "zh-Hant": zh,
  en,
  ja,
});

export const navigatorCopy = {
  eyebrow: "METHOD NAVIGATOR",
  title: text("統計方法互動導覽", "Interactive Statistical Method Navigator", "統計手法インタラクティブナビ"),
  intro: text(
    "從研究中的變量數目出發，再依資料型態、樣本關係與虛無假設縮小選擇範圍。",
    "Start with the number of variables, then narrow the choice by outcome type, sample relationship, and null hypothesis.",
    "変数の数から始め、データ型、標本の関係、帰無仮説に沿って候補を絞ります。",
  ),
  columns: {
    source: text("資料與研究問題", "Data and research question", "データと研究課題"),
    condition: text("設計與條件", "Design and conditions", "デザインと条件"),
    method: text("可考慮的方法", "Methods to consider", "検討する手法"),
  },
  note: text(
    "這是方法定位工具，不會取代研究設計判斷。進入章節後仍須核對該方法的虛無假設、獨立性、分布條件與小樣本計算方式。",
    "This navigator locates candidate methods; it does not replace study-design judgment. Check the null hypothesis, independence, distributional conditions, and small-sample calculation in the linked note.",
    "これは候補となる手法を探すための案内です。リンク先で帰無仮説、独立性、分布条件、小標本での計算法を確認してください。",
  ),
} as const;

export const navigatorPanels: NavigatorPanel[] = [
  {
    id: "one",
    tab: text("單一變量", "One variable", "1変数"),
    prompt: text("一組資料要和參考值或指定分布比較", "Compare one sample with a reference value or distribution", "1標本を基準値または指定分布と比較"),
    groups: [
      {
        source: text("連續型結果與指定平均數比較", "Numerical outcome versus a specified mean", "連続量と指定平均値の比較"),
        branches: [
          {
            condition: text("母體標準差已知；或在適當條件下使用常態近似", "Population SD known, or a justified normal approximation", "母標準偏差が既知、または妥当な正規近似を使用"),
            methods: [{ label: "Z test", key: "04/z-test" }],
          },
          {
            condition: text("母體標準差未知，並以樣本標準差估計", "Population SD unknown and estimated from the sample", "母標準偏差が未知で、標本から推定"),
            methods: [{ label: "One-sample t-test", key: "04/one-sample-t-test" }],
          },
          {
            condition: text("次序資料，或希望以符號／等級分析位置", "Ordinal data, or a location analysis based on signs or ranks", "順序データ、または符号・順位に基づく位置の分析"),
            methods: [{ label: "Sign test / Wilcoxon signed-rank", key: "08/wilcoxon-tests" }],
          },
        ],
      },
      {
        source: text("類別結果與指定機率或比例比較", "Categorical outcome versus specified probabilities", "カテゴリ結果と指定確率・比率の比較"),
        branches: [
          {
            condition: text("二元結果；檢定成功機率是否等於指定值", "Binary outcome; test whether the event probability equals a specified value", "二値結果で、事象確率が指定値に等しいかを検定"),
            methods: [{ label: "Binomial test", key: "05/binomial-test" }],
          },
          {
            condition: text("三個以上類別；觀察次數與指定比例比較", "Three or more categories; observed counts versus specified proportions", "3カテゴリ以上で、観測度数と指定比率を比較"),
            methods: [{ label: "Chi-square goodness-of-fit test", key: "05/chi-square-goodness-of-fit" }],
          },
        ],
      },
    ],
  },
  {
    id: "two",
    tab: text("兩個變量／兩組", "Two variables / groups", "2変数・2群"),
    prompt: text("先分辨獨立、配對與關聯，再看結果變數型態", "First distinguish independent, paired, and association designs", "独立・対応あり・関連のデザインを最初に区別"),
    groups: [
      {
        source: text("兩組連續型結果比較", "Compare two numerical outcomes", "2群の連続量を比較"),
        branches: [
          {
            condition: text("同一受試者前後測量或成對配對；分析差值", "Repeated or matched observations; analyze within-pair differences", "同一対象の反復測定またはマッチドペア；差を分析"),
            methods: [
              { label: "Paired t-test", key: "04/paired-t-test" },
              { label: "Wilcoxon signed-rank / Sign test", key: "08/wilcoxon-tests" },
            ],
          },
          {
            condition: text("兩組受試者彼此獨立；比較平均數或分布位置", "Independent participants; compare means or distributional locations", "独立した2群で、平均値または分布の位置を比較"),
            methods: [
              { label: "Independent-samples t-test", key: "04/independent-t-test" },
              { label: "Mann–Whitney U / Wilcoxon rank-sum", key: "08/wilcoxon-tests" },
              { label: "Median test", key: "08/median-test" },
            ],
          },
        ],
      },
      {
        source: text("兩個類別變量或 2 × 2 表", "Two categorical variables or a 2 × 2 table", "2つのカテゴリ変数または2×2表"),
        branches: [
          {
            condition: text("不同受試者、觀察值獨立；檢定兩個類別變量是否獨立", "Independent observations; test whether the categorical variables are independent", "独立観測で、2つのカテゴリ変数の独立性を検定"),
            methods: [
              { label: "Chi-square test of independence", key: "05/chi-square-independence" },
              { label: "Fisher's exact test (sparse expected counts)", key: "05/fishers-exact-test" },
              { label: "Yates correction (2 × 2 option)", key: "05/yates-correction" },
            ],
          },
          {
            condition: text("同一受試者前後測量或配對的二元結果", "Paired binary outcomes or before-and-after measurements", "対応のある二値結果または前後測定"),
            methods: [{ label: "McNemar's test", key: "05/mcnemars-test" }],
          },
          {
            condition: text("病例對照研究估計勝算比；世代研究估計相對風險", "Estimate an odds ratio in case-control data or relative risk in cohort data", "症例対照研究のオッズ比、コホート研究の相対リスクを推定"),
            methods: [{ label: "2 × 2 contingency table", key: "05/contingency-table" }],
          },
        ],
      },
      {
        source: text("兩個連續／次序變量的關聯", "Association between numerical or ordinal variables", "連続・順序変数間の関連"),
        branches: [
          {
            condition: text("線性關係；描述相關或以 X 解釋 Y", "Linear relationship; describe correlation or explain Y with X", "線形関係で、相関を記述またはXでYを説明"),
            methods: [
              { label: "Pearson correlation", key: "07/pearson-correlation" },
              { label: "Simple linear regression", key: "07/simple-linear-regression" },
              { label: "Coefficient of determination R²", key: "07/r-squared" },
            ],
          },
          {
            condition: text("單調但未必線性，或以等級處理次序資料與離群值", "Monotonic but not necessarily linear, or rank-based analysis", "単調だが必ずしも線形でない、または順位に基づく分析"),
            methods: [{ label: "Spearman rank correlation", key: "07/spearman-correlation" }],
          },
          {
            condition: text("檢定相關係數，或比較兩個獨立樣本的相關係數", "Test a correlation or compare correlations from independent samples", "相関係数の検定、または独立2標本の相関係数を比較"),
            methods: [{ label: "Fisher Z transformation", key: "07/fisher-z-transformation" }],
          },
        ],
      },
      {
        source: text("兩組時間至事件資料", "Two time-to-event groups", "2群のイベント発生時間データ"),
        branches: [
          {
            condition: text("包含設限資料；比較兩組完整存活曲線", "Censored observations are present; compare the full survival curves", "打ち切りを含み、2群の生存曲線全体を比較"),
            methods: [{ label: "Kaplan–Meier curves / Log-rank test", key: "09/comparing-survival-curves" }],
          },
        ],
      },
    ],
  },
  {
    id: "multiple",
    tab: text("多組／多個變量", "Multiple groups / variables", "多群・多変数"),
    prompt: text("區分單一因子、多因子、多結果與多個解釋變量", "Distinguish one factor, multiple factors, multiple outcomes, and multiple predictors", "1因子、多因子、多変量応答、複数説明変数を区別"),
    groups: [
      {
        source: text("三組以上獨立樣本的連續／次序結果", "Numerical or ordinal outcome across three or more independent groups", "3群以上の独立群における連続・順序結果"),
        branches: [
          {
            condition: text("比較組平均數，且組內變異數可視為相同", "Compare group means with a common within-group variance", "群平均を比較し、群内分散を共通とみなせる"),
            methods: [
              { label: "One-way ANOVA", key: "06/one-way-anova" },
              { label: "Post-hoc comparisons", key: "06/post-hoc-comparisons" },
            ],
          },
          {
            condition: text("比較組平均數，但組間變異數不同", "Compare group means when variances differ", "群間で分散が異なる場合の平均比較"),
            methods: [{ label: "Welch ANOVA", key: "06/welch-anova" }],
          },
          {
            condition: text("以等級檢定多組分布；次序資料或母數模型不合適", "Rank-based comparison when ordinal data or a parametric model is unsuitable", "順序データ、または母数モデルが不適切な場合の順位比較"),
            methods: [{ label: "Kruskal–Wallis test", key: "08/kruskal-wallis-test" }],
          },
        ],
      },
      {
        source: text("兩個以上因子或多個結果變量", "Multiple factors or multiple outcome variables", "複数因子または複数の結果変数"),
        branches: [
          {
            condition: text("一個連續結果，同時檢查兩個類別因子與交互作用", "One numerical outcome with two categorical factors and their interaction", "1つの連続結果に対し、2因子と交互作用を検討"),
            methods: [{ label: "Two-way ANOVA", key: "06/two-way-anova-manova" }],
          },
          {
            condition: text("同時分析多個彼此相關的連續結果變量", "Analyze several correlated numerical outcomes jointly", "相関する複数の連続結果を同時に分析"),
            methods: [{ label: "MANOVA", key: "06/two-way-anova-manova" }],
          },
        ],
      },
      {
        source: text("一個結果與多個解釋變量", "One outcome with multiple predictors", "1つの結果と複数の説明変数"),
        branches: [
          {
            condition: text("連續結果；估計各變量在控制其他變量後的迴歸係數", "Numerical outcome; estimate each coefficient while adjusting for other predictors", "連続結果で、他の説明変数を調整した各回帰係数を推定"),
            methods: [{ label: "Multiple linear regression", key: "07/multiple-regression" }],
          },
        ],
      },
    ],
  },
];
