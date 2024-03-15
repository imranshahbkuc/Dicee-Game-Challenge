function startGame() {
  // Player One
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Select Random Number from 1 to 6

  let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png -- dice6.png

  let randomImageSource = "images/" + randomDiceImage; // images/dice1.png -- images/dice6.png

  let image1 = document.querySelectorAll("img")[0]; // Selecting image one

  image1.setAttribute("src", randomImageSource); // this will randomly select images for player1

  // Player two
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // combine 2 line code into 1

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //again combine the last 2 line of code from player 1

  // if statement goes here..
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw! try agin.";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
}

startGame();
const playAgainBtn = document.getElementById("playAgainBtn");
playAgainBtn.addEventListener("click", startGame);
