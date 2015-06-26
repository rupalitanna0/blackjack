window.onload = function(){
  document.getElementById('startbutton').addEventListener('click', function() {
  	game.startGame();
  	game.deal();
  });
  // document.getElementById("deal").addEventListener('click', function(){
  // 	game.deal();
  // });
  document.getElementById("hit").addEventListener('click', function(){
  	game.dealer.hit();
  });
  document.getElementById("bet").addEventListener('click', function(){
  	game.player.bet();
  });
  document.getElementById("5").addEventListener("click", function(){
  	game.moneyop();
  });
  document.getElementById("10").addEventListener("click", function(){
  	game.moneyop();
  });
document.getElementById("15").addEventListener("click", function(){
  	game.moneyop();
  });

  document.getElementById("20").addEventListener("click", function(){
  	game.moneyop();
  });

  document.getElementById("25").addEventListener("click", function(){
  	game.moneyop();
  });



};
 



var game = {
	player: new Player(),
	dealer: new Dealer(),
	playpoint: 0,
	dealerpoint: 0,
	startGame: function  () {
		console.log('game started');
		this.dealer.deck.createDeck();
		this.dealer.deal();
		var moneyDisplay = document.getElementById("moneyofplayer");
		moneyDisplay.innerHTML = player.playermoney;

	},
	deal: function  () {
		console.log("this id deal");
		for(var i = 0; i < 2; i++){
			this.player.hand.hit(this.dealer.deal());
			this.dealer.hand.hit(this.dealer.deal());
		}
	},
	winner: function(){
		this.playPoint = this.player.hand.getValue();
		this.dealerpoint = this.dealer.hand.getValue();
		var playpoint = document.getElementById("playerpoints");
		playpoint.innerHTML = ("this.playPoint");
		var dealerpoints = document.getElementById("dealpoint");
		dealerpoints.innerHTML = ("this.dealerpoint");
		if(this.playPoint === this.dealerpoint){
			console.log(this.playPoint);
			console.log("its a tie")
		}else if(this.playPoint > 21){
			console.log("player rocked");
		}else if(this.dealerpoint > 21){
			console.log("dealer rocked");

		}else if(this.playPoint === 21){
			console.log("player is the winner");
		}else if(this.dealerpoint === 21){
			console.log("dealer is the winner");
		}
	},
	moneyop: function(){
		var dollarfive = document.getElementById('5');
		var dollarten = document.getElementById("10");
		var dollarfitn = document.getElementById("15");
		var dollartwenty = document.getElementById("20");
		var dollartwfive = document.getElementById("25");
		if(dollarfive.clicked == true){
			var dl5 = dollarfive.getAttribute("data-value");
			var numtostring = parseInt(dl5);
			game.player.bet(numtostring);
			console.log("i ma doll5");
		}else if(dollarten.clicked == true){
			var dl10 = dollarten.getAttribute("data-value");
			var ntos = parseInt(dl10);
			game.player.bet(ntos);
			console.log("i ma doll10");

		}else if(dollarfitn.clicked == true){
		
			var dl15 = dollarfitn.getAttribute("data-value");
			var nstost = parseInt(dl15);
			game.player.bet(nstost);
			console.log("i ma doll15");

		}else if(dollartwenty.clicked == true){
			var dl20 = dollartwenty.getAttribute("data-value");
			var numtostr = parseInt(dl20);
			game.player.bet(numtostr);
			console.log("i ma doll20");

		}else if(dollartwfive.clicked == true){
			var dl25 = dollartwfive.getAttribute("data-value");
			var nstostgs = parseInt(dl25);
			game.player.bet(nstostgs);
			console.log("i ma doll25");

		}
		// where is this going?

	} 
	
	

};


	
	// deal :function(){
	// 	for(var j = 0; j < 2 ; j++){
	// 		this.twocards = testHands.getcards();
	// 	}
	// 	return this.twocards;	
	// }
	
