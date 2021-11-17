const product = require('../controllers/product')
const routes = require('express').Router();
const hasApiKey = require('../middleware/hasApiKey')
//********RUTAS********
// http://localhost:3000/products/5?API_KEY="hola123"
// http://localhost:3000/products/3
// http://localhost:3000/products
routes.get('/products/:id?', product.getProduct);
routes.post('/products', hasApiKey, product.createProduct); // se pide API_KEY para crear productos

module.exports = routes;