using System.ComponentModel.DataAnnotations;

namespace EmployeeAPI.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        [Required]
        public string? FirstName { get; set; }
        [Required]
        public string? LastName { get; set; }
        [Required]
        [EmailAddress(ErrorMessage ="Invalid Email Address")]
        public string? Email { get; set; }
        [Required]
        public long Phone { get; set; }
        [Required]
        public double Salary { get; set; }
        [Required]
        public string? Department { get; set; }
    }
}
