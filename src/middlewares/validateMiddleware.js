const validateUser = (schema) => (req, res, next) => {
  const { name, email, password, cpf, status, role } = req.body;

  const { error } = schema.validate({
    name,
    email,
    password,
    cpf,
    status,
    role,
  });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = {
  validateUser,
};
