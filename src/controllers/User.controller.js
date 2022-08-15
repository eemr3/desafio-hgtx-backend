const UserService = require('../services/User.service');

const createNewUser = async (req, res) => {
  const user = await UserService.createNewUser(req.body);

  return res.status(201).json(user);
};

const findAllUsers = async (_req, res) => {
  const users = await UserService.findAllUsers();

  return res.status(200).json(users);
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.findUserById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const findUserByName = async (req, res) => {
  try {
    const { name } = req.query;

    const user = await UserService.findUserByName(name);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserService.updateUser(id, req.body);

    return res.status(200).json(user);
  } catch (error) {
    if (error.status === 404) {
      return res.status(error.status).json({ message: error.message });
    }
    return console.log(error);
  }
};

module.exports = {
  createNewUser,
  findAllUsers,
  findUserById,
  findUserByName,
  updateUser,
};
