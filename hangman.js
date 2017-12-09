var inquirer = require('inquirer');
var Word = require('./word.js');
var Letter = require('./letter.js');

var guessesRemaining = 10;
var guessedLetters = [];
var display = 0;
var currentWord;



function startGame() {

    if (guessedLetters.length > 0) {
        guessedLetters = []
    }

    inquirer.prompt([{
        name: 'play',
        type: 'confirm',
        message: 'Ready?'
    }]).then(function(answer) {
        if (answer.play) {
            console.log('')
            console.log('You get 10 guesses to guess the word')

            newGame()
        } else {
            console.log('Good ')
        }
    })
}

function newGame() {
    if (guessesRemaining === 10) {
        var wordFound = ['Casey', 'Denise', 'Casey jr', 'Christina', 'Victoria', 'Christian', 'Reece', 'Vera'];
        var randNum = Math.floor(Math.random() * wordFound.length);
        currentWord = new Word(wordFound[randNum]);
        currentWord.getLetters();

        // displays current word as blanks.
        console.log('');
        console.log(currentWord.wordDisplay());
        console.log('');
        promptUser();
    } else {
        resetGuessesRemaining()
        newGame()
    }
}

function resetGuessesRemaining() {
    guessesRemaining = 10
}

function promptUser() {
    inquirer.prompt([{
        name: 'chosenLetter',
        type: 'input',
        message: 'Choose a letter',
        validate: function(value) {
            if (Letter(value)) {
                return true
            } else {
                return false
            }
        }
    }]).then(function(ltr) {

       
        var letterReturned = (ltr.chosenLetter).toUpperCase()

        
        var guessedAlready = false
        for (var i = 0; i < guessedLetters.length; i++) {
            if (letterReturned === guessedLetters[i]) {
                guessedAlready = true
            }
        }

        if (guessedAlready === false) {
            
            guessedLetters.push(letterReturned)

            var found = currentWord.checkIfLetterFound(letterReturned)

            if (found === 0) {
                console.log(' Wrong guess!')

                guessesRemaining--;

                
                display++;

                console.log('Guesses reamaining: ' + guessesRemaining)
                console.log(hangManDisplay[display - 1]) 
                console.log('')
                console.log(currentWord.wordDisplay())
                console.log('')
                console.log('Letters guessed: ' + guessedLetters)
            } else {
                console.log('You are correct!!')

                if (currentWord.checkWord() === true) {

                    console.log(currentWord.wordDisplay())

                    startGame()
                } else {
                    console.log('Guesses remaining: ' + guessesRemaining)

                    console.log(currentWord.wordDisplay())

                    console.log('Letters guessed: ' + guessedLetters)
                }
            }


            if (guessesRemaining > 0 && currentWord.wordFound === false) {
                promptUser();
            } else if (guessesRemaining === 0) {  

                console.log('GAME OVER')

                console.log('The word you were trying to guess was: ' + currentWord.word)

            }
        } else { 
            console.log('You"ve guessed that letter already, try again.')
            promptUser();
        }
    })
};
startGame();