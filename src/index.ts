#!/usr/bin/env node

import { makeFile, choices, test } from "./utility/CopyFiles";
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("Who Wants To Be A JavaScript Millionaire? \n");
  await sleep();
  rainbowTitle.stop();
}

async function handleAnswer(ans: string) {
  const spinner = createSpinner("checking...").start();
  await sleep(1000);
  await makeFile(ans);
  spinner.success({ text: `file successfully added` });
}

async function chooseFrameWork() {
  const answer = await inquirer.prompt({
    name: "framework",
    type: "list",
    message: "select Frame work you are working with?",
    choices: Object.keys(choices),
  });
  return handleAnswer(answer.framework);
}
test();
chooseFrameWork();
