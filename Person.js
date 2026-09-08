class Person{
    constructor(name,age,dob){
    this.name=name
    this.age=age
    this.dob=dob
}
   displayDetails()
   {
    console.log("Name:"+this.name)
    console.log("Age:"+this.age)
    console.log("D.O.B:"+this.dob)
   }
}
const Pobj=new Person("Noah",4,new Date("2022-4-24"))
Pobj.displayDetails()
const Pobj1=new Person("Luca",0,new Date("5-13-2026"))
Pobj1.displayDetails()