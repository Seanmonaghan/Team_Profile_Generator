
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {

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
}

function generateHTML(answers) {
    return ``;
}

promptUser()
    .then(function (answers) {

    })

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