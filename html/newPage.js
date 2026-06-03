
function fun( name){
    console.log("Name is"+name);
}
fun("rudra");
function fun( name,age){
    console.log("Name is"+name);
    console.log("Age is"+age);
}
fun("rudra",23);
function fun( name,age,id){
     console.log("Name is"+name);
    console.log("Age is"+age);
    console.log("Id is "+id);
}
fun("rudra",23,1);
let fruits=["Apple","Mango","Orange","Banana","pineapple"];
console.log(fruits[0]);
console.log(fruits.length);
for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}
fruits.push("Guava");
console.log(fruits);
let fruit1=fruits.pop();
console.log(" I am here"+fruit1)
console.log(fruits);
fruits.unshift("guava");
console.log(fruits);
fruits.shift();
console.log(fruits);




