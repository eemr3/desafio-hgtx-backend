const multer = require('multer');

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, 'public/uploads/');
  },

  filename(_req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
module.exports = storage;
