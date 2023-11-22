var {Student} = require("./closure")
let me = Student("Bryan", "1902316")
console.log(me("Bryan","214214"))
console.log(me("Bryan", "1902316"))
let Student = {
    name: "Bryan",
    major: "CompSci",
    courses: ["Chem", "Comp", "Math"],
    age: 100
}
function details(subj1, subj2, subj3){
    console.log(`${this.name} is a ${this.major} major and is ${this.age} years old`)
    console.log(`They are attending ${subj1}, ${subj2}, ${subj3}`)
}
details.call(Student, ...Student.courses)
details.apply(Student, Student.courses)