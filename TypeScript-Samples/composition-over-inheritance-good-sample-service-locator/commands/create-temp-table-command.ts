import { CommandHandler } from "../types/command-handler";
import { CreateTempTableContext } from "./contexts/create-temp-table";
import { SqlExecutor } from "../types/sql-executor";

export const createTempTableCommand = (sqlExecutor: SqlExecutor): CommandHandler<CreateTempTableContext> => ({
    execute: async (context) => {
        const connection = sqlExecutor.createConnection();
        await sqlExecutor.executeQuery(`CREATE TEMP TABLE ${context.schema}.${context.tableName} (...)`, connection);
    }
});
