//Looping Statements
/*for(initialize;condition;updation)
{
code
} */
console.log("Hello World")
for(let i=1;i<=5;i++)
{
console.log(i)
}

/* i=1 1<=5 2
   i=2 2<=5 3
   i=3 3<=5 4
   i=4 4<=5 5
   i=5 5<=5 6
   i=6 6>5  break
*/

//print hello world 10 times
for(i=1;i<=10;i++)
{
    console.log(i,"Hello World")
}

//while loop
/* initialization
while(condition)
{ 
comdition
updation
} */

//print 10 to 20 using while statement
let j=10
while(j<=20)
{
    console.log(j)
    j++
}

let password=""
while(password!=='123')
{
    password='123'
}
console.log("LOGIN SUCESS")

let count=1
while(true)
{
    console.log(count)
    count++
    if(count==10)
    {
        break
    }
}

// 12/8 Tuesday
//do while
/* do
    {
    code
    updation
    }while(condition)*/

    let num=1
    do
    {
        console.log(num)
        num++
    }while(num<=5)

// Ternary Operator -> short of if else operator
let age=10
let result=age>=18?"You are eligible for Vote":"Not Eligible"
console.log(result)        

let mark=25
mark>=25?console.log("PASS"):console.log("FAIL")