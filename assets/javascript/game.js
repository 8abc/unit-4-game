//Make the number to guess//
var randomNum = "";
//Create counter for wins//
var wins = 0;
//Create counter for loss
var lost = 0;
//Create something to track your score
var yourScore = 0;

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
    var random = Math.floor(Math.random() * 11) + 1;
    //Assigning random number to crystal
    $(this).attr("data-random", random);
  });
}
//Start the game with 0 wins and losses
function startGame() {
  $(".wins").html("<h3>Wins: </h3>" + wins);
  $(".losses").html("<h3>Losses: </h3>" + lost);

  getnewRandomnumbers();
}
//When a crystal image gets clicked
$(".crystal-image").on("click", function() {
  //Grabbing the random number to the crystal
  var crystalValue = $(this).attr("data-random");
  //Add crystal value to score
  yourScore += crystalValue;
  //Check if it's a win or loss after this click
  if (yourScore === randomNum) {
    $("#wins").html("<h3>Wins: </h3>" + wins);
    alert("YOU WIN!");
    getnewRandomnumbers();
  } else if (yourScore > randomNum) {
    $("#losses").html("<h3>Losses: </h3>");
    alert("You lost, try again. Good luck!");
    getnewRandomnumbers();
  } else {
    //Put your score on the screen
    $("#yourScore").html("Your Score: " + yourScore);

    console.log("Your new Score: " + yourScore);
  }
});

/// */
