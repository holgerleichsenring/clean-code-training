import { injectable, singleton } from "tsyringe";

// Logger Service
@singleton() // Singleton scope
@injectable()
export class Logger {
    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
}

// Database Service
@injectable()
export class DatabaseService {
    connect(): void {
        console.log("Connected to the database.");
    }
}

// User Service with dependencies
@injectable()
export class UserService {
    constructor(private logger: Logger, private databaseService: DatabaseService) {}

    getUserDetails(userId: string): void {
        this.logger.log(`Fetching details for user: ${userId}`);
        this.databaseService.connect();
        console.log(`Details for user ${userId} retrieved successfully.`);
    }
}

