// reduch
const numbers = [12, 90, 12, 24, 80];
const total = numbers.reduce((previous, current)=> previous + current , 0)
console.log(total);

const sum = numbers.reduce((p, c)=> p + c, 0)
console.log(sum);