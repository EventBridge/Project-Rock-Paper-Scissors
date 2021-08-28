let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        return 'Rock';
    } else if (randNum === 1) {
        return 'Paper';
    } else if (randNum === 2) {
        return 'Scissors';
    } else {
        return 'Unexpected error';
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerPoints++;
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerPoints++;
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerPoints++;
        return 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        playerPoints++;
        return 'You Win! Paper beats Rock';
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        playerPoints++;
        return 'You Win! Scissors beats Paper';
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        playerPoints++;
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === computerSelection) {
        return 'Tie, we both chose ' + playerSelection;
    } else {
        return 'Unexpected error';
    }
}

function game() {
    // reset points on new game
    playerPoints = 0;
    computerPoints = 0;

    // play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt('Rock, paper, scissors'), computerPlay()));
    }

    if (playerPoints > computerPoints) {
        console.log('You win!');
    } else if (playerPoints < computerPoints) {
        console.log('You lose!');
    } else {
        console.log('Tie! Same points scored');
    }
}

game();