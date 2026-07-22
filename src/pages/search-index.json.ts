import { chapters } from "../lib/site";
export function GET(){
  const index = chapters.flatMap(chapter => chapter.blocks.filter(block => block.type !== "table" && "text" in block).map(block => ({id:chapter.id,title:chapter.title,text:"text" in block?block.text:""})));
  return new Response(JSON.stringify(index),{headers:{"Content-Type":"application/json; charset=utf-8"}});
}
