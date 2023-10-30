//  consitional if, if else, else-if

let iphonePrice = 79000
let myBudget = 90950
if(iphonePrice<myBudget){
    console.log('i wii buy the iphone');
}

let chickenPrice = 500
let myMoney = 50
/* if(chickenPrice <= myMoney){
    console.log('Murgi raan khamu and haddi chibamu !!!');
}
if(chickenPrice > myMoney){
    console.log('lentil soup khanbo');
} */
if(chickenPrice < myMoney){
    console.log('i will eat cheicken');
}else{
    console.log('i will eat potato');
}



// multiaple condition && ||
 
let isGraduated = true
if(isGraduated === true){   
}

let price1 = 500
let price2 = 89
if(price1 <= price2){
    console.log('i will eat murgi');
}else{
    console.log('i will khabo na jah ami gorib dat');
}


// multiple condition 
let isPass = true;
let car = 1
let salary = 70000
// if(isPass === true && car >= 1 && salary >= 40000 ){
//     console.log('sornare biye dibe');
// }else{
//     console.log('dur hala tui gorib tor loge maiya biye dibe na');
// }


if(isPass === true || car ==1 || salary > 25000){
    console.log('saiyedare biye dibe');
}else{
    console.log('tor kopale oi nai sor hala');
}


let money = 30
let danishPrice = 45;
let butterBread = 35
let toastBiscuit = 20
if(danishPrice < money){
    console.log('dashin khabo');
}else if(butterBread < money){
    console.log('butterBon khamu');
}else if( toastBiscuit < money){
    console.log('toast khabo');
}else{
    console.log('khali cha e den mama');
}


let math = true
let geometry = true
if(math == true){
    if(geometry == true){

    }else{
        console.log('pithagaros hote parbe na');
    }
}