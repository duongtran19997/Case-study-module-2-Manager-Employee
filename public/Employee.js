export class Employee {
    constructor(id, name, budget, email) {
        this._name = name;
        this._id = id;
        this._budget = budget;
        this._email = email;
    }
    getid() {
        return this._id;
    }
    setid(value) {
        this._id = value;
    }
    getname() {
        return this._name;
    }
    setname(value) {
        this._name = value;
    }
    getbudget() {
        return this._budget;
    }
    setbudget(value) {
        this._budget = value;
    }
    getemail() {
        return this._email;
    }
    setemail(value) {
        this._email = value;
    }
}
//# sourceMappingURL=Employee.js.map