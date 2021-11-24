const { Router } = require('express');
const product = require('../controllers/product')
const hasApiKey = require('../middlewares/hasApiKey')
const routes = require('express').Router();



/************** RUTAS PARA LA WEB*****************/
// http://localhost:3000/products/5?API_KEY="hola123"
// http://localhost:3000/products/3
// http://localhost:3000/products
routes.get('/products/:id?', product.getProduct);
routes.post('/products',hasApiKey, product.createProduct); // se pide API_KEY para crear productos

// Para el alumno...
// Editar
//routes.put()

// Borrar
//routes.delete('/products',product.deleteProduct)

module.exports = routes;