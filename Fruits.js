"use strict";
class Fruits {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    display() {
        console.log("Fruit:" + this.name, "Price:", +this.price);
    }
}
let frobj = new Fruits("apple", 30);
frobj.display();
