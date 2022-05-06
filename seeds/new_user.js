/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('new_user').del()
  await knex('new_user').insert([
    {id: 1, first_name: 'Uvaldo', last_name: 'Zumaya', username: 'Longhorns2102'},
    {id: 2, first_name: 'Jherlynn', last_name: 'Torres', username: 'perttygirl89'},
    {id: 3, first_name: 'Ully', last_name: 'Zumaya', username: 'Ully89'},
    {id: 4, first_name: 'Brandon', last_name: 'Zumaya', username: 'bbcowboys'},
    {id: 5, first_name: 'DD', last_name: 'Flores', username: 'DDflores1223'},

  ]);
};
