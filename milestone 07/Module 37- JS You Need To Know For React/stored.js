const appProduct =()=>{
    const storedId = document.getElementById('storage-id')
    const storedIdValue = storedId.value;
    
    const storedValueID = document.getElementById('stored-value')
    const storedValue =storedValueID.value;
    displayProduct(storedIdValue, storedValue)
}
const displayProduct = (storedIdValue, storedValue)=>{
    const container = document.getElementById('container')
    const p = document.createElement('p')
    p.innerText = `${storedIdValue} ${storedValue}`
    container.appendChild(p)

    if(storedIdValue && storedValue){
        localStorage.setItem(storedIdValue,storedValue)
    }
   
}

/* const name = 'Hero';
const age = 34;
const person = {name, age}; console.log(person); */

// What is the value of ratName?

const adventurer = { 
    name: 'Alice',
    cat: {name: 'Lucy'} 
};
const ratName = adventurer?.rat?.name;
console.log(ratName);

let person ='k';
console.log(person ? person : "person is null");
const obj = {a:1};
console.log(Object.keys(obj).length===0);