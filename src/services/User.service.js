const bcrypt = require('bcryptjs');
const { User } = require('../database/models');
const baseError = require('../utils/errorBase');

const createNewUser = async data => {
  const {
    name,
    email,
    password,
    cpf,
    phone,
    status,
    role,
    birthDate,
    imageUrl,
  } = data;
  const userExist = await User.findOne({ where: { cpf } });
  if (userExist) {
    throw baseError(409, 'User already exists');
  }

  const pwdEncripted = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: pwdEncripted,
    cpf,
    phone,
    status,
    role,
    birthDate,
    imageUrl,
  });

  return user;
};

const findAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password', 'cpf'] },
  });

  return users;
};

const findUserById = async id => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['passaord', 'cpf'] },
  });

  if (!user) {
    throw baseError(404, 'User not found!');
  }

  return user;
};

const findUserByName = async name => {
  const user = await User.findOne({
    where: { name },
    attributes: { exclude: ['passaord', 'cpf'] },
  });

  if (!user) {
    throw baseError(404, 'User not found!');
  }

  return user;
};

const updateUser = async (id, data) => {
  const {
    name,
    email,
    password,
    cpf,
    phone,
    status,
    role,
    birthDate,
    imageUrl,
  } = data;

  const userExist = await User.findOne({ where: { id } });
  if (!userExist) {
    throw baseError(404, 'User not found!');
  }

  const pwdEncripted = await bcrypt.hash(password, 10);
  await User.update(
    {
      name,
      email,
      password: pwdEncripted,
      cpf,
      phone,
      status,
      role,
      birthDate,
      imageUrl,
    },
    { where: { id } },
  );

  return {
    id: userExist.id,
    name: name,
    email: email,
    password: pwdEncripted,
    cpf: cpf,
    phone: phone,
    status: status,
    role: role,
    birthDate: birthDate,
    imageUrl: imageUrl,
  };
};

const patchStatusAndRole = async (status, role, id) => {
  const userExists = await User.findOne({ where: { id } });
  if (!userExists) {
    throw baseError(404, 'User not found!');
  }

  await User.update({ status, role }, { where: { id } });
};

module.exports = {
  createNewUser,
  findAllUsers,
  findUserById,
  findUserByName,
  updateUser,
  patchStatusAndRole,
};
