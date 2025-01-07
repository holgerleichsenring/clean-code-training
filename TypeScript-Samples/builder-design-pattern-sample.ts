// Product: The object to be built
class House {
    public windows: number = 0;
    public doors: number = 0;
    public hasGarage: boolean = false;
    public hasSwimmingPool: boolean = false;
    public hasGarden: boolean = false;

    public display(): void {
        console.log(`House Details:
        - Windows: ${this.windows}
        - Doors: ${this.doors}
        - Garage: ${this.hasGarage ? "Yes" : "No"}
        - Swimming Pool: ${this.hasSwimmingPool ? "Yes" : "No"}
        - Garden: ${this.hasGarden ? "Yes" : "No"}`);
    }
}

// Interface: Defines the fluent builder
interface IHouseBuilder {
    reset(): IHouseBuilder;
    setWindows(windows: number): IHouseBuilder;
    setDoors(doors: number): IHouseBuilder;
    addGarage(): IHouseBuilder;
    addSwimmingPool(): IHouseBuilder;
    addGarden(): IHouseBuilder;
    build(): House;
}

// Concrete Builder: Implements the IHouseBuilder interface with fluent methods
class HouseBuilder implements IHouseBuilder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    reset(): IHouseBuilder {
        this.house = new House();
        return this; // Enable chaining
    }

    setWindows(windows: number): IHouseBuilder {
        this.house.windows = windows;
        return this; // Enable chaining
    }

    setDoors(doors: number): IHouseBuilder {
        this.house.doors = doors;
        return this; // Enable chaining
    }

    addGarage(): IHouseBuilder {
        this.house.hasGarage = true;
        return this; // Enable chaining
    }

    addSwimmingPool(): IHouseBuilder {
        this.house.hasSwimmingPool = true;
        return this; // Enable chaining
    }

    addGarden(): IHouseBuilder {
        this.house.hasGarden = true;
        return this; // Enable chaining
    }

    build(): House {
        const result = this.house;
        this.reset(); // Reset the builder for the next use
        return result;
    }
}

// Usage
const builder = new HouseBuilder();

// Building a Basic House
const basicHouse = builder
    .reset()
    .setWindows(4)
    .setDoors(2)
    .build();
basicHouse.display();

console.log("\nBuilding a Luxury House:");

// Building a Luxury House
const luxuryHouse = builder
    .reset()
    .setWindows(10)
    .setDoors(4)
    .addGarage()
    .addSwimmingPool()
    .addGarden()
    .build();
luxuryHouse.display();
