const server = require('../index'); // lanza servidor
const supertest = require('supertest');
const mongoose = require('../utils/dbmongo') // lanza la bbdd
const request = supertest(server)

afterAll( async () => {
  await server.close()
  await mongoose.connection.close()
})

it('Probando jest', () => {
    expect(1).toBe(1)
})
describe('GET all products', () => {
  it('gets the test endpoint /',  async() => {
      await request
          .get('/api/products')
          .expect(200)
  })
  //...
  //otros tests GET /
  //...
})
describe('GET one product', () => {
  it('dame un producto en concreto', async () => {
    const response = await request
                      .get('/api/products/1')
                      .expect(200)
  })
})
describe('POST one product', () => {
  it('Se envia un producto', done => {
    request
      .post('/api/products?API_KEY=hola123')
      .send(
        {
          "registerDate": "2021-06-09T11:24:40.582Z",
          "id": 6,
          "title": "Vendo zapatillas 3",
          "price": 62.3,
          "description": "Zapatillas blancas y negras",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          }
      )
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err,res)=>{
          if (err) return done(err)
          return done()
      })
  })
})