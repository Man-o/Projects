const form = document.getElementById("form");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
let success=true

form.addEventListener('submit', (e) => {
    if (!validation()){
        e.preventDefault(); // Prevent the form from submitting
    };
});

function validation() {
    const nameVal = Name.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (nameVal === '') {
        success=false
        identifyError(Name, "Name is required");
    } else {
        errorIdentified(Name);
    }

    if (emailVal === '') {
        success=false
        identifyError(email, "Email is required");
    } else if (!emailValidation(emailVal)) {
        success=false
        identifyError(email, "Please enter a valid email");
    } else {
        errorIdentified(email);
    }

    if (passwordVal === '') {
        success=false
        identifyError(password, "Password is required");
    }
    else if(passwordVal.length<8){
        success=false
        identifyError(password,"Password must be atleast 8 characters")
    }
    else {
        errorIdentified(password);
    }

    if (cpasswordVal === '') {
        success=false
        identifyError(cpassword, "Confirm password is required");
    } else if (cpasswordVal !== passwordVal) {
        success=false
        identifyError(cpassword, "Confirm password does not match the password");
    } else {
        errorIdentified(cpassword);
    }
}

function identifyError(element, errorMessage) {
    const parentElement = element.parentElement;
    const errorElement = parentElement.querySelector('.error');
    errorElement.innerText = errorMessage;
    parentElement.classList.add('error');
    parentElement.classList.remove('success');
}

function errorIdentified(element) {
    const parentElement = element.parentElement;
    const errorElement = parentElement.querySelector('.error');
    errorElement.innerText = '';
    parentElement.classList.add('success');
    parentElement.classList.remove('error');
}

const emailValidation = (email) => {
    return String(email)
    .toLowerCase()
    .match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
};
