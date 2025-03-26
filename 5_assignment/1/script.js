"use strict"; 

function Person(first_name, last_name){
    this.first_name = first_name
    this.last_name = last_name
}

let mario = new Person("Mario", "Mario")
let luigi = new Person("Luigi", "Mario")

Person.prototype.greet = function(){
    console.log(`Hello, I'm  ${this.first_name} ${this.last_name}`)
}

mario.greet()
luigi.greet()

function Student(first_name, last_name, degreeProgram){
    Person.call(this, first_name, last_name)
    this.degreeProgram = degreeProgram
}

Student.prototype = Object.create(Person.prototype)


let arturo = new Student("Arturo", "Gagliardi", "Computer Science")
let francesca = new Student("Francesca", "Gagliardi", "Computer Science")

arturo.greet()
francesca.greet()

Student.prototype.greet = function(){
    console.log(`Hello! I’m ${this.first_name} ${this.last_name} and I’m a ${this.degreeProgram} student`)
}

arturo.greet()
mario.greet()