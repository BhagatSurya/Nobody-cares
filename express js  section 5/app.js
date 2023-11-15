const http = require('http')
const bodyparser = require('body-parser')
const express = require('express')

const router404 = require('./routes/404')
const shoproute =  require('./routes/shop')
const adminroutes = require('./routes/admin')
const path = require('path')
const app = express({extended:false})

//middleware
app.use(bodyparser.urlencoded())
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminroutes)
app.use(shoproute)
app.use(router404)

app.listen(3000)


