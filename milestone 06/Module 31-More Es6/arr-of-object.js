const products = [
    {id:1, name:'lenovo', price:230},
    {id:2, name:'hp', price:2830},
    {id:3, name:'mac', price:200},
    {id:4, name:'del', price:230},
    {id:5, name:'asus', price:230},
]
const names = products.map(product => product.name)
console.log(names);