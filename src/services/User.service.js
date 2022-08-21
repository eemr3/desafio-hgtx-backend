const bcrypt = require('bcryptjs');
const { User, ImageFile } = require('../database/models');
const baseError = require('../utils/errorBase');

const MESSAGE_ERROR_404 = 'Usuário não encontrado!';

const createNewUser = async (data) => {
  const { name, email, password, cpf, phone, status, role, birthDate } = data;
  const userExist = await User.findOne({ where: { cpf } });
  if (userExist) {
    throw baseError(409, 'Usuário já cadastrado!');
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
  });

  return user;
};

const findAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password', 'cpf'] },
  });

  return users;
};

const findUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: {
      exclude: ['passaord'],
    },
    include: { model: ImageFile, as: 'imageFiles' },
  });

  if (!user) {
    throw baseError(404, MESSAGE_ERROR_404);
  }

  return user;
};

const findUserByName = async (name) => {
  const user = await User.findOne({
    where: { name },
    attributes: { exclude: ['passaord', 'cpf'] },
  });

  if (!user) {
    throw baseError(404, MESSAGE_ERROR_404);
  }

  return user;
};

const updateUser = async (id, data) => {
  const { name, email, cpf, phone, status, role, birthDate } = data;

  const userExist = await User.findOne({ where: { id } });
  if (!userExist) throw baseError(404, MESSAGE_ERROR_404);

  await User.update(
    { name, email, cpf, phone, status, role, birthDate },
    { where: { id } },
  );

  return {
    id: userExist.id,
    name,
    email,
    cpf: userExist.cpf,
    phone,
    status,
    role,
    birthDate,
  };
};

const patchStatusAndRole = async (status, role, id) => {
  const userExists = await User.findOne({ where: { id } });
  if (!userExists) {
    throw baseError(404, MESSAGE_ERROR_404);
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
