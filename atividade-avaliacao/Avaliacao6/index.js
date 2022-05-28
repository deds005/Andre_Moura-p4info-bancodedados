var database = require("/knexfile")

const knexConfig = require('knexfile');
//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV])


database.select().table("Produto").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

app.get('/Produto', (req, res) => {
    knex('Produto')
  .select({
    id: 'id',
    codigo: 'codigo'
  })
  .then((Produto) => {
    return res.json(Produto);
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })
})
