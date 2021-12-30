const editPlayer1Btn = document.querySelector("#edit-player-1-btn");
const editPlayer2Btn = document.querySelector("#edit-player-2-btn");
const startGame = document.querySelector("#start-game-btn");
const gameArea = document.querySelector("#active-game");
const overlay = document.querySelector("#config-overlay");
const backdrop = document.querySelector("#backdrop");
const overlayBtn = document.querySelector("#overlay-btn");
const form = document.querySelector("form");
const errorOutput = document.querySelector("#config-errors");
const gameBoard = document.querySelector("#game-board");
const gameFieldElements = document.querySelectorAll("#game-board li");
const activePlayerName = document.querySelector("#active-player-name");
const gameOver = document.querySelector("#game-over");

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  overlay.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  overlay.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutput.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutput.textContent = "Please Enter A Valid Name!";
    return;
  }

  const updatedPlayerData = document.querySelector(
    "#player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}

function resetGame() {
  editedPlayer = 0;
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;

  gameOver.firstElementChild.innerHTML =
    'You Won, <span id="winner-name">PLAYER NAME</span>!';
  gameOver.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameBoard.children[gameBoardIndex].textContent = "";
      gameBoard.children[gameBoardIndex].classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startGameFun() {
  if (!players[0].name || !players[1].name) {
    alert("Please Set Custom Player Names");
    return;
  }

  resetGame();

  activePlayerName.textContent = players[0].name;
  gameArea.style.display = "block";
}

function selectGameField(event) {
  if (gameIsOver) {
    return;
  }
  const selectedField = event.target;
  const selctedCol = selectedField.dataset.col - 1;
  const selctedRow = selectedField.dataset.row - 1;

  if (gameData[selctedRow][selctedCol] > 0) {
    alert("Please Select An Empty Field");
    return;
  }
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  gameData[selctedRow][selctedCol] = activePlayer + 1;

  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
  activePlayerName.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[i][0];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameOver.style.display = "block";
  gameIsOver = true;

  if (winnerId > 0) {
    gameOver.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOver.firstElementChild.textContent = "It's A Draw!";
  }
}

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);
overlayBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);
startGame.addEventListener("click", startGameFun);

form.addEventListener("submit", savePlayerConfig);
