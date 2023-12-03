// The following variables install packages or nessissary files to create the README
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//The following function creates the terminal prompts to collect the information to create a README
function init () {
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "Enter your Application's title",
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter a Description of your application",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter Installation Instructions",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Explain how your application is used",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Explain how others can contribute to the application",
    },
    {
        type: 'input',
        name: 'test',
        message: "Explain how to test the application",
    },
    {
        type: 'list',
        name: 'license',
        message: "Select your applicaiton's license, if you do not want a license select the empty string",
        choices: ['','Apache 2.0','Boost Software 1.0','BSD 3-Clause','BSD 2-Clause','Elipse Public 1.0', 'GNU GPL v3', 'GNU GPL v2']
    },
    {
        type: 'input',
        name: 'gitName',
        message: "Please enter your github url to be placed in the questions section",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email to be placed in the questions section",
    },
    {
        type: 'input',
        name: 'links',
        message: 'Enter any nessisary links, videos, or screenshots',
    }
])

//The following .then function pulls the markdown file and funs the collected data through it
//then it calls the write to file function.
.then(data => {
const readmeTemplate = generateMarkdown(data) 

    writeToFile('./README.md', readmeTemplate)

});

};
//The writeToFile function writes the file and in called in the above function with the data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    (err) ? console.log((err)) : console.log('Success!! README Created!!')
    )
};


// this initializes the promts
init();

