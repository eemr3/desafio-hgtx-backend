const { expect } = require('chai');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const LoginService = require('../../../services/Login.service');
const LoginController = require('../../../controllers/Login.controller');

const UserService = require('../../../services/User.service');
const UserController = require('../../../controllers/User.controller');
const mocks = require('../../mock/User');

describe('Testa os controllers da rota /login', () => {
  const res = {};
  const req = {};

  describe('Testa se houve sucesso na requisição login', () => {
    before(() => {
      sinon.stub(LoginService, 'signIn').resolves(3);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.body = mocks.mockLogin;
    });

    after(() => {
      LoginService.signIn.restore();
    });

    it('valida resposta HTTP status 200', async () => {
      await LoginController.signIn(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('valida se traz o retorno do produto criado', async () => {
      const token = await LoginController.signIn(req, res);
      expect(token).to.be.an('object');
    });
  });
});

describe('Testa os controllers da rota /users', () => {
  const res = {};
  const req = {};

  describe('valida busca de todos os usuários', () => {
    before(() => {
      sinon.stub(UserService, 'findAllUsers').resolves(1);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      UserService.findAllUsers.restore();
    });

    it('valida retorno da busca', async () => {
      await UserController.findAllUsers(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('valida se traz o retorno da busca', async () => {
      const token = await UserController.findAllUsers(req, res);
      expect(token).to.be.an('object');
    });
  });

  describe('valida busca de todos os usuários pelo "id"', () => {
    before(() => {
      sinon.stub(UserService, 'findUserById').resolves(1);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = sinon.stub().returns({ id: 1 });
    });

    after(() => {
      UserService.findUserById.restore();
    });

    it('valida retorno da busca', async () => {
      await UserController.findUserById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('valida se traz o retorno da busca', async () => {
      const token = await UserController.findUserById(req, res);
      expect(token).to.be.an('object');
    });
  });

  describe('valida busca de todos os usuários pelo "nome"', () => {
    before(() => {
      sinon.stub(UserService, 'findUserById').resolves(1);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.query = sinon.stub().returns({ name: 'John Doe' });
    });

    after(() => {
      UserService.findUserById.restore();
    });

    it('valida retorno da busca', async () => {
      await UserController.findUserById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('valida se traz o retorno da busca', async () => {
      const token = await UserController.findUserById(req, res);
      expect(token).to.be.an('object');
    });
  });
});
