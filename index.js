'use strict';
let playerScore = 0;
let computerScore = 0;

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

function gamePlay(playerSelection, computerSelection) {
  playerSelection = prompt('Choose Wisely: Rock, Paper, or Scissor', 'Rock','Paper','Scissor').toLowerCase();

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

function game() {
  while (playerScore < 5 && computerScore < 5) {
    gamePlay();
  }
  if (playerScore === 5) {
    console.log('you win!');
  } else {
    console.log('you lose');
  }
}
game();