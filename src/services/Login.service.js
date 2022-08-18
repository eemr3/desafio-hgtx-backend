const bcrypt = require('bcryptjs');
const { User } = require('../database/models');
const gnerateToken = require('../auth/generateToken');
const erroBase = require('../utils/errorBase');

const signIn = async (useEmail, password) => {
  const user = await User.findOne({ where: { email: useEmail } });

  if (!user) throw erroBase(401, 'Usuário ou senha incorretos');

  const pdwDecripted = await bcrypt.compare(password, user.password);

  if (!pdwDecripted) throw erroBase(401, 'Usuário ou senha incorretos');

  const { id, name, email, role, imageUrl } = user;

  const token = await gnerateToken({ id, name, email, role });

  return {
    id,
    name,
    email,
    role,
    token,
    imageUrl,
  };
};

module.exports = { signIn };
