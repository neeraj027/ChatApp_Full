import React from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';
import ChatList from '../specific/ChatList';
import { sampleChats } from '../constant/sampleData';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';

const AppLayout = () => {
  const AppFunc = (WrappedComponent) => {
    return (props) => {
      const { chatId } = useParams();

      const handleDeleteChat = (e, _id, groupChat) => {
        e.preventDefault();
        console.log('delete chat', _id, groupChat);
      };

      return (
        <>
          <Title />
          <Header />
          <Grid container height={'calc(100vh - 3rem)'}>
            <Grid
              item
              sm={4}
              md={3}
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
              lg={3}
            >
              <ChatList
                chat={sampleChats}
                chatId={chatId}
                onlineUsers={['1', '2']}
                handleDeleteChat={handleDeleteChat}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={5} lg={6} bgcolor={'gray'}>
              <WrappedComponent {...props} />
            </Grid>
            <Grid
              item
              sm={8}
              md={4}
              lg={3}
              sx={{
                display: { xs: 'none', md: 'block' },
                backgroundColor: 'rgba(0,0,0,0.9)',
              }}
            >
              <Profile />
            </Grid>
          </Grid>
        </>
      );
    };
  };
  return AppFunc;
};
export default AppLayout;
