class Cache {
    private static instance: Cache; // Static instance of the Cache class
    private cache: Map<string, any>; // Internal cache storage

    // Private constructor to prevent direct instantiation
    private constructor() {
        this.cache = new Map();
    }

    // Public method to get the singleton instance
    public static getInstance(): Cache {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }
        return Cache.instance;
    }

    // Method to set a value in the cache
    public set(key: string, value: any): void {
        console.log(`Caching value for key: ${key}`);
        this.cache.set(key, value);
    }

    // Method to get a value from the cache
    public get(key: string): any {
        if (this.cache.has(key)) {
            console.log(`Cache hit for key: ${key}`);
            return this.cache.get(key);
        }
        console.log(`Cache miss for key: ${key}`);
        return null;
    }

    // Method to check if a key exists in the cache
    public has(key: string): boolean {
        return this.cache.has(key);
    }

    // Method to delete a key from the cache
    public delete(key: string): void {
        console.log(`Deleting key from cache: ${key}`);
        this.cache.delete(key);
    }

    // Method to clear the entire cache
    public clear(): void {
        console.log("Clearing entire cache.");
        this.cache.clear();
    }
}

// Usage Example

// Get the singleton instance
const cache = Cache.getInstance();

// Set values in the cache
cache.set("user:123", { name: "John Doe", age: 30 });
cache.set("config", { theme: "dark", version: "1.0.0" });

// Retrieve values from the cache
console.log(cache.get("user:123")); // Cache hit
console.log(cache.get("config"));   // Cache hit
console.log(cache.get("nonexistent")); // Cache miss

// Check if a key exists
console.log("Has 'config':", cache.has("config")); // true

// Delete a key
cache.delete("user:123");
console.log(cache.get("user:123")); // Cache miss

// Clear the entire cache
cache.clear();
console.log("Has 'config':", cache.has("config")); // false
