import store from "./store.js";
function render(){
 console.log(store); 
   const todos=document.querySelector('.todos');
     const todoElement=store.todos.map( (todo)=> 
    `<li class="todo" data-id=${todo.id}>
    <span class="todo-title ${todo.completed?"completed" : ""}">${todo.title}</span>
    <div class="toggle-delete">
        <input type="checkbox" name="completed" class="todo-checkbox"${ todo.completed ? "checked" : "" }>
        <button class="delete-todo-button">X</button>
    </div>
 </li>`
 ).join("");
 todos.innerHTML=todoElement;

}

export default render;