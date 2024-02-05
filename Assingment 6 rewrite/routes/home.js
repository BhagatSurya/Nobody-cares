const express = require('express')
const route = express.Router()
const controlleruser =  require('../controllers/userdata')

route.get('/',controlleruser.GetHomeRoute)

route.post('/username',controlleruser.PostUserDataRoute)
module.exports = route
