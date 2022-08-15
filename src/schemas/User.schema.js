const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  cpf: Joi.string().min(11).max(11).required(),
  status: Joi.string().required(),
  role: Joi.string().required(),
});

module.exports = {
  userSchema,
};
