export type CommandHandler<TContext> = {
    execute: (context: TContext) => Promise<void>;
};