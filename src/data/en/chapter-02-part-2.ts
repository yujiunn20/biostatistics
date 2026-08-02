export const tDistributionEn = [
  { type: "paragraph", text: "The t-distribution, also known as the Student's t-distribution, describes the variation in the standardized value of the sample mean when the population standard deviation is unknown. This name comes from William Sealy Gosset, who published under the pseudonym ``Student.''" },
  { type: "callout", tone: "intuition", label: "The problem the t distribution solves", text: "If the population standard deviation σ is known, the standard normal distribution can be used, but in reality, σ is usually unknown and is estimated using the sample standard deviation S. Because of the additional uncertainty in this estimate, the standardized values ​​follow a thick-tailed t-distribution rather than a standard normal distribution." },
  { type: "heading", text: "How is the t-distribution created?" },
  { type: "paragraph", text: "The t-distribution can consist of a standard normal variable Z and a chi-square variable U that is independent of Z and has ν degrees of freedom. The denominator U/ν represents the uncertainty in estimating the variance from the sample data." },
  { type: "formulaGroup", formulas: [
    { label: "Consists of standard normal variables and chi-square variables", latex: "T=\\frac{Z}{\\sqrt{U/\\nu}}\\sim t_{\\nu}", fallback: "T=Z/√(U/ν) ~ t(ν)" },
    { label: "t-statistic for one-sample mean", latex: "T=\\frac{\\bar X-\\mu}{S/\\sqrt n}\\sim t_{n-1}", fallback: "T=(X̄−μ)/(S/√n) ~ t(n−1)" }
  ] },
  { type: "table", rows: [["symbol", "meaning"], ["T", "Random variable or t-statistic that follows a t-distribution"], ["Z", "standard normal variable"], ["U", "chi-square variable independent of Z"], ["ν", "degrees of freedom of t distribution"], ["X̄", "sample mean"], ["μ", "population mean or hypothetical mean"], ["S", "Sample standard deviation to estimate unknown σ"], ["n", "sample size. For one sample, ν=n−1"]] },
  { type: "heading", text: "Difference between t distribution and standard normal distribution" },
  { type: "paragraph", text: "Both the t distribution and the standard normal distribution are symmetrical around 0 and have a bell shape. The difference is that the t-distribution has thicker tails, and values ​​farther from the center are more likely to appear. This reflects the additional uncertainty when the population standard deviation is unknown and is estimated using the sample standard deviation." },
  { type: "table", rows: [["comparison", "standard normal distribution", "t distribution"], ["center", "0", "0"], ["shape", "Left-right symmetrical/bell-shaped", "Left-right symmetrical/bell-shaped"], ["hem", "relatively thin", "The lower the degree of freedom, the thicker it is."], ["parameter that determines the shape", "Fixed to N(0,1)", "degree of freedom ν"], ["Main usage scenarios", "When the population standard deviation is known or normal approximation is used", "When the population standard deviation is unknown and estimated using the sample standard deviation"]] },
  { type: "heading", text: "How do degrees of freedom affect the t-distribution?" },
  { type: "paragraph", text: "When the degrees of freedom are low, there is less independent information available to estimate the standard deviation, and the uncertainty is greater, so the t-distribution also has thicker tails. As the sample size and degrees of freedom increase, the estimation of the population standard deviation by the sample standard deviation generally becomes more stable, and the t distribution approaches the standard normal distribution." },
  { type: "image", imageId: "t-df-normal-comparison" },
  { type: "callout", tone: "intuition", label: "There is no abrupt cutoff at 30 degrees of freedom", text: "n≥30 is a commonly used rule of thumb for educational purposes, and the t-distribution does not change to the standard normal distribution the moment the sample size reaches 30. The two gradually become closer as degrees of freedom increase, and whether the difference is of practical importance depends on the purpose of the analysis and the tail probabilities." },
  { type: "heading", text: "When should you use the t-distribution?" },
  { type: "list", items: ["Estimate the population mean from one sample mean", "Compare the means of two independent groups", "Compare mean differences for paired or repeated measures data", "Test regression coefficients and correlation coefficients", "Create a confidence interval for the population mean or regression coefficient"] },
  { type: "callout", tone: "forward", label: "Check conditions before use", text: "The exact derivation of the t-distribution is based on a normal population and associated conditions of independence. When actually using the t method, check the independence of the observed values, the presence of significant distortion or outliers, and whether to use one sample, paired, or independent two sample methods, depending on the research design." },
  { type: "heading", text: "Probability density function of t distribution" },
  { type: "paragraph", text: "The t-distribution with ν degrees of freedom has the following probability density function: Since the formula is centered at 0 and includes only t², positive and negative t values ​​with the same absolute value have the same density. This corresponds to the left-right symmetry of the t-distribution." },
  { type: "formula", latex: "f(t)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\nu\\pi}\\,\\Gamma\\!\\left(\\nu/2\\right)}\\left(1+\\frac{t^2}{\\nu}\\right)^{-(\\nu+1)/2},\\qquad -\\infty<t<\\infty", fallback: "Probability density function of t distribution, −∞<t<∞" },
  { type: "table", rows: [["symbol", "meaning"], ["f(t)", "Probability density of t distribution at position t"], ["t", "t random variable that takes any real number"], ["ν", "degrees of freedom of t distribution"], ["Γ", "Gamma function that extends the concept of factorial"], ["π", "Pi"]] },
  { type: "callout", tone: "intuition", label: "Where does this density function come from?", text: "It can be derived from the standard normal density of Z, the chi-square density of U, and the definition T=Z/√(U/ν). If we convert the simultaneous density of Z and U into variables and integrate U, which does not need to be retained, the Gamma function appears and the above t density is obtained. That is, this formula is not estimated separately, but is derived sequentially from the normal distribution, the chi-square distribution, and the definition of t." },
  { type: "details", label: "Supplement: Derivation of t density function", children: [
    { type: "heading", text: "Step 1: Starting from the definition of the t variable" },
    { type: "paragraph", text: "Assume that Z follows a standard normal distribution and U follows a chi-square distribution with ν degrees of freedom, and both are independent. Define T=Z/√(U/ν) and leave an auxiliary variable V=U to find the density of T." },
    { type: "formulaGroup", formulas: [
      { label: "Variable conversion", latex: "T=\\frac{Z}{\\sqrt{U/\\nu}},\\qquad V=U", fallback: "T=Z/√(U/ν)，V=U" },
      { label: "Inverse transformation", latex: "Z=T\\sqrt{V/\\nu},\\qquad U=V", fallback: "Z=T√(V/ν)，U=V" },
      { label: "Jacobian", latex: "\\left|\\frac{\\partial(z,u)}{\\partial(t,v)}\\right|=\\sqrt{\\frac{v}{\\nu}}", fallback: "|∂(z,u)/∂(t,v)|=√(v/ν)" }
    ] },
    { type: "paragraph", text: "Due to independence, the simultaneous density of Z and U can be expressed as the product of the two densities. Multiplying by Jacobian after variable transformation gives the joint density of T and V." },
    { type: "formula", latex: "f_{T,V}(t,v)=f_Z\\!\\left(t\\sqrt{v/\\nu}\\right)f_U(v)\\sqrt{\\frac{v}{\\nu}}", fallback: "fT,V(t,v)=fZ(t√(v/ν))fU(v)√(v/ν)" },
    { type: "heading", text: "Step 2: Integrate Out the Auxiliary Variable V" },
    { type: "paragraph", text: "Substituting the standard normal and chi-square densities and integrating for all possible v>0 leaves only T marginal densities." },
    { type: "formula", latex: "f_T(t)=\\frac{1}{\\sqrt{2\\pi\\nu}\\,2^{\\nu/2}\\Gamma(\\nu/2)}\\int_0^{\\infty}v^{(\\nu+1)/2-1}\\exp\\!\\left[-\\frac{v}{2}\\left(1+\\frac{t^2}{\\nu}\\right)\\right]dv", fallback: "Integrate the simultaneous density from 0 to ∞ with respect to v" },
    { type: "paragraph", text: "The integral part is in the form of a Gamma integral. It can be simplified directly using the following relation:" },
    { type: "formula", latex: "\\int_0^{\\infty}v^{a-1}e^{-bv}\\,dv=\\frac{\\Gamma(a)}{b^a},\\qquad a>0,\\ b>0", fallback: "∫₀∞v^(a−1)e^(−bv)dv=Γ(a)/bᵃ" },
    { type: "heading", text: "Step 3: Obtain the t Density" },
    { type: "formula", latex: "f_T(t)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\nu\\pi}\\,\\Gamma\\!\\left(\\nu/2\\right)}\\left(1+\\frac{t^2}{\\nu}\\right)^{-(\\nu+1)/2},\\qquad -\\infty<t<\\infty", fallback: "Simplification yields the probability density function of the t-distribution" },
    { type: "paragraph", text: "Therefore, the t-density is derived from the standard normal density, the chi-square density, and the definition of T. The Gamma function appears because the part that integrates and eliminates the chi-square variable has the form of a Gamma function." },
    { type: "table", rows: [["symbol", "Meaning in derivation"], ["V", "Auxiliary variable left for variable conversion, equal to U"], ["fT,V", "Simultaneous density of T and V"], ["∂(z,u)/∂(t,v)", "Jacobian determinant of multivariable transformation"], ["a、b", "Temporary parameter when applying Gamma integral"]] }
  ] },
  { type: "details", label: "Supplement: What is the Gamma function?", children: [
    { type: "paragraph", text: "The Gamma function extends the concept of factorials to non-positive integers. For a positive integer n, Γ(n)=(n−1)!, so it plays a role similar to a factorial in density functions that include non-integer parameters, such as half the degrees of freedom." },
    { type: "formulaGroup", formulas: [
      { label: "Gamma function definition", latex: "\\Gamma(a)=\\int_0^{\\infty}x^{a-1}e^{-x}\\,dx,\\qquad a>0", fallback: "Γ(a)=∫₀∞x^(a−1)e^(−x)dx，a>0" },
      { label: "recurrence formula", latex: "\\Gamma(a+1)=a\\,\\Gamma(a)", fallback: "Γ(a+1)=aΓ(a)" },
      { label: "Relationship with factorial", latex: "\\Gamma(n)=(n-1)!,\\qquad n=1,2,3,\\ldots", fallback: "Γ(n)=(n−1)!" },
      { label: "Frequently used half-integer values", latex: "\\Gamma\\!\\left(\\frac12\\right)=\\sqrt{\\pi}", fallback: "Γ(1/2)=√π" }
    ] },
    { type: "paragraph", text: "In the density function of the t-distribution, the Gamma function mainly appears in the constant coefficient in the front and adjusts the curve according to the degrees of freedom, making the total area under the density curve 1. You don't need to manually calculate the Gamma function to understand the t-distribution, but knowing its role will help you avoid mistaking Γ for a meaningless decoration." }
  ] },
  { type: "callout", tone: "forward", label: "This will return later", text: "In Chapter 4, we will incorporate the distributions we learned here into actual testing procedures and explain the one-sample t-test, paired t-test, and independent two-sample t-test.", related: ["04/one-sample-t-test", "04/paired-t-test", "04/independent-t-test"] },
];

