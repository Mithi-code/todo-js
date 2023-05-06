// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event handlers/ listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);

// functions

function addTodo(e) {
  //prevent default
  e.preventDefault();

  //creating a list container with checkbox and delete button
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  const completedTodo = document.createElement("button");
  completedTodo.innerHTML = '<i class="fas fa-check"></i>';
  completedTodo.classList.add("complete-btn");
  todoDiv.appendChild(completedTodo);
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // append to list
  todoList.appendChild(todoDiv);
  // input field clear
  todoInput.value = "";
}

function checkDelete(e) {
  const item = e.target;
  //delete
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //check mark

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// saving data local storage
