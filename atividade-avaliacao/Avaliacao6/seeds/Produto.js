/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Produto').del()
  await knex('Produto').insert([
    {id: 1, codigo: 56.0, descricao: 'frigideira', valor: 100.0},
    {id: 2, codigo: 57.0, descricao: 'air fryer', valor: 200.0}
  ]);
};

exports.seed = function(knex, Promise) {
  
  return knex('Produto')
  .select({
    descricao: 'descricao',
    codigo: 'codigo'
  }
  ) 
  .then((Produto) => {
    return console.log(descricao, codigo)
  })
  .catch((err) => {
    console.error(err);
  })
};

exports.seed = function(knex, Promise) {

  knex('Produto')
  .where({ id: 2 })
  .update({ 
    codigo: 60.0
  }, ['id', 'codigo'])
};
