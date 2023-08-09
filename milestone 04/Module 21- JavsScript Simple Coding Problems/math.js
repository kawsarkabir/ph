const result = Math.pow(3, 8)
// console.log(result);

const num1 = 25
const num2 = 45
const gap =Math.abs(num1 - num2)
// console.log(gap);
if(gap < 5){
    // console.log('you guys can be friend');
}else{
    // console.log('you guys stay apart');
}

//======================
//
//====================
const number = 2.6598
const fullNumber = Math.round(number)
// console.log(fullNumber);
const result2 = Math.ceil(2.00001)
// console.log(result2);

const result3 = Math.floor(45.245)
// console.log(result3);
// -----------------------------------------------------

// random
// console.log(Math.random())
// const random = Math.round(Math.random()* 100)
for(let i = 0; i< 5; i++){
    let random = Math.round(Math.random()* 6)
    console.log(random);
}
