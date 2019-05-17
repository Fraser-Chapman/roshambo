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
                changeWinnerText("Draw");
                break;

            case "rock":
                changeWinnerText(player2Move === "paper" ? "Player 2 wins!" : "Player 1 wins!");
                break;

            case "scissors":
                changeWinnerText(player2Move === "rock" ? "Player 2 wins!" : "Player 1 wins!");
                break;

            case "paper":
                changeWinnerText(player2Move === "scissors" ? "Player 2 wins!" : "Player 1 wins!");
                break;

            default:
                changeWinnerText("An error occurred");

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

function changeWinnerText(winner) {
    document.getElementById("winner").innerHTML = winner;
}