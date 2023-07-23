const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');
const email = emailInput.textContent.trim();
messageDiv.textContent = '';

// The follwoing function is used to check if the email is valid or not
function validateEmail(email) {

    //Regular expression is used to compare email address.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //empt variable is used to verify if the user has entered the email or not. 
    let empt = document.forms["form1"]["email"].value;
    console.log(empt);

    // If the user didn't enter the email, it will asked the user to enter the email. Else, it will proceed further down.
    if(empt == ''){
        messageDiv.textContent = 'Ooops! Please add your email!';
        document.form1.email.focus();
        return true;
    }else{
        // If the user entered the email, now the following if-else match the input with regular expression to determine if email is valid or not
        if(email.value.match(emailRegex)) {
            messageDiv.textContent = 'Hurray! Your request has beeen accepted!';
            document.form1.email.focus();
            return true;
        }
        else if(!email.value.match(emailRegex)) {
            messageDiv.textContent = 'Ooops! Please check your email!';
            document.form1.email.focus();
            return true;
        }
    }
}   

emailForm.addEventListener('submit', function(e){
    e.preventDefault();
});

