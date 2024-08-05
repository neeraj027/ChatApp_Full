const fileFormat = (url = '') => {
  const fileExtention = url.split('.').pop();

  if (
    fileExtention === 'mp4' ||
    fileExtention === 'webp' ||
    fileExtention === 'ogg'
  )
    return 'video';
  if (fileExtention === 'mp3' || fileExtention === 'wev') return 'audio';
  if (
    fileExtention === 'png' ||
    fileExtention === 'jpg' ||
    fileExtention === 'jpeg' ||
    fileExtention === 'gif'
  )
    return 'image';

  return 'file';
};

const transformImage = (url = '', width = 100) => url;

export { fileFormat, transformImage };
