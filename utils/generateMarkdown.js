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

// TODO: Create a function that returns the license link
const licenseLinks = {
  MIT: "[Here](https://www.mit.edu/~amini/LICENSE.md)",
  GPL: "[Here](https://www.gnu.org/licenses/gpl-3.0.en.html)",
  APACHE: "[Here](https://www.apache.org/licenses/LICENSE-2.0)",
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License
  ${licenses[data.license]}

  Click ${licenseLinks[data.license]} for license information.
 
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
