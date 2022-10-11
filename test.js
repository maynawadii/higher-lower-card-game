var score=0;
var allCards=[
              '2 of hearts','2 of diamonds','2 of clubs','2 of spades',
              '3 of hearts','3 of diamonds','3 of clubs','3 of spades',
              '4 of hearts','4 of diamonds','4 of clubs','4 of spades',
              '5 of hearts','5 of diamonds','5 of clubs','5 of spades',
              '6 of hearts','6 of diamonds','6 of clubs','6 of spades',
              '7 of hearts','7 of diamonds','7 of clubs','7 of spades',
              '8 of hearts','8 of diamonds','8 of clubs','8 of spades',
              '9 of hearts','9 of diamonds','9 of clubs','9 of spades',
              '10 of hearts','10 of diamonds','10 of clubs','10 of spades',
              'J of hearts','J of diamonds','J of clubs','J of spades',
              'Q of hearts','Q of diamonds','Q of clubs','Q of spades',
              'K of hearts','K of diamonds','K of clubs','K of spades',
              'A of hearts','A of diamonds','A of clubs','A of spades']  

var copy_all_cards= allCards


function each(array, func) {
      for (var i = 0; i < array.length; i++) {
            func(array[i], i);  }
 }


function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
      if (predicate(element)) {
        acc.push(element);
      }
    });
    return acc;
  }


  
function getrandomcard(){
  
      var index = Math.floor(Math.random() * allCards.length);
      var card=allCards[index]
      var y=filter(allCards,function(element){
        return element!==card
      })
      allCards=y
      $("#game-table").append($("<p>"+card+"</p>"))
      return card}





function guess(){
     var choice_value = $("input[name='choice']:checked").val();
     return choice_value;
     }


function compare(){
     if (allCards.length!==0)
     {var choice_value=guess();
     var new_card=getrandomcard()
     var index_newcard=copy_all_cards.indexOf(new_card)
     var index_oldcard=copy_all_cards.indexOf(old_card)
     var x=Math.floor(index_newcard/4)
     var y=Math.floor(index_oldcard/4)
     if(x===y && choice_value==="Equal"){score++}
     else if(index_oldcard<index_newcard && choice_value==="Higher"){score++}
     else if(index_newcard<index_oldcard && choice_value==="Lower"){score++}
     old_card=new_card}
    else { 
          $("#game-table").empty()
          $("#game-table").append($("<p>Your Score is:"+score+"</p>"))}
   }