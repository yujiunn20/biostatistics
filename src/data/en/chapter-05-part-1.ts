export const binomialTestEn = [
  { type: "paragraph", text: "A binomial test estimates the population proportion of a binary outcome. For one sample, the sample proportion p̂ is compared to the specified value π₀, and for two independent samples, p̂₁−p̂₂ is compared. We use the normal approximation Z test for large samples and the exact binomial method for small samples or rare events." },
  { type: "callout", tone: "forward", label: "two problems", text: "The one-sample proportion test deals with p̂ and π₀, and the independent two-proportion test deals with p̂₁−p̂₂. If the approximation conditions are not met, the discrete binomial distribution is used directly." },
  { type: "heading", text: "From number of successes to sample proportion" },
  { type: "paragraph", text: "If X~Binomial(n,π), then the sample proportion p̂=X/n. The mean and variance can be found using the law of linear transformation." },
  { type: "formulaGroup", formulas: [
    { label: "sample proportion", latex: "\\hat p=\\frac{X}{n}", fallback: "p̂=X/n" },
    { label: "Expected value", latex: "E(\\hat p)=\\pi", fallback: "E(p̂)=π" },
    { label: "variance", latex: "\\operatorname{Var}(\\hat p)=\\frac{\\pi(1-\\pi)}{n}", fallback: "Var(p̂)=π(1−π)/n" },
    { label: "standard error", latex: "\\operatorname{SE}(\\hat p)=\\sqrt{\\frac{\\pi(1-\\pi)}{n}}", fallback: "SE(p̂)=√[π(1−π)/n]" }
  ] },
  { type: "callout", tone: "intuition", label: "Don't confuse frequency and proportion variances", text: "The variance of X is nπ(1−π), but since p̂=X/n is divided by n², it becomes π(1−π)/n. The standard error is its square root." },
  { type: "heading", text: "Hypotheses for One Population Proportion" },
  { type: "formulaGroup", formulas: [
    { label: "both sides", latex: "H_0:\\pi=\\pi_0,\\qquad H_1:\\pi\\ne\\pi_0", fallback: "H₀: π=π₀；H₁: π≠π₀" },
    { label: "right side", latex: "H_0:\\pi\\leq\\pi_0,\\qquad H_1:\\pi>\\pi_0", fallback: "H₀: π≤π₀；H₁: π>π₀" },
    { label: "left", latex: "H_0:\\pi\\geq\\pi_0,\\qquad H_1:\\pi<\\pi_0", fallback: "H₀: π≥π₀；H₁: π<π₀" },
    { label: "1 ratio Z statistic", latex: "Z=\\frac{\\hat p-\\pi_0}{\\sqrt{\\pi_0(1-\\pi_0)/n}}", fallback: "Z=(p̂−π₀)/√[π₀(1−π₀)/n]" }
  ] },
  { type: "paragraph", text: "The denominator of the test is π₀ specified by H₀. This is to measure how much it fluctuates under H₀." },
  { type: "heading", text: "Confidence interval for one proportion" },
  { type: "formula", latex: "\\hat p\\pm z_{1-\\alpha/2}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}", fallback: "p̂±z·√[p̂(1−p̂)/n]" },
  { type: "callout", tone: "intuition", label: "Wald intervals are not always reliable", text: "If the sample is small or p̂ is close to 0.1, the Wald interval will deviate from [0,1] and the coverage will deteriorate. You can prioritize Wilson score intervals or appropriate exact intervals." },
  { type: "heading", text: "Connection to a Test for a Mean" },
  { type: "table", rows: [["subject", "estimator", "Standard error under H₀", "Z"], ["population mean μ", "X̄", "σ/√n", "(X̄−μ₀)/(σ/√n)"], ["population ratio π", "p̂", "√[π₀(1−π₀)/n]", "(p̂−π₀)/SE₀"]] },
  { type: "heading", text: "Two Independent Proportions" },
  { type: "formulaGroup", formulas: [
    { label: "ratio difference", latex: "D=\\hat p_1-\\hat p_2", fallback: "D=p̂₁−p̂₂" },
    { label: "variance", latex: "\\operatorname{Var}(D)=\\frac{\\pi_1(1-\\pi_1)}{n_1}+\\frac{\\pi_2(1-\\pi_2)}{n_2}", fallback: "Var(D)=π₁(1−π₁)/n₁+π₂(1−π₂)/n₂" }
  ] },
  { type: "callout", tone: "intuition", label: "Why add variance even when subtracting", text: "If they are independent, the covariance is 0, and the negative sign is squared by the variance. Therefore, the sampling variations of the two groups are added." },
  { type: "heading", text: "Estimate standard error from sample" },
  { type: "formula", latex: "\\widehat{\\operatorname{SE}}(\\hat p_1-\\hat p_2)=\\sqrt{\\frac{\\hat p_1(1-\\hat p_1)}{n_1}+\\frac{\\hat p_2(1-\\hat p_2)}{n_2}}", fallback: "SE(p̂₁−p̂₂)=√[p̂₁(1−p̂₁)/n₁+p̂₂(1−p̂₂)/n₂]" },
  { type: "heading", text: "Test that two proportions are equal" },
  { type: "paragraph", text: "For H₀:π₁=π₂, we assume a common proportion, and calculate the standard error under H₀ using the pooled proportion that combines the number of successes in the two groups." },
  { type: "formulaGroup", formulas: [
    { label: "Merger ratio", latex: "\\hat p=\\frac{x_1+x_2}{n_1+n_2}", fallback: "p̂=(x₁+x₂)/(n₁+n₂)" },
    { label: "Standard error under H₀", latex: "\\operatorname{SE}_0=\\sqrt{\\hat p(1-\\hat p)\\left(\\frac1{n_1}+\\frac1{n_2}\\right)}", fallback: "SE₀=√[p̂(1−p̂)(1/n₁+1/n₂)]" },
    { label: "two-proportion Z statistic", latex: "Z=\\frac{\\hat p_1-\\hat p_2}{\\operatorname{SE}_0}", fallback: "Z=(p̂₁−p̂₂)/SE₀" }
  ] },
  { type: "callout", tone: "intuition", label: "Weighted average instead of simple average", text: "Since the sample sizes are different, the merger ratio is the total number of successes divided by the total number of people. It matches (p̂₁+p̂₂)/2 only if n₁=n₂." },
  { type: "heading", text: "Confidence interval for the difference between two proportions" },
  { type: "formula", latex: "(\\hat p_1-\\hat p_2)\\pm z_{1-\\alpha/2}\\sqrt{\\frac{\\hat p_1(1-\\hat p_1)}{n_1}+\\frac{\\hat p_2(1-\\hat p_2)}{n_2}}", fallback: "(p̂₁−p̂₂)±z·SE" },
  { type: "paragraph", text: "The confidence interval does not force a common proportion of H₀, but instead estimates the standard error on the proportions of each group." },
  { type: "heading", text: "Normal approximation and exact method" },
  { type: "paragraph", text: "In normal approximation, check whether the expected number of successes and expected number of failures are sufficiently large. For small samples, extreme proportions, or rare events, consider the exact binomial test or the Fisher exact test for 2x2 tables." },
  { type: "heading", text: "Testing Procedure" },
  { type: "list", ordered: true, items: ["Confirm independence, binary outcomes, and study design", "Preset H₀, H₁, direction, and α", "Calculate the number of successes, sample size, and proportion for each group", "Check the approximation conditions and select Z or exact method", "Report p-values ​​and confidence intervals along with effect sizes"] },
];

