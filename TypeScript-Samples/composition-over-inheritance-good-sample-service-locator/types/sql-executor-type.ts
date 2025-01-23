export type SqlExecutor = {
    getConnectionString: () => string;
    createConnection: () => any;
    executeQuery: (query: string, connection: any) => Promise<void>;
};