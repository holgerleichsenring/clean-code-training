"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useService = exports.ServiceProvider = void 0;
// context/service-context.ts
const react_1 = __importStar(require("react"));
const sql_executor_1 = require("../services/sql-executor");
const command_executor_1 = require("../services/command-executor");
const create_temp_table_command_1 = require("../commands/create-temp-table-command");
const import_data_command_1 = require("../commands/import-data-command");
const merge_table_command_1 = require("../commands/merge-table-command");
const drop_temp_table_command_1 = require("../commands/drop-temp-table-command");
const create_temp_table_command_context_1 = require("../commands/contexts/create-temp-table-command-context");
const import_data_command_context_1 = require("../commands/contexts/import-data-command-context");
const merge_table_command_context_1 = require("../commands/contexts/merge-table-command-context");
const drop_temp_table_command_context_1 = require("../commands/contexts/drop-temp-table-command-context");
const ServiceContext = (0, react_1.createContext)(new Map());
const ServiceProvider = (props) => {
    const services = new Map();
    const sqlExecutor = (0, sql_executor_1.createSqlExecutor)();
    services.set(sql_executor_1.createSqlExecutor, sqlExecutor);
    services.set(command_executor_1.createCommandExecutor, (0, command_executor_1.createCommandExecutor)());
    // ✅ Automatically register commands based on type
    services.set(create_temp_table_command_context_1.CreateTempTableContextType, (0, create_temp_table_command_1.createTempTableCommand)(sqlExecutor));
    services.set(import_data_command_context_1.ImportDataContextType, (0, import_data_command_1.importDataCommand)(sqlExecutor));
    services.set(merge_table_command_context_1.MergeTableContextType, (0, merge_table_command_1.mergeTableCommand)(sqlExecutor));
    services.set(drop_temp_table_command_context_1.DropTempTableContextType, (0, drop_temp_table_command_1.dropTempTableCommand)(sqlExecutor));
    return <ServiceContext.Provider value={services}>{props.children}</ServiceContext.Provider>;
};
exports.ServiceProvider = ServiceProvider;
// 🔥 Like `IServiceProvider.GetService<T>()` in .NET
const useService = (serviceType) => {
    const serviceName = serviceType instanceof Function ? serviceType.name : serviceType;
    const context = (0, react_1.useContext)(ServiceContext);
    if (!context.has(serviceName)) {
        throw new Error(`Service '${serviceName}' not found in ServiceContext`);
    }
    return context.get(serviceName);
};
exports.useService = useService;
