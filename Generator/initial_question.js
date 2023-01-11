// const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateHTML');
// const { builtinModules } = require('module');

function initialPrompt() {
  const initialQuestions = [
    {
      type: 'input',
      name: 'initial_question',
      message: 'Are you a manager of your team? (Type "yes" or "no")',
      validate: (answer) => {
        if (answer === "yes") return true;
        else if (answer === "no") {
          console.log("");
          console.log("You are not a manager, so you do not have right to run this program.");
          return process.exit();
        }
        else {
          console.log("");
          console.log("Please type 'yes' or 'no'!");
          return false;
        }
      }
    },  
  ]

  return initialQuestions;
}

module.exports = initialPrompt;