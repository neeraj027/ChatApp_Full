import { Box, Button, Modal, Typography } from '@mui/material';
import React, { memo, useState } from 'react';
import { fileFormat } from '../../lib/features';
import RenderAttachment from './RenderAttachment';

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?.userId;

  const timeAgo = new Date(createdAt).toLocaleTimeString();

  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            position={'absolute'}
            top={'50%'}
            left={'50%'}
            style={{
              transform: 'translate(-50%, -50%)',
              borderRadius: '0.5rem',
            }}
            width={'700px'}
            backgroundColor={'white'}
            padding={'5rem'}
            overflow={'hidden'}
          >
            <img
              draggable={false}
              src={attachments[0].url}
              style={{
                objectFit: 'contain',
                width: '100%',
                userSelect: 'none',
              }}
              alt='attachment'
            />
            <Button
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                fontWeight: 'bolder',
              }}
              variant='outlined'
              onClick={() => setOpen(false)}
            >
              X
            </Button>
          </Box>
        </Modal>
      )}
      <div
        style={{
          alignSelf: sameSender ? 'flex-end' : 'flex-start',
          backgroundColor: 'white',
          padding: '0.5rem',
          borderRadius: '0.5rem',
          margin: '0.5rem',
          width: 'fit-content',
          color: 'black',
        }}
      >
        {!sameSender && (
          <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>
            {sender?.name}
          </div>
        )}
        {attachments.length > 0 &&
          attachments.map((i, index) => {
            const url = i.url;
            const file = fileFormat(url);

            return (
              <Box key={index}>
                <a
                  // href={url}
                  onClick={() => setOpen(true)}
                  target='_blank'
                  // download
                  style={{ color: 'black' }}
                >
                  {RenderAttachment({ file, url })}
                </a>
              </Box>
            );
          })}
        {content && <Typography>{content}</Typography>}

        {
          <Typography variant='caption' color={'GrayText'}>
            {timeAgo}
          </Typography>
        }
      </div>
    </>
  );
};

export default memo(MessageComponent);
