interface Bird {
    void eat();
}
interface FlyingBird extends Bird {
    void fly();
}
class Penguin implements Bird {
    @Override
    public void eat() { /* Eating logic */ }
}
class Sparrow implements FlyingBird {
    @Override
    public void eat() { /* Eating logic */ }
    @Override
    public void fly() { /* Flying logic */ }
}
