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
      message: "What is your GitHub username?",
      name: 'username',
      default: 'connietran-dev',
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
              return console.log("A valid GitHub repo, is a required field.");
          }
          return true;
      }
    },
    {
      type: 'input',
      message: "Please describe the steps required to install your project:",
      name: 'installation'
  },
  {
      type: 'input',
      message: "Describe what and how your project is used; provide instructions and examples.",
      name: 'usage'
  },
  {
      type: 'input',
      message: "Please list any guidelines (if applicable) on how other developers can contribute to your project.",
      name: 'contributing'
  },
  {
      type: 'input',
      message: "List any and all tests written for your application; provide examples on how to run them (if applicable).",
      name: 'tests'
  },
  {
      type: 'list',
      message: "Choose a license for your project.",
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
      name: 'license'
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
