import Soldier from './soldier';

class Saxon extends Soldier {
    health: number;
    strength: number

    constructor(  health: number, strength: number){
        super(health, strength)
    };
    receiveDamage(damage:number): string {
        this.health -=damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        } else{
            return `A Saxon has died in combat`}
    }

}

export default Saxon;