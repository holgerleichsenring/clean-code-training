// Enum for Payment Types
enum PaymentType {
    CreditCard,
    PayPal,
    BankTransfer
}

// Strategy Interface
interface PaymentStrategy {
    pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

class BankTransferPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using Bank Transfer.`);
    }
}

// Context Class
class PaymentProcessor {
    private strategy: PaymentStrategy;

    constructor() {
        // Default strategy (optional)
        this.strategy = new CreditCardPayment();
    }

    // Select strategy based on payment type
    selectStrategy(paymentType: PaymentType): void {
        switch (paymentType) {
            case PaymentType.CreditCard:
                this.strategy = new CreditCardPayment();
                break;
            case PaymentType.PayPal:
                this.strategy = new PayPalPayment();
                break;
            case PaymentType.BankTransfer:
                this.strategy = new BankTransferPayment();
                break;
            default:
                throw new Error("Invalid payment type");
        }
    }

    // Process payment using the selected strategy
    processPayment(amount: number): void {
        this.strategy.pay(amount);
    }
}

// Usage Example
const paymentProcessor = new PaymentProcessor();

// Select and process with Credit Card
paymentProcessor.selectStrategy(PaymentType.CreditCard);
paymentProcessor.processPayment(100);

// Select and process with PayPal
paymentProcessor.selectStrategy(PaymentType.PayPal);
paymentProcessor.processPayment(150);

// Select and process with Bank Transfer
paymentProcessor.selectStrategy(PaymentType.BankTransfer);
paymentProcessor.processPayment(200);
