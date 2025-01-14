using CleanCodeTraining.Refactoring.Models;
using Microsoft.Extensions.Options;

namespace CleanCodeTraining.Refactoring.Recommendations;

public interface IInvoiceValidator
{
    void Validate(Invoice invoice);
}
