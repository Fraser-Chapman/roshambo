var activePlayer = 0;
var player1Move = null;
var player2Move = null;

function changePlayer(){
    activePlayer = activePlayer % 2 + 1;
    document.getElementById("activePlayer").innerHTML =
        "It's player " + activePlayer + "'s turn!";
}

function checkForWinner(){
    if( player1Move && player2Move ){

        switch (player1Move) {
            case player2Move:
                document.getElementById("winner").innerHTML = "Draw!";
                break;

            case "rock":
                document.getElementById("winner").innerHTML = player2Move === "paper" ? "Player 2 wins!" : "Player 1 wins!";
                break;

            case "scissors":
                document.getElementById("winner").innerHTML = player2Move === "rock" ? "Player 2 wins!" : "Player 1 wins!";
                break;

            case "paper":
                document.getElementById("winner").innerHTML = player2Move === "scissors" ? "Player 2 wins!" : "Player 1 wins!";
                break;

            default:
                document.getElementById("winner").innerHTML = "An error occurred"


        }

        resetGame();
    }
}

function resetGame(){
    player1Move = null;
    player2Move = null;
}

function play(moveName) {
    if( activePlayer === 1 ) {
        player1Move = moveName;
    } else {
        player2Move = moveName;
    }
    checkForWinner();
    changePlayer();
}
