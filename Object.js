//Object - key value pair
let student={
    name:'maria',
    age:31,
    course:'PlayWright'
}
console.log(student.course) //dot notation
console.log(student["age"]) //bracket notation
console.log(student)        // O/P: { name: 'maria', age: 31, course: 'PlayWright' }

//for in loop for objects
for(let s in student)
{
    console.log(s,''+student[s])
}

//add new object
student.gender='female'
console.log(student)              //  { name: 'maria', age: 31, course: 'PlayWright', gender: 'female' }

//update
student.age='35'
console.log(student)             //{ name: 'maria', age: '35', course: 'PlayWright', gender: 'female' }

//delete
delete student.course
console.log(student)       //     { name: 'maria', age: '35', gender: 'female' }

//Array Of Objects
let employees=[
    {
     empid:1,
    empname:'maria'
    },
     {
     empid:2,
    empname:'ajith'
    },
    {
     empid:3,
    empname:'elora'
    }  
]
console.log(employees[2])
console.log(employees[2].empname)

//loop array using forin 
for (let e of employees)
{
    //console.log(e)
    console.log(e.empname)
}

//object in array nested object
let laptop={
    brand:'DELL',
    colour:'black',
    price:25000,
    specifications:{         //nested object
        storage:64,
        RAM:2400
    }
}
console.log(laptop.specifications.storage)

let tv={
    Tname:'Philips',
    isOfferproduct:true,
    colours:['Black','White','Grey'],  //boolean value
    details:function(){                //function not possible inside object
        console.log(this.Tname)
        console.log(this.isOfferproduct)
    }
}
console.log("Function Call")
tv.details()
console.log(tv)
console.log(tv.colours)
console.log(tv.colours[1])
