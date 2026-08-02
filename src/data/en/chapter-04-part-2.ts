export const zTestEn = [
  { type: "paragraph", text: "The Z-test compares the sample statistic to the population specified by the null hypothesis and measures how many standard errors the difference is. Since standardized statistics follow or approximate a standard normal distribution under H₀, critical values ​​and p-values ​​can be determined." },
  { type: "callout", tone: "forward", label: "Roadmap", text: "Create a sampling distribution for the sample mean → Standardize around μ of H₀ → Determine the extremeness using the Z distribution → Connect α, β, power, confidence interval, and sample size from the same critical point." },
  { type: "heading", text: "Distinguishing an Individual Z Score from a Z Statistic for a Mean" },
  { type: "paragraph", text: "An individual Z score indicates how many population standard deviations X is away from the population mean. In testing the mean, we treat X̄ and use its standard deviation, the standard error σ/√n, as the denominator." },
  { type: "formulaGroup", formulas: [
    { label: "individual z-score", latex: "Z=\\frac{X-\\mu}{\\sigma}", fallback: "Z=(X−μ)/σ" },
    { label: "Standardization of sample mean", latex: "Z=\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}", fallback: "Z=(X̄−μ)/(σ/√n)" }
  ] },
  { type: "table", rows: [["Symbol", "Meaning"], ["X", "individual observations"], ["X̄", "sample mean of n observations"], ["μ", "population mean"], ["μ₀", "The population mean specified by H₀"], ["σ", "known population standard deviation"], ["n", "sample size"], ["σ/√n", "standard error of the sample mean"]] },
  { type: "heading", text: "Why the Z Test Is Valid" },
  { type: "paragraph", text: "If the population is normally distributed, the sample mean is also normally distributed. Even if it is non-normal, it can be approximated by the central limit theorem with appropriate conditions and sufficient n." },
  { type: "formulaGroup", formulas: [
    { label: "Expected value of sample mean", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
    { label: "variance of sample mean", latex: "\\operatorname{Var}(\\bar X)=\\frac{\\sigma^2}{n}", fallback: "Var(X̄)=σ²/n" },
    { label: "standard error", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" },
    { label: "Z statistic under H₀", latex: "Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}\\sim N(0,1)", fallback: "Z=(X̄−μ₀)/(σ/√n)~N(0,1)" }
  ] },
  { type: "callout", tone: "intuition", label: "Intuition", text: "The numerator is the distance between the sample result and H₀, and the denominator is the normal sampling variation of the sample mean. Z=2 indicates 2 standard deviations higher than μ₀, not 2 standard deviations of the original data." },
  { type: "heading", text: "Z-test conditions" },
  { type: "list", items: ["The sampling distribution of the statistic is normal or can be reasonably approximated by a normal distribution.", "Random sampling and independence of observations. Paired or clustered data require methods appropriate to that dependence structure", "In the Z test of the mean, the population standard deviation σ is known. When σ is unknown and replaced by s, use a t test as a general rule.", "Even with a large sample, unknown σ does not become known."] },
  { type: "heading", text: "Hypotheses and Decision for a One-Sample Mean" },
  { type: "formulaGroup", formulas: [
    { label: "two-sided", latex: "H_0:\\mu=\\mu_0,\\qquad H_1:\\mu\\ne\\mu_0", fallback: "H₀: μ=μ₀；H₁: μ≠μ₀" },
    { label: "right-tailed", latex: "H_0:\\mu\\leq\\mu_0,\\qquad H_1:\\mu>\\mu_0", fallback: "H₀: μ≤μ₀；H₁: μ>μ₀" },
    { label: "left-tailed", latex: "H_0:\\mu\\geq\\mu_0,\\qquad H_1:\\mu<\\mu_0", fallback: "H₀: μ≥μ₀；H₁: μ<μ₀" }
  ] },
  { type: "table", rows: [["Direction", "Rejection condition", "p-value"], ["two-sided", "|Zobs| ≥ z₁₋α⁄₂", "2P(Z≥|Zobs|)"], ["right-tailed", "Zobs ≥ z₁₋α", "P(Z≥Zobs)"], ["left-tailed", "Zobs ≤ zα", "P(Z≤Zobs)"]] },
  { type: "callout", tone: "intuition", label: "Do Not Confuse z Values with p-Values", text: "The Z value is the position within the H₀ distribution, and the p value is the tail area integrated from that position in a direction that supports H₁ more. First there is position, then there is area." },
  { type: "heading", text: "Z-test for independent two-sample means" },
  { type: "paragraph", text: "For two independent groups, we treat the mean difference X̄₁−X̄₂. If the population variance is known, due to independence, the variance of the mean difference is the sum of the variances of the two groups." },
  { type: "formulaGroup", formulas: [
    { label: "variance of mean difference", latex: "\\operatorname{Var}(\\bar X_1-\\bar X_2)=\\frac{\\sigma_1^2}{n_1}+\\frac{\\sigma_2^2}{n_2}", fallback: "Var(X̄₁−X̄₂)=σ₁²/n₁+σ₂²/n₂" },
    { label: "Independent two-sample Z statistic", latex: "Z=\\frac{(\\bar X_1-\\bar X_2)-\\Delta_0}{\\sqrt{\\sigma_1^2/n_1+\\sigma_2^2/n_2}}", fallback: "Z=[(X̄₁−X̄₂)−Δ₀]/√(σ₁²/n₁+σ₂²/n₂)" }
  ] },
  { type: "paragraph", text: "For a test of no difference, Δ₀=0. Since covariance cannot be ignored in matched data, we analyze the differences between each pair." },
  { type: "heading", text: "Confidence Interval: Solve the Same Standardized Equation for μ" },
  { type: "paragraph", text: "A two-tailed (1−α) confidence interval is obtained by solving for the unknown μ from the median area 1−α of a standard normal distribution." },
  { type: "formulaGroup", formulas: [
    { label: "median probability", latex: "P\\!\\left(-z_{1-\\alpha/2}\\leq\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\leq z_{1-\\alpha/2}\\right)=1-\\alpha", fallback: "Median probability = 1−α" },
    { label: "Solve μ", latex: "P\\!\\left(\\bar X-z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}\\leq\\mu\\leq\\bar X+z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}\\right)=1-\\alpha", fallback: "μ is in the range of X̄±z·σ/√n" },
    { label: "confidence interval", latex: "\\bar X\\pm z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}", fallback: "X̄ ± z₁₋α⁄₂·σ/√n" }
  ] },
  { type: "paragraph", text: "In the 95% interval, z₀.₉₇₅=1.96. The confidence level is the long-term proportion of intervals containing the true μ when the same procedure is repeated, not the probability that μ falls within the completed fixed interval." },
  { type: "callout", tone: "forward", label: "Relationship with hypothesis testing", text: "A two-tailed α test for the same model rejects H₀ if μ₀ is outside the (1−α) confidence interval. The p-value, critical value, and confidence interval are looking at the same sampling distribution." },
  { type: "heading", text: "Overlapping the H₀ and H₁ Distributions" },
  { type: "paragraph", text: "α is the area that exceeds the critical point and is falsely rejected when H₀ is true, and β is the area that cannot cross the same critical point when a certain H₁ (μ=μ₁) is true." },
  { type: "image", imageId: "z-errors-overlap" },
  { type: "callout", tone: "intuition", label: "Viewing the same critical line from two distributions", text: "The area under the H₀ curve on the right side of the critical point is α, and the area under the H₁ curve on the left side is β. The remaining area on the right side of the H₁ curve, 1−β, is the statistical power." },
  { type: "heading", text: "Determine the Right-Tailed Critical Point from α under H₀" },
  { type: "image", imageId: "z-type-i-critical" },
  { type: "formulaGroup", formulas: [
    { label: "Z value of critical point", latex: "z_{1-\\alpha}=\\frac{c-\\mu_0}{\\sigma/\\sqrt n}", fallback: "z₁₋α=(c−μ₀)/(σ/√n)" },
    { label: "critical sample mean", latex: "c=\\mu_0+z_{1-\\alpha}\\frac{\\sigma}{\\sqrt n}", fallback: "c=μ₀+z₁₋α·σ/√n" }
  ] },
  { type: "heading", text: "β for a Right-Tailed Test: View the Same Critical Point under H₁" },
  { type: "image", imageId: "z-type-ii-beta" },
  { type: "formulaGroup", formulas: [
    { label: "Standardized critical point under H₁", latex: "z_\\beta=\\frac{c-\\mu_1}{\\sigma/\\sqrt n}", fallback: "zβ=(c−μ₁)/(σ/√n)" },
    { label: "Type 2 error", latex: "\\beta=P_{\\mu_1}(\\bar X\\leq c)=\\Phi(z_\\beta)", fallback: "β=Pμ₁(X̄≤c)=Φ(zβ)" },
    { label: "statistical power", latex: "1-\\beta=1-\\Phi(z_\\beta)=\\Phi(-z_\\beta)", fallback: "Power=1−β=Φ(−zβ)" }
  ] },
  { type: "heading", text: "Sample Size: Control α While Maintaining Power" },
  { type: "paragraph", text: "By subtracting two equations that use the same critical point c for H₀ and H₁, c disappears and the required sample size can be found." },
  { type: "formulaGroup", formulas: [
    { label: "Eliminate critical points", latex: "z_{1-\\alpha}-z_\\beta=\\frac{\\mu_1-\\mu_0}{\\sigma/\\sqrt n}", fallback: "z₁₋α−zβ=(μ₁−μ₀)/(σ/√n)" },
    { label: "Symmetry of normal distribution", latex: "z_\\beta=-z_{1-\\beta}", fallback: "zβ=−z₁₋β" },
    { label: "1 sample side sample size", latex: "n=\\left[\\frac{(z_{1-\\alpha}+z_{1-\\beta})\\sigma}{\\mu_1-\\mu_0}\\right]^2", fallback: "n={[(z₁₋α+z₁₋β)σ]/(μ₁−μ₀)}²" }
  ] },
  { type: "paragraph", text: "Round up n. This formula is for a one-sample, one-tailed, mean Z test with known σ, with z₁₋α⁄₂ for two-sided." },
  { type: "details", label: "Supplementary example: sample size and detectable difference", children: [
    { type: "paragraph", text: "In a study comparing hip ultrasound alpha angle between preterm and term infants, we planned a sample size for each group to detect a mean difference of 3° or 2°, with σ = 4.9°, two-sided α = 0.05, and a power of 80%." },
    { type: "formulaGroup", formulas: [
      { label: "Standard error of the mean difference between two independent groups", latex: "\\operatorname{SE}(\\bar X_1-\\bar X_2)=\\sigma\\sqrt{\\frac{2}{n}}", fallback: "SE=σ√(2/n)" },
      { label: "Sample size for each group", latex: "n=2\\left[\\frac{(z_{1-\\alpha/2}+z_{1-\\beta})\\sigma}{\\delta}\\right]^2", fallback: "n=2{[(z₁₋α⁄₂+z₁₋β)σ]/δ}²" }
    ] },
    { type: "table", rows: [["Detectable difference δ", "Effect size d=δ/σ", "Normal approximation", "Published study"], ["3°", "Approximately 0.61", "Approximately 42 hips in each group", "43 hips"], ["2°", "Approximately 0.41", "Approximately 95 hips in each group", "96 hips"]] },
    { type: "callout", tone: "intuition", label: "Meaning of the results", text: "The small group's 58 hips exceeds the required number for a 3° difference, but falls short for a 2° difference. Just because it's non-significant doesn't mean there aren't differences of all magnitudes." },
    { type: "callout", tone: "forward", label: "Be careful with the unit of analysis", text: "244 hips were obtained from 122 individuals, and there may be a correlation between the left and right hips of the same infant. In actual analysis, within-subject correlations must be reflected in the model." },
    { type: "paragraph", text: "Reference: Hockett C, et al. J Pediatr Orthop. 2024;44(1):e25–e29. doi:10.1097/BPO.0000000000002540." }
  ] },
  { type: "heading", text: "How the Formula Determines Sample Size" },
  { type: "table", rows: [["change", "necessary n", "reason"], ["α↓", "increase", "Type 1 errors are suppressed and boundaries become stricter."], ["β↓（power↑）", "increase", "We need information so we don't miss the real difference."], ["σ↑", "increase", "loud noise"], ["|μ₁−μ₀|↑", "decrease", "Big differences are easy to spot"]] },
  { type: "heading", text: "Deriving Power from the Same Framework" },
  { type: "formulaGroup", formulas: [
    { label: "One-sided statistical power", latex: "1-\\beta=\\Phi\\!\\left(\\frac{\\sqrt n\\,|\\mu_1-\\mu_0|}{\\sigma}-z_{1-\\alpha}\\right)", fallback: "1−β=Φ[√n|μ₁−μ₀|/σ−z₁₋α]" },
    { label: "two-sided approximation", latex: "1-\\beta\\approx\\Phi\\!\\left(\\frac{\\sqrt n\\,|\\mu_1-\\mu_0|}{\\sigma}-z_{1-\\alpha/2}\\right)", fallback: "1−β≈Φ[√n|μ₁−μ₀|/σ−z₁₋α⁄₂]" }
  ] },
  { type: "paragraph", text: "For strict two-sided power, we add the probability that the H₁ distribution falls into both the left and right rejection regions. An increase in n or effect increases the power, and an increase in σ or a decrease in α decreases the power if other conditions are held constant." },
  { type: "image", imageId: "z-alpha-beta-tradeoff" },
  { type: "callout", tone: "forward", label: "α and β are not simple binary choices.", text: "If only the boundary were moved, α and β would change in opposite directions, but by increasing n and reducing measurement fluctuations, it is possible to reduce the overlap of the distributions and increase statistical power without loosening α." },
];
