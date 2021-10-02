const fs = require('fs');
const inquirer = require('inquirer');

//Prompt User

const promptUser = () => {
return inquirer.prompt ([
    {
      type: 'input',
      name: 'Title of README',
      message: 'What is the title of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Provide a description about your project:'
    },
    {
      type: 'input',
      name: 'Table of Contents',
      message: 'Provide a table of contents to make it easy for users to find what they need:'
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide instructions and examples for use:'
    },
    {
      type: 'checkbox',
      name: 'licenses',
      message: 'What License do you need for this project?',
      choices: ['No license', 'MIT', 'GNU GPLv3', 'Apache', 'BSD3','ISC']
    },
    {
      type: 'input',
      name: 'Contributors',
      message: 'Who are the contributors of this project?'
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Write tests for your application and provide examples on how to run them:'
    },
    {
      type: 'input',
      name: 'Questions',
      message:'What is your email?'
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'What is your GitHub username?'
    },
    {
     type: 'input',
     name: 'Questions',
     message: 'How can you be reached for questions?'
    }
  ])
};
  


//This section is for user response//
const promptProject = () => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Title of README',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Provide a description about your project:'
      },
      {
        type: 'input',
        name: 'Table of Contents',
        message: 'Provide a table of contents to make it easy for users to find what they need:'
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use:'
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'What License do you need for this project?',
        choices: ['No license', 'MIT', 'GNU GPLv3', 'Apache', 'BSD3','ISC']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project:'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]);
  };


  promptUser()
  .then(answers => console.log(answers))
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers));

  // const fs = require('fs');
// const generatePage = require('./src/page-template');


// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
