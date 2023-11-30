// Problem 1
const employees = [
    {
      firstName: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true
    },
    {
      firstName: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true
    },
    {
      firstName: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false
    }
  ];
  
// Problem 2
  const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
// Adding a new employee to the company
  const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };
  company.employees.push(newEmployee);
  
  console.log(company); // Output for Problem 2
  
// Problem 3
  function calculateTotalSalary(company) {
    let totalSalary = 0;
    company.employees.forEach(employee => {
      totalSalary += employee.salary;
    });
    return totalSalary;
  }
  
  console.log("Total salary for all employees:", calculateTotalSalary(company)); // Output for Problem 3
  
// Problem 4
  function giveRaise(company) {
    company.employees.forEach(employee => {
      if (employee.raiseEligible) {
        employee.salary *= 1.1; // Increase salary by 10%
        employee.raiseEligible = false; // Set eligibility to false
      }
    });
  }
  
  giveRaise(company);
  console.log(company); // Output for Problem 4
  
// Problem 5
  const workingFromHome = ['Anna', 'Sam'];
  
  company.employees.forEach(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
  });
  
  console.log(company); // Output for Problem 5