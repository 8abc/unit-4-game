//Make the number to guess//
var randomNum = "";
//Create counter for wins//
var wins = 0;
//Create counter for loss
var lost = 0;
//Create something to track your score
var yourScore = 0;
// Create number to guess
function getnewRandomnumbers() {
  yourScore = 0;
  $("#yourScore").html("<h3> Your Score: </h3>" + yourScore);
  //set a random number between 19-120 for the number to guess
  randomNum = Math.floor(Math.random() * 102) + 19;
  //Put the number to guess on the screen
  $("#result").html("<h3>Number to Guess: </h3>" + randomNum);

  //Go through each crystal image class
  $(".crystal-image").each(function() {
    //Each crystal has a random value from 1- 12 and assign to it
    var random = Math.floor(Math.random() * 12) + 1;
    //Assigning random number to crystal
    $(this).attr("data-random", random);
  });
}

//Start the game with 0 wins and losses
function startGame() {
  var yourScore = 0;
  $(".wins").html("<h3>Wins: </h3>" + wins);
  $(".losses").html("<h3>Losses: </h3>" + lost);
  getnewRandomnumbers();
}
function winner() {
  wins = wins++;
  $("#wins").html("Wins: " + wins);
  alert("YOU WIN!");
  $("#yourScore").html(yourScore);
  console.log("YOU WIN");
  startGame();
}
function loser() {
  losses = lost++;
  $("#losses").html("Losses: " + lost);
  alert("You lost, try again. Good luck!");
  $("#yourScore").html(yourScore);
  console.log("You lost");
  getnewRandomnumbers();
  startGame();
}
//When a crystal image gets clicked
$(".crystal-image").on("click", function() {
  //Grabbing the random number to the crystal
  var crystalValue = $(this).attr("data-random");
  //Add crystal value to score
  yourScore += crystalValue;
  //Check if it's a win or loss after this click
  if (yourScore === randomNum) {
    winner();
  } else if (yourScore > randomNum) {
    loser();
  } else {
    //Put your score on the screen
    $("#yourScore").html("Your New Score: " + yourScore);
    console.log("Your new Score: " + yourScore);
  }
});
