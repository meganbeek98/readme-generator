// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util')

const api = require('./utils/api.js')

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
      type: 'input',
      message: "What is your GitHub username? (No @ needed)",
      name: 'username',
      default: 'connietran-dev',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A valid GitHub username is required.");
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
              return console.log("A valid GitHub repo is required.");
          }
          return true;
      }
  },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Which license is used for this project:',
        choices: ['Apache', 'Mozilla', 'MIT', 'GNU', 'Boost', 'ISC'],
        validate: choicesLength => {
          if (choicesLength.length <= 1) {
            return true;
          } else {
            return "Please select one license!";
          }
        }
      },
      {
        type: "input",
        name: "usageInfo",
        message: "Describe the main use case for this project/application:",
      },
      {
        type: "input",
        name: "contributionsInfo",
        message: "Are their any guidlines for contributing to this project:",
      },
      {
        type: "input",
        name: "testsInfo",
        message: "Which tests would you like to include:",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username (Required)?",
      },
      {
        type: "input",
        name: "emailInfo",
        message: "What is a good email someone can reach you(Required)?",
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./dist/README.md", generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('Success!');
      });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function(answer) {
      const fileName =
        answer.title
          .split(' ')
          .join('') + '.md';
      
      writeToFile(fileName, answer);
    });
}

// Function call to initialize app
init();
