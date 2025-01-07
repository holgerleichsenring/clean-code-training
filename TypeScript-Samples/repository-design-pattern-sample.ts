// User Entity
class User {
    constructor(public id: number, public name: string, public email: string) {}
}

// Interface for the User Repository
interface IUserRepository {
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User | null>;
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(id: number): Promise<void>;
}

// Concrete Implementation of the User Repository
class UserRepository implements IUserRepository {
    private users: User[] = []; // In-memory data store (simulate a database)

    async getAll(): Promise<User[]> {
        return this.users;
    }

    async getById(id: number): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }

    async create(user: User): Promise<void> {
        this.users.push(user);
        console.log(`User created: ${user.name}`);
    }

    async update(user: User): Promise<void> {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index === -1) {
            throw new Error("User not found");
        }
        this.users[index] = user;
        console.log(`User updated: ${user.name}`);
    }

    async delete(id: number): Promise<void> {
        this.users = this.users.filter(user => user.id !== id);
        console.log(`User deleted with ID: ${id}`);
    }
}

// Usage Example
(async () => {
    const userRepository: IUserRepository = new UserRepository();

    // Create users
    await userRepository.create(new User(1, "Alice", "alice@example.com"));
    await userRepository.create(new User(2, "Bob", "bob@example.com"));

    // Retrieve all users
    console.log("All users:", await userRepository.getAll());

    // Get user by ID
    console.log("User with ID 1:", await userRepository.getById(1));

    // Update user
    await userRepository.update(new User(1, "Alice Updated", "alice_updated@example.com"));

    // Delete user
    await userRepository.delete(2);

    // Retrieve all users after deletion
    console.log("All users after deletion:", await userRepository.getAll());
})();
