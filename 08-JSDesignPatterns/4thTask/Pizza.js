export class Pizza {
    constructor() {
        this.size = null;
        this.cheese = null;
        this.sauce = null;
        this.toppings = [];
    }

    describe() {
        return `Pizza: Size - ${this.size}, Cheese - ${this.cheese}, Sauce - ${this.sauce}, Toppings - ${this.toppings.join(', ')}`;
    }
}
