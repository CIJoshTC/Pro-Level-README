// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');




// TODO: Create an array of questions for user input
//create object inside of array
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what would you like to name the project?',
       
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
       
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
       
        
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
           
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
           
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
          
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file has been generated successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
