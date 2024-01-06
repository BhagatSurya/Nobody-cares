const express =   require('express')
const path = require('path')
const rootdir = require('../helper/root-path')
const route = express.Router()

route.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootdir,'views','404.html'))
})

module.exports = route