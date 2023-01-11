function internPrompt() {
    const internQuestions = [
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
        }

    ]

    return internQuestions;
}

module.exports = internPrompt;