//Inheritence: from one class properties and behaviours can be inherited to another class
//parent class
//Is a relationship
//code can be resued 

export class VehicleInheritence{
    demo="parent variable"
    constructor(price,brand){
        this.price=price
        this.brand=brand
    }
    start()
    {
        console.log("Vehicle Started")
    }
}