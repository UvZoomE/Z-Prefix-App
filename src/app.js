const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || 'development']);

app.get('/users', (req, res) => {
  knex
  .select('*')
  .from('new_user')
  .then(data => res.status(200).json(data))
  .catch(err =>
    res.status(404).json({
      message:
      'The data you are looking for could not be found. Please try again'
    }))
})

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})