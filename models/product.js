const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, 'Enter product name:']

    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }

);

const productModel = mongoose.model(
    'product', productSchema
)
module.exports = productModel;