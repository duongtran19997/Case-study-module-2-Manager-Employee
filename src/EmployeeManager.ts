import {Employee} from "./Employee.js";

export class EmployeeManager {
    employeeManager: Employee[] = []

    constructor() {
    }

    addEmployee(id, name, budget, email) {
        let user = new Employee(id, name, budget, email)
        this.employeeManager.push(user)
        this.showList()
    }

    deleteEmployee(id) {
        for (let i = 0; i < this.employeeManager.length; i++) {
            if (id === this.employeeManager[i].getid()) {
                this.employeeManager.splice(i, 1)
            }
        }
        console.log(this.employeeManager);
        this.showList()
    }

    showList() {
        let html: string = '';
        if (this.employeeManager.length == 0) {
            html += `<tr>`
            html += `<td colspan="6" style="text-align: center">No Data</td>`
            html += `</tr>`
        } else {
            this.employeeManager.forEach((employee, index) => {
                html += `<tr>`
                html += `<td>${index + 1}</td>`
                html += `<td>${employee.getid()}</td>`
                html += `<td>${employee.getname()}</td>`
                html += `<td>${employee.getbudget()}</td>`
                html += `<td>${employee.getemail()}</td>`
                html += `<td><button value="${employee.getid()}" id="delete-${index}" class="btn btn-danger delete-employ">DELETE</button></td>`
                html += `<td> <a href="#editEmployeeModal" data-toggle="modal"><i class="material-icons edit" value="${index}" data-toggle="tooltip" title="Edit">&#xE254;</i></a></td>`
                html += `</tr>`
            })
        }
        document.getElementById('list-product').innerHTML = html;
    }


    search(id) {
        for (let i = 0; i < this.employeeManager.length; i++) {
            if (id === this.employeeManager[i].getid()) {
                return this.employeeManager[i]
            }
        }
    }

    fixEmployee(index) {
        let data = this.employeeManager;
        (document.getElementById('edit-id') as HTMLInputElement).value = data[index].id;
        (document.getElementById('edit-name') as HTMLInputElement).value = data[index].name;
        (document.getElementById('edit-budget') as HTMLInputElement).value = data[index].budget;
        (document.getElementById('edit-email') as HTMLInputElement).value = data[index].email;
    }

    editEmployee(ID, newName, newEmail, newBudget) {
        let boolean = false;
        for (let i = 0; i < this.employeeManager.length; i++) {
            if (this.employeeManager[i].id === ID) {
                this.employeeManager[i].name = newName
                this.employeeManager[i].email = newEmail
                this.employeeManager[i].budget = newBudget
                boolean = true
            } else {
                boolean = false
            }
        }
        if (boolean = true) {
            this.showList()
        }
    }

    selectionSort(){
        let currentEmployeeNewIndex
        for (let i = 0; i < this.employeeManager.length; i++) {
            currentEmployeeNewIndex=i;
            for (let j = i+1; j < this.employeeManager.length; j++) {
                if(this.employeeManager[currentEmployeeNewIndex].budget<this.employeeManager[j].budget){
                    currentEmployeeNewIndex= j
                }
            }
            if(i!=currentEmployeeNewIndex){
                let temp = this.employeeManager[i]
                this.employeeManager[i]=this.employeeManager[currentEmployeeNewIndex]
                this.employeeManager[currentEmployeeNewIndex]=temp
            }
        }
        return this.employeeManager
    }
}