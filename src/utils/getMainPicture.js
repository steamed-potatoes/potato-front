export const getMainPicture = (pictures) => {
  const defaultImage =
    'https://avatars.githubusercontent.com/u/71378543?s=200&v=4';
  if (Array.isArray(pictures) && pictures.length) {
    return pictures[0];
  }
  return defaultImage;
};
