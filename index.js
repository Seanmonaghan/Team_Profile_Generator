// Node Modules
const inquirer = require('inquirer');

// Native Modules
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Personal Modules
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the team manager?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the ID of the team manager?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the email address of the team manager?"
        },
        {
            type: "input",
            name: "managerNumber",
            message: "What is the phone number of the team manager?"
        },
        {
            type: "list",
            name: "managerName",
            message: "What do you want to do next?",
            choices: [
                ""
            ]
        }
    ])
}






// function promptUser() {

    // return inquirer.prompt([{
    //         type: "input",
    //         name: "title",
    //         message: "Who is the team Manager?"
    //     }, 
    //     {
    //         type: "input",
    //         name: "id",
    //         message: "What is the Employee's ID?"
    //     },
    //     {
    //         type: "input",
    //         name: "email",
    //         message: "What is the Employee's email?"
    //     },
    //     {
    //         type: "input",
    //         name: "number",
    //         message: "What is their office number?"
    //     },
    //     {
    //         type: "list",
    //         name: "continue",
    //         message: "What is their office number?"
    //     }
        
    // ]);
// }

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

function init() {
    promptUser()
    .then(function (answers) {

    })
}

init();