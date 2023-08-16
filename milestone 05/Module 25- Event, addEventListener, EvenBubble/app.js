function handleOnClick(){
//    const handlerStatus = document.getElementById('handler-status')
  
}
document.getElementById('change-text').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = ' heliiiii'
})

document.getElementById('update-btn').addEventListener('click', function(){
    const inputValue = document.getElementById('input-value');
    const inputValueText = inputValue.value;
    const changeElement = document.getElementById('handler-status');
    changeElement.innerText = inputValueText;
})
