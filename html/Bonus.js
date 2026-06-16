let number = 100;
{
   let number = 200;

   {
      let number = 300;
      console.log(number);
   }

   console.log(number);
}

console.log(number);
//first is 300
// second is 200
// third is 100

let user = {
  name: "Alex",
  age:23,
  city:"Bangalore",
  skills: ["JavaScript", "Python", "HTML"] // Array inside the object
};
console.log(user.skills[2]);
console.log(user.skills);

let users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "User" }
];
console.log(users[0]);
console.log(users[1].role);


<script>
    function validate() {
        
   

let name=document.getElementById("name").value;
var dob=document.getElementById("dob").value;
var phone=document.getElementById("phone").value;
var email=document.getElementById("email").value;
var address=document.getElementById("address").value;
var idtype=document.getElementById("idtype").value;
var idnumber=document.getElementById("idnumber").value;
var deposit=document.getElementById("deposit").value;
var signature=document.getElementById("signature").value;
var date=document.getElementById("date").value;

if(name==""){
alert("Enter Full Name");
return;
}

if(dob==""){
alert("Select Date of Birth");
return;
}

if(phone.length!=10){
alert("Phone Number must be 10 digits");
return;
}

if(email==""){
alert("Enter Email");
return;
}

if(address==""){
alert("Enter Address");
return;
}

if(idtype==""){
alert("Enter ID Type");
return;
}

if(idnumber==""){
alert("Enter ID Number");
return;
}

if(account==null){
alert("Select Account Type");
return;
}

if(deposit=="" || deposit<=0){
alert("Enter Initial Deposit");
return;
}

if(signature==""){
alert("Enter Signature");
return;
}

if(date==""){
alert("Select Date");
return;
}

alert("Form Submitted Successfully");
}

</script>