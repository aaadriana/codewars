/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  if (p1 === "scissors") {
    if (p2 === "paper") return "Player 1 won!";
    if (p2 === "rock") return "Player 2 won!";
  }
  if (p1 === "paper") {
    if (p2 === "scissors") return "Player 2 won!";
    if (p2 === "rock") return "Player 1 won!";
  }
  if (p1 === "rock") {
    if (p2 === "paper") return "Player 2 won!";
    if (p2 === "scissors") return "Player 1 won!";
  }
};

rps("rock", "scissors"); // player 1 win
rps("scissors", "paper"); // player 1 win
rps("paper", "rock"); // player 1 win
rps("scissors", "rock"); // player 2 win
rps("paper", "scissors"); // player 2 win
rps("rock", "paper"); // player 2 win
rps("rock", "rock"); // 'Draw!'
rps("scissors", "scissors"); // 'Draw!'
rps("paper", "paper"); // 'Draw!'
