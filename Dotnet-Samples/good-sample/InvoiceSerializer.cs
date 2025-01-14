using CleanCodeTraining.Refactoring.Models;

namespace CleanCodeTraining.Refactoring.Recommendations;

public class InvoiceSerializer : IInvoiceSerializer
{
    public void Write(Invoice invoice, string outputFileName)
    {
        ArgumentNullException.ThrowIfNull(invoice);
        if (string.IsNullOrWhiteSpace(outputFileName))
        {
            throw new ArgumentNullException(nameof(outputFileName));
        }

        using var writer = new StreamWriter(outputFileName);
        writer.WriteLine("Invoice ID: " + invoice.Id);
        writer.WriteLine("Customer: " + invoice.CustomerName);
        writer.WriteLine("Amount: $" + invoice.Amount);
        writer.WriteLine("Processed On: " + DateTime.Now);
    }
}
