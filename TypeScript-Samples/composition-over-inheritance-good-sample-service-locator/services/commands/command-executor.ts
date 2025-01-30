import { useService } from "../../service-context";

export const createCommandExecutor = () => ({
    executeAll: async (contexts: any[]) => {
        for (const context of contexts) {
            const command = useService<typeof context>(context.constructor);
            await command.execute(context);
        }
    }
});
