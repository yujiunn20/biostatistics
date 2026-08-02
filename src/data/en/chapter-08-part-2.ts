export const medianTestEn = [
  { type: "paragraph", text: "Mood\u0027s median test dichotomizes observations from two independent groups as above or below the pooled median and compares the proportions falling on each side." },
  { type: "callout", tone: "intuition", label: "Converting Values into a 2×2 Table", text: "Discard the distance from the median and use only whether each observation is above or below it. While robust against outliers, it usually has lower power than the rank-sum test, which uses all ranks." },
  { type: "heading", text: "Applicable Study Designs" },
  { type: "table", rows: [["Design", "Method"], ["Two independent groups; proportions above and below the pooled median", "Median test"], ["Two independent groups; all rank information", "Rank-sum / Mann–Whitney"], ["One sample or paired data", "Sign / Signed-rank"]] },
  { type: "heading", text: "Hypotheses and the 2×2 Table" },
  { type: "formula", latex: "H_0:\\eta_1=\\eta_2\\qquad H_1:\\eta_1\\ne\\eta_2", fallback: "H₀:η₁=η₂; H₁:η₁≠η₂" },
  { type: "table", rows: [["", "Above the pooled median", "Below", "Total"], ["Group 1", "m₁", "n₁−m₁", "n₁"], ["Group 2", "m₂", "n₂−m₂", "n₂"], ["Total", "M", "N−M", "N"]] },
  { type: "paragraph", text: "Use a prespecified rule for observations equal to the pooled median. They are often excluded, but when ties are numerous the result may depend on this rule, so report it explicitly." },
  { type: "heading", text: "Hypergeometric Probability" },
  { type: "formulaGroup", formulas: [
    { label: "assignments matching the table", latex: "\\binom{n_1}{m_1}\\binom{n_2}{m_2}", fallback: "C(n₁,m₁)C(n₂,m₂)" },
    { label: "all assignments", latex: "\\binom{n_1+n_2}{m_1+m_2}", fallback: "C(N,M)" },
    { label: "table probability", latex: "P(M_1=m_1\\mid M)=\\frac{\\binom{n_1}{m_1}\\binom{n_2}{m_2}}{\\binom{n_1+n_2}{m_1+m_2}}", fallback: "conditional Hypergeometric Probability" }
  ] },
  { type: "paragraph", text: "This is the probability of one observed table, and the two-sided p-value sums the probability of all tables being equally or more inconsistent with H₀. This is the same conditional calculation as Fisher’s exact test." },
  { type: "heading", text: "Counts on Either Side of the Pooled Median" },
  { type: "formulaGroup", formulas: [
    { label: "N is even", latex: "m_1+m_2=\\frac N2", fallback: "M=N/2" },
    { label: "If N is odd, exclude the median", latex: "m_1+m_2=\\frac{N-1}{2}", fallback: "M=(N−1)/2" }
  ] },
  { type: "heading", text: "Two-proportion approximation for large samples" },
  { type: "formulaGroup", formulas: [
    { label: "difference in proportions", latex: "\\hat p_1-\\hat p_2=\\frac{m_1}{n_1}-\\frac{m_2}{n_2}", fallback: "p̂₁−p̂₂=m₁/n₁−m₂/n₂" },
    { label: "pooled proportion", latex: "\\hat p=\\frac{m_1+m_2}{n_1+n_2},\\quad\\hat q=1-\\hat p", fallback: "p̂=M/N" },
    { label: "Z statistic", latex: "Z=\\frac{m_1/n_1-m_2/n_2}{\\sqrt{\\hat p\\hat q(1/n_1+1/n_2)}}", fallback: "Z=difference in proportions/SE₀" }
  ] },
  { type: "callout", tone: "caution", label: "Scope of the Conclusion", text: "Rejection supports a difference in the proportions on either side of the pooled median. A direct interpretation as a difference in population medians also requires consideration of distributional shape, spread, and ties. Failure to reject H₀ does not mean that the two group distributions are identical." },
];

