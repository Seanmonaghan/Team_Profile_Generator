// Node Modules
const inquirer = require('inquirer');
let manager;
let engineers = [];
let interns = [];

// Native Modules
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Personal Modules
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Function to ask user for information about the Manager
function addManager() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the name of the team manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the team manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address of the team manager?"
        },
        {
            type: "input",
            name: "number",
            message: "What is the phone number of the team manager?"
        },
        {
            type: "list",
            name: "progress",
            message: "What do you want to do next?",
            choices: [
                "I want to add an Engineer",
                "I want to add an Intern",
                "I am done"
            ]
        }
    ])
}

// Function to ask user for information about an Engineer
function addEngineer() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the name of the Engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the Engineer?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address of the Engineer?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the phone number of the team manager?"
        },
        {
            type: "list",
            name: "progress",
            message: "What do you want to do next?",
            choices: [
                "I want to add an Engineer",
                "I want to add an Intern",
                "I am done"
            ]
        }
    ])
}

// Function to add information about an Intern
function addIntern() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the name of the Intern?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the Intern?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address of the Intern?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the school of the Intern?"
        },
        {
            type: "list",
            name: "progress",
            message: "What do you want to do next?",
            choices: [
                "I want to add an Engineer",
                "I want to add an Intern",
                "I am done"
            ]
        }
    ])
}



// function generateHTML(answers) {
//     return ``;
// }

// promptUser()
//     .then(function (answers) {

//     })

// promptUser()
//     .then(function (answers) {
//         const html = generateHTML(answers);
//         return writeFileAsync("exampleREADME.md", html);
//     })
//     .then(function () {
//         console.log("Successfully wrote to HTML");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

function handleProgression(answer) {
    if (answer === "I want to add an Engineer") {
        addEngineer()
            .then(function (answer) {
                let engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
                engineers.push(engineer)
                handleProgression(answer.progress)
            })
    } else if (answer === "I want to add an Intern") {
        addIntern()
            .then(function (answers) {
                interns.push(answer)
                handleProgression(answers.progress);
            })
    } else {
        console.log(manager);
        console.log(engineers);
        return;
    }
}

function init() {
    addManager()
        .then(function (answers) {
            manager = new Manager(answers.name, answers.id, answers.email, answers.number)
            handleProgression(answers.progress)
        })
        .catch(function (err) {
            console.log(err);
        });
}

init();