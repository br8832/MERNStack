console.log(varValue) 
console.log(typeof varValue)
console.log("before declaring")


var varValue = "String"

console.log(varValue)
console.log(typeof varValue) 

varValue = 1  

console.log(varValue)
console.log(typeof varValue) 

varValue = 1.1 

console.log(varValue)
console.log(typeof varValue)

varValue = true

console.log(varValue)
console.log(typeof varValue)

var person = {
    name : "Bryan",
    family : {
        father: "",
        mother: "mother",
        siblings: ["one sibling", "two sibling"]
    }
}

console.log(person)

varValue = person
console.log(typeof varValue)

varValue = {}

console.log(varValue) 
console.log(typeof varValue)

varValue = undefined

console.log(varValue) 
console.log(typeof varValue) 

varValue = null

console.log(varValue) 
console.log(typeof varValue) 

var symbolDatatype = Symbol("New to me")

console.log(symbolDatatype) 
console.log(typeof symbolDatatype) 