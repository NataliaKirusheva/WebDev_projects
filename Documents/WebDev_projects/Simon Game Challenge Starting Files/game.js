var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

//You'll need a way to keep track of whether if
// the game has started or not, so you only call nextSequence() on the first keypress.
var start = false;

//1. Use jQuery to detect when a keyboard key has been pressed,
// when that happens for the first time, call nextSequence().

$(document).keydown(function() {
  if (!start) {
    $("#level-title").text("Level " + level);
    nextSequence();
    start = true;
  }
});

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);

});


function nextSequence() {
  //6. Once nextSequence() is triggered, reset the userClickedPattern
  // to an empty array ready for the next level.
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  console.log("randomChosenColor " + randomChosenColor);
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(50);
  playSound(randomChosenColor);
}

function checkAnswer(currentLevel) {
  //3. Write an if statement inside checkAnswer() to check if the most recent user answer
  // is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    console.log("userClickedPattern " + userClickedPattern);
    console.log("gamePattern " + gamePattern);

    //4. If the user got the most recent answer right in step 3, then check that they have finished
    // their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    console.log("wrong");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  start = false;

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
