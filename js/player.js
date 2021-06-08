class Player {
    constructor() {

        this.index = null;
        this.distance = 0;
        this.name = null;

    }

    getCount() {
        let playerCountRef = database.ref("playerCount");

        playerCountRef.on("value", function(data) {

            playerCount = data.val();

        })
    }

    updateCount(count) {

        database.ref('/').update({

            playerCount:count

        })
    }

    update() {

        let playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            
            name:this.name,
            distance:this.distance

        })

        
    }

    static getPlayerInfo() {
        let playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val()
        })
    }
}