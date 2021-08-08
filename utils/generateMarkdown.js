const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Project Description
  ${data.description}

  ## GitHub URL
  ${data.githubURL}

  ## Contact
  If you have any questions please feel free to reach out to me at ${data.email}

  ## Installation Steps
  ${data.installation}

  ## License
  ${data.license}

  ## Contributions (If Applicable). 
 ${data.contribution}

  ## Testing Process (If Applicable).
  ${data.tests}

`;
}

module.exports = generateMarkdown;
