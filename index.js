const fs = require("fs");
const inquirer = require("inquirer");


const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


employees = [];
currentEmployeeID = 1;

inquirer.prompt([
    { type: "input", name: "name", message: "What is the manager's name?" },
    { type: "input", name: "email", message: "What is the manager's email?" },
    { type: "number", name: "office", message: "What is the manager's direct office number?" }
]).then(answers => {

    employees.push(new Manager(
        answers.name,
        grabID(),
        answers.email,
        answers.office
    ));

    inquirer.prompt([
        { type: "list", name: "type", message: "What type of employee would you like to add?", choices: ["Engineer", "Intern"] }
    ]).then(answers => {

    });
});
function grabID() {
    currentEmployeeID += 1;
    return currentEmployeeID - 1;
}