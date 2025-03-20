let studentName = "Arturo"
let age = 24
let isEnrolled = true

console.log(`${studentName} ${typeof studentName}`)
console.log(`${age} ${typeof age}`)
console.log(`${isEnrolled} ${typeof isEnrolled}`)


function studentInfo(studentName, age, course = "Web Technologies", isEnrolled){
    console.log(`${studentName} (${age}) is ${isEnrolled? "" : "not "}enrolled in ${course} course.`)
}

studentInfo("Arturo", 24)
studentInfo("Arturo", 24, "Web Technologies", true)