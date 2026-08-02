export const rSquaredEn = [
  { type: "paragraph", text: "The coefficient of determination, R², represents what proportion of the total variation in Y is explained within the sample by the regression model that includes the intercept. It is an aspect of model fit, not causality, predictive accuracy, or model validity itself." },
  { type: "formulaGroup", formulas: [
    { label: "sum of squares decomposition", latex: "SS_T=SS_R+SS_E", fallback: "SST=SSR+SSE" },
    { label: "coefficient of determination", latex: "R^2=\\frac{SS_R}{SS_T}", fallback: "R²=SSR/SST" },
    { label: "equivalence expression", latex: "R^2=1-\\frac{SS_E}{SS_T}", fallback: "R²=1−SSE/SST" }
  ] },
  { type: "heading", text: "Why divide SSR by SST?" },
  { type: "paragraph", text: "SST is the total variation in Y relative to the mean-only reference model, SSR is the portion explained by the regression, and SSE is the portion remaining. Therefore, R² is the explained part divided by the total, and 1−R² is the proportion of the unexplained part." },
  { type: "heading", text: "Interpreting R² in Plain Language" },
  { type: "formula", latex: "100\\times R^2\\%", fallback: "100×R²%" },
  { type: "paragraph", text: "If R²=0.64, we would say, \"In this sample, the model explained 64% of the observed variation in Y.\" We don't say \"X caused 64% of Y\" or \"The prediction is 64% correct.\"" },
  { type: "heading", text: "Scope and Limitations" },
  { type: "formula", latex: "0\\le R^2\\le1", fallback: "0≤R²≤1" },
  { type: "paragraph", text: "If you include the intercept using the ordinary Least Squares and evaluate it on the same data, it will be within this range. Negative values ​​are also possible for predicted R² for no-intercept models, different definitions, and external validation." },
  { type: "heading", text: "Why R²=r² in simple regression" },
  { type: "formulaGroup", formulas: [
    { label: "slope", latex: "b_1=\\frac{\\sum(X_i-\\bar X)(Y_i-\\bar Y)}{\\sum(X_i-\\bar X)^2}", fallback: "b₁=covariation/X variation" },
    { label: "regression sum of squares", latex: "SS_R=b_1^2\\sum(X_i-\\bar X)^2", fallback: "SSR=b₁²Σ(Xᵢ−X̄)²" },
    { label: "substitution", latex: "R^2=\\frac{[\\sum(X_i-\\bar X)(Y_i-\\bar Y)]^2}{\\sum(X_i-\\bar X)^2\\sum(Y_i-\\bar Y)^2}=r^2", fallback: "R²=r²" }
  ] },
  { type: "callout", tone: "caution", label: "In Multiple Regression, R² Is Not the Square of a Single Correlation", text: "The R² of multiple explanatory variables is the explanatory proportion of the model using them jointly. It is not the value of any one Pearson r squared." },
  { type: "heading", text: "Connection between R², t and F" },
  { type: "formulaGroup", formulas: [
    { label: "Simple regression F", latex: "F=\\frac{SS_R/1}{SS_E/(n-2)}", fallback: "F=(SSR/1)/[SSE/(n−2)]" },
    { label: "sum of squares", latex: "SS_R=R^2SS_T,\\quad SS_E=(1-R^2)SS_T", fallback: "SSR=R²SST; SSE=(1−R²)SST" },
    { label: "F by R²", latex: "F=\\frac{R^2(n-2)}{1-R^2}", fallback: "F=R²(n−2)/(1−R²)" },
    { label: "simple regression", latex: "F=\\frac{r^2(n-2)}{1-r^2}=t^2", fallback: "F=t²" }
  ] },
  { type: "heading", text: "A high R² does not necessarily mean the model is appropriate." },
  { type: "list", items: ["Even if the curve is applied as a straight line, R² can be high if the range is wide.", "One outlier can push up R²", "Adding unnecessary explanatory variables usually does not reduce R².", "Even with high R², unequal variance, dependence, and non-normality of residuals can remain.", "In-sample R² does not guarantee predictive performance for new data", "Important small effects may be accurately estimated even with low R²"] },
  { type: "callout", tone: "forward", label: "What to Report", text: "Displays adjusted R², cross-validation performance, RMSE, residual diagnostics, coefficients and confidence intervals as appropriate. We don't choose a model based solely on R²." },
];

