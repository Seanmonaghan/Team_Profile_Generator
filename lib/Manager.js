const Employee = require("Employee")

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
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
        return "Manager"
    }
}

module.export = Manager;