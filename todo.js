const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodos(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newID = toDos.length + 1;
  span.innerText = text;
  delBtn.innerText = "❌";
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newID;
  toDoList.appendChild(li);
  const toDosObj = {
    text: text,
    id: newID,
  };
  toDos.push(toDosObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodos(currentValue);
  toDoInput.value = "";
}

function loadTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintTodos(toDo.text);
    });
  }
}

function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

/*const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");*/
