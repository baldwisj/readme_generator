// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {
        type: 'input',
        name: 'Application Title',
        message: "Enter your Application's title",
    },
    {
        type: 'checkbox',
        name: 'Table of Contents',
        message: "Select the sections for your table of contents",
        choices: [
          'Introduction',
          'Installation',
          'Usage',
          'Contributing',
          'License'
        ]
      },
    {
        type: 'input',
        name: 'Application Description',
        message: "Enter a Description of you application",
    },
    {
        type: 'input',
        name: 'Installation Instructions',
        message: "Enter Installation Instructions",
    },
    {
        type: 'input',
        name: 'Usage Information',
        message: "Explain how your application is used",
    },
    {
        type: 'input',
        name: 'Contribution guidelines',
        message: "Explain how others can contribute to the application",
    },
    {
        type: 'list',
        name: 'License',
        message: "Select your applicaiton's license",
        choices: ['license 1','license 2','ext..']
    },
])
.then(answers => {
    questions['applicationTitle'] = answers['Application Title'];
    questions['tableOfContents'] = answers['Table of Contents'].join('\n');
    questions['description'] = answers['Application Description'];
    questions['installation Instructions'] = answers['Installation Instructions'];
    questions['usageInformation'] = answers['Usage Information'];
    questions['contributionGuidelines'] = answers['Contribution guidelines'];
    questions['License'] = answers['License'];

    console.log(questions)
    console.log(questions.applicationTitle)
})



.then((data) => {
    fs.writeFile('./newREADME.md', JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
