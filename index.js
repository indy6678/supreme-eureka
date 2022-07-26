// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const genReadMe = require('./src/page-template');
var compList = {}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter install instructions. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter install instructions!');
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter some usage instructions. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Tell everyone how to use the app!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license (all that may apply)',
        choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense']
    },
    {
        type:'confirm',
        name: 'contrib',
        message: 'Would you like to enter a list of contributors?',
        default: false
    },
]


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFile = () => {
fs.writeFile("./README.md", genReadMe(compList), err =>{
    if(err) throw err;
    return
    })
    console.log("ReadMe complete!")
    }


// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then(answers => {
        // console.log(answers.name)
        compList = answers
        console.log(compList)
    })
    .then(writeFile);
};

// Function call to initialize app
init();