(function func(string){
    console.log(string+" is my name")
    })("Bryan")
// func("this") didn't work

function acc(name, account){
    this.accType="Debit"
    this.balance=0
    this.name=name
    this.account=account
    this.getDetails = function(){return "The "+this.accType+this.account+" has "+this.balance+" and belongs to "+this.name}
}

console.log(new acc("Bryan","1380518014910").getDetails())
console.log(Add(2,3))
console.log(Add(4,5,1))

function Add(a, b){console.log("pure function");return a+b}//hoists this(gets the definition) which is why I get 9 not 10
var Add = (a,b,c) => a+b+c //doesn't hoist this. this is a variable so gets undefined
// can only hoist named function, not functional expression 
