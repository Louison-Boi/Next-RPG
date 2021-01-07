
class Game {
  totalTurn = 10
  players = [];
  turnLeft = 10;
  turnArray = [];
  indexPlayerTurn = 0;

    randomTurn = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  startGame = () => {
    this.startTurn();
  }

  startTurn = () => {
   
    let numberTurn = this.totalTurn - this.turnLeft
    console.log (`C'est le tour ${numberTurn}`)
      this.players.forEach((player) => {
        player.newTurn();
        
      })
  
      this.turnArray = this.players.filter((player) => (
        player.isAlive()
      ))
        this.pickPlayerInTurn
      }


      pickPlayerInTurn = () => {
        this.indexPlayerTurn = this.randomTurn(0, this.turnArray.length - 1)
        const currentPlayer = this.turnArray[this.indexPlayerTurn].name;
        console.log (`C'est le tour de ${currentPlayer} de jouer`);
      }

  addPlayer = (player) => {
    this.players.push(player)
  }

  newTurn = () => {
    this.turnLeft-- ;
		if (this.turnLeft <= 0) {
			console.log("Game is over!");
			this.playersList.forEach(player => {
				if (player.isAlive()) {
					player.status = "winner";
				}
			});
		}

		console.log("Current stats are:");
		this.seeStats();
		if (this.turnLeft > 0) {
			this.startTurn();
		}
	}


  seePlayer () {
    console.log("Voici la liste des joueurs :")
    this.players.forEach((player) => {
console.log(`${player.name}, Hp :${player.hp}`)
    })
  }



  nextPlayer = () => {
		this.players.splice(this.indexPlayerTurn, 1);

		if (this.players.length === 0) {
			this.nextTurn();
			return;
		}

		this.pickPlayerInTurn();
	}

  nextTurn = () => {
      this.turnLeft -= 1
        if ( this.turnLeft <= 0 ){
          console.log ("Game is finished");
          this.players.forEach(player => {

        if (player.isAlive()){
          player.status = "Winner";
        }
      })
      this.seeStats();
      this.startTurn();
    }
      else {
      this.startTurn
      }
  }

  seeStats = () => {
		this.players.forEach(player => {
			if (!player.isAlive()) {
				console.log(`${player.name} is dead. RIP!`);
			} else {
				console.log("Toujours en vie:");
			}
			console.log(`${player.name}: ${player.hp} hp, ${player.dmg} dmg, ${player.mana} mana`);
		});
	}

attackOfPlayer = (victim) => {
  const player = this.turnArray[this.indexPlayerTurn];

  if (player.name === victim.name) {
    console.log(`Tu ne peux pas t'attaquer gros beta`);
    return;
  }
  player.attack (victim)

  this.nextPlayer();
}



}


const grace = new Fighter
const ulder = new Paladin
const moana = new Monk
const draven = new Berzerker
const carl = new Assassin


let game = new Game();
game.addPlayer(ulder);
game.addPlayer(grace);
game.addPlayer(moana);
game.addPlayer(draven);
game.addPlayer(carl);
game.startGame ();
