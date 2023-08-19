const submitButton = document.getElementById("submitBtn");
const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById('passwordErr')
const confirmPassError = document.getElementById('confirmPasswordErr')
let getPassword





submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword()) {
        // nameErr.previousElementSibling.classList.remove("fa-xmark");
        // nameErr.previousElementSibling.classList.add("fa-check");
        // if(validateEmail()){
        //     emailErr.previousElementSibling.classList.remove("fa-xmark");
        //     emailErr.previousElementSibling.classList.add("fa-check");
        alert("form submitted successfully");
        document.getElementById("name").value = ''
        document.getElementById("email").value = ''

        // }

    }



})



function validateName() {
    let name = document.getElementById("name").value;



    if (name.length == 0) {
        nameErr.innerHTML = "Name is required"
        nameErr.previousElementSibling.classList.add("fa-xmark");
        return false
    }



    if (!name.match(/^[a-z,',-]+(\s)[a-z,',-]+$/i)) {
        nameErr.innerHTML = "Write complete name"
        nameErr.previousElementSibling.classList.add("fa-xmark")
        return false
    }

    nameErr.innerHTML = "";
    nameErr.previousElementSibling.classList.remove("fa-xmark")
    nameErr.previousElementSibling.classList.add("fa-check");
    return true;

    //return true;
}



function validateEmail() {
    let email = document.getElementById("email").value;



    if (email.length == 0) {
        emailErr.innerHTML = "Email is required"
        emailErr.previousElementSibling.classList.add("fa-xmark");
        return false
    }



    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailErr.innerHTML = "Write complete Email"
        emailErr.previousElementSibling.classList.add("fa-xmark")
        return false
    }
    else {
        emailErr.innerHTML = "";
        emailErr.previousElementSibling.classList.remove("fa-xmark")
        emailErr.previousElementSibling.classList.add("fa-check")
        return true;
    }
    //return true;
}



function validatePassword() {
    let password = document.getElementById("password").value;




    if (password.length == 0) {
        password.innerHTML = "Password is required"
        passwordErr.previousElementSibling.classList.add("fa-xmark");
        return false
    }



    if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/)) {
        passwordErr.innerHTML = "password in the length of 8-30"
        passwordErr.previousElementSibling.classList.add("fa-xmark")
        return false
    }
    else {
        passwordErr.innerHTML = "";
        passwordErr.previousElementSibling.classList.remove("fa-xmark")
        passwordErr.previousElementSibling.classList.add("fa-check")
        getPassword = password
        return true;
    }


}



function validateConfirmPassword() {
    let confirmPassword = document.getElementById("confirmpassword").value




    if (confirmPassword.length == 0) {
        confirmPassError.innerHTML = "Confirm Password is required"
        confirmPassError.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    if (getPassword !== confirmPassword) {
        confirmPassError.innerHTML = "Confirm Password does not match with password"
        confirmPassError.previousElementSibling.classList.add("fa-xmark");
        return false
    }
    confirmPassError.innerHTML = ''
    confirmPassError.previousElementSibling.classList.remove("fa-xmark")
    confirmPassError.previousElementSibling.classList.add("fa-check")
    return true

}