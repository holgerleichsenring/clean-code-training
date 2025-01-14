// Mock Database Connection Class for Relational Transactions
class DatabaseConnection {
    async beginTransaction(): Promise<void> {
        console.log("Transaction started.");
    }

    async commit(): Promise<void> {
        console.log("Transaction committed.");
    }

    async rollback(): Promise<void> {
        console.log("Transaction rolled back.");
    }
}

// Transaction Decorator
function Transaction() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const connection: DatabaseConnection = this.dbConnection; // Dynamically fetch the connection
            if (!connection) {
                throw new Error("No database connection available for transaction.");
            }

            await connection.beginTransaction();
            try {
                const result = await originalMethod.apply(this, args);
                await connection.commit();
                return result;
            } catch (error) {
                console.error("Error occurred, rolling back transaction:", error);
                await connection.rollback();
                throw error;
            }
        };

        return descriptor;
    };
}
// Example Service Class
class OrderService {
    private dbConnection: DatabaseConnection;

    constructor(dbConnection: DatabaseConnection) {
        this.dbConnection = dbConnection;
    }

    @Transaction() // No connection instance passed here
    async processOrder(orderId: number): Promise<void> {
        console.log(`Processing order ${orderId}...`);
        // Simulated operations
        console.log("Step 1: Update inventory.");
        console.log("Step 2: Deduct balance.");
        console.log("Step 3: Confirm order.");
        // Simulate an error
        if (orderId === -1) throw new Error("Invalid order ID.");
    }
}

// Usage Example
(async () => {
    const dbConnection = new DatabaseConnection();
    const orderService = new OrderService(dbConnection);

    console.log("Case 1: Successful Transaction");
    try {
        await orderService.processOrder(123);
    } catch (error) {
        console.error("Transaction failed:", error);
    }

    console.log("\nCase 2: Failed Transaction");
    try {
        await orderService.processOrder(-1); // Simulate an error
    } catch (error) {
        console.error("Transaction failed:", error);
    }
})();
