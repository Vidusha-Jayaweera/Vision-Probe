const ProductSchema = require('../models/Product')
const CartSchema = require('../models/Cart')

//get all products
const getAllProducts = async(req, res) => {
    try {
        const listOfProducts = await ProductSchema.find({})
        res.status(200).send(listOfProducts)
    } 
    catch (error) {
        res.status(500).json({ 'msg' : error.message})
    }
}


//get specified product by it's id
const getProductById = async(req, res) => {
    try {
        const { id } = req.params
        const product = await ProductSchema.findById(id)
        res.status(200).json(product)
    }catch (error) {
        res.status(500).json({ 'msg' : error.message})
    }
}

//get a product and add to the cart 
const addToCart = async(req, res) => {
    try {
        const { id } = req.params
        const product = await ProductSchema.findById(id)

        const newCartProduct = await CartSchema.create({
            name :product.name, 
            category : product.category,
            price : product.price,
            description : product.description,
            availableStock : product.availableStock,
            recommendation : product.recommendation,
            reviews : product.reviews
        })
        res.status(200).json(newCartProduct)
    } catch (error) {
        res.status(500).json({ 'msg' : error.message})
    }
}

//remove a product from th cart
const removeCartProduct = async(req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const productToBeRemoved = await  CartSchema.findOneAndDelete({_id : id})
        res.status(200).json({ 'msg' : `${productToBeRemoved.name} has been removed!`})
    } 
    catch (error) {
        res.status(500).json({ 'msg' : error.message})
    }
}


module.exports = {
    getAllProducts,
    getProductById,
    addToCart,
    removeCartProduct
}