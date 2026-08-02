export const oneWayAnovaEn = [
  { type: "paragraph", text: "One-way ANOVA compares the population means of three or more independent groups at once. The total variation is decomposed into between-group variation and within-group variation, and the ratio determines whether the group effect is sufficiently larger than chance variation." },
  { type: "callout", tone: "forward", label: "Core idea", text: "Variations that can be explained by grouping are treated as models, individual differences within the same group are treated as errors, and MSM/MSE is treated as an F statistic. The larger F, the harder it is to explain the null hypothesis that all population means are equal." },
  { type: "heading", text: "The core of ANOVA: treating grouping as a model" },
  { type: "formulaGroup", formulas: [
    { label: "F-statistic", latex: "F=\\frac{MS_{\\mathrm{between}}}{MS_{\\mathrm{within}}}=\\frac{MS_M}{MS_E}", fallback: "F=MSbetween/MSwithin=MSM/MSE" },
    { label: "Distribution under H₀", latex: "F\\sim F_{k-1,\\,n-k}", fallback: "F~F(k−1,n−k)" }
  ] },
  { type: "heading", text: "Data Structure and Assumptions" },
  { type: "table", rows: [["item", "requirements"], ["explanatory variables", "One categorical factor (k levels)"], ["dependent variable", "Quantitative variables whose averages have meaning"], ["sample", "Each object belongs to only one independent group"], ["null hypothesis", "The population means of all groups are equal"]] },
  { type: "list", items: ["observation units are independent of each other", "Errors in each group are approximately normally distributed", "Each group has a common error variance σ²", "The dependent variable is quantitative and mean comparison is meaningful for research."] },
  { type: "callout", tone: "caution", label: "Model diagnostics", text: "Rather than relying solely on the pre-test p-value, we also evaluate group distributions, residual plots, sample size balance, outliers, and research design. If unequal variance is a problem, Welch ANOVA is a good candidate." },
  { type: "heading", text: "Why can we merge within-group sums of squares?" },
  { type: "formulaGroup", formulas: [
    { label: "Within-group sum of squares of group j", latex: "SS_{E,j}=\\sum_{i=1}^{n_j}(X_{ij}-\\bar X_j)^2", fallback: "SSE,j=Σᵢ(Xᵢⱼ−X̄ⱼ)²" },
    { label: "Merge all groups", latex: "SS_E=\\sum_{j=1}^{k}\\sum_{i=1}^{n_j}(X_{ij}-\\bar X_j)^2", fallback: "SSE=ΣⱼΣᵢ(Xᵢⱼ−X̄ⱼ)²" },
    { label: "Estimation of common within-group variance", latex: "MS_E=\\frac{SS_E}{n-k}", fallback: "MSE=SSE/(n−k)" },
    { label: "Within-group degrees of freedom", latex: "\\sum_{j=1}^{k}(n_j-1)=n-k", fallback: "Σⱼ(nⱼ−1)=n−k" }
  ] },
  { type: "paragraph", text: "If each group estimates the same error variance, the independent error information for each group can be weighted and merged by degrees of freedom. This result is MSE." },
  { type: "heading", text: "Why does the ratio of squares have an F distribution?" },
  { type: "formulaGroup", formulas: [
    { label: "between groups", latex: "\\frac{SS_M}{\\sigma^2}\\sim\\chi^2_{k-1}", fallback: "SSM/σ²~χ²(k−1)" },
    { label: "within the group", latex: "\\frac{SS_E}{\\sigma^2}\\sim\\chi^2_{n-k}", fallback: "SSE/σ²~χ²(n−k)" }
  ] },
  { type: "formula", latex: "\\frac{(SS_M/\\sigma^2)/(k-1)}{(SS_E/\\sigma^2)/(n-k)}=\\frac{MS_M}{MS_E}\\sim F_{k-1,\\,n-k}", fallback: "MSM/MSE~F(k−1,n−k)" },
  { type: "paragraph", text: "Under H₀ both equations estimate σ², so the ratio is roughly around 1. If the group means differ, MSM increases and F increases to the right." },
  { type: "heading", text: "Hypotheses" },
  { type: "formulaGroup", formulas: [
    { label: "null hypothesis", latex: "H_0:\\mu_1=\\mu_2=\\cdots=\\mu_k", fallback: "H₀: μ₁=μ₂=⋯=μₖ" },
    { label: "alternative hypothesis", latex: "H_1:\\text{Not all }\\mu_j\\text{ are equal}", fallback: "H₁: Not all μⱼ are equal" },
    { label: "equivalent expression", latex: "H_1:\\exists\\,j\\ne\\ell\\text{ such that }\\mu_j\\ne\\mu_\\ell", fallback: "At least one set of population means differs" }
  ] },
  { type: "callout", tone: "intuition", label: "Even if it is significant, it does not necessarily mean that all groups are different.", text: "An overall F-test only indicates at least one difference. Planned contrasts or post hoc comparisons are required to locate differences." },
  { type: "heading", text: "Symbols and one-way models" },
  { type: "formulaGroup", formulas: [
    { label: "jth group average", latex: "\\bar X_j=\\frac{1}{n_j}\\sum_{i=1}^{n_j}X_{ij}", fallback: "X̄ⱼ=(1/nⱼ)ΣXᵢⱼ" },
    { label: "grand average", latex: "\\bar X_{\\cdot\\cdot}=\\frac{1}{n}\\sum_{j=1}^{k}n_j\\bar X_j", fallback: "X̄··=(1/n)ΣnⱼX̄ⱼ" },
    { label: "population model", latex: "X_{ij}=\\mu+\\alpha_j+\\varepsilon_{ij}", fallback: "Xᵢⱼ=μ+αⱼ+εᵢⱼ" },
    { label: "error", latex: "\\varepsilon_{ij}\\overset{\\mathrm{iid}}{\\sim}N(0,\\sigma^2)", fallback: "εᵢⱼ iid~N(0,σ²)" }
  ] },
  { type: "formula", latex: "\\underbrace{X_{ij}-\\bar X_{\\cdot\\cdot}}_{\\text{total deviation}}=\\underbrace{\\bar X_j-\\bar X_{\\cdot\\cdot}}_{\\text{between groups}}+\\underbrace{X_{ij}-\\bar X_j}_{\\text{within group}}", fallback: "Total deviation = between-group deviation + within-group deviation" },
  { type: "heading", text: "Decomposing the Sum of Squares" },
  { type: "formulaGroup", formulas: [
    { label: "within-group sum of squares", latex: "SS_E=\\sum_j\\sum_i(X_{ij}-\\bar X_j)^2", fallback: "SSE=ΣⱼΣᵢ(Xᵢⱼ−X̄ⱼ)²" },
    { label: "between-group sum of squares", latex: "SS_M=\\sum_j n_j(\\bar X_j-\\bar X_{\\cdot\\cdot})^2", fallback: "SSM=Σⱼnⱼ(X̄ⱼ−X̄··)²" },
    { label: "total sum of squares", latex: "SS_T=\\sum_j\\sum_i(X_{ij}-\\bar X_{\\cdot\\cdot})^2", fallback: "SST=ΣⱼΣᵢ(Xᵢⱼ−X̄··)²" },
    { label: "Decomposition", latex: "SS_T=SS_M+SS_E", fallback: "SST=SSM+SSE" }
  ] },
  { type: "heading", text: "Degrees of Freedom, Mean Squares, and the F Test" },
  { type: "table", rows: [["source of variation", "sum of squares", "degree of freedom", "Uniform square"], ["between groups", "SSM", "k−1", "SSM/(k−1)"], ["within the group", "SSE", "n−k", "SSE/(n−k)"], ["whole", "SST", "n−1", "—"]] },
  { type: "formulaGroup", formulas: [
    { label: "F-statistic", latex: "F_{\\mathrm{obs}}=\\frac{MS_M}{MS_E}", fallback: "Fobs=MSM/MSE" },
    { label: "right tail p-value", latex: "p=P\\!\\left(F_{k-1,\\,n-k}\\ge F_{\\mathrm{obs}}\\mid H_0\\right)", fallback: "p=P[F≥Fobs|H₀]" },
    { label: "degree of freedom decomposition", latex: "n-1=(k-1)+(n-k)", fallback: "n−1=(k−1)+(n−k)" }
  ] },
  { type: "heading", text: "Complete Analysis Procedure" },
  { type: "list", ordered: true, items: ["Confirm study design, independence, factor levels, and dependent variables", "Check n, mean, standard deviation, distribution, and outliers by group", "Diagnose residuals and homoscedasticity and select Welch method if necessary", "Calculate sum of squares, degrees of freedom, mean squares, F, p-value", "If significant, perform planned contrasts or post hoc comparisons adjusted for multiplicity.", "Report mean differences, confidence intervals, effect sizes, assumptions and limitations"] },
  { type: "heading", text: "With Two Groups, F=t²" },
  { type: "paragraph", text: "With two independent groups assuming equal variances, one-way ANOVA and pooled t-tests test the same null hypothesis." },
  { type: "formulaGroup", formulas: [
    { label: "Pooled t", latex: "t=\\frac{\\bar X_1-\\bar X_2}{\\sqrt{s_p^2(1/n_1+1/n_2)}}", fallback: "t=(X̄₁−X̄₂)/√[sₚ²(1/n₁+1/n₂)]" },
    { label: "pooled variance", latex: "s_p^2=\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}", fallback: "sₚ²=[(n₁−1)s₁²+(n₂−1)s₂²]/(n₁+n₂−2)" },
    { label: "MSE of ANOVA", latex: "MS_E=s_p^2", fallback: "MSE=sₚ²" },
    { label: "Between-group equation", latex: "MS_M=\\frac{(\\bar X_1-\\bar X_2)^2}{1/n_1+1/n_2}", fallback: "MSM=(X̄₁−X̄₂)²/(1/n₁+1/n₂)" },
    { label: "conclusion", latex: "\\boxed{F=t^2}", fallback: "F=t²" }
  ] },
  { type: "callout", tone: "intuition", label: "The direction is read from the mean difference.", text: "Two-group two-tailed t-test and ANOVA give the same p-value, but the sign disappears due to the square, so the direction of the difference is read from the group mean or mean difference." },
  { type: "heading", text: "Extensions of ANOVA" },
  { type: "paragraph", text: "Consider Welch ANOVA for unequal variances, two-way ANOVA that handles main effects and interactions for two factors, MANOVA for multiple quantitative dependent variables, and repeated measures or mixed models for repeated measurements." },
];
