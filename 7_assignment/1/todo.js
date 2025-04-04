"use strict";

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#todo-add-button").addEventListener("click", addTodo)

    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault()
        addTodo()
    })

    document.querySelector("#todo-list").addEventListener("contextmenu", function(event){
        event.preventDefault()
    })

    updateList()
})


let todoArray = []

function Todo(todoText){
    this.text = todoText
    this.done = false
}


function addTodo() {
    let todoText = document.getElementById("todo-input").value;
    console.log(todoText)
    
    if(todoText){
        let todo = new Todo(todoText)
        storeItem(todo)
        updateList()
    }
}


function store(){
    let todoArrayJson = JSON.stringify(todoArray)
    localStorage.setItem("todos", todoArrayJson)
}

function storeItem(todoObject){
    if(todoArray){
        todoArray.push(todoObject)
    }else{
        todoArray = [todoObject]
    }
    store()
}

function loadArrayFromStorage(){
    let jsonTodos = localStorage.getItem("todos")
    todoArray = JSON.parse(jsonTodos)
}

function getListItems(){
    if(!todoArray) return []

    let listItemArray = []
    for(let i = 0; i<todoArray.length; i++){
        let listItem = document.createElement("li")

        listItem.innerHTML = todoArray[i].text
        listItem.id = i
        
        if(todoArray[i].done) {
            listItem.classList.add("done")
        }

        //add behaviour
        listItem.addEventListener("click", function(){
            let i = this.id
            todoArray[i].done = !todoArray[i].done
            store()
            updateList()
        })
        listItem.addEventListener("contextmenu", function(){
            let i = this.id
            todoArray.splice(i, 1)
            store()
            updateList()
        })

        listItemArray.push(listItem)
    }
    return listItemArray    
}

function updateHTMLList(items){
    let list = document.getElementById("todo-list")
    list.innerHTML = ""
    list.append(...items)
}

function updateList(){
    loadArrayFromStorage()
    let listItems = getListItems()
    updateHTMLList(listItems)
}











