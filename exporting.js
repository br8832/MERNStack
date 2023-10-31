const { values, showName, doAddition } = require('./assess1');
values.forEach(element => {
    variable=element
    console.log("variable has value "+variable+" and type "+typeof element)
});

showName("Bryan","Rodriguez", 1000)

console.log(doAddition(2,3,4))

console.log(doAddition(2))

console.log(doAddition(2.3,3))

console.log(doAddition("first",2,"three"))