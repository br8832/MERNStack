// commenting with js uses the // or /*
var variable = 12
// typeof var = int
var variable = "string"
// redeclated it
variable = true
// dynamic typing - now a boolean 
obj = {}
// object type 
obj.property = [1,2,3,4]
// add property to obj which is an array of int
obj.func = (a,b) => a+b
// add property to obj whch is a function 
var child = {}
child = Object.create(obj)
// child created 
console.log(child)
/*use of console.log to display child object
we can see the prototype chain
*/
child.func = (a,b) => a*b
// overriding parent's func property