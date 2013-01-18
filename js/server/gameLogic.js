module.exports = {
payOutWinners : function(){
    var dealerHandValue=this.handValue(board.playerCards[0][0]);
    for(var playerIndex=1;playerIndex<7;playerIndex++){
        if(board.tablePositions[playerIndex]===1)
        {
            for(var handIndex=0;handIndex<board.playerCards[playerIndex].length;handIndex++){
                var currentHand=board.playerCards[playerIndex][handIndex];
                if(this.handValue(currentHand)>dealerHandValue){
                    board.playerChips[playerIndex]+=2*board.playerBets[playerIndex]; 
                    console.log('Player ' + playerIndex + '\'s ' + this.handValue(currentHand) + ' beats dealer\'s ' + dealerHandValue + '.');
                }
                else if(this.handValue(currentHand)===dealerHandValue){
                    board.playerChips[playerIndex]+=board.playerBets[playerIndex];
                    console.log('Player ' + playerIndex + '\'s ' + this.handValue(currentHand) + ' pushes dealer\'s ' + dealerHandValue + '.');
                }
                else {
                    console.log('Player ' + playerIndex + '\'s ' + this.handValue(currentHand) + ' loses to dealer\'s ' + dealerHandValue + '.');
                }
            }
        }
    }
},
checkDealerBlackjack : function(){
    var dealerHand=board.playerCards[0][0];
    return (this.handValue(dealerHand)===21);
},
handValue : function(cardArray){
        var cardTotal=0;
        var aceCount=0;
        if(cardArray.length>0) {
            for(var cardIndex=0;cardIndex<cardArray.length;cardIndex++){
                cardTotal=cardTotal+this.cardValue(cardArray[cardIndex]);
                if(this.cardValue(cardArray[cardIndex])===11){aceCount++;}
            }
            while(aceCount>0&&cardTotal>21){
                cardTotal-=10;
                aceCount--;
               }
        return cardTotal;
        }
        else return 0;
    },
cardValue : function(cardString){
        console.log('CARDSTRING VALUE BEFORE SLICE: ' + typeof cardString);
        card=String(cardString).slice(0, -1); //remove suit
        console.log('CARDSTRING VALUE AFTER SLICE: ' + card);
        if(card==="A"){return 11;}
        else if(isNaN(card)){return 10;}
        else {return parseInt(card);}
    }
};
