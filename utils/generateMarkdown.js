// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//Individual license badge code was referenced from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba, using shields.io for badge generation.
function renderLicenseBadge(license) {
  if(license==="None"){
    return "";
  }
  else{
    if(license==="MIT"){
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    if(license==="BSD"){
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    if(license==="IBM"){
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    if(license==="ISC"){
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="None"){
    return "";
  }
  else{
    if(license==="MIT"){
      return `[MIT](https://opensource.org/licenses/BSD-3-Clause)`
    }
    if(license==="BSD"){
      return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
    }
    if(license==="IBM"){
      return `[IBM](https://opensource.org/licenses/IPL-1.0)`
    }
    if(license==="ISC"){
      return `[ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if(license==="None"){
  return "";
}
else{
  return `## License

  This application is covered under the ${renderLicenseLink(license)} license.`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ${data.description}
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instruction](#test-instruction)
  - [Questions](#questions)

  ## Installation

  > ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution Guidelines

  ${data.guidelines}

  ## Test Instruction

      ${data.instruction}

  ${renderLicenseSection(data.license)}

  ## Questions

  Please feel free to submit any questions or concerns to the email address below.  
  To view this applications repository, use the GitHub link below.
 
  Email address: ${data.email}  
  GitHub user profile: [${data.username}](https://github.com/${data.username})   

`;
}

module.exports = generateMarkdown;
