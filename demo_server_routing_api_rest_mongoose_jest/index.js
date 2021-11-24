const express = require('express')
const productRouter = require('./routes/product')
const productApiRouter = require('./routes/productApi')
const errors = require('./middlewares/errors')

require('dotenv').config() // carga fichero variables de entorno
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
app.use("/api",productApiRouter) //rutas API

//Capture All 404 errors
app.use(errors.error404);

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = server;