const express = require('express')
const router = express.Router()
const { getAllProducts, getProductById, addToCart, getAllCartProducts, removeCartProduct } = require('../controllers/Products')

//get all products
router.get('/products', getAllProducts)

//get specified product by it's id
router.get('/products/:id', getProductById)

//get all products in the cart
router.get('/cart', getAllCartProducts)

//get a product and add to the cart 
router.post('/products/cart/:id', addToCart)

//remove a product from the cart
router.delete('/products/cart/:id', removeCartProduct)

module.exports = router