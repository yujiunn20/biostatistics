export const wilcoxonTestsEn = [
  { type: "paragraph", text: "Wilcoxon rank tests do not assume a normal distribution of raw values, but use signs or ranks to examine differences in location. This page distinguishes between the sign test, the Wilcoxon rank-sum test for two independent groups (Mann–Whitney U), and the Wilcoxon signed-rank test for one sample/paired data." },
  { type: "table", rows: [["Method", "Design", "Information used"], ["Sign test", "One sample or paired data", "Signs of the differences only"], ["Rank-sum / Mann–Whitney", "Two independent groups", "Ranks of all observations"], ["Signed-rank", "One sample or paired data", "Ranks of absolute differences and their signs"]] },
  { type: "heading", text: "Sign Test: Converting Values to Signs" },
  { type: "formulaGroup", formulas: [
    { label: "one sample difference", latex: "D_i=X_i-M_0", fallback: "Dᵢ=Xᵢ−M₀" },
    { label: "paired difference", latex: "D_i=X_{i,\\mathrm{after}}-X_{i,\\mathrm{before}}", fallback: "Dᵢ=after−before" },
    { label: "sign", latex: "Z_i=\\begin{cases}-1,&D_i<0\\\\0,&D_i=0\\\\1,&D_i>0\\end{cases}", fallback: "classify as negative, zero, or positive" }
  ] },
  { type: "paragraph", text: "Let n be the effective sample size after excluding zero differences, and let C be the number of positive differences. Under H₀, positive and negative differences are equally likely, so C follows a binomial distribution." },
  { type: "formulaGroup", formulas: [
    { label: "two-sided hypothesis", latex: "H_0:p=\\frac12\\qquad H_1:p\\ne\\frac12", fallback: "H₀:p=1/2; H₁:p≠1/2" },
    { label: "null distribution", latex: "C\\mid H_0\\sim\\operatorname{Binomial}\\left(n,\\frac12\\right)", fallback: "C~Binomial(n,1/2)" },
    { label: "mean and variance", latex: "E(C)=\\frac n2,\\quad\\operatorname{Var}(C)=\\frac n4", fallback: "E(C)=n/2; Var(C)=n/4" }
  ] },
  { type: "heading", text: "Sign-Test p Value and Normal Approximation" },
  { type: "paragraph", text: "The exact two-sided p-value sums the binomial probabilities in both tails that are at least as extreme as the observed imbalance. For example, if n=10 and C=8, the following formula is used." },
  { type: "formula", latex: "p=2P(C\\ge8)=2\\sum_{k=8}^{10}\\binom{10}{k}\\left(\\frac12\\right)^{10}", fallback: "p=2P(C≥8)" },
  { type: "formulaGroup", formulas: [
    { label: "large-sample Z", latex: "Z=\\frac{C-n/2}{\\sqrt{n/4}}", fallback: "Z=(C−n/2)/√(n/4)" },
    { label: "two-sided rejection region", latex: "\\left|C-\\frac n2\\right|>z_{1-\\alpha/2}\\sqrt{\\frac n4}", fallback: "|C−n/2|>z√(n/4)" }
  ] },
  { type: "callout", tone: "caution", label: "Robust but Less Informative", text: "The sign test does not use the magnitude of the difference, so it is robust to outliers, but when symmetry is a reasonable assumption, it tends to have lower power than signed-rank." },
  { type: "heading", text: "Rank-Sum Test: Ranking Two Independent Groups Together" },
  { type: "list", ordered: true, items: ["Pool the N=n+m observations from both groups", "Rank them from smallest to largest; assign mean ranks to ties", "Sum the ranks in one group to obtain Wₛ", "Under permutations of the group labels, calculate the probability of rank sums at least as extreme as the observed value"] },
  { type: "formula", latex: "W_s=\\sum_{i\\in\\mathrm{group\\ 1}}R_i", fallback: "Wₛ=rank sum of the first group" },
  { type: "paragraph", text: "Under H₀, the group labels are exchangeable. All C(N,n) assignments of n of the N ranks to the first group are equally likely; counting the assignments that yield rank sum w gives the exact null distribution." },
  { type: "formula", latex: "P(W_s=w)=\\frac{\\#(w;n,m)}{\\binom{N}{n}}", fallback: "P(Wₛ=w)=number of assignments yielding w / C(N,n)" },
  { type: "heading", text: "Mean, Variance, and Normal Approximation of the Rank Sum" },
  { type: "formulaGroup", formulas: [
    { label: "null expected value", latex: "E(W_s)=\\frac12n(N+1)", fallback: "E(Wₛ)=n(N+1)/2" },
    { label: "Variance without ties", latex: "\\operatorname{Var}(W_s)=\\frac1{12}mn(N+1)", fallback: "Var(Wₛ)=mn(N+1)/12" },
    { label: "Normal approximation", latex: "Z=\\frac{W_s-E(W_s)}{\\sqrt{\\operatorname{Var}(W_s)}}", fallback: "Z=[Wₛ−E(Wₛ)]/√Var(Wₛ)" }
  ] },
  { type: "heading", text: "Deriving the Mean and Variance of the Rank Sum" },
  { type: "paragraph", text: "Since each rank is selected C(N−1,n−1) times across all assignments, the expected value can be obtained from the selection ratio n/N and the sum of all ranks N(N+1)/2." },
  { type: "formulaGroup", formulas: [
    { label: "Expected value", latex: "E(W_s)=\\frac nN\\sum_{i=1}^{N}i=\\frac12n(N+1)", fallback: "E(Wₛ)=(n/N)Σi" },
    { label: "rank sums", latex: "\\sum i=\\frac{N(N+1)}2,\\quad\\sum i^2=\\frac{N(N+1)(2N+1)}6", fallback: "Σi and Σi²" },
    { label: "variance result", latex: "\\operatorname{Var}(W_s)=\\frac1{12}n(N-n)(N+1)=\\frac1{12}nm(N+1)", fallback: "Var(Wₛ)=nm(N+1)/12" }
  ] },
  { type: "callout", tone: "warning", label: "What Does the Test Assess?", text: "The general null hypothesis states that the two groups have the same distribution. Only when their distributional shapes are the same and differ solely by a location shift can the result be interpreted simply as a difference in medians or location. Ties require a variance correction." },
  { type: "heading", text: "Signed-Rank Test: Using Direction and Ranks of Magnitude" },
  { type: "list", ordered: true, items: ["Calculate each difference Dᵢ and remove zero differences", "Rank |Dᵢ| from smallest to largest; assign mean ranks to ties", "Attach each difference’s original sign to its rank", "Calculate the positive rank sum T⁺ and negative rank sum T⁻", "Obtain the p value from the exact sign distribution or an appropriately corrected normal approximation"] },
  { type: "formulaGroup", formulas: [
    { label: "Positive rank sum", latex: "T^+=\\sum_{D_i>0}R_i", fallback: "T⁺=rank sum of positive differences" },
    { label: "negative rank sum", latex: "T^-=\\sum_{D_i<0}R_i", fallback: "T⁻ = rank sum of negative differences" },
    { label: "fixed sum", latex: "T^++T^-=\\frac{n(n+1)}2", fallback: "T⁺+T⁻=n(n+1)/2" }
  ] },
  { type: "paragraph", text: "Under H₀, the distribution of differences is symmetric around zero, and each absolute rank is equally likely to receive a positive or negative sign. The n signs therefore have 2ⁿ equally likely assignments." },
  { type: "heading", text: "Mean, Variance, and Approximation of the Signed Rank Sum" },
  { type: "formulaGroup", formulas: [
    { label: "Expected value", latex: "E(T^+)=\\frac{n(n+1)}4", fallback: "E(T⁺)=n(n+1)/4" },
    { label: "Variance without ties", latex: "\\operatorname{Var}(T^+)=\\frac{n(n+1)(2n+1)}{24}", fallback: "Var(T⁺)=n(n+1)(2n+1)/24" },
    { label: "Normal approximation", latex: "Z=\\frac{T^+-n(n+1)/4}{\\sqrt{n(n+1)(2n+1)/24}}", fallback: "Z=[T⁺−E]/√Var" }
  ] },
  { type: "paragraph", text: "Let the indicator Iᵣ equal 1 when rank r receives a positive sign and 0 otherwise. Then T⁺=ΣrIᵣ. Because E(Iᵣ)=1/2 and Var(Iᵣ)=1/4, linearity gives the expressions above." },
  { type: "formulaGroup", formulas: [
    { label: "indicator expression", latex: "T^+=\\sum_{r=1}^{n}rI_r", fallback: "T⁺=ΣrIᵣ" },
    { label: "signed rank sum", latex: "W=T^+-T^-,\\quad E(W)=0", fallback: "W=T⁺−T⁻, E(W)=0" },
    { label: "variance of W", latex: "\\operatorname{Var}(W)=\\sum r^2=\\frac{n(n+1)(2n+1)}6", fallback: "Var(W)=n(n+1)(2n+1)/6" }
  ] },
  { type: "heading", text: "Choosing among the Three Methods" },
  { type: "table", rows: [["Method", "Sample relationship", "Primary H₀", "Additional condition"], ["Sign", "One sample or paired", "Positive and negative differences are equally likely", "No symmetry assumption for the differences"], ["Rank-sum", "Two independent groups", "The two group distributions are identical", "Similar shapes for a median-shift interpretation"], ["Signed-rank", "One sample or paired", "The distribution of differences is centered at zero", "Symmetric distribution of differences"]] },
  { type: "callout", tone: "forward", label: "Reporting", text: "Report the effective sample size, median and IQR, treatment of 0 differences and ties, whether an exact or approximate method was used, continuity and tie corrections, statistics, p-values, and appropriate location-shift effect sizes and confidence intervals." },
];
