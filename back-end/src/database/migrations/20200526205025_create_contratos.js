exports.up = function(knex) {
return knex.schema.createTable('contratos', function(table){
    table.increments('id').primary()
    table.string('serviceMethod').notNullable()
    table.string('pestFound').notNullable()
    table.string('characteristics').notNullable()
    table.string('startDate').notNullable()
    table.string('warrant').notNullable()
    table.string('hour').notNullable()
    table.string('budgetTechnician').notNullable()
    table.string('responsibleTechnician').notNullable()
    table.string('assistantTechnician').notNullable()
    table.string('payment').notNullable()
    table.string('value').notNullable()

    table.integer('cliente_id').notNullable()

    table.foreign('cliente_id').references('id').inTable('clientes')
    })    
};

exports.down = function(knex) {
    knex.schema.dropTable('clientes')
};
