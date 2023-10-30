function add(a, b){
    return resutl = a + b
}
console.log(add(90, 10));

// function expretion 
const add2 = function add(a, b){
    return a + b
}

// arrow funcion 
const add3 = (a, b) => a + b
console.log(add3(10, 10));
const add10 = (x, y, z, s, k) => x + y + z + s + k;

// more arrow fucition 
const difference = (x, y) => x - y
const multiply = (frist, second, third)=> frist * second * third;
const getAge = (person) => person.age;
const student = {name: 'kawsar', age:89}

const getPI =() => Math.PI
console.log(parseFloat(getPI().toFixed(2)));

// large arrow function 
const doMath = (x1, y2, z3) =>{
    const sum = x1 + y1 + z3
    return sum;
}
console.log(doMath());