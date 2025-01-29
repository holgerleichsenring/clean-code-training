import { CommandHandler } from "../types/command-handler-type";
import { ImportDataContext } from "./contexts/import-data-command-context";
import { SqlExecutor } from "../types/sql-executor-type";

export const importDataCommand = (sqlExecutor: SqlExecutor): CommandHandler<ImportDataContext> => ({
    execute: async (context) => {
        const connection = sqlExecutor.createConnection();
        await sqlExecutor.executeQuery(`COPY ${context.schema}.${context.tableName} FROM '${context.filePath}'`, connection);
    }
});
