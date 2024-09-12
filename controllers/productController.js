const productModel = require('../models/product')

const getproducts = async (req, res) => {
    try {
     const products = await productModel.find({})
     res.status(200).json(products)
    } catch(err) {
     res.status(404).json({message: err.message})
    }
}
const getproduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await productModel.findById(id)
        res.status(200).json(product)
    }
    catch(err) {
        res.status(404).json({message: err.message})
    }
}
const createProduct = async(req, res) => {
    try {
        const product = await productModel.create(req.body)
        res.status(200).json(product)
    }
    catch(err) {
        res.status(404).json({message: err.message})
    }
    
}
const updateProduct = async (req, res) => {
    try{
        const id = req.params.id
        const updatedProduct = req.body
        const productUpdated = await productModel.findByIdAndUpdate(id, updatedProduct)
       
        if(!product) {
            return res.status(404).json({message: err.message})
        }
        res.status(200).json(productUpdated)

    } catch(err) {
        res.status(404).json({message: err.message})
    }
}
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product =  await productModel.findByIdAndDelete(id)

        if(!product) {
           return res.status(200).json(productUpdated)
        }
        res.status(200).json({message: 'product deleted sucessfully'})

    } catch (err) {
        res.status(404).json({message: err.message})

    }
}
module.exports = {
    getproducts, 
    getproduct,
    createProduct, 
    updateProduct, 
    deleteProduct
};
