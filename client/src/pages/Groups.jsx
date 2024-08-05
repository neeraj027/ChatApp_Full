import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  Grid,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import { memo, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from '../components/styles/StyledComponent';
import AvatarCard from '../components/shared/AvatarCard';
import { sampleChats } from '../components/constant/sampleData';
import ConfirmDelete from '../components/Dialogs/ConfirmDelete';
import AddMember from '../components/Dialogs/AddMember';

const Groups = () => {
  const chatId = useSearchParams()[0].get('group');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState('');
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState('');
  const [edit, setEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const isAddMember = true;

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setGroupName(`New Group ${chatId}`);
    setGroupNameUpdatedValue(`New Group ${chatId}`);

    return () => {
      setGroupName('');
      setGroupNameUpdatedValue('');
      setEdit(false);
    };
  }, [chatId]);

  console.log(chatId);

  const updateGroupName = () => {
    setEdit(false);
    setGroupName(groupNameUpdatedValue);
  };

  const IconBtns = (
    <Box
      sx={{
        gap: '1rem',
        width: '100%',
        display: 'flex',
        justifyContent: {
          xs: 'space-between',
          sm: 'start',
        },
      }}
    >
      <Tooltip title='Back'>
        <IconButton onClick={() => navigate('/')}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>

      {groupName &&
        (edit ? (
          <>
            <TextField
              variant='standard'
              value={groupNameUpdatedValue}
              onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
            />
            <Tooltip title='Done'>
              <IconButton onClick={updateGroupName}>
                <DoneIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Typography variant='h5' fontWeight={'600'} alignSelf={'center'}>
              {groupName}
            </Typography>

            <Tooltip title='Edit Group Name'>
              <IconButton onClick={() => setEdit(true)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </>
        ))}

      <Tooltip title='Menu'>
        <IconButton
          sx={{
            display: {
              xs: '',
              sm: 'none',
            },
          }}
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );

  return (
    <Grid container height={'100vh'}>
      {
        <ConfirmDelete
          setDeleteModal={setDeleteModal}
          deleteModal={deleteModal}
        />
      }

      {isAddMember && <AddMember />}
      <Grid
        item
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
        sm={3}
        bgcolor={'wheat'}
      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={9}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem 1rem',
          position: 'relative',
          alignItems: 'center',
        }}
      >
        {IconBtns}

        {groupName && (
          <>
            <Box
              width={'100%'}
              maxWidth={'30rem'}
              height={'100%'}
              display={'flex'}
              flexDirection={'column'}
              gap={'1rem'}
              alignItems={'center'}
            >
              <Box
                sx={{
                  marginTop: '1rem',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant='h6'>Group Members</Typography>

                <Tooltip title='Add Member'>
                  <IconButton>
                    <PersonAddIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Stack
                // maxWidth={'40rem'}
                width={'100%'}
                bgcolor={'black'}
                maxHeight={'30rem'}
                height={'100%'}
                spacing={'2rem'}
                overflow={'auto'}
                sx={{
                  padding: {
                    xs: '0',
                    sm: '1rem',
                    md: '1rem 4rem',
                  },
                  borderRadius: '1rem',
                }}
              >
                {/* Members */}
              </Stack>
              <Button
                sx={{
                  width: '50%',
                  gap: '5px',
                }}
                onClick={() => setDeleteModal(true)}
                variant='outlined'
                color='error'
              >
                <DeleteIcon fontSize='small' />
                Delete Group
              </Button>
            </Box>
          </>
        )}
      </Grid>
      <Drawer
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
          },
        }}
        open={mobileMenuOpen}
        onClick={handleMobileMenuClose}
      >
        <GroupList w='80vw' myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = '100%', myGroups = [], chatId }) => {
  return (
    <Stack width={w}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography variant='h6'>No groups found</Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={'row'} alignItems={'center'}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});
export default Groups;
