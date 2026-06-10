let score = 0;
const name = prompt("What is your name?");

alert(`Welcome ${name}, are you ready to play a game of trivia?`);

const answerOne = Number(
  prompt(`How do black holes die?
    [1] Being consumed by another black hole
    [2] Hawking Radiation
    [3] Supernova
    [4] They don't`),
);

if (Number.isNaN(answerOne)) {
  alert("You must enter a number from 1 to 4. Please start over.");
} else if (answerOne > 4 || answerOne < 1) {
  alert("You must choose one of the selections, please start over.");
} else if (answerOne !== 2) {
  alert(`Incorrect. The answer is [2] Hawking Radiation, your score is ${score}.`);
} else if (answerOne == 2) {
  score++;
  alert(`Correct! Your score is now ${score}.`);
}

const answerTwo = Number(
  prompt(`Which is the correct term for an object being strecthed farther on the side closest to a black hole when in close proximity?
    [1] Tidal Force
    [2] Big Stretch
    [3] Gravitational Lensing
    [4] Spaghettification`),
);

if (Number.isNaN(answerTwo)) {
  alert("You must enter a number from 1 to 4. Please start over.");
} else if (answerTwo > 4 || answerTwo < 1) {
  alert("You must choose one of the selections, please start over.");
} else if (answerTwo !== 4) {
  alert(`Incorrect. The answer is [4] Spaghettification, your score is ${score}.`);
} else if (answerTwo == 4) {
  score++;
  alert(`Correct! Your score is now ${score}.`);
}

const answerThree = Number(
  prompt(`What is the edge of a black hole called?
    [1] Event Horizon
    [2] The surface
    [3] PoNR (point of no return)
    [4] The atmosphere`),
);

if (Number.isNaN(answerThree)) {
  alert("You must enter a number from 1 to 4. Please start over.");
} else if (answerThree > 4 || answerThree < 1) {
  alert("You must choose one of the selections, please start over.");
} else if (answerThree !== 1) {
  alert(`Incorrect. The answer is [1] Event Horizon, your score is ${score}.`);
} else if (answerThree == 1) {
  score++;
  alert(`Correct! Your score is now ${score}.`);
}

if (score === 0) {
  alert(`The game is over, you flopped.
    You got a ${score}...`);
  alert("Not a single one!?");
  alert("You've never heard of an event horizon?");
  alert("I mean it's literally a movie");
  alert("Cut the cameras");
} else if (score > 0 && score < 3) {
  alert(`The game is finished now.
        Congratulations ${name}!
        You got ${score} out of 3 correct.`);
} else if (score === 3) {
  alert(`Woah, why do you know so much about holes?
        Congratulations ${name}, you got everything right!
        You got a perfect score of ${score}/3!`);
}
