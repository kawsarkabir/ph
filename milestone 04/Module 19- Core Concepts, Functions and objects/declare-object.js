let phone ={
    price:16500,
    brand:'realme',
    storage:'64GB',
    feature:{
        camera:'good',
        look:'good locking'
    },
    ram:'4GB'
}
/* console.log(phone);
console.log(phone.price);
console.log(phone.brand);
console.log(phone.storage);
console.log(phone.feature);
console.log(phone.feature.camera);
console.log(phone.feature.look);
console.log(phone.ram); */

let propertyName = 'mouse'
let propertyValue = phone[propertyName]
console.log(propertyName, propertyValue);
phone.mouse = 15
console.log(phone);

let properties =Object.keys(phone)
// console.log(properties);

let propertiesValue = Object.values(phone)
// console.log(propertiesValue);


let penCount = phone['brand']
// console.log(penCount);