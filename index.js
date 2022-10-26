// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const requireMarkdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
const generateLICENSE = require('./utils/generateLICENSE');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Describe your project?',
        name: 'description',
      },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['MIT License', 'Creative Commons' , 'Unlicense', '']
      },
      {
        type: 'input',
        message: 'Enter Installation Instuctions',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter Usage',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter Credits',
        name: 'credits',
      },
      {
        type: 'input',
        message: 'Enter GitHub Username',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Enter LinkedIn URL',
        name: 'LinkedIn',
      },
      {
        type: 'input',
        message: 'Contributing Instructions',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Testing Instructions',
        name: 'tests',
      }
];



// function to initialize app, 
function init() {
   
    inquirer
    .prompt(questions)
    .then((answers) =>  {
        let license = answers.license

        fs.writeFile('LICENSE', generateLICENSE(license), (err) =>
        err ? console.error(err) : console.log('LICENSE file created!')
        )

        const READMEContent = generateMarkdown(answers, license);
        
        fs.writeFile('README.md', READMEContent , (err) =>
        err ? console.error(err) : console.log('README.md file created!')
        )
    });
   
    
};


// call to initialize app
init();
