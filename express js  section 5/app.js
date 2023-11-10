const http = require('http')

const express = require('express')

const app = express()
//middleware

app.use((req,res,next) =>{
    console.log('In the middleware')
    next()
})

app.use((req,res,next) =>{
    console.log('another In the middleware')
    res.send('<h1>hello Bhagat surya</h1>')
})


app.listen(3000)


