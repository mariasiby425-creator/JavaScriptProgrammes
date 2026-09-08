//callback function
function greet(){
    console.log("hello")
}
function demo(){
    console.log("demo function call")
}

function executeGreet(callback)
{
    callback()
}
executeGreet(greet) //callback function call
executeGreet(demo)

