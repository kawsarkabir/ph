let shoppingCart = {
    books: 4, 
    sunglass: 1, 
    keyboard:2, 
    mouse: 2, 
    pen:25, 
    shoes:1
}
const keys = Object.keys(shoppingCart)
console.log(keys);
const values = Object.values(shoppingCart)
console.log(values);

for(let i = 0; i < keys.length; i++){
    let propertyName = (keys[i]);
    let propertyValue = shoppingCart[propertyName]
    // console.log(propertyName, propertyValue);
}

// for in loop 
for(let propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName, value);
}