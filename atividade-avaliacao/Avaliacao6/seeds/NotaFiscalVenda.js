/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('NotaFiscalVenda').del()
  await knex('NotaFiscalVenda').insert([
    {id: 1, codigo: 234.2, data: '2022-05-05', valorNota: 12.5, cliente: 1},
    {id: 2, codigo: 245.2, data: '2022-02-02', valorNota: 30, cliente: 2}

  ]);
};

exports.seed = function(knex, Promise) {
  
  return knex('NotaFiscalVenda')
  .select({
    data: 'data',
    codigo: 'codigo'
  }
  ) 
  .then((NotaFiscalVenda) => {
    return console.log(NotaFiscalVenda.id, NotaFiscalVenda. codigo)
  })
  .catch((err) => {
    console.error(err);
  })
};

exports.seed = function(knex, Promise) {

  knex('NotaFiscalVenda')
  .where({ id: 2 })
  .update({ 
    codigo: 60.0
  }, ['id', 'codigo'])
};
