const http = require('http')
const bodyparser = require('body-parser')
const express = require('express')
const adminroute = require("./routes/admin")
const router404 = require('./routes/404')
const shoproute =  require('./routes/shop')
const path = require('path')
const app = express({extended:false})

//middleware
app.use(bodyparser.urlencoded())
app.use(express.static(path.join(__dirname,'public')))

app.use(adminroute)
app.use(shoproute)
app.use(router404)

app.listen(3000)


