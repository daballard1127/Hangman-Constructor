var Word = require("./word.js");


var Game = function(){
	this.ballardFamily = ['Casey', 'Denise', 'Casey jr', 'Christina', 'Victoria', 'Christian', 'Reece', 'Vera'];

	this.randomWord = this.ballardFamily[ Math.floor(Math.random() * this.ballardFamily.length)];
	this.currentWord = new Word(this.randomWord);
	
}
	var hangMan = new Game();
	// console.log(hangMan.randomWord);

module.exports = Game;
