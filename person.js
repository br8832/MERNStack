let person={
    name: "Bryan",
    dob:"MM/DD/YYYY",
    age: 1000
}
//
let student = Object.create(person)
student.studentid="182390182"
student.major="CompSci"
student.details=function(){
    console.log("%s was born %s, is %d years old, and a %s student with id %s",this.name,this.dob,this.age,this.major,this.studentid)
}
student.details()
//
let jobs ={
    jobtitle: "software engineer",
    salary: 80000,
    location: "United States"
}
student.salary=0
//
let assignObj = {}
assignObj=Object.assign(assignObj,student,jobs)
console.log(assignObj)
//
let nullProto = Object.create(null)