export const multipleRegressionEn = [
  { type: "paragraph", text: "Multiple regression analysis puts multiple explanatory variables into the same linear model and estimates the conditional association of each variable, holding other variables constant. Used for prediction, confounding adjustment, and simultaneous comparison of multiple factors." },
  { type: "formulaGroup", formulas: [
    { label: "population model", latex: "Y_i=\\beta_0+\\beta_1X_{1i}+\\cdots+\\beta_pX_{pi}+\\varepsilon_i", fallback: "Yᵢ=β₀+β₁X₁ᵢ+⋯+βₚXₚᵢ+εᵢ" },
    { label: "sample prediction formula", latex: "\\hat Y_i=b_0+b_1X_{1i}+\\cdots+b_pX_{pi}", fallback: "Ŷᵢ=b₀+b₁X₁ᵢ+⋯+bₚXₚᵢ" }
  ] },
  { type: "heading", text: "Interpreting Multiple Regression Coefficients" },
  { type: "formula", latex: "E(\\text{Weight})=\\beta_0+\\beta_1(\\text{Age})+\\beta_2(\\text{Female})+\\beta_3(\\text{Height})", fallback: "E (weight) = β₀ + β₁ age + β₂ female + β₃ height" },
  { type: "paragraph", text: "β₁ is the average weight difference associated with a 1 unit increase in age when comparing subjects of the same gender and height. β₂ is the average difference between women and the reference gender, holding age and height constant. The important difference from simple regression is the conditional interpretation of ``holding other things constant''." },
  { type: "callout", tone: "warning", label: "Adjustment does not automatically create a causal effect", text: "Appropriate confounder selection, time order, measurement quality, and model shape are required. Carelessly adjusting for mediators or colliders can remove part of the effect of interest or introduce bias." },
  { type: "heading", text: "Decomposing Variation in Y" },
  { type: "formulaGroup", formulas: [
    { label: "Deviation decomposition", latex: "Y_i-\\bar Y=(\\hat Y_i-\\bar Y)+(Y_i-\\hat Y_i)", fallback: "Total deviation = explained component + residual" },
    { label: "total sum of squares", latex: "SS_T=\\sum(Y_i-\\bar Y)^2", fallback: "SST=Σ(Yᵢ−Ȳ)²" },
    { label: "regression sum of squares", latex: "SS_R=\\sum(\\hat Y_i-\\bar Y)^2", fallback: "SSR=Σ(Ŷᵢ−Ȳ)²" },
    { label: "error sum of squares", latex: "SS_E=\\sum(Y_i-\\hat Y_i)^2", fallback: "SSE=Σ(Yᵢ−Ŷᵢ)²" },
    { label: "Decomposition", latex: "SS_T=SS_R+SS_E", fallback: "SST=SSR+SSE" }
  ] },
  { type: "heading", text: "Overall F test" },
  { type: "formula", latex: "H_0:\\beta_1=\\beta_2=\\cdots=\\beta_p=0\\qquad H_1:\\text{At least one }\\beta_j\\ne0", fallback: "H₀: Total slope = 0; H₁: At least one≠0" },
  { type: "table", rows: [["source of variation", "sum of squares", "degrees of freedom", "mean square"], ["regression", "SSR", "p", "SSR/p"], ["error", "SSE", "n−p−1", "SSE/(n−p−1)"], ["total", "SST", "n−1", "—"]] },
  { type: "formulaGroup", formulas: [
    { label: "regression mean square", latex: "MS_R=\\frac{SS_R}{p}", fallback: "MSR=SSR/p" },
    { label: "error mean square", latex: "MS_E=\\frac{SS_E}{n-p-1}", fallback: "MSE=SSE/(n−p−1)" },
    { label: "F-statistic", latex: "F=\\frac{SS_R/p}{SS_E/(n-p-1)}", fallback: "F=(SSR/p)/[SSE/(n−p−1)]" },
    { label: "H₀bottom", latex: "F\\sim F_{p,n-p-1}", fallback: "F~F(p,n−p−1)" }
  ] },
  { type: "heading", text: "Tests for Individual Coefficients" },
  { type: "formulaGroup", formulas: [
    { label: "individual hypothesis", latex: "H_0:\\beta_j=0\\qquad H_1:\\beta_j\\ne0", fallback: "H₀:βⱼ=0; H₁:βⱼ≠0" },
    { label: "t-statistic", latex: "t=\\frac{b_j}{SE(b_j)},\\qquad df=n-p-1", fallback: "t=bⱼ/SE(bⱼ), df=n−p−1" }
  ] },
  { type: "paragraph", text: "Even if the overall F is significant, it does not necessarily mean that all coefficients are significant, and even if the individual t is not significant, it may be useful as a group of variables. For joint hypotheses with multiple coefficients, partial F tests and Wald tests are used." },
  { type: "heading", text: "Relationship between Categorical Predictors and ANOVA" },
  { type: "formulaGroup", formulas: [
    { label: "dummy variables for J groups", latex: "p=J-1", fallback: "p=J−1" },
    { label: "error degrees of freedom", latex: "n-p-1=n-J", fallback: "n−p−1=n−J" }
  ] },
  { type: "paragraph", text: "A factor with J levels is represented by J−1 dummy variables, and one level is used as the reference group. The overall F test for a factor-only regression model is the same as a one-way ANOVA." },
  { type: "heading", text: "Coding of dummy variables" },
  { type: "table", rows: [["group", "X₁", "X₂", "average"], ["reference group", "0", "0", "β₀"], ["group 2", "1", "0", "β₀+β₁"], ["group 3", "0", "1", "β₀+β₂"]] },
  { type: "formula", latex: "E(Y)=\\beta_0+\\beta_1X_1+\\beta_2X_2", fallback: "E(Y)=β₀+β₁X₁+β₂X₂" },
  { type: "paragraph", text: "β1 and β2 are the differences from the reference group, respectively. Use appropriate contrasts for comparisons between different groups and overall effects, and consider multiplicity." },
  { type: "heading", text: "Why Include Confounders in the Model?" },
  { type: "formulaGroup", formulas: [
    { label: "unadjusted", latex: "E(\\text{Vision})=\\beta_0+\\beta_1(\\text{Wealth})", fallback: "E(sight)=β₀+β₁wealth" },
    { label: "age adjustment", latex: "E(\\text{Vision})=\\beta_0+\\beta_1(\\text{Wealth})+\\beta_2(\\text{Age})", fallback: "E(visual acuity)=β₀+β₁wealth+β₂age" }
  ] },
  { type: "paragraph", text: "Unadjusted coefficients can be confounded if age is related to both wealth and vision. β₁ with age is the conditional association at the same age. However, we also check linearity, interactions, measurement error, and overlap." },
  { type: "heading", text: "Crude, Partially Adjusted, and Fully Adjusted Models" },
  { type: "table", rows: [["Model", "Purpose"], ["Crude", "Unadjusted association between exposure and outcome"], ["Partially adjusted", "Add key prespecified confounders and examine changes in the coefficient"], ["Fully adjusted", "Include variables and functional forms specified by the causal framework and analysis plan"]] },
  { type: "heading", text: "Model Assumptions and Diagnostics" },
  { type: "list", items: ["Mean structure is appropriate for each continuous variable (nonlinear terms if necessary)", "Observation and error are independent", "Residual variance is approximately constant", "Residuals are generally normal in small sample inference", "Avoid severe multicollinearity; examine the VIF and condition number", "Assess uncertainty in influence points, missing data, extrapolation, and model selection"] },
  { type: "heading", text: "Analysis and Reporting Workflow" },
  { type: "list", ordered: true, items: ["Predefine research questions, estimation targets, and variable selection", "Check distribution, missingness, correlation, and encoding", "Specify linearity and interactions in the form required for research", "Estimate overall F, coefficients, 95% confidence intervals, p-values, R² and adjusted R²", "Diagnose residuals, multicollinearity, influence points, and predictive performance", "Specify unadjusted/adjusted results, units, reference groups, and limits"] },
];
