const express = require('express');
const UserController = require('../../controllers/User.controller');
const authMiddleware = require('../../middlewares/authMIddleware');
const { userSchema } = require('../../schemas/User.schema');
const { validateUser } = require('../../middlewares/validateMiddleware');
const multerError = require('../../middlewares/multerError');
const authMiddlewareAdmin = require('../../middlewares/authMIddlewareAdmin');

const routes = express.Router();

routes.get('/search', authMiddleware, UserController.findUserByName);
routes.get('/:id', authMiddleware, UserController.findUserById);
routes.get('/', authMiddleware, UserController.findAllUsers);
routes.post(
  '/',
  multerError,
  validateUser(userSchema),
  UserController.createNewUser,
);
routes.put(
  '/admin/:id',
  authMiddleware,
  authMiddlewareAdmin,
  UserController.patchStatusAndRole,
);
routes.put('/:id', authMiddleware, multerError, UserController.updateUser);

module.exports = routes;
