// Command Interface
interface Command {
    execute(): Promise<void>;
}

// Concrete Commands
class CreateUserCommand implements Command {
    async execute(): Promise<void> {
        console.log("Creating user...");
        // Simulated implementation
        // Example:
        // await oktaClient.createUser({ name: "Alice", email: "alice@example.com" });
    }
}

class AddPermissionsCommand implements Command {
    async execute(): Promise<void> {
        console.log("Adding permissions...");
        // Simulated implementation
        // Example:
        // await oktaClient.addPermissions("user123", ["read", "write"]);
    }
}

class SetPasswordCommand implements Command {
    async execute(): Promise<void> {
        console.log("Setting user password...");
        // Simulated implementation
        // Example:
        // await oktaClient.setPassword("user123", "securePassword123");
    }
}

// Command Executor
class CommandExecutor implements Command {
    private commands: Command[] = [];

    add(command: Command): CommandExecutor {
        this.commands.push(command);
        return this; // Enables chaining
    }

    async execute(): Promise<void> {
        for (const command of this.commands) {
            await command.execute();
        }
    }
}

// Usage Example
(async () => {
    const userCreationExecutor = new CommandExecutor()
        .add(new CreateUserCommand())
        .add(new AddPermissionsCommand())
        .add(new SetPasswordCommand());

    await userCreationExecutor.execute();

    console.log("Okta user creation process completed.");
})();
