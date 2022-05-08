var randomNumber1 = [1, 2, 3, 4, 5, 6];

var randomDice1 = Math.floor(Math.random(randomNumber1)*(randomNumber1.length) + 1);
var randomDice2 = Math.floor(Math.random(randomNumber1)*(randomNumber1.length) + 1);

var diceImage1 = document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomDice1 + ".png");
var diceImage2 = document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomDice2 + ".png");


  if(randomDice1 > randomDice2) {
     document.querySelector("h1").innerHTML = "🚩 Player 1 Winns!";
  }
  else if (randomDice1 < randomDice2) {
     document.querySelector("h1").innerHTML = "Player 2 Winns! 🚩";
  }
  else {
     document.querySelector("h1").innerHTML = "Draw!";
  }
