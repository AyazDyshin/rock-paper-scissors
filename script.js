const arrOfOptions = ["rock", "paper", "scissors"];

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const computerPlay = () => {
  let computerChoice = getRndInteger(0, 3);
  return arrOfOptions[computerChoice];
}

const getUserInput = () => {
  let userInput = '';
  while (!arrOfOptions.includes(userInput)) {
    userInput = prompt("Enter your choice:").toLowerCase();
  }
  return userInput;
}

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
  for (let i = 1; i <= 5; i++) {
    let result = playRound(getUserInput(), computerPlay());
    result.includes("you win") ? playerScore++ : computerScore++;
    console.log(result);
    if (playerScore === 3 || computerScore === 3) break;
  }
  if (playerScore === computerScore) console.log(`The score is: You:${playerScore} Computer:${computerScore} therefore it is a tie!`);
  else if (playerScore > computerScore) console.log(`You won! The score is: You:${playerScore} Computer:${computerScore}`);
  else if (playerScore < computerScore) console.log(`You loose! the score is: You:${playerScore} Computer:${computerScore}`);
}

game();