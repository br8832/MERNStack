//1 
//a 
heroes.filter(h => !h.isEvil)
//b
console.log([...heroes.reduce((accum, curr)=>accum.add(curr.family),new Set()).values()])
//c
console.log(heroes.map(h => `Sir ${h.name}`))
//d
heroes.some(h => !h.isEvil)

//2
let s = new Set()
s.add('String')
s.has(2)
s.add(2)
s.delete('String')
s.forEach(n=>n**2)
let m = new Map()
m.set('key', 1)
m.has(1)
m.set(1, 1)
m.delete(1)
m.forEach((k, v) => console.log(`Key: ${k}, Value:${v}`))
//3 
const prom = new Promise((res, rej)=>
{setTimeout(res(
['spread', 'destructing', 'arrow functions', 'promises', 'iterators']
),2000)
setTimeout(rej(),3000)}
)
prom.then(data => console.log(data))
//4 - I didn't understand so I'm interpreting to create a function which can multiple numbers
//                                         as to create a function which can MULTIPLY numbers
function rest(n){
let arr = Array.from({length: n}, (_, index) => index+1)
function restOperator(...array){
    console.log(array.reduce((accum, curr)=>accum*curr))
}
restOperator(...arr)
}
rest(3)
students=['Bryan','Annie','Khan','Jonathan','Joseph', 'Adrik', 'Gauri', 'Danny', 'Queen']
function studentsSession(list){
    console.log(...list)
}
studentsSession(students)
//5
let {userDetails:{last:lastname}, number=9119119110}= person
console.log(lastname)
console.log(number)
//6 
const obj={'key':'current value'}
obj.key='new value'
//7
//for-of iterates over value -- also will not print value whose index is not an integer
for (let s of students) {
    console.log(s)
}
//for-in iterates over keys 
for (let index in students) {
    console.log(index+":"+students[index])
}
//8 - bind is used to keep the intended this reference
// arrow functions do the same job and lets us write less code
// as well as more human readeable code
function binding(){
    console.log(this.key)
}
// - currently undefined but this is 'new value'
binding.bind(obj)()


//9 -- all non api calls go first in sequential order
// because the two in the middle are sent to be resolved
// when the stack is empty the 2 response are handled in order
//the first one has another setTimeout which needs to be sent vover to be resolved
// therefore even if it's 0 it must come after the 2 calls already resolve 
console.log('First')
setTimeout(()=>{
    console.log('Third')
    setTimeout(()=>console.log('Fifth'),0)
},1000)
setTimeout(()=>console.log('Fourth'),1000)
console.log('Second')
//10
function ten(hobbies=['Swimming','Eating']){
    let [name,job,address] = ['Bryan','Learner', 'Earth']
    let thing={name:name, job:job, address:address}
    console.log(`${thing.name} has job ${thing.job} lives on ${thing.address} and ${hobbies.length==1?'is':'has'} hobbies:${hobbies.join(', ')}`)
}
ten()
ten(['Sleeping'])