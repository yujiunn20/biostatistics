export const fisherZTransformationEn = [
  { type: "paragraph", text: "The sampling distribution of the sample correlation coefficient r is asymmetric, especially when |ρ| is large, and the variance also depends on ρ. The Fisher? z transformation maps r over the real numbers, making the distribution more normal and approximately constant in variance, making it possible to compare confidence intervals and correlation coefficients." },
  { type: "heading", text: "Fisher? z Transformation" },
  { type: "formulaGroup", formulas: [
    { label: "sample correlation", latex: "z_r=\\frac12\\ln\\left(\\frac{1+r}{1-r}\\right)=\\operatorname{arctanh}(r)", fallback: "zᵣ=½ln[(1+r)/(1−r)]" },
    { label: "population correlation", latex: "z_\\rho=\\frac12\\ln\\left(\\frac{1+\\rho}{1-\\rho}\\right)", fallback: "zρ=½ln[(1+ρ)/(1−ρ)]" },
    { label: "Inverse transformation", latex: "r=\\tanh(z_r)=\\frac{e^{2z_r}-1}{e^{2z_r}+1}", fallback: "r=tanh(zᵣ)" }
  ] },
  { type: "formula", latex: "z(r)\\approx N\\left(z(\\rho),\\frac1{n-3}\\right),\\qquad SE[z(r)]\\approx\\frac1{\\sqrt{n-3}}", fallback: "z(r)≈N[z(ρ),1/(n−3)]" },
  { type: "heading", text: "Test whether ρ is equal to a specified value" },
  { type: "formulaGroup", formulas: [
    { label: "hypothesis", latex: "H_0:\\rho=\\rho_0,\\qquad H_1:\\rho\\ne\\rho_0", fallback: "H₀:ρ=ρ₀; H₁:ρ≠ρ₀" },
    { label: "Z statistic", latex: "Z=\\frac{z(r)-z(\\rho_0)}{1/\\sqrt{n-3}}", fallback: "Z=[z(r)−z(ρ₀)]/[1/√(n−3)]" }
  ] },
  { type: "paragraph", text: "The t-test on the previous page is an accurate standard method for testing ρ₀=0. Fisher Z is particularly useful for comparing nonzero specified values, confidence intervals, and independent correlations." },
  { type: "heading", text: "Confidence Interval for the Population Correlation" },
  { type: "formulaGroup", formulas: [
    { label: "lower limit", latex: "L_z=z(r)-z_{1-\\alpha/2}\\frac1{\\sqrt{n-3}}", fallback: "Lz=z(r)−z/√(n−3)" },
    { label: "upper limit", latex: "U_z=z(r)+z_{1-\\alpha/2}\\frac1{\\sqrt{n-3}}", fallback: "Uz=z(r)+z/√(n−3)" },
    { label: "Return to r scale", latex: "CI_\\rho=[\\tanh(L_z),\\tanh(U_z)]", fallback: "CIρ=[tanh(Lz),tanh(Uz)]" }
  ] },
  { type: "callout", tone: "intuition", label: "Why Is the Interval Asymmetric?", text: "Even if it is symmetric on the z scale, it becomes asymmetric on the r scale when tanh is returned to −1 to 1. This is not an error and correctly reflects the boundaries of the correlation coefficient." },
  { type: "heading", text: "Comparing Correlations from Two Independent Groups" },
  { type: "formulaGroup", formulas: [
    { label: "hypothesis", latex: "H_0:\\rho_1=\\rho_2,\\qquad H_1:\\rho_1\\ne\\rho_2", fallback: "H₀:ρ₁=ρ₂; H₁:ρ₁≠ρ₂" },
    { label: "Transform each group", latex: "z_1=z(r_1),\\qquad z_2=z(r_2)", fallback: "z₁=z(r₁), z₂=z(r₂)" },
    { label: "standard error of difference", latex: "SE(z_1-z_2)=\\sqrt{\\frac1{n_1-3}+\\frac1{n_2-3}}", fallback: "SE=√[1/(n₁−3)+1/(n₂−3)]" },
    { label: "Comparison Z", latex: "Z=\\frac{z(r_1)-z(r_2)}{\\sqrt{1/(n_1-3)+1/(n_2-3)}}", fallback: "Z=(z₁−z₂)/SE" }
  ] },
  { type: "formula", latex: "(z_1-z_2)\\pm z_{1-\\alpha/2}\\sqrt{\\frac1{n_1-3}+\\frac1{n_2-3}}", fallback: "CI of the difference on the z scale" },
  { type: "heading", text: "When This Two-Group Formula Does Not Apply" },
  { type: "list", items: ["Correlation coefficients depend on each other, such as two correlations estimated from the same participants", "Two correlations share one variable", "The data involve clustering, repeated measures, or survey weights", "The Pearson correlation assumption is significantly violated.", "Applying the standard error formula directly to Spearman correlation"] },
  { type: "callout", tone: "forward", label: "Reporting", text: "Indicates n and r for each group, 95% confidence interval by Fisher Z, group difference Z and p value, and basis for independence. Avoid simply calling the z difference the r difference." },
];

