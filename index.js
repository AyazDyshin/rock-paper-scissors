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

}