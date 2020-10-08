using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.API.Models
{
    public class ShowsDto
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Time { get; set; }
        public string Highlights { get; set; }
        public bool IsScheduled { get; set; }
     
    }
}
