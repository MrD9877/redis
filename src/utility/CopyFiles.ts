import fs from "node:fs";
import path from "node:path";
const copypath = path.join(__dirname, "..");
const dumpPath = process.cwd();

export const choices: { [key: string]: string } = {
  react: "reactconfig.json",
  nextjs: "nextconfig.json",
  nodejs: "nodeconfig.json",
};

export async function makeFile(ans: string) {
  fs.copyFile(`${__dirname}/tsfiles/${choices[ans]}`, `${dumpPath}/ts.json`, (err) => {
    console.log(err);
  });
}
export function test() {
  console.log(__dirname);
  console.log(__filename);
  console.log(dumpPath);
}
