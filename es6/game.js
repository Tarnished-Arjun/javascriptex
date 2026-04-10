const prompt = require("prompt-sync")();
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function getPoints(userNum, randomNum) {
  if (userNum === randomNum) return 2;
  else if (Math.abs(userNum - randomNum) === 1) return 1;
  else return 0;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function playGame() {
  let score = 0;

  while (true) {
    let input = prompt("Enter a number (1-6) or 'q' to quit:");

    if (input === "q") break;

    let userNum = Number(input);

    await delay(1000);

    let randomNum = getRandomNumber();
    let points = getPoints(userNum, randomNum);

    score += points;

    console.log("You chose:", userNum);
    console.log("Random number:", randomNum);
    console.log("Points:", points);
    console.log("Total score:", score);
  }

  console.log("Game Over!");
}

playGame();