export const exponentialDistributionEn = [
  { type: "paragraph", text: "The exponential distribution is a continuous probability distribution that describes waiting times between independent events occurring at a constant average rate." },
  { type: "callout", tone: "intuition", label: "central question", text: "The Poisson distribution deals with the number of occurrences within a certain period of time, and the exponential distribution deals with the waiting time until the next event. Both represent different aspects of the same type of random event." },
  { type: "heading", text: "In what cases should you use it?" },
  { type: "paragraph", text: "It is used to measure the time until the next call or customer arrives, or the failure time of equipment assuming a certain failure rate. Check that your data is not only latency, but also that the average incidence is roughly constant and that events in different time intervals can be considered independent." },
  { type: "callout", tone: "intuition", label: "λ is not a probability but an occurrence rate", text: "λ is the average number of occurrences per unit time. The probability of an event occurring in a short interval Δt is approximately λΔt, but λ itself can exceed 1 and is not limited to the range 0 to 1." },
  { type: "heading", text: "Definition of exponential distribution" },
  { type: "paragraph", text: "If the random variable X is the waiting time until the next event and the average occurrence rate is λ, then X follows an exponential distribution with a parameter λ." },
  { type: "formulaGroup", formulas: [
    { label: "Distribution notation", latex: "X\\sim\\operatorname{Exp}(\\lambda),\\qquad \\lambda>0", fallback: "X ~ Exp(λ)，λ>0" },
    { label: "probability density function", latex: "f(x)=\\begin{cases}\\lambda e^{-\\lambda x},&x\\ge 0,\\\\0,&x<0.\\end{cases}", fallback: "f(x)=λe^(-λx) for x≥0, f(x)=0 for x<0" }
  ] },
  { type: "table", rows: [["symbol", "meaning"], ["X", "Wait time until next event"], ["x", "Possible values ​​of X"], ["λ", "Average incidence rate per unit time"], ["f(x)", "Probability density of waiting time around x"], ["e", "base of natural logarithm"]] },
  { type: "heading", text: "How does λ change the curve?" },
  { type: "paragraph", text: "The density is f(0)=λ at x=0 and then decreases with latency. The larger λ, the more frequent the event, the faster the curve drops from a higher point, and the shorter the typical waiting time." },
  { type: "image", imageId: "exponential-rate-curves" },
  { type: "callout", tone: "intuition", label: "How to read graphs", text: "The total area of ​​each curve is 1. The curve with large λ does not have a large total probability, but rather the probability is concentrated towards short waiting times, and the probability of waiting for a long time decreases quickly." },
  { type: "heading", text: "Find probability from density" },
  { type: "paragraph", text: "Since it is a continuous distribution, the probability of a single point is 0. The probability that an event will occur within a certain amount of time, or the probability that it will not occur even after that period of time, is calculated using the area under the curve." },
  { type: "formulaGroup", formulas: [
    { label: "Cumulative Distribution Function", latex: "F(x)=P(X\\le x)=1-e^{-\\lambda x},\\qquad x\\ge0", fallback: "F(x)=P(X≤x)=1-e^(-λx)" },
    { label: "survival function", latex: "S(x)=P(X>x)=e^{-\\lambda x},\\qquad x\\ge0", fallback: "S(x)=P(X>x)=e^(-λx)" },
    { label: "Probability of falling in the interval", latex: "P(a<X\\le b)=F(b)-F(a)=e^{-\\lambda a}-e^{-\\lambda b}", fallback: "P(a<X≤b)=e^(-λa)-e^(-λb)" }
  ] },
  { type: "table", rows: [["symbol", "meaning"], ["f(x)", "probability density at position x"], ["F(x)", "Cumulative probability that waiting time is less than or equal to x"], ["S(x)", "Probability that the event will not occur even if x is exceeded"], ["a、b", "Endpoints of the interval where 0≤a<b"]] },
  { type: "heading", text: "Average waiting time and variation" },
  { type: "paragraph", text: "Occurrence rate and average waiting time are inverses of each other. The larger λ, the smaller the average and variation of the waiting time." },
  { type: "formulaGroup", formulas: [
    { label: "Expected value", latex: "E(X)=\\frac{1}{\\lambda}", fallback: "E(X)=1/λ" },
    { label: "variance and standard deviation", latex: "\\operatorname{Var}(X)=\\frac{1}{\\lambda^2},\\qquad \\operatorname{SD}(X)=\\frac{1}{\\lambda}", fallback: "Var(X)=1/λ²，SD(X)=1/λ" }
  ] },
  { type: "heading", text: "Memoryless" },
  { type: "paragraph", text: "Exponential distributions are memoryless. Given that no event has occurred after waiting s hours, the probability of waiting for more than t is the same as the probability of waiting more than t from the beginning." },
  { type: "formula", latex: "P(X>s+t\\mid X>s)=P(X>t)=e^{-\\lambda t}", fallback: "P(X>s+t | X>s)=P(X>t)=e^(-λt)" },
  { type: "callout", tone: "intuition", label: "very strong assumption", text: "The assumption is that the number of hours you have waited so far does not change the future distribution. This becomes unreasonable as equipment ages or patient risk changes over time, requiring a different distribution or model." },
  { type: "details", label: "Supplement: Deriving exponential distribution from short time intervals", children: [
    { type: "paragraph", text: "Divide a time of length x into n short intervals Δt=x/n. For a constant occurrence rate λ, the probability that an event does not occur in each interval is approximately 1−λx/n." },
    { type: "formulaGroup", formulas: [
      { label: "No events in each section", latex: "P(\\text{no event in }\\Delta t)\\approx 1-\\lambda\\frac{x}{n}", fallback: "The probability that there is no event in each interval is approximately 1-λx/n" },
      { label: "No event in all n intervals", latex: "P(X>x)\\approx\\left(1-\\lambda\\frac{x}{n}\\right)^n", fallback: "P(X>x)≈(1-λx/n)^n" },
      { label: "Make the interval as small as possible", latex: "S(x)=P(X>x)=\\lim_{n\\to\\infty}\\left(1-\\lambda\\frac{x}{n}\\right)^n=e^{-\\lambda x}", fallback: "S(x)=P(X>x)=e^(-λx)" }
    ] },
    { type: "paragraph", text: "This limit first gives the survival function. Subtracting it from 1 gives you the cumulative distribution function, and differentiating it with x gives you the probability density function." },
    { type: "formulaGroup", formulas: [
      { label: "From survival function to cumulative probability", latex: "F(x)=1-S(x)=1-e^{-\\lambda x}", fallback: "F(x)=1-S(x)=1-e^(-λx)" },
      { label: "From cumulative probability to density", latex: "f(x)=F'(x)=-S'(x)=\\lambda e^{-\\lambda x}", fallback: "f(x)=F'(x)=-S'(x)=λe^(-λx)" }
    ] }
  ] },
  { type: "details", label: "Supplement: Why the average waiting time is 1/λ", children: [
    { type: "paragraph", text: "The expected value of a non-negative random variable can be expressed as the area under the survival function. Integrating S(x)=e^(−λx) yields 1/λ." },
    { type: "formula", latex: "E(X)=\\int_0^{\\infty}S(x)\\,dx=\\int_0^{\\infty}e^{-\\lambda x}\\,dx=\\frac{1}{\\lambda}", fallback: "E(X)=∫₀∞S(x)dx=∫₀∞e^(-λx)dx=1/λ" }
  ] },
  { type: "heading", text: "Relationship with Poisson process" },
  { type: "paragraph", text: "If the number of occurrences N(t) in time t follows a Poisson distribution with mean λt, then the time until the first event X follows an exponential distribution with parameter λ. Waiting more than t is the same as not having the event occur at all within time t." },
  { type: "formulaGroup", formulas: [
    { label: "Number of occurrences", latex: "N(t)\\sim\\operatorname{Poisson}(\\lambda t)", fallback: "N(t)~Poisson(λt)" },
    { label: "waiting time", latex: "P(X>t)=P(N(t)=0)=e^{-\\lambda t}", fallback: "P(X>t)=P(N(t)=0)=e^(-λt)" }
  ] },
  { type: "heading", text: "Relationship with survival time analysis" },
  { type: "paragraph", text: "In survival time analysis, the exponential distribution is a model with a constant λ hazard rate. The hazard rate represents the instantaneous probability that an event will occur in a short period of time, given that you have survived until time x." },
  { type: "formula", latex: "h(x)=\\frac{f(x)}{S(x)}=\\lambda", fallback: "h(x)=f(x)/S(x)=λ" },
  { type: "callout", tone: "forward", label: "This will return later", text: "The exponential distribution connects the number of occurrences, waiting time, and constant hazard rate. These three perspectives appear repeatedly in Poisson distributions, survival analysis, and time-event data.", related: ["02/poisson-distribution", "09/survival-curve"] },
];

