const express = require('express');
const ImageFileController = require('../../controllers/ImageFile.controller');
const multerError = require('../../middlewares/multerError');

const routes = express.Router();

routes.post('/', multerError, ImageFileController.createAvatarProfileUser);

module.exports = routes;
