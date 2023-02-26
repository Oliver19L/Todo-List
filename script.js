//Selectors
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

//Event Listener
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deletetask);

//Function
function addtodo(event) {
  event.preventDefault();

  //DIV
  // const tododiv = document.createElement("div");
  // tododiv.classList.add("todo");

  //LI
  const todoli = document.createElement("li");
  todoli.innerText = todoinput.value;
  todoli.classList.add("todo");
  //tododiv.appendChild(todoli);

  const divli = document.createElement("div");
  divli.classList.add("todo-item");
  todoli.appendChild(divli);

  //CHECK
  const completedbutto = document.createElement("button");
  completedbutto.innerHTML = '<i class= "fas fa-check"> </i>';
  completedbutto.classList.add("completed-button");
  divli.appendChild(completedbutto);
  // tododiv.appendChild(completedbutto);

  //TRASH
  const trashbutto = document.createElement("button");
  trashbutto.innerHTML = '<i class= "fas fa-trash"> </i>';
  trashbutto.classList.add("trash-button");
  divli.appendChild(trashbutto);
  // tododiv.appendChild(trashbutto);

  todolist.appendChild(todoli);

  //Clear input
  todoinput.value = "";
}

function deletetask(e) {
  const item = e.target;
  console.log(e.target);

  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    const tododiv = todo.parentElement;
    tododiv.classList.add("fall");
    tododiv.addEventListener("transitionend", () => tododiv.remove());
  }

  if (item.classList[0] === "completed-button") {
    const todo = item.parentElement;
    const tododiv = todo.parentElement;
    tododiv.classList.toggle("completed");
  }
}
