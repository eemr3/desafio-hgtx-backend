const multer = require('multer');
const storage = require('./uploadImageMiddleware');

const upload = multer({
  storage,
}).single('file');

const multerError = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(multer.MulterError);

      return res.status(400).json({ message: err.code });
    }
    if (err) {
      return console.log('else', err);
    }
    next();
  });
};

module.exports = multerError;
