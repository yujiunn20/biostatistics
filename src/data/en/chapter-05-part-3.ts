export const chiSquareIndependenceEn = [
  { type: "paragraph", text: "The chi-square independence test evaluates whether two categorical variables observed in a population are independent using the entire contingency table. The difference between the observed frequencies and the expected frequencies if they were independent is summarized in the Pearson chi-square statistic." },
  { type: "callout", tone: "forward", label: "Differences from goodness-of-fit test", text: "A goodness-of-fit test compares the distribution of a univariate to a specified proportion. The independence test examines the relationship between two variables and calculates the expected frequencies from the observed marginal frequencies of rows and columns." },
  { type: "heading", text: "Hypotheses" },
  { type: "formulaGroup", formulas: [
    { label: "null hypothesis", latex: "H_0:X\\text{ and }Y\\text{ are independent}", fallback: "H₀: X and Y are independent" },
    { label: "alternative hypothesis", latex: "H_1:X\\text{ and }Y\\text{ are not independent}", fallback: "H₁: X and Y are not independent" },
    { label: "Probability condition for H₀", latex: "P(X=i,Y=j)=P(X=i)P(Y=j)", fallback: "P(X=i,Y=j)=P(X=i)P(Y=j)" }
  ] },
  { type: "heading", text: "Deriving expected count from independence" },
  { type: "formulaGroup", formulas: [
    { label: "Marginal probability of i-th row", latex: "\\widehat P(X=i)=\\frac{n_{i+}}N", fallback: "P̂(X=i)=nᵢ₊/N" },
    { label: "Marginal probability of jth column", latex: "\\widehat P(Y=j)=\\frac{n_{+j}}N", fallback: "P̂(Y=j)=n₊ⱼ/N" },
    { label: "joint probability at independence", latex: "\\widehat P_{ij}=\\frac{n_{i+}}N\\frac{n_{+j}}N", fallback: "P̂ᵢⱼ=(nᵢ₊/N)(n₊ⱼ/N)" },
    { label: "Expected count", latex: "E_{ij}=N\\widehat P_{ij}=\\frac{n_{i+}n_{+j}}N", fallback: "Eᵢⱼ=nᵢ₊n₊ⱼ/N" }
  ] },
  { type: "callout", tone: "intuition", label: "An Expected Count Is Not a Prediction", text: "Eᵢⱼ is the theoretical count under H₀ and the observed marginal totals. These values ​​are used to create the table expected under independence, and are not predictions of future observations." },
  { type: "heading", text: "Expected Counts in a 2×2 Table" },
  { type: "table", rows: [["cell", "observed count", "Expected count under independence"], ["A", "A", "(A+B)(A+C)/N"], ["B", "B", "(A+B)(B+D)/N"], ["C", "C", "(C+D)(A+C)/N"], ["D", "D", "(C+D)(B+D)/N"]] },
  { type: "heading", text: "Pearson chi-square statistic" },
  { type: "formulaGroup", formulas: [
    { label: "Pearson residual", latex: "r_{ij}=\\frac{O_{ij}-E_{ij}}{\\sqrt{E_{ij}}}", fallback: "rᵢⱼ=(Oᵢⱼ−Eᵢⱼ)/√Eᵢⱼ" },
    { label: "statistics", latex: "\\chi^2=\\sum_{i=1}^{r}\\sum_{j=1}^{c}\\frac{(O_{ij}-E_{ij})^2}{E_{ij}}", fallback: "χ²=ΣᵢΣⱼ(Oᵢⱼ−Eᵢⱼ)²/Eᵢⱼ" }
  ] },
  { type: "paragraph", text: "Standardize the difference in each cell by the expected count, then square it and add it to remove the sign. The larger χ² is, the harder the table is to explain using an independent model. Also check the residuals to see which cells contributed to the difference." },
  { type: "heading", text: "Degrees of Freedom" },
  { type: "formulaGroup", formulas: [
    { label: "Unrestricted joint distribution", latex: "rc-1", fallback: "rc−1" },
    { label: "Marginal parameters of independent model", latex: "(r-1)+(c-1)", fallback: "(r−1)+(c−1)" },
    { label: "degree of freedom as a difference", latex: "df=(rc-1)-[(r-1)+(c-1)]=(r-1)(c-1)", fallback: "df=(r−1)(c−1)" }
  ] },
  { type: "heading", text: "Simplified formula for 2×2 table" },
  { type: "formula", latex: "\\chi^2_{df=1}=\\frac{N(AD-BC)^2}{(A+B)(C+D)(A+C)(B+D)}", fallback: "χ²(df=1)=N(AD−BC)²/[(A+B)(C+D)(A+C)(B+D)]" },
  { type: "paragraph", text: "In a 2×2 table, only one cell is free once the marginal totals are determined. If you divide the deviation of A, the following common term will appear, and if you put the Pearson terms of the four cells together, you will get a simplified formula." },
  { type: "formulaGroup", formulas: [
    { label: "Deviation of A cell", latex: "A-E_A=\\frac{AN-(A+B)(A+C)}N=\\frac{AD-BC}{N}", fallback: "A−E_A=(AD−BC)/N" },
    { label: "diagonal cell", latex: "A-E_A=D-E_D=\\frac{AD-BC}{N}", fallback: "A−E_A=D−E_D=(AD−BC)/N" },
    { label: "off-diagonal cells", latex: "B-E_B=C-E_C=-\\frac{AD-BC}{N}", fallback: "B−E_B=C−E_C=−(AD−BC)/N" }
  ] },
  { type: "formula", latex: "\\chi^2=\\frac{(AD-BC)^2}{N^2}\\left(\\frac1{E_A}+\\frac1{E_B}+\\frac1{E_C}+\\frac1{E_D}\\right)", fallback: "χ²=(AD−BC)²/N²×Σ1/E" },
  { type: "heading", text: "The p-Value Comes from the Right Tail" },
  { type: "formula", latex: "p=P\\!\\left(\\chi^2_{df}\\geq\\chi^2_{\\mathrm{obs}}\\mid H_0\\right)", fallback: "p=P(χ²df≥χ²obs | H₀)" },
  { type: "paragraph", text: "Since χ² is non-negative and increases in value as the deviation from H₀ increases, only the right tail is used regardless of direction. However, even if it becomes significant, we do not know the direction or strength of the association, so we also report the cell percentage, residual, OR, and RR." },
  { type: "heading", text: "Selection of approximation conditions and method" },
  { type: "list", items: ["Each observation enters only one cell, and the observation unit is independent.", "Make sure that the expected count is not extremely small. Standards are not fixed absolute laws.", "Consider Fisher exact test for small sample 2×2 tables", "If you want to make the approximation conservative in a 2×2 table, Yates correction is also an option, but it can be too conservative.", "Use McNemar test instead of independence test for paired binary data"] },
  { type: "callout", tone: "warning", label: "Independent individuals and independent variables are different concepts.", text: "We do not confuse independence of observation units as a test condition with independence between two variables as claimed by H₀. If the former collapses, the normal χ² approximation itself becomes invalid." },
];

