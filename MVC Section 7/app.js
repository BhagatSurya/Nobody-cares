const http = require('http')
const bodyparser = require('body-parser')

const express = require('express')
const adminroute = require('./routes/admin')
const router404 = require('./routes/404')
const shoproute =  require('./routes/shop')
const path = require('path')
const app = express({extended:false})


app.set('view engine', 'ejs')
app.set('views', 'views')

//middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminroute)
app.use(shoproute)
app.use(router404)

app.listen(3000)



