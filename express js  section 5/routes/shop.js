const express = require('express')

const route =  express.Router()

route.get('/',(req,res,next) =>{
    res.send('<h1>hello Bhagat surya</h1>')
    
})

module.exports = route