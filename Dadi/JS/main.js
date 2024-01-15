const playButton = document.getElementById("play-button");
let playerResult = document.getElementById("player-result");
let computerResult = document.getElementById("computer-result");
let winnerResult = document.getElementById("winner");
let playerNumber;
let computerNumber;
let winner = "";

playButton.addEventListener("click", function () {
  let playerNumber = Math.floor(Math.random() * 6 + 1);
  playerResult.innerHTML = playerNumber;
  let computerNumber = Math.floor(Math.random() * 6 + 1);
  computerResult.innerHTML = computerNumber;

  if (playerNumber > computerNumber) {
    winner = "PLAYER 1 WINS";
    console.log(winner);
    winnerResult.innerHTML = winner;
  }
  if (playerNumber < computerNumber) {
    winner = "COMPUTER WINS";
    console.log(winner);
    winnerResult.innerHTML = winner;
  }
  if (playerNumber == computerNumber) {
    winner = "PAREGGIO";
    console.log(winner);
    winnerResult.innerHTML = winner;
  }
});
