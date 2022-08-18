const { expect } = require('chai');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../../../database/models');
const LoginService = require('../../../services/Login.service');
const UserService = require('../../../services/User.service');
const mocks = require('../../mock/User');

describe('Service - rota "/login"', () => {
  describe('Valida função signIn - invalido usuário não existe', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(null);
    });

    after(() => {
      User.findOne.restore();
    });

    it('Valida se não existe o usuário no banco', async () => {
      try {
        const result = await LoginService.signIn(mocks.mockLogin);
        console.log(result);
      } catch (error) {
        expect(error.message).to.be.equal('Usuário ou senha incorretos');
      }
    });
  });

  describe('Validar função signIn - caso sucesso', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(mocks.mockLoginResult);
      sinon.stub(bcrypt, 'compare').resolves(true);
      sinon.stub(jwt, 'sign').callsFake(() => {
        return Promise.resolve(
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6Ikthc3NpbmEgTGVtbWVyIiwiZW1haWwiOiJrw6Fzc2lhbGVtbWVyQHRlc3QuY29tIiwicm9sZSI6InVzdcOhcmlvIiwiaWF0IjoxNjYwODI1ODQ1LCJleHAiOjE2NjA5MTIyNDV9.J2jHNI93wdaJlwCGlhQoMDfEPncZP-yGUcQ-8iAWLx4',
        );
      });
    });
    after(() => {
      User.findOne.restore();
      jwt.sign.restore();
      bcrypt.compare.restore();
    });

    it('Login com sucesso', async () => {
      const result = await LoginService.signIn(mocks.mockLogin);

      expect(result.id).to.be.equal(3);
      expect(result.name).to.be.equal('Kassina Lemmer');
      expect(result.email).to.be.equal('kássialemmer@test.com');
      expect(result.role).to.be.equal('usuário');
      expect(result.token).to.be.equal(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6Ikthc3NpbmEgTGVtbWVyIiwiZW1haWwiOiJrw6Fzc2lhbGVtbWVyQHRlc3QuY29tIiwicm9sZSI6InVzdcOhcmlvIiwiaWF0IjoxNjYwODI1ODQ1LCJleHAiOjE2NjA5MTIyNDV9.J2jHNI93wdaJlwCGlhQoMDfEPncZP-yGUcQ-8iAWLx4',
      );
      expect(result.imageUrl).to.be.equal(
        'http://localhost:3333/images/423dd4892ae538ce64cf664df6252e56.jpg',
      );
    });
  });
});

describe('Service - rota "/users"', () => {
  describe('Valida função create', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(mocks.mockCreateUserReject);
      sinon.stub(User, 'create').resolves(mocks.mockCreateUserRsolve);
    });

    after(() => {
      User.findOne.restore();
      User.create.restore();
    });

    it('valida se o usuário já existe', async () => {
      try {
        await UserService.createNewUser(mocks.mockCreateUser);
      } catch (error) {
        expect(error.message).to.be.equal('Usuário já cadastrado!');
      }
    });
  });

  describe('valida usuário cirado com sucesso', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(mocks.mockCreateUserRsolve);
    });

    after(() => {
      User.create.restore();
      User.findOne.restore();
    });

    it('valida retorno do sucesso na criação do usuário', async () => {
      const user = await UserService.createNewUser(mocks.mockCreateUser);

      expect(user).to.deep.equals(mocks.mockCreateUserRsolve);
    });
  });

  describe('valida busca de todos os usuários', () => {
    before(() => {
      sinon.stub(User, 'findAll').resolves(mocks.mockFindAll);
    });

    after(() => {
      User.findAll.restore();
    });

    it('valida retorno da busca', async () => {
      const users = await UserService.findAllUsers();

      expect(users).to.deep.equals(mocks.mockFindAll);
    });
  });

  describe('valida busca por um usuário pelo id', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(mocks.mockFindById);
    });

    after(() => {
      User.findOne.restore();
    });

    it('valida retorno da busca', async () => {
      const user = await UserService.findUserById(1);

      expect(user).to.deep.equals(mocks.mockFindById);
    });
  });

  describe('valida busca por um usuário pelo nome', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(mocks.mockFindByName);
    });

    after(() => {
      User.findOne.restore();
    });

    it('valida retorno da busca', async () => {
      const user = await UserService.findUserById('John Doe');

      expect(user).to.deep.equals(mocks.mockFindByName);
    });
  });
});
