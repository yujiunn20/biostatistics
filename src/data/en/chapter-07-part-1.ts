export const simpleLinearRegressionEn = [
  { type: "paragraph", text: "Simple regression analysis models a linear relationship between one quantitative explanatory variable, X, and a quantitative outcome variable, Y. The slope represents the direction and magnitude of the association and is used to explain the average response and predict new observations." },
  { type: "callout", tone: "forward", label: "Analysis flow", text: "Check the shape with the scatter plot → estimate the straight line using the Least Squares → ​​diagnose the assumptions using the residuals → test the slope and overall model → report the confidence interval, prediction interval, and limits." },
  { type: "heading", text: "Questions Simple Linear Regression Can Answer" },
  { type: "list", items: ["How much does the average of Y change when X increases by 1 unit?", "Is there evidence that the linear relationship is different from 0?", "How much variation in Y does the model explain?", "Can a given X predict the average response or individual values?"] },
  { type: "heading", text: "Start with the Scatterplot and Residuals" },
  { type: "paragraph", text: "Look first at curvature, clusters, outliers, high-leverage points, and changes in spread. The difference between the observed value at each point and the regression line is the residual." },
  { type: "formula", latex: "e_i=Y_i-\\hat Y_i", fallback: "eᵢ=Yᵢ−Ŷᵢ" },
  { type: "heading", text: "Population Model and Fitted Sample Line" },
  { type: "formulaGroup", formulas: [
    { label: "population model", latex: "Y_i=\\beta_0+\\beta_1X_i+\\varepsilon_i", fallback: "Yᵢ=β₀+β₁Xᵢ+εᵢ" },
    { label: "Population mean at a fixed X", latex: "E(Y_i\\mid X_i)=\\beta_0+\\beta_1X_i", fallback: "E(Yᵢ|Xᵢ)=β₀+β₁Xᵢ" },
    { label: "fitted sample line", latex: "\\hat Y_i=b_0+b_1X_i", fallback: "Ŷᵢ=b₀+b₁Xᵢ" },
    { label: "residual", latex: "e_i=Y_i-\\hat Y_i", fallback: "eᵢ=Yᵢ−Ŷᵢ" }
  ] },
  { type: "heading", text: "Interpreting the Intercept and Slope" },
  { type: "paragraph", text: "β₁ is the amount of change in Y average when X increases by 1 unit. β₀ is the average at X=0, but if 0 is outside the observation range or has no practical meaning, do not force it to be interpreted. Centering allows you to move the intercept within the observation range." },
  { type: "heading", text: "Least Squares" },
  { type: "formula", latex: "(b_0,b_1)=\\arg\\min_{a,c}\\sum_{i=1}^{n}[Y_i-(a+cX_i)]^2", fallback: "b₀,b₁ that minimizes the residual sum of squares" },
  { type: "formulaGroup", formulas: [
    { label: "slope", latex: "b_1=\\frac{\\sum(X_i-\\bar X)(Y_i-\\bar Y)}{\\sum(X_i-\\bar X)^2}", fallback: "b₁=Σ(Xᵢ−X̄)(Yᵢ−Ȳ)/Σ(Xᵢ−X̄)²" },
    { label: "intercept", latex: "b_0=\\bar Y-b_1\\bar X", fallback: "b₀=Ȳ−b₁X̄" }
  ] },
  { type: "callout", tone: "intuition", label: "Why Square the Residuals?", text: "Squaring prevents positive and negative residuals from canceling, penalizes large deviations more heavily, and corresponds to maximum-likelihood estimation under a normal error model. On the other hand, the influence of outliers also increases." },
  { type: "heading", text: "Model Assumptions" },
  { type: "list", items: ["The mean of Y is linearly related to X", "Observations and errors are independent", "The error variance is constant across levels of X", "For small-sample inference on coefficients, the errors are approximately normal", "Strong outliers and influence points do not dominate the results"] },
  { type: "formulaGroup", formulas: [
    { label: "mean error", latex: "E(\\varepsilon_i\\mid X_i)=0", fallback: "E(εᵢ|Xᵢ)=0" },
    { label: "equal variance", latex: "\\operatorname{Var}(\\varepsilon_i\\mid X_i)=\\sigma^2", fallback: "Var(εᵢ|Xᵢ)=σ²" },
    { label: "normal error", latex: "\\varepsilon_i\\mid X_i\\sim N(0,\\sigma^2)", fallback: "εᵢ|Xᵢ~N(0,σ²)" }
  ] },
  { type: "heading", text: "Decomposing Variation in Y into Model and Error" },
  { type: "formula", latex: "\\underbrace{Y_i-\\bar Y}_{\\text{Total deviation}}=\\underbrace{\\hat Y_i-\\bar Y}_{\\text{Explained by regression}}+\\underbrace{Y_i-\\hat Y_i}_{\\text{Residual}}", fallback: "Total deviation = explained by regression + residual" },
  { type: "formulaGroup", formulas: [
    { label: "total sum of squares", latex: "SS_T=\\sum(Y_i-\\bar Y)^2", fallback: "SST=Σ(Yᵢ−Ȳ)²" },
    { label: "regression sum of squares", latex: "SS_R=\\sum(\\hat Y_i-\\bar Y)^2=b_1^2\\sum(X_i-\\bar X)^2", fallback: "SSR=Σ(Ŷᵢ−Ȳ)²" },
    { label: "error sum of squares", latex: "SS_E=\\sum(Y_i-\\hat Y_i)^2", fallback: "SSE=Σ(Yᵢ−Ŷᵢ)²" },
    { label: "Decomposition", latex: "SS_T=SS_R+SS_E", fallback: "SST=SSR+SSE" }
  ] },
  { type: "heading", text: "Regression ANOVA Table and Overall F Test" },
  { type: "table", rows: [["source of variation", "sum of squares", "degrees of freedom", "mean square"], ["regression", "SSR", "1", "SSR/1"], ["error", "SSE", "n−2", "SSE/(n−2)"], ["total", "SST", "n−1", "—"]] },
  { type: "formulaGroup", formulas: [
    { label: "null hypothesis", latex: "H_0:\\beta_1=0", fallback: "H₀: β₁=0" },
    { label: "F-statistic", latex: "F=\\frac{SS_R/1}{SS_E/(n-2)}", fallback: "F=(SSR/1)/[SSE/(n−2)]" },
    { label: "H₀bottom", latex: "F\\sim F_{1,n-2}", fallback: "F~F(1,n−2)" }
  ] },
  { type: "heading", text: "The reason why the degrees of freedom are n−1, 1, and n−2" },
  { type: "paragraph", text: "The total deviation uses one degrees of freedom to estimate the mean. The regression part is determined by one slope and has 1 degrees of freedom, and the residual has n-2 degrees of freedom because it estimates two parameters: the intercept and the slope." },
  { type: "formulaGroup", formulas: [
    { label: "Residual sum", latex: "\\sum e_i=0", fallback: "Σeᵢ=0" },
    { label: "Orthogonal to X", latex: "\\sum(X_i-\\bar X)e_i=0", fallback: "Σ(Xᵢ−X̄)eᵢ=0" },
    { label: "error degrees of freedom", latex: "df_E=n-2", fallback: "dfE=n−2" }
  ] },
  { type: "heading", text: "Residual Standard Deviation and Coefficient Tests" },
  { type: "formulaGroup", formulas: [
    { label: "residual standard deviation", latex: "S_{Y\\mid X}=\\sqrt{\\frac{SS_E}{n-2}}", fallback: "S(Y|X)=√[SSE/(n−2)]" },
    { label: "sum of squares of x", latex: "S_{xx}=\\sum(X_i-\\bar X)^2", fallback: "Sxx=Σ(Xᵢ−X̄)²" },
    { label: "standard error of intercept", latex: "SE(b_0)=S_{Y\\mid X}\\sqrt{\\frac1n+\\frac{\\bar X^2}{S_{xx}}}", fallback: "SE(b₀)=S(Y|X)√(1/n+X̄²/Sxx)" },
    { label: "standard error of slope", latex: "SE(b_1)=\\frac{S_{Y\\mid X}}{\\sqrt{S_{xx}}}", fallback: "SE(b₁)=S(Y|X)/√Sxx" }
  ] },
  { type: "formulaGroup", formulas: [
    { label: "intercept test", latex: "t=\\frac{b_0-c_0}{SE(b_0)}", fallback: "t=(b₀−c₀)/SE(b₀)" },
    { label: "slope test", latex: "t=\\frac{b_1-c_1}{SE(b_1)},\\qquad df=n-2", fallback: "t=(b₁−c₁)/SE(b₁), df=n−2" }
  ] },
  { type: "heading", text: "F=t² with slope test" },
  { type: "formulaGroup", formulas: [
    { label: "t squared", latex: "t^2=\\frac{b_1^2S_{xx}}{S_{Y\\mid X}^2}", fallback: "t²=b₁²Sxx/S(Y|X)²" },
    { label: "numerator", latex: "b_1^2S_{xx}=SS_R", fallback: "b₁²Sxx=SSR" },
    { label: "denominator", latex: "S_{Y\\mid X}^2=MS_E", fallback: "S(Y|X)²=MSE" },
    { label: "conclusion", latex: "t^2=\\frac{SS_R/1}{SS_E/(n-2)}=F", fallback: "t²=F" }
  ] },
  { type: "heading", text: "Distinguishing Explanation from Prediction" },
  { type: "paragraph", text: "The confidence interval for the mean response given X represents the uncertainty in the population mean line. The prediction interval for a new individual will always be wider because individual error is also added. Extrapolation outside the observation range should be handled with caution as there is no guarantee of a linear relationship." },
  { type: "list", ordered: true, items: ["Check the scatter plot and study design", "Estimate coefficients and confidence intervals", "Diagnose residuals, influence points, linearity, and homoscedasticity", "Report F, slope t, p-value, R², residual standard deviation", "Clarify the prediction target and scope of application without interpreting association as causation"] },
];

