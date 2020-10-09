using Employee.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employee.API
{
    public class EmployeesDataStore
    {
        public static EmployeesDataStore Current { get; } = new EmployeesDataStore();

        public List<EmployeeDto> Employees { get; set; }

        public EmployeesDataStore()
        {
            Employees = new List<EmployeeDto>()
            {
                new EmployeeDto()
                {
                    Id = 1,
                    Name= "John",
                    Description = "senior ticket collector",
                    Level = 1,
                    Speciality ="Pandas",
                    Animals = new List<string>{"panda", "greyPanda"},
                    Shows = new List<ShowsDto>()
                    {
                        new ShowsDto()
                        {
                            Id = "dolphinFeeding",
                            Title = "Feeding dolphins",
                            Time = "3pm",
                            Highlights = "See trained dolphins!",
                            IsScheduled = true
                        },
                        new ShowsDto()
                        {
                            Id = "stingrayPetting",
                            Title = "Petting stingra",
                            Time = "9 am",
                            Highlights = "Pet the fearsome stingrays!",
                            IsScheduled = false
                      },
                        new ShowsDto ()
                        {
                            Id ="swingingApes",
                            Title = "Swinging Apes",
                            Time = "11 am",
                            Highlights = "Watch monkeys swing from vines!",
                            IsScheduled = true
                      }
                    }

                },
                 new EmployeeDto()
                {
                    Id = 2,
                    Name= "Sam",
                    Description = "Junior ticket collector",
                    Level = 2,
                    Speciality ="deers",
                    Animals = new List<string>{"deer", "greyDeer"},
                    Shows = new List<ShowsDto>()
                    {
                        new ShowsDto()
                        {
                            Id = "dolphinFeeding",
                            Title = "Feeding dolphins",
                            Time = "3pm",
                            Highlights = "See trained dolphins!",
                            IsScheduled = true
                        },
                        new ShowsDto()
                        {
                            Id = "stingrayPetting",
                            Title = "Petting stingra",
                            Time = "9 am",
                            Highlights = "Pet the fearsome stingrays!",
                            IsScheduled = false
                      },
                        new ShowsDto()
                        {
                            Id ="swingingApes",
                            Title = "Swinging Apes",
                            Time = "11 am",
                            Highlights = "Watch monkeys swing from vines!",
                            IsScheduled = true
                      }
                    }
                },
                  new EmployeeDto()
                {
                    Id = 3,
                    Name= "Amy",
                    Description = "Securuty Guard",
                    Level = 4,
                    Speciality ="bears",
                    Animals = new List<string>{"bear", "greyBear"},
                    Shows = new List<ShowsDto>()
                    {
                        new ShowsDto ()
                        {
                            Id = "dolphinFeeding",
                            Title = "Feeding dolphins",
                            Time = "3pm",
                            Highlights = "See trained dolphins!",
                            IsScheduled = true
                        },
                        new ShowsDto ()
                        {
                            Id = "stingrayPetting",
                            Title = "Petting stingra",
                            Time = "9 am",
                            Highlights = "Pet the fearsome stingrays!",
                            IsScheduled = false
                      },
                        new ShowsDto ()
                        {
                            Id ="swingingApes",
                            Title = "Swinging Apes",
                            Time = "11 am",
                            Highlights = "Watch monkeys swing from vines!",
                            IsScheduled = true
                      }
                    }
                },
                   new EmployeeDto()
                {
                    Id = 4,
                    Name= "Kim",
                    Description = "Security Head",
                    Level = 8,
                     Speciality ="elephant",
                     Animals = new List<string>{"elephant", "babyElephant"},
                    Shows = new List<ShowsDto>()
                    {
                        new ShowsDto ()
                        {
                            Id = "dolphinFeeding",
                            Title = "Feeding dolphins",
                            Time = "3pm",
                            Highlights = "See trained dolphins!",
                            IsScheduled = true
                        },
                        new ShowsDto ()
                        {
                            Id = "stingrayPetting",
                            Title = "Petting stingra",
                            Time = "9 am",
                            Highlights = "Pet the fearsome stingrays!",
                            IsScheduled = false
                      },
                        new ShowsDto ()
                        {
                            Id ="swingingApes",
                            Title = "Swinging Apes",
                            Time = "11 am",
                            Highlights = "Watch monkeys swing from vines",
                            IsScheduled = true
                      }
                    }
                },
            };
        }
    }
}