var Employee = /** @class */ (function () {
    function Employee(id, name, budget, email) {
        this.name = name;
        this.id = id;
        this.budget = budget;
        this.email = email;
    }
    Employee.prototype.getid = function () {
        return this.id;
    };
    Employee.prototype.setid = function (value) {
        this.id = value;
    };
    Employee.prototype.getname = function () {
        return this.name;
    };
    Employee.prototype.setname = function (value) {
        this.name = value;
    };
    Employee.prototype.getbudget = function () {
        return this.budget;
    };
    Employee.prototype.setbudget = function (value) {
        this.budget = value;
    };
    Employee.prototype.getemail = function () {
        return this.email;
    };
    Employee.prototype.setemail = function (value) {
        this.email = value;
    };
    return Employee;
}());
export { Employee };
//# sourceMappingURL=Employee.js.map