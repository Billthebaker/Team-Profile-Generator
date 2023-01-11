function managerPrompt() {
    const managerQuestions = [
        {
            type: 'input',
            message: "\n What's your name?",
            name: 'manager_name',
        },
        {
            type: 'input',
            message: "What is your office number?",
            name: 'manager_office'
        },
        {
            type: 'input',
            message: 'Do you want to add your employee? (Type "yes" or "no")',
            name: 'want_employee',
            validate: (answer) => {
                if (answer === "yes") return true;
                else if (answer === "no") {
                  console.log("");
                  console.log("Good bye");
                  return process.exit();
                }
                else {
                  console.log("");
                  console.log("Please type 'yes' or 'no'!");
                  return false;
                }
              }
        }
    ]

    return managerQuestions;
}

module.exports = managerPrompt;