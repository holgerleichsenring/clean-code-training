class Database {
    public void save() { /* Save logic */ }
}

class Application {
    private Database database;

    public Application() {
        this.database = new Database();
    }

    public void saveData() {
        database.save();
    }
}
