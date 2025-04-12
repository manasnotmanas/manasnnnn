const input = document.getElementById("userInput");
const todoUL= document.getElementById("todoUL")
const lists = document.querySelector(".lists")
const add = document.getElementById("addButton")
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}
add.addEventListener("click",(e)=>
{
    e.preventDefault()
    addTodo()
})

function addTodo(todo){
    let todotext = input.value.trim();
    if(todo) {
        todotext = todo.text
    }
    if (!todotext) {
      alert("Please write down a task");
      return;
    }
    const todoEL = document.createElement("li")
    todoEL.innerHTML = `
      
        
        <span id="spantext">${todotext}</span>
      
      
      `;
  
    todoUL.appendChild(todoEL);
    input.value = "";

    

todoEL.addEventListener("click",()=>{
    todoEL.classList.toggle("completed")
    updateLS()
})
   
todoEL.addEventListener('contextmenu', (e) => {
    e.preventDefault()

    todoEL.remove()
    updateLS()
}) 
updateLS()

}
function updateLS() {
    todoEl = document.querySelectorAll('li')

    const todos = []

    todoEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}





