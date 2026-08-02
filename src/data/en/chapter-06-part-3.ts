export const welchAnovaEn = [
  { type: "paragraph", text: "Welch ANOVA compares the population means of multiple independent groups, but does not require that the variances of each group be equal. It is better suited than traditional one-way ANOVA when the standard deviations are different and the sample sizes are also unbalanced." },
  { type: "callout", tone: "intuition", label: "What does it solve?", text: "The conventional method assumes equal variance in order to merge the within-group sums of squares of all groups into a common MSE. The Welch method does not create a common MSE, but uses weights that depend on the sample size and variance of each group." },
  { type: "heading", text: "When to consider Welch ANOVA" },
  { type: "list", items: ["Compare population means of two or more independent groups", "The dependent variable is quantitative and the average is meaningful.", "Group variances are different or there is insufficient evidence for equal variances", "Unbalanced sample size, especially small sample size for high variance groups"] },
  { type: "paragraph", text: "Welch's method is not a universal replacement for non-normality. Independence is still necessary, and for strong distortions, extreme outliers, and small samples, we also consider graphical diagnostics, transformations, robust methods, and nonparametric methods that fit the research question." },
  { type: "heading", text: "Hypotheses and Assumptions" },
  { type: "formulaGroup", formulas: [
    { label: "null hypothesis", latex: "H_0:\\mu_1=\\mu_2=\\cdots=\\mu_k", fallback: "H₀: μ₁=μ₂=⋯=μₖ" },
    { label: "alternative hypothesis", latex: "H_1:\\text{Not all }\\mu_j\\text{ are equal}", fallback: "H₁: Not all μⱼ are equal" }
  ] },
  { type: "table", rows: [["conditions", "Welch ANOVA requirements"], ["independence", "Each observation is independent and belongs to only one group"], ["dependent variable", "Quantitative variables whose averages have meaning"], ["normality", "The errors in each group are approximately normal. Relatively robust in large samples"], ["homoscedasticity", "Not required"]] },
  { type: "heading", text: "Give More Weight to More Precise Groups" },
  { type: "paragraph", text: "The estimated variance of the j-th group mean is approximately sⱼ²/nⱼ. Groups with larger sample sizes or smaller sample variances have more accurate mean estimates, so they are given larger weights in proportion to their inverse variances." },
  { type: "formulaGroup", formulas: [
    { label: "weight of the jth group", latex: "w_j=\\frac{n_j}{s_j^2}", fallback: "wⱼ=nⱼ/sⱼ²" },
    { label: "total weight", latex: "W=\\sum_{j=1}^{k}w_j", fallback: "W=Σwⱼ" },
    { label: "weighted grand average", latex: "\\bar X_w=\\frac{\\sum_{j=1}^{k}w_j\\bar X_j}{W}", fallback: "X̄w=ΣwⱼX̄ⱼ/W" }
  ] },
  { type: "heading", text: "Welch F statistic" },
  { type: "paragraph", text: "The difference between each group mean and the weighted grand mean is weighted, and the denominator and degrees of freedom are adjusted by a correction amount A that reflects the uncertainty in the variance estimation." },
  { type: "formulaGroup", formulas: [
    { label: "Correction amount", latex: "A=\\sum_{j=1}^{k}\\frac{(1-w_j/W)^2}{n_j-1}", fallback: "A=Σ[(1−wⱼ/W)²/(nⱼ−1)]" },
    { label: "Welch F", latex: "F_W=\\frac{\\dfrac1{k-1}\\sum_{j=1}^{k}w_j(\\bar X_j-\\bar X_w)^2}{1+\\dfrac{2(k-2)}{k^2-1}A}", fallback: "FW={Σwⱼ(X̄ⱼ−X̄w)²/(k−1)}/{1+[2(k−2)/(k²−1)]A}" },
    { label: "Molecular degrees of freedom", latex: "\\nu_1=k-1", fallback: "ν₁=k−1" },
    { label: "Approximate denominator degrees of freedom", latex: "\\nu_2=\\frac{k^2-1}{3A}", fallback: "ν₂=(k²−1)/(3A)" }
  ] },
  { type: "paragraph", text: "Find the p-value from the right tail of the F distribution. Even if it is significant, the conclusion is that at least one group's means are different, but the location of the difference is not known." },
  { type: "heading", text: "Comparison with Classical ANOVA" },
  { type: "table", rows: [["item", "Traditional one-way ANOVA", "Welch ANOVA"], ["Variance assumption", "equal in all groups", "It's okay to be different"], ["within-group variation", "Merger into common MSE", "Weighting by group with nⱼ/sⱼ²"], ["degree of freedom", "k−1、n−k", "k−1, Welch–Satterthwaite approximation"], ["Main precautions", "Can be distorted due to unequal variance + imbalance", "Still be wary of small samples, strong distortions, and outliers."]] },
  { type: "callout", tone: "caution", label: "Do not switch methods just by using the Levene test", text: "Even one preliminary test has sampling error. The analysis policy is determined in advance by considering the research design, group sample size, distribution shape, variance difference, and robustness of each method." },
  { type: "heading", text: "After a Significant Overall Test" },
  { type: "paragraph", text: "We do not use LSD, pooled t, or regular Tukey HSD, which assumes a common MSE. For all pairwise comparisons, the Games–Howell method, which allows for unequal variances and unbalanced samples and also adjusts for multiplicity, is often used." },
  { type: "list", ordered: true, items: ["Report n, mean, standard deviation, and distribution for each group", "Welch F, numerator/approximate denominator degrees of freedom, p-value reported", "If significant, perform Games–Howell or planned unequal variance contrasts", "Includes mean difference, confidence interval, and adjusted p-value"] },
];

