const router = require('express').Router();
const pool = require('../db')
const authorization = require('../middleware/authorization')


router.get('/', authorization, async(req, res) => {
  try {
    const user = await pool.query("SELECT first_name, last_name FROM users WHERE id = $1", [req.user])

    res.json(user.rows[0])

  } catch (err) {
    console.error(err);
    res.status(500).json('server error')
  }
})

module.exports = router;
