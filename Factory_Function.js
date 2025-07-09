function createEmployee(name, role, salary) {
  return {
    name: name,       
    role: role,     
    salary: salary, 
    introduce: function() {
      console.log(`Hello, I am ${this.name}, working as a ${this.role}.`);
    }
  };
}

const employee1 = createEmployee("Alice", "Software Developer", 75000);
employee1.introduce();  // Output: Hello, I am Alice, working as a Software Developer.

const employee2 = createEmployee("Bob", "Project Manager", 90000);
employee2.introduce();  // Output: Hello, I am Bob, working as a Project Manager.
