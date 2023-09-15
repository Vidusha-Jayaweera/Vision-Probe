const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({

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

    imgurl : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Cart", CartSchema)