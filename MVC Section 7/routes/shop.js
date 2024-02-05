const express = require('express')
const path = require('path')
const shopController = require('../controllers/shop')


const route =  express.Router()

route.get('/',shopController.getIndex) 

route.get('/products',shopController.GetProducts)
route.get('/cart',shopController.getcart)
route.get('/orders',shopController.getOrder)
route.get('/products/:productId',shopController.getProductid)

route.get('/checkout',shopController.getCheckout)

module.exports = route