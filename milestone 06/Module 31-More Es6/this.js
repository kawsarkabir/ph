class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`dellping now ${this.name}`);
    }
    activity(){
        this.sleep()
    }
}

const kodom = new Person('kodom ali', 21);
console.log(kodom);
kodom.sleep()

// bejall
const lazy = kodom.sleep;
lazy()

const badam = new Person('kacha badam', 23);
badam.sleep()