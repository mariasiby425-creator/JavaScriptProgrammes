//Typescript: superset of java script, js+additional featires(tyoe saftey)
let empid:string="T117"       //data saving in type script
//empid=001
let mark:number=95
let bool:boolean=true
//let number=[1,2,3,4,5]  //array declaration in js
let number:number[]=[1,2,3,4,5] //array declaration in typescript

//Object creation
let student:{
    name:string,
    age:number,
    dept:string,
    isPresent:boolean

}={
    name:'Maria',
    age:30,
    dept:'CSE',
    isPresent:true
}
//function without parameter
function add(){
    let a:number=1
    let b:number=2
    console.log(a+b)
}
add()
//function with parameter
function sub(x:number,y:number):number{
          //console.log(x-y)
          return x-y
}
//sub(10,5)
console.log(sub(10,5))