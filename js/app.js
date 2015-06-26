window.onload = function(){
  document.getElementById('startbutton').addEventListener('click', function() {
  	game.startGame();
  	game.deal();
  	game.points();

  });
  // document.getElementById("deal").addEventListener('click', function(){
  // 	game.deal();
  // });
	document.getElementById("stand").addEventListener('click', function(){
		game.player.stand();
	});

  document.getElementById("hit").addEventListener('click', function(){
  	game.player.hand.hit(game.dealer.deck.getRandom());
  });
  document.getElementById("bet").addEventListener('click', function(){
  	game.player.bet();
  });
  document.getElementById("five").addEventListener("click", function(){
  	game.addfive();
  });
  document.getElementById("ten").addEventListener("click", function(){
  	game.addten();
  });
document.getElementById("fifteen").addEventListener("click", function(){
  	game.addfifteen();
  });

  document.getElementById("twenty").addEventListener("click", function(){
  	game.addtwenty();
  });

  document.getElementById("twentyfive").addEventListener("click", function(){
  	game.addtwentyfive();
  });



};
 



var game = {
	player: new Player(),
	dealer: new Dealer(),
	playPoint: 0,
	dealerPoint: 0,
	startGame: function  () {
		console.log('game started');
		this.dealer.deck.createDeck();
		this.dealer.deal();
		var moneyDisplay = document.getElementById("moneyofplayer");
		moneyDisplay.innerHTML = (this.player.playermoney);
		
		

	},
	deal: function  () {
		console.log("this id deal");
		for(var i = 0; i < 2; i++){
			this.player.hand.hit(this.dealer.deal());
			this.dealer.hand.hit(this.dealer.deal());
		}
	},
	points: function(){
		this.playPoint = this.player.hand.getValue();
		this.dealerPoint = this.dealer.hand.getValue();

		var ppoint = document.getElementById("playerpoints");
		ppoint.innerHTML = (this.playPoint);

		var dpoints = document.getElementById("dealpoint");
		dpoints.innerHTML = (this.dealerPoint);

	},
	winner: function(){
				// this doesnt work
		if(this.playPoint === this.dealerPoint){
			console.log("its a tie")
		}else if(this.playPoint > 21){
			console.log("player rocked");
		}else if(this.dealerPoint > 21){
			console.log("dealer rocked");

		}else if(this.playPoint === 21){
			console.log("player is the winner");
		}else if(this.dealerPoint === 21){
			console.log("dealer is the winner");
		}
	},
	addfive: function(){
		var getFive = document.getElementById("five");
		var dl5 = getFive.getAttribute("data-value");
		var numtostring = parseInt(dl5);
		game.player.bet(numtostring);
		var moneyDisplay = document.getElementById("moneyofplayer");
		moneyDisplay.innerHTML = (this.player.playermoney);

	},
	addten: function(){
		var getTen = document.getElementById("ten");
		var dl10 = getTen.getAttribute("data-value");
		var ntos = parseInt(dl10);
		game.player.bet(ntos);
		var moneyDisplay = document.getElementById("moneyofplayer");
		moneyDisplay.innerHTML = (this.player.playermoney);


	},
	addfifteen: function(){
		var getFifteen = document.getElementById("fifteen");
		var dl15 = getFifteen.getAttribute("data-value");
		var nstost = parseInt(dl15);
		game.player.bet(nstost);
		var moneyDisplay = document.getElementById("moneyofplayer");
		moneyDisplay.innerHTML = (this.player.playermoney);
	},
	addtwenty: function(){
		var getTwenty = document.getElementById("twenty");
		var dl20 = getTwenty.getAttribute("data-value");
		var numtostr = parseInt(dl20);
		game.player.bet(numtostr);
		var moneyDisplay = document.getElementById("moneyofplayer");
		moneyDisplay.innerHTML = (this.player.playermoney);

	},
	addtwentyfive: function(){
		var getTwentyFive = document.getElementById("twentyfive");
		var dl25 = getTwentyFive.getAttribute("data-value");
		var nstostgs = parseInt(dl25);
		game.player.bet(nstostgs);
		var moneyDisplay = document.getElementById("moneyofplayer");
		moneyDisplay.innerHTML = (this.player.playermoney);
			
	}
	// moneyop: function(){
	// 	var dollarfive = document.getElementById("five");
	// 	var dollarten = document.getElementById("ten");
	// 	var dollarfitn = document.getElementById("fifteen");
	// 	var dollartwenty = document.getElementById("twenty");
	// 	var dollartwfive = document.getElementById("twentyfive");

	// 	debugger
	// 	if(dollarfive.clicked == true){
	// 		alert("money is working")
	// 		debugger
	// 		var dl5 = dollarfive.getAttribute("data-value");
	// 		var numtostring = parseInt(dl5);
	// 		game.player.bet(numtostring);
	// 		console.log("i ma doll5");
	// 				debugger;

	// 	}else if(dollarten.clicked == true){
	// 		var dl10 = dollarten.getAttribute("data-value");
	// 		var ntos = parseInt(dl10);
	// 		game.player.bet(ntos);
	// 		console.log("i ma doll10");
	// 				debugger;

	// 	}else if(dollarfitn.click == true){
		
	// 		var dl15 = dollarfitn.getAttribute("data-value");
	// 		var nstost = parseInt(dl15);
	// 		game.player.bet(nstost);
	// 		console.log("i ma doll15");
	// 				debugger;


	// 	}else if(dollartwenty.clicked == true){
	// 		var dl20 = dollartwenty.getAttribute("data-value");
	// 		var numtostr = parseInt(dl20);
	// 		game.player.bet(numtostr);
	// 		console.log("i ma doll20");

	// 	}else if(dollartwfive.clicked == true){
	// 		var dl25 = dollartwfive.getAttribute("data-value");
	// 		var nstostgs = parseInt(dl25);
	// 		game.player.bet(nstostgs);
	// 		console.log("i ma doll25");

	// 	}
	// 	// where is this going?

	// } 
	
	

};


	
	// deal :function(){
	// 	for(var j = 0; j < 2 ; j++){
	// 		this.twocards = testHands.getcards();
	// 	}
	// 	return this.twocards;	
	// }
	
