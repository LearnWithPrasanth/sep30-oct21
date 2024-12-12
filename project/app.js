// ********** SELECT ITEMS **********
const form = document.querySelector(".todo-form");
const alert = document.querySelector(".alert");
const todo = document.querySelector("#todo");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");

// ********** Edit ITEMS **********
let editElement;
let editFlag = false;
let editID;

// ********** EVENT LISTENERS **********
form.addEventListener("submit", addTodo);
clearBtn.addEventListener("click", clearTodos);
window.addEventListener("DOMContentLoaded", loadTodos);

// ********** FUNCTIONS **********
function addTodo(e) {
    e.preventDefault();
    const id = new Date().getTime().toString();
    const value = todo.value;

    if (value === "") {
        displayAlert("danger", "Please enter a value");
        return;
    }

    if (editFlag) {
        editElement.textContent = value;
        displayAlert("success", "Todo Edited");
        editFromLocalStorage(editID, value);
        resetToDefault();
        return;
    }

    let element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.classList.add("todo-item");
    element.setAttributeNode(attr);

    element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editTodo);
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteTodo);

    list.appendChild(element);
    container.classList.add("show-container");
    displayAlert("success", "Todo Added");
    addToLocalStorage(id, value);
    resetToDefault();
}

function editTodo(e) {
    editElement = e.currentTarget.parentElement.previousElementSibling;
    todo.value = editElement.textContent;
    submitBtn.textContent = "edit";
    editFlag = true;
    console.log(editElement);
    let element = e.currentTarget.parentElement.parentElement;
    editID = element.dataset.id;
}

function deleteTodo(e) {
    let element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);
    if (list.children.length === 0)
        container.classList.remove("show-container");
    displayAlert("danger", "todo deleted");
    deleteFromLocalStorage(element.dataset.id);
}

function clearTodos() {
    let todos = document.querySelectorAll(".todo-item");
    for (const todo of todos) {
        list.removeChild(todo);
    }
    container.classList.remove("show-container");
    displayAlert("danger", "all todos deleted");
    localStorage.removeItem("todos");
}

function displayAlert(classname, message) {
    alert.textContent = message;
    alert.classList.add(`alert-${classname}`);

    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${classname}`);
    }, 2000);
}

function resetToDefault() {
    todo.value = "";
    submitBtn.textContent = "submit";
    editFlag = false;
}

// ********** LOCAL STORAGE **********
function getFromLocalStorage() {
    let todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}

function addToLocalStorage(id, value) {
    let todos = getFromLocalStorage();
    let newTodo = { id, value }; // same as {id: id, value: value}
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteFromLocalStorage(id) {
    let todos = getFromLocalStorage();
    let updatedTodos = todos.filter((todo) => {
        if (todo.id !== id) {
            return todo;
        }
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

function editFromLocalStorage(id, value) {
    let todos = getFromLocalStorage();
    let updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
            todo.value = value;
        }
        return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

// ********** SETUP ITEMS **********
function loadTodos() {
    let todos = getFromLocalStorage();
    for (const todo of todos) {
        loadSingleTodo(todo.id, todo.value);
    }

    if (list.children.length > 0) container.classList.add("show-container");
}

function loadSingleTodo(id, value) {
    let element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.classList.add("todo-item");
    element.setAttributeNode(attr);

    element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editTodo);
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteTodo);

    list.appendChild(element);
}
