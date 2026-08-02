export const samplingEn = [
  { type: "paragraph", text: "Sampling is the process of selecting some observation units from a population to create a sample, and inferring the population from that information. What you actually observe is a sample, but what you want to know about is usually a population that has not yet been completely observed." },
  { type: "callout", tone: "intuition", label: "Central question", text: "Sampling is not just a matter of reducing data. The focus is on understanding a larger population from limited data and how to evaluate the uncertainty caused by observing only a portion of it." },
  { type: "heading", text: "Population, Sample, Parameter, and Statistic" },
  { type: "paragraph", text: "The population is the entire unit being studied, and the sample is the part that is actually selected and observed. The value that represents a population is called a population, and the value calculated from a sample is called a statistic. Statistical inference involves estimating or testing unknown parameters from statistics." },
  { type: "table", rows: [["level", "subject", "Typical value", "nature"], ["population", "All units to be studied", "mean μ, variance σ², ratio p", "Usually unknown and estimated through inference"], ["sample", "n units selected from the population", "Mean X̄, variance s², ratio p̂", "Estimate the population by calculating from observed data"]] },
  { type: "formulaGroup", formulas: [
    { label: "Population and sample size", latex: "N=\\text{population size},\\qquad n=\\text{sample size}", fallback: "N is population size, n is sample size" },
    { label: "sample mean", latex: "\\bar X=\\frac{1}{n}\\sum_{i=1}^{n}X_i", fallback: "X̄=(1/n)ΣXᵢ" }
  ] },
  { type: "table", rows: [["Symbol", "Meaning"], ["N", "total number of units in the population"], ["n", "number of sample units"], ["Xᵢ", "the ith observation in the sample"], ["μ、σ²", "Population mean and variance"], ["X̄、s²", "sample mean and sample variance"], ["p、p̂", "Population proportion and sample proportion"]] },
  { type: "heading", text: "Why is sampling necessary?" },
  { type: "list", items: ["Population is too large or cannot be enumerated in its entirety", "Save time, manpower, and costs", "Destructive testing cannot measure all units.", "Small-scale research allows for enhanced training, measurement, and quality control.", "With probability sampling, the uncertainty caused by sampling can be statistically evaluated."] },
  { type: "callout", tone: "intuition", label: "A sample is not inherently more accurate than the population", text: "Although it may improve the quality of each piece of data because it is easier to manage, sampling error remains. If the sampling method is biased, even very large samples will consistently reach incorrect conclusions." },
  { type: "heading", text: "Sampling error and sampling bias" },
  { type: "paragraph", text: "Repeated sampling from the same population will naturally cause the statistics to fluctuate. This is sampling error. On the other hand, the systematic deviation of the sample from the population because certain individuals are more likely or less likely to be selected is called sampling bias." },
  { type: "table", rows: [["problem", "cause", "Will it improve with increasing sample size?"], ["sampling error", "Natural variation that randomly samples different individuals", "usually smaller"], ["sampling bias", "Systematic distortions due to sampling frame, inclusion method, and nonresponse", "It won't go away just by making it bigger"]] },
  { type: "callout", tone: "intuition", label: "Representativeness comes from design, not numbers.", text: "A few hundred cases appropriately selected according to the research purpose may be more representative of the population than 10,000 cases that are biased and easy to obtain. First, clearly define the target population and sampling frame." },
  { type: "heading", text: "Main probability sampling methods" },
  { type: "heading", text: "1. Simple random sampling" },
  { type: "paragraph", text: "A method in which individuals are randomly selected from a sampling frame, and each possible sample of size n has the same selection opportunity. Although the concept is straightforward, a complete sampling frame is required." },
  { type: "heading", text: "2. Systematic Sampling" },
  { type: "paragraph", text: "Randomly choose a starting point from the first k units, then sample every k units thereafter. While easy to implement, bias will occur if the roster has the same frequency as the sampling interval." },
  { type: "formula", latex: "k\\approx\\frac{N}{n}", fallback: "Sampling interval k≈N/n" },
  { type: "heading", text: "3. Stratified sampling" },
  { type: "paragraph", text: "Divide the population into non-overlapping strata based on important characteristics and randomly sample from each stratum. Ensures inclusion of important subpopulations. When sampled disproportionately, weighting is required for analysis of the entire population." },
  { type: "heading", text: "4. Cluster Sampling" },
  { type: "paragraph", text: "Create a natural group such as a hospital, school, or community, and select a portion of it at random. There are single-stage methods that look at everyone in a selected cluster, and multi-stage methods that extract more individuals." },
  { type: "callout", tone: "intuition", label: "Don't confuse stratification with clustering", text: "Stratified sampling typically samples from all strata, while cluster sampling selects only some clusters. Because individuals within the same cluster are likely to be similar, intracluster correlation is considered in the analysis." },
  { type: "table", rows: [["method", "Sampling procedure", "Main benefits", "main danger"], ["simple random sampling", "Select units from the complete population list", "Concept and analysis are direct", "Difficult to obtain complete roster"], ["systematic sampling", "every k units from a random starting point", "easy to implement", "Roster periodicity"], ["stratified sampling", "Sample from every stratum", "Representativeness of subpopulations", "Non-proportional sampling requires weights"], ["cluster sampling", "Select some natural groups or clusters", "Reduce geographic and implementation costs", "Similarity within clusters reduces the amount of effective information"]] },
  { type: "heading", text: "Central Limit Theorem" },
  { type: "paragraph", text: "When the observed values ​​are independently and identically distributed and the population has a finite mean μ and variance σ², as n increases, the distribution that standardizes the sample mean approaches the standard normal distribution." },
  { type: "formulaGroup", formulas: [
    { label: "Approximate distribution of sample mean", latex: "\\bar X\\approx N\\!\\left(\\mu,\\frac{\\sigma^2}{n}\\right)", fallback: "X̄≈N(μ,σ²/n)" },
    { label: "standardized shape", latex: "\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\xrightarrow{d}N(0,1)\\qquad(n\\to\\infty)", fallback: "(X̄-μ)/(σ/√n)→N(0,1)" }
  ] },
  { type: "callout", tone: "intuition", label: "This does not mean that the original data is normally distributed.", text: "The central limit theorem describes the sampling distribution of the sample mean. The original data of a population or one sample does not change to a normal distribution as n increases." },
  { type: "paragraph", text: "If the population is normally distributed, the sample mean is also normally distributed, regardless of n. If it's non-normal, you'll need a large enough n, but n≥30 is just a rule of thumb, and the more skewed, thick tails, and outliers you have, the bigger the sample you need." },
  { type: "heading", text: "From One Sample to All Possible Samples" },
  { type: "paragraph", text: "If we simply randomly sample n units from a finite population of N units without considering their order and without reconstruction, the possible number of samples is C(N,n), and one sample mean can be calculated from each sample." },
  { type: "formulaGroup", formulas: [
    { label: "possible sample size", latex: "m=\\binom{N}{n}", fallback: "m=C(N,n)" },
    { label: "mean of jth sample", latex: "\\bar X_j=\\frac{1}{n}\\sum_{i=1}^{n}X_{ji},\\qquad j=1,2,\\ldots,m", fallback: "X̄ⱼ=(1/n)ΣXⱼᵢ" }
  ] },
  { type: "heading", text: "What Is a Sampling Distribution?" },
  { type: "paragraph", text: "The probability distribution of a statistic over all possible samples, or conceptual repetitions of sampling, is its sampling distribution. The distribution of the repeatedly obtained X̄ values is the sampling distribution of the sample mean." },
  { type: "table", rows: [["distribution", "Contained values", "question to answer"], ["population distribution", "each observation in the population", "What is the shape of the entire population?"], ["sample data distribution", "n observations of one sample", "What is the shape of these data?"], ["sampling distribution of statistics", "X̄, p̂, etc. across repeated samples", "How do the results change if the study is repeated?"]] },
  { type: "heading", text: "Sampling Distribution of the Sample Mean" },
  { type: "paragraph", text: "The sample mean is an unbiased estimator if X₁,…,Xₙ are independent observations from the same population with mean μ and variance σ². The mean of the repeated sample means is equal to the population mean." },
  { type: "formulaGroup", formulas: [
    { label: "center of sampling distribution", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
    { label: "variance of sampling distribution", latex: "\\operatorname{Var}(\\bar X)=\\frac{\\sigma^2}{n}", fallback: "Var(X̄)=σ²/n" },
    { label: "standard error of the sample mean", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" }
  ] },
  { type: "callout", tone: "intuition", label: "Standard deviation and standard error are different", text: "The standard deviation represents the difference between individuals, and the standard error represents the instability of a statistic when a study is repeated. Increasing the sample size will not eliminate individual differences, but will stabilize the sample mean." },
  { type: "details", label: "Supplement 1: Linear combination of random variables", children: [
    { type: "paragraph", text: "Uppercase Xᵢ is a random variable whose value is uncertain before sampling, and lowercase xᵢ is a fixed value observed after sampling. The formula for deriving the sampling distribution deals with Xᵢ, which changes with repeated sampling." },
    { type: "formula", latex: "L=c_1X_1+\\cdots+c_nX_n=\\sum_{i=1}^{n}c_iX_i", fallback: "L=ΣcᵢXᵢ" },
    { type: "formulaGroup", formulas: [
      { label: "Expected value", latex: "E(L)=\\sum_{i=1}^{n}c_iE(X_i)", fallback: "E(L)=ΣcᵢE(Xᵢ)" },
      { label: "Variance in the independent case", latex: "\\operatorname{Var}(L)=\\sum_{i=1}^{n}c_i^2\\operatorname{Var}(X_i)", fallback: "Var(L)=Σcᵢ²Var(Xᵢ)" },
      { label: "If there is a correlation", latex: "\\operatorname{Var}(L)=\\sum_{i=1}^{n}c_i^2\\operatorname{Var}(X_i)+2\\sum_{i<j}c_ic_j\\operatorname{Cov}(X_i,X_j)", fallback: "Var(L)=Σcᵢ²Var(Xᵢ)+2ΣcᵢcⱼCov(Xᵢ,Xⱼ)" }
    ] },
    { type: "callout", tone: "intuition", label: "Conditions for adding variance", text: "Linearity of expected values ​​does not require independence, but adding variance to each term separately requires independence or zero covariance. The coefficients are squared in the variance equation." }
  ] },
  { type: "details", label: "Supplement 2: Derivation of mean and standard error of sample mean", children: [
    { type: "heading", text: "Sampling Without Replacement from a Finite Population" },
    { type: "paragraph", text: "If we enumerate all C(N,n) samples, each population value appears in C(N−1,n−1) samples. From this combinatorial count, we get E(X̄)=μ. A pair of two values ​​appears in C(N−2,n−2) samples, and arranging the square and cross terms yields a finite population correction." },
    { type: "formulaGroup", formulas: [
      { label: "impartiality", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
      { label: "Variance in a finite population", latex: "\\operatorname{Var}(\\bar X)=\\frac{N-n}{n(N-1)}\\sigma^2", fallback: "Var(X̄)=[(N−n)/(n(N−1))]σ²" },
      { label: "Standard error in a finite population", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}\\sqrt{\\frac{N-n}{N-1}}", fallback: "SE(X̄)=(σ/√n)√[(N−n)/(N−1)]" }
    ] },
    { type: "heading", text: "Derivation by linear combination of independent random variables" },
    { type: "paragraph", text: "If N is sufficiently larger than n, each draw can be treated as approximately independent, and X̄ can be treated as a linear combination of coefficients 1/n." },
    { type: "formulaGroup", formulas: [
      { label: "sample mean", latex: "\\bar X=\\sum_{i=1}^{n}\\frac{X_i}{n}", fallback: "X̄=ΣXᵢ/n" },
      { label: "average", latex: "E(\\bar X)=\\sum_{i=1}^{n}\\frac{1}{n}E(X_i)=\\mu", fallback: "E(X̄)=μ" },
      { label: "dispersion", latex: "\\operatorname{Var}(\\bar X)=\\sum_{i=1}^{n}\\frac{1}{n^2}\\operatorname{Var}(X_i)=\\frac{\\sigma^2}{n}", fallback: "Var(X̄)=σ²/n" },
      { label: "standard error", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" }
    ] },
    { type: "paragraph", text: "Finite population methods accurately preserve dependencies due to nonrecovery sampling. The linear combination method is a simple approximation where N≫n and ignores the influence of a finite population." }
  ] },
  { type: "paragraph", text: "If σ is unknown, estimate the standard error using s/√n. Sampling without replacement is performed from a finite population, and if the sampling rate n/N cannot be ignored, a finite population correction is applied." },
  { type: "formulaGroup", formulas: [
    { label: "Estimate by sample standard deviation", latex: "\\widehat{\\operatorname{SE}}(\\bar X)=\\frac{s}{\\sqrt n}", fallback: "Estimated SE(X̄)=s/√n" },
    { label: "Finite population correction", latex: "\\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}\\sqrt{\\frac{N-n}{N-1}}", fallback: "SE with finite population correction" }
  ] },
  { type: "heading", text: "Why is the sample variance divided by n-1?" },
  { type: "paragraph", text: "Since X̄ is estimated from the same data, the sum of n deviations Xᵢ−X̄ is 0, and n−1 can vary independently. When divided by n−1, the sample variance becomes an unbiased estimator of the population variance." },
  { type: "formulaGroup", formulas: [
    { label: "sample variance", latex: "s^2=\\frac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "s²=Σ(Xᵢ-X̄)²/(n-1)" },
    { label: "sample standard deviation", latex: "s=\\sqrt{s^2}", fallback: "s=√s²" },
    { label: "impartiality", latex: "E(s^2)=\\sigma^2", fallback: "E(s²)=σ²" }
  ] },
  { type: "details", label: "Supplement 3: Estimation of population variance using sample variance", children: [
    { type: "paragraph", text: "Averages the within-sample variation v in the denominator n over all possible samples of a finite population. We use the fact that each xᵢ² appears C(N−1,n−1) times and each xᵢxⱼ appears C(N−2,n−2) times." },
    { type: "formulaGroup", formulas: [
      { label: "Within-sample variation of denominator n", latex: "v=\\frac{1}{n}\\sum(X_i-\\bar X)^2", fallback: "v=Σ(Xᵢ−X̄)²/n" },
      { label: "mean over possible samples", latex: "E(v)=\\frac{n-1}{n}\\frac{N}{N-1}\\sigma^2", fallback: "E(v)=[(n−1)/n][N/(N−1)]σ²" },
      { label: "Correction for large populations", latex: "s^2=\\frac{n}{n-1}v=\\frac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2", fallback: "s²=Σ(Xᵢ−X̄)²/(n−1)" }
    ] },
    { type: "callout", tone: "intuition", label: "Conventions for the denominator of population variance", text: "If we define the finite population variance as N−1, E(s²) will match exactly. For σ² defined by N, a finite population difference of N/(N−1) remains." }
  ] },
  { type: "callout", tone: "forward", label: "Connection with degrees of freedom", text: "n−1 is not an additional rule, but a linear constraint resulting from estimating X̄. The degrees of freedom as independent information that remains after constraints are reflected in the sample variance.", related: ["02/degrees-of-freedom"] },
  { type: "heading", text: "How does sample size affect standard error?" },
  { type: "paragraph", text: "Since the standard error is inversely proportional to √n, increasing the sample size concentrates the distribution of the sample mean, but the improvement is not linear. To halve the standard error, quadruple the sample size." },
  { type: "formula", latex: "\\operatorname{SE}(\\bar X)\\propto\\frac{1}{\\sqrt n}", fallback: "SE(X̄)∝1/√n" },
  { type: "callout", tone: "forward", label: "Why do we need the sampling distribution later?", text: "Confidence intervals, p-values, and critical values ​​require knowledge of how statistics are distributed over repeated sampling. The Z, t, χ², and F tests all create a sampling distribution of a hypothesized statistic and determine where observations fall within it." },
];
