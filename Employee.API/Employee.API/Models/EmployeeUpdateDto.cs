using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.API.Models
{
    public class EmployeeUpdateDto
    {
        [Required(ErrorMessage = "name value missing")]
        [MaxLength(50)]
        public string Name { get; set; }

        [MaxLength(200)]
        public string Description { get; set; }

        [Required(ErrorMessage = "Level value missing")]
        public int Level { get; set; }

        [Required(ErrorMessage = "Speciality value missing")]
        public string Speciality { get; set; }

        [Required(ErrorMessage = "Animals value missing")]
        [MinLength(1)]
        public List<string> Animals { get; set; }

        [Required(ErrorMessage = "Shows value missing")]
        [MinLength(1)]
        public List<ShowsDto> Shows { get; set; }
    }
}
