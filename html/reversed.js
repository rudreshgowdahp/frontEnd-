function reverseString(str) {
    return str.split(' ').reverse().join('');
}

console.log(reverseString("GeeksforGeeks")); 
let name="rudra";
let reversed = name.split('').reverse().join('');
console.log(reversed);

function greet(name="Guest"){
    alert("Hello "+name);
}
greet("Harsha");
function outerFunction(){
    console.log("I am in outer function");
    function innerFunction(){
        console.log("I am in inner function");
    }
innerFunction();
}
outerFunction();
let fruits=["Apple","Mango","Orange","Banana","pineapple"];

let reversed1=fruits.toReversed();
console.log(reversed1);


let name="Rudra";
let age=23;
let city="Bangalore";


let person={
    
}
