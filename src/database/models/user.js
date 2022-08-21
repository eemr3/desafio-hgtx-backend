module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cpf: DataTypes.STRING,
      phone: DataTypes.STRING,
      status: DataTypes.STRING,
      role: DataTypes.STRING,
      birthDate: {
        type: DataTypes.DATEONLY,
        field: 'birth_date',
      },
      // imageUrl: {
      //   type: DataTypes.STRING,
      //   field: 'image_url',
      // },
    },
    {
      tableName: 'users',
    },
  );

  User.associate = (models) => {
    User.hasOne(models.ImageFile, { foreignKey: 'userId', as: 'imageFiles' });
  };

  return User;
};
