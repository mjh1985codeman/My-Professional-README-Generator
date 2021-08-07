// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questionsArray = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    // validation.
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please include a description of your project.",
  },

  {
    type: "input",
    name: "githubURL",
    message: "What is the gitHubURL for your project? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the gitHub URL for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide a step-by-step description of to install your project. (Required)",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license from the provided list.",
    choices: ["MIT", "GPL", "APACHE", "BOOST"],
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Are their any contribution requirements/restrictions for your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Please advise on how to test your application:",
  },
];
//Used inquirer to capture the responses from the questions.
inquirer.prompt(questionsArray).then((responses) => {
  console.log(responses);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app

init();
