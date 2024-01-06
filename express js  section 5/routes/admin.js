const express = require('express')
const path = require('path')
const rootdir = require('../helper/root-path')

const router = express.Router()

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
})

router.post('/product',(req,res,next) =>{
   const message = req.body;
   console.log(message)
   res.redirect('/')
    
})

module.exports = router