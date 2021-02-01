const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);

    this.github = github;
  }

  getRole = () => "Engineer";
  getGithub = () => this.github;
}

module.exports = Engineer;
