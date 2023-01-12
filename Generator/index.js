const inquirer = require('inquirer');
const fs = require('fs');
//const generateHTML = require('./utils/generateHTML');
const initialPrompt = require('./initial_question');
const managerPrompt = require('./manager_questions');
const generateHTML = require('./utils/generateHTML');
const initialQuestions = initialPrompt();
const managerQuestions = managerPrompt();

//function to write HTML
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!"))

}




function addManager() {
  return inquirer.prompt(managerQuestions);
}

function addEngineer() {
  return inquirer.prompt(
    [{
      type: 'input',
      message: "\n What's your name?",
      name: 'engineer_name',
    },
    {
      type: 'input',
      message: "What is your id number?",
      name: 'engineer_id'
    },
    {
      type: 'input',
      message: "What is your Email address?",
      name: 'engineer_email'
    },
    {
      type: 'input',
      message: "What is your github username?",
      name: 'engineer_git'
    },
    {
      type: 'input',
      message: 'Do you want to add more employees? (Type "yes" or "no")',
      name: 'want_employee',
    }
    ]
  ).then(function (answers) {
    console.log(answers)
    if (answers.want_employee === "yes") return addEmployee();
    else if (answers.want_employee === "no") return answers      //return managerHTML()
  })
}

function addIntern() {
  return inquirer.prompt([
    {
      type: 'input',
      message: "\n What's your name?",
      name: 'intern_name',
    },
    {
      type: 'input',
      message: "What is your id number?",
      name: 'intern_id'
    },
    {
      type: 'input',
      message: "What is your Email address?",
      name: 'intern_email'
    },
    {
      type: 'input',
      message: "What is the school that you currently attend?",
      name: 'intern_git'
    },
    {
      type: 'input',
      message: 'Do you want to add more employees? (Type "yes" or "no")',
      name: 'want_employee_int',
    }
  ]).then(function (answers) {
    if (answers.want_employee_int === "yes") return addEmployee()
    else if (answers.want_employee_int === "no") return answers
  })
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
    
    .then(function(answers){
      console.log(answers)
      const content = generateHTML(answers)
      writeToFile('index.html', content)
    })
}

module.exports = addEmployee
module.exports = addIntern
module.exports = addEngineer
module.exports = addManager
module.exports = test

test();
