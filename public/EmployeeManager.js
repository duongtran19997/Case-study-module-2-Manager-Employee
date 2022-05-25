import { Employee } from "./Employee.js";
export class EmployeeManager {
    constructor() {
        this.employeeManager = [];
    }
    addEmployee(id, name, budget, email) {
        let user = new Employee(id, name, budget, email);
        this.employeeManager.push(user);
        this.showList();
    }
    deleteEmployee(id) {
        alert('da xoa');
        for (let i = 0; i < this.employeeManager.length; i++) {
            if (id === this.employeeManager[i].getid()) {
                this.employeeManager.splice(i, 1);
            }
        }
        console.log(this.employeeManager);
        this.showList();
    }
    showList() {
        let html = '';
        if (this.employeeManager.length == 0) {
            html += `<tr>`;
            html += `<td colspan="6" style="text-align: center">No Data</td>`;
            html += `</tr>`;
        }
        else {
            this.employeeManager.forEach((employee, index) => {
                html += `<tr>`;
                html += `<td>${index + 1}</td>`;
                html += `<td>${employee.getid()}</td>`;
                html += `<td>${employee.getname()}</td>`;
                html += `<td>${employee.getbudget()}</td>`;
                html += `<td>${employee.getemail()}</td>`;
                html += `<td><button id="fixed${index}" class="btn btn-warning edit" >FIXED</button></td>`;
                html += `<td><button value="${employee.getid()}" id="delete-${index}" class="btn btn-danger delete-employ">DELETE</button></td>`;
                html += `<td> <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a></td>`;
                html += `</tr>`;
            });
        }
        document.getElementById('list-product').innerHTML = html;
    }
    search(id) {
        for (let i = 0; i < this.employeeManager.length; i++) {
            if (id === this.employeeManager[i].getid()) {
                return this.employeeManager[i];
            }
        }
    }
}
//# sourceMappingURL=EmployeeManager.js.map