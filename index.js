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


function writeHTML() {
    fs.writeFile("./dist/index.html", generateHTML(), (err) => {
        if (err) throw err; 

        console.log("Your html has been saved successfully!");
    })
}


function generateHTML() {


    let cardHTML = "";


    for (let i = 0; i < employees.length; i++) {
        cardHTML += getEmployeeCardHTML(employees[i]);
    }


    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    
        <title>My Team</title>
    </head>
    <body>
        <header class="bg-danger text-white">
            <h1>My Team</h1>
        </header>
        <div class="container">
            <div class="row">
            </div>
        </div>
    </body>
    <style>
        header {
            text-align: center;
            padding: 30px;
            margin-bottom: 20px;
        }
    </style>
    </html>
    `;

    return html;
}
