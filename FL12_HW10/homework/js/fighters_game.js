class Fighter{
    constructor(obj){
        this._name = obj.name;
        this._damage = obj.damage;
        this._hp = obj.hp;
        this._maxHp = obj.hp;
        this._strength = obj.strength;
        this._agility = obj.agility;

        this._win = 0;
        this._loss = 0;
    }
    
    getName(){
        return this._name;
    }
    getDamage(){
        return this._damage;
    }
    getStrength(){
        return this._strength;
    }
    getAgility(){
        return this._agility;
    }
    getHealth(){
        return this._hp;
    }

    attack(opponent){
        let dice = Math.floor(Math.random()*100);
        if (dice > opponent.getStrength() + opponent.getAgility()){
            opponent.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${opponent.getName()}`);
        }else{
            console.log(`${this.getName()} attack missed`);
        }
    }

    logCombatHistory(){
        console.log(`Name: ${this.getName()}, Wins: ${this._win}, Losses: ${this._loss}`);
    }

    heal(hits){
        let newHp = hits + this.getHealth();
        if (newHp > this._maxHp){
            this._hp = this._maxHp;
        }else{
            this._hp = newHp;
        }
    }
    
    dealDamage(hits){
        let newHp = this.getHealth() - hits;
        if (newHp > 0){
            this._hp = newHp;
        }else{
            this._hp = 0;
        }
    }

    addWin(){
        this._win++;
    }

    addLoss(){
        this._loss++;
    }
}

function battle(fighter1, fighter2){
    if (fighter1.getHealth() === 0){
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    }else if(fighter2.getHealth() === 0){
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    }else{
        let turn = 0;
        while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0){
            if (turn%2 === 0){
                fighter1.attack(fighter2);
            }else{
                fighter2.attack(fighter1);
            }
            turn++;
        }
        
        if (fighter1.getHealth() === 0){
            console.log(`${fighter2.getName()} has won!`);
            fighter2.addWin();
            fighter1.addLoss();
        }else{
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss();
        }
    }
}


const myFighter = new Fighter({name: `Maximus`, damage: 25, hp: 100, strength: 30, agility: 25});
const myFighter2 = new Fighter({name: `Commodus`, damage: 15, hp: 100, strength: 25, agility: 25});