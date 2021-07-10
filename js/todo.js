const toDoForm = document.getElementById("todo-form");
const toDoInfut = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

const handleTodoStatus = (event) => {
    const checking = event.target;
    const checkingTodo = event.target.parentElement.parentElement;
    const getId = event.target.parentElement.parentElement.id;
    const id = parseInt(getId)

    toDos.forEach(todo => {
      if (todo.id === id && checking.checked === true ) {
          checkingTodo.classList.add("todo-checked");
          todo.isChecked = "checked";
          
      } else if (todo.id === id && checking.checked === false ) {
          checkingTodo.classList.remove("todo-checked");
          todo.isChecked = "unChecked";
      }
      saveToDos();
    });
    
  }

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const label = document.createElement("label");
    label.innerText = newToDo.text;
    const checkBox = document.createElement("input");
    const button = document.createElement("button");
    button.innerText = "✖";
    button.classList.add("todo-btn");
    button.addEventListener("click", deleteToDo);
    li.appendChild(label);
    li.appendChild(button);
    label.appendChild(checkBox);
    label.classList.add("todo-value");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("todo-checking");
    checkBox.id = "todo-checking";
    checkBox.addEventListener('click', handleTodoStatus);
    toDoList.appendChild(li);


    const checking =newToDo.isChecked;
    if (checking === "checked") {
        checkBox.checked = true;
        li.classList.add("todo-checked");
      } else {
        checkBox.checked = false;
        li.classList.remove("todo-checked");
      }
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInfut.value;
    toDoInfut.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
        isChecked:"unChecked"
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDo = JSON.parse(savedToDos);
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}
