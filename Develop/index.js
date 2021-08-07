// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = () => {
  return inquirer.prompt([
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
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions();
init();
