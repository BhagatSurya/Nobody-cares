const express = require('express')
const bodyParser = require('body-parser') 
const homeRoute = require('./routes/home')
const userRoute = require('./routes/user')
const path = require('path')
const app = express()

app.set('view engine','ejs')
app.set('views','views')
app.use(bodyParser.urlencoded()) 
app.use(homeRoute)
app.use(userRoute)

app.listen(3000)