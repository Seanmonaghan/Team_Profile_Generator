class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      console.log(`Their name is ${this.name}`);
    }
    getId() {
      console.log(`Their ID is ${this.id}`);
    }
    getEmail() {
      console.log(`Their Email is ${this.email}`);
    }
    getRole() {
      return "Employee"
    }
  }
  
  module.exports = Employee;
  