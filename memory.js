//will add the images afterward
var imgCards=[ "https://lh3.googleusercontent.com/ZZPdzvlpK9r_Df9C3M7j1rNRi7hhHRvPhlklJ3lfi5jk86Jd1s0Y5wcQ1QgbVaAP5Q=w300",
  "https://lh3.googleusercontent.com/ZZPdzvlpK9r_Df9C3M7j1rNRi7hhHRvPhlklJ3lfi5jk86Jd1s0Y5wcQ1QgbVaAP5Q=w300",
  "https://g.twimg.com/Twitter_logo_blue.png",
  "https://g.twimg.com/Twitter_logo_blue.png",
  "http://us.mullenlowe.com/wp-content/uploads//2013/10/instagramlogo.jpg",
  "http://us.mullenlowe.com/wp-content/uploads//2013/10/instagramlogo.jpg",
  "http://theappshowbox.com/wp-content/uploads/2015/10/LinkedIn-Logo.png",
  "http://theappshowbox.com/wp-content/uploads/2015/10/LinkedIn-Logo.png",
  "https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/93616/area14mp/image-20150902-6700-t2axrz.jpg",
  "https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/93616/area14mp/image-20150902-6700-t2axrz.jpg",
  "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
  "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
  "http://archiveteam.org/images/1/15/Apple-logo.jpg",
  "http://archiveteam.org/images/1/15/Apple-logo.jpg",
  "http://dri1.img.digitalrivercontent.net/Storefront/Site/msusa/images/promo/en-US/msstore_400x400.jpg",
  "http://dri1.img.digitalrivercontent.net/Storefront/Site/msusa/images/promo/en-US/msstore_400x400.jpg",
  "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-glossy-green-orbs-icons-alphanumeric/102895-3d-glossy-green-orb-icon-alphanumeric-dollar-sign.png",
  "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-glossy-green-orbs-icons-alphanumeric/102895-3d-glossy-green-orb-icon-alphanumeric-dollar-sign.png",
  "http://www.multimedialab.be/blog/wp-content/uploads/2009/04/logo_ps.gif",
  "http://www.multimedialab.be/blog/wp-content/uploads/2009/04/logo_ps.gif"
];
var flipCard=[];
var flippedCards = 0;
var shuffledDeck = [];

game = {
  counter: 0,
  shuffleDeck: function(){
    imgCards.sort(function(){
      if (Math.random() > 0.5){
        return 1;
      }
      else{
        return -1;
      }
    });
  },

  makeBoard: function(){
    game.shuffleDeck();
    var board = '';
    for( var i = 0; i<imgCards.length; i++){
      board += '<div class = "card">'
      board += '<img src = "'+imgCards[i]+'"/>'
      board += '</div>'
    }
    $('#gamePlace').html(board);
    $("p").eq(0).html("flipped cards: "+ counter);
    $("img").hide();
    game.gameMatch();
  },

  pickGameMode: function(){
    $("p").eq(0).html("What Difficulty would you like to take on?")
    $(".easy").click(function(){
      counter = 100;
      $(".hard").hide();
      $(".medium").hide();
      $(".easy").hide();
      game.makeBoard();
    })
    $(".medium").click(function(){
      counter = 50;
      $(".hard").hide();
      $(".medium").hide();
      $(".easy").hide();
      game.makeBoard();
    })
    $(".hard").click(function(){
      counter = 30;
      $(".hard").hide();
      $(".medium").hide();
      $(".easy").hide();
      game.makeBoard();
    })
  },

  gameMatch: function(){
    $(".card").on("click", playGame);
  },

  setNewGame: function(){
    game.pickGameMode();
  }
}

function playGame(){
  if(counter > 0) {
    if ((flipCard.length < 2) && ($(this).children("img").hasClass("up")) === false) {
      $(this).children("img").css("background-color","white");
      $(this).children("img").show();
      $(this).children("img").addClass("up");
      if (flipCard.length === 0){
        flipCard.push($(this).children("img").attr("src"));
        counter--;
        $("p").eq(0).html("flips left: "+ counter);
      }
      else if (flipCard.length === 1) {
        flipCard.push($(this).children("img").attr("src"));
        counter--;
        $("p").eq(0).html("flips left: "+ counter);
        checkIfMatch()
      }
    }
  }
}

function checkIfMatch(){
  if(flipCard[0]===flipCard[1]){
    $(".card").children("img[src='"+flipCard[1]+"']").addClass("match");
    flippedCards += 2;
    flipCard =[];
    if(flippedCards === imgCards.length){
      $("p").eq(0).html("You Completed the Game. The amount of flips you have left is "+ counter);
    }
  }
  else{
    setTimeout(function() {
      $("img").not(".match").hide();
      $("img").not(".match").removeClass("up");
    }, 500);
    flipCard =[];
    if (counter === 0) {
      $("p").eq(0).html("flips left: "+ counter + "\n Game Over!");
    }
  }
}

game.setNewGame();








// // window.addEventListener(makeBoard());
