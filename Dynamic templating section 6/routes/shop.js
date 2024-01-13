const express = require('express')
const path = require('path')
const rootdir = require('../helper/root-path')
//data from admin route 
const adminData = require('./admin')


const route =  express.Router()

route.get('/',(req,res,next) =>{
    const products = adminData.products
    //res.sendFile(path.join(rootdir,'views','shop.html'))
    res.render('shop',{prodsdata: products,
        pageTitle:'Shop',
        path:'/',
        hasProducts:products.length>0,
        activeShop:true,
        productCSS:true })
    console.log('shop',products)
}) 

module.exports = route