// Node Modules
const inquirer = require('inquirer');
let manager;
let engineers = [];
let interns = [];

// Native Modules

const fs = require("fs");
const util = require("util");
const appendFileAsync = util.promisify(fs.appendFile);

// Personal Modules

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

function generateManagerHTML(manager) {
console.log(manager)
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>framework</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header id="background-banner">
        <h1 class="title has-text-white">Programming Team</h1>
    </header>

    <main class = 'managerContainer'>
        
        <div class="card column profile">
            <header class="card-header">
                ${manager.getRole()}
            </header>
            <div class="card-content">
                <div class="content">
                    <p>Name: ${manager.name}</p>
                    <p>ID: ${manager.id}</p>
                    <p>Email: <a href = "mailto:${manager.email}"></a></p>
                </div>
            </div>
        </div>
`;
}

function generateEngineersHTML(engineer) {
    console.log(engineer)
    return `
        ${engineer.map((engineer) => 
        `<div class="card column profile">
        <header class="card-header">
            ${engineer.getRole()}
        </header>
        <div class="card-content">
            <div class="content">
            <p>Name: ${engineer.name}</p>
            <p>ID: ${engineer.id}</p>
            <p>Github: <a href ="www.github.com/${engineer.email}"></a></p>
        </div>
    </div>
        `)}
       
`       
};

function generateInternsHTML(interns) {
    console.log(interns)

};

function generateFooterHTML() {
    return `</main>

    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
        integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous">
    </script>
    <script src="index.js"></script>
</body>

</html>`

}

async function handleProgression(answer) {
    if (answer === "I want to add an Engineer") {
        addEngineer()
            .then(function (answer) {
                let engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
                engineers.push(engineer)
                handleProgression(answer.progress)
            })
    } else if (answer === "I want to add an Intern") {
        addIntern()
            .then(function (answer) {
                let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
                interns.push(intern)
                handleProgression(answer.progress);
            })
    } else {
        const managerHTML = generateManagerHTML(manager)
        await appendFileAsync("test.html", managerHTML)
        const engineerHTML = generateEngineersHTML(engineers)
        await appendFileAsync("test.html", engineerHTML)
        // const internHTML = generateInternsHTML(interns)
        // await appendFileAsync("test.html", internHTML)
        const footerHTML = generateFooterHTML()
        await appendFileAsync("test.html", footerHTML)
    }
}

async function init() {
    addManager()
        .then(function (answers) {
            manager = new Manager(answers.name, answers.id, answers.email, answers.number)
            handleProgression(answers.progress)
        })
        .catch(function (err) {
            console.log(err);
        })
}

init();
