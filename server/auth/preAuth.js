const expressJwt = require('express-jwt'),
      SECRET = process.env.SECRET;

module.exports = expressJwt({
    secret: SECRET
});