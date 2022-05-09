const jwt = require("jsonwebtoken");
require("dotenv").config()

module.exports = async(req, res, next) => {
  try {
    // console.log(req.get('Content/type'))
    const jwtToken = req.get('token');
    // console.log(jwtToken)

    if(!jwtToken) {
      return res.status(403).json("Not Authorize")
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret)

    req.user = await payload?.user;

  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Not authorize");
  }
  next();
}