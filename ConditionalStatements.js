//Conditional Statements

/*if(condition)
{
//code
}*/

let age=30
if(age>=18)
{
console.log('Adult')
}

/*if(condition)
{
//code
}
else
    {
}*/

if(age<=18)
{
console.log('Adult')
}
else
    {
        console.log("Not Adult")
    }

    //else if - check multiple conditions at a time
    /*if(consiton1){
}
else if(comdion2){
}else  if(condition3){
}else{
}*/

let mark=76
if(mark>=90)
{
    console.log('GRADE A')
}
else if(mark>=75)
    {
    console.log('GRADE B')
}
else if(mark>=65)
    {
    console.log('GRADE C')
}
else
{
    console.log('FAILED')
}

//switch Stetement
/*Switch(expression)
{
case value1:
    case value2:
        case value3:
            :
            :
            default:
}*/

let day=5
switch(day)
{
    case 1:
        console.log("SUNDAY")
        break
    case 2:
        console.log("MONDAY")
        break
    case 3:
        console.log("TUESDAY")
        break
    case 4:
        console.log("WEDNESDAY")
        break
    case 5:
        console.log("THURSDAY")
        break
    case 6:
        console.log("FRIDAY")
        break
    case 7:
        console.log("SATURDAY")
        break
    default:
        console.log("INVALID")                        
}
