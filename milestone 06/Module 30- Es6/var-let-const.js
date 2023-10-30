// var: no reason to use var
// let: allow it to reassign
// const: do not allow it to reassign

const money = 40;
const rich = money + 10;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);


const numbers = [1, 2, 3,4,  5, 5]
// numbers = [2, 2, 9]
numbers[2] = 190;
console.log(numbers);

// onject

let student = {
    name: 'kawsar',
    class: 12,
}
student = {name:'kabir'}

//loop
let sum = 0
for(let i = 0; i<=10; i++){
    sum += i
    console.log(i);
    console.log(sum);
}