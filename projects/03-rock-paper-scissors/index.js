// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display");
const player1ScoreDisplay = document.getElementById("player1-score");
const player2ChoiceDisplay = document.getElementById("player2-choice-display");
const player2ScoreDisplay = document.getElementById("player2-score");

const gameStatusDisplay = document.getElementById("game-status");
const resetGameButton = document.getElementById("reset-game-btn");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    playRound("rock");
});

paperBtn.addEventListener("click", function () {
    playRound("paper");
});

scissorsBtn.addEventListener("click", function () {
    playRound("scissors");
});

resetGameButton.addEventListener("click", function () { 
    resetGame();
});

// Step 4: Define helper functions that will be the actions of the game
function playRound(player1Choice) {
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    player1ChoiceDisplay.textContent = `Player 1 chose: ${player1Choice}`;
    player2ChoiceDisplay.textContent = `Player 2 chose: ${player2Choice}`;

    if (player1Choice === player2Choice) {
        gameStatusDisplay.textContent = "It's a tie!";
    } else if (
        (player1Choice === "rock" && player2Choice === "scissors") ||
        (player1Choice === "paper" && player2Choice === "rock") ||
        (player1Choice === "scissors" && player2Choice === "paper")
    ) {
        gameStatusDisplay.textContent = "Player 1 wins!";
        updateScore(player1ScoreDisplay);
    } else {
        gameStatusDisplay.textContent = "Player 2 wins!";
        updateScore(player2ScoreDisplay);
    }
}

function updateScore(scoreDisplay) {
    scoreDisplay.textContent = parseInt(scoreDisplay.textContent) + 1;
}

function resetGame() {
    player1ChoiceDisplay.textContent = "";
    player2ChoiceDisplay.textContent = "";
    gameStatusDisplay.textContent = "";
    player1ScoreDisplay.textContent = "0";
    player2ScoreDisplay.textContent = "0";
}
