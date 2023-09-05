// This line imports the Node.js File System (fs) module. This module provides methods for working with the file system, like reading and writing files.
const fs = require("fs");

// This line imports the Node.js Path module. This module provides utilities for working with file and directory paths.
const path = require('path');

// This line imports the Inquirer.js library, which is a popular Node.js library for collecting user input via the command line
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const { log } = require("console");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    },

    {
    type: "input",
    name: "description",
    message: "Describe the functionality of this project?",
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

    {
        type: "input",
        name: "contributing",
        message: "How did you contribute?",
    },

    {
        type: "input",
        name: "tests",
        message: "Which tests did you perform?",
    },

];



  

// function to write README file and it takes two arguments, the name of the file and the content to write to the file. The fs.writeFile is used to write the content (data) to the specified file name.

function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(fileName), data); 
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) =>{
        // console.log(responses)
        
        
        writeToFile("Sample-README.md", generateMarkdown({...responses}));
    });
}

// function call to initialize (start) program
init();
