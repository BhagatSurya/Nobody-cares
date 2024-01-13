const express = require('express')
const homeData = require('./home')
const router = express.Router()

router.get('/user',(req,res,next)=>{
    const data =  homeData.user_name
    res.render('user',{pageTitle:'User',username: data})
    console.log('user',data)
})




module.exports = router