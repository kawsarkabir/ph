// step 1:add click event handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('input-field');
    const inputValue = emailField.value;
    emailField.value = ''
    

    const passwordField = document.getElementById('passworld-field');
    const passwordValue = passwordField.value;
    passwordField.value = ''
    

    if(inputValue === 'admin@gmail.com' && passwordValue === 'admin'){
        window.location.href = "./bank.html";
    }else{
        alert('invalid user');
    }
    
})
