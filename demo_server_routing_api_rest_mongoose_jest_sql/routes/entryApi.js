const entryApi = require('../controllers/entryApi')
const routes = require('express').Router();

/***************RUTAS PARA LA API*****************/
// http://localhost:3000/api/entries
// http://localhost:3000/api/entries?email="alejandro@thebrigeschool.es"
// http://localhost:3000/api/entries --> POST. Pasarle body
routes.get('/entries', entryApi.getEntries);
routes.post('/entries', entryApi.createEntry);

module.exports = routes;