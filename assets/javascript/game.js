// Crystal collector game
$(document).ready(function(){

// Select a random number that shows at the start of the game
var winNumber = Math.floor(Math.random()*101+19);
$("#randomScore").text(winNumber);

// Select a random number that shows at the start of the game


// setup random numbers for each jewel
var redNum = Math.floor(Math.random()*11+1);
var blueNum = Math.floor(Math.random()*11+1);
var yellowNum = Math.floor(Math.random()*11+1);
var greenNum = Math.floor(Math.random()*11+1);


var theTotal = 0;
var wins = 0;
var losses = 0;
var winNumber;

$("#numberWins").text(wins);
$("#numberLosses").text(losses);


//2. Game reset function

function reset(){
  winNumber = Math.floor(Math.random()*101+19);
  $("#randomScore").text(winNumber);
  console.log(winNumber);
  redNum = Math.floor(Math.random()*11+1);
  console.log(redNum);
  blueNum = Math.floor(Math.random()*11+1);
  console.log(blueNum);
  yellowNum = Math.floor(Math.random()*11+1);
  console.log(yellowNum);
  greenNum = Math.floor(Math.random()*11+1);
  console.log(greenNum);
  theTotal = 0;
  $("#displayedScore").text(theTotal);
}

//function to do if number matches

function winning(){
  alert("You won!");
  wins++;
  $("#numberWins").text(wins);
  reset();
}

//function to do if number does not match

function losing(){
  alert("You lose!");
  losses++;
  $("#numberLosses").text(losses);
  reset();
}


//whenever user clicks on the buttons
$("#redButton").on('click', function(){
  theTotal = theTotal + redNum;
  console.log("the total so far: " + theTotal);
  $("#displayedScore").text(theTotal);

  // compare to see if number reached already

  if (theTotal == winNumber){
    winning();
  } else if (theTotal > winNumber){
    losing();
  }

})

$("#blueButton").on('click', function(){
  theTotal = theTotal + blueNum;
  console.log("the total so far: " + theTotal);
  $("#displayedScore").text(theTotal);

 // compare to see if number reached already

  if (theTotal == winNumber){
    winning();
  } else if (theTotal > winNumber){
    losing();
  }

})

$("#yellowButton").on('click', function(){
  theTotal = theTotal + yellowNum;
  console.log("the total so far: " + theTotal);
  $("#displayedScore").text(theTotal);

  // compare to see if number reached already

  if (theTotal == winNumber){
    winning();
  } else if (theTotal > winNumber){
    losing();
  }

})

$("#greenButton").on('click', function(){
  theTotal = theTotal + greenNum;
  console.log("the total so far: " + theTotal);
  $("#displayedScore").text(theTotal);

  // compare to see if number reached already 

  if (theTotal == winNumber){
    winning();
  } else if (theTotal > winNumber){
    losing();
  }

})

});