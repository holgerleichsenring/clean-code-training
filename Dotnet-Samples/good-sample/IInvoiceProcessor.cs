using CleanCodeTraining.Refactoring.Models;

namespace CleanCodeTraining.Refactoring.Recommendations;

public interface IInvoiceProcessor
{
    void ProcessInvoices(List<Invoice> invoices, string outputPath);
}
