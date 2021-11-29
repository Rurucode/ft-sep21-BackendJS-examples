const express = require('express')
require('dotenv').config() // carga fichero variables de entorno
const productRouter = require('./routes/product')
const productApiRouter = require('./routes/productApi')
const entryApiRouter = require('./routes/entryApi')
const errors = require('./middlewares/errors')


require('./utils/dbmongo') // Lanzar la BBDD Mongo

const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor

app.set('view engine', 'pug');
app.set('views','./views');

/******Rutas**********/

app.get('/',(req, res) => {
  res.send('Mi home de productos')
})

app.use("/",productRouter)// rutas Web
//rutas API
// http://localhost:3000/api/products
// http://localhost:3000/api/entries
app.use("/api",productApiRouter) 
app.use("/api",entryApiRouter)

//Capture All 404 errors
app.use(errors.error404);

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = server;