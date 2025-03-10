import { PizzaBuilder } from "./PizzaBuilder.js";

export class Builder{
    constructor(){
        const pizzaBuilder = new PizzaBuilder();
        pizzaBuilder.setSize('Large');
        pizzaBuilder.setCheese('Mozzarella')
        pizzaBuilder.setSauce('Tomato')
        pizzaBuilder.addTopping('Pepperoni')
        pizzaBuilder.addTopping('Mushrooms')
        pizzaBuilder.addTopping('Olives')
        
        this.pizza = pizzaBuilder.build();
    }

    describe(){
        return this.pizza.describe();
    }
}