// components/command-runner.tsx
import React from "react";
import { useService } from "../../service-context";
import { createCommandExecutor } from "./command-executor";
import { CreateTempTableContext, CreateTempTableContextType } from "./contexts/create-temp-table-command-context";
import { ImportDataContext, ImportDataContextType } from "./contexts/import-data-command-context";
import { MergeTableContext, MergeTableContextType } from "./contexts/merge-table-command-context";
import { DropTempTableContext, DropTempTableContextType } from "./contexts/drop-temp-table-command-context";

const CommandRunner: React.FC = () => {
    const commandExecutor = useService<ReturnType<typeof createCommandExecutor>>(createCommandExecutor);

    const executionContexts = [
        { type: CreateTempTableContextType, schema: "dbo", tableName: "temp_data" } as CreateTempTableContext,
        { type: ImportDataContextType, schema: "dbo", tableName: "temp_data", filePath: "data.csv" } as ImportDataContext,
        { type: MergeTableContextType, schema: "dbo", targetTable: "main_table", sourceTable: "temp_data" } as MergeTableContext,
        { type: DropTempTableContextType, schema: "dbo", tableName: "temp_data" } as DropTempTableContext
    ];

    return <button onClick={() => commandExecutor.executeAll(executionContexts)}>Run Commands</button>;
};

export default CommandRunner;
