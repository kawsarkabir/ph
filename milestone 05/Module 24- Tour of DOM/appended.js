const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText = 'Programming Language List'
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'c++'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'javascript'
ul.appendChild(li2)
section.appendChild(ul)
mainContainer.appendChild(section)