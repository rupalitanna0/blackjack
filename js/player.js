	console.log("I am player");
	//when you get deal pass the deck in the parenthesis thn evaluate it
	var Player = function  () {
		this.hand = new Hands();
		this.playermoney = 5000;
		this.bet = function(moneyOnBet){
			console.log("i am bet");
			return this.playermoney -= this.moneyOnBet;
		};
		this.stand = function(){
			/// how should i return the value of two cards set in deal or whatever player has rite now
		};
		// doubleup : function(){
		// 	this.doubleCard = testDeck.getrandom();
		// 	this.playermoney -= this.moneyOnBet * 2; 
		// 	return this.doubleCard, this.playermoney;
		// }
	}
