import "reflect-metadata"; // Required for TSyringe
import { container } from "tsyringe";
import { Application } from "./Application";

// Bootstrap the application
const app = container.resolve(Application);
app.run();
