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

    if (playerPoints > computerPoints) {
        console.log('You win!');
    } else if (playerPoints < computerPoints) {
        console.log('You lose!');
    } else {
        console.log('Tie! Same points scored');
    }
}

const selections = document.querySelectorAll('button');
const result = document.querySelector('.result');
const playerScore = document.querySelector('.playerscore div');
const computerScore = document.querySelector('.computerscore div');
const gameResult = document.querySelector('.gameresult');
const playButton = document.querySelector('.playButton')

selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        if (playerPoints < 5 && computerPoints < 5) {
            result.textContent = playRound(selection.id, computerPlay());
            playerScore.textContent = playerPoints;
            computerScore.textContent = computerPoints;
            if (playerPoints === 5) {
                gameResult.textContent = 'You win!';
                playButton.style.visibility = 'visible';
            } else if (computerPoints === 5) {
                gameResult.textContent = 'You lose!';
                playButton.style.visibility = 'visible';
            }
        }
    })
});

playButton.addEventListener('click', () => {
    // Reset game state
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    result.textContent = '';
    gameResult.textContent = '';
    playButton.style.visibility = 'hidden';
});