export const binomialDistributionEn = [
  { type: "paragraph", text: "The binomial distribution is the probability distribution of the number of successes, X, in repeated trials where the number of trials is fixed, independent of each other, and the probability of success is equal. It is classified as a discrete probability distribution." },
  { type: "callout", tone: "intuition", label: "central question", text: "Each attempt records only success or failure. The binomial distribution calculates the probability of success a total of x times after n times, rather than success or failure once. \"Success\" only refers to the outcome of interest, not necessarily the desired outcome." },
  { type: "heading", text: "Four conditions for using the binomial distribution" },
  { type: "list", ordered: true, items: ["The number of trials n is fixed in advance", "There are only two mutually exclusive outcomes in each trial", "Each trial is independent and one result does not change another's result", "The probability of success for each trial is the same p, and the probability of failure is q=1−p"] },
  { type: "callout", tone: "intuition", label: "Not all binary data follow a binomial distribution", text: "It is not enough to have two outcomes. Sampling without replacement from a small population may not be independent, and a single binomial distribution will not fit when the probability of success varies over time or across individuals." },
  { type: "heading", text: "Binomial distribution notation" },
  { type: "paragraph", text: "If X is the number of successes in n trials and p is the probability of success in each trial, then X follows the binomial distribution with parameters n and p, and takes only integers from 0 to n." },
  { type: "formulaGroup", formulas: [
    { label: "Distribution notation", latex: "X\\sim\\operatorname{Binomial}(n,p)", fallback: "X ~ Binomial(n,p)" },
    { label: "possible values", latex: "x=0,1,2,\\ldots,n", fallback: "x=0,1,2,…,n" },
    { label: "Probability of failure", latex: "q=1-p", fallback: "q=1-p" }
  ] },
  { type: "table", rows: [["symbol", "meaning"], ["X", "Total number of successes in n trials"], ["x", "Possible values ​​of X"], ["n", "Fixed total number of attempts"], ["p", "Probability of success for each trial"], ["q", "Probability of failure for each trial, q=1−p"]] },
  { type: "heading", text: "Probability of success exactly x times" },
  { type: "paragraph", text: "The probability of a given array of x successes and n−x failures is the product of the probabilities of each trial. Since there are multiple ways to select a successful position, multiply it by the number of combinations in which x can be selected from n positions." },
  { type: "formulaGroup", formulas: [
    { label: "Probability of a specified array", latex: "p^x(1-p)^{n-x}", fallback: "p^x(1-p)^(n-x)" },
    { label: "total probability of success exactly x times", latex: "P(X=x)=\\binom{n}{x}p^x(1-p)^{n-x},\\qquad x=0,1,\\ldots,n", fallback: "P(X=x)=C(n,x)p^x(1-p)^(n-x)" },
    { label: "Number of successful position combinations", latex: "\\binom{n}{x}=\\frac{n!}{x!(n-x)!}", fallback: "C(n,x)=n!/[x!(n-x)!]" }
  ] },
  { type: "callout", tone: "intuition", label: "Why do we multiply the number of combinations?", text: "If you succeed 2 out of 3 times, there are three sequences: success-success-failure, success-failure-success, failure-success-success. Since the number of successes is the same in both cases, we need to add all the probabilities." },
  { type: "heading", text: "Calculating cumulative probability" },
  { type: "paragraph", text: "\"At most\" or \"at least\" or a range of probabilities sums the probabilities of multiple x's satisfying the condition. The probability of at least k times can be easily calculated with co-events." },
  { type: "formulaGroup", formulas: [
    { label: "Successful at most k times", latex: "P(X\\le k)=\\sum_{x=0}^{k}\\binom{n}{x}p^x(1-p)^{n-x}", fallback: "P(X≤k)=sum of binomial probabilities from x=0 to k" },
    { label: "Successful at least k times", latex: "P(X\\ge k)=1-P(X\\le k-1)", fallback: "P(X≥k)=1-P(X≤k-1)" }
  ] },
  { type: "heading", text: "Average number of successes and variation" },
  { type: "paragraph", text: "Each trial contributes an average of p successes, so the average of the total number of n successes is np. Adding the variance p(1−p) of each independent success indicator gives np(1−p)." },
  { type: "formulaGroup", formulas: [
    { label: "Expected value", latex: "E(X)=np", fallback: "E(X)=np" },
    { label: "dispersion", latex: "\\operatorname{Var}(X)=np(1-p)=npq", fallback: "Var(X)=np(1-p)=npq" },
    { label: "standard deviation", latex: "\\operatorname{SD}(X)=\\sqrt{np(1-p)}", fallback: "SD(X)=√[np(1-p)]" }
  ] },
  { type: "callout", tone: "intuition", label: "Expected value does not have to be a possible integer", text: "If n=5 and p=0.5, E(X)=2.5. This does not mean that a single experiment will succeed 2.5 times, but rather that the long-term average will approach 2.5 when a series of experiments are repeated many times." },
  { type: "details", label: "Supplement: Deriving the mean and variance from success indicators", children: [
    { type: "paragraph", text: "If Iᵢ=1 when the i-th trial is successful and Iᵢ=0 when it fails, the total number of successes is the sum of the indicators. Expected values ​​can always be added, and if they are independent, the covariance is 0, so the variances can also be added." },
    { type: "formulaGroup", formulas: [
      { label: "Number of successes", latex: "X=I_1+I_2+\\cdots+I_n", fallback: "X=I₁+I₂+…+Iₙ" },
      { label: "one try", latex: "E(I_i)=p,\\qquad \\operatorname{Var}(I_i)=p(1-p)", fallback: "E(Iᵢ)=p，Var(Iᵢ)=p(1-p)" },
      { label: "average", latex: "E(X)=\\sum_{i=1}^{n}E(I_i)=np", fallback: "E(X)=ΣE(Iᵢ)=np" },
      { label: "dispersion", latex: "\\operatorname{Var}(X)=\\sum_{i=1}^{n}\\operatorname{Var}(I_i)=np(1-p)", fallback: "Var(X)=ΣVar(Iᵢ)=np(1-p)" }
    ] }
  ] },
  { type: "details", label: "Supplement: Deriving E(X) and Var(X) from the formula", children: [
    { type: "paragraph", text: "In the combinatorial identity, remove x or x(x−1) before the sum, replace the subscript, and recognize the remainder as the sum of complete binomial probabilities. Since the sum is 1, we can simplify the expression." },
    { type: "formulaGroup", formulas: [
      { label: "Definition of expected value", latex: "E(X)=\\sum_{x=1}^{n}x\\binom{n}{x}p^x(1-p)^{n-x}", fallback: "E(X)=ΣxC(n,x)p^x(1-p)^(n-x)" },
      { label: "combinatorial identity", latex: "x\\binom{n}{x}=n\\binom{n-1}{x-1}", fallback: "xC(n,x)=nC(n-1,x-1)" },
      { label: "complete binomial probability sum", latex: "\\sum_{j=0}^{n-1}\\binom{n-1}{j}p^j(1-p)^{(n-1)-j}=1", fallback: "The sum of all probabilities of Binomial(n-1,p) is 1" },
      { label: "Expected value", latex: "E(X)=np", fallback: "E(X)=np" }
    ] },
    { type: "paragraph", text: "Instead of finding E(X²) directly, we can first calculate the factorial moment E[X(X−1)], which can be easily organized in the same way." },
    { type: "formulaGroup", formulas: [
      { label: "Second combinatorial identity", latex: "x(x-1)\\binom{n}{x}=n(n-1)\\binom{n-2}{x-2}", fallback: "x(x-1)C(n,x)=n(n-1)C(n-2,x-2)" },
      { label: "factorial moment", latex: "E[X(X-1)]=n(n-1)p^2", fallback: "E[X(X-1)]=n(n-1)p²" },
      { label: "second moment", latex: "E(X^2)=E[X(X-1)]+E(X)=n(n-1)p^2+np", fallback: "E(X²)=n(n-1)p²+np" },
      { label: "dispersion", latex: "\\operatorname{Var}(X)=E(X^2)-[E(X)]^2=np(1-p)", fallback: "Var(X)=np(1-p)" }
    ] },
    { type: "callout", tone: "intuition", label: "Why is X(X−1) useful?", text: "X(X−1) is the number of ways to choose two different ways considering the order from X successes, and corresponds to the structure of n(n−1). This reduces the binomial coefficient to C(n−2,x−2), making factorial moments particularly useful in count distributions." }
  ] },
  { type: "heading", text: "When does the binomial distribution approach the normal distribution?" },
  { type: "paragraph", text: "If n is large and p is not too close to 0 or 1, the binomial distribution approaches a bell-shaped normal distribution. Check whether not only n, but also the expected number of successes np and number of failures n(1−p) are large enough." },
  { type: "callout", tone: "intuition", label: "Practical confirmation method", text: "A commonly used rule of thumb is that both np and n(1−p) are 5 or more, and conservatively 10 or more. This is a measure of approximation accuracy and is not a condition for the binomial distribution itself to hold true." },
  { type: "formulaGroup", formulas: [
    { label: "approximate normal distribution", latex: "X\\approx N\\!\\left(np,\\,np(1-p)\\right)", fallback: "X≈N(np,np(1-p))" },
    { label: "standardization", latex: "Z=\\frac{X-np}{\\sqrt{np(1-p)}}\\approx N(0,1)", fallback: "Z=[X-np]/√[np(1-p)]≈N(0,1)" }
  ] },
  { type: "paragraph", text: "Continuity correction can be used in probability calculations to approximate a discrete distribution with a continuous distribution. For example, for P(X≤k), change the boundary to k+0.5." },
  { type: "formula", latex: "P(X\\le k)\\approx P(Y\\le k+0.5),\\qquad Y\\sim N\\!\\left(np,np(1-p)\\right)", fallback: "P(X≤k)≈P(Y≤k+0.5)" },
  { type: "heading", text: "Relationship with other distributions" },
  { type: "list", items: ["Bernoulli distribution: binomial distribution with n=1", "Multinomial distribution: extension to cases where each trial has three or more outcomes", "Poisson distribution: approximated by λ=np when n is large, p is small, and np is moderate", "Normal distribution: Approximate with mean np and variance np(1−p) when np and n(1−p) are sufficiently large."] },
  { type: "callout", tone: "forward", label: "This will return later", text: "The binomial distribution is the basis for the binomial test, the comparison of two proportions, and some 2x2 table methods. Normal approximations and continuity corrections also reappear in large sample tests.", related: ["05/binomial-test", "05/contingency-table", "05/yates-correction"] },
];

