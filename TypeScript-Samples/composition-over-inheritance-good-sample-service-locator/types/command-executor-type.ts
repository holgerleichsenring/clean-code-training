export type CommandExecutor = {
    executeAll: (contexts: { commandType: Function; context: CommandHandlerContext }[]) => Promise<void>;
};