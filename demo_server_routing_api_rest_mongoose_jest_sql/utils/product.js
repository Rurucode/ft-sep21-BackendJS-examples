const fetch = require('node-fetch')

const getProductById = async (id) => {
    const data = await fetch('https://fakestoreapi.com/products/'+id)
    const product = await data.json()
    return product
}

const getAllProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()
    return products
}

const createProduct = async (product) => {
    const data = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(product)
        })

        const res = await data.json()
        return res
}

const product = {
    getProductById,
    getAllProducts,
    createProduct
}

module.exports = product;

// Pruebas de ejecución
//getAllProducts().then(data=>console.log(data))
//getProductById(2).then(data=>console.log(data))

/*
const newProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

createProduct(newProduct).then(data=>console.log(data))
*/