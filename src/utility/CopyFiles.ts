import fs from "node:fs";
import path from "node:path";
const parentDir = path.join(__dirname, "..");
const grandParent = path.join(parentDir, "..");
const grandGrandParent = path.join(parentDir, "..");
const currentDir = process.cwd();

export function makeFile() {
  fs.copyFile(`${grandGrandParent}/tsfiles/tsconfig.json`, `${currentDir}/ts.json`, (err) => {
    console.log(err);
  });
}
