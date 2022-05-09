const express = require('express');
const app = express()
const cors = require('cors');

app.use('/dashboard', require('./routes/dashboard'))

app.use(express.json())
app.use(cors());

app.use('/auth', require('./routes/jwtAuth'))


app.listen(5000, () => {
  console.log('server is running at port 5000');
})