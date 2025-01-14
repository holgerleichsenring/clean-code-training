enum ProcessState {
    Open,
    InProgress,
    Completed,
}

class Process {
    constructor(public state: ProcessState) {}
}

class ProcessManager {
    handleProcess(process: Process): void {
        switch (process.state) {
            case ProcessState.Open:
                console.log("Handling open state...");
                break;

            case ProcessState.InProgress:
                console.log("Handling in-progress state...");
                break;

            case ProcessState.Completed:
                console.log("Handling completed state...");
                break;
        }
    }
}
