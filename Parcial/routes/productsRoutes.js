const express = require('express');
const { createProduct, searchProduct, getProducts } = require('../controllers/productController');

const router = express.Router();

//ruta para crear los productos
router.post('/', createProduct);

//ruta para obtener todos los productos
router.get('/', getProducts);

//ruta para buscar los productos
router.get('/search', searchProduct);

module.exports = router