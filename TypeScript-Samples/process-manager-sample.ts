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

// Manager to process states, including the factory logic
class ProcessManager {
    private createHandler(state: ProcessState): ProcessStateHandler {
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

    processState(state: ProcessState): void {
        const handler = this.createHandler(state); // Create handler inside the manager
        handler.handle(); // Tell handler to process the state
    }
}

// Usage Example
const manager = new ProcessManager();

console.log("Processing Open state:");
manager.processState(ProcessState.Open); // Output: "Handling Open state..."

console.log("\nProcessing In Progress state:");
manager.processState(ProcessState.InProgress); // Output: "Handling In Progress state..."

console.log("\nProcessing Completed state:");
manager.processState(ProcessState.Completed); // Output: "Handling Completed state..."
