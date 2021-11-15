const data = require('../models/product') // Leer los datos
//console.log(data); // lee el array de datos

const getProduct = (req,res) => {
    console.log("*******************");
    console.log(req.params);

    // Consulta 
    // Los datos
    // del producto correspondiente
    // ...
    // ...

    if(req.params.id){
        res.render('product', {products:[data[req.params.id]]}) // Creo un array con 1 dato
    } else{
        res.render('product',{products:data}) // Envio un array con N datos
    }
}

const createProduct = (req,res) => {
    console.log("***************");
    // Se guardaran cosas en la BBDD
    console.log(req.body);
    res.status(201).send('Nuevo producto creado');
}

const product = {
    getProduct,
    createProduct
}
module.exports = product;