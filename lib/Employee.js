class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getId = () => this.id;
  getName = () => this.name;
  getEmail = () => this.email;
  getRole = () => "Employee";
}

module.exports = Employee;
