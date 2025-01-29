"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// components/command-runner.tsx
const react_1 = __importDefault(require("react"));
const service_context_1 = require("../context/service-context");
const command_executor_1 = require("../services/command-executor");
const create_temp_table_command_context_1 = require("../commands/contexts/create-temp-table-command-context");
const import_data_command_context_1 = require("../commands/contexts/import-data-command-context");
const merge_table_command_context_1 = require("../commands/contexts/merge-table-command-context");
const drop_temp_table_command_context_1 = require("../commands/contexts/drop-temp-table-command-context");
const CommandRunner = () => {
    const commandExecutor = (0, service_context_1.useService)(command_executor_1.createCommandExecutor);
    const executionContexts = [
        { type: create_temp_table_command_context_1.CreateTempTableContextType, schema: "dbo", tableName: "temp_data" },
        { type: import_data_command_context_1.ImportDataContextType, schema: "dbo", tableName: "temp_data", filePath: "data.csv" },
        { type: merge_table_command_context_1.MergeTableContextType, schema: "dbo", targetTable: "main_table", sourceTable: "temp_data" },
        { type: drop_temp_table_command_context_1.DropTempTableContextType, schema: "dbo", tableName: "temp_data" }
    ];
    return <button onClick={() => commandExecutor.executeAll(executionContexts)}>Run Commands</button>;
};
exports.default = CommandRunner;
