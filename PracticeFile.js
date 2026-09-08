//Print even numbers
 
let nos = [1, 2, 3, 4, 5, 6];
let EvenArray = [];
for (let n = 0; n < nos.length; n++) 
    {
      if (nos[n] % 2 == 0) 
        {
        EvenArray.push(nos[n]);
        }
    }
console.log("Even Numbers:", EvenArray);

//Print odd numbers
//filter() = filter elements in an array, arrayname.filter()
let oddnumbers=nos.filter((x)=>{return x%2!==0})
console.log(oddnumbers)

//map() = to update all elements in an array
let mappedarray=nos.map((y)=> {return y*2}) //to double each element
console.log(mappedarray)

//reduce() = reduce elements, update and return as single element
let sum=nos.reduce((a,b)=>{return a+b}, 0)
console.log(sum)

// reduce to find multiplication
let mul=nos.reduce((d,e)=>{return d*e}, 2)
console.log(mul)