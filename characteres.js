
class Character {
  constructor(hp, dmg, name, status = 'playing', ) {
    this.hp = hp;
    this.dmg = dmg;
    this.name = name;
    this.status = status;
    
  }

  attack = (victim) => {
   return this.causeDammage(this.dmg, victim)
  }

  causeDammage = (damage, victim) => {
		if (!victim) {
			console.error(`Please give a victim to attack!`);
			return false;
    }
    
    if (this.status !== 'playing') {
			console.log(`I can't attack, because I'm not playing.`);
			return false;
    }
    
    if (victim.status !== 'playing') {
			console.log(`Impossible to attack, because ${victim.name} is not playing.`);
			return false;
		}

		console.log(`${this.name} attacks ${victim.name}!!`);
		const effectiveDamage = victim.takeDammage(damage);

    console.log(`${this.name} a attaqué ${victim.name} et ce joueur perd ${effectiveDamage} hp, il lui reste ${victim.hp} hp .`);

		if (!victim.isAlive()) {
			this.mana += 20;
		}

		return true;
  }


  dammage (victim) {
  console.log(victim.attack(this.dmg));
  }

  isWinner () {
    this.state ='winner'

  }
  checkState () {
    if (this.hp <= 0) {
      this.status = "Loser"
    }
  }

  isAlive () {
    return this.hp > 0
  }


  takeDammage = (dmg) => {
    if (this.status !== 'playing') {
			console.log(`Hey why did I get attacked? I'm not playing!`);
			return 0;
		}

		const effectiveDamage = dmg

		this.hp -= effectiveDamage;

		if (this.hp <= 0) {
			this.hp = 0;
			this.status = 'loser';
			console.log(`${this.name} est Mort !!!`);
		}

		return effectiveDamage;
   
  }




  newTurn = () => {}

  }

class Fighter extends Character {
  constructor(hp = 12, dmg = 4, name = 'Grace', status = 'playing'){
    super (hp, dmg, name, status);
  }
}

class Paladin extends Character {
  constructor(hp = 16, dmg = 3, name = `Ulder`, status = 'playing'){
    super (hp, dmg, name, status);
  }
}

class Monk extends Character {
  constructor(hp = 8, dmg = 2, name = `Moana`, status = 'playing'){
    super (hp, dmg, name, status);
  }
}

class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, name = `Draven`, status = 'playing'){
    super (hp, dmg, name, status);
  }
}

class Assassin extends Character {
  constructor(hp = 6, dmg = 6, name = `Carl`, status = 'playing'){
    super (hp, dmg, name, status);
  }
}



