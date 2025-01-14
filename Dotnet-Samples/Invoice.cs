namespace CleanCodeTraining.Refactoring.Models;

public class Invoice
{
    public double Amount { get; set; }
    public string CustomerName { get; set; }
    public Guid Id { get; set; }
}