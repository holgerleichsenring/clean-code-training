// components/command-runner.tsx
import React from "react";
import { useService } from "../context/service-context";
import { createCommandExecutor } from "../services/command-executor";

const CommandRunner: React.FC = () => {
    const commandExecutor = useService<ReturnType<typeof createCommandExecutor>>(createCommandExecutor);

    const executionContexts = [
        new CreateTempTableContext("temp_data", "dbo"),
        new ImportDataContext("temp_data", "dbo", "data.csv"),
        new MergeTableContext("temp_data", "main_table", "dbo"),
        new DropTempTableContext("temp_data", "dbo")
    ];

    return <button onClick={() => commandExecutor.executeAll(executionContexts)}>Run Commands</button>;
};

export default CommandRunner;
