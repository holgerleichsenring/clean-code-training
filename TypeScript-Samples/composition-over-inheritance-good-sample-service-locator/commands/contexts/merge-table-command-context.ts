export const MergeTableContextType = "MergeTableContext";
export type MergeTableContext = {
    type: typeof MergeTableContextType;
    sourceTable: string;
    targetTable: string;
    schema?: string;
};
