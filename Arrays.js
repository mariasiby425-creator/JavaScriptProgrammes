//Array is used to store multiple value in a single variable
let colours=['Red','Green','Blue','White']
console.log(colours)
console.log(colours[3]) //get white colour, index 3

//push method - push() = add element to the last of array
colours.push('yellow')
console.log(colours)

//pop() = remove last element from array
colours.pop()
console.log(colours)

//unshift() = add element to the begining of array
colours.unshift('Red')
console.log(colours)

//shift() = remove element from the begining of array
colours.shift()
console.log(colours)

//length method = return array length
console.log(colours.length)

console.log("Looping array using for loop")
for(i=0;i<colours.length;i++)
{
    console.log(colours[i])
}

console.log("Looping array using for of loop")
for(let c of colours)
{
    console.log(c)
}

// Task 2: Declare a Number array
console.log('Task 2: Declare a Number array')
let numbers=[1,2,3,4,5]
console.log(numbers,'Length of Array:',numbers.length)    

//includes() = to check if there is element, retirns True or False
console.log(numbers.includes(4))
console.log(numbers.includes(8))

//indexOf() = find position of the given element
console.log(numbers.indexOf(5))

//slice() = to get any portion of an array
const SliceArray = numbers.slice(2,5)
console.log(SliceArray)
console.log(numbers.slice(1,2))

//splice() = to add or remove element inbetween an array
//splice(index,deletecount)
console.log(colours)
console.log('SPLICE:',colours.splice(1,1))
console.log(colours)
console.log('SPLICE:',colours.splice(2,2))
console.log(colours)
console.log('SPLICE:',colours.splice(0,2))
console.log(colours)

//splice - remove and update. delete and replace with new element
//splice(index,inter of items to be deleted, item to be updated)
let clr=['B','G','W','R','Y']
console.log(clr)   //[ 'B', 'G', 'W', 'R', 'Y' ]
console.log(clr.splice(1,2,'Green','Purple')) //[ 'G', 'W' ] - deleted 2 elements, update green and purple
console.log(clr)   //[ 'B', 'Green', 'Purple', 'R', 'Y' ]
console.log(clr.splice(1,2,'GREY')) // [ 'Green', 'Purple' ] - deleted 2 elemets but adding only 1 grey 
console.log(clr)  //[ 'B', 'GREY', 'R', 'Y' ]
console.log(clr.splice(1,0,'BRICKRED')) // [] - index 1 , no item deleted, adding BRICKRED colcour
console.log(clr) //[ 'B', 'BRICKRED', 'GREY', 'R', 'Y' ]


//Sum of an array
let num=[2,4,6,8,10]
console.log(num)     // [ 2, 4, 6, 8, 10 ]
let sum = 0
for(i=0;i<num.length;i++)
{
    sum=sum+num[i]
}
console.log('sum:',sum)      //30