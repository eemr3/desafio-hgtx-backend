module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cpf: DataTypes.STRING,
      phone: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      birthDate: {
        type: DataTypes.DATEONLY,
        field: 'birth_date',
      },
      imageUrl: {
        type: DataTypes.STRING,
        field: 'image_url',
      },
    },
    {
      tableName: 'users',
    },
  );
  return User;
};
