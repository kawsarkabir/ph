document.getElementById('delete-btn').addEventListener('click', function(){
    const secrectInfo = document.getElementById('secrect-info');
    secrectInfo.style.display = 'none'
})

document.getElementById('input-field').addEventListener('keyup', function(e){
    const inputText =e.target.value;
    const deleteButton = document.getElementById('delete-btn');
    if(inputText === 'delete'){
        deleteButton.removeAttribute('disabled');
    }else{
        deleteButton.setAttribute('disabled', true)
    }

})