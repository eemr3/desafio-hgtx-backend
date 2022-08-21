const { ImageFile } = require('../database/models');

const createAvatarProfileUser = async (data) => {
  const imageUrl = await ImageFile.create(data);

  return imageUrl;
};

module.exports = {
  createAvatarProfileUser,
};
