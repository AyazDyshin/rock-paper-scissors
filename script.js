const arrOfOptions = ["rock", "paper" , "scissors"];

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

const computerPlay = () => {
    let computerChoice = getRndInteger(0,3);
    return arrOfOptions[computerChoice];
}

const getUserInput = () => {
   let userInput = '';
   while (!arrOfOptions.includes(userInput)){
       userInput = prompt("Enter your choice:").toLowerCase();
   }
}

const playRound = (userInput,computerChoice) => {
  switch (userInput,computerChoice){
      case (userInput === computerChoice) :
          return "tie";
      case (userInput === "rock") :
          return computerChoice === "paper" ? "you loose, paper beats rock" : "you win, rock beats scissors";
      case (userInput === "paper") :
         return computerChoice === "scissors" ? "you loose, scissors beat paper" : "you win, paper beats rock";
      case (userInput === "scissors") :
        return computerChoice === "rock" ? "you loose, rock beats scissor" : "you win, scissors beat paper";   
  }
}