export const yatesCorrectionEn = [
  { type: "paragraph", text: "Yates' continuity correction is a correction that reduces the difference by 0.5 when approximating the discrete frequencies in a 2×2 table with a continuous chi-square distribution. The purpose is to prevent the uncorrected Pearson test from becoming too significant in small samples." },
  { type: "heading", text: "Where does 0.5 come from?" },
  { type: "formulaGroup", formulas: [
    { label: "discrete events", latex: "P(X\\geq8)", fallback: "P(X≥8)" },
    { label: "continuous approximation", latex: "P(X\\geq8)\\approx P(Y\\geq7.5)", fallback: "P(X≥8)≈P(Y≥7.5)" },
    { label: "moving boundaries", latex: "8-7.5=0.5", fallback: "8−7.5=0.5" }
  ] },
  { type: "paragraph", text: "The interval centered on the integer 8 is from 7.5 to 8.5, so approximating 8 or more with a continuous distribution moves the boundary to 7.5. This half unit is the continuity correction." },
  { type: "heading", text: "From Pearson statistics to Yates correction" },
  { type: "formulaGroup", formulas: [
    { label: "Uncorrected Pearson", latex: "\\chi_P^2=\\sum\\frac{(O-E)^2}{E}", fallback: "χ²P=Σ(O−E)²/E" },
    { label: "Yates correction", latex: "\\chi_Y^2=\\sum\\frac{\\left(|O-E|-0.5\\right)^2}{E}", fallback: "χ²Y=Σ(|O−E|−0.5)²/E" }
  ] },
  { type: "callout", tone: "intuition", label: "Reason for taking absolute value", text: "This is because whether the observed value is above or below the expected value, the magnitude of the difference approaches 0 by 0.5. If you subtract 0.5 while leaving the sign, the negative deviation will become larger." },
  { type: "heading", text: "Simplified formula for 2×2 table" },
  { type: "formula", latex: "\\chi_Y^2=\\frac{N\\left(|AD-BC|-N/2\\right)^2}{(A+B)(C+D)(A+C)(B+D)}", fallback: "χ²Y=N(|AD−BC|−N/2)²/[(A+B)(C+D)(A+C)(B+D)]" },
  { type: "table", rows: [["method", "simplified molecule"], ["Uncorrected Pearson", "(AD−BC)²"], ["Yates correction", "(|AD−BC|−N/2)²"]] },
  { type: "formula", latex: "\\chi_Y^2\\leq\\chi_P^2\\quad\\Longrightarrow\\quad p_Y\\geq p_P", fallback: "χ²Y≤χ²P, so usually pY≥pP" },
  { type: "heading", text: "How to Interpret “Expected Count Less Than 5”" },
  { type: "paragraph", text: "The target of judgment is not the observed count O, but the expected count E below H₀. However, it is not a mechanical rule that says, ``If even one cell has E<5, it will always be Yates.'' Consider the expected frequencies for the entire table, the sample design, the purpose of the inference, and the available exact methods." },
  { type: "heading", text: "Strengths and Limitations" },
  { type: "table", rows: [["Strong Points", "limit"], ["Reduce errors in approximating discrete distributions with continuous distributions", "Often overly conservative and reduces power"], ["Easy to calculate and widely used", "It is not an exact test itself."], ["Easier to reduce false positives than uncorrected Pearson", "If the sample is sufficient, the need for correction is small."]] },
  { type: "callout", tone: "forward", label: "Practical choices", text: "The Fisher exact test is often a natural choice for small-sample 2x2 tables, and the uncorrected Pearson test is common for large samples. If Yates correction is used, specify the method name." },
];

