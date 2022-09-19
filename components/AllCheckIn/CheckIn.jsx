import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import CheckInTable from "./CheckInTable";
import {
  StyledGrid,
  ButtonGrid,
  StyledButton,
  StyledTypography,
} from "./components.styled";

export default function CheckIn() {
  return (
    <>
      <Container>
        <StyledGrid container>
          <Grid item sm={12} md={6} lg={6}>
            <Box>
              <StyledTypography>CheckIns</StyledTypography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </Typography>
            </Box>
          </Grid>
          <ButtonGrid item sm={12} md={6} lg={6}>
            <Box>
              <StyledButton>Add Check In</StyledButton>
            </Box>
          </ButtonGrid>
        </StyledGrid>
      </Container>

      <Divider />
      <Toolbar />

      <CheckInTable />
    </>
  );
}
