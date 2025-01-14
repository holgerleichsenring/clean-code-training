interface DataStorage {
    void save();
}

class Database implements DataStorage {
    @Override
    public void save() { /* Save logic */ }
}

class Application {
    private DataStorage storage;

    public Application(DataStorage storage) {
        this.storage = storage;
    }

    public void saveData() {
        storage.save();
    }
}
