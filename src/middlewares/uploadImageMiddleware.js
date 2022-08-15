const multer = require('multer');
const crypto = require('crypto');

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, 'public/uploads/');
  },

  filename(_req, file, cb) {
    const extensaoArquivo = file.originalname.split('.')[1];

    const novoNomeArquivo = crypto.randomBytes(64).toString('hex');

    cb(null, `${novoNomeArquivo}.${extensaoArquivo}`);
  },
});
module.exports = storage;