export const chiSquareDistributionEn = [
  { type: "paragraph", text: "The chi-square distribution (χ² distribution) describes a random variable that is the sum of the squares of multiple independent standard normal variables. Because it converts the standardized deviation in each direction into a non-negative total variation, it is closely related to variance estimation, the chi-square test, and the F distribution, which will be treated later." },
  { type: "callout", tone: "intuition", label: "Core construction", text: "Starting from a standard normal variable, operate in the order of \"square → addition\". Squares make positive and negative deviations non-negative, and addition accumulates variations in multiple independent directions." },
  { type: "heading", text: "How is the chi-square distribution created?" },
  { type: "paragraph", text: "If Z₁, Z₂, ..., Zν are ν standard normal variables that are mutually independent, then U, which is the sum of the squares of each one, follows a chi-square distribution with ν degrees of freedom. Each additional square of an independent standard normal variable increases the degree of freedom by one." },
  { type: "formulaGroup", formulas: [
    { label: "Each variable follows a standard normal distribution", latex: "Z_i\\sim N(0,1),\\qquad i=1,2,\\ldots,\\nu", fallback: "Zᵢ ~ N(0,1)，i=1,2,…,ν" },
    { label: "The sum of squares creates a chi-square distribution", latex: "U=\\sum_{i=1}^{\\nu}Z_i^2\\sim\\chi^2_{\\nu}", fallback: "U=ΣZᵢ² ~ χ²(ν)" }
  ] },
  { type: "table", rows: [["symbol", "meaning"], ["Zᵢ", "i standard normal variable"], ["U", "Sum of squares of all standard normal variables"], ["ν", "Degree of freedom. number of independent squared terms"], ["χ²ν", "Chi-square distribution with ν degrees of freedom"]] },
  { type: "heading", text: "Why is the chi-square value never less than 0?" },
  { type: "paragraph", text: "Since each Zᵢ is not negative when squared, the sum of squares U must also be greater than or equal to 0. With one degree of freedom, the chi-square variable is the square of one standard normal variable. Intuitively, it can be thought that the values ​​on the left and right sides of the normal curve are mapped to the positive range by squaring, but the shape of the density also changes due to variable transformation." },
  { type: "callout", tone: "intuition", label: "Don't just fold the normal curve", text: "The idea that the left and right values ​​are both positive helps us understand why the chi-square value is non-negative. However, it is not simply a normal curve folded to the right and overlaid. The χ² distribution with one degree of freedom differs from the normal distribution because squaring changes the spacing and density of values." },
  { type: "heading", text: "Understanding the shape of one degree of freedom from the standard normal curve" },
  { type: "paragraph", text: "With ν=1 degrees of freedom, U=Z², and Z follows the standard normal distribution. After squaring both negative and positive values ​​of the standard normal curve, they are mapped to 0 or higher; for example, Z=−2 and Z=2 both become U=4. Therefore, it is thought that the probabilities on both the left and right sides are moved to the positive half axis and combined." },
  { type: "paragraph", text: "However, since squaring changes not only the sign but also the interval between values, density cannot be found by directly adding the left and right heights. Variable conversion requires a correction factor, and this is the \"correction term\" mentioned in the original note." },
  { type: "formulaGroup", formulas: [
    { label: "square a standard normal variable", latex: "U=Z^2,\\qquad Z\\sim N(0,1)", fallback: "U=Z²，Z~N(0,1)" },
    { label: "Chi-square density with 1 degree of freedom", latex: "f_U(u)=\\frac{\\phi(\\sqrt{u})+\\phi(-\\sqrt{u})}{2\\sqrt{u}}=\\frac{1}{\\sqrt{2\\pi u}}e^{-u/2},\\qquad u>0", fallback: "fᵤ(u)=[φ(√u)+φ(−√u)]/(2√u)，u>0" }
  ] },
  { type: "table", rows: [["symbol", "meaning"], ["φ(z)", "Probability density at position z of standard normal distribution"], ["√u、−√u", "Two original Z values ​​that, when squared, give u"], ["1/(2√u)", "Correction factor for density by square transformation"]] },
  { type: "heading", text: "How do degrees of freedom change the shape of the distribution?" },
  { type: "paragraph", text: "When the degrees of freedom are low, the chi-square distribution is strongly skewed to the right, with many values ​​clustered around 0 and a long tail on the right. As the degrees of freedom increase, the number of independent square terms increases, the center moves to the right, and the relative distortion decreases, approaching a bell shape, but the value never goes below 0." },
  { type: "heading", text: "Why does it become more bell-shaped as the degrees of freedom increase?" },
  { type: "paragraph", text: "A chi-square variable with ν degrees of freedom is the sum of ν mutually independent Zᵢ². Each Zᵢ² can be thought of as a chi-square variable with one degree of freedom, so increasing the degrees of freedom is equivalent to adding more independent squared terms with the same distribution. This is the same idea as the \"sum of many independent random variables\" that the central limit theorem deals with." },
  { type: "paragraph", text: "More precisely, each Zᵢ² has a mean of 1 and a variance of 2, so the sum U has a mean of ν and a variance of 2ν. As ν increases, the distribution obtained by subtracting the mean ν from U and dividing by the standard deviation √(2ν) approaches the standard normal distribution. Therefore, the unstandardized chi-square curve widens as it moves to the right, becoming less skewed and more bell-shaped." },
  { type: "formula", latex: "\\frac{U-\\nu}{\\sqrt{2\\nu}}\\xrightarrow{d}N(0,1)\\qquad(\\nu\\to\\infty)", fallback: "(U−ν)/√(2ν) approaches N(0,1) as ν increases" },
  { type: "callout", tone: "intuition", label: "A more precise explanation", text: "The understanding that ``adding many chi-square variables with 1 degree of freedom approaches a bell shape'' is correct and useful. However, the central limit theorem compares the distribution after centering and standardization. Rather than simply dividing the sum by ν, the center and width of the original chi-square distribution also vary with the degrees of freedom." },
  { type: "image", imageId: "chi-square-df-curves" },
  { type: "table", rows: [["nature", "χ² distribution with ν degrees of freedom"], ["possible values", "0 to positive infinity"], ["average", "ν"], ["dispersion", "2ν"], ["shape", "It is distorted to the right in low degrees of freedom, and becomes relatively symmetrical as degrees of freedom increase."]] },
  { type: "heading", text: "Chi-square distribution and sample variance" },
  { type: "paragraph", text: "When n independent observations are drawn from a normal population, the adjusted ratio of the sample variance S² to the population variance σ² follows a chi-square distribution with n−1 degrees of freedom. This is an important basis for estimating population variance from sample variance." },
  { type: "formulaGroup", formulas: [
    { label: "Standardize using known population mean", latex: "\\sum_{i=1}^{n}\\left(\\frac{X_i-\\mu}{\\sigma}\\right)^2\\sim\\chi_n^2", fallback: "Σ[(Xᵢ−μ)/σ]² ~ χ²(n)" },
    { label: "When using the sample mean", latex: "\\frac{(n-1)S^2}{\\sigma^2}=\\sum_{i=1}^{n}\\left(\\frac{X_i-\\bar X}{\\sigma}\\right)^2\\sim\\chi_{n-1}^2", fallback: "(n−1)S²/σ² = Σ[(Xᵢ−X̄)/σ]² ~ χ²(n−1)" }
  ] },
  { type: "table", rows: [["symbol", "meaning"], ["Xᵢ", "i-th observation"], ["μ、σ²", "Normal population mean and variance"], ["X̄、S²", "sample mean and sample variance"], ["n", "sample size"], ["n−1", "degrees of freedom remaining after using the sample mean"]] },
  { type: "callout", tone: "forward", label: "There is also a degree of freedom here.", text: "If we use the sample mean X̄ instead of the unknown μ, the sum of the n deviations must be 0, leaving only n−1 independent directions. This is the degree of freedom as independent information that can change freely even after constraints, as explained on the previous page." },
  { type: "heading", text: "Probability density function of chi-square distribution" },
  { type: "paragraph", text: "The probability density function of a chi-square distribution with ν degrees of freedom is: This formula determines the height and shape of the curve for each degree of freedom, and the total area under the curve is 1." },
  { type: "formula", latex: "f(u)=\\frac{1}{2^{\\nu/2}\\Gamma(\\nu/2)}u^{\\nu/2-1}e^{-u/2},\\qquad u>0", fallback: "f(u)=u^(ν/2−1)e^(−u/2)/[2^(ν/2)Γ(ν/2)]，u>0" },
  { type: "table", rows: [["symbol", "meaning"], ["f(u)", "Probability density of chi-square distribution at location u"], ["u", "Possible values ​​of chi-square variable greater than 0"], ["ν", "Chi-square distribution degrees of freedom"], ["Γ", "Gamma function that makes the total area under the density curve 1"], ["e", "The base of the natural logarithm of approximately 2.71828"]] },
  { type: "callout", tone: "intuition", label: "Two points to consider when reading formulas", text: "Since u only takes positive values, all chi-square curves are to the right of 0. Also, the degree of freedom ν appears in both the index and the coefficient, so changing the degree of freedom changes the shape of the entire curve." },
  { type: "details", label: "Supplement: Derivation of chi-square density function", children: [
    { type: "heading", text: "Step 1: Derive 1 degree of freedom" },
    { type: "paragraph", text: "Let Z be a variable with standard normal distribution and define U=Z². For any u>0, z²=u has two solutions: z=√u and z=−√u. Since two Z values ​​map to the same U value, density conversion adds both contributions." },
    { type: "formulaGroup", formulas: [
      { label: "standard normal density", latex: "\\phi(z)=\\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}", fallback: "φ(z)=e^(−z²/2)/√(2π)" },
      { label: "Inverse function and its derivative", latex: "z_1=\\sqrt{u},\\quad z_2=-\\sqrt{u},\\qquad \\left|\\frac{dz_j}{du}\\right|=\\frac{1}{2\\sqrt{u}}", fallback: "z=±√u，|dz/du|=1/(2√u)" },
      { label: "add two densities", latex: "f_U(u)=\\phi(\\sqrt{u})\\frac{1}{2\\sqrt{u}}+\\phi(-\\sqrt{u})\\frac{1}{2\\sqrt{u}}", fallback: "fᵤ(u)=[φ(√u)+φ(−√u)]/(2√u)" },
      { label: "After reduction", latex: "f_U(u)=\\frac{1}{\\sqrt{2\\pi u}}e^{-u/2},\\qquad u>0", fallback: "fᵤ(u)=e^(−u/2)/√(2πu)，u>0" }
    ] },
    { type: "paragraph", text: "|dz/du| is the Jacobian correction of variable transformation. It is not sufficient to directly add the heights on the left and right sides of the normal curve, as this reflects the expansion and contraction of the interval between values ​​by the square. The result is the chi-square density with one degree of freedom." },
    { type: "heading", text: "Another way to check: Compare the chi-square density with 1 degree of freedom and the standard normal density" },
    { type: "paragraph", text: "You can also check the reverse from two known densities. Standardize the general normal distribution to μ=0, σ=1, and set the degree of freedom ν of the chi-square density to 1." },
    { type: "formulaGroup", formulas: [
      { label: "General normal density", latex: "f_X(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\!\\left[-\\frac12\\left(\\frac{x-\\mu}{\\sigma}\\right)^2\\right]", fallback: "Density of general normal distribution" },
      { label: "Assign μ=0, σ=1", latex: "\\phi(x)=\\frac{1}{\\sqrt{2\\pi}}e^{-x^2/2}", fallback: "Standard normal density φ(x)=e^(-x²/2)/√(2π)" },
      { label: "General chi-square density", latex: "f_{\\chi^2_\\nu}(u)=\\frac{1}{2^{\\nu/2}\\Gamma(\\nu/2)}u^{\\nu/2-1}e^{-u/2}", fallback: "Chi-square density with ν degrees of freedom" },
      { label: "Use ν=1 and Γ(1/2)=√π", latex: "f_{\\chi^2_1}(u)=\\frac{1}{\\sqrt{2\\pi}}e^{-u/2}u^{-1/2}", fallback: "fχ²₁(u)=e^(-u/2)u^(-1/2)/√(2π)" }
    ] },
    { type: "paragraph", text: "If we put u=x², the exponential part e^(−u/2) of the chi-square density corresponds to e^(−x²/2) of the standard normal density, and the extra u^(−1/2) is the scale correction due to the square transformation. This is a complete correspondence to the explanation that \"a correction term remains even after replacing χ² with x²\"." },
    { type: "heading", text: "Second step: Expand to ν independent square terms" },
    { type: "paragraph", text: "Let U=Z₁²+⋯+Zν². Since repeating density convolution is cumbersome, we use a moment-generating function (MGF). The MGF of the sum of independent random variables is the product of their respective MGFs." },
    { type: "formulaGroup", formulas: [
      { label: "MGF of the square of one standard normal variable", latex: "M_{Z^2}(s)=E\\!\\left(e^{sZ^2}\\right)=(1-2s)^{-1/2},\\qquad s<\\frac12", fallback: "MZ²(s)=(1−2s)^(−1/2)" },
      { label: "sum of ν independent square terms", latex: "M_U(s)=\\prod_{i=1}^{\\nu}M_{Z_i^2}(s)=(1-2s)^{-\\nu/2}", fallback: "Mᵤ(s)=ΠMZᵢ²(s)=(1−2s)^(−ν/2)" },
      { label: "The corresponding chi-square density", latex: "f_U(u)=\\frac{1}{2^{\\nu/2}\\Gamma(\\nu/2)}u^{\\nu/2-1}e^{-u/2},\\qquad u>0", fallback: "fᵤ(u)=u^(ν/2−1)e^(−u/2)/[2^(ν/2)Γ(ν/2)]" }
    ] },
    { type: "paragraph", text: "The final MGF matches a Gamma distribution with shape parameter ν/2 and scale parameter 2, resulting in a chi-square density function with ν degrees of freedom." },
    { type: "table", rows: [["symbol", "Meaning in derivation"], ["φ(z)", "standard normal density function"], ["|dz/du|", "Jacobian absolute value correcting density with variable transformation"], ["Mᵤ(s)", "moment generating function of U"], ["E", "Expected value calculation"], ["Π", "Multiply the MGF of each independent squared term"], ["Γ", "Gamma function"]] }
  ] },
  { type: "callout", tone: "forward", label: "How to use it later?", text: "The chi-square distribution appears not only in variance estimates, but also in goodness-of-fit tests and independence tests for categorical materials. Since the origins of the statistics and degrees of freedom are not completely the same in both, they will be explained separately in later chapters." },
];

