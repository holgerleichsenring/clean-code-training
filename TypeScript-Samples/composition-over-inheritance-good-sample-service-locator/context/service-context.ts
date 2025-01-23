// context/service-context.ts
import React, { createContext, useContext } from "react";
import { createSqlExecutor } from "../services/sql-executor";
import { createCommandExecutor } from "../services/command-executor";
import { createTempTableCommand } from "../commands/create-temp-table";
import { importDataCommand } from "../commands/import-data";
import { mergeTableCommand } from "../commands/merge-table";
import { dropTempTableCommand } from "../commands/drop-temp-table";

// Service Locator (like .NET DI Container)
type ServiceContextType = Map<Function, any>;

const ServiceContext = createContext<ServiceContextType>(new Map());

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const services: ServiceContextType = new Map();

    const sqlExecutor = createSqlExecutor();
    services.set(createSqlExecutor, sqlExecutor);
    services.set(createCommandExecutor, createCommandExecutor());

    // ✅ Automatically register commands based on type
    services.set(CreateTempTableContext, createTempTableCommand(sqlExecutor));
    services.set(ImportDataContext, importDataCommand(sqlExecutor));
    services.set(MergeTableContext, mergeTableCommand(sqlExecutor));
    services.set(DropTempTableContext, dropTempTableCommand(sqlExecutor));

    return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
};

// 🔥 Like `IServiceProvider.GetService<T>()` in .NET
export const useService = <T>(serviceType: Function): T => {
    const context = useContext(ServiceContext);
    
    if (!context.has(serviceType)) {
        throw new Error(`Service '${serviceType.name}' not found in ServiceContext`);
    }
    
    return context.get(serviceType) as T;
};
