const user = {id:1, name:'kawsar', job:'developer'}

// JavaScript Object Notation (JSON)
const stringify = JSON.stringify(user)
console.log(stringify);

const userObj = JSON.parse(stringify);
console.log(userObj);