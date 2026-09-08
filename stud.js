class Stud{
    constructor(name,age){
        //console.log("Calling Constructor")
        //console.log(name)
        this.name=name
        this.age=age
    }
    introduce()   //method
    {
       console.log('my name is:'+this.name)
       console.log("age:"+this.age)
    }
    display()
    {
        console.log("welcome")
    }
}
//new Stud().introduce()
//new Stud().display()
const studobj=new Stud("theres",1)
const std1= new Stud("Ajith",33)
studobj.introduce()
studobj.display()
std1.introduce()