"use strict";
//Typescript: superset of java script, js+additional featires(tyoe saftey)
let empid = "T117"; //data saving in type script
//empid=001
let mark = 95;
let bool = true;
//let number=[1,2,3,4,5]  //array declaration in js
let number = [1, 2, 3, 4, 5]; //array declaration in typescript
//Object creation
let student = {
    name: 'Maria',
    age: 30,
    dept: 'CSE',
    isPresent: true
};
//function without parameter
function add() {
    let a = 1;
    let b = 2;
    console.log(a + b);
}
add();
//function with parameter
function sub(x, y) {
    //console.log(x-y)
    return x - y;
}
//sub(10,5)
console.log(sub(10, 5));
