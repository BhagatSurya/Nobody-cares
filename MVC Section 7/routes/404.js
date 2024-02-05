const express =   require('express')
const path = require('path')
const route = express.Router()
const Controller404 = require('../controllers/404')

route.use(Controller404.get404)

module.exports = route