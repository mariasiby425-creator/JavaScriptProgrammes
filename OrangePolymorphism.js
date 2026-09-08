import { FruitPolymorphism } from "./FruitPolymorphism.js";

//child class
class OrangePolymorphism extends FruitPolymorphism{
    display(){
        console.log("Orange Polymorphism: Child class")
    }

}
const orobj=new OrangePolymorphism()  //child object, child class
orobj.display()

const frobj=new FruitPolymorphism()  //parent Object, parent class
frobj.display()