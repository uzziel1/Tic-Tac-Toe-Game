let ticTacToeHTML = `<p>Tic Tac Toe</p>
<button class="js-play-button">Play</button>`;

let ticTacToeButtonsHTML = "";

//TIC TAC TOE GRID BUTTON VALUES HERE (pls learn how to make this more effectively later on...)
let moveCounter = 0;
let playersMove;
let counter = 0;
/*
let R1;
let M1;
let L1;

let R2;
let M2;
let L2;

let R3;
let M3;
let L3;
*/
//TIC TAC TOE GRID VALUES END

//Array Tic Tac Toe Values

const gridButtons = [
  {
    name: "R1",
    value: "",
  },
  {
    name: "M1",
    value: "",
  },
  {
    name: "L1",
    value: "",
  },
  {
    name: "R2",
    value: "",
  },
  {
    name: "M2",
    value: "",
  },
  {
    name: "L2",
    value: "",
  },
  {
    name: "R3",
    value: "",
  },
  {
    name: "M3",
    value: "",
  },
  {
    name: "L3",
    value: "",
  },
];

function renderHTML() {
  document.querySelector(".js-main").innerHTML = ticTacToeHTML;

  const playButtonElement = document.querySelector(".js-play-button");
  if (playButtonElement) {
    playButtonElement.addEventListener("click", playButton);
  }
}

function renderButtonsHTML() {
  document.querySelector(".js-grid").innerHTML = ticTacToeButtonsHTML;

  const playButtonElement = document.querySelector(".js-play-button");
  if (playButtonElement) {
    playButtonElement.addEventListener("click", playButton);
  }
}
function playButton() {
  ticTacToeHTML = `<p>Who is going first?</p>
    <button class = "js-x-button">X</button> <button class = "js-o-button">O</button>
    <br>
    <br>
    <button class="js-back-to-title-screen-button">Back to title screen</button>`;

  renderHTML();

  const backButtonElement = document.querySelector(
    ".js-back-to-title-screen-button"
  );
  if (backButtonElement) {
    backButtonElement.addEventListener("click", () => {
      ticTacToeHTML = `<p>Tic Tac Toe</p>
      <button class="js-play-button">Play</button>`;
      renderHTML();
    });

    chooseMove();
  }
}

function checkWin() {}
renderHTML();

function chooseMove() {
  const xButtonElement = document.querySelector(".js-x-button");
  const oButtonElement = document.querySelector(".js-o-button");

  if (xButtonElement) {
    xButtonElement.addEventListener("click", () => {
      counter++;
      if (counter % 2 === 0) {
        playersMove = `O`;
      } else {
        playersMove = `X`;
      }
      renderTicTacToeButtonHTML(playersMove);
      /* <div>
      <button>R1</button>
      <button>M1</button>
      <button>L1</button>
    </div>

    <div>
      <button>R2</button>
      <button>M2</button>
      <button>L2</button>
    </div>

    <div>
      <button>R3</button>
      <button>M3</button>
      <button>L3</button>
    </div> ;

      renderHTML(); */
    });
  }

  if (oButtonElement) {
    oButtonElement.addEventListener("click", () => {
      if (counter % 2 === 0) {
        playersMove = `O`;
      } else {
        playersMove = `X`;
      }
      renderTicTacToeButtonHTML(playersMove);
    });
  }
}

function renderTicTacToeButtonHTML(move) {
  ticTacToeHTML = `
  <p class = "moveTitle js-title">${move}'s Move</p>
  <div class="grid-buttons js-grid"></div>`;
  gridButtons.forEach((button) => {
    ticTacToeButtonsHTML += `<button class = "ticTacToe js-buttons"> ${button.name} </button>`;
  });

  renderHTML();
  renderButtonsHTML();
  ticTacToeButtonJs();
}

function ticTacToeButtonJs() {
  document.querySelectorAll(".js-buttons").forEach((button) => {
    let clicked;
    button.addEventListener(
      "click",
      () => {
        clicked = true;
        counter++;
        button.value = `${playersMove}`;
        console.log(`${button.name}: ${button.value}`);

        if (counter % 2 === 0) {
          playersMove = `O`;
        } else {
          playersMove = `X`;
        }
        document.querySelector(".js-title").innerHTML = `${playersMove}'s Move`;
      },
      { once: true }
    );

    //DOES NOT WORK (FIGURE OUT HOW TO CHANGE THE BUTTONS TEXT TO THE PLAYERS MOVE ON THAT PARTICULAR BUTTON)
    if (clicked) {
      document.querySelector("js-buttons").innerHTML = `${playersMove}`;
    }
  });
}
