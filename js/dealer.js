console.log("I am dealer");
var Dealer = function (){
	this.hand = new Hands();
	this.deck = new DeckCard();
	this.deal = function  () {
		return this.deck.getRandom();
	}
	this.hit = function(){
		return this.hand.hit();
	}
}

// how to get the amount of bet from the dealer
// how to get the cards to evaluate the cards