export const poissonDistributionEn = [
  { type: "paragraph", text: "A Poisson distribution is a discrete probability distribution that describes the number of times an event occurs within a given time, area, volume, or other interval." },
  { type: "callout", tone: "intuition", label: "central question", text: "The binomial distribution fixes the number of trials and counts the number of successes, while the Poisson distribution fixes the observation interval and counts the number of events. For example, the number of phone calls per hour, the number of typos on a page, and the number of colonies within a certain area." },
  { type: "heading", text: "In what cases should you use it?" },
  { type: "list", ordered: true, items: ["Count the number of times X occurs within a fixed interval", "Events occur with a roughly constant average rate of occurrence", "The number of occurrences of non-overlapping intervals can be considered independent.", "You can ignore the probability that it will happen more than once in a very short interval."] },
  { type: "callout", tone: "intuition", label: "A constant average rate is a modeling assumption", text: "A single Poisson distribution may be inappropriate when rates vary widely over time, when events cluster together, or when one event makes the next more likely. Consider changing intervals, adding explanatory variables, and models that handle excess variation." },
  { type: "heading", text: "What does the parameter λ represent?" },
  { type: "paragraph", text: "λ is the expected number of occurrences within the selected observation interval. If the average incidence per unit interval is r and the length of the observation interval is t, then λ=rt, and if you change the length of the interval, λ will also change." },
  { type: "formulaGroup", formulas: [
    { label: "Distribution notation", latex: "X\\sim\\operatorname{Poisson}(\\lambda),\\qquad \\lambda>0", fallback: "X~Poisson(λ)，λ>0" },
    { label: "Incidence rate and interval parameter", latex: "\\lambda=rt", fallback: "λ=rt" },
    { label: "possible values", latex: "x=0,1,2,\\ldots", fallback: "x=0,1,2,…" }
  ] },
  { type: "table", rows: [["symbol", "meaning"], ["X", "Number of occurrences within the selected interval"], ["x", "Possible values ​​of X"], ["λ", "Expected number of occurrences within the selected interval"], ["r", "Average incidence per unit interval"], ["t", "Observation interval length"]] },
  { type: "heading", text: "probability mass function" },
  { type: "paragraph", text: "Since X takes only non-negative integers, a probability mass function is used instead of a continuous probability density function. The following formula is the probability that an event will occur exactly x times within the interval." },
  { type: "formula", latex: "P(X=x)=\\frac{e^{-\\lambda}\\lambda^x}{x!},\\qquad x=0,1,2,\\ldots", fallback: "P(X=x)=e^(-λ)λ^x/x!" },
  { type: "table", rows: [["part of the expression", "meaning"], ["P(X=x)", "Probability of occurrence exactly x times within a fixed interval"], ["e^(−λ)", "Probability that it will never occur within the interval"], ["λ^x", "The part about x events and the average number of occurrences"], ["x!", "a factorial term that adjusts the order of events x times"]] },
  { type: "heading", text: "How does λ change the shape of the distribution?" },
  { type: "paragraph", text: "When λ is small, the probability is concentrated to 0 and a small number of times and skewed to the right. As λ increases, the center shifts to the right, increasing the range and reducing relative distortion. The points in the diagram are the actual integer values ​​of X, and the lines are just to help distinguish points from the same distribution." },
  { type: "image", imageId: "poisson-lambda-distributions" },
  { type: "callout", tone: "intuition", label: "Do not read as a continuous curve", text: "Poisson variables do not take 1.5 times or 2.7 times. The height of each integer position itself is the probability of that value, so there is no need to convert it to the area under the curve." },
  { type: "heading", text: "mean and variance are equal" },
  { type: "paragraph", text: "In the Poisson distribution, both the expected value and the variance are λ. As λ increases, not only the number of averages but also the absolute variation increases, and the standard deviation becomes √λ." },
  { type: "formulaGroup", formulas: [
    { label: "Expected value", latex: "E(X)=\\lambda", fallback: "E(X)=λ" },
    { label: "dispersion", latex: "\\operatorname{Var}(X)=\\lambda", fallback: "Var(X)=λ" },
    { label: "standard deviation", latex: "\\operatorname{SD}(X)=\\sqrt{\\lambda}", fallback: "SD(X)=√λ" }
  ] },
  { type: "callout", tone: "intuition", label: "Sample mean and variance do not have to be exactly equal", text: "E(X)=Var(X)=λ is a property of a theoretical model, and the mean and variance of a finite sample usually do not match perfectly. If the variance is consistently much higher than the average, overdispersion may be due to crowding, individual differences, or missing variables." },
  { type: "heading", text: "Commonly Used Probabilities" },
  { type: "paragraph", text: "The probability that an event will never occur is particularly important, as it immediately determines the probability that it will occur at least once from co-events." },
  { type: "formulaGroup", formulas: [
    { label: "never happens", latex: "P(X=0)=e^{-\\lambda}", fallback: "P(X=0)=e^(-λ)" },
    { label: "at least once", latex: "P(X\\ge1)=1-P(X=0)=1-e^{-\\lambda}", fallback: "P(X≥1)=1-e^(-λ)" },
    { label: "at most k times", latex: "P(X\\le k)=\\sum_{x=0}^{k}\\frac{e^{-\\lambda}\\lambda^x}{x!}", fallback: "P(X≤k)=sum of Poisson probabilities from x=0 to k" }
  ] },
  { type: "details", label: "Supplement: Deriving Poisson's formula from the binomial distribution", children: [
    { type: "heading", text: "Step 1: Divide the observation interval into many small intervals" },
    { type: "paragraph", text: "Assume that events occur an average of λ times in the entire interval, and divide it into n short intervals. When n is large, the probability of occurrence of each interval is approximately λ/n, and the probability of occurrence more than once can be ignored, so it can be temporarily treated as a binomial trial." },
    { type: "formulaGroup", formulas: [
      { label: "Probability of occurrence of small interval", latex: "p_n=\\frac{\\lambda}{n}", fallback: "pₙ=λ/n" },
      { label: "Binomial model with finite n", latex: "X_n\\sim\\operatorname{Binomial}\\!\\left(n,\\frac{\\lambda}{n}\\right)", fallback: "Xₙ~Binomial(n,λ/n)" },
      { label: "occurs exactly x times", latex: "P(X_n=x)=\\binom{n}{x}\\left(\\frac{\\lambda}{n}\\right)^x\\left(1-\\frac{\\lambda}{n}\\right)^{n-x}", fallback: "P(Xₙ=x)=C(n,x)(λ/n)^x(1-λ/n)^(n-x)" }
    ] },
    { type: "heading", text: "Step 2: Separate the Expression into Parts with Evaluatable Limits" },
    { type: "formula", latex: "P(X_n=x)=\\underbrace{\\frac{n!}{n^x(n-x)!}}_{A_n}\\frac{\\lambda^x}{x!}\\underbrace{\\left(1-\\frac{\\lambda}{n}\\right)^n}_{B_n}\\underbrace{\\left(1-\\frac{\\lambda}{n}\\right)^{-x}}_{C_n}", fallback: "Decompose binomial probability into Aₙ, λ^x/x!, Bₙ, Cₙ" },
    { type: "heading", text: "Stage 3: Find three limits" },
    { type: "paragraph", text: "Increase n while keeping x fixed. The sorting ratio approaches 1, the index limit approaches e^(−λ), and the fixed index correction approaches 1." },
    { type: "formulaGroup", formulas: [
      { label: "arrangement ratio", latex: "A_n=\\prod_{j=0}^{x-1}\\left(1-\\frac{j}{n}\\right)\\longrightarrow1", fallback: "n!/[n^x(n-x)!]→1" },
      { label: "exponential limit", latex: "B_n=\\left(1-\\frac{\\lambda}{n}\\right)^n\\longrightarrow e^{-\\lambda}", fallback: "(1-λ/n)^n→e^(-λ)" },
      { label: "fixed index", latex: "C_n=\\left(1-\\frac{\\lambda}{n}\\right)^{-x}\\longrightarrow1", fallback: "(1-λ/n)^(-x)→1" }
    ] },
    { type: "formula", latex: "\\lim_{n\\to\\infty}P(X_n=x)=\\frac{e^{-\\lambda}\\lambda^x}{x!}", fallback: "As n→∞, the binomial probability approaches e^(-λ)λ^x/x!" },
    { type: "callout", tone: "intuition", label: "What can be preserved in the limit", text: "As n increases, the success probability λ/n decreases each time, but the product n(λ/n)=λ remains constant. Therefore, the binomial distribution shifts to the Poisson distribution while maintaining the expected number of occurrences λ in the finite interval." }
  ] },
  { type: "heading", text: "Approximation by binomial distribution" },
  { type: "paragraph", text: "If n is large and p is small in the binomial distribution, and λ=np is a moderate size, the number of successes can be approximated by Poisson(λ). Suitable for events that occur only on a small number of occasions." },
  { type: "formula", latex: "X\\sim\\operatorname{Binomial}(n,p),\\quad n\\text{ large},\\ p\\text{ small},\\ \\lambda=np\\quad\\Longrightarrow\\quad X\\approx\\operatorname{Poisson}(\\lambda)", fallback: "If n is large and p is small and λ=np, then Binomial(n,p)≈Poisson(λ)" },
  { type: "heading", text: "Relationship with exponential distribution" },
  { type: "paragraph", text: "In a Poisson process with occurrence rate r, the number of occurrences N(t) within length t follows Poisson(rt), and the waiting time T until the next event follows Exp(r). One measures the number of times, the other measures the interval." },
  { type: "formulaGroup", formulas: [
    { label: "Number of occurrences within a fixed time", latex: "N(t)\\sim\\operatorname{Poisson}(rt)", fallback: "N(t)~Poisson(rt)" },
    { label: "Wait time until next event", latex: "T\\sim\\operatorname{Exp}(r)", fallback: "T~Exp(r)" },
    { label: "Waiting for more than t is the same as no event within the interval", latex: "P(T>t)=P(N(t)=0)=e^{-rt}", fallback: "P(T>t)=P(N(t)=0)=e^(-rt)" }
  ] },
  { type: "heading", text: "Independent Poisson Counts Are Additive" },
  { type: "paragraph", text: "If the counts of different sources are independent, the total count also follows a Poisson distribution, and the population is the sum of the counts of each source. Naturally integrate counts from different time periods, regions, and sources." },
  { type: "formula", latex: "X_i\\sim\\operatorname{Poisson}(\\lambda_i)\\text{ independently}\\quad\\Longrightarrow\\quad\\sum_{i=1}^{m}X_i\\sim\\operatorname{Poisson}\\!\\left(\\sum_{i=1}^{m}\\lambda_i\\right)", fallback: "In the sum of independent Poisson variables, the parameter is also added." },
  { type: "callout", tone: "forward", label: "This will return later", text: "The Poisson distribution is used in incidence, frequency, and contingency table models and is directly related to exponential latency, the rare event approximation of the binomial distribution, and Poisson regression.", related: ["02/binomial-distribution", "02/exponential-distribution"] },
];
