document.getElementById('submit-button').addEventListener('click', function(){
            
    const emailInput = document.getElementById('email-input');
    const userEmail = emailInput.value;
    emailInput.value = '';
    
    const passInput = document.getElementById('pass-input');
    const userPassword = passInput.value;
    passInput.value = '';
    
    if(userEmail == 'sontan@gmail.com' && userPassword == 'secrete'){
        window.location.href = 'banking.html';
    }

})

