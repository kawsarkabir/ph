// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result each operation in the array finally retunn you the array
const numbers = [2, 29, 2, 90, 3, 2, 45]
/* const doubled = []
for(const num of numbers){
    const double = num * num;
    doubled.push(double)
}
console.log(doubled); */
function doubleIt(num){
    // console.log(num);
    return num * 2
}
const result = numbers.map(doubleIt)
// console.log(result);

const output = numbers.map(n=>n*2);
console.log(output);

const number = [12, 23, 435, 90];
const double2 = number.map(num=>num * 2);
console.log(double2);