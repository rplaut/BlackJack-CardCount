/* 
 * This script is responsible for displaying appropriate card using data-card value
 * by modifying the background-position of the spritesheet.
 */

$(document).ready(function()
            {
 
                var cardView = {
                    getPosition: function(stringInput){
                        var cardInput=stringInput.slice(0,-1);                  //everything but last char
                        var suitInput=stringInput.slice(-1);                    //just last char
                        var xPosition=-90*this.Card.indexOf(cardInput);
                        var yPosition=-125.2*this.Suit.indexOf(suitInput);
                        var spritePosition = {"x":[xPosition], "y": [yPosition]};
                        return spritePosition;
                    }
                }
                cardView.Card=new Array("A","2","3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
                cardView.Suit=new Array("C", "H", "S", "D");
                
                $(".card-container").each(function(){
                    var cardString=String($(this).data('card'));
                    var cardPosition=cardView.getPosition(cardString);
                    $(this).css("background-position",cardPosition["x"] + "px " + cardPosition["y"]+ "px");
                });
            
            });