export const pearsonCorrelationEn = [
  { type: "paragraph", text: "The Pearson product-moment correlation coefficient, r, expresses the direction and strength of a linear relationship between two quantitative variables on a unit-independent scale from -1 to 1." },
  { type: "heading", text: "Calculating Pearson? r" },
  { type: "formula", latex: "r=\\frac{\\sum(X_i-\\bar X)(Y_i-\\bar Y)}{\\sqrt{\\sum(X_i-\\bar X)^2}\\sqrt{\\sum(Y_i-\\bar Y)^2}}", fallback: "standardized covariance" },
  { type: "formulaGroup", formulas: [
    { label: "Expression by covariance", latex: "r=\\frac{s_{XY}}{s_Xs_Y}", fallback: "r=sXY/(sX sY)" },
    { label: "range", latex: "-1\\le r\\le1", fallback: "−1≤r≤1" }
  ] },
  { type: "paragraph", text: "A positive value indicates that the variables tend to move in the same direction, whereas a negative value indicates opposite directions. The closer |r| is to 1, the more closely the observations follow a straight line. r=0 only indicates that there is no linear relationship; it does not negate the curvilinear relationship." },
  { type: "heading", text: "Checks before Using Pearson? r" },
  { type: "list", items: ["Both variables are quantitative", "The scatterplot shows an approximately linear relationship", "Observations are independent", "Outliers and mixtures of groups do not dominate r", "Bivariate normality or reasonable large sample approximation in inference"] },
  { type: "callout", tone: "warning", label: "Correlation is not causation", text: "Correlations occur due to confounding, reverse causation, selection, and common time trends. Range restrictions also weaken r, and mixing different groups can create apparent correlations." },
  { type: "heading", text: "Relationship to the Regression Slope" },
  { type: "formula", latex: "b_1=r\\frac{s_Y}{s_X}", fallback: "b₁=r(sY/sX)" },
  { type: "paragraph", text: "r is scale invariant, but the slope has Y units/X units. Even if the signs are the same, the same r does not necessarily mean the same real effect." },
  { type: "heading", text: "r², R², explained variation" },
  { type: "formulaGroup", formulas: [
    { label: "simple regression", latex: "r^2=R^2=\\frac{SS_R}{SS_T}", fallback: "r²=R²=SSR/SST" },
    { label: "percentage", latex: "100r^2\\%", fallback: "100r²%" }
  ] },
  { type: "paragraph", text: "In a simple regression with an intercept, r² is the proportion of the total variation in Y that the linear model explains. r itself is not interpreted as a percentage." },
  { type: "heading", text: "Test for population correlation ρ=0" },
  { type: "formulaGroup", formulas: [
    { label: "two-sided hypothesis", latex: "H_0:\\rho=0,\\qquad H_1:\\rho\\ne0", fallback: "H₀:ρ=0; H₁:ρ≠0" },
    { label: "t-statistic", latex: "t=\\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}", fallback: "t=r√(n−2)/√(1−r²)" },
    { label: "degrees of freedom", latex: "df=n-2", fallback: "df=n−2" }
  ] },
  { type: "heading", text: "Why correlation tests and regression F tests agree" },
  { type: "formulaGroup", formulas: [
    { label: "relationship to sums of squares", latex: "r^2=\\frac{SS_R}{SS_T}", fallback: "r²=SSR/SST" },
    { label: "t squared", latex: "t^2=\\frac{r^2(n-2)}{1-r^2}", fallback: "t²=r²(n−2)/(1−r²)" },
    { label: "conversion to F", latex: "t^2=\\frac{SS_R/1}{SS_E/(n-2)}=F", fallback: "t²=F" }
  ] },
  { type: "callout", tone: "forward", label: "Reporting", text: "Show n, r, 95% confidence intervals, p-values, and scatter plots, and explain direction, strength, nonlinearity, outliers, and confounding. The Fisher? z Transformationation can be used for confidence intervals for correlations." },
];
