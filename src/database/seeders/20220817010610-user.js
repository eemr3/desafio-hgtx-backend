'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'admin@email.com',
          password: '$2a$10$4ECC18b2ZFQWtNLxA9uNe.txZbKIXZgMsXB5r0i4YqezBlmdAMF/i', //adim123
          cpf: '12345678910',
          phone: '62999997777',
          status: 'ativo',
          role: 'administrador',
          birth_date: '1984-03-12',
          image_url: 'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
