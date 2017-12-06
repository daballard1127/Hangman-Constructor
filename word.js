var Letter = require('./letter.js')

function Word(wrd) {
    this.word = wrd
    this.letters = []
    this.wordFound = false

    // gets letters and pushes to letters array
    this.getLetters = function () {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    }

    // checks to see if user found the current word
    this.checkWord = function () {
        if (this.letters.every(function (lttr) {
            return lttr.appear === true;
        })) {
            this.wordFound = true;
            return true;
        }
    }

    
    this.checkIfLetterFound = function (guessedLetter) {
        var returnLetter = 0

        
        this.letters.forEach(function (lttr) {
            if (lttr.letter === guessedLetter) {
                lttr.display = true
                returnLetter++
            }
        })

        
        return returnLetter;
    }

    this.wordDisplay = function () {
        var display = ''
        
        
        this.letters.forEach(function (lttr) {
            var currentLetter = lttr.letterDisplay()
            display += currentLetter
        })
        return display
    }
}

module.exports = Word
