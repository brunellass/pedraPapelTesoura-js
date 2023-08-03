const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "pedra") {
    return userInput;
  } else if (userInput === "papel") {
    return userInput;
  } else if (userInput === "tesoura") {
    return userInput;
  } else {
    console.log("mensagem de erro");
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "pedra";
      break;
    case 1:
      return "papel";
      break;
    case 2:
      return "tesoura";
      break;
    default:
      console.log("nãoexiste");
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "empate";
  }
  if (userChoice === "pedra") {
    if (computerChoice === "papel") {
      return "O computador ganhou!";
    } else {
      return "Você ganhou!";
    }
  }
  if (userChoice === "papel") {
    if (computerChoice === "tesoura") {
      return "O computador ganhou!";
    } else {
      return "Você ganhou!";
    }
  }
  if (userChoice === "tesoura") {
    if (computerChoice === "pedra") {
      return "O computador ganhou!";
    } else {
      return "Você ganhou!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("tesoura");
  const computerChoice = getComputerChoice();
  console.log("Você jogou: " + userChoice);
  console.log("O computador jogou: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();