function validateName() {

    let name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameErrorId").innerHTML = "Name should be atleast 5 or more";
        return false;
    }
    else if (name.length > 20) {
        document.getElementById("nameErrorId").innerHTML = "Name should be not more than 20 character";
        return false;
    }
    else {
        document.getElementById("nameErrorId").innerHTML = "";
        return true;
    }
}
function validateDob() {
    let dob = document.getElementById("dob").value;
    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();

    if (dob == "") {
        document.getElementById("DateOfBirthErrorId").innerHTML = "Please select Date of Birth";
        return false;
    }
    if (birthDate > today) {
        document.getElementById("DateOfBirthErrorId").innerHTML = "Future date is not allowed";
        return false;
    }
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        document.getElementById("DateOfBirthErrorId").innerHTML = "You must be at least 18 years old";
        return false;
    }
    else {
        document.getElementById("DateOfBirthErrorId").innerHTML = "";
        return true;
    }
}
function validatePhoneNumber() {
    let phone = document.getElementById("phone").value;

    if (phone == "") {
        document.getElementById("PhoneNumberErrorId").innerHTML = "Enter your Phone Number";
        return false;
    }
    else if (!/^[6-9][0-9]{9}$/.test(phone)) {
        document.getElementById("PhoneNumberErrorId").innerHTML =
            "Phone number must start with 6, 7, 8, or 9 and contain 10 digits";
        return false;
    }
    else {
        document.getElementById("PhoneNumberErrorId").innerHTML = "";
        return true;
    }
}
function validateEmail() {
    let email = document.getElementById("email").value;

    let emailPattern =  /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email == "") {
        document.getElementById("EmailErrorId").innerHTML = "Please enter your email";
        return false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById("EmailErrorId").innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("EmailErrorId").innerHTML = "";
        return true;
    }
}
function validateAddress() {
    let address = document.getElementById("address").value;

    if (address == "") {
        document.getElementById("AddressErrorId").innerHTML = "Please enter your address";
        return false;
    }
    else if (address.length < 10) {
        document.getElementById("AddressErrorId").innerHTML = "Address must be at least 10 characters";
        return false;

    }
    else if (address.length > 100) {
        document.getElementById("AddressErrorId").innerHTML = "Address should not exceed 100 characters";
        return false;
    }
    else {
        document.getElementById("AddressErrorId").innerHTML = "";
        return true;
    }
}

function validateGender() {
    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender == null) {
        document.getElementById("AccoutTypeErrorId").innerHTML = "Select gender ";
        return false;
    } else {
        document.getElementById("AccoutTypeErrorId").innerHTML = "";
        return true;
    }
}
function validatePan() {

    let pan = document.getElementById("pan").value;
    let panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (pan == "") {
        document.getElementById("PanErrorId").innerHTML = "Please enter PAN Number";
        return false;
    }
    else if (!panPattern.test(pan)) {
        document.getElementById("PanErrorId").innerHTML = "Invalid PAN Number";
        return false;
    }
    else {
        document.getElementById("PanErrorId").innerHTML = "";
        return true;
    }
}
function validateIdType() {
    let idtype = document.getElementById("idtype").value;
    if (idtype == "") {
        document.getElementById("IdTypeErrorId").innerHTML = "Enter ID Type";
        return false;
    } else {
        document.getElementById("IdTypeErrorId").innerHTML = "";
        return true;

    }
}
function validateIdNumber() {
    let idnumber = document.getElementById("idnumber").value;
    if (idnumber == "") {
        document.getElementById("IdNumberErrorId").innerHTML = "Enter ID Number";
        return false;
    } else {
        document.getElementById("IdNumberErrorId").innerHTML = "";
        return true;
    }
}
function validateAccount() {
    let account = document.querySelector('input[name="account"]:checked');
    if (account == null) {
        document.getElementById("AccoutTypeErrorId").innerHTML = "Select Account Type";
        return false;
    } else {
        document.getElementById("AccoutTypeErrorId").innerHTML = "";
        return true;
    }
}
function validatedeposit() {
    let deposit = document.getElementById("deposit").value;
    if (deposit == "" || deposit <= 0) {
        document.getElementById("InitialDepositErrorId").innerHTML = "Enter Initial Deposit";
        return false;
        } else {
        document.getElementById("InitialDepositErrorId").innerHTML = "";
        return true;
    }
}
function validateSignature() {
    let signature = document.getElementById("signature").value;
    if (signature == "") {
        document.getElementById("SignatureErrorId").innerHTML = "Enter Signature";
        return false;
    } else {
        document.getElementById("SignatureErrorId").innerHTML = "";
        return true;
    }
}
function validateDate() {
    let date = document.getElementById("date").value;
    if (date == "") {
        document.getElementById("DateErrorId").innerHTML = "Select Date";
        return false;
    }
        let selectedDate = new Date(date);
        let today = new Date();
        if (selectedDate > today) {
            document.getElementById("DateErrorId").innerHTML = "Future date is not allowed";
            return false;
        }
    
     else {
        document.getElementById("DateErrorId").innerHTML = "";
        return true;
    }
}
function validate(){
    if(
    validateName() &&
    validateDob() &&
    validatePhoneNumber() &&
    validateEmail()&&
    validateAddress()&&
    validateGender()&&
    validatePan()&&
    validateIdType()&&
    validateIdNumber()&&
    validateAccount()&&
    validatedeposit()&&
    validateSignature()&&
    validateDate()
    ) {
       document.getElementById("submitBtn").disabled = false;
    }else{
         document.getElementById("submitBtn").disabled = true;
    }

}









