/* const jim = 84
const dela = 75
if(jim > dela){
    console.log('jim will get the cake');
}else{
    console.log('dela you will get the cake');
} */
/* 
function getCake(jim, dela, chinku){
    
    if(jim > dela && jim > chinku){
        console.log('jim will get the cake');
    }else if( dela > jim && dela > chinku){
        console.log('dela  will get the cake');
    }else{
        console.log('chinku will get the cake');
    }
}
console.log(getCake(84, 99, 77)); */

function getCake(jim, dela, chinku) {
  if (jim > dela && jim > chinku) {
    return ("jim will get the cake");
  } else if (dela > jim && dela > chinku) {
    return ("dela  will get the cake");
  } else {
    return ("chinku will get the cake");
  }
}
console.log(getCake(84, 99, 77));
