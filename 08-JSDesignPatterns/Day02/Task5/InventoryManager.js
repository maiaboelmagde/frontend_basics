export class InventoryManager {
    checkStock(productId) {
        console.log(`Checking stock for product ID: ${productId}`);
        return true;
    }

    reserveStock(productId) {
        console.log(`Reserving stock for product ID: ${productId}`);
    }
}
