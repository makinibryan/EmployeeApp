namespace EmployeeAPI.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public long Phone { get; set; }
        public double Salary { get; set; }
        public string? Department { get; set; }
    }
}
