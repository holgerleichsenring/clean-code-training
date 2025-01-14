using CleanCodeTraining.Refactoring.Models;
using Microsoft.Extensions.Options;

namespace CleanCodeTraining.Refactoring.Recommendations;

public class InvoiceValidator(IOptions<InvoiceValidationOptions> invoiceValidationOptions) 
    : IInvoiceValidator
{
    public void Validate(Invoice invoice)
    {
        ArgumentNullException.ThrowIfNull(invoice);
        if (invoice.Amount > invoiceValidationOptions.Value.MaximumAmount)
        {
            // probably raise ValidationException
            Console.WriteLine("High-value invoice: " + invoice.Id);
        }
    }
}
