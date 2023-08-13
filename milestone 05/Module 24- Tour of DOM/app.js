const h1= document.getElementsByTagName('h1')
// console.log(h1);
// const placesTitle = document.getElementById('places-title')
// console.log(placesTitle);

// const placesItems = document.getElementsByClassName('places-items');
// for(const item of placesItems){
//     // console.log(item.innerText);
// }


// getElementByQuerySelector, querySlecttorAll

// const elements = document.querySelector('.places-items')
// for( const item1 of elements){
    // console.log(item1);
// }
// const fruitItems =document.getElementById('h1');
// console.log(fruitItems.getAttribute);

const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue'
    section.style.margin = '20px'
}