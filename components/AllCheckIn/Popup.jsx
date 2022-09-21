import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, gql } from '@apollo/client';

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


const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $comment: String!
    $created_at: timestamptz!
    $image_url: String!
    $name: String!
  ) {
    insert_check_in(objects:{comment: $comment, created_at: $created_at, image_url: $image_url, name: $name}) {
      returning { 
        id
        comment
        created_at
        image_url
        name
      }
    }
  }
`;

export default function Popup({ value, setValue }) {
  const { register, handleSubmit } = useForm();
  
  const [formState, setFormState] = useState({
      comment: '',
      created_at: '',
      image_url: '',
      name: ''
  });
  

  const onSubmission = (data) => {
    const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    data.date = currentDate;
    return data;  
  };
  const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  const [createLink] =  useMutation(CREATE_LINK_MUTATION, {
    variables: {
      comment: 'formState title',
      created_at: currentDate,
      image_url: 'formState image_url',
      name: "test"
    }
  });

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
        <form  onSubmit={(e) => {
        e.preventDefault();
        createLink();
      }}>
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
                name = 'comment'
                {...register('title')}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                id='image-url'
                label='Image URL'
                variant='outlined'
                name = 'image_url'
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
