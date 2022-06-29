import Saxon from "./saxon";
import Viking from "./viking";

class War {
    vikingArmy: Array<Viking>;
    saxonArmy: Array<Saxon>;

    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[]
    }

addViking(viking: Viking){
    this.vikingArmy.push(viking);
}
addSaxon(saxon: Saxon){
    this.saxonArmy.push(saxon);
}
selectViking() {
    return this.getRandomPosition(this.vikingArmy);
}
selectSaxon() {
    return this.getRandomPosition(this.saxonArmy);
}
vikingAttack(){

    const saxonPos = this.selectSaxon()
    const vikingPos = this.selectViking()

    const message = this.saxonArmy[saxonPos].receiveDamage(this.vikingArmy[vikingPos].strength)
console.log(this.vikingArmy[vikingPos].strength,this.saxonArmy[saxonPos].health);


    if (this.saxonArmy[saxonPos].health<=0) {
        this.saxonArmy.splice(saxonPos)
    }

    return message;

}
saxonAttack(){
    const saxonPos = this.selectSaxon()
    const vikingPos = this.selectViking()

    const message = this.vikingArmy[vikingPos].receiveDamage(this.saxonArmy[saxonPos].strength)


    if (this.vikingArmy[vikingPos].health<=0) {
        this.vikingArmy.splice(vikingPos)
    }

    return message;

}

showStatus(){
    if (this.saxonArmy.length === 0) {
        return 'Vikings have won the war of the century!'
    }
    if (this.vikingArmy.length === 0) {
        return 'Saxons have fought for their lives and survive another day...'
    }
    return 'Vikings and Saxons are still in the thick of battle.'
}
getRandomPosition(array: Array<any>) {
    return Math.floor(Math.
        random() *array.length)
}}

export default War;