export const tTestConceptEn = [
  { type: "paragraph", text: "The t-test tests the population mean or mean difference. Like the Z-test, it standardizes the observed difference by its standard error. The essential difference is not the form of the equation, but whether the population standard deviation σ is known." },
  { type: "callout", tone: "forward", label: "Core idea", text: "If σ is known, standardize it by σ/√n to get Z. If unknown, estimate using the sample standard deviation s. Since s itself varies from sample to sample, uncertainty increases, and the statistics follow a t distribution with degrees of freedom." },
  { type: "heading", text: "Starting from the Z Test" },
  { type: "paragraph", text: "The Z-score of an individual observation indicates how many population standard deviations it is from the population mean. The standard error σ/√n is used for the sample mean." },
  { type: "formulaGroup", formulas: [
    { label: "Z-score of individual observation", latex: "Z_i=\\frac{X_i-\\mu}{\\sigma}", fallback: "Zi=(Xi−μ)/σ" },
    { label: "center of sample mean", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
    { label: "standard error of the sample mean", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" },
    { label: "Z-statistic of the mean", latex: "Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}", fallback: "Z=(X̄−μ₀)/(σ/√n)" }
  ] },
  { type: "heading", text: "In Practice, the Population Standard Deviation σ Is Usually Unknown" },
  { type: "paragraph", text: "Since the complete population cannot be observed, not only μ but also σ are usually unknown. Estimate σ by calculating the sample standard deviation s from the same sample." },
  { type: "formulaGroup", formulas: [
    { label: "sample variance", latex: "s^2=\\frac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "s²=Σ(Xi−X̄)²/(n−1)" },
    { label: "sample standard deviation", latex: "s=\\sqrt{\\frac{\\sum_{i=1}^{n}(X_i-\\bar X)^2}{n-1}}", fallback: "s=√[Σ(Xi−X̄)²/(n−1)]" },
    { label: "Estimated standard error", latex: "\\widehat{\\operatorname{SE}}(\\bar X)=\\frac{s}{\\sqrt n}", fallback: "Estimated SE(X̄)=s/√n" }
  ] },
  { type: "callout", tone: "intuition", label: "Why is the denominator n−1?", text: "Since we estimated X̄ from the same data, the sum of n deviations is 0. There are n−1 directions in which it can vary independently, and the degrees of freedom are ν=n−1." },
  { type: "heading", text: "From the Z Statistic to the t Statistic" },
  { type: "paragraph", text: "σ is a fixed parameter, but s is a random variable. In an independent sample from a normal population, the chi-square variable U created from the standardized mean Z and sample variance is independent." },
  { type: "formulaGroup", formulas: [
    { label: "Standardization of the mean", latex: "Z=\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)", fallback: "Z=(X̄−μ)/(σ/√n) ~ N(0,1)" },
    { label: "Chi-square variable with sample variance", latex: "U=\\frac{(n-1)s^2}{\\sigma^2}\\sim\\chi^2_{n-1}", fallback: "U=(n−1)s²/σ² ~ χ²(n−1)" },
    { label: "independence", latex: "Z\\perp U", fallback: "Z and U are independent" },
    { label: "Construction of t-distribution", latex: "T=\\frac{Z}{\\sqrt{U/(n-1)}}\\sim t_{n-1}", fallback: "T=Z/√[U/(n−1)] ~ t(n−1)" },
    { label: "1-sample t-statistic", latex: "t=\\frac{\\bar X-\\mu_0}{s/\\sqrt n},\\qquad \\nu=n-1", fallback: "t=(X̄−μ₀)/(s/√n)，df=n−1" }
  ] },
  { type: "callout", tone: "intuition", label: "What the derivation shows", text: "t is a standard normal variable divided by a random measure resulting from a chi-square variable. The additional uncertainty in estimating σ from the sample produces thicker tails in the t-distribution." },
  { type: "heading", text: "Why we need degrees of freedom" },
  { type: "paragraph", text: "The lower the degrees of freedom, the greater the variation in s, and the t-distribution puts more probability in the tails. As the degrees of freedom increase, s becomes more stable and approaches the standard normal distribution." },
  { type: "formula", latex: "t_\\nu\\xrightarrow[\\nu\\to\\infty]{d}N(0,1)", fallback: "As df→∞, the t distribution approaches N(0,1)" },
  { type: "callout", tone: "intuition", label: "n≥30 is not a fixed boundary", text: "If σ is unknown, the t-test is correct even with a large sample, and there is no need to switch to the Z-test. In large samples they are only very close together." },
  { type: "heading", text: "Comparing the Z Test and t Test" },
  { type: "table", rows: [["Item", "Z test", "t test"], ["population standard deviation", "σ known", "σ unknown, estimated by s"], ["standard error", "σ/√n", "s/√n"], ["reference distribution", "N(0,1)", "t distribution"], ["degree of freedom", "Not applicable", "Required"], ["tails", "lighter", "heavier at low degrees of freedom"]] },
  { type: "heading", text: "Types of t Tests" },
  { type: "table", rows: [["method", "question", "Difference to analyze"], ["one sample t test", "Is the population mean equal to μ₀?", "X̄−μ₀"], ["paired t-test", "Is the population mean of the correspondence difference 0?", "Create each difference dᵢ and analyze d̄"], ["Independent two-sample t-test", "Are two independent population means the same?", "X̄₁−X̄₂"]] },
  { type: "heading", text: "Basic Assumptions of t Tests" },
  { type: "list", items: ["Random sampling or appropriate randomization and independence in line with the research design", "Quantitative data for which averages and differences can be reasonably calculated", "Check the observed value in one sample, the difference in paired cases, and the distribution of each group and model error in two independent samples.", "Beware of strong distortions and outliers in small samples", "For two independent samples, distinguish between pooled t with equal variance and Welch t, ​​which corresponds to unequal variance."] },
];

export const oneSampleTTestEn = [
  { type: "paragraph", text: "The one-sample t-test examines whether the mean of a quantitative variable in one sample differs from a prespecified constant μ₀. For μ₀, national averages, product standards, reference values, research thresholds, etc. can be used." },
  { type: "heading", text: "What Does “One Sample” Mean?" },
  { type: "paragraph", text: "It means a group of representative samples obtained from one population, and does not mean that there is only one observed value. Measurements are quantitative variables such as scores, life spans, survival times, etc. for which averages can be reasonably calculated." },
  { type: "heading", text: "State the Hypotheses" },
  { type: "formulaGroup", formulas: [
    { label: "two-sided", latex: "H_0:\\mu=\\mu_0,\\qquad H_1:\\mu\\ne\\mu_0", fallback: "H₀: μ=μ₀；H₁: μ≠μ₀" },
    { label: "right-tailed", latex: "H_0:\\mu\\leq\\mu_0,\\qquad H_1:\\mu>\\mu_0", fallback: "H₀: μ≤μ₀；H₁: μ>μ₀" },
    { label: "left-tailed", latex: "H_0:\\mu\\geq\\mu_0,\\qquad H_1:\\mu<\\mu_0", fallback: "H₀: μ≥μ₀；H₁: μ<μ₀" }
  ] },
  { type: "heading", text: "Test Statistic" },
  { type: "formulaGroup", formulas: [
    { label: "σ known", latex: "Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}", fallback: "Z=(X̄−μ₀)/(σ/√n)" },
    { label: "σ unknown", latex: "t=\\frac{\\bar X-\\mu_0}{s/\\sqrt n}", fallback: "t=(X̄−μ₀)/(s/√n)" },
    { label: "degree of freedom", latex: "\\nu=n-1", fallback: "df=n−1" }
  ] },
  { type: "callout", tone: "intuition", label: "If n>30, should I change it to Z?", text: "In large samples, the t distribution approaches the standard normal distribution, but the unknown σ does not become known. If σ is unknown, you can use the t-test, and the results will be very close to the Z-test." },
  { type: "heading", text: "Testing Procedure" },
  { type: "list", ordered: true, items: ["Predetermine μ₀, H₀, H₁, direction, α", "Calculate n, X̄, s", "Find t=(X̄−μ₀)/(s/√n), df=n−1", "Find the p-value from the t-distribution and compare it with α to interpret the conclusion"] },
  { type: "callout", tone: "forward", label: "Statistical decision", text: "If p≤α, we reject H₀; if p>α, we do not reject it. Not rejecting H₀ does not prove that H₀ is true or that the values are identical." },
];

export const pairedTTestEn = [
  { type: "paragraph", text: "A paired t-test examines the mean difference between quantitative variables in two related samples. We match each observation one-to-one, create the difference between each pair, and test whether the population mean is 0." },
  { type: "heading", text: "What Are Paired Samples?" },
  { type: "table", rows: [["Relationship", "Example"], ["Measure the same object twice", "Evaluation of two conditions before and after training"], ["Natural pairs", "Identical twins or matched partners"], ["Matched design", "Match similar participants and assign them to different treatments"]] },
  { type: "paragraph", text: "Each Xᵢ must have a clear Yᵢ and must not be rearranged arbitrarily." },
  { type: "heading", text: "Calculate the difference between each pair first" },
  { type: "formulaGroup", formulas: [
    { label: "difference of i-th pair", latex: "d_i=X_i-Y_i", fallback: "dᵢ=Xᵢ−Yᵢ" },
    { label: "mean difference", latex: "\\bar d=\\frac{1}{n}\\sum_{i=1}^{n}d_i", fallback: "d̄=Σdᵢ/n" },
    { label: "standard deviation of difference", latex: "s_d=\\sqrt{\\frac{\\sum_{i=1}^{n}(d_i-\\bar d)^2}{n-1}}", fallback: "s_d=√[Σ(dᵢ−d̄)²/(n−1)]" },
    { label: "Paired t-statistic", latex: "t=\\frac{\\bar d-\\mu_{d,0}}{s_d/\\sqrt n},\\qquad \\nu=n-1", fallback: "t=(d̄−μd,0)/(s_d/√n)，df=n−1" }
  ] },
  { type: "callout", tone: "intuition", label: "n is the number of pairs", text: "If you measure 30 people twice, before and after, there are 60 values, but the difference is 30, so n=30 and 29 degrees of freedom." },
  { type: "heading", text: "Hypotheses" },
  { type: "formulaGroup", formulas: [
    { label: "two-sided", latex: "H_0:\\mu_d=0,\\qquad H_1:\\mu_d\\ne0", fallback: "H₀: μd=0；H₁: μd≠0" },
    { label: "right-tailed", latex: "H_0:\\mu_d\\leq0,\\qquad H_1:\\mu_d>0", fallback: "H₀: μd≤0；H₁: μd>0" },
    { label: "left-tailed", latex: "H_0:\\mu_d\\geq0,\\qquad H_1:\\mu_d<0", fallback: "H₀: μd≥0；H₁: μd<0" }
  ] },
  { type: "paragraph", text: "The sign of the difference is determined by the order X−Y. Reversing the order reverses the sign of t, but the two-sided p-value remains the same." },
  { type: "heading", text: "Testing Procedure" },
  { type: "list", ordered: true, items: ["Confirm that you can respond correctly one-on-one", "Calculate dᵢ by fixing the direction of the difference", "Calculate d̄, s_d, t, df=n−1", "Determine by finding the p value from the t distribution"] },
  { type: "callout", tone: "forward", label: "The target of analysis is the difference", text: "The normality condition is for the distribution of the difference dᵢ, not for X and Y respectively. Difference outliers strongly influence the results." },
  { type: "heading", text: "Relationship to Repeated-Measures ANOVA" },
  { type: "paragraph", text: "If there are only two corresponding conditions, one-way repeated-measures ANOVA can be used, and the same significance conclusion will be reached for the same hypothesis." },
  { type: "formula", latex: "F=t^2", fallback: "F=t²" },
];

export const independentTTestEn = [
  { type: "paragraph", text: "The independent two-sample t-test compares the population means of two unrelated groups for a quantitative variable. One observation unit belongs to only one group, and there is no one-to-one correspondence between groups." },
  { type: "heading", text: "Data Structure" },
  { type: "table", rows: [["variable", "format"], ["independent variable", "Two groups of unrelated categorical variables"], ["dependent variable", "Quantitative variables whose averages can be calculated"], ["targets for comparison", "Population mean difference μ₁−μ₂"]] },
  { type: "paragraph", text: "The two groups cannot be subtracted individually. X̄₁−X̄₂ is a linear combination of independent random variables whose variance is the sum of the variances of each mean." },
  { type: "formulaGroup", formulas: [
    { label: "mean difference", latex: "D=\\bar X_1-\\bar X_2", fallback: "D=X̄₁−X̄₂" },
    { label: "Independent mean difference variance", latex: "\\operatorname{Var}(D)=\\frac{\\sigma_1^2}{n_1}+\\frac{\\sigma_2^2}{n_2}", fallback: "Var(D)=σ₁²/n₁+σ₂²/n₂" }
  ] },
  { type: "heading", text: "Hypotheses" },
  { type: "formulaGroup", formulas: [
    { label: "two-sided", latex: "H_0:\\mu_1-\\mu_2=0,\\qquad H_1:\\mu_1-\\mu_2\\ne0", fallback: "H₀: μ₁−μ₂=0；H₁: μ₁−μ₂≠0" },
    { label: "right-tailed", latex: "H_0:\\mu_1-\\mu_2\\leq0,\\qquad H_1:\\mu_1-\\mu_2>0", fallback: "H₀: μ₁−μ₂≤0；H₁: μ₁−μ₂>0" },
    { label: "left-tailed", latex: "H_0:\\mu_1-\\mu_2\\geq0,\\qquad H_1:\\mu_1-\\mu_2<0", fallback: "H₀: μ₁−μ₂≥0；H₁: μ₁−μ₂<0" }
  ] },
  { type: "heading", text: "When variances are different: Welch t-test" },
  { type: "formulaGroup", formulas: [
    { label: "Estimated variance of mean difference", latex: "\\widehat{\\operatorname{Var}}(\\bar X_1-\\bar X_2)=\\frac{s_1^2}{n_1}+\\frac{s_2^2}{n_2}", fallback: "Estimated Var(X̄₁−X̄₂)=s₁²/n₁+s₂²/n₂" },
    { label: "Welch t", latex: "t=\\frac{(\\bar X_1-\\bar X_2)-\\Delta_0}{\\sqrt{s_1^2/n_1+s_2^2/n_2}}", fallback: "t=[(X̄₁−X̄₂)−Δ₀]/√(s₁²/n₁+s₂²/n₂)" },
    { label: "Welch–Satterthwaite degrees of freedom", latex: "\\nu\\approx\\frac{\\left(s_1^2/n_1+s_2^2/n_2\\right)^2}{\\dfrac{(s_1^2/n_1)^2}{n_1-1}+\\dfrac{(s_2^2/n_2)^2}{n_2-1}}", fallback: "Welch–Satterthwaite approximation degrees of freedom" }
  ] },
  { type: "heading", text: "When variances are equal: pooled t-test" },
  { type: "formulaGroup", formulas: [
    { label: "pool distribution", latex: "s_p^2=\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}", fallback: "sₚ²=[(n₁−1)s₁²+(n₂−1)s₂²]/(n₁+n₂−2)" },
    { label: "pooled standard error", latex: "\\operatorname{SE}_p=\\sqrt{s_p^2\\left(\\frac1{n_1}+\\frac1{n_2}\\right)}", fallback: "SEₚ=√[sₚ²(1/n₁+1/n₂)]" },
    { label: "Pooled t", latex: "t=\\frac{(\\bar X_1-\\bar X_2)-\\Delta_0}{\\sqrt{s_p^2(1/n_1+1/n_2)}},\\qquad \\nu=n_1+n_2-2", fallback: "pooled t、df=n₁+n₂−2" }
  ] },
  { type: "table", rows: [["method", "Variance assumption", "degree of freedom"], ["Welch t", "Do not require σ₁²=σ₂²", "Welch–Satterthwaite approximation"], ["Pooled t", "Assuming σ₁²=σ₂²", "n₁+n₂−2"]] },
  { type: "heading", text: "Testing Procedure" },
  { type: "list", ordered: true, items: ["Confirm the independence and quantitative data of the two groups", "Set H₀, H₁, direction, α", "Calculate n, X̄, s for each group and choose Welch or pooled", "Find and interpret p-value from t and degrees of freedom"] },
  { type: "heading", text: "Relationship to One-Way ANOVA" },
  { type: "paragraph", text: "When using the same equal variance model with two independent groups, the t-test and one-way ANOVA give the same significance conclusion." },
  { type: "formula", latex: "F=t^2", fallback: "F=t²" },
];

export const varianceInferenceEn = [
  { type: "paragraph", text: "Estimating the population variance determines whether the dispersion of the data is equal to a specified criterion or whether the variances of two populations are equal. In a normal population, the chi-square distribution is used for one population variance, and the F distribution is used for the ratio of two independent population variances." },
  { type: "callout", tone: "forward", label: "Two distinct questions", text: "The one population χ² test compares σ² and σ₀², and the two population F test compares σ₁² and σ₂². The latter is related to the equal variance assumption of pooled t, but is not a necessary step before comparing means." },
  { type: "heading", text: "Chi-Square Test for One Population Variance" },
  { type: "formulaGroup", formulas: [
    { label: "two-sided", latex: "H_0:\\sigma^2=\\sigma_0^2,\\qquad H_1:\\sigma^2\\ne\\sigma_0^2", fallback: "H₀: σ²=σ₀²；H₁: σ²≠σ₀²" },
    { label: "left-tailed", latex: "H_0:\\sigma^2\\geq\\sigma_0^2,\\qquad H_1:\\sigma^2<\\sigma_0^2", fallback: "H₀: σ²≥σ₀²；H₁: σ²<σ₀²" },
    { label: "right-tailed", latex: "H_0:\\sigma^2\\leq\\sigma_0^2,\\qquad H_1:\\sigma^2>\\sigma_0^2", fallback: "H₀: σ²≤σ₀²；H₁: σ²>σ₀²" }
  ] },
  { type: "heading", text: "Constructing the chi-square statistic" },
  { type: "paragraph", text: "If we estimate μ by X̄ in an independent sample of a normal population, we lose one degree of freedom, and the standardization of the sample variance follows a chi-square distribution with n−1 degrees of freedom." },
  { type: "formulaGroup", formulas: [
    { label: "μ known", latex: "\\frac{\\sum_{i=1}^{n}(X_i-\\mu)^2}{\\sigma^2}\\sim\\chi_n^2", fallback: "Σ(Xᵢ−μ)²/σ² ~ χ²(n)" },
    { label: "Estimate μ with X̄", latex: "\\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi_{n-1}^2", fallback: "(n−1)S²/σ² ~ χ²(n−1)" },
    { label: "Observation statistics under H₀", latex: "\\chi_{\\mathrm{obs}}^2=\\frac{(n-1)S^2}{\\sigma_0^2}", fallback: "χ²obs=(n−1)S²/σ₀²" }
  ] },
  { type: "heading", text: "Rejection region for two-tailed test" },
  { type: "formula", latex: "\\chi_{\\mathrm{obs}}^2<\\chi_{\\alpha/2,\\,n-1}^2\\quad\\text{or}\\quad\\chi_{\\mathrm{obs}}^2>\\chi_{1-\\alpha/2,\\,n-1}^2", fallback: "χ²obs exceeds the critical value on either the left or right side" },
  { type: "heading", text: "F Test for Two Population Variances" },
  { type: "formulaGroup", formulas: [
    { label: "Equal variance hypothesis", latex: "H_0:\\sigma_1^2=\\sigma_2^2,\\qquad H_1:\\sigma_1^2\\ne\\sigma_2^2", fallback: "H₀: σ₁²=σ₂²；H₁: σ₁²≠σ₂²" },
    { label: "F-statistic", latex: "F=\\frac{S_1^2}{S_2^2}\\sim F_{n_1-1,\\,n_2-1}", fallback: "F=S₁²/S₂² ~ F(n₁−1,n₂−1)" }
  ] },
  { type: "paragraph", text: "If we exchange the numerator and denominator, F becomes 1/F, and we also exchange the two degrees of freedom." },
  { type: "heading", text: "Why the F-test arises from two chi-square variables" },
  { type: "formulaGroup", formulas: [
    { label: "Group 1", latex: "U_1=\\frac{(n_1-1)S_1^2}{\\sigma^2}\\sim\\chi_{n_1-1}^2", fallback: "U₁~χ²(n₁−1)" },
    { label: "2nd group", latex: "U_2=\\frac{(n_2-1)S_2^2}{\\sigma^2}\\sim\\chi_{n_2-1}^2", fallback: "U₂~χ²(n₂−1)" },
    { label: "ratio divided by degrees of freedom", latex: "\\frac{U_1/(n_1-1)}{U_2/(n_2-1)}=\\frac{S_1^2}{S_2^2}\\sim F_{n_1-1,\\,n_2-1}", fallback: "S₁²/S₂²~F(n₁−1,n₂−1)" }
  ] },
  { type: "heading", text: "Relationship to the Pooled and Welch t Tests" },
  { type: "table", rows: [["Method", "Question", "Setting"], ["One-population variance χ² test", "σ²=σ₀²?", "one normal population"], ["Two-population variance F test", "σ₁²=σ₂²?", "two independent normal populations"], ["Pooled t", "μ₁=μ₂?", "Adds an equal-variance assumption"], ["Welch t", "μ₁=μ₂?", "Does not require equal variances"]] },
  { type: "callout", tone: "intuition", label: "Do not confuse the hypotheses", text: "H₀ in the F test is equality of variances, and H₀ in pooled t is equality of means. Using the equal variance model is not the same hypothesis." },
  { type: "callout", tone: "forward", label: "In practice, the F test is not necessarily performed first", text: "F-tests are sensitive to non-normality, and choosing a method after pretesting changes the entire inference procedure. In the absence of sufficient homoscedasticity evidence, it is common to use Welch t directly in practice." },
];
