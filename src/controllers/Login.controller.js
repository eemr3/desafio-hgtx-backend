const loginServuce = require('../services/Login.service');

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginServuce.signIn(email, password);
    return res.status(200).json(user);
  } catch (error) {
    if (error.status === 401) {
      return res.status(error.status).json({ message: error.message });
    }
    return console.log(error);
  }
};

module.exports = {
  signIn,
};
