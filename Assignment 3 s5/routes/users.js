const express = require('express')
const path  = require('path')

const route = express.Router()

route.get('/users',(req,res,next)=>  {
    res.sendFile(path.join(__dirname,'../','views','users.html'))
})


module.exports = route