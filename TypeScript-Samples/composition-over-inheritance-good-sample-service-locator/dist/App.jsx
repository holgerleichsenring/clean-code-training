"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const service_context_1 = require("./context/service-context");
const command_runner_1 = __importDefault(require("./components/command-runner"));
const App = () => (<service_context_1.ServiceProvider>
        <command_runner_1.default />
    </service_context_1.ServiceProvider>);
exports.default = App;
