"use strict";

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#todo-add-button").addEventListener("click", addTodo)

    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault()
        addTodo()
    })    
})


function Todo(todoText){
    let newTodo = document.createElement("li")
    newTodo.innerHTML = todoText
    newTodo.addEventListener("click", function(){
        this.classList.toggle("done")
    })
    newTodo.addEventListener("dblclick", function(){
        this.remove()
    })
    return newTodo
}

function addTodo() {
    let todo = document.getElementById("todo-input").value;
    console.log(todo)
    
    if(todo){
        let newTodo = new Todo(todo)
        
        document.getElementById("todo-list").appendChild(newTodo)
    }
}









