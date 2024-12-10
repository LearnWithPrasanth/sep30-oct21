// ********** SELECT ITEMS **********
const form = document.querySelector(".todo-form");
const alert = document.querySelector(".alert");
const todo = document.querySelector("#todo");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");

// ********** Edit ITEMS **********

// ********** EVENT LISTENERS **********
form.addEventListener("submit", addTodo);

// ********** FUNCTIONS **********
function addTodo(e) {
    e.preventDefault();
    const id = new Date().getTime().toString();
    const value = todo.value;

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

    list.appendChild(element);
    container.classList.add("show-container");
}

// ********** LOCAL STORAGE **********

// ********** SETUP ITEMS **********
