const express = require('express')
const userData = require('./home')
const controlleruser =  require('../controllers/userdata')
const route = express.Router()

const data = userData.User_Data

route.get('/user',controlleruser.UserGetRoute)

module.exports = route