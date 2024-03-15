let ticTacToeHTML = `<div class="play-container">
<div>
  <img
    class="tic-tac-toe-logo"
    src="images/Tic Tac Toe Logo(white).png"
  />
</div>
<div>
  <button class="js-play-button play-button">Play now</button>
</div>
</div>`;

let ticTacToeButtonsHTML = "";
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

//TIC TAC TOE GRID BUTTON VALUES HERE (pls learn how to make this more effectively later on...)
let moveCounter = 0;
let playersMove;
let counter = 0;

let R1 = gridButtons[0].value;
let M1 = gridButtons[1].value;
let L1 = gridButtons[2].value;

let R2 = gridButtons[3].value;
let M2 = gridButtons[4].value;
let L2 = gridButtons[5].value;

let R3 = gridButtons[6].value;
let M3 = gridButtons[7].value;
let L3 = gridButtons[8].value;

//Array Tic Tac Toe Values

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
  ticTacToeHTML = `<div class="play-container">
  <div>
    <p class="going-first">Who is going first?</p>
  </div>
  <div>
    <button class="js-x-button x-button">X</button>
    <button class="js-o-button o-button">O</button>
  </div>
  <div class="title-screen-container">
    <button
      class="js-back-to-title-screen-button back-to-title-screen-button"
    >
      Back to title screen
    </button>
  </div>
</div>`;

  renderHTML();

  const backButtonElement = document.querySelector(
    ".js-back-to-title-screen-button"
  );
  if (backButtonElement) {
    backButtonElement.addEventListener("click", () => {
      ticTacToeHTML = `<div class="play-container">
      <div>
        <img
          class="tic-tac-toe-logo"
          src="images/Tic Tac Toe Logo(white).png"
        />
      </div>
      <div>
        <button class="js-play-button play-button">Play now</button>
      </div>
    </div>`;
      renderHTML();
    });

    chooseMove();
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    const cells = [
      gridButtons[a].value,
      gridButtons[b].value,
      gridButtons[c].value,
    ];

    if (cells.every((cell) => cell === "O")) {
      alert("O Wins");
      return;
    } else if (cells.every((cell) => cell === "X")) {
      alert("X Wins");
      return;
    }
  }

  console.log("Continue");
}

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
    ticTacToeButtonsHTML += `<button class = "ticTacToe js-buttons" data-move-buttons = ${button.name}> ${button.name} </button>`;
  });

  renderHTML();
  renderButtonsHTML();
  ticTacToeButtonJs();
}

function changeName(button) {
  button.innerHTML = `${playersMove}`;
}

function ticTacToeButtonJs() {
  document.querySelectorAll(".js-buttons").forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        counter++;
        console.log(counter);

        button.value = playersMove;

        const buttonId = button.dataset.moveButtons;
        const buttonObject = gridButtons.find((obj) => obj.name === buttonId);

        if (buttonObject && !buttonObject.value) {
          // Check if the button's value is already set
          if (!buttonObject.value) {
            buttonObject.value = playersMove;
            console.log(`${buttonId}: ${buttonObject.value}`);
          } else {
            // Handle case when button is already clicked
            console.log(`${buttonId} already clicked`);
            return;
          }

          changeName(button);

          if (counter % 2 === 0) {
            playersMove = `O`;
          } else {
            playersMove = `X`;
          }
          checkWin();

          document.querySelector(
            ".js-title"
          ).innerHTML = `${playersMove}'s Move`;
        }
      },
      { once: true }
    );
  });
}
