using EmployeeAPI.Data;
using EmployeeAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly EmployeeDbContext _context;

        public EmployeesController(EmployeeDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees() 
        {
            var employees = await _context.Employees.ToListAsync();

            return Ok(employees) ;

        }
        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody] Employee employee)
        {
           employee.Id= Guid.NewGuid();    

           await _context.Employees.AddAsync(employee);
           await _context.SaveChangesAsync();
           return Ok(employee);
        }

       
    }
}
