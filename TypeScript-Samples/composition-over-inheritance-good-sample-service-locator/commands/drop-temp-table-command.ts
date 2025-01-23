import { CommandHandler } from "../types/command-handler";
import { DropTempTableContext } from "./contexts/drop-temp-table";
import { SqlExecutor } from "../types/sql-executor";

export const dropTempTableCommand = (sqlExecutor: SqlExecutor): CommandHandler<DropTempTableContext> => ({
    execute: async (context) => {
        const connection = sqlExecutor.createConnection();
        await sqlExecutor.executeQuery(`DROP TABLE ${context.schema}.${context.tableName}`, connection);
    }
});
