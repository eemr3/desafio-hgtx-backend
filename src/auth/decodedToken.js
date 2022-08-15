const jwt = require('jsonwebtoken');
const SECRETY_KEY = require('../utils/readFileKey');

const decodedToken = token => {
  try {
    const decoded = jwt.verify(token, SECRETY_KEY);
    return decoded;
  } catch (error) {
    return false;
  }
};

module.exports = {
  decodedToken,
};
