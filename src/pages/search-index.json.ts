import { allTopicSections } from "../lib/content";
import { chapters } from "../lib/site";
export function GET(){
  const index = allTopicSections.flatMap(section => {
    const chapter = chapters.find(item => item.id === section.chapterId)!;
    return section.blocks.filter(block => block.type !== "table" && "text" in block).map(block => ({
      id: section.chapterId,
      slug: section.slug,
      title: section.title,
      chapter: chapter.title,
      text: "text" in block ? block.text : "",
    }));
  });
  return new Response(JSON.stringify(index),{headers:{"Content-Type":"application/json; charset=utf-8"}});
}
