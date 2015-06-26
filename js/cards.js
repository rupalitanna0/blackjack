	console.log("i am cards");
var Cards = function(theValue, theType){
	this.theValue = theValue; 
	this.theType = theType;
	this.image = "image/" + this.theValue + this.theType + ".png";
}



var DeckCard = function(){
	this.deckOfAll = [];
	this.createDeck = function () {
		var valueOfCard = [2,3,4,5,6,7,8,9,10,"j","q","k","a"];
		var typeOfCard = ["diamond", "club", "spade", "heart"];
		for(var i = 0; i < valueOfCard.length; i++){
			for(var j = 0; j < typeOfCard.length; j++){
				this.deckOfAll.push(new Cards(valueOfCard[i], typeOfCard[j]));
			}
		}
		console.dir(this.deckOfAll);
	};

	this.getRandom = function(){
		var randomNumber = Math.floor(Math.random()* this.deckOfAll.length);
		var randomCard = this.deckOfAll.splice(randomNumber, 1);
		return randomCard[0];
	};


}
