const express = require('express')
const path = require('path')

const rootdir = require('../helper/root-path')

const route =  express.Router()

route.get('/',(req,res,next) =>{
    res.sendFile(path.join(rootdir,'views','shop.html'))
    
})

module.exports = route