let playerScore = 0;
let cpuScore = 0;

const playerScoreSpan = document.getElementById('player-score');
const cpuScoreSpan = document.getElementById('cpu-score');
const resultDiv = document.getElementById('result');

document.getElementById('snake').addEventListener('click', () => playGame('snake'));
document.getElementById('water').addEventListener('click', () => playGame('water'));
document.getElementById('gun').addEventListener('click', () => playGame('gun'));
document.getElementById('reset').addEventListener('click', resetGame);

function playGame(playerChoice) {
    const choices = ['snake', 'water', 'gun'];
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === cpuChoice) {
        resultDiv.textContent = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'snake' && cpuChoice === 'water') ||
        (playerChoice === 'water' && cpuChoice === 'gun') ||
        (playerChoice === 'gun' && cpuChoice === 'snake')
    ) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        resultDiv.textContent = `You win! ${playerChoice} beats ${cpuChoice}.`;
    } else {
        cpuScore++;
        cpuScoreSpan.textContent = cpuScore;
        resultDiv.textContent = `You lose! ${cpuChoice} beats ${playerChoice}.`;
    }
}

function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    playerScoreSpan.textContent = playerScore;
    cpuScoreSpan.textContent = cpuScore;
    resultDiv.textContent = 'Make your move!';
}
