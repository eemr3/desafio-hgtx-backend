const decodedToken = require('../auth/decodedToken');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).json({ message: 'Token not found' });
  }

  const result = await decodedToken(token);

  if (!result) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  req.data = result;

  next();
};

module.exports = authMiddleware;
