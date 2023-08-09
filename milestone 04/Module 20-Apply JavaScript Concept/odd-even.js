// check odd and even number 
function checkOddEvenNumber(number){
    if(typeof number !== 'number'){
        console.log('please provided a valid number');
    }else{
        if(number % 2 === 0){
            return true
        }else{
            return false
        }
    }
}
console.log(checkOddEvenNumber(91));
