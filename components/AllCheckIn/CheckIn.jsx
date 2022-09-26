import * as React from 'react'
import {
  Box,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'
import CheckInTable from './CheckInTable'
import {
  StyledGrid,
  ButtonGrid,
  StyledButton,
  StyledTypography,
} from './components-styled'
import Popup from './Popup'

export default function CheckIn() {
  const [value, setValue] = React.useState({ isOpen: false, id: '' })
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
              <StyledButton
                onClick={() => {
                  setValue({ isOpen: true })
                }}
              >
                Add Check In
              </StyledButton>
              <Popup value={value} setValue={setValue} />
            </Box>
          </ButtonGrid>
        </StyledGrid>
      </Container>

      <Divider />
      <Toolbar />

      <CheckInTable />
    </>
  )
}
