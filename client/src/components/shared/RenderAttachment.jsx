import { FileOpen as FileOpenIcon, Opacity, Scale } from '@mui/icons-material';
import React from 'react';
import { transformImage } from '../../lib/features';
import { styled } from '@mui/material';

const StyledImage = styled('img')({
  borderRadius: '0.5rem',
  userSelect: 'none',
  '&:hover': {
    opacity: 0.8,
  },
});

const RenderAttachment = ({ file, url }) => {
  switch (file) {
    case 'video':
      return (
        <video
          src={url}
          preload='none'
          width={'200px'}
          height={'200px'}
          controls
        />
      );

    case 'audio':
      return <audio src={url} preload='none' controls />;

    case 'image':
      return (
        <StyledImage
          draggable={false}
          src={transformImage(url, 200)}
          alt='attachment'
          width={'300px'}
          height={'200px'}
          style={{
            objectFit: 'contain',
          }}
        />
      );

    case 'audio':
      return <audio src={url} preload='none' controls />;

    default:
      return <FileOpenIcon />;
  }
};

export default RenderAttachment;
