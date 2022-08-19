const jwt = require('jsonwebtoken');
const key = require('../utils/readFileKey');

const decodedToken = async (token) => {
  try {
    const SECRETY_KEY = await key();
    const decoded = jwt.verify(token, SECRETY_KEY);
    return decoded;
  } catch (error) {
    return false;
  }
};

module.exports = decodedToken;
