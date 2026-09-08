class Fruits
{
    name:string
    price:number
    constructor(name:string, price:number){
        this.name=name
        this.price=price

    }
    display(){
        console.log("Fruit:"+this.name, "Price:", +this.price)
    }
}
let frobj=new Fruits("Apple",30)
frobj.display()