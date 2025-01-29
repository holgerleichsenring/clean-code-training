import { CommandHandlerContext } from "./command-handler-context-type";

export type CommandExecutor = {
    executeAll: (contexts: { commandType: Function; context: CommandHandlerContext }[]) => Promise<void>;
};