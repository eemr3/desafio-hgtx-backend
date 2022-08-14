const UserService = require('../services/User.service');

const createNewUser = async (req, res) => {
  const user = await UserService.createNewUser(req.body);

  return res.status(201).json(user);
};

module.exports = {
  createNewUser,
};
