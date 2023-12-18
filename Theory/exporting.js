import stuff from "./assess1.js"
const {values, showName, doAddition} =stuff
values.forEach(element => {
    var variable=element
    console.log("variable has value "+variable+" and type "+typeof variable)
});

showName("Bryan","Rodriguez", 1000)

console.log(doAddition(2,3,4))

console.log(doAddition(2))

console.log(doAddition(2.3,3))

console.log(doAddition("first",2,"three"))