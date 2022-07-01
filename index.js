// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questionsPrompt = async () => {
    const answers = await inquirer.prompt([
        // asks user for the project's title/name
        {
            type: "input",
            name: "Title",
            message: "What is the TITLE of your project?"
        },

        // asks user to enter a description of the project
        {
            type: "input",
            name: "Description",
            message: "Provide/Enter a brief DESCRIPTION of your project:"
        },

        // asks user to explain what the project is/could be used for
        {
            type: "input",
            name: "Usage Information",
            message: "Enter/Explain what your project is/could be used for:"
        },

        // asks user to enter instructions for installing/using the project
        {
            type: "input",
            name: "Installation Instructions",
            message: "Provide/Enter step-by-step INSTALLATION-INSTRUCTIONS for your project:"
        },

        // asks user to enter/cite resources used and any other contributors involved in the development of the project
        {
            type: "input",
            name: "Resources",
            message: "Enter/Cite any sources used in the development of your project: "
        },

        // asks user to list any
        {
            type: "input",
            name: "Contribute",
            message: "Please list any guidlines for CONTRIBUTING to this project:"
        },

        // asks the user for licensing information
        {
            name: "License",
            type: "list",
            message: "Select any LICENSE associated with your project:",
            choices: ['Mit', 'ISC', 'Apache', 'none'],
            validate: choicesLength_1 => {
                if (choicesLength_1.length <= 1) {
                    return true;
                } else {
                    return "Please select one license!";
                }
            }
        },

        // asks user for their GitHub information
        {
            type: "input",
            name: "userGithub",
            message: "What is your GitHub username?:(Required)",
        },

        // asks user to enter their Email
        {
            type: "input",
            name: "Email",
            message: "What is a good EMAIL someone can reach you at?:(Required)"
        },
    ]);
    writeToFile('README.md', generateMarkdown(answers));

    

}

promptUser()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(fileName, data)
    
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
