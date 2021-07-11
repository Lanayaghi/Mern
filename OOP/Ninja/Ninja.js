class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.streanth = 3;
        
     
    }
    sayName(){
        
        console.log(` ninja name is ${ this.name } `);
    }

    showStats(){
        console.log(` ninja name is ${ this.name }, her health is ${this.health}, the speed ${this.speed}, the streanth is ${this.streanth}`);
    }
    
    drinkSake(){
        this.health += 10;
        console.log(ninja1.health)
    }

 
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();