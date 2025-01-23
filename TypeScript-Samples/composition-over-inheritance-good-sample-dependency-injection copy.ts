// Command Interface
interface Command {
    execute(): Promise<void>;
}

// Concrete Commands
class CreateTempTableCommand implements Command {
    async execute(): Promise<void> {
        console.log("Creating temporary table...");
        // Simulated implementation
        // Example:
        // await database.query("CREATE TEMP TABLE temp_table (...);");
    }
}

class ImportDataCommand implements Command {
    async execute(): Promise<void> {
        console.log("Importing data into temporary table...");
        // Simulated implementation
        // Example:
        // await database.query("COPY temp_table FROM 'data.csv';");
    }
}

class MergeTableCommand implements Command {
    async execute(): Promise<void> {
        console.log("Merging temporary table with main table...");
        // Simulated implementation
        // Example:
        // await database.query("INSERT INTO main_table SELECT * FROM temp_table;");
    }
}

class DropTempTableCommand implements Command {
    async execute(): Promise<void> {
        console.log("Dropping temporary table...");
        // Simulated implementation
        // Example:
        // await database.query("DROP TABLE temp_table;");
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
    const importExecutor = new CommandExecutor()
        .add(new CreateTempTableCommand())
        .add(new ImportDataCommand())
        .add(new MergeTableCommand())
        .add(new DropTempTableCommand());

    await importExecutor.execute();

    console.log("Data import process completed.");
})();
