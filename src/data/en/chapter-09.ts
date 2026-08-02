export const survivalCurveEn = [
  { type: "paragraph", text: "Survival analysis examines the time to a prespecified event such as death, recurrence, or recovery. The Kaplan–Meier method estimates the survival function while retaining information from participants who remain event-free when follow-up ends and are therefore right-censored." },
  { type: "heading", text: "Population Survival Function and Sample Survival Curve" },
  { type: "formulaGroup", formulas: [
    { label: "population survival function", latex: "S(t)=P(T>t)=1-F(t)", fallback: "S(t)=P(T>t)=1−F(t)" },
    { label: "sample proportion without censoring", latex: "\\hat S(t)=\\frac{\\#\\{T_i>t\\}}n", fallback: "Ŝ(t)=number with Tᵢ>t / n" }
  ] },
  { type: "paragraph", text: "S(t) is the probability of remaining event-free beyond time t measured from the defined origin. It typically starts at 1 and cannot increase over time. With censoring, a simple proportion cannot correctly account for differences in follow-up duration." },
  { type: "heading", text: "Events, Right Censoring, and the Time Origin" },
  { type: "list", items: ["Define a consistent time origin for all participants", "Prespecify what constitutes an event", "Distinguish the event time from the last known event-free time", "Treat participants without a confirmed event at loss to follow-up or study end as right-censored", "State clearly how the event indicator is coded"] },
  { type: "callout", tone: "intuition", label: "Censoring Is Not an Event", text: "A censored participant contributes information about remaining event-free through the censoring time and then leaves the risk set. Only events cause the curve to fall." },
  { type: "heading", text: "Why Kaplan–Meier Multiplies Conditional Probabilities" },
  { type: "paragraph", text: "Let the distinct event times be t₁\u003ct₂\u003c…, with nⱼ participants at risk immediately before tⱼ and dⱼ events at tⱼ. Survival through each time is the product of the successive conditional survival probabilities." },
  { type: "formulaGroup", formulas: [
    { label: "conditional survival proportion", latex: "P(T>t_j\\mid T\\ge t_j)=\\frac{n_j-d_j}{n_j}", fallback: "(nⱼ−dⱼ)/nⱼ" },
    { label: "product-limit estimator", latex: "\\hat S(t)=\\prod_{t_j\\le t}\\left(\\frac{n_j-d_j}{n_j}\\right)", fallback: "Ŝ(t)=Π[(nⱼ−dⱼ)/nⱼ]" }
  ] },
  { type: "paragraph", text: "The curve steps downward at event times and remains at the same height at censoring times. Tied events are handled together through dⱼ." },
  { type: "heading", text: "Step-by-Step Example with 10 Participants" },
  { type: "table", rows: [["Time", "At risk nⱼ", "Events dⱼ", "Conditional survival", "Ŝ(t)"], ["2", "10", "1", "9/10", "0.900"], ["6", "9", "1", "8/9", "0.800"], ["7", "8", "2", "6/8", "0.600"], ["8", "5", "1", "4/5", "0.480"], ["9", "4", "1", "3/4", "0.360"], ["12", "2", "1", "1/2", "0.180"]] },
  { type: "formulaGroup", formulas: [
    { label: "t=7", latex: "\\hat S(7)=\\frac9{10}\\frac8{9}\\frac6{8}=0.600", fallback: "Ŝ(7)=0.600" },
    { label: "t=12", latex: "\\hat S(12)=0.360\\times\\frac12=0.180", fallback: "Ŝ(12)=0.180" }
  ] },
  { type: "heading", text: "Greenwood’s Formula: Uncertainty in Survival Estimates" },
  { type: "formulaGroup", formulas: [
    { label: "variance", latex: "\\widehat{\\operatorname{Var}}[\\hat S(t)]=\\hat S(t)^2\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}", fallback: "Var[Ŝ]=Ŝ²Σdⱼ/[nⱼ(nⱼ−dⱼ)]" },
    { label: "standard error", latex: "SE[\\hat S(t)]=\\hat S(t)\\sqrt{\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}}", fallback: "SE[Ŝ]=Ŝ√Σdⱼ/[nⱼ(nⱼ−dⱼ)]" }
  ] },
  { type: "paragraph", text: "As the risk set shrinks later in follow-up, each event contributes more uncertainty. Because the tail of the curve may be supported by very few participants, it should not be overinterpreted." },
  { type: "heading", text: "Wald and Log–Log Confidence Intervals" },
  { type: "formula", latex: "\\hat S(t)\\pm z_{1-\\alpha/2}SE[\\hat S(t)]", fallback: "Ŝ±zSE" },
  { type: "paragraph", text: "A conventional Wald interval can be less than 0 or greater than 1. Although truncation is easy, coverage can be poor, so log–log transformation is often used to keep the probability range natural." },
  { type: "formulaGroup", formulas: [
    { label: "transformation", latex: "g(t)=\\ln[-\\ln\\hat S(t)]", fallback: "g=ln[−lnŜ]" },
    { label: "SE after transformation", latex: "SE[g(t)]=\\sqrt{\\frac1{[\\ln\\hat S(t)]^2}\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}}", fallback: "SE(g)" },
    { label: "interval on the original scale", latex: "\\hat S(t)^{\\exp[zSE(g)]}<S(t)<\\hat S(t)^{\\exp[-zSE(g)]}", fallback: "log–log CI" }
  ] },
  { type: "callout", tone: "intuition", label: "Why Does the Lower Limit Use a Plus Sign?", text: "For 0\u003cŜ\u003c1, the larger the exponent, the smaller the resulting power. Therefore, exp(+zSE) is the lower confidence limit, and exp(−zSE) is the upper confidence limit." },
  { type: "heading", text: "Relationship to the Hazard Function" },
  { type: "paragraph", text: "The survival function gives the probability of remaining event-free through time t. The hazard h(t) is the instantaneous event rate at t among individuals who have survived to that time; it is a rate, not a probability." },
  { type: "formulaGroup", formulas: [
    { label: "hazard", latex: "h(t)=\\lim_{\\Delta t\\to0}\\frac{P(t\\le T<t+\\Delta t\\mid T\\ge t)}{\\Delta t}", fallback: "conditional instantaneous rate" },
    { label: "relationship to the density", latex: "h(t)=\\frac{f(t)}{S(t)}=-\\frac{S'(t)}{S(t)}", fallback: "h=f/S=−S′/S" },
    { label: "cumulative hazard", latex: "H(t)=\\int_0^t h(u)du=-\\ln S(t)", fallback: "H(t)=−lnS(t)" },
    { label: "inverse relationship", latex: "S(t)=e^{-H(t)}", fallback: "S=e^(−H)" }
  ] },
  { type: "heading", text: "Checks before Kaplan–Meier Estimation" },
  { type: "list", ordered: true, items: ["Use consistent definitions for the time origin, event, and final follow-up time", "Distinguish event indicators from right-censoring correctly", "Assess independence between participants", "Consider whether censoring is conditionally noninformative", "Report numbers at risk, event counts, censoring marks, Ŝ(t), and confidence intervals", "Do not overinterpret the sparse tail of the curve"] },
];

