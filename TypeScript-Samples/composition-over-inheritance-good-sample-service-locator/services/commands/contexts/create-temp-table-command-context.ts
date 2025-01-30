export const CreateTempTableContextType = "CreateTempTableContext";
export type CreateTempTableContext = {
    type: typeof CreateTempTableContextType;
    tableName: string;
    schema?: string;
};
