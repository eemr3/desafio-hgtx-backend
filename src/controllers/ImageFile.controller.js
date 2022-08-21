const ImageFileServie = require('../services/ImageFile.service');

const createAvatarProfileUser = async (req, res) => {
  const { userId } = req.body;
  const url = await ImageFileServie.createAvatarProfileUser({
    userId,
    imageUrl: `http://localhost:3333/images/${req.file.originalname}`,
  });

  return res.status(201).json(url);
};

module.exports = {
  createAvatarProfileUser,
};
