import { CommandHandler } from "../../types/command-handler-type";
import { MergeTableContext } from "./contexts/merge-table-command-context";
import { SqlExecutor } from "../../types/sql-executor-type";

export const mergeTableCommand = (sqlExecutor: SqlExecutor): CommandHandler<MergeTableContext> => ({
    execute: async (context) => {
        const connection = sqlExecutor.createConnection();
        await sqlExecutor.executeQuery(`INSERT INTO ${context.schema}.${context.targetTable} SELECT * FROM ${context.sourceTable}`, connection);
    }
});
