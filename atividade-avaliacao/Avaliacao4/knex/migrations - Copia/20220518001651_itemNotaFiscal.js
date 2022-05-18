/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ItemNotaFiscal', function(table) {
        table.increments('id').primary();
        table.double('sequencial').notNullable();
        table.integer('quantidade').notNullable();
        table.double('valor').notNullable();
        table.foreign('produto').references('id').inTable('Produto');
        table.foreign('notaFiscal').references('id').inTable('NotaFiscalVenda');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ItemNotaFiscal');
};
