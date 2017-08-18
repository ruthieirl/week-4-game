//Make sure that nothing happens until page is comepletel loaded.
$(document).ready(function() {

	//Set up variables to hold our numbers.
	var wins = 0;
	var losses = 0; 
	var score = "";
	//Computer needs to generate random number between 19 and 120. 
	var targetNumber = Math.floor(Math.random() * 120) + 1;
	//Takes the target number and places it in the correct div for display.
	$("#targetNumber").html("<h3>" + targetNumber + "</h3>");
	//Computer needs to generate the four images and random values of crystal buttons.
	//Values are between 1 and 12.
	var valueOptions = [1, 5, 9, 11];
	//Create an array of image sources for crystals
	var images = ["assets/images/greenish.png", "assets/images/bluish.png", "assets/images/purplish.png", "assets/images/pinkish.png"]
	//Create a loop to create crystals for each value in the array
	for (var i = 0; i < valueOptions.length; i++) {
		//Each time it goes through, it should choose an image.
		var crystal = $("<img>");
		console.log(valueOptions[i]);
		crystal.addClass("images");
		crystal.attr("src", "assets/images/greenish.png");
		crystal.attr("data-crystalvalue", valueOptions[i]);
		$(".imageHolder").append(crystal);

	}
	//Every time a crystal button is clicked, the value of the button is added. 
	//If the user number and computer's random number match, user wins. Game resets.
	//if (targetNumber === score) {
	//	wins++;
	//	$("#scoreboard").html("<h2>Wins: " + wins + "</h2>" +
	//						  "<h2>Losses: " + losses + "</h2>");
	//	console.log(wins);
	//	console.log(losses);
	//	score = 0;

	//}
	//If user number is greater than computer's random number, user loses. Game resets.
	//if (score > targetNumber) {
	//	losses++;
	//	$("#scoreboard").html("<h2>Wins: " + wins + "</h2>" +
	//						  "<h2>Losses: " + losses + "</h2>");
	//	console.log(wins);
	//	console.log(losses);
	//	score = 0;
	//}
}); //$(document).ready();