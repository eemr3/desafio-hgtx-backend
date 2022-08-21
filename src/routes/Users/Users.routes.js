const express = require('express');
const UserController = require('../../controllers/User.controller');
const authMiddleware = require('../../middlewares/authMIddleware');
const { userSchema } = require('../../schemas/User.schema');
const { validateUser } = require('../../middlewares/validateMiddleware');
const authMiddlewareAdmin = require('../../middlewares/authMIddlewareAdmin');

const routes = express.Router();

routes.get('/search', authMiddleware, UserController.findUserByName);
routes.get('/:id', authMiddleware, UserController.findUserById);
routes.get('/', authMiddleware, UserController.findAllUsers);
routes.post('/', validateUser(userSchema), UserController.createNewUser);
routes.put(
  '/admin/:id',
  authMiddleware,
  authMiddlewareAdmin,
  UserController.patchStatusAndRole,
);
routes.put('/:id', authMiddleware, UserController.updateUser);

module.exports = routes;
