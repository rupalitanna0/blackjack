console.log("i am hands");
var Hands = function(){
	this.value = 0;
	this.cards = [];
	this.getCards = function(card){
		this.cards.push(card);

	};
	this.getValue = function() {
		for(var i = 0; i < this.cards.length; i++){
			console.log("loop ran")
			if(this.cards[i].theValue === "j"){
				this.value += 10
				console.log("added 10 for j")

			}else if(this.cards[i].theValue === "q"){
				this.value += 10
				console.log("added 10 for q")
			}else if(this.cards[i].theValue === "k"){
				this.value += 10
				console.log("added 10 for k")
			}else if(this.cards[i].theValue === "a"){
				if(this.value > 10){
					this.value += 1
					console.log("added 1 for A")
				}
				this.value += 11
				console.log("added 11 for A")
			}else{
				this.value += this.cards[i].theValue;
				console.log("added card value")
			} 
		}return this. value
	};
	this.hit = function  (card) {
		this.cards.push(card);
		this.getValue();
	};
	this.dealerHit = function(card) {
	    if (this.value <= 16) {
	      
	      this.deal();
	      console.log("dealer has to hit");
	    }else{
	      console.log("dealer can stay");
	    }
	};
    //searches for blackjack
    this.blackJackSearch = function() {
      if (this.value === 21) {
        this.blackJack = true;
      } else {
        this.blackJack = false;
      }
    };

}
