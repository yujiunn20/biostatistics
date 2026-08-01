export const fisherZTransformation = [
  { type: "paragraph", text: "Fisher Z 轉換（Fisher's Z transformation）把介於 −1 與 1 之間的樣本相關係數 r，轉換到沒有上下界的 z 尺度。轉換後的抽樣分布較接近常態，因此可用來檢定母體相關係數 ρ、建立信賴區間，以及比較兩個獨立群體的相關係數。" },
  { type: "callout", tone: "intuition", label: "為什麼需要轉換？", text: "r 的抽樣分布在 ρ 接近 −1 或 1 時會明顯偏斜，而且變動程度會隨真實相關大小改變。Fisher 轉換以對數重新拉開兩端，使 z(r) 的分布較對稱，標準誤也近似只由樣本數決定。" },

  { type: "heading", text: "Fisher Z 轉換公式" },
  { type: "formulaGroup", formulas: [
    { label: "樣本相關係數的轉換", latex: "z_r=z(r)=\\frac12\\ln\\left(\\frac{1+r}{1-r}\\right)=\\operatorname{arctanh}(r)", fallback: "zᵣ=½ln[(1+r)/(1−r)]=atanh(r)" },
    { label: "母體相關係數的轉換", latex: "z_\\rho=z(\\rho)=\\frac12\\ln\\left(\\frac{1+\\rho}{1-\\rho}\\right)", fallback: "zρ=½ln[(1+ρ)/(1−ρ)]" },
    { label: "反轉換", latex: "r=\\tanh(z_r)=\\frac{e^{2z_r}-1}{e^{2z_r}+1}", fallback: "r=tanh(zᵣ)=(e^(2zᵣ)−1)/(e^(2zᵣ)+1)" },
  ] },
  { type: "paragraph", text: "當資料可合理視為來自二變量常態母體，且樣本數足夠時，Fisher 轉換後的統計量近似服從常態分布：" },
  { type: "formula", latex: "z(r)\\approx N\\left(z(\\rho),\\frac{1}{n-3}\\right),\\qquad SE[z(r)]\\approx\\frac{1}{\\sqrt{n-3}}", fallback: "z(r)≈N[z(ρ),1/(n−3)]；SE≈1/√(n−3)" },
  { type: "callout", tone: "caution", label: "這是近似結果", text: "Fisher Z 方法不是把任何資料的 r 轉換後都自動變成精確常態。小樣本、離群值、非線性關係或明顯偏離二變量常態時，近似品質可能下降。" },

  { type: "heading", text: "檢定母體相關係數是否等於指定值" },
  { type: "paragraph", text: "若研究問題不是只檢定 ρ=0，而是要檢定母體相關是否等於某個指定值 ρ₀，可以先把樣本 r 與假設值 ρ₀ 都轉到 Fisher z 尺度。" },
  { type: "formulaGroup", formulas: [
    { label: "雙尾假設", latex: "H_0:\\rho=\\rho_0,\\qquad H_1:\\rho\\ne\\rho_0", fallback: "H₀:ρ=ρ₀；H₁:ρ≠ρ₀" },
    { label: "Z 統計量", latex: "Z=\\frac{z(r)-z(\\rho_0)}{1/\\sqrt{n-3}}", fallback: "Z=[z(r)−z(ρ₀)]/[1/√(n−3)]" },
  ] },
  { type: "paragraph", text: "由標準常態分布計算單尾或雙尾 p 值。若 ρ₀=0，則 z(ρ₀)=0；在二變量常態假設下，前一頁的 t 檢定是檢定零相關的傳統精確方法，Fisher Z 則是常態近似，兩者在大樣本時通常非常接近。" },

  { type: "heading", text: "母體相關係數的信賴區間" },
  { type: "paragraph", text: "原文先在 Fisher z 尺度建立 95% 信賴區間。一般的 100(1−α)% 區間為：" },
  { type: "formulaGroup", formulas: [
    { label: "z 尺度下限", latex: "L_z=z(r)-z_{1-\\alpha/2}\\frac{1}{\\sqrt{n-3}}", fallback: "Lz=z(r)−z(1−α/2)/√(n−3)" },
    { label: "z 尺度上限", latex: "U_z=z(r)+z_{1-\\alpha/2}\\frac{1}{\\sqrt{n-3}}", fallback: "Uz=z(r)+z(1−α/2)/√(n−3)" },
    { label: "95% 信賴區間", latex: "z(r)\\pm1.96\\frac{1}{\\sqrt{n-3}}", fallback: "z(r)±1.96/√(n−3)" },
  ] },
  { type: "paragraph", text: "z 尺度的上下限不能直接當作相關係數報告，還要分別反轉換回 ρ 尺度：" },
  { type: "formula", latex: "CI_\\rho=\\left[\\tanh(L_z),\\tanh(U_z)\\right]", fallback: "ρ 的信賴區間=[tanh(Lz),tanh(Uz)]" },
  { type: "callout", tone: "intuition", label: "為什麼區間通常不對稱？", text: "z 尺度的信賴區間以 z(r) 為中心且左右對稱；反轉換回受 −1 與 1 限制的相關尺度後，兩端距離 r 通常不同。這是正確結果，不應強行改成 r±相同誤差。" },

  { type: "heading", text: "比較兩個獨立群體的相關係數" },
  { type: "paragraph", text: "假設想比較男性與女性的身高、體重相關是否相同。性別把樣本分成兩個互不重疊的群體；問題不是各組內相關是否分別顯著，而是兩個母體相關係數本身是否不同。這可視為性別是否改變身高與體重關係的 effect modification 或 moderation 問題。" },
  { type: "callout", tone: "caution", label: "不要用「一組顯著、另一組不顯著」判斷差異", text: "兩組各自的 p 值不同，不代表兩個相關係數彼此顯著不同。正確問題是直接檢定 ρ₁−ρ₂，因為兩組樣本數與估計不確定性可能不同。" },
  { type: "formulaGroup", formulas: [
    { label: "虛無與對立假設", latex: "H_0:\\rho_1=\\rho_2,\\qquad H_1:\\rho_1\\ne\\rho_2", fallback: "H₀:ρ₁=ρ₂；H₁:ρ₁≠ρ₂" },
    { label: "分別轉換兩組樣本相關", latex: "z_1=z(r_1),\\qquad z_2=z(r_2)", fallback: "z₁=z(r₁)；z₂=z(r₂)" },
  ] },
  { type: "paragraph", text: "兩組彼此獨立時，z₁−z₂ 的變異數等於兩組變異數相加，和兩獨立樣本平均數差的概念相同：" },
  { type: "formulaGroup", formulas: [
    { label: "差值的標準誤", latex: "SE(z_1-z_2)=\\sqrt{\\frac{1}{n_1-3}+\\frac{1}{n_2-3}}", fallback: "SE(z₁−z₂)=√[1/(n₁−3)+1/(n₂−3)]" },
    { label: "比較兩個獨立相關的 Z 統計量", latex: "Z=\\frac{z(r_1)-z(r_2)}{\\sqrt{\\frac{1}{n_1-3}+\\frac{1}{n_2-3}}}", fallback: "Z=[z(r₁)−z(r₂)]/√[1/(n₁−3)+1/(n₂−3)]" },
  ] },
  { type: "paragraph", text: "原文分母中的 n₁−3 與 n₂−3 因轉檔而出現下標括號錯置；正確形式是分別以每組樣本數減 3。由標準常態分布取得 p 值後，即可判斷兩個母體相關是否有證據不同。" },

  { type: "heading", text: "兩組差異的信賴區間" },
  { type: "paragraph", text: "在 Fisher z 尺度上，兩組轉換後相關之差的信賴區間可以直接寫成：" },
  { type: "formula", latex: "(z_1-z_2)\\pm z_{1-\\alpha/2}\\sqrt{\\frac{1}{n_1-3}+\\frac{1}{n_2-3}}", fallback: "(z₁−z₂)±z(1−α/2)√[1/(n₁−3)+1/(n₂−3)]" },
  { type: "paragraph", text: "這是 z(ρ₁)−z(ρ₂) 的區間，不是原始相關差 ρ₁−ρ₂ 的區間。因 tanh 是非線性函數，不能把差值區間的兩端直接各自做一次 tanh 就當成 ρ₁−ρ₂。若研究重點是原始相關差，可使用適當的大樣本方法或 bootstrap 建立區間。" },

  { type: "heading", text: "哪些情況不能套用這個兩組公式？" },
  { type: "list", items: [
    "兩個相關係數來自同一批受試者，例如比較 corr(X,Y) 與 corr(X,Z)。",
    "兩組有重疊觀察值或配對關係。",
    "比較的是部分相關、等級相關或經複雜模型調整後的相關。",
    "群體內存在群聚、重複測量或其他破壞獨立性的資料結構。",
  ] },
  { type: "paragraph", text: "上述情況中兩個相關估計值具有共變異數，不能只把 1/(n₁−3) 與 1/(n₂−3) 相加。應使用能處理相依相關係數的方法、迴歸交互作用模型、重抽樣方法或符合資料結構的模型。" },

  { type: "heading", text: "建議如何報告？" },
  { type: "list", ordered: true, items: [
    "單一群體：報告 r、n、ρ 的信賴區間與 p 值，並附散布圖。",
    "兩獨立群體：分別報告 r₁、n₁、r₂、n₂，再報告 Fisher Z 比較統計量與 p 值。",
    "清楚說明群體是否互相獨立，以及比較是事先規劃還是資料探索。",
    "若解釋 effect modification，描述哪一組的線性關係較強及方向，不只寫有交互作用。",
  ] },
];
