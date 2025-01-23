import { CommandHandler } from "../types/command-handler";
import { MergeTableContext } from "./contexts/merge-table";
import { SqlExecutor } from "../types/sql-executor";

export const mergeTableCommand = (sqlExecutor: SqlExecutor): CommandHandler<MergeTableContext> => ({
    execute: async (context) => {
        const connection = sqlExecutor.createConnection();
        await sqlExecutor.executeQuery(`INSERT INTO ${context.schema}.${context.targetTable} SELECT * FROM ${context.sourceTable}`, connection);
    }
});
