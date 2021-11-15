const express = require('express')
const product = require('./controllers/product')

const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', (req, res) => {
  res.send('Mi home de productos')
})

// http://localhost:3000/products/5
// http://localhost:3000/products/3
// http://localhost:3000/products
app.get('/products/:id?', product.getProduct);
app.post('/products', product.createProduct);

// http://localhost:3000/things/pepe/5
// http://localhost:3000/things/luis/6
app.get('/things/:name/:id', function(req, res) {
    console.log("*******************");
    console.log(req.params);
    res.send('He recibido esto: --> id: ' + req.params.id + ' and name: ' + req.params.name);
});

app.get('/first_template', function(req, res){
    const number =  Math.floor(Math.random() * (7 - 1) + 1);
    res.render('first_view',{name:"Alex",number});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})