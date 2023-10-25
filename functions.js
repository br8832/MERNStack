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
console.log(Add(4,5,-2))

function Add(a, b){return a+b}

var Add = (a,b,c) => a+b+c


