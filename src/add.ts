import {EmployeeManager} from "./EmployeeManager.js";

let manager = new EmployeeManager()
manager.addEmployee('0007', 'Cristiano Ronaldo', 531000, 'gg@gmail.com')
manager.addEmployee('0010', 'Lionel Messi', 1325000, 'gg@gmail.com')
manager.addEmployee('0011', 'Gareth Bale', 690000, 'gg@gmail.com')
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
    let id = (document.getElementById('search-id') as HTMLInputElement).value;
    let name = (document.getElementById('search-name') as HTMLInputElement).value;
    let budget = (document.getElementById('search-budget') as HTMLInputElement).value;
    let email = (document.getElementById('search-email') as HTMLInputElement).value;
    let boolean = true
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
            html +=`<td> <a href="#editEmployeeModal" data-toggle="modal"><i class="material-icons edit" data-toggle="tooltip" title="Edit">&#xE254;</i></a></td>`
            html += `<td><button value="${manager.employeeManager[i].getid()}" id="delete-${i}" class="btn btn-danger delete-employ">DELETE</button>`
            html += `</tr>`
            console.log(html)
            boolean=false
        }
        else{boolean=true
        }
    }
    if(boolean){
        html+=`<tr>`
        html+=`<td colspan=7 style="text-align: center">No Data</td>`
        html+=`</tr>`
    }
    document.getElementById('list-product').innerHTML = html;
}

function fixed(){
    let idEmployDelete
    let buttons = document.getElementsByClassName('edit');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',()=>{
                    idEmployDelete = buttons[i].getAttribute('value');
                    manager.fixEmployee(idEmployDelete);
                    fixed();
            }
        )
    }
    document.getElementById('save').addEventListener('click',()=>
    {
        let ID = (document.getElementById('edit-id') as HTMLInputElement).value;
        let newName = (document.getElementById('edit-name') as HTMLInputElement).value;
        let newBudget = (document.getElementById('edit-budget') as HTMLInputElement).value;
        let newEmail = (document.getElementById('edit-email') as HTMLInputElement).value;
        manager.editEmployee(ID,newName,newEmail,newBudget)
    })

}
fixed()