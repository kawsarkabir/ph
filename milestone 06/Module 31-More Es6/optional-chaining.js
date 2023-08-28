// data access
const data = [{id:1, name: 'abul', adress:'kochu khet',}];
// console.log(data[0].adress);

const products = {
    count:5000, 
    data:{
        id:1, name: 'abul', adress:'kochu khet'
    },
    arr:[
        19, 90, 78, 39, 30
    ],
    price: 90, 
    name:'Headphone'
}
// console.log(products.data.adress);
console.log(products.arr[2]);

// optional  chaing
const user2 = {
    id:50002, 
    name:'poribarger bibir majar', 
    adress:{
        city:'chattogram'
    }
}
console.log(user2.adress.street?.city);