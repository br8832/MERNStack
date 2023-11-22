//1 Example of bind function on browser, we must be able to change the object on click
// <button class="favorite styled" type="button">Add to favorites</button> the buttton being referred to
function bindExample(){alert(`this is ${JSON.stringify(this)}`)}
let button=document.getElementsByClassName("favorite styled")[0]
button.addEventListener('click', bindExample.bind(UserDetail))
button.addEventListener('click', bindExample.bind(UserAddress))
//2 Create object without protoype and the inherit it futher
const parent = Object.create(null)
let User = {Name: 'name', Age:23, Topic:'JS', Adress:'Earth'} 
child.prototype = Object.create(parent)
//3 Create a function to populate user details. 
//  func - populateDetail prints Adress and accepts a callBackFunction which prints Name, Age and Topic
function populateDetail(restOfDetails, ref){
    console.log(ref.Adress+", " + restOfDetails(ref))
}
function NameAgeTopic(o) {
    return `${o.Name}, ${o.Age}, ${o.Topic}`
}
populateDetail(NameAgeTopic, User)
//4 Javascript currying is achieved by returning functions from functions. Here, the outer function (print) 
//  supplies the printing to be used while the returned function allows the caller to supply the name of the printer.
function print(){
    return function(name){
        console.log(name)
    }
}
const printer = print()
printer('Bryan')
printer('Me')
//5 Create Two objects UserDetail (Properties should be  Name, Age, Street)and UserAddress(Name, Street, City, ZipCode), merge both of them in to UserDetail.
var UserDetail={Name:'name1', Age:1000, Street:'Street'} 
var UserAddress={Name:'name2', Age:1000, city:'city'}
UserDetail=Object.assign(User,UserAddress)
console.log(UserDetail)