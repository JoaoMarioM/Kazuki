exports.up = function(knex) {
  return knex.schema.createTable('clientes', function(table){
    table.increments()
    table.string('name').notNullable()
    table.string('address').notNullable()
    table.string('number').notNullable()
    table.string('cep').notNullable()
    table.string('neighborhood').notNullable()
    table.string('city').notNullable()
    table.string('state').notNullable()
    table.string('phone').notNullable()
    table.string('cellPhone').notNullable()
    table.string('email').notNullable()
    table.string('cpf').notNullable()
  })
};

exports.down = function(knex) {
    knex.schema.dropTable('clientes')
};
