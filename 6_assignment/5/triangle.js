let canvas = document.getElementById("triangle")
let ctx = canvas.getContext("2d")

let startButton = document.getElementById("start")
startButton.addEventListener("click", sierpinski)

function Point(x,y){
    this.x = x
    this.y = y
}

let triangle = [
    new Point(300,100),
    new Point(100,500),
    new Point(500,500)
]

function getRandomTriangleVertex(){
    return triangle[Math.floor(Math.random() * triangle.length)]
}

function getRandomPoint(){
    let x = Math.random() * 600
    let y = Math.random() * 600

    return new Point(x,y)
}

function middlePoint(A,B){
    let x = (A.x+B.x)/2
    let y = (A.y+B.y)/2
    return new Point(x,y)
}

function drawPixel(point){
    ctx.fillRect(point.x,point.y,1,1)
}

function sierpinski(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    let currentPoint = getRandomPoint()
    for (let i = 0; i < 50000; i++) {
        let newPoint = getRandomTriangleVertex()
        //calcola punto medio tra i due punti
        let middle = middlePoint(currentPoint,newPoint)
        drawPixel(middle)
        currentPoint = middle

    }
}