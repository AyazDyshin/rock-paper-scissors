const arrOfOptions = ["rock", "paper", "scissors"];

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const computerPlay = () => {
  let computerChoice = getRndInteger(0, 3);
  return arrOfOptions[computerChoice];
}

// const getUserInput = () => {
//   let userInput = '';
//   while (!arrOfOptions.includes(userInput)) {
//     userInput = prompt("Enter your choice:").toLowerCase();
//   }
//   return userInput;
// }

const currRes = document.querySelector('#currRes');
const score = document.querySelector('#score');
const playRound = (userInput, computerChoice) => {
  switch (userInput) {
    case (computerChoice):
      return "tie";
    case ("rock"):
      return computerChoice === "paper" ? "you loose, paper beats rock" : "you win, rock beats scissors";
    case ("paper"):
      return computerChoice === "scissors" ? "you loose, scissors beat paper" : "you win, paper beats rock";
    case ("scissors"):
      return computerChoice === "rock" ? "you loose, rock beats scissor" : "you win, scissors beat paper";
    default:
      return "some error";
  }
}
let playerScore = 0;
let computerScore = 0;
const updateScore = (res) => {
  if (res != 'tie') {
    res.includes("you win") ? playerScore++ : computerScore++;
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  };
}
const checkEnd = () => {
  if (playerScore === 3 || computerScore === 3) {
    if (playerScore > computerScore) alert(`You won! The score is: You:${playerScore} Computer:${computerScore}`);
    else alert(`You loose! the score is: You:${playerScore} Computer:${computerScore}`);
    playerScore = 0;
    computerScore = 0;
    currRes.textContent = '';
    score.textContent = '';
  }
}
const game = () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      currRes.textContent = playRound(button.textContent.toLowerCase(), computerPlay());
      updateScore(currRes.textContent);
      checkEnd();
    });
  });
}

game();