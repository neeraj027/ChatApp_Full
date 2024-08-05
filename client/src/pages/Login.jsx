import React, { useState } from 'react';
import { VisuallyHiddenInput } from '../components/styles/StyledComponent';
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { CameraAlt as CameraAltIcon } from '@mui/icons-material';

import { useFileHandler, useInputValidation } from '6pp';
import { usernameValidator } from '../utils/validator';
import img from '../assets/loginImg.avif';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const name = useInputValidation('');
  const username = useInputValidation('', usernameValidator);
  const bio = useInputValidation('');
  const password = useInputValidation('');
  const avatar = useFileHandler('single');

  return (
    <div
      style={{
        backgroundImage: `url(${img}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        component={'main'}
        maxWidth={'xs'}
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'rgba(255,255,255,0.6)',
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form>
                <TextField
                  label="Username"
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                <TextField
                  label="Password"
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  sx={{ marginY: '1rem' }}
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>

                <Typography align="center">OR</Typography>

                <Button
                  sx={{ marginTop: '1rem' }}
                  onClick={() => setIsLogin(false)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Register
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Register</Typography>
              <Stack position={'relative'}>
                <Avatar
                  sx={{
                    width: '6rem',
                    height: '6rem',
                    objectFit: 'contain',
                  }}
                  src={avatar.preview}
                />

                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    ':hover': {
                      backgroundColor: 'rgba(0,0,0,0.7)',
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              <form>
                <TextField
                  label="Full Name"
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  label="Username"
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={username.value}
                  onChange={username.changeHandler}
                />

                {username.error && (
                  <Typography variant="caption" color="error">
                    {username.error}
                  </Typography>
                )}

                <TextField
                  label="Bio"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />

                <TextField
                  label="Password"
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={password.value}
                  onChange={password.changeHandler}
                />

                <Button
                  sx={{ marginY: '1rem' }}
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>

                <Typography align="center">OR</Typography>

                <Button
                  sx={{ marginTop: '1rem' }}
                  onClick={() => setIsLogin(true)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
