import render from "./render.js"
import store,{ addTodo, deleteTodo,toggleCompleted } from "./store.js";
//custom event.....
window.addEventListener('todoschange',()=>{
  render();               //intially
 console.log("todoschanged   Fired.......")  
})
//store.todos=[];
//render();

//try to get store from localstorege
const storeLocalstorage=JSON.parse(localStorage.getItem("store"));
if(storeLocalstorage?.todos.length>0){
    store.todos=storeLocalstorage.todos;
}else{
    localStorage.setItem("store",JSON.stringify(store));
     render();
}
//form get
const form=document.querySelector('#form');
const todoTitleInput=document.querySelector('.todo-title-input');
form.addEventListener('submit',(event)=>{
     console.log("Todo subitted...")
     event.preventDefault();
     const todotitle=todoTitleInput.value;
        const newtodo={id:  crypto.randomUUID() ,  title:todotitle, completed:false};
       addTodo(newtodo);
     
});

const todos=document.querySelector('.todos');
todos.addEventListener('click',(e)=>{
    const target=e.target;
    if(target.classList.contains("delete-todo-button")){
        console.log("you clicked on cross button");
        const id=target.closest('.todo').dataset.id;
        console.log(id);
        deleteTodo(id);
    }
});

todos.addEventListener('change',(e)=>{
         const target=e.target;
         
    if(e.target.classList.contains("todo-checkbox")){
             const id=target.closest('.todo').dataset.id;
              const completed=target.checked;
                toggleCompleted(id,completed);
         }
})