class  Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.streanth = 3;
        
     
    }
  

    showStats(){
        console.log(` ninja name is ${ this.name }, his health is ${this.health}, the speed ${this.speed}, the streanth is ${this.streanth}`);
    }

    drinkSake(){
        return "What one programmer can do in one month, two programmers can do in two months.";
    }

}

class  Sensei extends Ninja {
    constructor(name){
        super(name, 200);
        this.speed = 10;
        this.streanth = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const wiseMessage = super.drinkSake();
        console.log(wiseMessage);
    }
  
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: