/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('post', table => {
    table.increments('id');
    table.integer('userId')
    table.foreign('userId').references(`new_user.id`);
    table.string('title')
    table.string('content')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('post', table => {
    table.dropForeign('userId')
  })
  .then(function () {
    return knex.schema.dropTableIfExists('post');
  });
  
};