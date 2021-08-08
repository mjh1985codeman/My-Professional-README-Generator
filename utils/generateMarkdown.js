const fs = require("fs");
//Created the licenes variable as an object and the license choice will be written
//to the page.
const licenses = {
  MIT: "![License: 'MIT'](https://img.shields.io/badge/license-MIT-green)",
  GPL: "![License: 'GPL'](https://img.shields.io/badge/license-GPL-blue)",
  APACHE:
    "![License: 'APACHE'](https://img.shields.io/badge/license-Apache-blue)",
  None: "N/A",
};
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License
  ${licenses[data.license]}
 



  ## Table of Contents
  * [Project-Description](#Project-Description)  
  * [GitHub-URL](#GitHub-URL)
  * [Contact](#Contact)  
  * [Installation-Steps](#Installation-Steps)  
  * [Contributions](#Contributions)
  * [Testing-Process](#Testing-Process)

  ## Project-Description
  ${data.description}

  ## GitHub-URL
  ${data.githubURL}

  ## Contact
  If you have any questions please feel free to reach out to me at ${data.email}

  ## Installation-Steps
  ${data.installation}

  ## Contributions 
 ${data.contribution}

  ## Testing-Process 
  ${data.tests}

`;
}

module.exports = generateMarkdown;
