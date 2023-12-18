const express = require('express')

const adminRouter = express.Router()//({caseSensitive: true})

adminRouter.get('/hello', (req, res)=>{
    res.send("Hello World from admin app!!!")
})


adminRouter.get('/load', (req, res)=>{
    res.send("New Module Loaded using routes!!!")
})

module.exports = adminRouter;