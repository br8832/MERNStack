import * as fs from 'node:fs';
fs.readFile('Text.json',(err, buffer)=>{
    if(err) console.log(err.message)
    const oldData=JSON.parse(buffer)
    console.log(oldData)
    let jsonObj={'Mern':'Mern', 'Mean':'Mean'}
    //console.log(data)
    const obj={}
    for (const key in jsonObj) {
            const res= jsonObj[key].split('').map((letter,index) =>{
                let result = ''
                if(index==0) return result="M-Mongo"
                if(index==1) return result="E-Express"
                if(index==2) return result=(letter=='a')?"A-Acronym":"R-React"
                if(index==3) return result="N-Node.js"
                return result
            })
        res.forEach(element => {
            console.log(element)
        });
        jsonObj[key]=res
    }
    let op = fs.createWriteStream('Text.json')
    op.write(JSON.stringify([...oldData, jsonObj]))
    op.end()
})

// let userDetails = {
//     name : "Annie",
//     age : 21,
//     city : "Somewhere on earth ",
//     session : "MernStack"
// }
// let writerStream = fs.createWriteStream("Text.json","utf8");
// writerStream.write(JSON.stringify(userDetails));
// writerStream.end();

// writerStream.on("finish", ()=>{ //attached an event from eventemitter class
//     console.log("Writing into the file is done")

//     let fileData = fs.readFileSync('Text.json')
//     console.log(JSON.parse(fileData));
// })

// writerStream.on("error",(erroObj)=>{
//     console.log(erroObj)
// })
// console.log("Read File Ends Using Writer Stream");