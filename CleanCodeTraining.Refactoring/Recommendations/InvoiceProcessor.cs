using CleanCodeTraining.Refactoring.Models;

namespace CleanCodeTraining.Refactoring.Recommendations;

public class InvoiceProcessor(InvoiceFileNameGenerator invoiceFileNameGenerator,
    InvoiceSerializer invoiceSerializer,
    InvoiceValidator invoiceValidator)
{
    public void ProcessInvoices(List<Invoice> invoices, string outputPath)
    {
        ArgumentNullException.ThrowIfNull(invoices);
        if (string.IsNullOrWhiteSpace(outputPath))
        {
            throw new ArgumentNullException(nameof(outputPath));
        }

        foreach (var invoice in invoices)
        {
            invoiceValidator.Validate(invoice);
            string fileName = invoiceFileNameGenerator.GenerateTextFileName(invoice.Id, outputPath);
            invoiceSerializer.Write(invoice, fileName);
        }

        Console.WriteLine("Processed " + invoices.Count + " invoices.");
    }
}
