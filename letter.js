 function Letter(ltr) {
    this.letter = ltr
    this.guessed = false

    
    this.letterDisplay = function () {
        if (this.letter == ' ') { 
            this.display = true
            return '  '
        } if (this.display === false) { 
            return ' _ '
        } else { 
            return this.letter
        }
    }
}

module.exports = Letter