export const chiSquareGoodnessOfFitEn = [
  { type: "paragraph", text: "The chi-square goodness-of-fit test examines whether the observed frequencies of a categorical variable fit a prespecified theoretical proportion." },
  { type: "callout", tone: "forward", label: "Core workflow", text: "Calculate the expected count Eᵢ from the specified proportion → Standardize the difference from the observed count Oᵢ → Square it and add it for all categories → Evaluate the overall deviation using the right tail of the chi-square distribution." },
  { type: "heading", text: "From binomial distribution to multinomial distribution" },
  { type: "paragraph", text: "If the probability of k exclusive categories is π₁,…,πk and the frequency is O₁,…,Ok, then the frequency vector follows a multinomial distribution." },
  { type: "formulaGroup", formulas: [
    { label: "sum of probabilities", latex: "\\sum_{i=1}^{k}\\pi_i=1", fallback: "Σπᵢ=1" },
    { label: "Expected count", latex: "E_i=n\\pi_i", fallback: "Eᵢ=nπᵢ" },
    { label: "Total frequency", latex: "\\sum_{i=1}^{k}O_i=n", fallback: "ΣOᵢ=n" }
  ] },
  { type: "callout", tone: "intuition", label: "The binomial distribution is a special case of two categories.", text: "If k=2, the probabilities are p and 1−p, and the frequencies are a and n−a. A one-proportion problem can be considered the simplest case of goodness-of-fit testing." },
  { type: "heading", text: "Data and model conditions" },
  { type: "list", items: ["Each unit of observation falls into only one category", "Observations are independent", "The total theoretical ratio is 1", "Chi-square approximation has sufficient expected power"] },
  { type: "callout", tone: "forward", label: "When the expected count is small", text: "Eᵢ≥5 is a general guideline and not an absolute rule. We consider meaningful category integration, exact method, and Monte Carlo method, and do not perform arbitrary integration for the sole purpose of satisfying a rule of thumb." },
  { type: "heading", text: "Hypotheses" },
  { type: "formulaGroup", formulas: [
    { label: "null hypothesis", latex: "H_0:\\pi_1=\\pi_{10},\\ldots,\\pi_k=\\pi_{k0}", fallback: "H₀: Each population proportion is equal to the specified proportion" },
    { label: "alternative hypothesis", latex: "H_1:\\text{at least one }\\pi_i\\ne\\pi_{i0}", fallback: "H₁: Different in at least one category" }
  ] },
  { type: "heading", text: "Pearson chi-square statistic" },
  { type: "formulaGroup", formulas: [
    { label: "statistics", latex: "\\chi^2=\\sum_{i=1}^{k}\\frac{(O_i-E_i)^2}{E_i}", fallback: "χ²=Σ(Oᵢ−Eᵢ)²/Eᵢ" },
    { label: "Degrees of Freedom", latex: "\\nu=k-1-m", fallback: "df=k−1−m (m is the parameter number estimated from the data)" }
  ] },
  { type: "callout", tone: "intuition", label: "Why Only the Right Tail?", text: "χ² is non-negative and increases as the observed count moves away from the expected count. Therefore, the p-value is P(χ²df≥χ²obs)." },
  { type: "heading", text: "For two categories" },
  { type: "paragraph", text: "O₁=a, O₂=n−a, and substituting the expected values ​​np and n(1−p) corresponds to the square of the one-proportion Z statistic." },
  { type: "formulaGroup", formulas: [
    { label: "Two categories χ²", latex: "\\chi^2=\\frac{(a-np)^2}{np(1-p)}", fallback: "χ²=(a−np)²/[np(1−p)]" },
    { label: "Relationship with Z", latex: "\\chi^2=Z^2", fallback: "χ²=Z²" }
  ] },
  { type: "callout", tone: "intuition", label: "The two categories are not two independent pieces of information.", text: "If a is determined, n−a is also determined. The number of degrees is negatively related and has one degree of freedom." },
  { type: "heading", text: "The reason why the degree of freedom is k−1" },
  { type: "paragraph", text: "Since the total number n is fixed, when k−1 frequencies are determined, the last one is automatically determined. If m parameters are estimated from the same data, subtract m further." },
  { type: "heading", text: "Difference with independence test" },
  { type: "table", rows: [["method", "Number of variables", "Expected count"], ["goodness of fit test", "one categorical variable", "Calculated from pre-specified theoretical proportions"], ["independence test", "two categorical variables", "Estimated from row and column marginal proportions"]] },
  { type: "heading", text: "Testing Procedure" },
  { type: "list", ordered: true, items: ["Predefine categories and theoretical proportions", "Calculate Eᵢ=nπᵢ and check the approximation conditions", "Calculate Pearson χ² and degrees of freedom", "Determine suitability from the right tail p-value", "If significant, check the residuals for each category and interpret the location of the deviation."] },
];
