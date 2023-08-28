class Product{
    constructor(name){
        this.name = name;
    }
}
console.log(new Product('hp'));

//
class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching math')
    }
}

const tapan = new Teacher('tapan sir', 'math')
console.log(tapan);

const jhankar = new Teacher('jhankar', 'programming')
console.log(jhankar);
