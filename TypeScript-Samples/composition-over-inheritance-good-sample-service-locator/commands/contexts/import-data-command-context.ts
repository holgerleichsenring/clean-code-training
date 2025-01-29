export const ImportDataContextType = "ImportDataContext";
export type ImportDataContext = {
    type: typeof ImportDataContextType;
    tableName: string;
    schema?: string;
    filePath: string;
};
