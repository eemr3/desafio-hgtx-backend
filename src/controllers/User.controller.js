const UserService = require('../services/User.service');

const createNewUser = async (req, res) => {
  const { name, email, password, cpf, phone, status, role, birthDate } = req.body;
  try {
    const user = await UserService.createNewUser({
      name,
      email,
      password,
      cpf,
      phone,
      status,
      role,
      birthDate,
      imageUrl: `http://localhost:3333/images/${req.file.originalname}`,
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
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
    const { name, email, password, cpf, phone, status, role, birthDate } = req.body;
    const user = await UserService.updateUser(id, {
      name,
      email,
      password,
      cpf,
      phone,
      status,
      role,
      birthDate,
      imageUrl: `http://localhost:3333/images/${req.file.originalname}`,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const patchStatusAndRole = async (req, res) => {
  const { status, role } = req.body;
  const { id } = req.params;

  await UserService.patchStatusAndRole(status, role, id);

  return res.status(200).send();
};

module.exports = {
  createNewUser,
  findAllUsers,
  findUserById,
  findUserByName,
  updateUser,
  patchStatusAndRole,
};
