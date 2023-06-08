class Governor {
    static jobTitle = "Governor";
    static termLength = "4 years"
    static authority(){
        console.log("I am the Governor!")
    }
    static famousQuote(){
        console.log("Get to the choppa!")
    }
}
console.log(Governor);
Governor.authority();
Governor.famousQuote();

class Person {
    constructor(name,age,eyeColor){
        this.name=name;
        this.age=age;
        this.eyeColor=eyeColor;
    }
    yawn(){
        console.log(`${this.name}` + " yawns.")
    }
    eat(food){
        console.log(`${this.name}` + " is eating " + food)
    }
    sleep(){
        console.log(`${this.name}` + " is sleeping again.")
    }
}

class PostalWorker extends Person {
    constructor(name,age,eyeColor, workZipCode, yearsWorking ){
        super(name,age,eyeColor);
        this.workZipCode = workZipCode;
        this.yearsWorking = yearsWorking;
    }
    beginRoute(){
        console.log("I hope I don't get chased by a dog again today!")
    }
    

}
class Chef extends Person {
    constructor (name,age,eyeColor,kitchenRole, foodSpeciality){
        super(name,age,eyeColor);
        this.kitchenRole = kitchenRole;
        this.foodSpeciality = foodSpeciality;
    }
    theUsual(){
        console.log("Time to make my award-winning " + `${this.foodSpeciality}`)
    }
}
const postalWorker1 = new PostalWorker("Mary", "33", "brown", "91344", "4");
const postalWorker2 = new PostalWorker("Brian", "45", "brown", "91325", "12");
postalWorker1.beginRoute();
postalWorker2.beginRoute();
const chef1 = new Chef ("Pierre", "29", "brown", "Sous-chef", "Roast-beef sandwich")
const chef2 = new Chef ("Bob", "41", "blue", "Head-chef", "Cheseburger")
chef1.theUsual();
chef2.theUsual();