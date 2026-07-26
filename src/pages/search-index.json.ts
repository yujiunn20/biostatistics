import { allTopicSections } from "../lib/content";
import { chapters } from "../lib/site";
function blockText(block: any) {
  if (typeof block.text === "string") return block.text;
  if (Array.isArray(block.parts)) return block.parts.map((part: any) => part.text ?? part.fallback ?? part.latex ?? "").join("");
  if (block.type === "formula") return block.fallback ?? block.latex ?? "";
  return "";
}
export function GET(){
  const index = allTopicSections.flatMap(section => {
    const chapter = chapters.find(item => item.id === section.chapterId)!;
    return section.blocks.map(block => ({
      id: section.chapterId,
      slug: section.slug,
      title: section.title,
      chapter: chapter.title,
      text: blockText(block),
    })).filter(item => item.text);
  });
  return new Response(JSON.stringify(index),{headers:{"Content-Type":"application/json; charset=utf-8"}});
}
