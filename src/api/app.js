const express = require('express');
const cors = require('cors');
const Routes = require('../routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public/uploads'));

app.use('/images', express.static('public/uploads'));

app.use('/users', Routes.UserRoutes);
app.use('/login', Routes.LoginRoutes);
app.use('/image-profile', Routes.ImageFileRoutes);

app.get('/', (_req, res) => res.send('Servidor esta no ar!'));

module.exports = app;
