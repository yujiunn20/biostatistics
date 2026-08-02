export const postHocComparisonsEn = [
  { type: "paragraph", text: "Even if the overall ANOVA is significant, it only tells us that at least one population mean is different; it does not tell us which groups are different. To determine location, use pre-planned contrasts or post hoc comparisons." },
  { type: "callout", tone: "intuition", label: "They answer different questions", text: "The F-test asks, ``Are there no differences at all between all groups?'', and the post-hoc comparison asks, ``Which groups differ from which groups?'' Even if the overall test is significant, not all pairs are significant." },
  { type: "heading", text: "Why Not Repeat t Tests?" },
  { type: "paragraph", text: "For comparisons, decide how to estimate the standard error of the mean difference and how to control the significance level after multiple tests. The total number of pairs in group k is as follows." },
  { type: "formula", latex: "m=\\binom{k}{2}=\\frac{k(k-1)}{2}", fallback: "m=C(k,2)=k(k−1)/2" },
  { type: "paragraph", text: "If there are 3 groups, there will be 3 comparisons, and if there are 5 groups, there will be 10 comparisons. Even if we perform each test with α=0.05, the probability of producing at least one false positive across the comparison family remains greater than 0.05." },
  { type: "heading", text: "Per-Comparison Error and Family-Wise Error" },
  { type: "formulaGroup", formulas: [
    { label: "No type 1 errors in all m times", latex: "P(\\text{No type 1 error})=(1-\\alpha_1)^m", fallback: "P(No type 1 error)=(1−α₁)^m" },
    { label: "At least one Type I error", latex: "\\alpha_F=1-(1-\\alpha_1)^m", fallback: "αF=1−(1−α₁)^m" },
    { label: "When α₁ is small", latex: "\\alpha_F\\approx m\\alpha_1", fallback: "αF≈mα₁" }
  ] },
  { type: "paragraph", text: "α₁ is the type I error rate for each comparison, and αF is the family-wise error rate (FWER) of making at least one type I error in one comparison group. The intuition in the above equation is based on independent tests, but the Bonferroni guarantee does not require independence between tests." },
  { type: "heading", text: "Common Standard Error for a Two-Group Mean Difference" },
  { type: "paragraph", text: "For one-way ANOVA with equal variances, you can use the MSE in the ANOVA table as the common error variance for each pair." },
  { type: "formulaGroup", formulas: [
    { label: "standard error of mean difference", latex: "SE(\\bar X_i-\\bar X_j)=\\sqrt{MS_E\\left(\\frac1{n_i}+\\frac1{n_j}\\right)}", fallback: "SE(X̄ᵢ−X̄ⱼ)=√[MSE(1/nᵢ+1/nⱼ)]" },
    { label: "Paired comparison t-statistic", latex: "t_{ij}=\\frac{\\bar X_i-\\bar X_j}{\\sqrt{MS_E\\left(\\frac1{n_i}+\\frac1{n_j}\\right)}}", fallback: "tᵢⱼ=(X̄ᵢ−X̄ⱼ)/SE" },
    { label: "degree of freedom", latex: "df=n-k", fallback: "df=n−k" }
  ] },
  { type: "heading", text: "Fisher's LSD method" },
  { type: "paragraph", text: "Fisher's least significant difference method is a pooled t-type pairwise comparison using the MSE of ANOVA. Normally, if the overall ANOVA is significant, each comparison is also judged by the original α, without making any additional adjustments depending on the number of comparisons." },
  { type: "formula", latex: "p_{ij}<\\alpha\\quad\\Longrightarrow\\quad\\text{reject }H_{0,ij}", fallback: "If pᵢⱼ<α, reject H₀,ᵢⱼ" },
  { type: "callout", tone: "caution", label: "The tradeoff of LSD", text: "Although the gates are loose and the detection power is high, the FWER increases as the number of groups increases. Requiring an overall ANOVA first does not always keep the FWER at α for the majority group." },
  { type: "heading", text: "Bonferroni method" },
  { type: "paragraph", text: "Allocate the target family significance level αF to m comparisons. The method of determining each comparison using αF/m and the method of multiplying the original p-value by m and comparing it with αF are equivalent." },
  { type: "formulaGroup", formulas: [
    { label: "Significance level for each comparison", latex: "\\alpha_{\\mathrm{per\\ comparison}}=\\frac{\\alpha_F}{m}", fallback: "Each comparison α=αF/m" },
    { label: "Adjusted p-value", latex: "p_{\\mathrm{adj}}=\\min(mp,1)", fallback: "padj=min(mp,1)" }
  ] },
  { type: "paragraph", text: "If αF=0.05 for all 3 comparisons of 3 groups, each threshold is 0.05/3≈0.0167. It is simple and controls FWER regardless of the dependency structure, but the more comparisons there are, the more conservative it becomes, which may increase Type II error." },
  { type: "heading", text: "Holm method" },
  { type: "paragraph", text: "Holm's step-down method serializes Bonferroni and typically yields higher power while controlling FWER." },
  { type: "list", ordered: true, items: ["Sort m p-values ​​into p(1)≤p(2)≤⋯≤p(m)", "Compare the minimum p-value with αF/m. If it is not established, it will be stopped and will not be rejected thereafter.", "If it holds true, compare the next with αF/(m−1) and loosen the gate according to the number of remaining comparisons.", "Stops at the first failure, and does not reject subsequent terms."] },
  { type: "formula", latex: "p_{(i)}\\leq\\frac{\\alpha_F}{m-i+1}", fallback: "p(i)≤αF/(m−i+1)" },
  { type: "formula", latex: "p_{\\mathrm{Holm},(i)}=\\min\\!\\left(1,\\max_{1\\leq j\\leq i}[(m-j+1)p_{(j)}]\\right)", fallback: "Holm adjustment p(i)=min{1,max[(m−j+1)p(j)]}" },
  { type: "paragraph", text: "The adjusted p-value should be monotonic so that a larger original p-value does not become a smaller adjusted value." },
  { type: "heading", text: "Holm–Šidák method" },
  { type: "paragraph", text: "The step-down procedure of arranging the p-values ​​in descending order is the same, but we use the Šidák gate for the remaining r hypotheses." },
  { type: "formulaGroup", formulas: [
    { label: "number of comparisons remaining", latex: "r=m-i+1", fallback: "r=m−i+1" },
    { label: "Stage i gate", latex: "\\alpha_i'=1-(1-\\alpha_F)^{1/r}", fallback: "α′ᵢ=1−(1−αF)^(1/r)" }
  ] },
  { type: "callout", tone: "caution", label: "Check dependency structure", text: "Although the exact FWER derivation of the Šidák formula is based on independent tests, pairwise comparisons that share the same group are correlated. Review study design and software definitions." },
  { type: "heading", text: "Choosing among the Four Methods" },
  { type: "table", rows: [["method", "Handling multiplicity", "Features"], ["Fisher's LSD", "Usually no adjustment", "High detection power, but FWER tends to increase"], ["Bonferroni", "Divide αF by m", "Simple, robust, but conservative"], ["Holm", "Gradual mitigation of Bonferroni barriers", "Controls FWER and has higher detection power than normal Bonferroni"], ["Holm–Šidák", "Sequential Šidák gates", "Slightly lenient, but be careful of dependencies"]] },
  { type: "callout", tone: "forward", label: "What to Report", text: "Report the method name, definition of the comparison family, each mean difference, simultaneous or adjusted confidence interval, and adjusted p-value. Interpret not only statistical significance but also effect size and clinical implications." },
];
