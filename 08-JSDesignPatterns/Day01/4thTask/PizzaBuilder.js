import {Pizza} from './Pizza.js'
export class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    //step1
    setSize(size) {
        this.pizza.size = size;
    }

    //step2
    setCheese(cheese) {
        this.pizza.cheese = cheese;
    }

    //setp3
    setSauce(sauce) {
        this.pizza.sauce = sauce;
    }

    //step4
    addTopping(topping) {
        this.pizza.toppings.push(topping);
    }

    //step5
    build() {
        return this.pizza;
    }
}
