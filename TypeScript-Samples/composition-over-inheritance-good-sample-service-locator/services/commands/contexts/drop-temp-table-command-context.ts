export const DropTempTableContextType = "DropTempTableContext";
export type DropTempTableContext = {
    type: typeof DropTempTableContextType;
    tableName: string;
    schema?: string;
};
