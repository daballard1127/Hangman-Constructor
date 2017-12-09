var Letter = require('./letter.js')

function Word(wrd) {
    this.word = wrd;
    this.letters = [];
    this.wordFound = false;

    // gets letters and pushes to letters array
    this.getLetters = function (word) {
        for (var i = 0; i < this.word.length; i++) {
            
            this.letters.push(new letters.Letter(this.word[i]));
        }
    };

    // checks to see if user found the current word
    this.checkWord = function () {
        var count = 0;
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].appear) {
                count++;
            }
        }
        if (count === this.letters.length) {
            this.found = true;
        }
        return this.found;
    };

    
    this.checkIfLetterFound = function (guessedLetter) {
        var returnLetter = 0

        
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].charac === guessedLetter) {
                this.letters[i].appear = true;
                returnLetter++
            }
        };
        
        return returnLetter;
    };

    this.wordDisplay = function () {
        var display = "";
        
        for (var i = 0; i < this.letters.length; i++) {
            display += this.letters[i].letterDisplay();
        }
        
        
        return display;
    };
};

module.exports = Word
