//  Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');




//  Create an array of questions for user input
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
        message: 'enter usage information:',
       
        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'enter install information:',
       
        
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'enter contribution:',
       
        
    },
    {
        type: 'input',
        name: 'instructions',
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

function writeToFile(fileName, data) {
    const {
        title,
        description,
        contribution,
        usage,
        installation,
        instructions,
        license,
        github,
        email
    } = data;

    const readmeContent = `
# ${title}

## Description
${description}

## Table of Contents
# Contribution
# Installation
# Usage

## Contribution
${contribution}

## Installation
${installation}

## Usage
${usage}


## Test Instructions
${instructions}

## License
This project is licensed under the ${license} license.

## Questions
For any questions, please feel free to reach out through my GitHub profile or via email:
- GitHub: ${github}
- Email: ${email}
`;

    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file has been generated successfully!');
        }
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
