const fs = require('fs/promises');

const readFile = async () => {
  const strKey = await fs.readFile('./jwt.evaluation.key', 'utf-8');

  return strKey;
};

module.exports = readFile;
