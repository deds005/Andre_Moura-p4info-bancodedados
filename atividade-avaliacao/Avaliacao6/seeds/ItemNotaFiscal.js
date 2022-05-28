/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('ItemNotaFiscal').del()
    await knex('ItemNotaFiscal').insert([
      {id: 1, sequencial: 243443, quantidade: 1, valor: 100.0, produto: 1, notaFiscal: 1},
      {id: 2, sequencial: 467546, quantidade: 1, valor: 200.0, produto: 2, notaFiscal: 2}
  
    ]);
  };

  exports.seed = function(knex, Promise) {
  
    return knex('ItemNotaFiscal')
    .select({
      id: 'id',
      sequencial: 'sequencial'
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

  knex('ItemNotaFiscal')
  .where({ id: 2 })
  .update({ 
    sequencial: 6456
  }, ['id', 'sequencial'])
};