// context/service-context.ts
import React, { createContext, useContext } from "react";
import { createSqlExecutor } from "./services/persistence/sql-executor";
import { createCommandExecutor } from "./services/commands/command-executor";
import { createTempTableCommand } from "./services/commands/create-temp-table-command";
import { importDataCommand } from "./services/commands/import-data-command";
import { mergeTableCommand } from "./services/commands/merge-table-command";
import { dropTempTableCommand } from "./services/commands/drop-temp-table-command";
import { CreateTempTableContext, CreateTempTableContextType } from './services/commands/contexts/create-temp-table-command-context';
import { ImportDataContext, ImportDataContextType } from './services/commands/contexts/import-data-command-context';
import { MergeTableContext, MergeTableContextType } from './services/commands/contexts/merge-table-command-context';
import { DropTempTableContext, DropTempTableContextType } from './services/commands/contexts/drop-temp-table-command-context';

// Service Locator (like .NET DI Container)
type ServiceContextType = Map<string|Function, any>;

const ServiceContext = createContext<ServiceContextType>(new Map());

export const ServiceProvider = ( props:{children:React.ReactNode} ) => {
    const services: ServiceContextType = new Map();

    const sqlExecutor = createSqlExecutor();
    services.set(createSqlExecutor, sqlExecutor);
    services.set(createCommandExecutor, createCommandExecutor());

    // ✅ Automatically register commands based on type
    services.set(CreateTempTableContextType, createTempTableCommand(sqlExecutor));
    services.set(ImportDataContextType, importDataCommand(sqlExecutor));
    services.set(MergeTableContextType, mergeTableCommand(sqlExecutor));
    services.set(DropTempTableContextType, dropTempTableCommand(sqlExecutor));

    return <ServiceContext.Provider value={services}>{props.children}</ServiceContext.Provider>;
};

// 🔥 Like `IServiceProvider.GetService<T>()` in .NET
export const useService = <T,>(serviceType: string|Function): T => {
    const serviceName = serviceType instanceof Function ? serviceType.name : serviceType;
    const context = useContext(ServiceContext);
    
    if (!context.has(serviceName)) {
        throw new Error(`Service '${serviceName}' not found in ServiceContext`);
    }
    
    return context.get(serviceName) as T;
};
