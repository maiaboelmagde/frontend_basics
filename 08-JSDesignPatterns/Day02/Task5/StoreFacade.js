import { InventoryManager } from "./InventoryManager.js";
import { PaymentManager } from "./PaymentManager.js";
import { ShippingManager } from "./ShippingManager.js";

export class StoreFacade {
    constructor() {
        this.inventoryManager = new InventoryManager();
        this.paymentManager = new PaymentManager();
        this.shippingManager = new ShippingManager();
    }

    placeOrder(productId, amount) {
        console.log('\n--- Starting Order Process ---');
        if (this.inventoryManager.checkStock(productId)) {
            this.inventoryManager.reserveStock(productId);
            if (this.paymentManager.Pay(amount)) {
                this.shippingManager.shipOrder(productId);
                console.log('Order placed successfully!');
            } else {
                console.log('Payment failed. Order not processed.');
            }
        } else {
            console.log('Product out of stock.');
        }
        console.log('--- End Order Process ---\n');
    }
}

