const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

// --- Closure & IIFE ---
const makeGame = (function () {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  console.log("(For testing) Secret number is:", secretNumber); // Optional: Remove for real game

  function checkGuess(guess) {
    if (guess === secretNumber) return "Correct!";
    if (guess < secretNumber) return "Too low!";
    return "Too high!";
  }

  return checkGuess; // closure
})();

// --- Arrow Function ---
const endMessage = (won) => (won ? "🎉 Great job!" : "😢 Try again!");

// --- Game Logic ---
let attempts = 0;

function askGuess() {
  if (attempts >= 3) {
    console.log("No more attempts! Game Over!");
    readline.close();
    return;
  }

  attempts++;
  readline.question(`Attempt ${attempts}: Guess the secret number (1-10): `, (input) => {
    const userGuess = Number(input);

    if (!userGuess || userGuess < 1 || userGuess > 10) {
      console.log("Please enter a valid number between 1 and 10.");
      attempts--; // Do not count invalid input
      askGuess();
      return;
    }

    const result = makeGame(userGuess);
    console.log(result);

    if (result === "Correct!") {
      console.log(endMessage(true));
      readline.close();
    } else if (attempts === 3) {
      console.log(endMessage(false));
      readline.close();
    } else {
      askGuess();
    }
  });
}

console.log("Welcome to the Secret Number Game!");
askGuess();