export const comparingSurvivalCurvesEn = [
  { type: "paragraph", text: "The log-rank test compares the overall survival experience of two or more groups. At each event time, it accumulates the difference between the observed and expected event counts under the null hypothesis." },
  { type: "heading", text: "Hypotheses" },
  { type: "formulaGroup", formulas: [
    { label: "null hypothesis", latex: "H_0:S_1(t)=S_2(t)\\quad\\text{for every }t", fallback: "S₁=S₂ at all points" },
    { label: "alternative hypothesis", latex: "H_1:S_1(t)\\ne S_2(t)\\quad\\text{for at least one }t", fallback: "different at least at one point" }
  ] },
  { type: "callout", tone: "intuition", label: "Comparing the Entire Follow-Up, Not One Point on the Curve", text: "The test accumulates group differences across event times according to the risk sets rather than testing survival at one selected time. Always examine Kaplan–Meier curves together with numbers at risk." },
  { type: "heading", text: "Allocating Events under H₀" },
  { type: "formulaGroup", formulas: [
    { label: "combined risk set", latex: "n_j=n_{Aj}+n_{Bj}", fallback: "nⱼ=nAj+nBj" },
    { label: "combined event count", latex: "d_j=d_{Aj}+d_{Bj}", fallback: "dⱼ=dAj+dBj" },
    { label: "expected events in group A", latex: "e_{Aj}=d_j\\frac{n_{Aj}}{n_j}", fallback: "eAj=dⱼnAj/nⱼ" },
    { label: "observed minus expected", latex: "u_j=d_{Aj}-e_{Aj}", fallback: "uⱼ=dAj−eAj" }
  ] },
  { type: "paragraph", text: "Under H₀, the groups have the same event rate within each risk set. The combined event count dⱼ is therefore allocated in proportion to the number at risk in each group." },
  { type: "heading", text: "Hypergeometric Distribution and Variance" },
  { type: "formulaGroup", formulas: [
    { label: "conditional distribution", latex: "D_{Aj}\\mid n_{Aj},n_{Bj},d_j,H_0\\sim\\operatorname{Hypergeometric}(n_j,n_{Aj},d_j)", fallback: "DAj~Hypergeometric" },
    { label: "probability", latex: "P(D_{Aj}=x)=\\frac{\\binom{n_{Aj}}x\\binom{n_{Bj}}{d_j-x}}{\\binom{n_j}{d_j}}", fallback: "hypergeometric probability" },
    { label: "variance", latex: "v_j=d_j\\frac{n_{Aj}}{n_j}\\frac{n_{Bj}}{n_j}\\frac{n_j-d_j}{n_j-1}", fallback: "vⱼ=dⱼ(nAj/nⱼ)(nBj/nⱼ)(nⱼ−dⱼ)/(nⱼ−1)" }
  ] },
  { type: "paragraph", text: "The finite population correction (nⱼ−dⱼ)/(nⱼ−1) reflects that the total number of events dⱼ at the same time is fixed." },
  { type: "heading", text: "Accumulating across All Event Times" },
  { type: "formulaGroup", formulas: [
    { label: "log-rank score", latex: "U_L=\\sum_j(d_{Aj}-e_{Aj})", fallback: "UL=Σ(O−E)" },
    { label: "mean under H₀", latex: "E(U_L\\mid H_0)=0", fallback: "E(UL)=0" },
    { label: "cumulative variance", latex: "\\operatorname{Var}(U_L\\mid H_0)=\\sum_jv_j", fallback: "Var(UL)=Σvⱼ" },
    { label: "standardization", latex: "Z=\\frac{U_L}{\\sqrt{\\sum_jv_j}}\\approx N(0,1)", fallback: "Z=UL/√Σvⱼ" }
  ] },
  { type: "paragraph", text: "Only event times contribute observed-minus-expected terms. A censoring-only time contributes no O−E term, but it still affects later calculations by removing the censored participant from subsequent risk sets." },
  { type: "heading", text: "Z, Chi-Square, and the p Value" },
  { type: "formulaGroup", formulas: [
    { label: "example cumulative values", latex: "U_L=6.572,\\quad\\operatorname{Var}(U_L)=7.884", fallback: "UL=6.572; Var=7.884" },
    { label: "Z", latex: "z=\\frac{6.572}{\\sqrt{7.884}}=2.341", fallback: "z=2.341" },
    { label: "equivalent statistic", latex: "\\chi^2=z^2=5.479,\\quad df=1", fallback: "χ²=5.479, df=1" },
    { label: "two-sided p-value", latex: "p\\approx0.019", fallback: "p≈0.019" }
  ] },
  { type: "paragraph", text: "With two groups there is one independent comparison, so Z² is approximately χ² with 1 degree of freedom. A positive U_L indicates more observed events in group A than expected under H₀. Clinical magnitude should be described with time-specific survival estimates or a hazard ratio and confidence interval." },
  { type: "heading", text: "Continuity Correction" },
  { type: "formula", latex: "z_{cc}=\\frac{|U_L|-0.5}{sd(U_L)}", fallback: "zcc=(|UL|−0.5)/sd" },
  { type: "paragraph", text: "Although the continuity correction is more conservative, modern survival-analysis software usually reports the uncorrected log-rank chi-square statistic. State which version was used and do not mix corrected and uncorrected results." },
  { type: "heading", text: "Interpretive Limitations" },
  { type: "list", items: ["Participants are independent between groups, with consistent definitions of the time origin, event, and censoring", "Censoring is approximately noninformative", "The test assesses an overall difference between curves; it does not imply a difference at every time point", "Power is usually greatest when hazards are approximately proportional", "When curves cross, early and late differences may cancel", "The tail is unstable when few participants remain at risk"] },
  { type: "callout", tone: "forward", label: "Relationship to Cox Regression", text: "The two-group log-rank test can be regarded as a score test for a Cox proportional hazards model that includes only group indicators. Cox models can estimate hazard ratios and adjust for other covariates." },
];

