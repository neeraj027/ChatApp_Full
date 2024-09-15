import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { sampleUser } from '../constant/sampleData';
import { useState } from 'react';
import UserItem from '../shared/UserItem';

const AddMember = () => {
  const [members, setMembers] = useState(sampleUser);
  const [selectedmembers, setSelectedMembers] = useState([]);
  const selectMemberHandler = (id) => {
    if (selectedmembers.includes(id)) {
      setSelectedMembers((perv) =>
        perv.filter((currentElement) => {
          return currentElement !== id;
        })
      );
    } else {
      setSelectedMembers((perv) => [...perv, id]);
    }
  };

  return (
    <Dialog open>
      <Stack
        direction={'column'}
        width={'25rem'}
        maxHeight={'80vh'}
        overflow={'auto'}
        p={{ xs: '1rem', sm: '2rem' }}
      >
        <DialogTitle textAlign={'center'}>Add Members</DialogTitle>
        <TextField placeholder='Group Name' />
        <Typography variant={'h6'}>Members</Typography>

        <Stack>
          {members.map((i) => {
            return (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedmembers.includes(i._id)}
              />
            );
          })}
        </Stack>
        <Stack direction={'row'} width={'100%'} justifyContent={'space-evenly'}>
          <Button color='error'>Cancel</Button>
          <Button variant='contained'>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMember;
