import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outDir = path.join(repoRoot, "out");
const docsDir = path.join(repoRoot, "docs");

const npmCommand = "npm";
const npxCommand = "npx";

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: "inherit",
    shell: true,
  });

  if (result.error) {
    console.error(result.error);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

async function main() {
  run(npmCommand, ["run", "css"]);
  run(npxCommand, ["next", "build"]);

  console.log("\nCleaning old docs folder...");
  await fs.rm(docsDir, { recursive: true, force: true });
  await fs.mkdir(docsDir, { recursive: true });

  console.log("Copying exported files to docs/...");
  await fs.cp(outDir, docsDir, { recursive: true });
  await fs.writeFile(path.join(docsDir, ".nojekyll"), "", "utf8");

  console.log("\nStatic export complete.");
  console.log("docs/ is ready for GitHub Pages deployment.");
  console.log(
    'Run: git add docs && git commit -m "Deploy static site" && git push origin master',
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
