using CleanCodeTraining.Refactoring.Models;

namespace CleanCodeTraining.Refactoring.Recommendations;

public interface IInvoiceSerializer
{
    void Write(Invoice invoice, string outputFileName);
}
