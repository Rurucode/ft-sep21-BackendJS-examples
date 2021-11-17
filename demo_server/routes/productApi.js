const productApi = require('../controllers/productApi')
const routes = require('express').Router();
const hasApiKey = require('../middleware/hasApiKey')


//***********RUTAS PARA LA API*********
// http://localhost:3000/things/pepe/5
// http://localhost:3000/things/pepe/5?age=3&location=madrid
// http://localhost:3000/things/luis/6

routes.get('/api/products/:id?', productApi.getProduct);
routes.post('/api/products',hasApiKey, productApi.createProduct); // se pide API_KEY para crear productos

module.exports = routes;