// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
var questionsPrompt = [
    // asks for projects title/name
    {
        type: "input",
        name: "title",
        message: "What is the name/title of your project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
