const Employee = require("Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
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
    getGithub() {
        console.log(`Their github username is ${this.github}`)
    }
    getRole() {
        return "Intern"
    }
}

module.export = Engineer;