document.getElementById('login-btn').addEventListener('click', function(){
    //get email id and acces value
    const userEmail = document.getElementById('user-email');
    const userEmailValue = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const userPasswordValue = userPassword.value;

    if(userEmailValue === 'sontan@bap.com' && userPasswordValue === 'secrect'){
        window.location.href = './bank.html'
    }else{
        alert('please valid a number & password')
    }
    
})