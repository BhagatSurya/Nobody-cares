const http = require('http')
const bodyparser = require('body-parser')
const express = require('express')

const app = express()
//middleware
 app.use(bodyparser.urlencoded())

app.get('/add-prodct',(req,res,next) =>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="sumit">ADD PRODUCT</button></form>')})

app.post("/product",(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

app.get('/',(req,res,next) =>{
    res.send('<h1>hello Bhagat surya</h1>')
    
})

app.listen(3000)


