// Scope of a Variable
function Login()
{
var username="maria" //this is a function scope, accessible only in this function
console.log(username)
}
Login()
//console.log(username) // Error: not defined

if(true) //var is a function scope, not a block scope
{
    var firstname='elora'
    console.log(firstname)
}
console.log(firstname)

//Block Scope
if(true)
{
    let lastname="ajith" // Block Scope, can be accessed only insde a block
    console.log(lastname)
}
//console.log(lastname)

if(true)
{
    const middlename='theres' // const - block scope
    console.log(middlename)
}
//console.log(middlename)


//Example of 3 scope varaiables
const gvariable='i am a global variable'
function ScopeExample()
{
    var fvariable='i am a function variable'
    console.log(gvariable)                       //yes
    console.log(fvariable)                       //Yes

    if(true)
    {
        let bvariable='i am a block variable'
        console.log(gvariable)                 //yes
        //console.log(fvariable)               //No
        console.log(bvariable)                 //yes
    }
    //console.log(bvariable)                    //No
}
//console.log(fvariable)                        //No
ScopeExample()