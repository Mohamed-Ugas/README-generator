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

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
