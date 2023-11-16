const express = require('express')

const app = express()
const path  = require('path')
const homerouter =  require('./routes/home')
const usersrouter =  require('./routes/users')


app.use(express.static(path.join(__dirname,'public')))
app.use(usersrouter)
app.use(homerouter)

app.listen(3000)