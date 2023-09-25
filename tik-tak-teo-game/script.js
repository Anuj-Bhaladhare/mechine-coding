const allBoxes = document.querySelectorAll(".box");
const clearButton = document.querySelector(".clear-btn");

let currentPlayer = "X"; // Initialize the current player
let gameGrid = ["", "", "", "", "", "", "", "", ""]; // Initialize the game grid

const winingPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let boxvalue = true;
allBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (boxvalue && gameGrid[index] === "") {
            box.innerHTML = "X";
            gameGrid[index] = "X";
            boxvalue = false;
            currentPlayer = "O";
        } else if (!boxvalue && gameGrid[index] === "") {
            box.innerHTML = "O";
            gameGrid[index] = "O";
            boxvalue = true;
            currentPlayer = "X";
        }
        checkWinner();
    });
});

clearButton.addEventListener("click", () => {
    allBoxes.forEach((box, index) => {
        box.innerHTML = "";
        gameGrid[index] = "";
    });
    currentPlayer = "X";
});

function checkWinner() {
    for (const position of winingPosition) {
        const [a, b, c] = position;
        if (gameGrid[a] && gameGrid[a] === gameGrid[b] && gameGrid[a] === gameGrid[c]) {
            alert(currentPlayer + " wins!");
        }
    }
}
