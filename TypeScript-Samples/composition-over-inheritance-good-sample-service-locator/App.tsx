import React from "react";
import { ServiceProvider } from "./service-context";
import CommandRunner from "./services/commands/command-runner";

const App: React.FC = () => (
    <ServiceProvider>
        <CommandRunner />
    </ServiceProvider>
);

export default App;
