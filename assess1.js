// 1
// see basics file
// 2
let values = ["Robert", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767]
var variable
values.forEach(element => {
    variable=element
    console.log("variable has value "+variable+" and type "+typeof element)
});
// 3
function showName(firstname, lastname, age){
    console.log("%s %s is %d years old", firstname, lastname, age)
}
showName("Bryan","Rodriguez", 1000)
// 4
function doAddition(a,b,c){return a+b+c}
console.log(doAddition(2,3,4))
// three parameters with 3 values given so it does as expected
console.log(doAddition(2))
/* only one parameter given when expected three,
therefore b and c get default undefined
any number + undefined is Nan
*/
console.log(doAddition(2.3,3))
// same as above, 2 parameter given the third defaults to undefined
console.log(doAddition("first",2,"three"))
/* the first parameter is a string, therefore the + is concatenation 
js then changes the 2 from an int to a string i.e "2"
*/
// 5
module.exports = {values,showName,doAddition}
// see exporting file
// 6
function Outer(param1, param2){
    // closure return a function
    let closure = function(arg){
        // in the closure we return an object
        if (arg==param1)
        {   
            return {validated: true,
            hidden: param2}
        }
        else{
            return {validated: false,
            hidden: undefined}
        }
    }
    return closure
}
let thing = Outer("1","2")
console.log(thing(1))
// validated
console.log(thing(2))
// not validated
var obj = Object.create(null)
// created an object with a null prototype

// 7
// the answer to this question is explained in lines 55-56

// 8
/* in each iteration it creates a setTimeout call that will display after 3 seconds 
the value of index and the value at the index in the array. It references the var i which is mutable
Therefore after the 3 seconds, each setTimeout references the same i, which will end at 4.
so it will print 4, undefined 4 times since there is no 4th index for the array
Note: replacing var with let would give the expected behavior of each index with its corresponding value
gets printed
*/
