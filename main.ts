import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "This paperclip held a dozen pages faithfully for three years, then vanished the exact moment I needed one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
