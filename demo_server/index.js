const express = require('express')
const product = require('./controllers/product')

const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor

app.set('view engine', 'pug');
app.set('views','./views');

function hasApiKey(req,res,next){

  if(req.query.API_KEY && req.query.API_KEY=="hola123"){
    next();
  }
  else {
    const data = {
      message:"API KEY no válida o inexistente",
      error:403
    }
    res.status(403).render("error",{data});
  }
}
// Middleware API KEY. Hace que todas las rutas necesiten API_KEY. Descomentar para probar
// app.use(hasApiKey); 

/******Rutas**********/

app.get('/',(req, res) => {
  res.send('Mi home de productos')
})

// http://localhost:3000/products/5?API_KEY="hola123"
// http://localhost:3000/products/3
// http://localhost:3000/products
app.get('/products/:id?', product.getProduct);
app.post('/products',hasApiKey, product.createProduct); // se pide API_KEY para crear productos

// http://localhost:3000/things/pepe/5
// http://localhost:3000/things/pepe/5?age=3&location=madrid
// http://localhost:3000/things/luis/6
app.get('/things/:name/:id', function(req, res) {
    console.log("*******************");
    console.log(req.params);
    console.log(req.query)
    res.send(`He recibido esto: --> id: ${req.params.id} and name:${req.params.name}
              Y de query params: ${req.query.age} ${req.query.location}
    ` );
});

app.get('/first_template', function(req, res){
    const number =  Math.floor(Math.random() * (7 - 1) + 1);
    res.render('first_view',{name:"Alex",number});
});

//Capture All 404 errors
app.use(function (req,res,next){
  const data = {
    message:"Error! 404 not found",
    error:404
  }
	res.status(404).render('error',{data});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})