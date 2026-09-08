//Abstraction: Hiding implementation of functions 
class AbstractionCoffeeMachine{
    #boilwater(){
        console.log('Water Boiling')
    }
    #addCoffeePowder(){
        console.log("Coffee Powder Added")
    }
    #addMilk(){
        console.log("Milk added")
    }
    #addTeaPowder(){
        console.log("Tea Powder added")
    }
    MakeCoffee()
    {
        this.#boilwater()
        this.#addCoffeePowder()
        this.#addMilk()
    }
    MakeTea()
    {
        this.#boilwater()
        this.#addTeaPowder()
        this.#addMilk()
    }
}
const coffeeObj=new AbstractionCoffeeMachine()
coffeeObj.MakeCoffee()
coffeeObj.MakeTea()