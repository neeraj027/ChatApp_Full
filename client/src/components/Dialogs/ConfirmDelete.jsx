import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

const ConfirmDelete = ({ setDeleteModal, deleteModal }) => {
  return (
    <Dialog open={deleteModal} onClose={() => setDeleteModal(false)}>
      <DialogTitle>Are you sure you want to delete this group?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This will delete all the messages and media shared in this group.
        </DialogContentText>
        <Typography variant='body1'>This action cannot be undone.</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDeleteModal(false)}>Cancel</Button>
        <Button
          color='error'
          variant='contained'
          onClick={() => setDeleteModal(false)}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDelete;
