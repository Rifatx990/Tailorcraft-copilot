const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Endpoint to fetch all products
router.get('/', productController.getAllProducts);

// Endpoint to fetch a product by ID
router.get('/:id', productController.getProductById);

// Endpoint to create a new product
router.post('/', productController.createProduct);

// Endpoint to update a product
router.put('/:id', productController.updateProduct);

// Endpoint to delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;