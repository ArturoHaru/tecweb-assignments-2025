"use strict";

let board = []

let player_1 = "❌"
let player_2 = "🔵"

let turn = 0

let gameover = false;

let currentPlayerTurn = document.createElement("h1")
 
let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function currentPlayer(){
    return turn % 2 == 0 ? player_1 : player_2
}

function selectCell(){
    if(gameover) return

    if(!this.innerHTML){
        this.innerHTML = currentPlayer()
        if(checkWin()){
            alert(`${currentPlayer()} won`)
            gameover = true
        }
            
        turn++

        if(turn === 9)
            alert("Draw")
    }
    currentPlayerTurn.innerHTML = "Current Player " + currentPlayer()
}


function checkWin(){
    
    let player = currentPlayer()

    for (let j = 0; j < combinations.length; j++) 
    {
        let i = 0
        for(i = 0; i <3; i++){
            if (board[combinations[j][i]].innerHTML !== player) {
                break
            }
        }
        if(i == 3)
            return true
    };
    return false
}

function setupGame(id){
    let main = document.querySelector("main")
    let table = document.createElement("table")
    
    main.appendChild(table)

    //add rows and columns
    let caselle = []
    for (let i = 0; i < 3; i++) {
        caselle[i] = document.createElement("tr")
        for(let j = 0; j < 3; j++){
            let casella = document.createElement("td")
            casella.addEventListener("click", selectCell)
            casella.id = i*3 + j //indice matriciale convertito in array
            caselle[i].append(casella)
            board[i*3+j] = casella
        }
        table.appendChild(caselle[i])
    }

    document.body.appendChild(currentPlayerTurn)
    currentPlayerTurn.innerHTML = "Current Player " + player_1
    
}


function showDebug(){
    for (let i = 0; i < 9; i++){
        board[i].innerHTML = board[i].id
    }
}
