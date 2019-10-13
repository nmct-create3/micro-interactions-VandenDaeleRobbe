let email = {}, password = {}, signInButton;

//#region *********** Show ***********
const addErrors = function(error){
    error.classList.add('has-error');
}

const removeErrors = function(error) {
    error.classList.remove('has-error');
}
//#endregion

//#region *********** Helpers ***********
const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const isValidPassword = function(value) {
    if (value.length > 0) return true;
    else return false;
};

const doubleCheckEmailAddress = function() {
    if (isValidEmailAddress(this.value)) {
        removeErrors(email.field);
        email.input.removeEventListener("click", doubleCheckEmailAddress);
        email.errorMessage.innerHTML = "";
    }
};

const doubleCheckPassword = function() {
    if (isValidPassword(this.value)) {
        removeErrors(password.field);
        password.input.removeEventListener("click", doubleCheckPassword);
        password.errorMessage.innerHTML = "";
    }
};
//#endregion

//#region *********** Events ***********
const blurEmail = function() {
    if (!isValidEmailAddress(this.value)){
        email.input.addEventListener('input', doubleCheckEmailAddress);
        if (isEmpty(this.value)){
            email.errorMessage.innerHTML = "This field is required";
        }
        else {
            email.errorMessage.innerHTML = "Invalid Email";
        }
        addErrors(email.field);
    } else{
        removeErrors(email.field);
        email.errorMessage.innerHTML = "";
    }
};

const blurPassword = function() {
    if (!isValidPassword(this.value)){
        password.input.addEventListener('input', doubleCheckPassword);
        if (isEmpty(this.value)){
            password.errorMessage.innerHTML = "This field is required";
        }
        else {
            password.errorMessage.innerHTML = "Invalid Password";
        }
        addErrors(password.field);
    } else{
        removeErrors(password.field);
        password.errorMessage.innerHTML = "";
    }
};

const buttonClicked = function(e) {
    e.preventDefault();
    if (isValidEmailAddress(email.input.value) && isValidPassword(password.input.value)){
        console.log(email.input.value);
        console.log(password.input.value);
        
    }
};
//#endregion

//#region ***********  INIT / DOMContentLoaded ***********
const getDomElements = function(){
    //Email
    email.errorMessage = document.querySelector(".js-errorMassage__email");
    email.input = document.querySelector(".js-input__email");
    email.field = document.querySelector(".js-field__email");
    //Password
    password.errorMessage = document.querySelector(".js-errorMassage__password");
    password.input = document.querySelector(".js-input__password");
    password.field = document.querySelector(".js-field__password");
    //Button
    signInButton = document.querySelector(".js-sign-in-button");
};

const enableListeners = function() {
    email.input.addEventListener('blur', blurEmail);
    password.input.addEventListener('blur', blurPassword);
    signInButton.addEventListener('click', buttonClicked);
};

const init = function() {
    console.log('DOM loaded');

    getDomElements();
    enableListeners();
};

document.addEventListener('DOMContentLoaded', init);
//#endregion