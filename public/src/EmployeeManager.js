import { Employee } from "./Employee.js";
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employeeManager = [];
    }
    EmployeeManager.prototype.addEmployee = function (id, name, budget, email) {
        var user = new Employee(id, name, budget, email);
        this.employeeManager.push(user);
        this.showList();
    };
    EmployeeManager.prototype.deleteEmployee = function (id) {
        for (var i = 0; i < this.employeeManager.length; i++) {
            if (id === this.employeeManager[i].getid()) {
                this.employeeManager.splice(i, 1);
            }
        }
        console.log(this.employeeManager);
        this.showList();
    };
    EmployeeManager.prototype.showList = function () {
        var html = '';
        if (this.employeeManager.length == 0) {
            html += "<tr>";
            html += "<td colspan=\"6\" style=\"text-align: center\">No Data</td>";
            html += "</tr>";
        }
        else {
            this.employeeManager.forEach(function (employee, index) {
                html += "<tr>";
                html += "<td>".concat(index + 1, "</td>");
                html += "<td>".concat(employee.getid(), "</td>");
                html += "<td>".concat(employee.getname(), "</td>");
                html += "<td>".concat(employee.getbudget(), "</td>");
                html += "<td>".concat(employee.getemail(), "</td>");
                html += "<td><button value=\"".concat(employee.getid(), "\" id=\"delete-").concat(index, "\" class=\"btn btn-danger delete-employ\">DELETE</button></td>");
                html += "<td> <a href=\"#editEmployeeModal\" data-toggle=\"modal\"><i class=\"material-icons edit\" value=\"".concat(index, "\" data-toggle=\"tooltip\" title=\"Edit\">&#xE254;</i></a></td>");
                html += "</tr>";
            });
        }
        document.getElementById('list-product').innerHTML = html;
    };
    EmployeeManager.prototype.search = function (id) {
        for (var i = 0; i < this.employeeManager.length; i++) {
            if (id === this.employeeManager[i].getid()) {
                return this.employeeManager[i];
            }
        }
    };
    EmployeeManager.prototype.fixEmployee = function (index) {
        var data = this.employeeManager;
        document.getElementById('edit-id').value = data[index].id;
        document.getElementById('edit-name').value = data[index].name;
        document.getElementById('edit-budget').value = data[index].budget;
        document.getElementById('edit-email').value = data[index].email;
    };
    EmployeeManager.prototype.editEmployee = function (ID, newName, newEmail, newBudget) {
        var boolean = false;
        for (var i = 0; i < this.employeeManager.length; i++) {
            if (this.employeeManager[i].id === ID) {
                this.employeeManager[i].name = newName;
                this.employeeManager[i].email = newEmail;
                this.employeeManager[i].budget = newBudget;
                boolean = true;
            }
            else {
                boolean = false;
            }
        }
        if (boolean = true) {
            this.showList();
        }
    };
    return EmployeeManager;
}());
export { EmployeeManager };
//# sourceMappingURL=EmployeeManager.js.map