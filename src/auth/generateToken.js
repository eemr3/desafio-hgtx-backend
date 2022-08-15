const jwt = require('jsonwebtoken');
const key = require('../utils/readFileKey');

const gnerateToken = async data => {
  const config = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };
  const SECRETY_KEY = await key();
  const token = jwt.sign(data, SECRETY_KEY, config);

  return token;
};

module.exports = gnerateToken;
