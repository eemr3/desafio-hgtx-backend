const jwt = require('jsonwebtoken');
const SECRETY_KEY = require('../utils/readFileKey');

const gnerateToken = data => {
  const config = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };
  const token = jwt.sign(data, SECRETY_KEY, config);

  return token;
};

module.exports = {
  gnerateToken,
};
