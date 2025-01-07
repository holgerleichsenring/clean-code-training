abstract class Shape {
    public abstract double calculateArea();
}

class Circle extends Shape {
    @Override
    public double calculateArea() { /* Circle area logic */ }
}

class Square extends Shape {
    @Override
    public double calculateArea() { /* Square area logic */ }
}
