
//this information is made up
let movie = {
    title: "The Matrix",
    director: {
        firstName: "Lana",
        lastName: "Wachowski",
        birthYear: 1965,
        deathYear: 1999
    },
    year: 1999
}

movie["is part of a saga"] = true

movie.describe = function() {
    console.log(`${this.title} (${this.year}) by ${this.director.firstName} ${this.director.lastName}, born in ${this.director.birthYear} and died in ${this.director.deathYear}`)
}

movie.describe()

delete movie["is part of a saga"]

function Triology(title, movie1, movie2, movie3) {
    this.title = title
    this.movies = [movie1, movie2, movie3]
}

let matrix2 = {
    title: "Matrix 2",
    director: {
        firstName: "Lana",
        lastName: "Wachowski",
        birthYear: 1965,
        deathYear: 1999
    },
    year: 1999
}

let matrix3 = {
    title: "Matrix 3",
    director: {
        firstName: "Lana",
        lastName: "Wachowski",
        birthYear: 1965,
        deathYear: 1999
    },
    year: 1999
}

let matrix = new Triology("The Matrix", movie, matrix2, matrix3)
