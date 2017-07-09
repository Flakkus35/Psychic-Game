var compChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var guessList = [];

// display stats and start initial question
var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
document.getElementById("wins").innerHTML = wins;
document.getElementById("loss").innerHTML = losses;
document.getElementById("guessleft").innerHTML = guesses;

document.onkeyup = function(event) {
	var userGuess = event.key;

	// checks if the key pressed is a valid letter
	if (compChoice.includes(userGuess)) {
		// if user guess correctly add wins, wipe guesses/list, and reset question
		if (userGuess == compGuess) {
			wins++;
			document.getElementById("wins").innerHTML = wins;
			compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
			guesses = 10;
			guessList = [];
			document.getElementById("guessleft").innerHTML = guesses;
			document.getElementById("guesses").innerHTML = guessList;
		}

		else if (userGuess !== compGuess) {
			// determines if letter has already been guessed
			if (guessList.includes(userGuess)) {}
			// pushes a guess through to the guess list
			else {
				guesses--;
				document.getElementById("guessleft").innerHTML = guesses;
				guessList.push(userGuess);
				document.getElementById("guesses").innerHTML = guessList;
			}
		}

		// changes loss counter when guesses have run out and resets question
		if (guesses == 0) {
			losses++;
			document.getElementById("loss").innerHTML = losses;
			guesses = 10;
			guessList = [];
			document.getElementById("guessleft").innerHTML = guesses;
			document.getElementById("guesses").innerHTML = guessList;
			compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
		}
	}
}
