const express = require('express');
const UserController = require('../../controllers/User.controller');

const routes = express.Router();

routes.get('/search', UserController.findUserByName);
routes.get('/:id', UserController.findUserById);
routes.get('/', UserController.findAllUsers);
routes.post('/', UserController.createNewUser);
routes.put('/:id', UserController.updateUser);

module.exports = routes;
