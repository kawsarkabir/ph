// Necessity of destructuring 
const actor ={
    name: 'kawsar', 
    age:30, 
    phone:'01882351026',
    money:'340TK'
}
// const {phone, age, money, name} = actor
console.log(actor); 
console.log(phone);
console.log(agee);
console.log(name);

// const [frist, second] = numbers
const [x, y] = [12, 80];


function doubleThem(a, b){
    return [a*2, b*2]
}
const [agee, poree] = doubleThem(3, 6)
console.log(agee, poree);


const actor7 ={
    name: 'kawsar', 
    age:30, 
    phone:'01882351026',
    money:'340TK'
}
const key = Object.keys(actor7);
const value = Object.values(actor7)
console.log(key);
console.log(value);

const entrie = Object.entries(actor7)
console.log(entrie);

/* delete actor7.age;
console.log(actor7); */

// const {phone, ...aladaArr} = actor7;
console.log(aladaArr);
// freeze
Object.freeze(actor7);
actor7.source = 'china'
console.log(actor7);