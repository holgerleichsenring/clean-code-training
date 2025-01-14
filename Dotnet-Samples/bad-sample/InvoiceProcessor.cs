using CleanCodeTraining.Refactoring.Models;

namespace CleanCodeTraining.Refactoring.Samples;

public class InvoiceProcessor
{
    public void ProcessInvoices(List<Invoice> invoices, string outputPath)
    {
        if (invoices == null || invoices.Count == 0)
        {
            Console.WriteLine("No invoices to process.");
            return;
        }

        foreach (var invoice in invoices)
        {
            if (invoice.Amount > 1000)
            {
                Console.WriteLine("High-value invoice: " + invoice.Id);
            }
            
            string outputFileName = outputPath + "\\" + invoice.Id + ".txt";
            using (var writer = new StreamWriter(outputFileName))
            {
                writer.WriteLine("Invoice ID: " + invoice.Id);
                writer.WriteLine("Customer: " + invoice.CustomerName);
                writer.WriteLine("Amount: $" + invoice.Amount);
                writer.WriteLine("Processed On: " + DateTime.Now);
            }
        }

        Console.WriteLine("Processed " + invoices.Count + " invoices.");
    }
}
