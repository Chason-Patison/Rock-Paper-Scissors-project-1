const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'Error please choose rock, paper, or scissors'
  }
};

function getComputerChoice() {
  const choiceVar = Math.floor(Math.random() * 3);
  switch (choiceVar) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2: 
    return 'scissors';
  }
};

function determineWinner(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'Game was a tie';
  }
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
};
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
};
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
};
}

function playGame(input){
  const userChoice = getUserChoice(input);
  const computerChoice = getComputerChoice();
  console.log('User choice is: ' + userChoice);
  console.log('Computer choice is: ' + computerChoice);
console.log(determineWinner(userChoice,computerChoice));
}

playGame('rock');
