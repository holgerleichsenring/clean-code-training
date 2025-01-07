interface Workable {
    void work();
}
interface Eatable {
    void eat();
}

class Robot implements Workable {
    @Override
    public void work() { /* Working logic */ }
}

class Human implements Workable, Eatable {
    @Override
    public void work() { /* Working logic */ }
    @Override
    public void eat() { /* Eating logic */ }
}
