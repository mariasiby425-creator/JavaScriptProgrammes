//17/8: Functions
//functions are block of codes that can be reused to perform specific task
console.log("Maria")
function greet()
{
    console.log("Good Morning")
}
greet()

//function with parameter
function add(a,b)
{
    //let a=2
    //let b=3
    console.log(a+b)
}
add(2,3) // argument passed
add(1,9)

//returntype
function sub(c,d)
{
    return c-d
}
console.log(sub(10,20))
const result=sub(30,8)
console.log(result)

//Arrow Function ()=>{}
const mul=(m,n)=>{return m*n}
console.log(mul(10,20))

//without return and braces
const addition=(m,n)=>m+n
console.log(addition(1,2))