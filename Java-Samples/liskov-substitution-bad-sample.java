class Bird {
    public void fly() { /* Flying logic */ }
}
class Penguin extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Penguins can't fly!");
    }
}
