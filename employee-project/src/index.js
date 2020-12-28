import { Request } from "./request.js"
import { UI } from "./ui.js"

const form = document.getElementById("employee-form");
const employeeList = document.getElementById("employees");
const btnUpdate = document.getElementById("update");

const request = new Request("http://localhost:3000/employees/");
const ui = new UI();

// tr ler içindeki en son basılan güncelleme butonunun bilgisini tutar
let updateState = null;

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);
    employeeList.addEventListener("click", updateOrDeleteEmployee);
    btnUpdate.addEventListener("click", updateEmployee)
}

function getAllEmployees() {

    request.get()
        .then(employees => ui.setAllEmployeeToUI(employees))
        .catch(err => console.error(err));
}

function addEmployee(e) {

    const formData = Object.fromEntries((new FormData(form)).entries());

    if (formData.name === "" || formData.department === "" || formData.salary === "")
        alert("Please enter all fields.")
    else {
        request.post(formData)
            .then(employee => {
                ui.addEmployeeToUI(employee);
                ui.clearInputs();
            })
            .catch(err => console.error(err));
    }

    e.preventDefault();
}

function updateOrDeleteEmployee(e) {

    if (e.target.id === "delete-employee")
        deleteEmployee(e.target);
    else if (e.target.id === "update-employee")
        updateEmployeeController(e.target);

}

function deleteEmployee(btnDeleteEmployee) {

    const id = btnDeleteEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;
    request.delete(id)
        .then(res => {
            ui.deleteEmployeeFromUI(btnDeleteEmployee);
            alert(res);
        })
        .catch(err => console.error(err));
}

function updateEmployeeController(btnUpdateEmployee) {
    ui.toggleUpdateButtonDisplay(btnUpdateEmployee);
    updateState = updateState === null ? btnUpdateEmployee : null;
}

function updateEmployee() {

    if (updateState === null) return;

    const formData = Object.fromEntries((new FormData(form)).entries());
    if (formData.name === "" || formData.department === "" || formData.salary === "")
        alert("Please enter all fields.")
    else {
        const id = updateState.parentElement.previousElementSibling.textContent;
        request.put(id, formData)
            .then(employee => {
                ui.updateEmployeeOnUI(employee, updateState);
                ui.clearInputs();
            })
            .catch(err => console.error(err));
    }

}