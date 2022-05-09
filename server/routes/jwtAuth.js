const pool = require('../db');
const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator')
const validInfo = require('../middleware/validInfo')
const authorization = require('../middleware/authorization')

router.post('/register', validInfo, async (req, res) => {
  try {

    const { firstName, lastName, email, password } = req.body;

    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
      email
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send('User already exist')
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query("INSERT INTO users (user_email, user_password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *",
    [email, bcryptPassword, firstName, lastName]);

    console.log(newUser.rows[0])

    const token = jwtGenerator(newUser.rows[0].id);

    res.json({ token })

  } catch (err) {
    console.error(err.message)
    res.status(500).send("server error")
  }
})

router.post('/login', validInfo, async(req, res) => {
  try {

    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length === 0) {
      return res.status(401).send("Password or Email is incorrect.")
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].user_password)

    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect")
    }

    const token = jwtGenerator(user.rows[0].id);

    res.json({ token })

  } catch (err) {
    console.error(err.message)
  }
})

router.get("/verify", authorization, async (req, res) => {
  try {
    res.json(true)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");

  }
})

module.exports = router;