export const kruskalWallisEn = [
  { type: "paragraph", text: "The Kruskal–Wallis test is a rank-based method that compares three or more independent groups and is a rank-based analogue of one-way ANOVA. We combine and rank all observations and measure how far the group mean rank deviates from the common center." },
  { type: "heading", text: "Study Design and Hypotheses" },
  { type: "list", items: ["The outcome is at least ordinal", "Observations between groups are independent and each observation belongs to only one group.", "The test is not appropriate for repeated measurements", "If interpreted as a median difference, the group distributions have approximately the same shape."] },
  { type: "formula", latex: "H_0:F_1=F_2=\\cdots=F_k\\qquad H_1:\\text{At least one group\u0027s distribution is different}", fallback: "H₀:All group distributions are the same" },
  { type: "heading", text: "Pool and Rank All Observations" },
  { type: "formulaGroup", formulas: [
    { label: "Total sample size", latex: "N=\\sum_{i=1}^{k}n_i", fallback: "N=Σnᵢ" },
    { label: "rank sum for group i", latex: "R_i=\\sum_{j=1}^{n_i}R_{ij}", fallback: "Rᵢ=ΣRᵢⱼ" },
    { label: "mean rank", latex: "\\bar R_i=\\frac{R_i}{n_i}", fallback: "R̄ᵢ=Rᵢ/nᵢ" }
  ] },
  { type: "paragraph", text: "Assign the average of the occupied ranks to tied values. The sum of all ranks is N(N+1)/2, and their common center is (N+1)/2. Under H₀, each group’s mean rank should lie near this value." },
  { type: "formulaGroup", formulas: [
    { label: "sum of all ranks", latex: "1+2+\\cdots+N=\\frac{N(N+1)}2", fallback: "Σrank=N(N+1)/2" },
    { label: "common center", latex: "\\bar R_{\\cdot}=\\frac{N+1}{2}", fallback: "R̄·=(N+1)/2" }
  ] },
  { type: "heading", text: "Kruskal–Wallis Statistic" },
  { type: "formulaGroup", formulas: [
    { label: "mean-rank form", latex: "H=\\frac{12}{N(N+1)}\\sum_i n_i\\left(\\bar R_i-\\frac{N+1}{2}\\right)^2", fallback: "weighted mean rank deviation" },
    { label: "rank-sum form", latex: "H=\\frac{12}{N(N+1)}\\sum_i\\frac{R_i^2}{n_i}-3(N+1)", fallback: "H=12/[N(N+1)]Σ(Rᵢ²/nᵢ)−3(N+1)" }
  ] },
  { type: "heading", text: "Chi-square approximation and degrees of freedom" },
  { type: "formula", latex: "H\\overset{\\cdot}{\\sim}\\chi^2_{k-1}", fallback: "H≈χ²(k−1)" },
  { type: "paragraph", text: "Because the total rank sum across k groups is fixed, only k−1 rank sums can vary freely. For small samples or severe imbalance, consider exact or permutation methods. Having roughly five observations per group is only a guideline for the chi-square approximation and is unrelated to the expected-cell-count rule used for contingency tables." },
  { type: "heading", text: "Tie correction" },
  { type: "formulaGroup", formulas: [
    { label: "correction factor", latex: "C=1-\\frac{\\sum_j(t_j^3-t_j)}{N^3-N}", fallback: "C=1−Σ(tⱼ³−tⱼ)/(N³−N)" },
    { label: "Correction H", latex: "H_{\\mathrm{corrected}}=\\frac HC", fallback: "Hcorrected=H/C" }
  ] },
  { type: "heading", text: "Post Hoc Comparisons after a Significant Test" },
  { type: "paragraph", text: "The significance of the overall test only indicates that at least one group is different. Use Dunn’s test or planned rank contrasts, and adjust multiplicity using Holm, Bonferroni, etc." },
  { type: "list", ordered: true, items: ["Perform the overall Kruskal–Wallis test", "If significant, perform Dunn’s test or planned rank contrasts", "Adjust for multiple comparisons", "Report each group’s n, median, IQR, and mean rank, together with H, df, p value, and an effect size"] },
  { type: "table", rows: [["Item", "One-way ANOVA", "Kruskal–Wallis"], ["Input", "Raw values", "Pooled ranks"], ["Comparison", "Means", "Mean ranks / distributions"], ["Statistic", "F", "H"], ["Reference distribution", "F", "χ²(k−1)"], ["Post hoc", "Tukey and related methods", "Dunn and related methods"]] },
];

