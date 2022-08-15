const authMiddlewareAdmin = async (req, res, next) => {
  const user = req.data;
  console.log(user.role !== 'administrator');
  if (user.role !== 'administrator') {
    return res
      .status(401)
      .json({ message: 'Unauthorized user you dont administrator' });
  }

  next();
};

module.exports = authMiddlewareAdmin;
