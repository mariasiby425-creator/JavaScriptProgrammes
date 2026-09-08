//Task 1 - give letter and check if it is a vowel or not
console.log('Task 1 - give letter and check if it is a vowel or not')
console.log("Using Switch Statement")
 
let l='a'
switch(l)
{
    case 'a':
    console.log("Vowel")
    break

    case 'e':
    console.log("Vowel")
    break

    case 'i':
    console.log("Vowel")
    break

    case 'o':
    console.log("Vowel")
    break

    case 'u':
    console.log("Vowel")
    break

    default:
    console.log("Not a Vowel")    
}

console.log("Using else if statement")

let letter='z'
if(letter=='a')
{
    console.log("Vowel")
}
else if(letter=='e')
{
    console.log("Vowel")
}
else if(letter=='i')
{
    console.log("Vowel")
}
else if(letter=='o')
{
    console.log("Vowel")
}
else if(letter=='u')
{
    console.log("Vowel")
}
else
    {
      console.log("Not a vowel")
    }

// Task 2: Declare a Number array
console.log('Task 2: Declare a Number array')
let NumArray=[1,2,3,4,5]
console.log(NumArray,'Length of Array:',NumArray.length)    

//Task 3: Print even numbers from a given array
let EvenArray=[0,1,2,3,4,5,6,7,8,9]
console.log('Task 3: Print even numbers from a given array',EvenArray)
for(i=0;i<EvenArray.length;i++)
{
    if(i%2==0)
    {
      console.log("Even Number:",[i])   
    }
    /*else
    {
        console.log("ODD Number:",[i])  
    }*/
    
     
}
