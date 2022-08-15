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
  const userExist = await User.findOne({ where: { id } });
  if (!userExist) {
    throw baseError(404, 'User not found!');
  }

  await User.update(data, { where: { id } });

  return {
    id: userExist.id,
    name: data.name,
    email: data.email,
    password: data.password,
    cpf: data.cpf,
    phone: data.phone,
    status: data.status,
    role: data.role,
    birthDate: data.birthDate,
    imageUrl: data.imageUrl,
  };
};

module.exports = {
  createNewUser,
  findAllUsers,
  findUserById,
  findUserByName,
  updateUser,
};
