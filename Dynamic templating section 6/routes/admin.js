const express = require('express')
const path = require('path')
const rootdir = require('../helper/root-path')

const router = express.Router()


const products = []

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
})

router.post('/product',(req,res,next) =>{
   const title_message = req.body.title;
   products.push({title: title_message})

   res.redirect('/')
    
})

exports.routes = router;
exports.products = products;