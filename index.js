// required packages:
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to initialize app
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
    
      console.log("All done! You just generated your README.md file!")
  });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
  try {

      // prompts the questions (inquirer)
      const userResponses = await inquirer.prompt(questions);
      console.log("Your responses: ", userResponses);
      console.log("Thank you for your responses! Fetching your GitHub data next...");
  
      // calls for user info (user GitHub)
      const userInfo = await api.getUser(userResponses);
      console.log("Your GitHub user info: ", userInfo);
  
      // passes inputs to generateMarkdown file
      console.log("Generating your README next...")
      const markdown = generateMarkdown(userResponses, userInfo);
      console.log(markdown);
  
      // Write markdown to file
      await writeFileAsync('EXAMPLE-ReadMe.md', markdown);

  } catch (error) {
      console.log(error);
  }
};

// function call that starts/runs the app (initialize the app)
init();
