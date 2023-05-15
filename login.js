document.getElementById('submit-button').addEventListener('click', function(){
    // get email
   const emailField = document.getElementById('email-field');
   const email = emailField.value;
    // get password
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // verify user
    if(email === 'rahulbiswas46@yahoo.com' && password === 'secret'){
        console.log('valid user');
    } else {
        console.log('invalid user');
    }
   
})