exports.up = function(knex) {
  return knex.schema.createTable('financialSale', function(table){
      table.increments('id').primary()
      table.string('type').notNullable()

      table.string('contract_date').notNullable()
      table.string('contract_value').notNullable()

      table.foreign('contract_date').references('startDate').inTable('contratos')
      table.foreign('contract_value').references('value').inTable('contratos')


  })
};

exports.down = function(knex) {
  knex.schema.dropTable('financialSale')
};
