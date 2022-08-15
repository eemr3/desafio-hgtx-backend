const express = require('express');
const LoginController = require('../../controllers/Login.controller');

const routes = express.Router();

routes.post('/', LoginController.signIn);

module.exports = routes;
