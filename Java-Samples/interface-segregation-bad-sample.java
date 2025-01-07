interface Worker {
    void work();
    void eat();
}

class Robot implements Worker {
    @Override
    public void work() { /* Working logic */ }
    @Override
    public void eat() { /* Robots don’t eat */ }
}
