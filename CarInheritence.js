//Child class, need to import parent class

import { VehicleInheritence } from "./VehicleInheritence.js";
class CarInheritence extends VehicleInheritence{
    constructor(pr,br){
       //calls parent constructor
       super(pr,br)
    
    }
    engineStart()
    {
        console.log("Engine Started")
    }
    displayDetails()
    {
        console.log("Price:", this.price)
        console.log("Brand:", this.brand)
        console.log("Demo:",this.demo)
    }
}
const carobj=new CarInheritence(5,"DELL")  
carobj.engineStart()
carobj.start();
carobj.displayDetails()

const vobj=new VehicleInheritence()
vobj.start()