export const spearmanCorrelationEn = [
  { type: "paragraph", text: "Spearman's rank correlation coefficient rₛ evaluates the monotonic relationship between two variables by converting the raw values ​​into ranks and then calculating the Pearson correlation. Even if it is not a straight line, you can capture relationships that increase or decrease in one direction." },
  { type: "heading", text: "When to Consider Spearman Correlation" },
  { type: "list", items: ["Handling ordinal scale data", "The relationship is monotonic but not linear.", "Pearson r is strongly influenced by outliers", "The distribution is strongly skewed, and rank-based summarization is appropriate.", "The ordering is more meaningful than the numerical spacing between values"] },
  { type: "callout", tone: "caution", label: "Fewer Assumptions Does Not Mean No Assumptions", text: "Independent observations and meaningful rankings are required. Also, Spearman does not detect all non-linear relationships, and non-monotonic relationships such as U-shape can be close to 0." },
  { type: "heading", text: "Step 1: Convert Original Values to Ranks" },
  { type: "paragraph", text: "Rank X and Y separately from 1 to n. Assign the average rank to tied values. Rank transformation discards interval information, leaving only the order." },
  { type: "heading", text: "Step 2: Find the Pearson correlation of ranks" },
  { type: "formula", latex: "r_s=\\frac{\\sum[R(X_i)-\\overline{R_X}][R(Y_i)-\\overline{R_Y}]}{\\sqrt{\\sum[R(X_i)-\\overline{R_X}]^2}\\sqrt{\\sum[R(Y_i)-\\overline{R_Y}]^2}}", fallback: "rₛ=Pearson correlation between rank X and rank Y" },
  { type: "paragraph", text: "If rₛ=1, the rankings are perfectly matched, -1 is completely reversed, and around 0 indicates that the monotonic rank association is weak." },
  { type: "heading", text: "Simplified formula when there are no ties" },
  { type: "formulaGroup", formulas: [
    { label: "Difference in rank", latex: "d_i=R(X_i)-R(Y_i)", fallback: "dᵢ=R(Xᵢ)−R(Yᵢ)" },
    { label: "simplified formula", latex: "r_s=1-\\frac{6\\sum d_i^2}{n(n^2-1)}", fallback: "rₛ=1−6Σdᵢ²/[n(n²−1)]" }
  ] },
  { type: "callout", tone: "warning", label: "Handling Ties", text: "The simplified formula assumes no ties. If there is a tie, the average rank is given and the normal Pearson correlation formula is applied to that rank column." },
  { type: "heading", text: "Interpreting direction and size" },
  { type: "paragraph", text: "The sign represents the direction of the monotonic relationship, and the absolute value represents the consistency of the ranks. Fixed boundaries of strength and weakness depend on field and measurement reliability, and are therefore coupled with scatter plots, confidence intervals, and research context." },
  { type: "heading", text: "Inference for the Population Rank Correlation" },
  { type: "formula", latex: "H_0:\\rho_s=0\\qquad H_1:\\rho_s\\ne0", fallback: "H₀:ρₛ=0; H₁:ρₛ≠0" },
  { type: "paragraph", text: "For small samples, you can use exact tests based on rank permutation distributions, and for tied ranks and large samples, you can use appropriate approximation, permutation, and bootstrap. Decide in advance whether it will be on one side or both sides." },
  { type: "heading", text: "Can Fisher Z be used directly on Spearman rₛ?" },
  { type: "paragraph", text: "It is generally not exact to use the variance 1/(n−3) for Pearson r directly for Spearman rₛ. Since the sampling distribution and tie effects are different, we use Spearman's approximation, permutation method, and bootstrap confidence intervals." },
  { type: "table", rows: [["Item", "Pearson r", "Spearman rₛ"], ["Data used", "Raw values", "Ranks"], ["Relationship", "Linear", "Monotonic"], ["Outliers", "More sensitive", "Usually less sensitive"], ["Inference", "t test or Fisher’s z", "Exact, permutation, asymptotic, or bootstrap methods"]] },
  { type: "callout", tone: "forward", label: "Reporting", text: "We show n, rₛ, confidence intervals, p-values, treatment of ties, inference methods used, rank scatter plots, and do not interpret monotone associations as causal relationships." },
];
