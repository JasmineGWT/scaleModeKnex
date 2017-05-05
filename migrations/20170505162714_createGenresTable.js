
exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('genres', function(table) {
    table.increments('id')
    table.string('name')
    table.string('scale1')
    table.string('scale2')
    table.string('scale3')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfNotExists('genres').then(function () {
    console.log('genres table was dropped')
  })
};
