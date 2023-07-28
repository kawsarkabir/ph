// 16-8 (advanced) String Concatenation, type conversion parseInt parseFloat

let price1 = 10
let price2 = 90
let totalPrice = price1 + price2
// console.log(totalPrice);

// string concatanation here 
 let fristName = 'kawsar'
 let lastName = 'kabir'
 let fulName = fristName + ' ' + lastName;
//  best practice 
let fulName2 = `${fristName} ${lastName}
`
let fulName3 = `kawsar kabir`
console.log(fulName3);
console.log(fulName2);
 console.log(fulName);



// type conversion
let price10 = '30'
let price11 = '20'
let totalPrice2 = parseInt(price10) + parseInt(price11)
console.log(totalPrice2);

let gpa = '3.41';
let gpaNumber = parseFloat(gpa)
console.log(gpaNumber);


let price = 100;
console.log(typeof price);

console.log(typeof gpa);

let isSingle = true
console.log(typeof isSingle);

let hello;
console.log(typeof hello);



let num1 = 0.1
let num2 = 0.2
let sum = num1 + num2
console.log(parseFloat(sum.toFixed(2)));

// remainder
let remainder = 7
let person = 2
console.log(remainder % person);