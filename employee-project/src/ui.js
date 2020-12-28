export class UI {

    constructor() {
        this.form = document.getElementById("employee-form");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
        this.employeeList = document.getElementById("employees");
        this.btnUpdate = document.getElementById("update");
    }

    setAllEmployeeToUI(employees) {
        this.employeeList.innerHTML = "";
        employees.forEach(employee => this.addEmployeeToUI(employee));
    }

    addEmployeeToUI(employee) {

        this.employeeList.innerHTML += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td>
                <td><a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
            </tr>`;
    }

    deleteEmployeeFromUI(btnDeleteEmployee) {
        btnDeleteEmployee.parentElement.parentElement.remove();
    }

    // btnUpdateEmployee => tr ler içindeki en son basılan güncelleme butonu
    toggleUpdateButtonDisplay(btnUpdateEmployee) {

        if (this.btnUpdate.style.display === "none") {
            this.btnUpdate.style.display = "block"
            this.setEmployeeToFormInputs(btnUpdateEmployee);
        } else {
            this.btnUpdate.style.display = "none";
            clearInputs();
        }
    }

    setEmployeeToFormInputs(btnUpdateEmployee) {
        const tdSalary = btnUpdateEmployee.parentElement.previousElementSibling.previousElementSibling;
        const tdDepartment = tdSalary.previousElementSibling;
        const tdName = tdDepartment.previousElementSibling;

        this.nameInput.value = tdName.textContent;
        this.departmentInput.value = tdDepartment.textContent;
        this.salaryInput.value = tdSalary.textContent;
    }

    updateEmployeeOnUI(employee, btnUpdateEmployee) {
        const tdId = btnUpdateEmployee.parentElement.previousElementSibling;
        const tdSalary = tdId.previousElementSibling;
        const tdDepartment = tdSalary.previousElementSibling;
        const tdName = tdDepartment.previousElementSibling;

        tdId.textContent = employee.id;
        tdSalary.textContent = employee.salary;
        tdDepartment.textContent = employee.department;
        tdName.textContent = employee.name;
    }

    clearInputs() {
        this.form.reset();
    }

}