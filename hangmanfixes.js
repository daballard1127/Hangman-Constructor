//CONSTRUCTOR FUNCTION
//Instruction:
//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
var prompt = require("prompt");
var Game = require('./gamedb.js');
var hangmanGame = new Game();
var userGuess = 10;

	prompt.start(); //starting the prompt
	letTheGameBegin(userGuess);
//=====================================================================================
		function letTheGameBegin(guesses){
			console.log("Guesses left: " + guesses);
			if(hangmanGame.currentWord.checkWord() == true){
				console.log("You win");
				return;
			}
			//if the user is out of gusses!
			if(guesses <= 0){
				console.log("Game Over!");
				return;
			}

		
		console.log(hangmanGame.currentWord.wordDisplay());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}
		
		if(hangmanGame.currentWord.checkIfLetterFound(result.letters) == false){
			guesses --;
		}
		letTheGameBegin(guesses);

	});
}

