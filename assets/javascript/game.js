//Make sure that nothing happens until page is comepletely loaded.
$(document).ready(function() {

//Global Variables**********************************
var crystal = {
	green:
	{
		name: "Green",
		value: 0
	},
	blue:
	{
		name: "Blue",
		value: 0
	},
	purple:
	{
		name: "Purple",
		value: 0
	},
	pink:
	{
		name: "Pink",
		value: 0
	}
};

//Scores
var currentScore = 0;
var targetScore = 0;

//Wins and Losses
var winCount = 0;
var lossCount = 0;

//Functions****************************************

//Helper to get random numbers
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

//Will start and restart game
var startGame = function() {

	//Reset Current Score
	currentScore = 0;

	//Set a new Target Score (between 19 and 120)
	targetScore = getRandom(19, 120);
	
	//Set different values for each of the crystals
	crystal.green.value = getRandom(1, 12);
	crystal.blue.value = getRandom(1, 12);
	crystal.purple.value = getRandom(1, 12);
	crystal.pink.value = getRandom(1, 12);
	
	//Show all these changes in HTML
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	//Testing
	console.log("***************************************");
	console.log("Target Score: " + targetScore);
	console.log("Green: " + crystal.green.value);
	console.log("Blue: " + crystal.blue.value);
	console.log("Purple: " + crystal.purple.value);
	console.log("Pink: " + crystal.pink.value);
	console.log("***************************************");

};

//Respond to clicks
var addValues = function(crystal) {
	//Change current score
	currentScore = currentScore + crystal.value;
	//Change HTML to reflect score
	$("#yourScore").html(currentScore);
	//Check if the user wins or losses
	checkWin();
	//Testing
	console.log("Your Score " + currentScore);
};

//Check if your score 
var checkWin = function() {
	
	if(currentScore > targetScore) {
		alert("Sorry. You lost!");
		console.log("You lost.");
		
		//Add to loss counter 
		lossCount++;
		$("#lossCount").html(lossCount);

		//Restart game
		startGame();

	} else if (currentScore == targetScore) {
		alert("Congratulations! You da man.");
		console.log("You won!");

		//Add to win counter
		winCount++
		$("#winCount").html(winCount);

		//Restart game
		startGame();
	}
};

//Main Processes***********************************
startGame();

$("#green").click(function() {
	addValues(crystal.green);
});
$("#blue").click(function() {
	addValues(crystal.blue);
});
$("#purple").click(function() {
	addValues(crystal.purple);
});
$("#pink").click(function() {
	addValues(crystal.pink);
});

}); //$(document).ready();