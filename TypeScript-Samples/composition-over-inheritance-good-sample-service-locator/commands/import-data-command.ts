import { CommandHandler } from "../types/command-handler";
import { ImportDataContext } from "./contexts/import-data";
import { SqlExecutor } from "../types/sql-executor";

export const importDataCommand = (sqlExecutor: SqlExecutor): CommandHandler<ImportDataContext> => ({
    execute: async (context) => {
        const connection = sqlExecutor.createConnection();
        await sqlExecutor.executeQuery(`COPY ${context.schema}.${context.tableName} FROM '${context.filePath}'`, connection);
    }
});
