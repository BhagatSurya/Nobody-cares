const adminController  = require('../controllers/admin') 

const express =  require('express')

const router = express.Router();
router.get('/add-video-link', adminController.getAddVideoLink);

router.post('/postvideo',adminController.postvideoUrl)

module.exports = router