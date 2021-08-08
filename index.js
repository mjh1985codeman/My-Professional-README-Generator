// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//Variable that links the generateMarkdown function on the generateMarkdown.js file in the utils sub folder.
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
      message: "Please include a description of your project. (Required)",
      //validation.
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description of your project!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "githubURL",
      message: "What is the gitHubURL for your project? (Required)",
      //validation.
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
      message: "Enter your email address.",
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
      choices: ["MIT", "GPL", "APACHE"],
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
  ])
  // captures data from the user input
  .then(function (data) {
    // saves the input as a variable and pushes it to the renderReadme function.
    const template = generateMarkdown(data);

    //writes the template variable (renderReadme(Data)) as a ReadMe.MD file and saves it to the Dist subfolder
    fs.writeFile("./Dist/ReadMe.MD", template, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!!!  Checkout the Dist Folder to see your ReadMe!!");
    });
  });
