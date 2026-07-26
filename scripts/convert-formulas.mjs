import fs from "node:fs";
import { MathMLToLaTeX } from "mathml-to-latex";
const file = process.argv[2];
if (!file) throw new Error("Usage: node scripts/convert-formulas.mjs <notes.json>");
const data = JSON.parse(fs.readFileSync(file, "utf8"));
let converted = 0, failed = 0;
function visit(value) {
  if (Array.isArray(value)) { value.forEach(visit); return; }
  if (!value || typeof value !== "object") return;
  if (typeof value.mathml === "string") {
    try {
      let normalized = value.mathml.replace(/<(\/?)mml:/g, "<$1").replace(/\s+xmlns:mml="[^"]+"/g, "");
      if (!/^\s*<math[\s>]/.test(normalized)) normalized = `<math xmlns="http://www.w3.org/1998/Math/MathML">${normalized}</math>`;
      value.latex = MathMLToLaTeX.convert(normalized).replace(/\s+/g, " ").replace(/‧/g, "\\cdot ").trim();
      if (!value.latex) throw new Error("Empty formula");
      delete value.mathml;
      converted += 1;
    } catch {
      value.latex = value.fallback || "";
      value.conversionFailed = true;
      delete value.mathml;
      failed += 1;
    }
  }
  Object.values(value).forEach(visit);
}
visit(data);
data.formulas = { converted, failed };
fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
process.stdout.write(`Converted ${converted} formulas; ${failed} failed.\n`);
