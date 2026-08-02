import notes from "../data/notes.json";

export type Locale = "zh-Hant" | "en" | "ja";
export const locales: Locale[] = ["zh-Hant", "en", "ja"];
export const localeLabels: Record<Locale, string> = { "zh-Hant": "繁體中文", en: "English", ja: "日本語" };
const survivalChapter = notes.chapters.find(chapter => chapter.id === "09");
const conclusionStart = survivalChapter?.blocks.findIndex(block => block.type === "heading" && "text" in block && block.text === "結語") ?? -1;
const survivalBlocks = survivalChapter && conclusionStart >= 0
  ? survivalChapter.blocks.slice(0, conclusionStart)
  : survivalChapter?.blocks ?? [];
const conclusionBlocks = survivalChapter && conclusionStart >= 0
  ? survivalChapter.blocks.slice(conclusionStart)
  : [{ type: "heading", text: "結語" }];

export const chapters = [
  ...notes.chapters.map(chapter => chapter.id === "09" ? { ...chapter, blocks: survivalBlocks } : chapter),
  { id: "10", title: "結語", titleEn: "Conclusion", titleJa: "結び", blocks: conclusionBlocks },
];

export const ui = {
  "zh-Hant": { site:"生物統計學習筆記", tag:"從概念、推導到實務判讀", chapters:"章節目錄", search:"搜尋筆記", placeholder:"輸入關鍵字，例如：t 檢定、信賴區間", hero:"用清楚的脈絡，重新理解生物統計", intro:"這裡整理統計概念、公式推導與方法選擇。內容依九個統計主題與最後的結語編排，適合循序閱讀，也可以直接查找需要的統計方法。", start:"從第一章開始", all:"瀏覽全部章節", prev:"上一章", next:"下一章", notice:"本網站由個人學習筆記整理而成，內容持續校訂中；研究與臨床決策仍應查閱正式教材及原始文獻。", pending:"翻譯準備中", readZh:"閱讀繁體中文版" },
  en: { site:"Biostatistics Study Notes", tag:"From concepts and derivations to interpretation", chapters:"Chapters", search:"Search notes", placeholder:"Search topics such as t tests or confidence intervals", hero:"Build a clearer understanding of biostatistics", intro:"The English edition now includes all articles in Chapters 1 through 9 and the conclusion.", start:"Start with Chapter 1", all:"Browse all chapters", prev:"Previous", next:"Next", notice:"This English chapter is still being translated. Please use the Traditional Chinese edition for articles not yet published.", pending:"Translation in progress", readZh:"Read the Traditional Chinese edition" },
  ja: { site:"生物統計学 学習ノート", tag:"概念・導出から実践的な解釈まで", chapters:"章一覧", search:"ノートを検索", placeholder:"t検定、信頼区間などを検索", hero:"生物統計学を、明確な流れで理解する", intro:"日本語版は9つの主要章と結びまで、全記事を公開しています。概念、数式の導出、方法選択、実務的な解釈を順に学べます。", start:"第1章から読む", all:"全章を見る", prev:"前の章", next:"次の章", notice:"この章の日本語記事は現在編集中です。公開前の内容は繁体字中国語版をご覧ください。", pending:"翻訳準備中", readZh:"繁体字中国語版を読む" }
} as const;

export function chapterTitle(chapter: typeof chapters[number], locale: Locale) {
  return locale === "en" ? chapter.titleEn : locale === "ja" ? chapter.titleJa : chapter.title;
}
