function licenseBadge(license) {
  if(license !== "none") {
    return`<img src="https://img.shields.io/badge/license-${license}-green.svg">`
  } else {
    return ""
  }
}
function licenseLink(license) {
  if(license !== "none") {
    return`- [License](#license)`
  } else {
    return ""
  }
}

function licenseSection(license) {
  if(license !== "none") {
    return`## License
    This project is licensed under the ${license} license.`
  } else {
    return ""
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ${licenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For questions or inquiries, you can reach me via [GitHub](https://github.com/${data.github}) or by email at ${data.email}.

`;
}

module.exports = generateMarkdown;
