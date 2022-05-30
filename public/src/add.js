import { EmployeeManager } from "./EmployeeManager.js";
var manager = new EmployeeManager();
manager.addEmployee('0007', 'Cristiano Ronaldo', 531000, 'Cr7@ManchesterUnited.com');
manager.addEmployee('0010', 'Lionel Messi', 1325000, 'M30@Barcelona.com');
manager.addEmployee('0011', 'Gareth Bale', 690000, 'B11@RealMadrid.com');
manager.addEmployee('0009', 'Ronaldo de Lima', 381000, 'R9@InterMilan.com');
manager.addEmployee('0013', 'Alessandro Nesta', 130000, 'AN13@AcMilan.com');
manager.showList();
var btn = document.getElementById('add');
btn.addEventListener("click", addEmployee);
function addEmployee() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var budget = document.getElementById('budget').value;
    var email = document.getElementById('email').value;
    manager.addEmployee(id, name, budget, email);
    getAllButtonDelete();
}
function getAllButtonDelete() {
    // let buttons = Array.from(document.getElementsByClassName('delete-employ'));
    // buttons.forEach(btn => {
    //     btn.addEventListener('click', function handleClick(event) {
    //         let Confirm = confirm('are you sure')
    //         if (Confirm) {
    //             let idEmployDelete = event.target.value;
    //             manager.deleteEmployee(idEmployDelete);
    //             getAllButtonDelete();
    //         }
    //     });
    // });
    var buttons = document.getElementsByClassName('delete-employ');
    var _loop_1 = function (i) {
        buttons[i].addEventListener('click', function () {
            var Confirm = confirm('are you sure');
            if (Confirm) {
                var idEmployDelete = buttons[i].getAttribute('value');
                manager.deleteEmployee(idEmployDelete);
                getAllButtonDelete();
            }
        });
    };
    for (var i = 0; i < buttons.length; i++) {
        _loop_1(i);
    }
}
getAllButtonDelete();
var search = document.getElementById('search');
search.addEventListener('click', searchEmployee);
function searchEmployee() {
    var html = '';
    var id = document.getElementById('search-id').value;
    var name = document.getElementById('search-name').value;
    var budget = document.getElementById('search-budget').value;
    var email = document.getElementById('search-email').value;
    var boolean = true;
    for (var i = 0; i < manager.employeeManager.length; i++) {
        if (manager.employeeManager[i].getid() == id ||
            manager.employeeManager[i].getname() == name ||
            manager.employeeManager[i].getbudget() == budget ||
            manager.employeeManager[i].getemail() == email) {
            html += "<tr>";
            html += "<td>".concat(i + 1, "</td>");
            html += "<td>".concat(manager.employeeManager[i].getid(), "</td>");
            html += "<td>".concat(manager.employeeManager[i].getname(), "</td>");
            html += "<td>".concat(manager.employeeManager[i].getbudget(), "</td>");
            html += "<td>".concat(manager.employeeManager[i].getemail(), "</td>");
            html += "<td> <a href=\"#editEmployeeModal\" data-toggle=\"modal\"><i class=\"material-icons edit\" data-toggle=\"tooltip\" title=\"Edit\">&#xE254;</i></a></td>";
            html += "<td><button value=\"".concat(manager.employeeManager[i].getid(), "\" id=\"delete-").concat(i, "\" class=\"btn btn-danger delete-employ\">DELETE</button>");
            html += "</tr>";
            console.log(html);
            boolean = false;
        }
        else {
            boolean = true;
        }
    }
    if (boolean) {
        html += "<tr>";
        html += "<td colspan=7 style=\"text-align: center\">No Data</td>";
        html += "</tr>";
    }
    document.getElementById('list-product').innerHTML = html;
}
function fixed() {
    var idEmployDelete;
    var buttons = document.getElementsByClassName('edit');
    var _loop_2 = function (i) {
        buttons[i].addEventListener('click', function () {
            idEmployDelete = buttons[i].getAttribute('value');
            manager.fixEmployee(idEmployDelete);
            fixed();
        });
    };
    for (var i = 0; i < buttons.length; i++) {
        _loop_2(i);
    }
    document.getElementById('save').addEventListener('click', function () {
        var ID = document.getElementById('edit-id').value;
        var newName = document.getElementById('edit-name').value;
        var newBudget = document.getElementById('edit-budget').value;
        var newEmail = document.getElementById('edit-email').value;
        manager.editEmployee(ID, newName, newEmail, newBudget);
    });
}
fixed();
function sort() {
    var sortBudget = document.getElementById('sortBudget');
    sortBudget.addEventListener('click', function () {
        manager.selectionSort();
        manager.showList();
    });
}
sort();
//# sourceMappingURL=add.js.map