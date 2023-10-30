function add(number1, number2){
    // console.log(number1, number2);
    let sum = number1 + number2
    // console.log(sum);
    return sum;
}
// add(10, 90)
let sum = add(90, 10)
// console.log(sum);

function bringSingara(money){
    let singaraPrice = 10
    let quantity = money / singaraPrice
    return quantity;
}
let myTk = 200
let singaras = bringSingara(myTk)
console.log('Eating singaras:',singaras);