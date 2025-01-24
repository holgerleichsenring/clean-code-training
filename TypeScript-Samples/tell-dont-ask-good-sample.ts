// Enum for Process States
enum ProcessState {
    Open,
    InProgress,
    Completed,
}

// Interface for state-specific behavior
interface ProcessStateHandler {
    handle(): void;
}

// Concrete Implementations for each state
class OpenStateHandler implements ProcessStateHandler {
    handle(): void {
        console.log("Handling Open state...");
    }
}

class InProgressStateHandler implements ProcessStateHandler {
    handle(): void {
        console.log("Handling In Progress state...");
    }
}

class CompletedStateHandler implements ProcessStateHandler {
    handle(): void {
        console.log("Handling Completed state...");
    }
}

class ProcessHandlerFactory {
    createHandler(state: ProcessState): ProcessStateHandler {
        switch (state) {
            case ProcessState.Open:
                return new OpenStateHandler();
            case ProcessState.InProgress:
                return new InProgressStateHandler();
            case ProcessState.Completed:
                return new CompletedStateHandler();
            default:
                throw new Error("Invalid Process State.");
        }
    }
}

class ProcessHandlerExecutor {
    processState(handler: ProcessStateHandler): void {
        handler.handle(); 
    }
}

// Usage Example
const factory = new ProcessHandlerFactory();
const executor = new ProcessHandlerExecutor();

console.log("Processing Open state:");
var handler = factory.createHandler(ProcessState.Open);
executor.processState(handler); // Output: "Handling Open state..."

console.log("\nProcessing In Progress state:");
var handler = factory.createHandler(ProcessState.InProgress);
executor.processState(handler); // Output: "Handling In Progress state..."

console.log("\nProcessing Completed state:");
var handler = factory.createHandler(ProcessState.Completed);
executor.processState(handler); // Output: "Handling Completed state..."
