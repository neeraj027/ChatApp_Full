import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { InputBox } from '../components/styles/StyledComponent';
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import FileMenu from '../components/Dialogs/FileMenu';
import { sampleMessages } from '../components/constant/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const user = {
  userId: 'asdf',
  name: 'Neeraj',
};

const Chat = () => {
  return (
    <>
      <Stack height={'90%'} bgcolor={'gray'}>
        {sampleMessages.map((i) => (
          <MessageComponent key={i._id} user={user} message={i} />
        ))}
      </Stack>
      <form style={{ height: '10%' }}>
        <Stack direction={'row'} height={'100%'}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder='Message' />
          <IconButton type='submit'>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      {/* <FileMenu /> */}
    </>
  );
};

export default AppLayout()(Chat);
