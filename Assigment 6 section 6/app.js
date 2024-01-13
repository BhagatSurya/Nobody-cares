const express = require('express')
const bodypaser = require('body-parser')
const Homeroute =  require('./routes/home')
const Userroute = require('./routes/user')
const app = express({extended:false})


app.set('view engine','ejs')
app.set('views','views')

//body paser
app.use(bodypaser.urlencoded({extended:false}))
app.use(Homeroute.routes)
app.use(Userroute)
app.listen(3000)