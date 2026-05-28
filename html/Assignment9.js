{
    let a=1;
    var b=2;
}
{
    let a=10;
    console.log(a);
    console.log(b);
} 
// 1. a works because let is block scoped.the second block has its own a=10.
//2.b works because var is not block scoped.so b can be used outside the first block.
// 3.scope means where a variable can be accessed in the program