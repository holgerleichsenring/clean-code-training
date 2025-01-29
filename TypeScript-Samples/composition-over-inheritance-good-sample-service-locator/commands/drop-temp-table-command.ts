import { CommandHandler } from "../types/command-handler-type";
import { DropTempTableContext } from "./contexts/drop-temp-table-command-context";
import { SqlExecutor } from "../types/sql-executor-type";

export const dropTempTableCommand = (sqlExecutor: SqlExecutor): CommandHandler<DropTempTableContext> => ({
    execute: async (context) => {
        const connection = sqlExecutor.createConnection();
        await sqlExecutor.executeQuery(`DROP TABLE ${context.schema}.${context.tableName}`, connection);
    }
});
