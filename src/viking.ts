import Soldier from "./soldier";

class Viking extends Soldier{
    name: string;

    constructor(name,health:number,strength:number){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage: number): string {
        this.health -=damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else{
            return `${this.name} has died in act of combat`}
        }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

export default Viking;