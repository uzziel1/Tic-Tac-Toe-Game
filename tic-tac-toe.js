let ticTacToeHTML = `<p>Tic Tac Toe</p>
<button class="js-play-button">Play</button>`;

//TIC TAC TOE GRID BUTTON VALUES HERE (pls learn how to make this more effectively later on...)
let moveCounter = 0;

let R1;
let M1;
let L1;

let R2;
let M2;
let L2;

let R3;
let M3;
let L3;
//TIC TAC TOE GRID VALUES END

function renderHTML() {
  document.querySelector(".js-main").innerHTML = ticTacToeHTML;

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
  }

  const xButtonElement = document.querySelector(".js-x-button");
  const oButtonElement = document.querySelector(".js-o-button");

  let counter = 0;
  let playersMove;

  if (xButtonElement) {
    xButtonElement.addEventListener("click", () => {
      counter++;
      if (counter % 2 === 0) {
        playersMove = `O`;
      } else {
        playersMove = `X`;
      }
      ticTacToeHTML = `
      <p>${playersMove}'s Move</p>
      <div>
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
    </div>`;

      renderHTML();
    });
  }

  if (oButtonElement) {
    oButtonElement.addEventListener("click", () => {
      if (counter % 2 === 0) {
        playersMove = `O`;
      } else {
        playersMove = `X`;
      }
      ticTacToeHTML = `
          <p>${playersMove}'s Move</p>
          <div>
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
        </div>`;

      renderHTML();
    });
  }
}

function checkWin() {}
renderHTML();
