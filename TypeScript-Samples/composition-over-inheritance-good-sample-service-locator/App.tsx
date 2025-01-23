import React from "react";
import { ServiceProvider } from "./context/service-context";
import CommandRunner from "./components/command-runner";

const App: React.FC = () => (
    <ServiceProvider>
        <CommandRunner />
    </ServiceProvider>
);

export default App;
