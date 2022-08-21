module.exports = (sequelize, DataTypes) => {
  const ImageFile = sequelize.define(
    'ImageFile',
    {
      imageUrl: {
        type: DataTypes.STRING,
        field: 'image_url',
      },
    },
    {
      tableName: 'image_files',
      underscored: true,
      timestamps: false,
    },
  );

  ImageFile.associate = (models) => {
    ImageFile.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
  };
  return ImageFile;
};
