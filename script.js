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

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  const buttons = document.querySelectorAll('button');
  let counter = 0;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      currRes.textContent = playRound(button.textContent.toLowerCase(), computerPlay());
    });
  });
  if (playerScore === computerScore) console.log(`The score is: You:${playerScore} Computer:${computerScore} therefore it is a tie!`);
  else if (playerScore > computerScore) console.log(`You won! The score is: You:${playerScore} Computer:${computerScore}`);
  else if (playerScore < computerScore) console.log(`You loose! the score is: You:${playerScore} Computer:${computerScore}`);
}

game();