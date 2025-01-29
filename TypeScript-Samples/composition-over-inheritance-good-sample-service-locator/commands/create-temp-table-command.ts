import { CommandHandler } from "../types/command-handler-type";
import { CreateTempTableContext } from "./contexts/create-temp-table-command-context";
import { SqlExecutor } from "../types/sql-executor-type";

export const createTempTableCommand = (sqlExecutor: SqlExecutor): CommandHandler<CreateTempTableContext> => ({
    execute: async (context) => {
        const connection = sqlExecutor.createConnection();
        await sqlExecutor.executeQuery(`CREATE TEMP TABLE ${context.schema}.${context.tableName} (...)`, connection);
    }
});
