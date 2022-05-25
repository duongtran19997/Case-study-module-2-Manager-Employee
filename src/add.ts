import {EmployeeManager} from "./EmployeeManager.js";

let manager = new EmployeeManager()
manager.addEmployee('1102', 'duong', 2000, 'gg@gmail.com')
manager.addEmployee('3212', 'duong', 2000, 'gg@gmail.com')
manager.addEmployee('1122', 'duong', 2000, 'gg@gmail.com')
manager.showList()
let btn = document.getElementById('add') as HTMLButtonElement;

btn.addEventListener("click", addEmployee)

function addEmployee() {
    let id = (document.getElementById('id') as HTMLInputElement).value;
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let budget = (document.getElementById('budget') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    manager.addEmployee(id, name, budget, email)
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
    let buttons = document.getElementsByClassName('delete-employ');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',()=>{
            let Confirm = confirm('are you sure')
            if (Confirm) {
                            let idEmployDelete = buttons[i].getAttribute('value');
                            manager.deleteEmployee(idEmployDelete);
                            getAllButtonDelete();
                        }
            }
        )
    }
}
getAllButtonDelete();

let search= document.getElementById('search') as HTMLButtonElement
search.addEventListener('click',searchEmployee)
function searchEmployee() {
    let html=''
    let id = (document.getElementById('id') as HTMLInputElement).value;
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let budget = (document.getElementById('id') as HTMLInputElement).value;
    let email = (document.getElementById('id') as HTMLInputElement).value;
    for (let i = 0; i < manager.employeeManager.length; i++) {
        if(
        manager.employeeManager[i].getid()   == id||
            manager.employeeManager[i].getname()   == name||
            manager.employeeManager[i].getbudget()   == budget||
            manager.employeeManager[i].getemail()   == email
    ){

            html += `<tr>`
            html += `<td>${i + 1}</td>`
            html += `<td>${manager.employeeManager[i].getid()}</td>`
            html += `<td>${manager.employeeManager[i].getname()}</td>`
            html += `<td>${manager.employeeManager[i].getbudget()}</td>`
            html += `<td>${manager.employeeManager[i].getemail()}</td>`
            html += `<td><button onclick="" id="fixed${i}" class="btn btn-warning">FIXED</button>`
            html += `<td><button value="${manager.employeeManager[i].getid()}" id="delete-${i}" class="btn btn-danger delete-employ">DELETE</button>`
            html += `</tr>`
            console.log(html)
        }
        else{console.log(2)
        html+=`<tr>`
            html+=`<td colspan=7 style="text-align: center">No Data</td>`
            html+=`</tr>`
        }
        document.getElementById('list-product').innerHTML = html;
    }
}
