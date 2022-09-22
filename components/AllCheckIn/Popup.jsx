import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_LINK_MUTATION } from "./Quries_gql";
import {
  Box,
  Divider,
  TextField,
  Typography,
  Button,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { DialogBox, SubmitButton, StyledDialog } from "./components-styled";
import CloseIcon from "@mui/icons-material/Close";

export default function Popup({ value, setValue }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createLink();
  };

  const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      comment: "test",
      created_at: currentDate,
      image_url: inputs.image_url,
      name: inputs.name,
    },
  });

  const handleClose = () => {
    setValue({ isOpen: false });
  };
  return (
    <div>
      <StyledDialog open={value.isOpen} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogBox>
              <Box>
                <Typography fontWeight="500">New CheckIn</Typography>
              </Box>
              <Box>
                <CloseIcon cursor="pointer" onClick={handleClose} />
              </Box>
            </DialogBox>

            <Box mb={2}>
              <TextField
                fullWidth
                id="check-in-title"
                label="Check In title"
                variant="outlined"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                id="image_url"
                label="Image URL"
                variant="outlined"
                name="image_url"
                value={inputs.image_url || ""}
                onChange={handleChange}
              />
            </Box>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              cancel
            </Button>
            <SubmitButton variant="contained" type="submit">
              Create CheckIn
            </SubmitButton>
          </DialogActions>
        </form>
      </StyledDialog>
    </div>
  );
}
