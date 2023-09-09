const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
    },

    category : {
        type : String,
        required : true,
    },

    price : {
        type : Number,
        required : true,
    },

    description : {
        type : String,
        required : true,
    },

    availableStock : {
        type : Number,
        required : true,
    },

    recommendation : {
        type : String,
        required : true,
    },

    reviews : {
        type : Number,
        required : true,
    },
})

module.exports = mongoose.model("Product", ProductSchema)