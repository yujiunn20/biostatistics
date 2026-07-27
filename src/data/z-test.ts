export const zTest = [
  { type: "paragraph", text: "Z 檢定（Z test）把樣本統計量與虛無假設所指定的母體參數相比，再用標準誤衡量兩者相差了多少個抽樣波動。完成標準化後，檢定統計量在 H₀ 成立時服從或近似標準常態分配，因此可以利用 Z 分配求臨界值與 p 值。" },
  { type: "callout", tone: "forward", label: "這一頁的主線", text: "先建立樣本平均數的抽樣分配 → 以 H₀ 的 μ₀ 為中心進行標準化 → 用 Z 分配判斷樣本結果是否過於極端 → 再由同一個臨界點連結 α、β、power、信賴區間與樣本數。" },
  { type: "heading", text: "先分清楚：個別觀察值的 Z 分數與平均數的 Z 統計量" },
  { type: "paragraph", text: "個別觀察值的 Z 分數，是描述某個 X 距離母體平均數 μ 有多少個母體標準差；Z 檢定平均數時，研究對象則是樣本平均數 X̄。因為 X̄ 的標準差是標準誤 σ/√n，所以兩個分母不同。" },
  { type: "formulaGroup", formulas: [
    { label: "個別觀察值的 Z 分數", latex: "Z=\\frac{X-\\mu}{\\sigma}", fallback: "Z=(X−μ)/σ" },
    { label: "樣本平均數的標準化", latex: "Z=\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}", fallback: "Z=(X̄−μ)/(σ/√n)" }
  ] },
  { type: "table", rows: [["符號", "代表意義"], ["X", "一個個別觀察值"], ["X̄", "由 n 個觀察值計算出的樣本平均數；抽樣前應視為隨機變數"], ["μ", "母體平均數"], ["μ₀", "虛無假設 H₀ 所指定的母體平均數"], ["σ", "已知的母體標準差"], ["n", "樣本數"], ["σ/√n", "樣本平均數的標準誤"]] },
  { type: "heading", text: "Z 檢定為什麼會成立？" },
  { type: "paragraph", text: "若母體為常態分配，樣本平均數本身就是常態分配；母體不完全常態時，在適當條件與足夠樣本數下，也可由中央極限定理得到近似常態的抽樣分配。前面抽樣章節得到 E(X̄)=μ 與 Var(X̄)=σ²/n，因此：" },
  { type: "formulaGroup", formulas: [
    { label: "樣本平均數的期望值", latex: "E(\\bar X)=\\mu", fallback: "E(X̄)=μ" },
    { label: "樣本平均數的變異數", latex: "\\operatorname{Var}(\\bar X)=\\frac{\\sigma^2}{n}", fallback: "Var(X̄)=σ²/n" },
    { label: "樣本平均數的標準誤", latex: "\\operatorname{SE}(\\bar X)=\\sqrt{\\frac{\\sigma^2}{n}}=\\frac{\\sigma}{\\sqrt n}", fallback: "SE(X̄)=σ/√n" }
  ] },
  { type: "paragraph", text: "在 H₀: μ=μ₀ 成立時，把 X̄ 減去它在 H₀ 下的中心 μ₀，再除以 X̄ 的標準誤，就得到標準常態統計量：" },
  { type: "formula", latex: "Z=\\frac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}\\sim N(0,1)\\qquad(H_0\\text{ 成立時})", fallback: "Z=(X̄−μ₀)/(σ/√n) ~ N(0,1)（H₀ 成立時）" },
  { type: "callout", tone: "intuition", label: "直覺理解", text: "分子是樣本結果與 H₀ 的距離，分母是抽樣平均數通常會波動的尺度。Z=2 表示樣本平均數比 μ₀ 高出 2 個標準誤，而不是高出 2 個原始資料的標準差。" },
  { type: "heading", text: "使用 Z 檢定的條件" },
  { type: "list", items: ["研究的統計量具有常態抽樣分配，或在適當條件下可用常態分配近似。", "觀察值來自隨機抽樣，且彼此獨立；若是配對或群聚資料，必須改用符合設計的方法。", "平均數 Z 檢定的母體標準差 σ 已知。若 σ 未知而以樣本標準差 s 估計，原則上使用 t 檢定。", "大樣本會使 t 分配接近 Z 分配，但『樣本大』本身不會讓未知的 σ 變成已知。"] },
  { type: "heading", text: "單一樣本平均數的假設與裁決" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾檢定", latex: "H_0:\\mu=\\mu_0,\\qquad H_1:\\mu\\ne\\mu_0", fallback: "H₀: μ=μ₀；H₁: μ≠μ₀" },
    { label: "右尾檢定", latex: "H_0:\\mu\\leq\\mu_0,\\qquad H_1:\\mu>\\mu_0", fallback: "H₀: μ≤μ₀；H₁: μ>μ₀" },
    { label: "左尾檢定", latex: "H_0:\\mu\\geq\\mu_0,\\qquad H_1:\\mu<\\mu_0", fallback: "H₀: μ≥μ₀；H₁: μ<μ₀" }
  ] },
  { type: "table", rows: [["方向", "顯著水準 α 下的拒絕條件", "p 值"], ["雙尾", "|Zobs| ≥ z₁₋α⁄₂", "2P(Z≥|Zobs|)"], ["右尾", "Zobs ≥ z₁₋α", "P(Z≥Zobs)"], ["左尾", "Zobs ≤ zα", "P(Z≤Zobs)"]] },
  { type: "callout", tone: "intuition", label: "不要把 Z 值與 p 值混在一起", text: "Z 值表示觀察結果在 H₀ 分配中的位置；p 值則是從這個位置往更支持 H₁ 的方向所累積的尾端面積。先有位置，才有面積。" },
  { type: "heading", text: "兩個獨立樣本平均數的 Z 檢定" },
  { type: "paragraph", text: "兩組獨立樣本比較時，研究的是平均數差 X̄₁−X̄₂。兩組母體變異數已知且樣本彼此獨立時，平均數差的變異數等於兩組變異數相加：" },
  { type: "formulaGroup", formulas: [
    { label: "平均數差的變異數", latex: "\\operatorname{Var}(\\bar X_1-\\bar X_2)=\\frac{\\sigma_1^2}{n_1}+\\frac{\\sigma_2^2}{n_2}", fallback: "Var(X̄₁−X̄₂)=σ₁²/n₁+σ₂²/n₂" },
    { label: "兩獨立樣本 Z 統計量", latex: "Z=\\frac{(\\bar X_1-\\bar X_2)-\\Delta_0}{\\sqrt{\\sigma_1^2/n_1+\\sigma_2^2/n_2}}", fallback: "Z=[(X̄₁−X̄₂)−Δ₀]/√(σ₁²/n₁+σ₂²/n₂)" }
  ] },
  { type: "paragraph", text: "Δ₀ 是 H₀ 所指定的母體平均數差；檢定『兩組沒有差異』時，Δ₀=0。若資料相依或成對，兩個平均數之間的共變異數不能直接忽略，應改以每一對的差值分析。" },
  { type: "heading", text: "信賴區間：由同一個 Z 標準化式反推 μ" },
  { type: "paragraph", text: "雙尾 (1−α) 信賴區間不是另一套獨立公式，而是從標準常態中央面積為 1−α 的不等式，把未知的 μ 解出來。" },
  { type: "formulaGroup", formulas: [
    { label: "中央機率", latex: "P\\!\\left(-z_{1-\\alpha/2}\\leq\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\leq z_{1-\\alpha/2}\\right)=1-\\alpha", fallback: "P(−z₁₋α⁄₂ ≤ (X̄−μ)/(σ/√n) ≤ z₁₋α⁄₂)=1−α" },
    { label: "乘上標準誤", latex: "P\\!\\left(-z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}\\leq\\bar X-\\mu\\leq z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}\\right)=1-\\alpha", fallback: "P(−z·σ/√n ≤ X̄−μ ≤ z·σ/√n)=1−α" },
    { label: "解出母體平均數 μ", latex: "P\\!\\left(\\bar X-z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}\\leq\\mu\\leq\\bar X+z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}\\right)=1-\\alpha", fallback: "P(X̄−z·σ/√n ≤ μ ≤ X̄+z·σ/√n)=1−α" },
    { label: "信賴區間", latex: "\\bar X\\pm z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}", fallback: "X̄ ± z₁₋α⁄₂·σ/√n" }
  ] },
  { type: "paragraph", text: "例如 95% 信賴區間使用 z₀.₉₇₅=1.96，因此為 X̄±1.96σ/√n。信賴水準描述的是重複抽樣並以同一程序建構區間時，長期而言包含真實 μ 的區間比例；不是說固定完成的這一個區間有 95% 機率包含固定的 μ。" },
  { type: "callout", tone: "forward", label: "和假設檢定的連結", text: "對應同一模型的雙尾 α 檢定中，若 μ₀ 不在 (1−α) 信賴區間內，就會拒絕 H₀: μ=μ₀。p 值法、臨界值法與信賴區間法是在看同一個抽樣分配。" },
  { type: "heading", text: "把 H₀ 與 H₁ 的分配放在一起" },
  { type: "paragraph", text: "α 是 H₀ 為真時，樣本平均數越過臨界點而誤拒絕 H₀ 的面積；β 則是某個特定 H₁（例如 μ=μ₁）為真時，樣本平均數沒有越過同一臨界點的面積。兩者必須分別在 H₀ 與 H₁ 的抽樣分配下計算。" },
  { type: "image", imageId: "z-errors-overlap" },
  { type: "callout", tone: "intuition", label: "同一條臨界線，從兩個分配看", text: "臨界點右側在 H₀ 曲線下的面積是 α；同一臨界點左側在 H₁ 曲線下的面積是 β。H₁ 曲線右側未被 β 填色的面積，就是成功發現真實差異的機率 1−β，也就是 power。" },
  { type: "heading", text: "右尾檢定的 α：由 H₀ 決定臨界點" },
  { type: "paragraph", text: "以下以 H₀: μ≤μ₀、H₁: μ>μ₀ 為例。在 H₀ 的邊界 μ=μ₀ 下，選擇臨界樣本平均數 c，使右尾面積等於 α。" },
  { type: "image", imageId: "z-type-i-critical" },
  { type: "formulaGroup", formulas: [
    { label: "臨界點的 Z 值", latex: "z_{1-\\alpha}=\\frac{c-\\mu_0}{\\sigma/\\sqrt n}", fallback: "z₁₋α=(c−μ₀)/(σ/√n)" },
    { label: "解出臨界樣本平均數", latex: "c=\\mu_0+z_{1-\\alpha}\\frac{\\sigma}{\\sqrt n}", fallback: "c=μ₀+z₁₋α·σ/√n" }
  ] },
  { type: "heading", text: "右尾檢定的 β：同一臨界點改由 H₁ 觀看" },
  { type: "paragraph", text: "假設真實平均數是 μ₁>μ₀。沒有越過 c 就無法拒絕 H₀，因此 H₁ 分配中 c 左側的面積是 β。" },
  { type: "image", imageId: "z-type-ii-beta" },
  { type: "formulaGroup", formulas: [
    { label: "H₁ 下臨界點的位置", latex: "z_\\beta=\\frac{c-\\mu_1}{\\sigma/\\sqrt n}", fallback: "zβ=(c−μ₁)/(σ/√n)" },
    { label: "型二誤差", latex: "\\beta=P_{\\mu_1}(\\bar X\\leq c)=\\Phi(z_\\beta)", fallback: "β=Pμ₁(X̄≤c)=Φ(zβ)" },
    { label: "統計檢定力", latex: "1-\\beta=P_{\\mu_1}(\\bar X>c)=1-\\Phi(z_\\beta)=\\Phi(-z_\\beta)", fallback: "Power=1−β=1−Φ(zβ)=Φ(−zβ)" }
  ] },
  { type: "heading", text: "樣本數公式：保留 α，也要保留發現差異的能力" },
  { type: "paragraph", text: "把同一個臨界點 c 分別代入 H₀ 與 H₁ 的標準化式，再相減，c 會消去。這正是原推導中最重要的技巧：兩個分配共用同一條裁決界線。" },
  { type: "formulaGroup", formulas: [
    { label: "H₀ 下", latex: "z_{1-\\alpha}=\\frac{c-\\mu_0}{\\sigma/\\sqrt n}", fallback: "z₁₋α=(c−μ₀)/(σ/√n)" },
    { label: "H₁ 下", latex: "z_\\beta=\\frac{c-\\mu_1}{\\sigma/\\sqrt n}", fallback: "zβ=(c−μ₁)/(σ/√n)" },
    { label: "兩式相減，消去 c", latex: "z_{1-\\alpha}-z_\\beta=\\frac{\\mu_1-\\mu_0}{\\sigma/\\sqrt n}", fallback: "z₁₋α−zβ=(μ₁−μ₀)/(σ/√n)" },
    { label: "利用常態分配的對稱性", latex: "z_\\beta=-z_{1-\\beta}", fallback: "zβ=−z₁₋β" },
    { label: "解出 √n", latex: "\\sqrt n=\\frac{(z_{1-\\alpha}+z_{1-\\beta})\\sigma}{\\mu_1-\\mu_0}", fallback: "√n=[(z₁₋α+z₁₋β)σ]/(μ₁−μ₀)" },
    { label: "單尾單一樣本的樣本數", latex: "n=\\left[\\frac{(z_{1-\\alpha}+z_{1-\\beta})\\sigma}{\\mu_1-\\mu_0}\\right]^2", fallback: "n={[(z₁₋α+z₁₋β)σ]/(μ₁−μ₀)}²" }
  ] },
  { type: "paragraph", text: "計算出的 n 若不是整數必須向上取整。這個公式適用於此處設定的單一樣本、單尾、已知 σ 的平均數 Z 檢定；雙尾規劃時，臨界值改為 z₁₋α⁄₂。" },
  { type: "heading", text: "從公式看樣本數的關係" },
  { type: "table", rows: [["條件改變", "所需 n", "原因"], ["α↓", "n↑", "要求更少的型一誤差，裁決門檻更嚴格"], ["β↓（power↑）", "n↑", "要求更少漏失真實差異，需要更多資訊"], ["σ↑", "n↑", "資料更分散，訊號較難從雜訊中辨認"], ["|μ₁−μ₀|↑", "n↓", "預計辨認的差異越大，越容易被發現"]] },
  { type: "heading", text: "由同一推導得到 power" },
  { type: "formulaGroup", formulas: [
    { label: "先解出 zβ", latex: "z_\\beta=z_{1-\\alpha}-\\frac{\\mu_1-\\mu_0}{\\sigma/\\sqrt n}", fallback: "zβ=z₁₋α−(μ₁−μ₀)/(σ/√n)" },
    { label: "單尾檢定力", latex: "1-\\beta=\\Phi\\!\\left(\\frac{\\sqrt n\\,|\\mu_1-\\mu_0|}{\\sigma}-z_{1-\\alpha}\\right)", fallback: "1−β=Φ[√n|μ₁−μ₀|/σ−z₁₋α]" },
    { label: "原文使用的等價寫法", latex: "1-\\beta=\\Phi\\!\\left(\\frac{\\sqrt n\\,|\\mu_1-\\mu_0|}{\\sigma}+z_\\alpha\\right),\\quad z_\\alpha=-z_{1-\\alpha}", fallback: "1−β=Φ[√n|μ₁−μ₀|/σ+zα]" },
    { label: "雙尾近似規劃式", latex: "1-\\beta\\approx\\Phi\\!\\left(\\frac{\\sqrt n\\,|\\mu_1-\\mu_0|}{\\sigma}-z_{1-\\alpha/2}\\right)", fallback: "1−β≈Φ[√n|μ₁−μ₀|/σ−z₁₋α⁄₂]" }
  ] },
  { type: "callout", tone: "intuition", label: "為什麼雙尾式標示為近似？", text: "雙尾檢定有左右兩個拒絕區。當真實差異明確位於其中一側時，另一側的 power 通常很小，常用上式作規劃近似；若要精確計算，應把 H₁ 分配落入左右兩個拒絕區的機率一起相加。" },
  { type: "table", rows: [["條件改變", "power", "直覺"], ["n↑", "power↑", "標準誤縮小，兩個假設較容易分辨"], ["|μ₁−μ₀|↑", "power↑", "真實效果離 H₀ 更遠"], ["σ↑", "power↓", "分配更寬、重疊更多"], ["α↓（其他條件固定）", "power↓", "拒絕門檻變嚴格，β 因而增加"]] },
  { type: "image", imageId: "z-alpha-beta-tradeoff" },
  { type: "callout", tone: "forward", label: "α 與 β 不是只能二選一", text: "在樣本數、效果大小與變異固定時，單純移動臨界點會使 α 與 β 反向變化；但增加 n、降低測量變異或研究更明顯的效果，可以減少兩個分配的重疊並提高 power，而不必只靠放寬 α。" },
  { type: "heading", text: "本頁公式的符號說明" },
  { type: "table", rows: [["符號", "代表意義"], ["zq", "標準常態分配的第 q 分位數，滿足 P(Z≤zq)=q"], ["α", "H₀ 為真時卻拒絕 H₀ 的機率（型一誤差）"], ["β", "指定的 H₁ 為真時卻未拒絕 H₀ 的機率（型二誤差）"], ["1−β", "統計檢定力；指定差異存在時成功拒絕 H₀ 的機率"], ["μ₁", "用來規劃或計算 power 的特定真實平均數"], ["c", "把拒絕區與不拒絕區分開的臨界樣本平均數"], ["Φ(z)", "標準常態分配在 z 左側的累積機率"], ["Δ₀", "兩樣本檢定中 H₀ 指定的平均數差"]] }
];
