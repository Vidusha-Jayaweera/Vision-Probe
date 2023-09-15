const ProductSchema = require('../models/Product')
const CartSchema = require('../models/Cart')

//insert new product
const addProduct = async(req, res) => {
    try {
      const {name, category , price, description, availableStock, recommendation, reviews, base64Img} = req.body
      const newProduct = await ProductSchema.create({
        name : name, 
        category : category,
        price : price,
        description : description,
        availableStock : availableStock,
        recommendation : recommendation,
        reviews : reviews,
        imgurl : base64Img
      })
      res.status(200).json(newProduct)
    } catch (error) {
      res.status(500).send({ "msg" : error.message})
    }
}

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

//get all products in the cart
const getAllCartProducts = async(req, res) => {
    try {
        const listOfCartProducts = await CartSchema.find({})
        res.status(200).send(listOfCartProducts)
    } catch (error) {
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
            reviews : product.reviews,
            imgurl : product.imgurl
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
        const productToBeRemoved = await  CartSchema.findOneAndDelete({_id : id})
        res.status(200).json({ 'msg' : `${productToBeRemoved._id} has been removed!`})
    } 
    catch (error) {
        res.status(500).json({ 'msg' : error.message})
    }
}


module.exports = {
    addProduct,
    getAllProducts,
    getAllCartProducts,
    getProductById,
    addToCart,
    removeCartProduct
}