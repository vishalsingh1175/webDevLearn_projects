let isGameOver = false;

const resetBtn = document.querySelector('#reset-btn');
const player1 = document.querySelector('#player1-btn');
const player2 = document.querySelector('#player2-btn');
const winnerMsg = document.getElementById('winner');

player1.addEventListener('click', () => increaseScore(1));
player2.addEventListener('click', () => increaseScore(2));
resetBtn.addEventListener('click', resetGame);

function increaseScore(playerNumber) {
    if (isGameOver) return;

    const gamePointers = Number(document.querySelector('#point-game').value);
    if (!gamePointers) return;

    const scoreDisplay = document.querySelector('#score-player' + playerNumber);
    const newScore = Number(scoreDisplay.textContent) + 1;
    scoreDisplay.textContent = newScore;

    console.log(newScore, gamePointers);

    if (newScore === gamePointers) {
        isGameOver = true;
        showWinner(playerNumber);
    }
}

function showWinner(playerNumber) {
    winnerMsg.textContent = `Player ${playerNumber} Wins !!!`;
}

function resetGame() {
    const players = document.querySelectorAll('.playerScore');
    for (const player of players) {
        player.textContent = 0;
    }
    winnerMsg.textContent = '';
    isGameOver = false;
}
scoreDisplay.classList.add("bump");
setTimeout(() => scoreDisplay.classList.remove("bump"), 150);
