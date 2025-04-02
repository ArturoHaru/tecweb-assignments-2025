
"use strict";

document.addEventListener("DOMContentLoaded", setupGame)


let resolution = 11
let board = []


let snake = []
let gameover = false
let apple = 0


let currentDirection = "right"

setInterval(update,100)


//input listening
document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight") {
        currentDirection = "right"
    }else if (event.key === "ArrowUp") {
        currentDirection = "up"
    }else if (event.key === "ArrowDown") {
        currentDirection = "down"
    }else if (event.key === "ArrowLeft") {
        currentDirection = "left"
    }
})


function position(currentPosition){
    let x = currentPosition%resolution
    let y = Math.floor(currentPosition/resolution)

    return {
        x: x,
        y: y,
        right: () => y*resolution + x + 1,
        up: () => (y - 1) *resolution + x,
        down: () => (y + 1)*resolution + x,
        left: () => y*resolution + x - 1
    }
}


function update(){

    let move = position(snake[0])

    if (currentDirection === "right") {
        move = move.right
    }else if (currentDirection === "up") {
        move = move.up
    }else if (currentDirection === "down") {
        move = move.down
    }else if (currentDirection === "left") {
        move = move.left
    }
        

    moveSnake(move)
    drawSnake()
}


function moveSnake(move){
    if(gameover) return

    for(let i = snake.length - 1; i > 0; i--){
        snake[i] = snake[i - 1]
    }

    let nextPosition = move()
    
    if (!hasCrossedBorder() && 
        !hasTouchedItSelf() &&
        nextPosition >= 0 && 
        nextPosition < resolution * resolution) {

        snake[0] = nextPosition
    }else{
        gameover = true
        alert("Game Over")
    }

    if(snake[0] === apple){
        snake.push(snake[snake.length - 1])
        board[apple].classList.toggle("food")
        apple = Math.floor(Math.random() * resolution * resolution)
        drawApple()
    }


}

function hasTouchedItSelf(){    

    if(snake.slice(2, snake.length).includes(snake[1])){
        return true
    }
    return false
}

function hasCrossedBorder(){
    return Math.abs(position(snake[0]).x - position(snake[2]).x) > 1
}


function drawSnake(){
    board[snake[0]].classList.add("snake-head")

    for (let i = 1; i < snake.length - 1; i++) {
        board[snake[i]].classList.add("snake-body")
    }

    board[snake[snake.length - 1]].classList.remove("snake-body")
    board[snake[snake.length - 1]].classList.remove("snake-head")
}

function drawApple(){
    board[apple].classList.add("food")
}

function setupGame(){
    let main = document.querySelector("main")
    let table = document.createElement("table")
    main.appendChild(table)

    //create table
    for (let i = 0; i < resolution; i++) {
        let tr = document.createElement("tr")
        for(let j = 0; j < resolution; j++){
            let td = document.createElement("td")
            tr.appendChild(td)
            board[i * resolution + j] = td

        }
        table.appendChild(tr)
    }

    //create snake
    let centerCell = Math.floor(resolution/2)
    
    snake[0] = centerCell*resolution + centerCell + 1
    snake[1] = centerCell*resolution + centerCell
    snake[2] = centerCell*resolution + centerCell - 1
    //clear tail
    snake[3] = centerCell*resolution + centerCell - 2

    //spawn apple

    do{
        apple = Math.floor(Math.random() * resolution * resolution)
    }while(snake.includes(apple))

    drawApple()
}
