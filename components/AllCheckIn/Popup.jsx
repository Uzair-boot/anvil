import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Divider,
  TextField,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Popup({ value, setValue }) {
  const { register, handleSubmit } = useForm();

  const onSubmission = (data) => {
    const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    data.date = currentDate;
    console.log(data);
    return data;
  };

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
              maxWidth: '500px',
            },
          },
        }}
        open={value.isOpen}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <form onSubmit={handleSubmit(onSubmission)}>
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
                {...register('title')}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                id='image-url'
                label='Image URL'
                variant='outlined'
                {...register('image-url')}
              />
            </Box>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              cancel
            </Button>
            <Button
              sx={{
                background: '#000000',
              }}
              variant='contained'
              type='submit'
            >
              Create CheckIn
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