export const fDistributionEn = [
  { type: "paragraph", text: "The F-distribution comes from the first letter of R. A. Fisher's last name. A distribution that is obtained by dividing two mutually independent chi-square variables by their degrees of freedom and taking the ratio of the two, and is mainly used to compare the relative magnitudes of two independent amounts of variation." },
  { type: "callout", tone: "intuition", label: "Core construction", text: "The chi-square distribution accumulates the square of a standard normal variable as total variation. The F distribution divides two total variations by their degrees of freedom to give comparable average variations, and then calculates the ratio." },
  { type: "heading", text: "How is the F distribution created?" },
  { type: "paragraph", text: "Let U and V be mutually independent chi-square variables, and let the degrees of freedom be ν1 and ν2, respectively. If we divide U and V by each degree of freedom and then take the ratio, F follows an F distribution with ν₁ degrees of freedom in the numerator and ν₂ degrees of freedom in the denominator." },
  { type: "formulaGroup", formulas: [
    { label: "two independent chi-square variables", latex: "U\\sim\\chi^2_{\\nu_1},\\qquad V\\sim\\chi^2_{\\nu_2},\\qquad U\\perp V", fallback: "U~χ²(ν₁), V~χ²(ν₂), U and V are independent" },
    { label: "Create F distribution", latex: "F=\\frac{U/\\nu_1}{V/\\nu_2}\\sim F_{\\nu_1,\\nu_2}", fallback: "F=(U/ν₁)/(V/ν₂) ~ F(ν₁,ν₂)" }
  ] },
  { type: "table", rows: [["symbol", "meaning"], ["U、V", "Two mutually independent chi-square variables"], ["ν₁", "Numerator degrees of freedom corresponding to U"], ["ν₂", "Denominator degrees of freedom corresponding to V"], ["U/ν₁、V/ν₂", "Average variation of each chi-square variable divided by degrees of freedom"], ["Fν₁,ν₂", "F distribution with two degrees of freedom, numerator and denominator"], ["⊥", "represents that two random variables are independent"]] },
  { type: "heading", text: "Why doesn't the F value become less than 0?" },
  { type: "paragraph", text: "Both U and V are sums of squares, so they are not negative. F, which calculates the ratio by dividing by the positive degrees of freedom, also takes only positive values. F=1 indicates that the average fluctuations in the numerator and denominator are equal, F>1 indicates that the numerator is large, and F<1 indicates that the denominator is large." },
  { type: "callout", tone: "intuition", label: "The direction of the ratio is important", text: "If we swap the numerator and denominator, F becomes 1/F, and the two degrees of freedom are also swapped. When reading the F value, you need to check which variation is placed in the numerator and denominator." },
  { type: "formula", latex: "F\\sim F_{\\nu_1,\\nu_2}\\quad\\Longrightarrow\\quad \\frac{1}{F}\\sim F_{\\nu_2,\\nu_1}", fallback: "If F~F(ν₁,ν₂) then 1/F~F(ν₂,ν₁)" },
  { type: "heading", text: "How do the two degrees of freedom affect the shape?" },
  { type: "paragraph", text: "The F distribution is typically right-skewed and has a long tail on the right. The specific shape is determined by both the numerator degree of freedom ν₁ and the denominator degree of freedom ν₂. If the degrees of freedom are low, the variance estimation will be unstable, and the distribution will be wide and the right tail will be thick. As the number of degrees of freedom increases, the ratio generally clusters around 1." },
  { type: "image", imageId: "f-df-curves" },
  { type: "callout", tone: "forward", label: "Why write down two degrees of freedom?", text: "We record ν₁ and ν₂ separately because the numerator and denominator of F arise from different sources of variation and each has a different amount of independent information. A specific example is the between-groups degrees of freedom and within-groups degrees of freedom in ANOVA." },
  { type: "heading", text: "Probability density function of F distribution" },
  { type: "paragraph", text: "The F distribution with numerator degrees of freedom ν₁ and denominator degrees of freedom ν₂ has the following probability density function. Since two degrees of freedom appear simultaneously in the coefficient, index, and denominator, changing just one will change the shape of the curve." },
  { type: "formula", latex: "f(x)=\\frac{\\Gamma\\!\\left((\\nu_1+\\nu_2)/2\\right)}{\\Gamma(\\nu_1/2)\\Gamma(\\nu_2/2)}\\left(\\frac{\\nu_1}{\\nu_2}\\right)^{\\nu_1/2}x^{\\nu_1/2-1}\\left(1+\\frac{\\nu_1}{\\nu_2}x\\right)^{-(\\nu_1+\\nu_2)/2},\\quad x>0", fallback: "Probability density function of F distribution, x>0" },
  { type: "table", rows: [["symbol", "meaning"], ["f(x)", "Probability density of F distribution at position x"], ["x", "Possible values ​​of F random variable greater than 0"], ["ν₁、ν₂", "Numerator and denominator degrees of freedom"], ["Γ", "Gamma function used for normalization coefficient of density function"]] },
  { type: "details", label: "Supplement: Derivation of F density function", children: [
    { type: "heading", text: "Step 1: Start with two independent chi-square variables" },
    { type: "paragraph", text: "Let U~χ²ν₁, V~χ²ν₂, and let U and V be independent. Define X=(U/ν₁)/(V/ν₂) and leave the auxiliary variable Y=V." },
    { type: "formulaGroup", formulas: [
      { label: "Variable conversion", latex: "X=\\frac{U/\\nu_1}{V/\\nu_2},\\qquad Y=V", fallback: "X=(U/ν₁)/(V/ν₂)，Y=V" },
      { label: "Inverse transformation", latex: "U=\\frac{\\nu_1}{\\nu_2}XY,\\qquad V=Y", fallback: "U=(ν₁/ν₂)XY，V=Y" },
      { label: "Jacobian", latex: "\\left|\\frac{\\partial(u,v)}{\\partial(x,y)}\\right|=\\frac{\\nu_1}{\\nu_2}y", fallback: "|∂(u,v)/∂(x,y)|=(ν₁/ν₂)y" }
    ] },
    { type: "paragraph", text: "Since U and V are independent, the joint density is the product of the two chi-square densities. Substituting the inverse transformation and multiplying by the Jacobian gives the joint density of X and Y." },
    { type: "formula", latex: "f_{X,Y}(x,y)=f_U\\!\\left(\\frac{\\nu_1}{\\nu_2}xy\\right)f_V(y)\\frac{\\nu_1}{\\nu_2}y", fallback: "fX,Y(x,y)=fU((ν₁/ν₂)xy)fV(y)(ν₁/ν₂)y" },
    { type: "heading", text: "Step 2: Integrate and eliminate the auxiliary variable Y" },
    { type: "paragraph", text: "Integrating for all y>0 gives the marginal density of X. If we rearrange the part related to y, the integral becomes a Gamma integral again." },
    { type: "formula", latex: "f_X(x)=\\int_0^{\\infty}f_{X,Y}(x,y)\\,dy", fallback: "fX(x)=∫₀∞fX,Y(x,y)dy" },
    { type: "formula", latex: "\\int_0^{\\infty}y^{(\\nu_1+\\nu_2)/2-1}\\exp\\!\\left[-\\frac{y}{2}\\left(1+\\frac{\\nu_1}{\\nu_2}x\\right)\\right]dy", fallback: "The integral part has the form of a Gamma integral" },
    { type: "paragraph", text: "By simplifying with the Gamma integral formula and rearranging the constants, we can obtain the F density function described in the main text. The F density is not a separately assumed formula, but is derived from two independent chi-square densities, ratio definitions, and variable transformations." },
    { type: "table", rows: [["symbol", "Meaning in derivation"], ["X", "F random variable being derived"], ["Y", "Auxiliary variable equal to V"], ["fX,Y", "Simultaneous density of X and Y"], ["∂(u,v)/∂(x,y)", "Jacobian determinant of variable transformation"]] }
  ] },
  { type: "heading", text: "Relationship between F distribution and t distribution" },
  { type: "paragraph", text: "If T follows a t distribution with ν degrees of freedom, then T² follows an F distribution with 1 numerator degree of freedom and ν denominator degrees of freedom. This is because when the numerator Z of T is squared, it becomes a chi-square distribution with 1 degree of freedom, and the denominator originally contains U/ν." },
  { type: "formulaGroup", formulas: [
    { label: "Starting from the definition of t", latex: "T=\\frac{Z}{\\sqrt{U/\\nu}},\\qquad Z^2\\sim\\chi_1^2", fallback: "T=Z/√(U/ν)，Z²~χ²(1)" },
    { label: "When squared, it becomes F distribution.", latex: "T^2=\\frac{Z^2/1}{U/\\nu}\\sim F_{1,\\nu}", fallback: "T²=(Z²/1)/(U/ν)~F(1,ν)" }
  ] },
  { type: "callout", tone: "intuition", label: "Understanding square transformation from shapes", text: "The t value has positive and negative values, but after squaring, −t and +t reflect the same positive value t². It can be thought of as folding the left half of the t-distribution to the right and overlapping it, but since squaring also changes the interval on the horizontal axis, the density requires variable conversion correction. The idea is the same as when the square of a standard normal variable creates a chi-square distribution with one degree of freedom." },
  { type: "heading", text: "Why do the two-sided probabilities come together?" },
  { type: "paragraph", text: "The t distribution is symmetrical around 0. If the total significance level of a two-tailed test is α, then the left and right tails are each α/2. When squared, both T≤−|t| and T≥|t| are reflected in T²≥t², so the left and right probabilities are combined into one right tail of the F distribution. This is the exact meaning of the statement \"the probability doubles because both sides overlap\"." },
  { type: "formulaGroup", formulas: [
    { label: "Events on both sides merge after squaring", latex: "P(|T|\\ge t)=P(T\\le -t)+P(T\\ge t)=P(T^2\\ge t^2)", fallback: "P(|T|≥t)=P(T≤−t)+P(T≥t)=P(T²≥t²)" },
    { label: "Two-tailed t-test and two-tailed F-test", latex: "P(|T_\\nu|\\ge t_{\\nu,1-\\alpha/2})=\\alpha=P(F_{1,\\nu}\\ge t_{\\nu,1-\\alpha/2}^{\\,2})", fallback: "The total tail probability α of both sides t is equal to the right tail probability α of F(1,ν)" },
    { label: "Critical value relationship", latex: "F_{1,\\nu;1-\\alpha}=t_{\\nu;1-\\alpha/2}^{\\,2}", fallback: "Right tail α critical value of F(1,ν) = square of both α critical values ​​of tν" }
  ] },
  { type: "callout", tone: "intuition", label: "Not all probabilities simply double.", text: "The doubling results from the two tails of the symmetric t-distribution merging after squaring. In particular, there is a correspondence between a two-tailed t-test and a right-tailed F-test, and the same explanation cannot be directly applied to a one-tailed t-test." },
  { type: "details", label: "Supplement: From the density function, it is derived that T² follows the F distribution", children: [
    { type: "heading", text: "Step 1: Set the Numerator Degrees of Freedom to 1" },
    { type: "paragraph", text: "In the density function of the F distribution, set the numerator degree of freedom ν₁=1, the denominator degree of freedom ν₂=ν, and organize the coefficients using Γ(1/2)=√π and (1/ν)^(1/2)=1/√ν." },
    { type: "formulaGroup", formulas: [
      { label: "General density of F distribution", latex: "f_{F_{\\nu_1,\\nu_2}}(y)=\\frac{\\Gamma((\\nu_1+\\nu_2)/2)}{\\Gamma(\\nu_1/2)\\Gamma(\\nu_2/2)}\\left(\\frac{\\nu_1}{\\nu_2}\\right)^{\\nu_1/2}y^{\\nu_1/2-1}\\left(1+\\frac{\\nu_1}{\\nu_2}y\\right)^{-(\\nu_1+\\nu_2)/2}", fallback: "General density function of F(ν₁,ν₂)" },
      { label: "Substitute ν₁=1, ν₂=ν", latex: "f_{F_{1,\\nu}}(y)=\\frac{\\Gamma((\\nu+1)/2)}{\\Gamma(1/2)\\Gamma(\\nu/2)}\\left(\\frac{1}{\\nu}\\right)^{1/2}y^{-1/2}\\left(1+\\frac{y}{\\nu}\\right)^{-(\\nu+1)/2}", fallback: "Substitute 1 numerator degree of freedom and ν denominator degree of freedom for the general density of F" },
      { label: "Simplify with Γ(1/2)=√π", latex: "f_{F_{1,\\nu}}(y)=\\frac{\\Gamma((\\nu+1)/2)}{\\sqrt{\\pi\\nu}\\,\\Gamma(\\nu/2)}y^{-1/2}\\left(1+\\frac{y}{\\nu}\\right)^{-(\\nu+1)/2},\\quad y>0", fallback: "F(1,ν) density after reduction includes y^(-1/2)" }
    ] },
    { type: "heading", text: "Step 2: Compare with the density of the t-distribution" },
    { type: "paragraph", text: "If we replace t² with y in the t density with ν degrees of freedom, everything except y^(-1/2) matches the density of F(1, ν). This additional factor is not an arbitrary constant, but a Jacobian that corrects for changes in the horizontal axis scale due to the square transformation." },
    { type: "formula", latex: "f_{T_\\nu}(t)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\pi\\nu}\\,\\Gamma(\\nu/2)}\\left(1+\\frac{t^2}{\\nu}\\right)^{-(\\nu+1)/2}", fallback: "Density function of t distribution with ν degrees of freedom" },
    { type: "heading", text: "Step 3: Squaring Maps Two t Values to the Same F Value" },
    { type: "paragraph", text: "If Y=T², each y>0 has two elements, t=√y and t=−√y. For the density of Y, it is necessary to collect the probabilities on both the left and right sides of the t distribution, and the absolute value of the derivative of the inverse transformation t=±√y is 1/(2√y)." },
    { type: "formulaGroup", formulas: [
      { label: "Square transformation and two inverse functions", latex: "Y=T^2,\\qquad t_1=\\sqrt{y},\\quad t_2=-\\sqrt{y}", fallback: "Y=T²; t=√y or −√y" },
      { label: "Horizontal scale correction", latex: "\\left|\\frac{dt_1}{dy}\\right|=\\left|\\frac{dt_2}{dy}\\right|=\\frac{1}{2\\sqrt{y}}", fallback: "|dt/dy|=1/(2√y)" },
      { label: "density after squared", latex: "f_Y(y)=\\frac{f_T(\\sqrt{y})+f_T(-\\sqrt{y})}{2\\sqrt{y}}", fallback: "fY(y)=[fT(√y)+fT(−√y)]/(2√y)" }
    ] },
    { type: "paragraph", text: "Since the t distribution is symmetrical, f_T(−√y)=f_T(√y). 2 added on both sides and 2 in the derivative cancel each other out, leaving 1/√y=y^(−1/2)." },
    { type: "formulaGroup", formulas: [
      { label: "Utilizing the symmetry of the t-distribution", latex: "f_Y(y)=\\frac{2f_T(\\sqrt{y})}{2\\sqrt{y}}=f_T(\\sqrt{y})y^{-1/2}", fallback: "fY(y)=fT(√y)y^(-1/2)" },
      { label: "Substitute t density", latex: "f_Y(y)=\\frac{\\Gamma\\!\\left((\\nu+1)/2\\right)}{\\sqrt{\\pi\\nu}\\,\\Gamma(\\nu/2)}y^{-1/2}\\left(1+\\frac{y}{\\nu}\\right)^{-(\\nu+1)/2}=f_{F_{1,\\nu}}(y)", fallback: "The density after squared is equal to the density of F(1,ν)" },
      { label: "Derivation result", latex: "T\\sim t_\\nu\\quad\\Longrightarrow\\quad T^2\\sim F_{1,\\nu}", fallback: "If T~tν then T²~F(1,ν)" }
    ] },
    { type: "callout", tone: "intuition", label: "Correspondence with “folding, overlapping, and stretching”", text: "Adding the left and right densities corresponds to folding the left half of the t curve to the right and overlapping it, and 1/(2√y) corresponds to stretching the horizontal axis interval after squaring. The doubling probability and the correction term are the two parts of the variable transformation formula." },
    { type: "table", rows: [["symbol", "Meaning in derivation"], ["T", "t random variable with ν degrees of freedom"], ["Y=T²", "Non-negative random variable after square transformation"], ["fT", "Probability density function of t distribution"], ["fY", "Probability density function of Y after squared"], ["1/(2√y)", "Jacobian correction by differentiating t=±√y with y"], ["F(1,ν)", "F distribution with numerator degree of freedom 1 and denominator degree of freedom ν"]] }
  ] },
  { type: "heading", text: "Can F be considered an extension of t?" },
  { type: "paragraph", text: "If the numerator degree of freedom is 1, the F statistic is the square of the t statistic, and the F test can be thought of as a two-tailed t-test rewritten as a right-sided test that only looks at positive values. The general F distribution allows the numerator degree of freedom to be greater than 1, allowing multiple effects to be tested simultaneously. In this sense, it is an extension of the squared t-test to multiple degrees of freedom, but it cannot be said that all F distributions are the same as one t distribution." },
  { type: "table", rows: [["Comparison method", "question to answer", "Information obtained"], ["Overall F test", "Are there at least one difference in the means of the groups?", "Determine overall differences, but do not directly indicate which groups differ"], ["2 group t test", "Are the means of the two specified groups different?", "Show the direction of the difference and the details of the pair"], ["Post hoc pairwise comparison", "After the overall F is significant, which groups are different?", "Multiple sets are compared, but it is necessary to correct for the increase in type 1 error due to multiple comparisons."]] },
  { type: "paragraph", text: "With multiple groups, you can first use the F-test to check whether there is an overall difference, and then use pairwise t-type comparisons or post-hoc comparisons to check which groups differ. However, do not repeat too many uncorrected t-tests, and usually use Tukey, Bonferroni, Holm, etc. to control the overall error rate." },
  { type: "callout", tone: "forward", label: "Why look at both t and F in the same data?", text: "If there is one effect and the numerator degree of freedom is 1, then F=t², giving the same two-sided p-value. When testing multiple groups or multiple parameters at the same time, F is suitable for overall judgment. To find out the direction of the difference and which groups it is in, you need t-statistics, contrasts, and post-hoc comparisons." },
  { type: "heading", text: "Where is the F distribution used?" },
  { type: "list", items: ["Compare two population variances", "Compare between-group and within-group variation with ANOVA", "Test whether the entire regression model has explanatory power", "Comparing the fit improvement of adding parameters in a nested model", "Create confidence intervals and tests for variance components"] },
  { type: "callout", tone: "forward", label: "This will return later", text: "In the ANOVA in Chapter 6, we create the F statistic using the between-group mean square as the numerator and the within-group mean square as the denominator. The regression analysis in Chapter 7 uses the same variation decomposition and ratio ideas.", related: ["06/one-way-anova", "07/simple-linear-regression"] },
];
