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