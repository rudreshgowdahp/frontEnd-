// let address=document.getElementById("address").value;
// let idtype=document.getElementById("idtype").value;
// let idnumber=document.getElementById("idnumber").value;
// let account = document.querySelector('input[name="account"]:checked');
// let deposit=document.getElementById("deposit").value;
// let signature=document.getElementById("signature").value;
// let date=document.getElementById("date").value;
function validateName() {

    let name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameErrorId").innerHTML = "Name should be atleast 5 or more";
    }
    else if (name.length > 20) {
        document.getElementById("nameErrorId").innerHTML = "Name should be not more than 30 character";
    }
    else {
        document.getElementById("nameErrorId").innerHTML = "";
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
    }
    if (birthDate > today) {
        document.getElementById("DateOfBirthErrorId").innerHTML = "Future date is not allowed";
    }
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        document.getElementById("DateOfBirthErrorId").innerHTML = "You must be at least 18 years old";
    }
    else {
        document.getElementById("DateOfBirthErrorId").innerHTML = "";
    }



}
function validatePhoneNumber() {
    let phone = document.getElementById("phone").value;

    if (phone == "") {
        document.getElementById("PhoneNumberErrorId").innerHTML = "Enter your Phone Number";
    }
    else if (!/^[6-9][0-9]{9}$/.test(phone)) {
        document.getElementById("PhoneNumberErrorId").innerHTML =
            "Phone number must start with 6, 7, 8, or 9 and contain 10 digits";
    }
    else {
        document.getElementById("PhoneNumberErrorId").innerHTML = "";
    }
}
function validateEmail() {
    let email = document.getElementById("email").value;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email == "") {
        document.getElementById("PhoneNumberErrorId").innerHTML = "Please enter your email";
    }
    if (!emailPattern.test(email)) {
        document.getElementById("PhoneNumberErrorId").innerHTML = "Please enter a valid email address";

    }
}
function validateAddress() {
    let address = document.getElementById("address").value;

    if (address == "") {
        document.getElementById("AddressErrorId").innerHTML = "Please enter your address";
    }
    else if (address.length < 10) {
        document.getElementById("AddressErrorId").innerHTML = "Address must be at least 10 characters";
    }
    else if (address.length > 100) {
        document.getElementById("AddressErrorId").innerHTML = "Address should not exceed 100 characters";
    }
    else {
        document.getElementById("AddressErrorId").innerHTML = "";
    }
}

// if (idtype == "") {
//     document.getElementById("IdTypeErrorId").innerHTML = "Enter ID Type";

// }

// if (idnumber == "") {
//     document.getElementById("IdNumberErrorId").innerHTML = "Enter ID Number";
// }

// if (account == null) {
//     document.getElementById("AccoutTypeErrorId").innerHTML = "Select Account Type";

// }

// if (deposit == "" || deposit <= 0) {
//     document.getElementById("InitialDepositErrorId").innerHTML = "Enter Initial Deposit";

// }

// if (signature == "") {
//     document.getElementById("SignatureErrorId").innerHTML = "Enter Signature";

// }

// if (date == "") {
//     document.getElementById("DateErrorId").innerHTML = "Select Date";

// }
