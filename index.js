function init(){
    const inquirer = require('inquirer');
    const fs = require("fs");
    const path = require('path');
    const markdown = require('./utils/markdown');

    inquirer
    .prompt([
        { 
            type:"input",
            message: "What is the title of your project?",
            name:"title",
    }, {
            type:"input",
            message: "Give a description of your project",
            name:"description",
    }, {
            type:"input",
            message: "Provide Detailed Installation Instructions for your project",
            name:"installation",
    }, {
            type:"input",
            message: "What are the uses for your project?",
            name:"usage",
    }, {
            type:"input",
            message: "Which license would you like to use?",
            choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
            name:"license",
    },{
            type:"input",
            message: "How can others contribute to your project?",
            name:"contributing",
    }, {
            type:"input",
            message: "Briefly explain how to test your project",
            name:"tests",
    }, {
            type:"input",
            message: "Give instructions on how to submit questions about your project",
            name:"Questions",
    }
    ])
        .then((response) => {
            return fs.writeFileSync(path.join (process.cwd(), "ReadMe.md"), markdown(response));
        });
}

init();