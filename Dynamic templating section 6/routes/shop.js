const express = require('express')
const path = require('path')
const rootdir = require('../helper/root-path')
//data from admin route 
const adminData = require('./admin')


const route =  express.Router()

route.get('/',(req,res,next) =>{
    console.log(adminData.products)
    //res.sendFile(path.join(rootdir,'views','shop.html'))
    res.render('shop')
    
})

module.exports = route