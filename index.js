// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'applicationTitle',
        message: "Enter your Application's title",
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: "Select the sections for your table of contents",
        choices: [
          'Installation',
          'Description',
          'Usage',
          'Contribution',
          'Test',
          'License',
          'Questions'
        ]
      },
    {
        type: 'input',
        name: 'description',
        message: "Enter a Description of you application",
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
        message: "Select your applicaiton's license",
        choices: ['license 1','license 2','ext..']
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
])


.then(answers => {

    //The following variable creates literal code that will be input into the readme file starting with just the appliocation title and the Table of Contents title
    const readme = `# ${answers.applicationTitle}\n## Table of Contents\n`;
    const contents = answers.tableOfContents

        fs.writeFile('./README.md', readme, (err) =>
      err ? console.log(err) : console.log('Success!')
    );

    //The folowing creates a table of contents section link that will be linked to each section
    for (const section of contents) {
        let secCont = `- [${section}](#${section})\n`
        fs.appendFile('./README.md', secCont, (err) =>
        err ? console.log(err) : console.log('Success!'));
    }
    
    if (contents.includes('Description')) {
        let desc = `\n## Description\n${answers.description}\n`;
        fs.appendFile('./README.md', desc, (err) =>
        err ? console.log(err) : console.log('Success!'));
    }

    if (contents.includes('Installation')) {
        let desc = `\n## Installation\n${answers.installation}\n`;
        fs.appendFile('./README.md', desc, (err) =>
        err ? console.log(err) : console.log('Success!'));
    }

    if (contents.includes('Usage')) {
        let desc = `\n## Usage\n${answers.usage}\n`;
        fs.appendFile('./README.md', desc, (err) =>
        err ? console.log(err) : console.log('Success!'));
    }

    if (contents.includes('Contribution')) {
        let desc = `\n## Contribution\n${answers.contribution}\n`;
        fs.appendFile('./README.md', desc, (err) =>
        err ? console.log(err) : console.log('Success!'));
    }

    if (contents.includes('Test')) {
        let desc = `\n## Test\n${answers.test}\n`;
        fs.appendFile('./README.md', desc, (err) =>
        err ? console.log(err) : console.log('Success!'));
    }

    if (contents.includes('License')) {
        let desc = `\n## License\n- ${answers.gitName}\n- ${answers.email}`;
        fs.appendFile('./README.md', desc, (err) =>
        err ? console.log(err) : console.log('Success!'));
    }

    if (contents.includes('Questions')) {
        let desc = `\n## Questions\n${answers.questions}\n`;
        fs.appendFile('./README.md', desc, (err) =>
        err ? console.log(err) : console.log('Success!'));
    }

    console.log(answers)
   



});
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