export const statisticalTestSelectionEn = [
  { type: "paragraph", text: "Statistical methods are selected in the following order: the type of outcome variable, the relationship between the samples, and the population-level hypotheses to be compared. The table below is a starting point, and the final decision is made by reviewing the study design and assumptions for each method." },
  { type: "heading", text: "Integrated Statistical-Test Selection Table" },
  { type: "table", rows: [["Outcome", "One sample", "Two independent groups", "Two paired time points", "Three or more independent groups"], ["Binary", "Binomial", "χ² / Fisher", "McNemar", "χ²"], ["Approximately normal continuous", "One-sample t", "Independent t / Welch t", "Paired t", "ANOVA / Welch ANOVA"], ["Skewed continuous or outlier-prone", "Sign / Signed-rank", "Rank-sum", "Sign / Signed-rank", "Kruskal–Wallis"], ["Ordinal", "Sign / Signed-rank", "Rank-sum", "Sign / Signed-rank", "Kruskal–Wallis"]] },
  { type: "callout", tone: "caution", label: "Designs Not Listed", text: "More than two paired time points, clustered data, time-to-event outcomes, count outcomes, and analyses requiring confounding adjustment need other methods. Do not force these designs into this table." },
  { type: "heading", text: "Question 1: What Type of Outcome Variable?" },
  { type: "table", rows: [["Type", "Examples", "Primary comparison"], ["Binary", "Present/absent, positive/negative", "Proportion or event probability"], ["Continuous", "Blood pressure, weight", "Mean, location, or distribution"], ["Ordinal", "Disease stage, pain scale", "Ranks or distributional location"]] },
  { type: "paragraph", text: "Coding categories as 0, 1, and 2 does not make them continuous measurements. Likewise, a significant normality test alone does not automatically require switching to a nonparametric method." },
  { type: "heading", text: "Question 2: How Are the Samples Related?" },
  { type: "table", rows: [["Relationship", "Definition", "Example"], ["One sample", "One group compared with a reference value", "Is the median 4?"], ["Independent", "Different participants belong to different groups", "Treatment and control groups"], ["Paired", "Repeated or matched observations", "Before and after treatment"]] },
  { type: "callout", tone: "warning", label: "Independent and Paired Designs Are Not Interchangeable", text: "The relationship between observations determines the standard error and null distribution. If you ignore pairing or artificially pair independent individuals, the meaning of the p-value will be lost." },
  { type: "heading", text: "Question 3: What Does H₀ Compare?" },
  { type: "table", rows: [["Method", "Primary null hypothesis"], ["t / ANOVA", "The specified means are equal"], ["Sign", "Positive and negative differences are equally likely"], ["Signed-rank", "The difference distribution is symmetric around zero"], ["Rank-sum", "The two independent groups have the same distribution"], ["Median", "The proportions on both sides of the pooled median are equal"], ["Kruskal–Wallis", "All independent groups have the same distribution"], ["χ² independence", "Two categorical variables are independent"]] },
  { type: "paragraph", text: "Methods described broadly as a \"two-group comparison\" can test different hypotheses. A rank test can be interpreted as comparing medians only under additional conditions, such as similarly shaped distributions that differ solely by a location shift." },
  { type: "heading", text: "Checks after Using the Table" },
  { type: "list", ordered: true, items: ["See outliers, skewness, variance, and clusters in plots", "Write your research question and H₀ and check if your method answers the same question", "Check independence, pairing, expected counts, symmetry, homoscedasticity, ties", "Specify exact, permutation, and asymptotic methods and corrections for small samples.", "Report effect sizes and confidence intervals and do not reduce the analysis to p values alone"] },
];
