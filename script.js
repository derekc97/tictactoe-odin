//jjs array gameboard = 3x 3 grid 

const emptyGameboard = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " "
];

let gameboard;
let gameboardBoard = document.querySelector(".gameboard");

resetGame();

let test;

function addToGameBoard(position) {
    if (gameboard[position] !== " ") {
        window.prompt("Enter an unoccupied space!")
    } else {

    
        gameboard[position] = "X";
        showGameBoard();
        }
}

function resetGame() {
    gameboard = emptyGameboard;
    return gameboard;
}

// startGame();

function startGame() {
    //ask player1, make player 1
    let player1 = "X";
    let player2 = "O";
    //ask player2, make player 2

    //start game, loop 9 times
    runGame();
}

function runGame() {

    for (let i = 0; i < 9; i++) {
        let playerChoice = window.prompt("Select a Spot");
        addToGameBoard(playerChoice);
    }
    
}

function showGameBoard() {
    console.log(gameboard);
}

function displayGameboard() {
    gameboard.forEach((space, index) => {
        let gamespace = document.createElement("div");
        gameboardBoard.appendChild(gamespace);
        gamespace.classList.add("gamespace");
        gamespace.textContent = index;
        gamespace.addEventListener("click", ()=> {
            // console.log(index);
            placeItem(index);
        })
    });
}

//place item in array
function placeItem(space) {
    let i = space;
    gameboard[i] = "X";
    // console.log(gameboard);
}

function testLoop() {
    let childrenArray = document.querySelectorAll(".gamespace");
    test = childrenArray;
    childrenArray.forEach(square => {
        // console.log(square.innerHTML)
        square.addEventListener("click", ()=> {
            console.log(square.innerHTML);
        })
    });
}


displayGameboard();

testLoop();