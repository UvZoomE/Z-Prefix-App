const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.json())
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || 'development']);


app.get('/api/users', (req, res) => {
  knex('new_user')
  .select('*')
  .then(data => res.status(200).json(data))
  .catch(err => {
    console.error(err)
    res.status(404).json({
      message:
      'The data you are looking for could not be found. Please try again'
    })})
})

app.get('/api/users/:id', (req, res) => {
  knex('new_user')
  .select('*')
  .where('id', req.params.id)
  .then(data => res.status(200).json(data))
  .catch(err => {
    console.error(err)
    res.status(404).json({
      message:
      'The data you are looking for could not be found. Please try again'
    })})
})

app.post('/api/users', (req, res) => {
  knex('new_user')
  .insert(req?.body, ['*'])
  .then(data => {
    res.status(204).json(data)
  })
  .catch(err => {
    console.log(err)
    res.status(404).json({
      message: "Could not Post data, try again."
    })
  })
})

app.delete('/api/users/:id', (req, res) => {
  knex('new_user')
  .select('*')
  .where('id', req.params.id)
  .delete()
  .then(data => {
    res.status(202).json(data)
  })
  .catch(err => {
    console.error(err)
    res.status(404).json({
      message: "Sorry, could not delete requested entry."
    })
  })
})

app.patch('/api/users', (req, res) => {
  knex('new_user')
  .select('*')
  .where('id', req.body.id)
  .update(req?.body)
  .then(data => {
    res.status(202).send(data)
  })
  .catch(err => {
    res.status(404).json({
      message: "Sorry, we could not find the movie you were looking for"
    })
  })
})

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})