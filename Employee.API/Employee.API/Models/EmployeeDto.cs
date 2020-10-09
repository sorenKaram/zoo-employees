using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.API.Models
{
    public class EmployeeDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }
        public string Speciality { get; set; }
        public string Description { get; set; }
        public List<string> Animals { get; set; }
        public List<ShowsDto> Shows { get; set; }
    }
}
