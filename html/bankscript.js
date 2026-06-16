function validate(){
let name=document.getElementById("name").value;
let dob=document.getElementById("dob").value;
let phone=document.getElementById("phone").value;
let email=document.getElementById("email").value;
let address=document.getElementById("address").value;
let idtype=document.getElementById("idtype").value;
let idnumber=document.getElementById("idnumber").value;
let account = document.querySelector('input[name="account"]:checked');
let deposit=document.getElementById("deposit").value;
let signature=document.getElementById("signature").value;
let date=document.getElementById("date").value;

if(name.length<3){
document.getElementById("nameErrorId").innerHTML= "Enter Full Name";
}

if(dob==""){
document.getElementById("DateOfBirthErrorId").innerHTML= "Select Date of Birth";
}

if(phone.length!=10){
document.getElementById("PhoneNumberErrorId").innerHTML= "Phone Number must be 10 digits";
}

if(email==""){
document.getElementById("EmailErrorId").innerHTML= "Enter email";

}

if(address==""){
document.getElementById("AddressErrorId").innerHTML= "Enter Address";

}

if(idtype==""){
document.getElementById("IdTypeErrorId").innerHTML= "Enter ID Type";

}

if(idnumber==""){
document.getElementById("IdNumberErrorId").innerHTML= "Enter ID Number";
}

if(account==null){
document.getElementById("AccoutTypeErrorId").innerHTML= "Select Account Type";

}

if(deposit=="" || deposit<=0){
document.getElementById("InitialDepositErrorId").innerHTML= "Enter Initial Deposit";

}

if(signature==""){
document.getElementById("SignatureErrorId").innerHTML= "Enter Signature";

}

if(date==""){
document.getElementById("DateErrorId").innerHTML= "Select Date";

}

}