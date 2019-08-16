'use strict';

function computerSelection() {
  let computerChoice = Math.floor(Math.random()* 3) + 1;
  if (computerChoice === 1) {
    return 'Rock';
  } else if (computerChoice === 2) {
    return 'Paper';
  } else {
    return 'Scissor';
  }
}
computerSelection();

// function formatInput(input) {
//   input0 = input.toLowerCase();
//   return input;
// }

// function playerSelection(playerChoice) {
//   playerChoice = prompt('Choose wisely: Rock or Paper or Scissor');
//   playerChoice = formatInput(playerChoice);
//   if (playerSelection.toLowerCase() !== 'rock' || playerSelection.toLowerCase() !== 'paper' || playerSelection.toLowerCase() !== 'scissor') {
//     prompt('Input Rock Paper or Scissor');
//     playerChoice = formatInput(playerChoice);
//   }
//   return playerChoice;
// }

function gamePlay(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissor') {
    return 'Congrats! Rock beats Scissors!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'Congrats! Paper beats Rock!';
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    return 'Congrats! Scissor beats Paper!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose, Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    return 'You lose, Scissor beats Paper';
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    return 'You lose, Rock beats Scissor';
  } else {
    return 'You tie';
  }
}
gamePlay();

const playerSelection = prompt('Choose Wisely: Rock, Paper, or Scissor', 'Rock','Paper','Scissor');
if (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissor') {
  alert('Input Rock Paper or Scissor');
} else {
  return playerSelection;
}