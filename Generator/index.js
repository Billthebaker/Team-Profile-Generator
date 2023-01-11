const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');
const initialPrompt = require('./initial_question');
const managerPrompt = require('./manager_questions');
const engineerPrompt = require('./engineer_questions');
const internPrompt = require('./intern_questions');

const initialQuestions = initialPrompt();
const managerQuestions = managerPrompt();
const engineerQuestions = engineerPrompt();
const internQuestions = internPrompt();
// console.log(initialQuestions);

//function to write HTML
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
  err ? console.error(err) : console.log("Success!"))
}

//function to initialize app
// function init() {
//   inquirer.prompt(initialQuestions)
//   .then(function(answers){
//     console.log(answers)
//    const content = generateHTML(answers)
//    writeToFile('index.html', content)
//   })
// }

function addManager() {
  return inquirer.prompt(managerQuestions);
}

function addEngineer(){
  return inquirer.prompt(engineerQuestions);
}

function addIntern() {
  return inquirer.prompt(internQuestions);
}

function addEmployee() {
  return inquirer.prompt(
    [
      {
        type: 'input',
        message: 'Do you want to add engineer or intern?',
        name: 'engineer_or_intern',
      }
    ]
  ).then(function (answers) {
    if (answers.engineer_or_intern === "engineer") return addEngineer();
    else if (answers.engineer_or_intern === "intern") return addIntern();
  })
}

function test() {
  return inquirer.prompt(initialQuestions)
  .then(addManager)
  .then(addEmployee)
}


// Function call to initialize app
// init();
test();
