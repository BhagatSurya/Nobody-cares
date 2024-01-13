const express = require('express')
const path = require('path')
const rootdir = require('../helper/root-path')

const router = express.Router()


const products = []

router.get('/add-product',(req,res,next)=>{
    res.render('add-product',{pageTitle:'Add product',
    path:'/admin/add-product',
  })
})

router.post('/product',(req,res,next) =>{
   const title_message = req.body.title;
   products.push({title: title_message})
   console.log(title_message)
   res.redirect('/')
    
})

exports.routes = router;
exports.products = products;