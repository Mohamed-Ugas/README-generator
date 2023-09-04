const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the name of your project",
    },

    {
    type: "input",
    name: "description",
    message: "Describe the functionality of this project",
    },

    {
    type: "list",
    name: "license",
    message: "What is the license of your project?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "BSD2", "BSD3", "none"],
    },

    {
        type: "input",
        name: "install",
        message: "What are the steps requirded to install your project? ",
    },

    {
        type: "input",
        name: "usage",
        message: "How do you use this app?",
    },

    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// Function to generate README content based on user responses
function generateREADME(userResponses) {
    // Construct the README content using template literals
    const readmeContent = `
  # ${userResponses.title}
  
  ## Description
  ${userResponses.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${userResponses.install}
  
  ## Usage
  ${userResponses.usage}
  
  ## License
  This project is licensed under the ${userResponses.license} license.
  
  ## Contributing
  ${userResponses.contributing}
  
  ## Tests
  ${userResponses.tests}
  
  ## Questions
  For questions or inquiries, you can reach me via [GitHub](https://github.com/${userResponses.github}) or by email at ${userResponses.email}.
  `;
  
    return readmeContent;
  }
  

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
