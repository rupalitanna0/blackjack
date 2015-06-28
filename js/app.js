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
		game.winner();
		game.dealer.hand.dealerHit();
		game.dealer.hand.blackJackSearch();
	});

  document.getElementById("hit").addEventListener('click', function(){
  	game.player.hand.hit(game.dealer.deck.getRandom());
    game.renderhit();
    game.dealer.hand.blackJackSearch();
    game.winner();


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
		this.render();
	},
	render: function () {
        var cardDiv = $('#cardshow');
        for(var i = 0; i < this.player.hand.cards.length;i++){
            var card = $('<div>').css({"height": "200px", "width": "100px", "float": "left"})
            var img = $('<img>').attr('src', this.player.hand.cards[i].image);
            card.append(img);
            cardDiv.append(card)
        }
        var dealerCard = $('#dealercards');
        for(var j = 0; j < this.dealer.hand.cards.length;j++){
	        var card = $('<div>').css({"height": "200px", "width": "100px", "float": "left"})
	        var img = $('<img>').attr('src', this.dealer.hand.cards[j].image);

	        card.append(img);
	        dealerCard.append(card)
        }

    },
    renderhit: function () {
        var cardDiv = $('#cardshow');

        //for(var i = 0; i < this.player.hand.cards.length;i++){
	        var card = $('<div>').css({"height": "200px", "width": "100px", "float": "left"})
	        var img = $('<img>').attr('src', this.player.hand.cards[0].image);
	        card.append(img);
	        cardDiv.append(card)
	 //        		this.playPoint = this.player.hand.getValue();
	 //        		var ppoint = document.getElementById("playerpoints");
		// ppoint.innerHTML = (this.playPoint);

       // }
        // var dealerCard = $('#dealercards');
        // //for(var j = 0; j < this.dealer.hand.cards.length;j++){
	       //  var card = $('<div>').css({"height": "200px", "width": "100px", "float": "left"})
	       //  var img = $('<img>').attr('src', this.dealer.hand.cards[0].image);
	       //  	        card.append(img);

	       //  card.append(img);
	       //  dealerCard.append(card)
        //}

    },


	points: function(){
		this.playPoint = this.player.hand.getValue();
		this.dealerPoint = this.dealer.hand.getValue();

		var ppoint = document.getElementById("playerpoints");
		ppoint.innerHTML = (this.playPoint);

		var dpoints = document.getElementById("dealerpoint");
		dpoints.innerHTML = (this.dealerPoint);

	},
	winner: function(){
				// this doesnt work
		var checkForBust = false;


		if(this.player.hand.value === this.dealer.hand.value){
			alert("It's a tie");
		}else if(this.player.hand.value > this.dealer.hand.value){
			alert("player wins!");
		}else if(this.player.hand.value < this.dealer.hand.value){
				alert("dealer wins!");
		}else if(this.player.hand.value > 21){
			checkForBust === true;
			alert("game over its a checkForBust");
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
	
	

};


	
	
