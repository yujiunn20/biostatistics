export const contingencyTableEn = [
  { type: "paragraph", text: "A contingency table (crosstab) organizes two or more categorical variables at the same time. In particular, the 2 × 2 table is the basic form for quantifying the direction and magnitude of an association through odds ratios (ORs) and relative risks (RRs) as well as tests of independence." },
  { type: "callout", tone: "forward", label: "Core idea", text: "Check the table layout and research design, read the cell frequencies and marginal frequencies → consider independence → select the effect size OR or RR that matches the research design → find the standard error and confidence interval on a logarithmic scale." },
  { type: "heading", text: "Structure of 2×2 contingency table" },
  { type: "table", rows: [["", "With result Y=1", "No result Y=0", "total"], ["Exposure X=1", "A", "B", "A+B"], ["No exposure X=0", "C", "D", "C+D"], ["total", "A+C", "B+D", "N"]] },
  { type: "paragraph", text: "A to D are cell frequencies that satisfy the simultaneous condition, and the sum of rows and columns is the marginal frequency. Although it is optional to place one in a row and one in a column, the numerator/denominator and interpretation of the effect size depend on the arrangement, so the definition should be clearly stated." },
  { type: "heading", text: "Joint Probability, Conditional Probability, and Independence" },
  { type: "formulaGroup", formulas: [
    { label: "equal conditional probabilities", latex: "P(Y=1\\mid X=1)=P(Y=1\\mid X=0)=P_Y", fallback: "P(Y=1|X=1)=P(Y=1|X=0)=P_Y" },
    { label: "Definition of independence", latex: "P(X=i,Y=j)=P(X=i)P(Y=j)", fallback: "P(X=i,Y=j)=P(X=i)P(Y=j)" }
  ] },
  { type: "callout", tone: "intuition", label: "Association does not mean causation", text: "Contingency tables show statistical associations between variables. Causal effects cannot be interpreted without accounting for confounding, selection, measurement error, and time order." },
  { type: "heading", text: "Study Design Determines Interpretation" },
  { type: "table", rows: [["design", "Sampling criteria", "Quantities that are easy to estimate directly"], ["Cohort/randomized trial", "Tracking from exposure/intervention group", "Risk, RR, risk difference, OR"], ["case control study", "Extract based on presence/absence of results", "OR (Generally, risk and RR cannot be directly estimated)"], ["cross-sectional study", "Measure exposure and outcomes at a single point in time", "Prevalence ratio/OR"]] },
  { type: "paragraph", text: "Even with the same four numbers, the meaning of the denominator changes depending on who is extracted from which population. Check the research design before looking at the calculation formula." },
  { type: "heading", text: "Odds and the Odds Ratio" },
  { type: "formulaGroup", formulas: [
    { label: "odds of probability p", latex: "\\operatorname{odds}=\\frac{p}{1-p}", fallback: "odds=p/(1−p)" },
    { label: "Odds ratio between exposed and unexposed groups", latex: "OR=\\frac{A/B}{C/D}=\\frac{AD}{BC}", fallback: "OR=(A/B)/(C/D)=AD/(BC)" }
  ] },
  { type: "paragraph", text: "OR=1 indicates no association, OR>1 indicates higher odds of outcome in the exposed group, and OR<1 indicates lower odds. For example, OR=2 is not twice the probability, but twice the odds." },
  { type: "heading", text: "Estimate the OR on a logarithmic scale" },
  { type: "formulaGroup", formulas: [
    { label: "log odds ratio", latex: "\\log(OR)=\\log A+\\log D-\\log B-\\log C", fallback: "ln(OR)=ln A+ln D−ln B−ln C" },
    { label: "approximate variance", latex: "\\operatorname{Var}[\\log(OR)]\\approx\\frac1A+\\frac1B+\\frac1C+\\frac1D", fallback: "Var[ln(OR)]≈1/A+1/B+1/C+1/D" },
    { label: "standard error", latex: "SE[\\log(OR)]=\\sqrt{\\frac1A+\\frac1B+\\frac1C+\\frac1D}", fallback: "SE[ln(OR)]=√(1/A+1/B+1/C+1/D)" },
    { label: "test statistic", latex: "Z=\\frac{\\log(OR)}{SE[\\log(OR)]}", fallback: "Z=ln(OR)/SE[ln(OR)]" }
  ] },
  { type: "formula", latex: "CI_{1-\\alpha}(OR)=\\exp\\left\\{\\log(OR)\\pm z_{1-\\alpha/2}SE[\\log(OR)]\\right\\}", fallback: "CI of OR=exp{ln(OR)±z·SE[ln(OR)]}" },
  { type: "callout", tone: "intuition", label: "Why use logarithms?", text: "OR is bounded below by zero and often right-skewed, whereas log(OR) is an additive measure with 0 representing no association and has a more symmetric sampling distribution. Construct the interval on the log scale, then transform back with exp." },
  { type: "heading", text: "Risk and Relative Risk" },
  { type: "formulaGroup", formulas: [
    { label: "Risk of exposure group", latex: "R_1=\\frac{A}{A+B}", fallback: "R₁=A/(A+B)" },
    { label: "Risk for unexposed group", latex: "R_0=\\frac{C}{C+D}", fallback: "R₀=C/(C+D)" },
    { label: "relative risk", latex: "RR=\\frac{R_1}{R_0}=\\frac{A/(A+B)}{C/(C+D)}", fallback: "RR=[A/(A+B)]/[C/(C+D)]" }
  ] },
  { type: "paragraph", text: "RR=1 is equal risk, RR=2 is twice the risk of the exposed group, and RR=0.5 is half the risk. It is naturally interpreted in cohort studies and trials where the follow-up period and denominator can be defined." },
  { type: "heading", text: "Estimate RR on a logarithmic scale" },
  { type: "formulaGroup", formulas: [
    { label: "Approximate variance of log relative risk", latex: "\\operatorname{Var}[\\log(RR)]\\approx\\left(\\frac1A-\\frac1{A+B}\\right)+\\left(\\frac1C-\\frac1{C+D}\\right)", fallback: "Var[ln(RR)]≈(1/A−1/(A+B))+(1/C−1/(C+D))" },
    { label: "standard error", latex: "SE[\\log(RR)]=\\sqrt{\\left(\\frac1A-\\frac1{A+B}\\right)+\\left(\\frac1C-\\frac1{C+D}\\right)}", fallback: "SE[ln(RR)]=√{(1/A−1/(A+B))+(1/C−1/(C+D))}" },
    { label: "test statistic", latex: "Z=\\frac{\\log(RR)}{SE[\\log(RR)]}", fallback: "Z=ln(RR)/SE[ln(RR)]" }
  ] },
  { type: "formula", latex: "CI_{1-\\alpha}(RR)=\\exp\\left\\{\\log(RR)\\pm z_{1-\\alpha/2}SE[\\log(RR)]\\right\\}", fallback: "CI of RR=exp{ln(RR)±z SE[ln(RR)]}" },
  { type: "heading", text: "Difference Between OR and RR" },
  { type: "table", rows: [["item", "OR", "RR"], ["amount to compare", "odds", "risk (probability)"], ["unrelated value", "1", "1"], ["case control study", "Estimable", "Usually not directly estimated"], ["rare results", "Approximate to RR", "direct"], ["If the result is not rare", "It tends to appear larger than RR in the direction away from 1.", "Clinical interpretation is relatively intuitive"]] },
  { type: "formula", latex: "p\\approx0\\quad\\Longrightarrow\\quad\\frac{p}{1-p}\\approx p\\quad\\Longrightarrow\\quad OR\\approx RR", fallback: "If p≈0 then p/(1−p)≈p, therefore OR≈RR" },
  { type: "callout", tone: "forward", label: "Conditions for the Rare-Disease Approximation", text: "The OR approaches the RR only when the outcome is sufficiently rare in both comparison groups. It is not ``OR=RR'' because it is a case-control study." },
  { type: "heading", text: "Why the Log-Scale Variance Formulas Work: The Delta Method" },
  { type: "paragraph", text: "The variance of a nonlinear function is found by a first-order approximation near the estimated value. This is the basis of the log standard error of OR/RR." },
  { type: "formula", latex: "\\operatorname{Var}[f(X)]\\approx[f'(\\mu)]^2\\operatorname{Var}(X)", fallback: "Var[f(X)]≈[f′(μ)]²Var(X)" },
  { type: "paragraph", text: "Since the derivative of log(x) is 1/x, the logarithmic variance of the counts is approximately 1/x. When we add and subtract independent logarithmic cell frequencies, the variances add up and we get 1/A+1/B+1/C+1/D of log(OR). In RR, since the numerator and denominator in the same row are shared, covariance is taken into consideration, and −1/(A+B) and −1/(C+D) appear." },
  { type: "heading", text: "Zero Cells and Small Samples" },
  { type: "paragraph", text: "If any cell is 0, the normal OR or log standard error will be infinite or undefined. Since mechanical 0.5 addition can change the estimation target, we will consider the exact method, conditional estimation, penalized logistic regression, etc. depending on the purpose, and specify the method to be adopted." },
  { type: "heading", text: "Reporting in Practice" },
  { type: "list", ordered: true, items: ["Specify row/column definitions, target population, and research design", "Check the four cells and marginal frequencies, and indicate how to handle missing values.", "Select OR, RR, and risk difference if necessary to suit your design and purpose.", "Report point estimates and 95% confidence intervals", "Explain not only the p-value of the independence test, but also the direction, magnitude, and clinical significance of the effect.", "Describes limitations of small samples, zero cells, confounding, and selection bias."] },
];
