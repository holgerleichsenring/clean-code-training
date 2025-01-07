import { injectable, inject } from "tsyringe";
import { UserService } from "./services/UserService";

@injectable()
export class Application {
    constructor(@inject(UserService) private userService: UserService) {}

    run(): void {
        this.userService.getUserDetails("123");
    }
}
