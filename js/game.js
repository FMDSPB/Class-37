class Game {
    constructor() {}
    
    getState() {

        let gameStateRef = database.ref('gamestate');

        gameStateRef.on("value", function(data) {
            gameState = data.val();
        });
    }

    update(state) {

        database.ref('/').update({
            gamestate:state
        })
    }

    async start() {

        if(gameState === 0) {

            player = new Player();
            
            let playerCountRef = await database.ref('playerCount').once("value")

            if(playerCountRef.exists()) {

                playerCount = playerCountRef.val();
                player.getCount();

            }

            form = new Form();
            form.display();
            
        }
    }

    play() {

        form.hide();

        textSize(30);
        text("Game Start", 120, 100);

        Player.getPlayerInfo();

        if(allPlayers !== undefined) {

            let displayPosition = 130;
            for(var plr in allPlayers) {

                if(plr === "player" + player.index) 
                fill('red');
                else
                fill("black");

                displayPosition += 20;

                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, displayPosition);

            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null) {

            player.distance += 50;
            player.update();

        }

    }

}