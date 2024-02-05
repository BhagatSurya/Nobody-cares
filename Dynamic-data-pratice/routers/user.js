const userContolls  = require('../controllers/user') 

const express =  require('express')

const router = express.Router();

router.get('/',userContolls.getVideos)

module.exports = router