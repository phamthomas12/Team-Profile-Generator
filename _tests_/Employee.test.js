const Employee = require("../lib/Employee");

describe("Employee", () => {

    describe("Initialisation", () => {

        it("Should set and get the initial values correctly", () => {
            const emp = new Employee("Jason", 1, "phamthomas12@gmail.com");
    
            expect(emp.getName()).toEqual("Jason");
            expect(emp.getId()).toEqual(1);
            expect(emp.getEmail()).toEqual("phamthomas12@gmail.com");
            expect(emp.getRole()).toEqual("Employee");
        });
    });
  });