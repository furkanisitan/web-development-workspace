const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addTodo);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
}

// --------- Load Todos ---------

function loadAllTodosToUI() {
    getTodosFromStorage().forEach(function (todo) { addTodoToUI(todo); })
}

function getTodosFromStorage() {
    return localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos"));
}

// --------- Add Todo ---------

function addTodo(e) {

    e.preventDefault();

    const newTodo = todoInput.value.trim();
    if (newTodo === "")
        showAlert("danger", "Please enter a todo.");
    else if (isExistTodoOnStorage(newTodo))
        showAlert("danger", "The same todo already exists!");
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo has been successfully added.");
    }
    form.reset();
}

function addTodoToUI(newTodo) {

    /*
    <li class="list-group-item d-flex justify-content-between">
        Todo 1
        <a href="#" class="delete-item"><i class="fa fa-remove"></i></a>
    </li> 
    */

    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fas fa-times'></i>";


    // Adding Text Node
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // Adding List Item to Todo List
    todoList.appendChild(listItem);
}

function isExistTodoOnStorage(todo) {
    return getTodosFromStorage()?.includes(todo);
}

function addTodoToStorage(newTodo) {

    const todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// --------- Delete Todo ---------

function deleteTodo(e) {

    if (e.target.className === "fas fa-times") {
        const liTodo = e.target.parentElement.parentElement;
        deleteTodoFromUI(liTodo);
        deleteTodoFromStorage(liTodo);
        showAlert("success", "Todo has been successfully removed.");
    }

}

function deleteTodoFromUI(liTodo) {
    liTodo.remove();
}

function deleteTodoFromStorage(liTodo) {

    const deleteTodo = liTodo.textContent
    const todos = getTodosFromStorage();
    const todoIndex = todos.findIndex(deleteTodo)
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// --------- Filter Todo ---------

function filterTodos(e) {

    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        const display = text.indexOf(filterValue) === -1 ? "none !important" : "block";
        listItem.setAttribute("style", `display: ${display}`);
    });
}

// --------- Clear Todos ---------

function clearAllTodos(e) {

    if (confirm("Are you sure you want to delete all?")) {

        // todoList.innerHTML = ""; // slow
        while (todoList.firstElementChild != null)
            todoList.removeChild(todoList.firstElementChild);

        localStorage.removeItem("todos");
    }
}

function showAlert(type, message) {

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    // setTimeout
    setTimeout(function () { alert.remove(); }, 1000);
}