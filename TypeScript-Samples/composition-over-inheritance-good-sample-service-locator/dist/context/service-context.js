"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useService = exports.ServiceProvider = void 0;
// context/service-context.ts
const react_1 = require("react");
const sql_executor_1 = require("../services/sql-executor");
const command_executor_1 = require("../services/command-executor");
const create_temp_table_1 = require("../commands/create-temp-table");
const import_data_1 = require("../commands/import-data");
const merge_table_1 = require("../commands/merge-table");
const drop_temp_table_1 = require("../commands/drop-temp-table");
const ServiceContext = (0, react_1.createContext)(new Map());
const ServiceProvider = ({ children }) => {
    const services = new Map();
    const sqlExecutor = (0, sql_executor_1.createSqlExecutor)();
    services.set(sql_executor_1.createSqlExecutor, sqlExecutor);
    services.set(command_executor_1.createCommandExecutor, (0, command_executor_1.createCommandExecutor)());
    // ✅ Automatically register commands based on type
    services.set(CreateTempTableContext, (0, create_temp_table_1.createTempTableCommand)(sqlExecutor));
    services.set(ImportDataContext, (0, import_data_1.importDataCommand)(sqlExecutor));
    services.set(MergeTableContext, (0, merge_table_1.mergeTableCommand)(sqlExecutor));
    services.set(DropTempTableContext, (0, drop_temp_table_1.dropTempTableCommand)(sqlExecutor));
    return value;
    {
        services;
    }
     > { children } < /ServiceContext.Provider>;
};
exports.ServiceProvider = ServiceProvider;
// 🔥 Like `IServiceProvider.GetService<T>()` in .NET
const useService = (serviceType) => {
    const context = (0, react_1.useContext)(ServiceContext);
    if (!context.has(serviceType)) {
        throw new Error(`Service '${serviceType.name}' not found in ServiceContext`);
    }
    return context.get(serviceType);
};
exports.useService = useService;
