exports.up = function(knex) {
  return knex.schema.createTable('funcionario', function(table){
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
      table.string('rg').notNullable()
      table.string('company').notNullable()
      table.string('sector').notNullable()
      table.string('occupation').notNullable()
      table.string('admissionDate').notNullable()
      table.string('resignationDate')
      table.string('workload').notNullable()
      table.string('salary').notNullable()
      table.string('accessType').notNullable()
      table.string('user').notNullable()
      table.string('password').notNullable()
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('funcionario')
};
