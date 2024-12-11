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
    resetToDefault();
}

function editTodo(e) {
    editElement = e.currentTarget.parentElement.previousElementSibling;
    todo.value = editElement.textContent;
    submitBtn.textContent = "edit";
    editFlag = true;
    console.log(editElement);
}

function deleteTodo(e) {
    let element = e.currentTarget.parentElement.parentElement;

    list.removeChild(element);
    if (list.children.length === 0)
        container.classList.remove("show-container");
    displayAlert("danger", "todo deleted");
}

function clearTodos() {
    let todos = document.querySelectorAll(".todo-item");
    for (const todo of todos) {
        list.removeChild(todo);
    }
    container.classList.remove("show-container");
    displayAlert("danger", "all todos deleted");
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

// ********** SETUP ITEMS **********
