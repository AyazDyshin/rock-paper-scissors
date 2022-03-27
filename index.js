function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
let computerPlay = () => {
    let computerChoice = getRndInteger(1,4);
    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}