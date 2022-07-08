// packages -- (external)
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// modules -- (internal)
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// inquirer prompts for userResponses
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'meganbeek98',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username, is a required field.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repository name, is a required field (for badge).");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title, is a required field.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description, is a required field.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Describe the steps required to install your project (Installation).",
        name: 'installation'
    },
    {
        type: 'input',
        message: "What can / What is, your project used for? (Usage)",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Please list guidelines on how other developers can contribute to your project (if applicable):",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Please list any and all tests written for your application and provide examples on how to run them (if applicable):",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);


// Main function
async function init() {
    try {

        // prompts the questions (inquirer)
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // calls GitHub info api of the user
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // passes inquirer+userResponses+GitHub(userInfo)--> to generateMarkdown.md
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // writes the markdown to the Example file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// (initializes the app / makes it run)
init();
