const express = require('express')
const router = express.Router()
const {
    getproducts, 
    getproduct, 
    createProduct, 
    updateProduct, 
    deleteProduct
} = require('../controllers/productController.js')

router.get('/', getproducts)

router.get('/:id', getproduct)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router;


 