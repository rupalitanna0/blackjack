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

