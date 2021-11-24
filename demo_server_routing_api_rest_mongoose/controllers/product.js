const dataProduct = require('../utils/product')
//const data = require('../models/product') // Leer los datos del array
//console.log(data); // lee el array de datos

const getProduct = async (req,res) => {
    console.log("*******************");
    console.log(req.params);

    // Consulta 
    // Los datos
    // del producto correspondiente
    let data;
    if(req.params.id){
        data = await dataProduct.getProductById(req.params.id);
        res.status(200).render('product', {products:[data]}) // Creo un array con 1 dato
    } else{
        data = await dataProduct.getAllProducts();
        res.status(200).render('product',{products:data}) // Envio un array con N datos
    }
}

const createProduct = async (req,res) => {
    console.log("***************");
    // Se guardaran cosas en la BBDD
    console.log(req.body); // En req.body está el objeto a guardar
    const result = await dataProduct.createProduct(req.body)
    console.log("Producto creado!!!!!**************");
    console.log(result);
    res.status(201).json(result);
}

// Para el alumno...
// Editar
//const editProduct = async (req,res) => {}
// Borrar
//const deleteProduct = async (req,res) => {}


const product = {
    getProduct,
    createProduct
}
module.exports = product;