export const twoWayAndManovaEn = [
  { type: "paragraph", text: "Two-way ANOVA and multivariate analysis of variance (MANOVA) are extensions in different directions. Two-way ANOVA deals with two categorical factors for one quantitative dependent variable, while MANOVA deals with multiple related quantitative dependent variables simultaneously." },
  { type: "callout", tone: "intuition", label: "Do not confuse the names", text: "The “two-way” in two-way ANOVA means there are two factors, whereas “multivariate” means there are multiple dependent variables. If it has two factors and multiple dependent variables, it can be a two-way MANOVA." },
  { type: "heading", text: "Two-way ANOVA: Examining two factors simultaneously" },
  { type: "paragraph", text: "If treatment is factor A, gender is factor B, and blood pressure is the dependent variable, the main effect of A, the main effect of B, and the A×B interaction can be tested in the same model." },
  { type: "table", rows: [["effect", "What to ask"], ["Main effect of factor A", "When averaged at the level of B, does the mean differ between the levels of A?"], ["Main effect of factor B", "When averaged at the level of A, does the average differ between the levels of B?"], ["A×B interaction", "Does the effect of A change depending on the level of B?"]] },
  { type: "heading", text: "Two-way ANOVA model" },
  { type: "formula", latex: "Y_{ijk}=\\mu+\\alpha_i+\\beta_j+(\\alpha\\beta)_{ij}+\\varepsilon_{ijk}", fallback: "Yᵢⱼₖ=μ+αᵢ+βⱼ+(αβ)ᵢⱼ+εᵢⱼₖ" },
  { type: "table", rows: [["symbol", "meaning"], ["μ", "Grand average of all conditions"], ["αᵢ", "i-th level effect of factor A"], ["βⱼ", "j-th level effect of factor B"], ["(αβ)ᵢⱼ", "Interaction of level combinations"], ["εᵢⱼₖ", "Error not explained by model"]] },
  { type: "formulaGroup", formulas: [
    { label: "A main effect", latex: "H_{0,A}:\\alpha_1=\\cdots=\\alpha_a=0", fallback: "H₀,A: all αᵢ=0" },
    { label: "B main effect", latex: "H_{0,B}:\\beta_1=\\cdots=\\beta_b=0", fallback: "H₀,B: all βⱼ=0" },
    { label: "interaction", latex: "H_{0,AB}:(\\alpha\\beta)_{ij}=0\\quad\\text{for all }i,j", fallback: "H₀,AB: all (αβ)ᵢⱼ=0" }
  ] },
  { type: "heading", text: "Why Examine the Interaction First?" },
  { type: "paragraph", text: "If the interaction is significant, the effect of one factor depends on the level of the other. For example, if a drug is effective in only one sex, a sex-averaged drug main effect alone hides the data structure. Typically, you look at interactions first and then interpret the main effects." },
  { type: "callout", tone: "intuition", label: "Graphical intuition", text: "If one factor is the horizontal axis and the other level is a line, if the lines are almost parallel, there is a small interaction, but if the lines are clearly non-parallel or intersect, an interaction is suggested. Significance is determined by model testing." },
  { type: "paragraph", text: "Significant interactions are followed up with simple main effects, such as comparing treatments within each gender. These comparisons also require multiplicity adjustment." },
  { type: "heading", text: "Two-way ANOVA conditions" },
  { type: "list", items: ["Observations are independent. For repeated measurements, use repeated measures or mixed models", "Errors within each factor combination are approximately normal", "The error variance is equal for each combination", "There are enough observations in each cell to estimate the interaction"] },
  { type: "callout", tone: "caution", label: "Unbalanced designs", text: "If the number of cell samples is different, the test of a main effect may differ depending on whether Type I, II, or III sums of squares are used. Check your research hypotheses, contrasts, and estimability rather than relying solely on software defaults, especially when there are interactions or missing cells." },
  { type: "heading", text: "MANOVA: Examining Multiple Dependent Variables Simultaneously" },
  { type: "paragraph", text: "When measuring multiple related quantitative outcomes from the same subject, such as systolic blood pressure, diastolic blood pressure, and heart rate, MANOVA compares a vector of population means rather than a single mean for each group." },
  { type: "formulaGroup", formulas: [
    { label: "mean vector of jth group", latex: "\\boldsymbol{\\mu}_j=(\\mu_{j1},\\mu_{j2},\\ldots,\\mu_{jp})^{\\mathsf T}", fallback: "μⱼ=(μⱼ₁,…,μⱼₚ)ᵀ" },
    { label: "null hypothesis", latex: "H_0:\\boldsymbol{\\mu}_1=\\boldsymbol{\\mu}_2=\\cdots=\\boldsymbol{\\mu}_k", fallback: "H₀: The mean vectors of each group are equal" }
  ] },
  { type: "paragraph", text: "Performing separate ANOVAs for each dependent variable increases type I error due to multiple testing, and differences in combinations of results cannot be directly tested. MANOVA takes advantage of the covariance between the dependent variables." },
  { type: "heading", text: "Constructing a MANOVA Test" },
  { type: "paragraph", text: "Expand the between-group and within-group sums of squares of univariate ANOVA to sum of squares and cross-product matrices H (effect) and E (error), and create multivariate statistics from their eigenvalues." },
  { type: "table", rows: [["statistics", "interpretation"], ["Pillai's trace", "Relatively robust to assumption violations. The larger the difference, the greater the group difference."], ["Wilks' lambda", "The smaller the value, the larger the group difference in the mean vector."], ["Hotelling–Lawley trace", "Accumulate intergroup information for multiple discriminant directions"], ["Roy's largest root", "Focus on the one discriminant direction with the largest difference"]] },
  { type: "callout", tone: "intuition", label: "What a Significant MANOVA Means", text: "Although the overall profile created by multiple results indicates that there are group differences, subsequent analysis is required to determine which dependent variable, which group, and which linear combination is responsible." },
  { type: "heading", text: "MANOVA Assumptions and Limitations" },
  { type: "list", items: ["observations are independent", "The dependent variable vector for each group is approximately multivariate normal.", "The covariance matrices of each group are equal", "The dependent variables are related but not collinear enough to nearly overlap.", "There is a sufficient sample size to estimate the covariance of multiple dependent variables."] },
  { type: "paragraph", text: "If the variables of interest are largely unrelated, there is little benefit to integration, and if the correlations are extremely high, the same concept may be being measured redundantly. The variables of interest are selected in advance from the research question rather than after looking at the data." },
  { type: "heading", text: "Follow-Up Analyses after a Significant MANOVA" },
  { type: "list", ordered: true, items: ["See which multivariate tests for factors or interactions are significant", "Adjust multiplicity by performing ANOVA and planned contrast for each dependent variable according to the research question.", "Evaluate direction and substantive meaning from group mean vector, confidence interval, and effect size", "If necessary, examine the discriminant function or canonical variate and return to the original scale dependent variable for interpretation."] },
  { type: "heading", text: "Distinguishing the Three Methods" },
  { type: "table", rows: [["method", "categorical factor", "quantitative dependent variable", "main question"], ["One-way ANOVA", "1", "1", "Are the group means of one factor different?"], ["Two-way ANOVA", "2", "1", "Are there two main effects and an interaction?"], ["MANOVA", "1 or more", "2 or more", "Are the group mean vectors different?"]] },
  { type: "callout", tone: "forward", label: "Method-selection sequence", text: "Count the number of factors, the number of quantitative dependent variables, whether it is independent or repeated measures, and finally evaluate the variance/covariance assumptions. The method name is determined based on the research question and data structure." },
];
