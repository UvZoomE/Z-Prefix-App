/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    {id: 1, userId: 2, title: 'Howdy', content: 'I am a cowboy'},
    {id: 2, userId: 4, title: 'My name is Brandon', content: 'This is my story'},
    {id: 3, userId: 5, title: 'I am david flores the 3rd', content: 'Nice to meet you'}
  ]);
};
