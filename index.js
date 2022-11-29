// TODO: Include packages needed for this application
const inquirer = require('./Develop/node_modules/inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your README?", 
"Add a description for your README", 
"Add installation insctructions for your README", 
"Add usage information for your README", 
"Add contribution guidelines for your README", 
"Add test instructions for your README",
"Enter your GitHub username",
"Enter your email address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),(err) =>
    err ? console.error(err) : console.log('README created.'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title'
            },
            {
                type:  'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'guidelines'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'instruction'
            },
            {
                type: 'list',
                message: "Choose which license to apply.",
                choices: ["None","MIT", "BSD", "IBM", "ISC"],
                name: 'license'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'username'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'email'
            }

        ])
        .then((data) =>{
        writeToFile("sample-README.md", data);
        })
        
}

// Function call to initialize app
init();
