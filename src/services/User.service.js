const { User } = require('../database/models');

const createNewUser = async data => {
  const user = await User.create(data);

  return user;
};

module.exports = {
  createNewUser,
};
