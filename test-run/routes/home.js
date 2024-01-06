const express = require('express')
const path =  require('path')


const router = express.Router()

router.get('/home',(req,res,next) => {
 res.sendFile(path.join(__dirname,'../','views','home.html'))
})

module.exports =  router