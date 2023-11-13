const express = require('express') 

const app= express()


app.get('/users',(req,res,next) => {
    res.send('<h2>wellcome to the course</h2>')
})

app.get('/',(req,res,next) => {
    res.send('<h1>Hello people</h1>')
})

app.listen(3000)

