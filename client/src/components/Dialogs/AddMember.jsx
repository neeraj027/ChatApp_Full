import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

const AddMember = () => {
  return (
    <Dialog open>
      <DialogTitle>Are you sure you want to delete this group?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This will delete all the messages and media shared in this group.
        </DialogContentText>
        <Typography variant='body1'>This action cannot be undone.</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default AddMember;
