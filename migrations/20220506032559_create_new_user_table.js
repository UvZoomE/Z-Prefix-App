/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('new_user', table => {
    table.increments('id');
    table.string('first_name', 100);
    table.string('last_name', 250);
    table.string('username', 100);
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('new_user');
};
