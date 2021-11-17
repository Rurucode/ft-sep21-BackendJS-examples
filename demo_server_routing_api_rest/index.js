const express = require('express')
const productRouter = require('./routes/product')
const productApiRouter = require('./routes/productApi')
const errors = require('./middlewares/errors')

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})