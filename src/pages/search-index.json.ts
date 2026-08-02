import { allTopicSections } from "../lib/content";
import { allEnglishTopicSections, allJapaneseTopicSections } from "../lib/localized-content";
import { chapters, chapterTitle, type Locale } from "../lib/site";
function blockText(block: any) {
  if (typeof block.text === "string") return block.text;
  if (Array.isArray(block.parts)) return block.parts.map((part: any) => part.text ?? part.fallback ?? part.latex ?? "").join("");
  if (Array.isArray(block.items)) return block.items.join(" ");
  if (Array.isArray(block.children)) return block.children.map(blockText).join(" ");
  if (block.type === "formula") return block.fallback ?? block.latex ?? "";
  return "";
}
export function GET(){
  const entries = (locale: Locale, sections: typeof allTopicSections) => sections.flatMap(section => {
    const chapter = chapters.find(item => item.id === section.chapterId)!;
    return section.blocks.map(block => ({
      locale,
      id: section.chapterId,
      slug: section.slug,
      title: section.title,
      chapter: chapterTitle(chapter, locale),
      text: blockText(block),
    })).filter(item => item.text);
  });
  const index = [...entries("zh-Hant", allTopicSections), ...entries("en", allEnglishTopicSections), ...entries("ja", allJapaneseTopicSections)];
  return new Response(JSON.stringify(index),{headers:{"Content-Type":"application/json; charset=utf-8"}});
}
