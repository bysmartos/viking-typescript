interface iSoldier{
    health:number;
    strength:number;
}

class Soldier implements iSoldier {
    health: number;
    strength: number;
    constructor(health:number, strength:number){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }
    receiveDamage(damage:number){
        this.health -=damage;
    }

}


export default Soldier