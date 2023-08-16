// step 1:
document.getElementById('post-btn').addEventListener('click', function(){
    // step 2:
    const inputField = document.getElementById('new-comment')
    const inputValue = inputField.value;

    // step 3:
    const containerDiv = document.getElementById('container-div');
    const p = document.createElement('p')
    // step 4:
    p.innerText = inputValue;
    inputField.value = ''
    // step 5:
    containerDiv.appendChild(p)
})
