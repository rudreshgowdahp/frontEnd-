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
console.log(user.skills[0]);
console.log(user.skills[1]);
console.log(user.skills);
console.log(user.city)
console.log(user.age)

let users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "User" }];
console.log(users[0]);
console.log(users[1].role);
console.log(users[2].role);


