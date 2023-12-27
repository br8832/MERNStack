//1. Create a setup for Express Web Server
/* install npm or yarn 
    create directory 
    use npm init to create package.json file
    we can we can start installing and uninstalling packages needed for our api
    finally to run the set up create start command and then use npm start or
    custom command and then use npm run <command>
*/

//2. Configure a route name - Student
/* create a new directory
    run npm init and follow instructions, and give it the name Student
 */
//3. Create a express app and configure in server.js to delegate routes with - "Student"
/*run npm init and follow instructions, and give it the name Student
  in the npm init change the default index.js to server.js

*/

//4. Create API's in default setup - getStudentDetails - Pass Student info like - Name, Age, Address, Session as query string
/*   
run npm init and follow instructions, so change the default index.js to server.js
*/

const express = require('express')
const getStudentDetails = express()
getStudentDetails.get('/student',(req,res)=>{
  let qs = req.query // is JSON I think?
  console.log(qs)
  let writer = fs.createWriteStream('studentIfo.json')
  let string = `Name:${qs.name} Address:${qs.address} Session:${qs.session} Age:${qs.age}`
  console.log(string)
  writer.write(JSON.stringify(qs))
  writer.close()
  res.send(string)
})
    
//5. Save this information received in #4  to a file named studentIfo using fs module async way
// see Student folder 

//6. Create a setup for webpack
// see React-assess/webpack.config.js
/*
   like for express create a directoty to contain the react app and the usual npm init
   then after installing appropriate dependenices create the webpack.config.js 

*/
//7. What is the purpose of babel, are most important configurations we get from webpack
/*
Mine: Babael in the .babelrc is used to convert all ES6 and beyond code "@babel/preset-env", and all REACT code "@babel/preset-react" to core javascript.
This is different browser may or may not support ES6/React code, but it definitely supports core JS.
We can even use it in the webpack.config.js to do this task for us devs

His: What is the purpose of babel, are most important configurations we get from webpack
Babel is a JavaScript compiler that transforms modern ECMAScript (ES6+) code, including 
JSX for React applications, into backward-compatible versions for broader browser compatibility. 
Webpack is a module bundler that efficiently compiles and organizes JavaScript files and other assets
like images and CSS. Key features of Webpack include defining entry and output points for the 
application, using loaders to process different file types, utilizing plugins for extended functionality,
and setting the build mode whether its development or production for appropriate optimizations. These tools
together allow developers to write modern, efficient JavaScript code that works across various environments.
*/
//8. What is the purpose of -ReactDOM.createRoot
/*
Mine: Its purpose is to act as the base for where our react app will load in the body of the html document

His: ReactDOM.createRoot allows React to prepare multiple UI versions 
simultaneously, enhancing application performance and responsiveness. It offers an opt-in approach 
to using concurrent mode, which can interrupt and prioritize rendering tasks, leading to smoother UI 
interactions and a non-blocking user experience. Essentially, ReactDOM.createRoot is a forward-looking 
feature, laying the groundwork for future advancements in React, especially in terms of rendering 
efficiency and concurrency management, as it allows the site to be updated seamlessly without losing any 
performance or availability. */