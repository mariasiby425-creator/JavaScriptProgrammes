//Encapsulation: Data Hiding/ wraping up of data
class EncapsulationBank{
    #balance;       //to declare as private put #
    username
    constructor(currentBalance,username){
               this.#balance=currentBalance
               this.username=username
    }
    deposit(depositamount){
           this.#balance+=depositamount
           console.log("Deposit Amount:",depositamount)
           console.log("Balance after deposit:", +this.#balance)
    }
    withdraw(withdrawAmount){
        this.#balance-=withdrawAmount
        console.log("WithDraw Amount:", withdrawAmount)
        console.log("Balance AFter WithDraw:", this.#balance)
    }
    showBalance(balanceAmount){
        return this.#balance
    }
}
const bobj=new EncapsulationBank(1000,"meera")
bobj.deposit(2000)
console.log(bobj.username)
console.log(bobj.balance)
bobj.withdraw(500)
bobj.deposit(700)
console.log("FInalBalance:",bobj.showBalance())