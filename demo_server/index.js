const express = require('express')

const product = require('./utils/product.js')
const productRouter = require('./routes/product.js')
const productApiRouter = require('./routes/productApi.js')

const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor

app.set('view engine', 'pug');
app.set('views','./views');

// Middleware API KEY. Hace que todas las rutas necesiten API_KEY. Descomentar para probar
// app.use(hasApiKey); 

//******RUTAS PARA LA WEB******** */
app.use('/', productRouter);
//******RUTAS PARA LA API******** */
app.use('/api', productApiRouter);

//******RUTAS******** */
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