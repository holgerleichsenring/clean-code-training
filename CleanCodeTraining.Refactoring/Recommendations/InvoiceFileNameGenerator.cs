namespace CleanCodeTraining.Refactoring.Recommendations;

public class InvoiceFileNameGenerator
{
    public string GenerateTextFileName(Guid id, string outputPath)
    {
        if (string.IsNullOrWhiteSpace(outputPath))
        {
            throw new ArgumentNullException(nameof(outputPath));
        }
        return Path.Combine(outputPath, id + ".txt"); 
    }
}
