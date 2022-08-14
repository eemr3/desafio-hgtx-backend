module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
        },
        birthDate: {
          type: Sequelize.DATEONLY,
          field: 'birth_date',
        },
        imageUrl: {
          type: Sequelize.STRING,
          field: 'image_url',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        underscored: true,
      },
    );
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
