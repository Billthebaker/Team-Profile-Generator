const addEmployee = require(".");

function engineerPrompt() {
    const engineerQuestions = [
        {
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
        },
        {
            validate: (answer) => {
                if (answer === "yes") return addEmployee;
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

    return engineerQuestions;
}

module.exports = engineerPrompt;