export const fishersExactTestEn = [
  { type: "paragraph", text: "Fisher's exact test calculates the probability of each table meeting the null hypothesis directly from the hypergeometric distribution, under the condition that the marginal frequencies of the rows and columns of the 2 × 2 table are fixed. It does not rely on large-sample approximations, so it is important for small samples or when expected frequencies are small." },
  { type: "heading", text: "With Fixed Marginal Totals, Only One Cell Is Free" },
  { type: "formulaGroup", formulas: [
    { label: "marginal total", latex: "R_1=a+b,\\quad R_2=c+d,\\quad C_1=a+c,\\quad C_2=b+d", fallback: "R₁=a+b、R₂=c+d、C₁=a+c、C₂=b+d" },
    { label: "Determine other cells from a", latex: "b=R_1-a,\\quad c=C_1-a,\\quad d=R_2-C_1+a", fallback: "b=R₁−a、c=C₁−a、d=R₂−C₁+a" },
    { label: "minimum value of a", latex: "a_{\\min}=\\max(0,R_1-C_2)", fallback: "a_min=max(0,R₁−C₂)" },
    { label: "maximum value of a", latex: "a_{\\max}=\\min(R_1,C_1)", fallback: "a_max=min(R₁,C₁)" }
  ] },
  { type: "heading", text: "Exact Probability of the Observed Table" },
  { type: "formulaGroup", formulas: [
    { label: "hypergeometric probability", latex: "P(A=a\\mid R_1,R_2,C_1,C_2)=\\frac{\\binom{C_1}{a}\\binom{C_2}{R_1-a}}{\\binom{N}{R_1}}", fallback: "P(A=a|margins)=C(C₁,a)C(C₂,R₁−a)/C(N,R₁)" },
    { label: "factorial display", latex: "P(a,b,c,d)=\\frac{R_1!R_2!C_1!C_2!}{a!b!c!d!N!}", fallback: "P=R₁!R₂!C₁!C₂!/(a!b!c!d!N!)" }
  ] },
  { type: "paragraph", text: "The denominator is how to choose R₁ items that go into the first row out of N items. The combination of selecting a pieces from the first column and R₁−a pieces from the second column becomes the numerator, and the probability of a table that maintains the marginal frequency is obtained." },
  { type: "formula", latex: "\\frac{\\binom{C_1}{a}\\binom{C_2}{b}}{\\binom{N}{R_1}}=\\frac{R_1!R_2!C_1!C_2!}{a!b!c!d!N!}", fallback: "Combination display = factorial display" },
  { type: "heading", text: "One-Sided p-Value" },
  { type: "formulaGroup", formulas: [
    { label: "right side", latex: "p_{\\mathrm{right}}=\\sum_{a\\geq a_{\\mathrm{obs}}}P(A=a\\mid\\text{margins})", fallback: "p_right=Σ(a≥a_obs)P(A=a|margins)" },
    { label: "left", latex: "p_{\\mathrm{left}}=\\sum_{a\\leq a_{\\mathrm{obs}}}P(A=a\\mid\\text{margins})", fallback: "p_left=Σ(a≤a_obs)P(A=a|margins)" }
  ] },
  { type: "paragraph", text: "Which tail supports the alternative hypothesis is determined by the row/column arrangement and the predetermined direction of the effect. Don't look at the data and choose the smaller one-sided p-value." },
  { type: "heading", text: "Two-Sided p-Value" },
  { type: "formula", latex: "p_{\\mathrm{two\\text{-}sided}}=\\sum_{T:\\,P(T)\\leq P(T_{\\mathrm{obs}})}P(T)", fallback: "p_two-sided=Σ{full table of P(T)≤P(T_obs)}P(T)" },
  { type: "callout", tone: "warning", label: "A Two-Sided p-Value Is Not Generally Twice the One-Sided p-Value", text: "Hypergeometric distributions can be discrete and asymmetric. The representative definition sums all tables with a probability less than or equal to the observed table. The definitions of two-sided, central, mid-p, etc. differ depending on the software, so please check." },
  { type: "heading", text: "Steps to enumerate all tables" },
  { type: "list", ordered: true, items: ["Calculate R₁, R₂, C₁, C₂, N from the observation table", "Enumerate possible a from a_min to a_max", "Calculate b, c, d and hypergeometric probability for each a", "Define one-sided or two-sided extreme tables depending on alternative hypothesis", "Sum the corresponding probabilities to get the p-value"] },
  { type: "heading", text: "Comparison of Pearson, Yates, and Fisher" },
  { type: "table", rows: [["method", "statistical foundations", "approximation", "Typical use"], ["Pearson χ²", "Σ(O−E)²/E", "chi-square approximation", "sufficient expectation"], ["Yates χ²", "Σ(|O−E|−0.5)²/E", "Corrected chi-square approximation", "Smaller 2×2 table, conservative reasoning"], ["Fisher accurate", "conditional hypergeometric distribution", "Unnecessary", "Small sample/sparse 2×2 table"]] },
  { type: "paragraph", text: "Even though the p-value of the Fisher test is accurate, it does not mean that there is no uncertainty in the effect estimate. Report the OR, appropriate confidence interval, and cell frequency, understanding that it is a conditional inference." },
];

