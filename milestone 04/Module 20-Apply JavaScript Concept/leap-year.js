// check leap year
function isLeapYear(year){
    if(typeof year !== 'number'){
        console.log('please provided me a valid number');
    }else{
        return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    }
}
console.log(isLeapYear(2024));