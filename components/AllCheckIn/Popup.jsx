import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Box, Divider, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CreateButton from './components.styled';

export default function Popup({ value, setValue }) {
  const handleClose = () => {
    setValue({ isOpen: false });
  };
  return (
    <div>
      <Dialog
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
              maxWidth: '500px', // Set your width here
            },
          },
        }}
        open={value.isOpen}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '5px',
            }}
          >
            <Box>
              <Typography fontWeight='500'>New CheckIn</Typography>
            </Box>
            <Box>
              <CloseIcon cursor='pointer' onClick={handleClose} />
            </Box>
          </Box>

          <Box mb={2}>
            <TextField
              fullWidth
              id='check-in-title'
              label='Check In title'
              variant='outlined'
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id='image-url'
              label='Image URL'
              variant='outlined'
            />
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            cancel
          </Button>
          <Button variant='contained' onClick={() => deleteRow(value.id)}>
            Create CheckIn
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
