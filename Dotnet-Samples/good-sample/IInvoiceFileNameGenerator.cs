namespace CleanCodeTraining.Refactoring.Recommendations;

public interface IInvoiceFileNameGenerator 
{
    string GenerateTextFileName(Guid id, string outputPath);
}