export const mcnemarsTestEn = [
  { type: "paragraph", text: "The McNemar test tests whether marginal proportions are equal in paired binary data, such as before and after measurements of the same subject or matched pairs. Unlike a regular 2x2 independence test, only the unmatched pairs that have changed results are informative." },
  { type: "heading", text: "Paired 2×2 Table" },
  { type: "table", rows: [["Measurement 1\\Measurement 2", "positive", "negative"], ["positive", "a: Positive → Positive", "b: Positive → Negative"], ["negative", "c: Negative → positive", "d: Negative → negative"]] },
  { type: "paragraph", text: "a and d are unchanged matched pairs. b and c are mismatched pairs that change in opposite directions, and H₀ asserts that these two directions occur to the same extent." },
  { type: "heading", text: "Hypothesis and conditional binomial distribution" },
  { type: "formulaGroup", formulas: [
    { label: "null hypothesis", latex: "H_0:P_b=P_c", fallback: "H₀: P_b=P_c" },
    { label: "alternative hypothesis", latex: "H_1:P_b\\ne P_c", fallback: "H₁: P_b≠P_c" },
    { label: "Limited to mismatched pairs", latex: "H_0:\\pi=P(b\\mid b\\text{ or }c)=\\frac12", fallback: "H₀: π=P(b|b or c)=1/2" },
    { label: "Total number of mismatched pairs", latex: "n=b+c", fallback: "n=b+c" },
    { label: "Distribution under H₀", latex: "B\\mid(B+C=n)\\sim\\operatorname{Binomial}\\left(n,\\frac12\\right)", fallback: "B|(B+C=n)~Binomial(n,1/2)" }
  ] },
  { type: "callout", tone: "intuition", label: "Why Are a and d Not Used?", text: "Since a and d are the same results at two points in time, there is no information to distinguish between positive → negative and negative → positive asymmetries. Even if the number of samples is large, if b+c is small, the approximation is unstable." },
  { type: "heading", text: "Derivation of the Z Statistic" },
  { type: "formulaGroup", formulas: [
    { label: "Mean and variance under H₀", latex: "E(B)=\\frac n2,\\qquad\\operatorname{Var}(B)=\\frac n4", fallback: "E(B)=n/2、Var(B)=n/4" },
    { label: "standardization", latex: "Z=\\frac{b-n/2}{\\sqrt{n/4}}", fallback: "Z=(b−n/2)/√(n/4)" },
    { label: "Assign n=b+c", latex: "Z=\\frac{b-(b+c)/2}{\\sqrt{(b+c)/4}}", fallback: "Z={b−(b+c)/2}/√[(b+c)/4]" },
    { label: "simplification", latex: "Z=\\frac{b-c}{\\sqrt{b+c}}", fallback: "Z=(b−c)/√(b+c)" }
  ] },
  { type: "heading", text: "McNemar chi-square statistic" },
  { type: "formula", latex: "\\chi_M^2=Z^2=\\frac{(b-c)^2}{b+c},\\qquad df=1", fallback: "χ²M=(b−c)²/(b+c)、df=1" },
  { type: "paragraph", text: "For a two-sided test, you can use χ², which is Z squared. The larger the difference between b and c compared to the total number of mismatched pairs, the more contrary to H₀ that the marginal ratios are equal." },
  { type: "heading", text: "Exact McNemar test" },
  { type: "formula", latex: "p_{\\mathrm{exact}}=2\\min\\left\\{P(B\\leq b_{\\mathrm{obs}}),\\ P(B\\geq b_{\\mathrm{obs}})\\right\\}\\quad\\text{(upper limit 1)}", fallback: "p_exact=2×smaller binomial tail probability, max 1" },
  { type: "paragraph", text: "If b+c is small, use B~Binomial(b+c,1/2) directly. Since it is a discrete distribution, specify the definition of a two-sided p value and whether to use mid-p." },
  { type: "heading", text: "Continuity correction" },
  { type: "formulaGroup", formulas: [
    { label: "Correction Z", latex: "Z_Y=\\frac{|b-c|-1}{\\sqrt{b+c}}", fallback: "ZY=(|b−c|−1)/√(b+c)" },
    { label: "Corrected McNemar statistic", latex: "\\chi_{M,Y}^2=\\frac{\\left(|b-c|-1\\right)^2}{b+c}", fallback: "χ²M,Y=(|b−c|−1)²/(b+c)" }
  ] },
  { type: "paragraph", text: "If you subtract 0.5 on the binomial scale of b, you subtract 1 on the b - c difference scale. Although the correction is more conservative, the exact binomial method is more direct for small numbers of discrepancies." },
  { type: "heading", text: "Difference with independence test" },
  { type: "table", rows: [["item", "Pearson independence test", "McNemar test"], ["data", "Two binary variables from independent observations", "Binary results with matched and repeated measurements"], ["H₀", "two variables are independent", "The two discordant transition probabilities, or marginal proportions, are equal"], ["Cell to use", "all cells", "Mismatched cells b, c"], ["large sample statistics", "Σ(O−E)²/E", "(b−c)²/(b+c)"] ] },
  { type: "callout", tone: "warning", label: "Do not ignore the pairing", text: "Testing pre- and post-data for the same subject as two independent groups ignores the paired structure and within-person correlations. Conversely, you cannot use the McNemar test for two independent groups." },
  { type: "heading", text: "Implementation and reporting procedures" },
  { type: "list", ordered: true, items: ["Check the definition of pairs and encoding of binary results", "Make a, b, c, d and check especially the number of discrepancies b+c", "Preset H₀, bilateral/unilateral, α", "If the number of discrepancies is sufficient, select uncorrected or corrected χ², if small, select exact binomial method.", "b and c, report proportions, changes, p-values, and usage for each time point", "Consider the impact of missing data and dropped pairs on the results"] },
];
