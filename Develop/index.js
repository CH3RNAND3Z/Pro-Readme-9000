// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
    ]);
  };

// Function to write README file and initialize app
const init = async () => {
    try {
      const answers = await questions();
      const readme = generateMarkdown(answers);
      fs.writeFileSync('README.md', readme);
      console.log('README.md file generated successfully!');
    } catch (err) {
      console.log(err);
    }
  };
// Function call to initialize app
init();
