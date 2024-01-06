const express = require('express')
const path =  require('path')
const homeRoute = require('./routes/home')
const app = express()
app.use(express.static(path.join(__dirname,'public')))

app.use(homeRoute)

app.listen('5000',()=> {
    console.log("this app is listen to port 5000")
})