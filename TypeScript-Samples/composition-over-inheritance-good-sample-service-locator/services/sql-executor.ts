import { SqlExecutor } from "../types/sql-executor-type";

export const createSqlExecutor = (): SqlExecutor => ({
    getConnectionString: () => "Server=localhost;Database=mydb;",

    createConnection: function () {
        console.log(`Creating SQL Connection with: ${this.getConnectionString()}`);
        return {}; // Mocked SQL connection
    },

    executeQuery: async function (query: string, connection: any) {
        console.log(`Executing SQL: ${query}`);
    }
});