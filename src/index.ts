import { createClient } from "redis";

let time = 0;
let int: NodeJS.Timeout | null;

const StartInterval = () => {
  int = setInterval(() => {
    time = time + 1;
  }, 1);
};
StartInterval();

const stopInterval = () => {
  if (int) clearInterval(int);
};

const client = createClient();
async function setTest() {
  await client.connect();
  const res = await client.set("test", "working");
  console.log(res);
  await client.quit();
}
async function getTest() {
  await client.connect();
  const res = await client.get("test");
  console.log(res);
  await client.quit();
  stopInterval();
  console.log(time);
}
getTest();
