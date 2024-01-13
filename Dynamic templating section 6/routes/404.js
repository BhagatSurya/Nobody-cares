const express =   require('express')
const path = require('path')
const rootdir = require('../helper/root-path')
const route = express.Router()

route.use((req,res,next) => {
    res.render('404',{pageTitle:'404'})
})

module.exports = route