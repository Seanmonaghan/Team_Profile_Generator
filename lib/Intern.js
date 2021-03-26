const Employee = require("Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
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
    getSchool() {
        console.log(`Their school is ${this.school}`)
    }
    getRole() {
        return "Engineer"
    }
}

module.export = Intern;